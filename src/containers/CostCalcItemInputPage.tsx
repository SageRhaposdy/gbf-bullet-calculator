import * as React from 'react';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { BulletCalculatorContext } from '../context/bulletcalc_context';
import { totalBulletCosts, combineDuplicatedInventoryBullets } from '../data/bulletcalc';
import { Card } from '../components/Card';
import { CardButton } from '../components/CardButton';
import { withRouter } from 'react-router';

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  marginBottom: '1em'
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.2em',
  fontWeight: 'normal',
  textAlign: 'center',
  marginBottom: '1em'
};

const costListStyle: React.CSSProperties = {
  fontSize: '0.7em',
  width: '20em',
  maxWidth: '90%'
};

const costListItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.8em 0'
};

const costIconStyle: React.CSSProperties = {
  height: '1.5em'
};

const costNameStyle: React.CSSProperties = {
  flex: '1',
  padding: '0 0.5em'
};

const costInputStyle: React.CSSProperties = {
  fontSize: '16px',
  paddingLeft: '1em',
  width: '5em',
  textAlign: 'right'
};

const saveButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: 'white',
  color: 'var(--primary-color)',
  boxShadow: 'none',
  padding: '0.2em 0.8em'
};

export const CostCalcItemInputPage = withRouter(({history}) => {
  const {
    bulletCosts,
    inventory,
    bulletInventory,
    locale,
    setActionButton,
    setInventory
  } = useContext(BulletCalculatorContext);

  const [inputInventory, setInputInventory] = useState(inventory);

  const t = {
    save: locale === 'en' ? 'Save' : '保存',
    inputOwned: locale === 'en' ? 'Enter Owned Amounts' : '所持数入力',
    quantitySuffix: locale === 'en' ? '' : '個',
    invalidNumber: locale === 'en'
      ? 'An invalid non-numeric value was entered.'
      : '数値ではない無効な値が入力されています。'
  };

  // バレット作成に必要な全コスト。
  // 全ての作成バレットの素材を合計して列挙する。
  // 所持バレット分の素材は除外する。
  const totalCosts = useMemo(() => {
    const combinedBulletInventory = combineDuplicatedInventoryBullets(bulletInventory);
    return totalBulletCosts(bulletCosts, combinedBulletInventory);
  }, [bulletCosts, bulletInventory]);

  // 保存して戻る用のコールバック。
  const saveAndBack = useCallback((event: AnimationPlaybackEvent) => {
    setActionButton(undefined);
    setInventory(inputInventory);
    history.goBack();
  }, [history, inputInventory, setActionButton, setInventory]);

  // 保存ボタン。
  const saveButton = useMemo(() => (
    <CardButton style={saveButtonStyle} onAnimationFinish={saveAndBack}>
      {t.save}
    </CardButton>
  ), [saveAndBack, t.save]);

  // ページヘッダに保存ボタンを表示する。
  useEffect(() => {
    setActionButton(saveButton);
    return () => setActionButton(undefined);
  }, [saveButton, setActionButton]);

  // 入力欄を備えた、必要アイテムリスト。
  const requiredItemList = totalCosts.map((cost) => {
    const updateInputInventory = (event: React.FormEvent<HTMLInputElement>) => {
      const newInputInventory = {...inputInventory};
      const inputElem = (event.target as HTMLInputElement);

      if (inputElem.value) {
        const parsedInputValue = parseInt(inputElem.value);

        if (Number.isNaN(parsedInputValue)) {
          console.error(t.invalidNumber);
        } else {
          newInputInventory[cost.item.slug] = parsedInputValue;
          setInputInventory(newInputInventory);
        }
      } else {
        delete newInputInventory[cost.item.slug];
        setInputInventory(newInputInventory);
      }
    };

    const inventoryQuantity = cost.item.slug in inventory ? inventory[cost.item.slug] : 0;

    return (
      <div key={cost.item.slug} style={costListItemStyle}>
        <img src={`img/${cost.item.iconFileName || 'treasure.svg'}`} style={costIconStyle}/>
        <div style={costNameStyle}>{cost.item.getDisplayName(locale)}</div>
        <div>
          <input
            type="number"
            pattern="\d*"
            min="0"
            step="1"
            defaultValue={cost.item.slug in inventory ? inventoryQuantity.toString() : ''}
            onInput={updateInputInventory}
            style={costInputStyle}
          />
          {t.quantitySuffix}
        </div>
      </div>
    );
  });

  return (
    <div className="page">
      <Card style={cardStyle}>
        <h2 style={cardTitleStyle}>{t.inputOwned}</h2>
        <div style={costListStyle}>
          {requiredItemList}
        </div>
      </Card>
    </div>
  );
});