import { Bullet, BulletCost, BulletType, GbfItem, GbfItemCost } from './gbf';

// アイテム
const ironCluster = new GbfItem({ja: '鉄鉱石', en: 'Iron Cluster'}, 'iron-cluster');
const blisteringOre = new GbfItem({ja: '赤熱鉱', en: 'Blistering Ore'}, 'blistering-ore');
const untamedFlame = new GbfItem({ja: '原初の砂', en: 'Untamed Flame'}, 'untamed-flame');
const prosperityFlame = new GbfItem({ja: '栄華の炎', en: 'Prosperity Flame'}, 'prosperity-flame');
const steelLiquid = new GbfItem({ja: 'リキッドスチール', en: 'Steel Liquid'}, 'steel-liquid');

const fireOrb = new GbfItem({ja: '炎の宝珠', en: 'Fire Orb'}, 'fire-orb');
const infernoOrb = new GbfItem({ja: '紅蓮の宝珠', en: 'Inferno Orb'}, 'inferno-orb');
const infernalWhorl = new GbfItem({ja: 'ファイア・ジーン', en: 'Infernal Whorl'}, 'infernal-whorl');
const waterOrb = new GbfItem({ja: '水の宝珠', en: 'Water Orb'}, 'water-orb');
const frostOrb = new GbfItem({ja: '霧氷の宝珠', en: 'Frost Orb'}, 'frost-orb');
const tidalWhorl = new GbfItem({ja: 'アクア・ジーン', en: 'Tidal Whorl'}, 'tidal-whorl');
const windOrb = new GbfItem({ja: '風の宝珠', en: 'Wind Orb'}, 'wind-orb');
const cycloneOrb = new GbfItem({ja: '烈空の宝珠', en: 'Cyclone Orb'}, 'cyclone-orb');
const tempestWhorl = new GbfItem({ja: 'ウィンド・ジーン', en: 'Tempest Whorl'}, 'tempest-whorl');
const earthOrb = new GbfItem({ja: '土の宝珠', en: 'Earth Orb'}, 'earth-orb');
const rumblingOrb = new GbfItem({ja: '大地の宝珠', en: 'Rumbling Orb'}, 'rumbling-orb');
const seismicWhorl = new GbfItem({ja: 'アース・ジーン', en: 'Seismic Whorl'}, 'seismic-whorl');
const lightOrb = new GbfItem({ja: '光の宝珠', en: 'Light Orb'}, 'light-orb');
const shiningOrb = new GbfItem({ja: '煌光の宝珠', en: 'Shining Orb'}, 'shining-orb');
const radiantWhorl = new GbfItem({ja: 'ホーリー・ジーン', en: 'Radiant Whorl'}, 'radiant-whorl');
const darkOrb = new GbfItem({ja: '闇の宝珠', en: 'Dark Orb'}, 'dark-orb');
const abysmOrb = new GbfItem({ja: '奈落の宝珠', en: 'Abysm Orb'}, 'abysm-orb');
const umbralWhorl = new GbfItem({ja: 'ダーク・ジーン', en: 'Umbral Whorl'}, 'umbral-whorl');

const hollowSoul = new GbfItem({ja: '虚ろなる魄', en: 'Hollow Soul'}, 'hollow-soul');
const corrodedCartridge = new GbfItem({ja: '錆びた薬莢', en: 'Corroded Cartridge'}, 'corroded-cartridge');
const primevalHorn = new GbfItem({ja: 'バハムートの紫電角', en: 'Primeval Horn'}, 'primeval-horn');
const bastionBlock = new GbfItem({ja: '要塞の壁片', en: 'Bastion Block'}, 'bastion-block');
const sandBrick = new GbfItem({ja: '砂レンガ', en: 'Sand Brick'}, 'sand-brick');
const coarseAllvium = new GbfItem({ja: '真理の土', en: 'Coarse Alluvium'}, 'coarse-alluvium');
const silverCentrum = new GbfItem({ja: '銀天の輝き', en: 'Silver Centrum'}, 'silver-centrum');
const explosiveMaterial = new GbfItem({ja: '赤色火薬の原料', en: 'Explosive Material'}, 'explosive-material');
const fineSandBottle = new GbfItem({ja: '綺麗な砂', en: 'Fine Sand Bottle'}, 'fine-sand-bottle');
const flyingSprout = new GbfItem({ja: '風切四つ葉', en: 'Flying Sprout'}, 'flying-sprout');
const flawedPrism = new GbfItem({ja: '星晶の欠片', en: 'Flawed Prism'}, 'flawed-prism');
const lacrimosa = new GbfItem({ja: 'ラクリモサ', en: 'Lacrimosa'}, 'lacrimosa');
const meteorite = new GbfItem({ja: 'メテオライト', en: 'Meteorite'}, 'meteorite');
const graySandstone = new GbfItem({ja: '灰白砂岩', en: 'Gray Sandstone'}, 'gray-sandstone');
const rustyEave = new GbfItem({ja: '錆びついた掛瓦', en: 'Rusty Eave'}, 'rusty-eave');
const antiqueCloth = new GbfItem({ja: '古代布', en: 'Antique Cloth'}, 'antique-cloth');
const bloodAmber = new GbfItem({ja: 'オルディネシュタイン', en: 'Blood Amber'}, 'blood-amber');

const resoluteReactor = new GbfItem({ja: 'プロミネンスリアクター', en: 'Resolute Reactor'}, 'resolute-reactor');
const fannedFin = new GbfItem({ja: '海神の扇尾', en: 'Fanned Fin'}, 'fanned-fin');
const genesisBud = new GbfItem({ja: '創樹の花蕾', en: 'Genesis Bud'}, 'genesis-bud');
const greenDragonEye = new GbfItem({ja: '嵐竜の琥珀眼', en: 'Green Dragon Eye'}, 'green-dragon-eye');
const primalBit = new GbfItem({ja: 'プライマルビット', en: 'Primal Bit'}, 'primal-bit');
const blackFogSphere = new GbfItem({ja: '黒霧の結晶', en: 'Black Fog Sphere'}, 'black-fog-sphere');

const brokenTeacup = new GbfItem({ja: '割れたティーカップ', en: 'Broken Teacup'}, 'broken-teacup');
const rawGemstone = new GbfItem({ja: '天然翡翠', en: 'Raw Gemstone'}, 'raw-gemstone');
const jumboBeastBone = new GbfItem({ja: '巨獣骨', en: 'Jumbo Beast Bone'}, 'jumbo-beast-bone');
const translucentSilk = new GbfItem({ja: '透き通るような絹', en: 'Translucent Silk'}, 'translucent-silk');
const maliceFragment = new GbfItem({ja: 'マリス・フラグメント', en: 'Malice Fragment'}, 'malice-fragment');

