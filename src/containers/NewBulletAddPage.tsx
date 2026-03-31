import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Card } from '../components/Card';
import { CardButton } from '../components/CardButton';
import { useCallback, useContext, useMemo, useState } from 'react';
import { slugToBullet } from '../data/gbf_item_data';
import { Counter } from '../components/Counter';
import { BulletCost } from '../data/gbf';
import { BulletCalculatorContext } from '../context/bulletcalc_context';

interface NewBulletAddPageProps extends RouteComponentProps<{bulletslug: string}> {
  basepath: string;
  bulletCosts: BulletCost[];
  onSave: (bulletCosts: BulletCost[]) => any;
}

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  width: '100%'
};

const bulletFigureStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const addBulletButtonStyle: React.CSSProperties = {
  backgroundColor: 'var(--positive-color)',
  color: 'white',
  border: 'solid 1px white',
  boxShadow: 'none',
  width: '10em',
  maxWidth: '70%',
  margin: '1em 0',
  padding: '0.3em 0'
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

const costQuantityStyle: React.CSSProperties = {
  paddingLeft: '1em',
  textAlign: 'right'
};

export const NewBulletAddPage = (props: NewBulletAddPageProps) => {
  const [count, setCount] = useState(1);
  const { locale } = useContext(BulletCalculatorContext);

  const bullet = slugToBullet[props.match.params.bulletslug];
  const coloredCardStyle = useMemo(() => ({...cardStyle, backgroundColor: bullet.cssColorString}), [bullet.cssColorString]);

  const quantitySuffix = locale === 'en' ? '' : '個';
  const addText = locale === 'en' ? 'Add' : '追加';

  // カウンターのカウント変更時のコールバック。
  const onCountChange = useCallback((newCount: number) => {
    setCount(newCount);
  }, [setCount]);

  // バレットを一覧に追加して戻る用のコールバック。
  const addBulletAndBack = useCallback((event: AnimationPlaybackEvent) => {
    if (count > 0) {
      props.onSave([...props.bulletCosts, new BulletCost(bullet, count)]);
    }
    props.history.replace(props.basepath);
  }, [props.bulletCosts, props.onSave, count, bullet, props.history, props.basepath]);

  // 作成に必要なアイテムリスト。
  const requiredItemList = bullet.requiredCosts.map((cost) => {
    return (
      <div key={cost.item.slug} style={costListItemStyle}>
        <img src={`img/${cost.item.iconFileName || 'treasure.svg'}`} style={costIconStyle}/>
        <div style={costNameStyle}>{cost.item.getDisplayName(locale)}</div>
        <div style={costQuantityStyle}>{cost.quantity * count}{quantitySuffix}</div>
      </div>
    );
  });

  return (
    <div className="page">
      <Card style={coloredCardStyle}>
        <div style={bulletFigureStyle}>
          <img src={`img/${bullet.iconFileName || 'treasure.svg'}`}/>
          <div>{bullet.getDisplayName(locale)}</div>
        </div>
        <Counter initialValue={count} min={0} max={999} unit={quantitySuffix} onCountChange={onCountChange}/>
        <CardButton onAnimationFinish={addBulletAndBack} style={addBulletButtonStyle}>
          {addText}
        </CardButton>
        <div style={costListStyle}>
          {requiredItemList}
        </div>
      </Card>
    </div>
  );
};