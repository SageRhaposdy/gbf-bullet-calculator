import { LocaleString } from './locale';

interface GbfItemOption {
  cssColorString?: string;
  iconFileName?: string;
}

export class GbfItem {
  protected _name: LocaleString;
  protected _slug: string;
  protected _cssColorString: string;
  protected _iconFileName?: string;

  constructor(name: LocaleString, slug: string, option?: GbfItemOption) {
    this._name = name;
    this._slug = slug;
    this._cssColorString = (option && option.cssColorString) || 'rgb(82, 82, 82)';
    this._iconFileName = option && option.iconFileName;
  }

  get name(): LocaleString {
    return this._name;
  }

  get slug(): string {
    return this._slug;
  }

  get cssColorString(): string {
    return this._cssColorString;
  }

  get iconFileName(): string | undefined {
    return this._iconFileName;
  }

  getDisplayName(locale: string = 'ja'): string {
    return this._name[locale] || this._name.ja || '';
  }
}

export interface RequiredCostResult {
  result: GbfItemCost[];
  remainingExclusions: GbfItemCost[];
}

export class GbfItemCost {
  protected _item: GbfItem;
  protected _quantity: number;

  constructor(item: GbfItem, quantity: number) {
    this._item = item;
    this._quantity = quantity;
  }

  get item(): GbfItem {
    return this._item;
  }

  get quantity(): number {
    return this._quantity;
  }

  sub(quantity: number): GbfItemCost {
    const remains = Math.max(this.quantity - quantity, 0);
    return new GbfItemCost(this.item, remains);
  }

  multiply(n: number): GbfItemCost {
    return new GbfItemCost(this.item, this.quantity * n);
  }

  calcRequiredCosts(option: {exclusionCosts?: GbfItemCost[]} = {}): RequiredCostResult {
    return {
      result: [this],
      remainingExclusions: option.exclusionCosts || []
    };
  }
}

export enum BulletType {
  PARABELLUM = 'PARABELLUM',
  RIFLE = 'RIFLE',
  CARTRIDGE = 'CARTRIDGE',
  AETHERIAL = 'AETHERIAL'
}

export class Bullet extends GbfItem {
  protected _bulletType: BulletType;
  protected _requiredCosts: GbfItemCost[];

  constructor(
    name: LocaleString,
    slug: string,
    bulletType: BulletType,
    requiredCosts: GbfItemCost[],
    option?: GbfItemOption
  ) {
    super(name, slug, option);
    this._bulletType = bulletType;
    this._requiredCosts = [...requiredCosts];
  }

  get bulletType(): BulletType {
    return this._bulletType;
  }

  get requiredCosts(): GbfItemCost[] {
    return this._requiredCosts;
  }
}

export class BulletCost extends GbfItemCost {
  protected _bullet: Bullet;
  protected _requiredCostsCache: RequiredCostResult | null;
  protected _exclusionCache: GbfItemCost[] | null;

  constructor(bullet: Bullet, quantity: number) {
    super(bullet, quantity);
    this._bullet = bullet;
    this._requiredCostsCache = null;
    this._exclusionCache = null;
  }

  get bullet(): Bullet {
    return this._bullet;
  }

  sub(quantity: number): BulletCost {
    const remains = Math.max(this.quantity - quantity, 0);
    return new BulletCost(this._bullet, remains);
  }

  multiply(n: number): BulletCost {
    return new BulletCost(this._bullet, this.quantity * n);
  }

  calcRequiredCosts(option: {exclusionCosts?: GbfItemCost[]} = {}): RequiredCostResult {
    const exclusions = [...(option.exclusionCosts || [])];

    if (this._requiredCostsCache && this._exclusionCache) {
      const isSameLength = this._exclusionCache.length === exclusions.length;
      const isSameList = isSameLength && this._exclusionCache.every((ex, index) => ex === exclusions[index]);

      if (isSameList) {
        return this._requiredCostsCache;
      }
    }

    const remainingExclusions = [...exclusions];

    type costObj = { item: GbfItem; quantity: number };
    const costMap: Map<string, costObj> = new Map<string, costObj>();
    const costList: costObj[] = [];

    const itemCostList = this._bullet.requiredCosts.map((c) => {
      const exclusionIndex = remainingExclusions.findIndex((ex) => ex.item.slug === c.item.slug);

      let exclusionNum = 0;
      const isExcluded = exclusionIndex >= 0;

      if (isExcluded) {
        const exclusionCost = remainingExclusions[exclusionIndex];
        const exclusionRemains = exclusionCost.sub(c.quantity);

        if (exclusionRemains.quantity > 0) {
          remainingExclusions.splice(exclusionIndex, 1, exclusionRemains);
        } else {
          remainingExclusions.splice(exclusionIndex, 1);
        }

        exclusionNum = exclusionCost.quantity;
      }

      return c.multiply(this.quantity)
        .sub(exclusionNum)
        .calcRequiredCosts({ exclusionCosts: remainingExclusions })
        .result;
    }).flat();

    for (const icost of itemCostList) {
      const cost = costMap.get(icost.item.slug);
      if (cost) {
        cost.quantity += icost.quantity;
      } else {
        const newCost = { item: icost.item, quantity: icost.quantity };
        costMap.set(icost.item.slug, newCost);
        costList.push(newCost);
      }
    }

    const costResult = costList
      .filter((c) => c.quantity > 0)
      .map((c) => new GbfItemCost(c.item, c.quantity));

    const result = {
      result: costResult,
      remainingExclusions
    };

    this._exclusionCache = exclusions;
    this._requiredCostsCache = result;
    return result;
  }
}