const ifritAnima = new GbfItem({ja: 'イフリートのアニマ', en: 'Ifrit Anima'}, 'ifrit-anima');
const redTome = new GbfItem({ja: '赤の書', en: 'Red Tome'}, 'red-tome');
const hellfireScroll = new GbfItem({ja: '業火の巻', en: 'Hellfire Scroll'}, 'hellfire-scroll');
const redDragonScale = new GbfItem({ja: '赤竜鱗', en: 'Red Dragon Scale'}, 'red-dragon-scale');
const trueFireAnima = new GbfItem({ja: '真なる火のアニマ', en: 'True Fire Anima'}, 'true-fire-anima');
const fireQuartz = new GbfItem({ja: '火晶のエレメント', en: 'Fire Quartz'}, 'fire-quartz');

const cocytusAnima = new GbfItem({ja: 'コキュートスのアニマ', en: 'Cocytus Anima'}, 'cocytus-anima');
const blueTome = new GbfItem({ja: '青の書', en: 'Blue Tome'}, 'blue-tome');
const floodScroll = new GbfItem({ja: '濁流の巻', en: 'Flood Scroll'}, 'flood-scroll');
const blueDragonScale = new GbfItem({ja: '青竜鱗', en: 'Blue Dragon Scale'}, 'blue-dragon-scale');
const trueWaterAnima = new GbfItem({ja: '真なる水のアニマ', en: 'True Water Anima'}, 'true-water-anima');
const waterQuartz = new GbfItem({ja: '水晶のエレメント', en: 'Water Quartz'}, 'water-quartz');

const vohuManahAnima = new GbfItem({ja: 'ウォフマナフのアニマ', en: 'Vohu Manah Anima'}, 'vohu-manah-anima');
const brownTome = new GbfItem({ja: '橙の書', en: 'Brown Tome'}, 'brown-tome');
const thunderScroll = new GbfItem({ja: '地裂の巻', en: 'Thunder Scroll'}, 'thunder-scroll');
const brownDragonScale = new GbfItem({ja: '地竜鱗', en: 'Brown Dragon Scale'}, 'brown-dragon-scale');
const trueEarthAnima = new GbfItem({ja: '真なる土のアニマ', en: 'True Earth Anima'}, 'true-earth-anima');
const earthQuartz = new GbfItem({ja: '土晶のエレメント', en: 'Earth Quartz'}, 'earth-quartz');

const sagittariusAnima = new GbfItem({ja: 'サジタリウスのアニマ', en: 'Sagittarius Anima'}, 'sagittarius-anima');
const greenTome = new GbfItem({ja: '緑の書', en: 'Green Tome'}, 'green-tome');
const galeScroll = new GbfItem({ja: '疾風の巻', en: 'Gale Scroll'}, 'gale-scroll');
const greenDragonScale = new GbfItem({ja: '風竜鱗', en: 'Green Dragon Scale'}, 'green-dragon-scale');
const trueWindAnima = new GbfItem({ja: '真なる風のアニマ', en: 'True Wind Anima'}, 'true-wind-anima');
const windQuartz = new GbfItem({ja: '風晶のエレメント', en: 'Wind Quartz'}, 'wind-quartz');

const corowAnima = new GbfItem({ja: 'コロゥのアニマ', en: 'Corow Anima'}, 'corow-anima');
const whiteTome = new GbfItem({ja: '白の書', en: 'White Tome'}, 'white-tome');
const skylightScroll = new GbfItem({ja: '天光の巻', en: 'Skylight Scroll'}, 'skylight-scroll');
const whiteDragonScale = new GbfItem({ja: '白竜鱗', en: 'White Dragon Scale'}, 'white-dragon-scale');
const trueLightAnima = new GbfItem({ja: '真なる光のアニマ', en: 'True Light Anima'}, 'true-light-anima');
const lightQuartz = new GbfItem({ja: '光晶のエレメント', en: 'Light Quartz'}, 'light-quartz');

const diabloAnima = new GbfItem({ja: 'ディアボロスのアニマ', en: 'Diablo Anima'}, 'diablo-anima');
const blackTome = new GbfItem({ja: '黒の書', en: 'Black Tome'}, 'black-tome');
const chasmScroll = new GbfItem({ja: '深淵の巻', en: 'Chasm Scroll'}, 'chasm-scroll');
const blackDragonScale = new GbfItem({ja: '黒竜鱗', en: 'Black Dragon Scale'}, 'black-dragon-scale');
const trueDarkAnima = new GbfItem({ja: '真なる闇のアニマ', en: 'True Dark Anima'}, 'true-dark-anima');
const darkQuartz = new GbfItem({ja: '闇晶のエレメント', en: 'Dark Quartz'}, 'dark-quartz');

const fireGrimoire = new GbfItem({ja: '灼熱の書', en: 'Fire Grimoire'}, 'fire-grimoire');
const waterGrimoire = new GbfItem({ja: '水分の書', en: 'Water Grimoire'}, 'water-grimoire');
const earthGrimoire = new GbfItem({ja: '巨人の書', en: 'Earth Grimoire'}, 'earth-grimoire');
const windGrimoire = new GbfItem({ja: '風凪の書', en: 'Wind Grimoire'}, 'wind-grimoire');

const fireUrn = new GbfItem({ja: '火のプシュケー', en: 'Fire Urn'}, 'fire-urn');
const waterUrn = new GbfItem({ja: '水のプシュケー', en: 'Water Urn'}, 'water-urn');
const earthUrn = new GbfItem({ja: '土のプシュケー', en: 'Earth Urn'}, 'earth-urn');
const windUrn = new GbfItem({ja: '風のプシュケー', en: 'Wind Urn'}, 'wind-urn');
const lightUrn = new GbfItem({ja: '光のプシュケー', en: 'Light Urn'}, 'light-urn');
const darkUrn = new GbfItem({ja: '闇のプシュケー', en: 'Dark Urn'}, 'dark-urn');

const rubeusCentrum = new GbfItem({ja: '赤星の輝き', en: 'Rubeus Centrum'}, 'rubeus-centrum');
const indicusCentrum = new GbfItem({ja: '青星の輝き', en: 'Indicus Centrum'}, 'indicus-centrum');
const luteusCentrum = new GbfItem({ja: '黄星の輝き', en: 'Luteus Centrum'}, 'luteus-centrum');
const galbinusCentrum = new GbfItem({ja: '緑星の輝き', en: 'Galbinus Centrum'}, 'galbinus-centrum');
const niveusCentrum = new GbfItem({ja: '白星の輝き', en: 'Niveus Centrum'}, 'niveus-centrum');
const aterCentrum = new GbfItem({ja: '黒星の輝き', en: 'Ater Centrum'}, 'ater-centrum');

