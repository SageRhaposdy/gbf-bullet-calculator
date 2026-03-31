import * as React from 'react';
import { useCallback, useContext } from 'react';
import { CardIconButton } from '../components/CardIconButton';
import { RouteComponentProps } from 'react-router';
import { bullet } from '../data/gbf_item_data';
import { BulletCalculatorContext } from '../context/bulletcalc_context';

interface NewBulletPagePros extends RouteComponentProps<{bullettype: string}>{
  basepath: string;
}

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
};

const iconButtonStyle: React.CSSProperties = {
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  margin: '0.8em 0',
  width: '47%',
  height: '7em'
};

export const NewBulletPage = (props: NewBulletPagePros) => {
  const bulletType = props.match.params.bullettype;
  const { locale } = useContext(BulletCalculatorContext);

  const goToParabellum = useCallback((event: AnimationPlaybackEvent) => {
    props.history.push(`${props.basepath}/newbullet/parabellum`, {backable: true});
  }, [props.history, props.basepath]);

  const goToRifle = useCallback((event: AnimationPlaybackEvent) => {
    props.history.push(`${props.basepath}/newbullet/rifle`, {backable: true});
  }, [props.history, props.basepath]);

  const goToCartridge = useCallback((event: AnimationPlaybackEvent) => {
    props.history.push(`${props.basepath}/newbullet/cartridge`, {backable: true});
  }, [props.history, props.basepath]);

  const goToAetherial = useCallback((event: AnimationPlaybackEvent) => {
    props.history.push(`${props.basepath}/newbullet/aetherial`, {backable: true});
  }, [props.history, props.basepath]);

  if (bulletType) {
    const bulletList = bullet[bulletType] || [];
    const bulletButtons = bulletList.map((bullet) => {
      const goToNewBullet = (event: AnimationPlaybackEvent) => {
        props.history.push(`${props.basepath}/newbullet/${bulletType}/${bullet.slug}`, {backable: true});
      };

      return (
        <CardIconButton
          key={bullet.slug}
          iconUrl={`img/${bullet.iconFileName || 'treasure.svg'}`}
          text={bullet.getDisplayName(locale)}
          onAnimationFinish={goToNewBullet}
          style={{...iconButtonStyle, backgroundColor: bullet.cssColorString}}
        />
      );
    });

    return (
      <div className="page" style={buttonContainerStyle}>
        {bulletButtons}
      </div>
    );
  }

  return (
    <div className="page" style={buttonContainerStyle}>
      <CardIconButton
        iconUrl="img/parabellum-bullet.svg"
        text={locale === 'en' ? 'Parabellum' : 'パラベラム弾'}
        onAnimationFinish={goToParabellum}
        style={iconButtonStyle}
      />

      <CardIconButton
        iconUrl="img/rifle-bullet.svg"
        text={locale === 'en' ? 'Rifle' : 'ライフル弾'}
        onAnimationFinish={goToRifle}
        style={iconButtonStyle}
      />

      <CardIconButton
        iconUrl="img/cartridge-bullet.svg"
        text={locale === 'en' ? 'Cartridge' : 'カートリッジ'}
        onAnimationFinish={goToCartridge}
        style={iconButtonStyle}
      />

      <CardIconButton
        iconUrl="img/aetherial-bullet.svg"
        text={locale === 'en' ? 'Aetherial' : 'エーテリアル弾'}
        onAnimationFinish={goToAetherial}
        style={iconButtonStyle}
      />
    </div>
  );
};