const tearsOfTheApocalypse = new GbfItem({ja: '終末の暗晶', en: 'Tears Of The Apocalypse'}, 'tears-of-the-apocalypse');
const damascusCrystal = new GbfItem({ja: 'ダマスカス骸晶', en: 'Damascus Crystal'}, 'damascus-crystal');
const abyssalWing = new GbfItem({ja: '漆黒の棘翅', en: 'Abyssal Wing'},'abyssal-wing');
const cunningDevilsHorn = new GbfItem({ja: '狡知の魔角', en: 'Cunning Devil\'s Horn'},'cunning-devils-horn');
const ultimateMemory = new GbfItem({ja: 'アルテマメモリ', en: 'Ultimate Memory'},'ultimate-memory');
const goldBrick = new GbfItem({ja: 'ヒヒイロカネ', en: 'Gold Brick'},'golden-brick');
const provenanceCrystal = new GbfItem({ja: '極理の結晶', en: 'Provenance Crystal'},  'provenance-crystal');
const eternitySand = new GbfItem({ja: '刻流砂', en: 'Eternity Sand'},'eternity-sand');
const apocalypticBlackFeather = new GbfItem({ja: '終末を齎す黒羽', en: 'Apocalyptic Black Feather'},'apocalyptic-black-feather');



// パラベラム弾
const ironBullet = new Bullet(
  {ja: 'アイアンバレット', en: 'Iron Bullet'}, 'iron-bullet',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 2),
    new GbfItemCost(blisteringOre, 2)
  ],
  {
    cssColorString: 'rgb(100, 100, 100)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const ironBullet2 = new Bullet(
  {ja: 'アイアンバレットII', en: 'Iron Bullet 2'}, 'iron-bullet-2',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 5),
    new GbfItemCost(blisteringOre, 5),
    new BulletCost(ironBullet, 1)
  ],
  {
    cssColorString: 'rgb(80, 80, 80)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const ironBullet3 = new Bullet(
  {ja: 'アイアンバレットIII', en: 'Iron Bullet 3'}, 'iron-bullet-3',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 12),
    new GbfItemCost(blisteringOre, 8),
    new BulletCost(ironBullet2, 2),
    new GbfItemCost(untamedFlame, 5)
  ],
  {
    cssColorString: 'rgb(60, 60, 60)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const ironBullet4 = new Bullet(
  {ja: 'アイアンバレットIV', en: 'Iron Bullet 4'}, 'iron-bullet-4',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 25),
    new GbfItemCost(blisteringOre, 20),
    new BulletCost(ironBullet3, 5),
    new GbfItemCost(prosperityFlame, 20)
  ],
  {
    cssColorString: 'rgb(40, 40, 40)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const ironBullet5 = new Bullet(
  {ja: 'アイアンバレットV', en: 'Iron Bullet 5'}, 'iron-bullet-5',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 40),
    new GbfItemCost(blisteringOre, 30),
    new BulletCost(ironBullet4, 3),
    new BulletCost(ironBullet3, 2)
  ],
  {
    cssColorString: 'rgb(20, 20, 20)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const rapidBullet = new Bullet(
  {ja: 'ライトバレット', en: 'Rapid Bullet'}, 'rapid-bullet',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 2),
    new GbfItemCost(prosperityFlame, 2),
    new GbfItemCost(steelLiquid, 3)
  ],
  {
    cssColorString: 'rgb(204,203,15)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const rapidBullet2 = new Bullet(
  {ja: 'ライトバレットII', en: 'Rapid Bullet 2'}, 'rapid-bullet-2',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 4),
    new GbfItemCost(prosperityFlame, 4),
    new GbfItemCost(steelLiquid, 7),
    new BulletCost(rapidBullet, 1)
  ],
  {
    cssColorString: 'rgb(190,189,14)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const rapidBullet3 = new Bullet(
  {ja: 'ライトバレットIII', en: 'Rapid Bullet 3'}, 'rapid-bullet-3',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 20),
    new GbfItemCost(prosperityFlame, 20),
    new GbfItemCost(steelLiquid, 20),
    new BulletCost(rapidBullet2, 2)
  ],
  {
    cssColorString: 'rgb(176,175,13)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const rapidBullet4 = new Bullet(
  {ja: 'ライトバレットIV', en: 'Rapid Bullet 4'}, 'rapid-bullet-4',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 30),
    new GbfItemCost(prosperityFlame, 30),
    new GbfItemCost(steelLiquid, 25),
    new BulletCost(rapidBullet3, 2)
  ],
  {
    cssColorString: 'rgb(161,160,12)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const flameBullet = new Bullet(
  {ja: 'フレイムバレット', en: 'Flame Bullet'}, 'flame-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet, 5),
    new GbfItemCost(fireOrb, 10),
    new GbfItemCost(infernalWhorl, 7),
    new GbfItemCost(prosperityFlame, 5)
  ],
  {
    cssColorString: 'rgb(161,74,56)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const poisonBullet = new Bullet(
  {ja: 'ポイズンバレット', en: 'Poison Bullet'}, 'poison-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet, 5),
    new GbfItemCost(waterOrb, 10),
    new GbfItemCost(tidalWhorl, 7),
    new GbfItemCost(prosperityFlame, 5)
  ],
  {
    cssColorString: 'rgb(117,59,161)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const sleepBullet = new Bullet(
  {ja: 'スリープバレット', en: 'Sleep Bullet'}, 'sleep-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet, 5),
    new GbfItemCost(windOrb, 10),
    new GbfItemCost(tempestWhorl, 7),
    new GbfItemCost(prosperityFlame, 5)
  ],
  {
    cssColorString: 'rgb(97,134,161)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const shieldBullet = new Bullet(
  {ja: 'バリアシード', en: 'Shield Bullet'}, 'shield-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(rapidBullet2, 5),
    new GbfItemCost(radiantWhorl, 20),
    new GbfItemCost(hollowSoul, 10),
    new GbfItemCost(prosperityFlame, 10)
  ],
  {
    cssColorString: 'rgb(204,176,26)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const charmBullet = new Bullet(
  {ja: 'チャームバレット', en: 'Charm Bullet'}, 'charm-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet, 5),
    new GbfItemCost(earthOrb, 10),
    new GbfItemCost(seismicWhorl, 7),
    new GbfItemCost(corrodedCartridge, 2)
  ],
  {
    cssColorString: 'rgb(207,80,155)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const paralyzeBullet = new Bullet(
  {ja: 'パラライズバレット', en: 'Paralyze Bullet'}, 'paralyze-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet5, 1),
    new BulletCost(rapidBullet4, 1),
    new GbfItemCost(primevalHorn, 2),
    new GbfItemCost(bastionBlock, 5)
  ],
  {
    cssColorString: 'rgb(100,161,160)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const healingBullet = new Bullet(
  {ja: 'ヒールバレット', en: 'Healing Bullet'}, 'healing-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet5, 1),
    new BulletCost(rapidBullet4, 1),
    new GbfItemCost(silverCentrum, 2),
    new GbfItemCost(bastionBlock, 5)
  ],
  {
    cssColorString: 'rgb(78,161,94)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

// ライフル弾
const fullMetalJacket = new Bullet(
  {ja: 'フルメタルジャケット', en: 'Full Metal Jacket'}, 'full-metal-jacket',
  BulletType.RIFLE,
  [
    new GbfItemCost(ironCluster, 3),
    new GbfItemCost(sandBrick, 3),
    new GbfItemCost(coarseAllvium, 7),
    new GbfItemCost(rumblingOrb, 2)
  ],
  {
    cssColorString: 'rgb(100, 100, 100)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const fullMetalJacket2 = new Bullet(
  {ja: 'フルメタルジャケットII', en: 'Full Metal Jacket 2'}, 'full-metal-jacket-2',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket, 1),
    new GbfItemCost(ironCluster, 7),
    new GbfItemCost(coarseAllvium, 10),
    new GbfItemCost(rumblingOrb, 5)
  ],
  {
    cssColorString: 'rgb(80, 80, 80)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const fullMetalJacket3 = new Bullet(
  {ja: 'フルメタルジャケットIII', en: 'Full Metal Jacket 3'}, 'full-metal-jacket-3',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket2, 2),
    new GbfItemCost(ironCluster, 12),
    new GbfItemCost(steelLiquid, 10),
    new GbfItemCost(untamedFlame, 12)
  ],
  {
    cssColorString: 'rgb(60, 60, 60)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const fullMetalJacket4 = new Bullet(
  {ja: 'フルメタルジャケットIV', en: 'Full Metal Jacket 4'}, 'full-metal-jacket-4',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket3, 5),
    new GbfItemCost(ironCluster, 25),
    new GbfItemCost(steelLiquid, 20),
    new GbfItemCost(sandBrick, 25)
  ],
  {
    cssColorString: 'rgb(40, 40, 40)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const fullMetalJacket5 = new Bullet(
  {ja: 'フルメタルジャケットV', en: 'Full Metal Jacket 5'}, 'full-metal-jacket-5',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket4, 5),
    new GbfItemCost(ironCluster, 30),
    new GbfItemCost(steelLiquid, 25),
    new GbfItemCost(sandBrick, 30)
  ],
  {
    cssColorString: 'rgb(20, 20, 20)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const exploder = new Bullet(
  {ja: 'エクスプローダー', en: 'Exploder'}, 'exploder',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket, 3),
    new GbfItemCost(explosiveMaterial, 4),
    new GbfItemCost(fineSandBottle, 7),
    new GbfItemCost(blisteringOre, 4)
  ],
  {
    cssColorString: 'rgb(188,177,32)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const exploder2 = new Bullet(
  {ja: 'エクスプローダーII', en: 'Exploder 2'}, 'exploder-2',
  BulletType.RIFLE,
  [
    new BulletCost(exploder, 1),
    new GbfItemCost(explosiveMaterial, 8),
    new GbfItemCost(fineSandBottle, 10),
    new GbfItemCost(blisteringOre, 8)
  ],
  {
    cssColorString: 'rgb(171,161,29)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const exploder3 = new Bullet(
  {ja: 'エクスプローダーIII', en: 'Exploder 3'}, 'exploder-3',
  BulletType.RIFLE,
  [
    new BulletCost(exploder2, 2),
    new GbfItemCost(explosiveMaterial, 8),
    new GbfItemCost(fineSandBottle, 15),
    new GbfItemCost(blisteringOre, 15)
  ],
  {
    cssColorString: 'rgb(156,147,26)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const armorPiercing = new Bullet(
  {ja: 'アーマーピアシング', en: 'Armor Piercing'}, 'armor-piercing',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket2, 3),
    new GbfItemCost(ironCluster, 5),
    new GbfItemCost(coarseAllvium, 5),
    new GbfItemCost(flyingSprout, 10)
  ],
  {
    cssColorString: 'rgb(200,78,72)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const armorPiercing2 = new Bullet(
  {ja: 'アーマーピアシングII', en: 'Armor Piercing 2'}, 'armor-piercing-2',
  BulletType.RIFLE,
  [
    new BulletCost(armorPiercing, 1),
    new GbfItemCost(ironCluster, 8),
    new GbfItemCost(coarseAllvium, 8),
    new GbfItemCost(flyingSprout, 14)
  ],
  {
    cssColorString: 'rgb(184,71,66)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const armorPiercing3 = new Bullet(
  {ja: 'アーマーピアシングIII', en: 'Armor Piercing 3'}, 'armor-piercing-3',
  BulletType.RIFLE,
  [
    new BulletCost(armorPiercing2, 2),
    new GbfItemCost(ironCluster, 18),
    new GbfItemCost(coarseAllvium, 24),
    new GbfItemCost(flyingSprout, 20)
  ],
  {
    cssColorString: 'rgb(165,64,59)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const silverBullet = new Bullet(
  {ja: 'シルバーバレット', en: 'Silver Bullet'}, 'silver-bullet',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket2, 3),
    new GbfItemCost(flawedPrism, 8),
    new GbfItemCost(seismicWhorl, 20),
    new GbfItemCost(lacrimosa, 5)
  ],
  {
    cssColorString: 'rgb(131,131,131)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const silverBullet2 = new Bullet(
  {ja: 'シルバーバレットII', en: 'Silver Bullet 2'}, 'silver-bullet-2',
  BulletType.RIFLE,
  [
    new BulletCost(silverBullet, 7),
    new GbfItemCost(flawedPrism, 20),
    new GbfItemCost(seismicWhorl, 30),
    new GbfItemCost(lacrimosa, 10)
  ],
  {
    cssColorString: 'rgb(120,120,120)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const silverBullet3 = new Bullet(
  {ja: 'シルバーバレットIII', en: 'Silver Bullet 3'}, 'silver-bullet-3',
  BulletType.RIFLE,
  [
    new BulletCost(silverBullet2, 10),
    new GbfItemCost(flawedPrism, 30),
    new GbfItemCost(seismicWhorl, 40),
    new GbfItemCost(lacrimosa, 20)
  ],
  {
    cssColorString: 'rgb(98,98,98)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const goldBullet = new Bullet(
  {ja: 'ゴールドバレット', en: 'Gold Bullet'}, 'gold-bullet',
  BulletType.RIFLE,
  [
    new BulletCost(silverBullet, 10),
    new BulletCost(fullMetalJacket5, 2),
    new GbfItemCost(meteorite, 1)
  ],
  {
    cssColorString: 'rgb(171,160,46)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const goldBullet2 = new Bullet(
  {ja: 'ゴールドバレットII', en: 'Gold Bullet 2'}, 'gold-bullet-2',
  BulletType.RIFLE,
  [
    new BulletCost(goldBullet, 2),
    new GbfItemCost(graySandstone, 5),
    new GbfItemCost(meteorite, 5),
    new GbfItemCost(rustyEave, 5)
  ],
  {
    cssColorString: 'rgb(155,145,42)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const paradiseLostExpertModel = new Bullet(
  {ja: 'Expert Model: Paradise Lost', en: 'Paradise Lost Expert Model'}, 'paradise-lost-expert-model',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket5, 3),
    new GbfItemCost(tearsOfTheApocalypse, 150),
    new GbfItemCost(damascusCrystal, 10)
  ],
  {
    cssColorString: 'rgb(95,140,220)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const chaosLegionExpertModel = new Bullet(
  {ja: 'Expert Model: Chaos Legion', en: 'Expert Model: Chaos Legion'},
  'chaos-legion-expert-model',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket5, 3),
    new GbfItemCost(abyssalWing, 150),
    new GbfItemCost(damascusCrystal, 10)
  ],
  {
    cssColorString: 'rgb(92,67,145)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const anagenesisExpertModel = new Bullet(
  {ja: 'Expert Model: Anagenesis', en: 'Expert Model: Anagenesis'},
  'anagenesis-expert-model',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket5, 3),
    new GbfItemCost(cunningDevilsHorn, 150),
    new GbfItemCost(damascusCrystal, 10)
  ],
  {
    cssColorString: 'rgb(186,77,83)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const genesisNovaExpertModel = new Bullet(
  {ja: 'Expert Model: Genesis Nova', en: 'Expert Model: Genesis Nova'},
  'genesis-nova-expert-model',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket5, 3),
    new GbfItemCost(ultimateMemory, 150),
    new GbfItemCost(damascusCrystal, 10),
    new GbfItemCost(goldBrick, 1)
  ],
  {
    cssColorString: 'rgb(73,140,214)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const rationaleExitiumExpertModel = new Bullet(
  {ja: 'Expert Model: Rationale Exitium', en: 'Expert Model: Rationale Exitium'},
  'rationale-exitium-expert-model',
  BulletType.RIFLE,
  [
    new BulletCost(anagenesisExpertModel, 3),
    new GbfItemCost(provenanceCrystal, 200),
    new GbfItemCost(goldBrick, 1),
    new GbfItemCost(eternitySand, 3)
  ],
  {
    cssColorString: 'rgb(109,127,206)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const antiVasileiaExpertModel = new Bullet(
  {ja: 'Expert Model: Anti Vasileia', en: 'Expert Model: Anti Vasileia'},
  'anti-vasileia-expert-model',
  BulletType.RIFLE,
  [
    new BulletCost(paradiseLostExpertModel, 3),
    new GbfItemCost(apocalypticBlackFeather, 200),
    new GbfItemCost(goldBrick, 1),
    new GbfItemCost(eternitySand, 3)
  ],
  {
    cssColorString: 'rgb(93,67,148)',
    iconFileName: 'rifle-bullet.svg'
  }
);

// カートリッジ
const shotshell = new Bullet(
  {ja: 'シェルバレット', en: 'Shotshell'}, 'shotshell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 4),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(blisteringOre, 5)
  ],
  {
    cssColorString: 'rgb(190,68,50)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const shotshell2 = new Bullet(
  {ja: 'シェルバレットII', en: 'Shotshell 2'}, 'shotshell-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 7),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(blisteringOre, 7),
    new BulletCost(shotshell, 1)
  ],
  {
    cssColorString: 'rgb(177,63,47)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const shotshell3 = new Bullet(
  {ja: 'シェルバレットIII', en: 'Shotshell 3'}, 'shotshell-3',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 10),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(blisteringOre, 10),
    new BulletCost(shotshell2, 2)
  ],
  {
    cssColorString: 'rgb(168,60,45)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const shotshell4 = new Bullet(
  {ja: 'シェルバレットIV', en: 'Shotshell 4'}, 'shotshell-4',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 20),
    new GbfItemCost(explosiveMaterial, 30),
    new GbfItemCost(blisteringOre, 20),
    new BulletCost(shotshell3, 5)
  ],
  {
    cssColorString: 'rgb(152,54,41)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const shotshell5 = new Bullet(
  {ja: 'シェルバレットV', en: 'Shotshell 5'}, 'shotshell-5',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 30),
    new GbfItemCost(explosiveMaterial, 40),
    new GbfItemCost(blisteringOre, 30),
    new BulletCost(shotshell4, 5)
  ],
  {
    cssColorString: 'rgb(145,50,39)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const strikeShell = new Bullet(
  {ja: 'アサルトシェル', en: 'Strike Shell'}, 'strike-shell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 7),
    new GbfItemCost(explosiveMaterial, 15),
    new GbfItemCost(blisteringOre, 5)
  ],
  {
    cssColorString: 'rgb(79,176,68)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const strikeShell2 = new Bullet(
  {ja: 'アサルトシェルII', en: 'Strike Shell 2'}, 'strike-shell-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 10),
    new GbfItemCost(explosiveMaterial, 20),
    new GbfItemCost(blisteringOre, 16),
    new BulletCost(strikeShell, 1)
  ],
  {
    cssColorString: 'rgb(71,159,61)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const fireCylinder = new Bullet(
  {ja: 'ヒートシリンダー', en: 'Fire Cylinder'}, 'fire-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(infernalWhorl, 30)
  ],
  {
    cssColorString: 'rgb(204,50,44)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const fireCylinder2 = new Bullet(
  {ja: 'ヒートシリンダーII', en: 'Fire Cylinder 2'}, 'fire-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(resoluteReactor, 5),
    new BulletCost(fireCylinder, 1)
  ],
  {
    cssColorString: 'rgb(178,44,38)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const waterCylinder = new Bullet(
  {ja: 'コールドシリンダー', en: 'Water Cylinder'}, 'water-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(tidalWhorl, 30)
  ],
  {
    cssColorString: 'rgb(75,131,204)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const waterCylinder2 = new Bullet(
  {ja: 'コールドシリンダーII', en: 'Water Cylinder 2'}, 'water-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(fannedFin, 5),
    new BulletCost(waterCylinder, 1)
  ],
  {
    cssColorString: 'rgb(62,108,168)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const earthCylinder = new Bullet(
  {ja: 'アースシリンダー', en: 'Earth Cylinder'}, 'earth-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(seismicWhorl, 30)
  ],
  {
    cssColorString: 'rgb(103,66,30)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const earthCylinder2 = new Bullet(
  {ja: 'アースシリンダーII', en: 'Earth Cylinder 2'}, 'earth-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(genesisBud, 5),
    new BulletCost(earthCylinder, 1)
  ],
  {
    cssColorString: 'rgb(84,54,24)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const windCylinder = new Bullet(
  {ja: 'ゲイルシリンダー', en: 'Wind Cylinder'}, 'wind-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(tempestWhorl, 30)
  ],
  {
    cssColorString: 'rgb(62,155,54)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const windCylinder2 = new Bullet(
  {ja: 'ゲイルシリンダーII', en: 'Wind Cylinder 2'}, 'wind-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(greenDragonEye, 5),
    new BulletCost(windCylinder, 1)
  ],
  {
    cssColorString: 'rgb(49,122,43)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const lightCylinder = new Bullet(
  {ja: 'サンダーシリンダー', en: 'Light Cylinder'}, 'light-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(radiantWhorl, 30)
  ],
  {
    cssColorString: 'rgb(176,177,55)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const lightCylinder2 = new Bullet(
  {ja: 'サンダーシリンダーII', en: 'Light Cylinder 2'}, 'light-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(primalBit, 5),
    new BulletCost(lightCylinder, 1)
  ],
  {
    cssColorString: 'rgb(155,156,48)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const darkCylinder = new Bullet(
  {ja: 'ダークシリンダー', en: 'Dark Cylinder'}, 'dark-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(umbralWhorl, 30)
  ],
  {
    cssColorString: 'rgb(84,47,131)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const darkCylinder2 = new Bullet(
  {ja: 'ダークシリンダーII', en: 'Dark Cylinder 2'}, 'dark-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(blackFogSphere, 5),
    new BulletCost(darkCylinder, 1)
  ],
  {
    cssColorString: 'rgb(65,36,101)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const guardBreaker = new Bullet(
  {ja: 'アーマーブレイカー', en: 'Guard Breaker'}, 'guard-breaker',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 10),
    new GbfItemCost(prosperityFlame, 20),
    new BulletCost(armorPiercing2, 5),
    new BulletCost(armorPiercing, 5)
  ],
  {
    cssColorString: 'rgb(204,136,40)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const guardBreaker2 = new Bullet(
  {ja: 'アーマーブレイカーII', en: 'Guard Breaker 2'}, 'guard-breaker-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 24),
    new GbfItemCost(explosiveMaterial, 20),
    new BulletCost(guardBreaker, 1)
  ],
  {
    cssColorString: 'rgb(171,114,33)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const slugShot = new Bullet(
  {ja: 'スラッグショット', en: 'Slug Shot'}, 'slug-shot',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 20),
    new GbfItemCost(prosperityFlame, 20),
    new BulletCost(fullMetalJacket3, 5),
    new BulletCost(ironBullet3, 5)
  ],
  {
    cssColorString: 'rgb(78,133,204)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const slugShot2 = new Bullet(
  {ja: 'スラッグショットII', en: 'Slug Shot 2'}, 'slug-shot-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 70),
    new GbfItemCost(explosiveMaterial, 20),
    new BulletCost(slugShot, 1)
  ],
  {
    cssColorString: 'rgb(66,112,172)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const stickyShell = new Bullet(
  {ja: 'スティッキーシェル', en: 'Sticky Shell'}, 'sticky-shell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 10),
    new GbfItemCost(corrodedCartridge, 8),
    new BulletCost(armorPiercing2, 5),
    new BulletCost(armorPiercing, 5)
  ],
  {
    cssColorString: 'rgb(193,204,48)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const stickyShell2 = new Bullet(
  {ja: 'スティッキーシェルII', en: 'Sticky Shell 2'}, 'sticky-shell-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 20),
    new GbfItemCost(corrodedCartridge, 15),
    new BulletCost(stickyShell, 10)
  ],
  {
    cssColorString: 'rgb(171,181,43)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const chaiserShell = new Bullet(
  {ja: 'チェイスシェル', en: 'Chaiser Shell'}, 'chaiser-shell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(brokenTeacup, 10),
    new GbfItemCost(rawGemstone, 10),
    new GbfItemCost(maliceFragment, 5),
    new BulletCost(shotshell5, 2)
  ],
  {
    cssColorString: 'rgb(205,126,35)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const enhancingShell = new Bullet(
  {ja: 'エンハンスシェル', en: 'Enhancing Shell'}, 'enhancing-shell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(jumboBeastBone, 10),
    new GbfItemCost(translucentSilk, 10),
    new GbfItemCost(maliceFragment, 5),
    new BulletCost(shotshell5, 2)
  ],
  {
    cssColorString: 'rgb(159,73,205)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

// エーテリアル弾
const ifritPoint = new Bullet(
  {ja: 'イフリートポイント', en: 'Ifrit Point'}, 'ifrit-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(fireOrb, 20),
    new GbfItemCost(infernoOrb, 10),
    new GbfItemCost(infernalWhorl, 20),
    new GbfItemCost(ifritAnima, 20)
  ],
  {
    cssColorString: 'rgb(204,73,54)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const ifritPoint2 = new Bullet(
  {ja: 'イフリートポイントII', en: 'Ifrit Point 2'}, 'ifrit-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(redTome, 24),
    new GbfItemCost(hellfireScroll, 12),
    new GbfItemCost(redDragonScale, 16),
    new BulletCost(ifritPoint, 2)
  ],
  {
    cssColorString: 'rgb(191,68,51)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const ifritPoint3 = new Bullet(
  {ja: 'イフリートポイントIII', en: 'Ifrit Point 3'}, 'ifrit-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueFireAnima, 20),
    new GbfItemCost(fireQuartz, 10),
    new GbfItemCost(redDragonScale, 20),
    new BulletCost(ifritPoint2, 5)
  ],
  {
    cssColorString: 'rgb(178,63,47)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const cocytusPoint = new Bullet(
  {ja: 'コキュートスポイント', en: 'Cocytus Point'}, 'cocytus-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(waterOrb, 20),
    new GbfItemCost(frostOrb, 10),
    new GbfItemCost(tidalWhorl, 20),
    new GbfItemCost(cocytusAnima, 20)
  ],
  {
    cssColorString: 'rgb(56,76,204)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const cocytusPoint2 = new Bullet(
  {ja: 'コキュートスポイントII', en: 'Cocytus Point 2'}, 'cocytus-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(blueTome, 24),
    new GbfItemCost(floodScroll, 12),
    new GbfItemCost(blueDragonScale, 16),
    new BulletCost(cocytusPoint, 2)
  ],
  {
    cssColorString: 'rgb(53,72,192)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const cocytusPoint3 = new Bullet(
  {ja: 'コキュートスポイントIII', en: 'Cocytus Point 3'}, 'cocytus-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueWaterAnima, 20),
    new GbfItemCost(waterQuartz, 10),
    new GbfItemCost(blueDragonScale, 20),
    new BulletCost(cocytusPoint2, 5)
  ],
  {
    cssColorString: 'rgb(49,66,177)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const vohuManahPoint = new Bullet(
  {ja: 'ウォフマナフポイント', en: 'Vohu Manah Point'}, 'vohu-manah-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(earthOrb, 20),
    new GbfItemCost(rumblingOrb, 10),
    new GbfItemCost(seismicWhorl, 20),
    new GbfItemCost(vohuManahAnima, 20)
  ],
  {
    cssColorString: 'rgb(161,107,65)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const vohuManahPoint2 = new Bullet(
  {ja: 'ウォフマナフポイントII', en: 'Vohu Manah Point 2'}, 'vohu-manah-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(brownTome, 24),
    new GbfItemCost(thunderScroll, 12),
    new GbfItemCost(brownDragonScale, 16),
    new BulletCost(vohuManahPoint, 2)
  ],
  {
    cssColorString: 'rgb(143,95,58)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const vohuManahPoint3 = new Bullet(
  {ja: 'ウォフマナフポイントIII', en: 'Vohu Manah Point 3'}, 'vohu-manah-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueEarthAnima, 20),
    new GbfItemCost(earthQuartz, 10),
    new GbfItemCost(brownDragonScale, 20),
    new BulletCost(vohuManahPoint2, 5)
  ],
  {
    cssColorString: 'rgb(123,82,50)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const sagittariusPoint = new Bullet(
  {ja: 'サジタリウスポイント', en: 'Sagittarius Point'}, 'sagittarius-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(windOrb, 20),
    new GbfItemCost(cycloneOrb, 10),
    new GbfItemCost(tempestWhorl, 20),
    new GbfItemCost(sagittariusAnima, 20)
  ],
  {
    cssColorString: 'rgb(62,161,69)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const sagittariusPoint2 = new Bullet(
  {ja: 'サジタリウスポイントII', en: 'Sagittarius Point 2'}, 'sagittarius-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(greenTome, 24),
    new GbfItemCost(galeScroll, 12),
    new GbfItemCost(greenDragonScale, 16),
    new BulletCost(sagittariusPoint, 2)
  ],
  {
    cssColorString: 'rgb(56,145,62)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const sagittariusPoint3 = new Bullet(
  {ja: 'サジタリウスポイントIII', en: 'Sagittarius Point 3'}, 'sagittarius-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueWindAnima, 20),
    new GbfItemCost(windQuartz, 10),
    new GbfItemCost(greenDragonScale, 20),
    new BulletCost(sagittariusPoint2, 5)
  ],
  {
    cssColorString: 'rgb(50,129,55)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const corowPoint = new Bullet(
  {ja: 'コロゥポイント', en: 'Corow Point'}, 'corow-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(lightOrb, 20),
    new GbfItemCost(shiningOrb, 10),
    new GbfItemCost(radiantWhorl, 20),
    new GbfItemCost(corowAnima, 20)
  ],
  {
    cssColorString: 'rgb(191,182,38)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const corowPoint2 = new Bullet(
  {ja: 'コロゥポイントII', en: 'Corow Point 2'}, 'corow-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(whiteTome, 24),
    new GbfItemCost(skylightScroll, 12),
    new GbfItemCost(whiteDragonScale, 16),
    new BulletCost(corowPoint, 2)
  ],
  {
    cssColorString: 'rgb(174,166,35)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const corowPoint3 = new Bullet(
  {ja: 'コロゥポイントIII', en: 'Corow Point 3'}, 'corow-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueLightAnima, 20),
    new GbfItemCost(lightQuartz, 10),
    new GbfItemCost(whiteDragonScale, 20),
    new BulletCost(corowPoint2, 5)
  ],
  {
    cssColorString: 'rgb(149,142,30)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const diabloPoint = new Bullet(
  {ja: 'ディアボロスポイント', en: 'Diablo Point'}, 'diablo-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(darkOrb, 20),
    new GbfItemCost(abysmOrb, 10),
    new GbfItemCost(umbralWhorl, 20),
    new GbfItemCost(diabloAnima, 20)
  ],
  {
    cssColorString: 'rgb(75,27,145)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const diabloPoint2 = new Bullet(
  {ja: 'ディアボロスポイントII', en: 'Diablo Point 2'}, 'diablo-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(blackTome, 24),
    new GbfItemCost(chasmScroll, 12),
    new GbfItemCost(blackDragonScale, 16),
    new BulletCost(diabloPoint, 2)
  ],
  {
    cssColorString: 'rgb(67,24,130)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const diabloPoint3 = new Bullet(
  {ja: 'ディアボロスポイントIII', en: 'Diablo Point 3'}, 'diablo-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueDarkAnima, 20),
    new GbfItemCost(darkQuartz, 10),
    new GbfItemCost(blackDragonScale, 20),
    new BulletCost(diabloPoint2, 5)
  ],
  {
    cssColorString: 'rgb(57,21,111)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const agniPoint = new Bullet(
  {ja: 'アグニスポイント', en: 'Agni Point'}, 'agni-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(ifritPoint2, 3),
    new GbfItemCost(fireGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(204,73,54)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const agniPoint2 = new Bullet(
  {ja: 'アグニスポイントII', en: 'Agni Point 2'}, 'agni-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(agniPoint, 1),
    new GbfItemCost(fireGrimoire, 7),
    new GbfItemCost(fireQuartz, 30),
    new GbfItemCost(lightQuartz, 20)
  ],
  {
    cssColorString: 'rgb(191,68,51)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const agniPoint3 = new Bullet(
  {ja: 'アグニスポイントIII', en: 'Agni Point 3'}, 'agni-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(rubeusCentrum, 20),
    new GbfItemCost(fireQuartz, 20),
    new GbfItemCost(fireUrn, 3),
    new BulletCost(agniPoint2, 5)
  ],
  {
    cssColorString: 'rgb(178,63,47)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const neptunePoint = new Bullet(
  {ja: 'ネプチューンポイント', en: 'Neptune Point'}, 'neptune-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(cocytusPoint2, 3),
    new GbfItemCost(waterGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(56,76,204)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const neptunePoint2 = new Bullet(
  {ja: 'ネプチューンポイントII', en: 'Neptune Point 2'}, 'neptune-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(neptunePoint, 1),
    new GbfItemCost(waterGrimoire, 7),
    new GbfItemCost(waterQuartz, 30),
    new GbfItemCost(darkQuartz, 20)
  ],
  {
    cssColorString: 'rgb(53,72,192)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const neptunePoint3 = new Bullet(
  {ja: 'ネプチューンポイントIII', en: 'Neptune Point 3'}, 'neptune-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(indicusCentrum, 20),
    new GbfItemCost(waterQuartz, 20),
    new GbfItemCost(waterUrn, 3),
    new BulletCost(neptunePoint2, 5)
  ],
  {
    cssColorString: 'rgb(49,66,177)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const titanPoint = new Bullet(
  {ja: 'ティターンポイント', en: 'Titan Point'}, 'titan-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(vohuManahPoint2, 3),
    new GbfItemCost(earthGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(161,107,65)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const titanPoint2 = new Bullet(
  {ja: 'ティターンポイントII', en: 'Titan Point 2'}, 'titan-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(titanPoint, 1),
    new GbfItemCost(earthGrimoire, 7),
    new GbfItemCost(earthQuartz, 30),
    new GbfItemCost(darkQuartz, 20)
  ],
  {
    cssColorString: 'rgb(143,95,58)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const titanPoint3 = new Bullet(
  {ja: 'ティターンポイントIII', en: 'Titan Point 3'}, 'titan-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(luteusCentrum, 20),
    new GbfItemCost(earthQuartz, 20),
    new GbfItemCost(earthUrn, 3),
    new BulletCost(titanPoint2, 5)
  ],
  {
    cssColorString: 'rgb(123,82,50)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zephyrusPoint = new Bullet(
  {ja: 'ゼピュロスポイント', en: 'Zephyrus Point'}, 'zephyrus-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(sagittariusPoint2, 3),
    new GbfItemCost(windGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(62,161,69)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zephyrusPoint2 = new Bullet(
  {ja: 'ゼピュロスポイントII', en: 'Zephyrus Point 2'}, 'zephyrus-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(zephyrusPoint, 1),
    new GbfItemCost(windGrimoire, 7),
    new GbfItemCost(windQuartz, 30),
    new GbfItemCost(lightQuartz, 20)
  ],
  {
    cssColorString: 'rgb(56,145,62)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zephyrusPoint3 = new Bullet(
  {ja: 'ゼピュロスポイントIII', en: 'Zephyrus Point 3'}, 'zephyrus-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(galbinusCentrum, 20),
    new GbfItemCost(windQuartz, 20),
    new GbfItemCost(windUrn, 3),
    new BulletCost(zephyrusPoint2, 5)
  ],
  {
    cssColorString: 'rgb(50,129,55)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zeusPoint = new Bullet(
  {ja: 'ゼウスポイント', en: 'Zeus Point'}, 'zeus-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(corowPoint2, 3),
    new GbfItemCost(fireGrimoire, 5),
    new GbfItemCost(windGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(191,182,38)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zeusPoint2 = new Bullet(
  {ja: 'ゼウスポイントII', en: 'Zeus Point 2'}, 'zeus-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(zeusPoint, 1),
    new GbfItemCost(fireGrimoire, 7),
    new GbfItemCost(windGrimoire, 7),
    new GbfItemCost(lightQuartz, 20)
  ],
  {
    cssColorString: 'rgb(174,166,35)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zeusPoint3 = new Bullet(
  {ja: 'ゼウスポイントIII', en: 'Zeus Point 3'}, 'zeus-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(niveusCentrum, 20),
    new GbfItemCost(lightQuartz, 20),
    new GbfItemCost(lightUrn, 3),
    new BulletCost(zeusPoint2, 5)
  ],
  {
    cssColorString: 'rgb(149,142,30)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const hadesPoint = new Bullet(
  {ja: 'ハデスポイント', en: 'Hades Point'}, 'hades-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(diabloPoint2, 3),
    new GbfItemCost(waterGrimoire, 5),
    new GbfItemCost(earthGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(75,27,145)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const hadesPoint2 = new Bullet(
  {ja: 'ハデスポイントII', en: 'Hades Point 2'}, 'hades-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(hadesPoint, 1),
    new GbfItemCost(waterGrimoire, 7),
    new GbfItemCost(earthGrimoire, 7),
    new GbfItemCost(darkQuartz, 20)
  ],
  {
    cssColorString: 'rgb(67,24,130)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const hadesPoint3 = new Bullet(
  {ja: 'ハデスポイントIII', en: 'Hades Point 3'}, 'hades-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(aterCentrum, 20),
    new GbfItemCost(darkQuartz, 20),
    new GbfItemCost(darkUrn, 3),
    new BulletCost(hadesPoint2, 5)
  ],
  {
    cssColorString: 'rgb(57,21,111)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

// バレットリスト
const parabellum: Bullet[] = [
  ironBullet,
  ironBullet2,
  ironBullet3,
  ironBullet4,
  ironBullet5,
  rapidBullet,
  rapidBullet2,
  rapidBullet3,
  rapidBullet4,
  flameBullet,
  poisonBullet,
  sleepBullet,
  shieldBullet,
  charmBullet,
  paralyzeBullet,
  healingBullet
];

const rifle: Bullet[] = [
  fullMetalJacket,
  fullMetalJacket2,
  fullMetalJacket3,
  fullMetalJacket4,
  fullMetalJacket5,
  exploder,
  exploder2,
  exploder3,
  armorPiercing,
  armorPiercing2,
  armorPiercing3,
  silverBullet,
  silverBullet2,
  silverBullet3,
  goldBullet,
  goldBullet2,
  paradiseLostExpertModel,
  chaosLegionExpertModel,
  anagenesisExpertModel,
  genesisNovaExpertModel,
  rationaleExitiumExpertModel,
  antiVasileiaExpertModel
];

const cartridge: Bullet[] = [
  shotshell,
  shotshell2,
  shotshell3,
  shotshell4,
  shotshell5,
  strikeShell,
  strikeShell2,
  fireCylinder,
  fireCylinder2,
  waterCylinder,
  waterCylinder2,
  earthCylinder,
  earthCylinder2,
  windCylinder,
  windCylinder2,
  lightCylinder,
  lightCylinder2,
  darkCylinder,
  darkCylinder2,
  guardBreaker,
  guardBreaker2,
  slugShot,
  slugShot2,
  stickyShell,
  stickyShell2,
  chaiserShell,
  enhancingShell
];

const aetherial: Bullet[] = [
  ifritPoint,
  ifritPoint2,
  ifritPoint3,
  cocytusPoint,
  cocytusPoint2,
  cocytusPoint3,
  vohuManahPoint,
  vohuManahPoint2,
  vohuManahPoint3,
  sagittariusPoint,
  sagittariusPoint2,
  sagittariusPoint3,
  corowPoint,
  corowPoint2,
  corowPoint3,
  diabloPoint,
  diabloPoint2,
  diabloPoint3,
  agniPoint,
  agniPoint2,
  agniPoint3,
  neptunePoint,
  neptunePoint2,
  neptunePoint3,
  titanPoint,
  titanPoint2,
  titanPoint3,
  zephyrusPoint,
  zephyrusPoint2,
  zephyrusPoint3,
  zeusPoint,
  zeusPoint2,
  zeusPoint3,
  hadesPoint,
  hadesPoint2,
  hadesPoint3
];

export const bullet: {[k: string]: Bullet[]} = {
  parabellum,
  rifle,
  cartridge,
  aetherial
};

// バレットマップ
// slug -> bullet
const slugToBullet: {[k: string]: Bullet} = {};
for(const bullet of [...parabellum, ...rifle, ...cartridge, ...aetherial]) {
  slugToBullet[bullet.slug] = bullet;
}

export { slugToBullet };