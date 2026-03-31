import * as React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MobileNavButton } from './MobileNavButton';
import { BulletCalculatorContext } from '../../context/bulletcalc_context';

const mobileNavBarStyle: React.CSSProperties = {
  display: 'flex',
  backgroundColor: 'var(--primary-color)',
  boxShadow: '0 -3px 7px rgba(0, 0, 0, 0.2)',
  zIndex: '999'
};

const linkStyleBase: React.CSSProperties = {
  flex: '1',
  display: 'block',
  textDecoration: 'none',
  color: 'var(--primary-color)',
  padding: '0.5em 1em'
};

const linkStyle: React.CSSProperties = {
  ...linkStyleBase
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyleBase,
  backgroundColor: 'var(--light-primary-color)'
};

export const MobileNavBar = () => {
  const { locale } = useContext(BulletCalculatorContext);

  return (
    <div style={mobileNavBarStyle}>
      <NavLink
        to="/bulletlist"
        activeStyle={activeLinkStyle}
        style={linkStyle}
      >
        <MobileNavButton
          iconUrl="img/bullet.svg"
          label={locale === 'en' ? 'Craft' : '作成'}
        />
      </NavLink>

      <NavLink
        to="/bulletinventory"
        activeStyle={activeLinkStyle}
        style={linkStyle}
      >
        <MobileNavButton
          iconUrl="img/treasure.svg"
          label={locale === 'en' ? 'Materials' : '素材用'}
        />
      </NavLink>

      <NavLink
        to="/calc"
        activeStyle={activeLinkStyle}
        style={linkStyle}
      >
        <MobileNavButton
          iconUrl="img/calc.svg"
          label={locale === 'en' ? 'Calc' : '素材計算'}
        />
      </NavLink>

      <NavLink
        to="/preferences"
        activeStyle={activeLinkStyle}
        style={linkStyle}
      >
        <MobileNavButton
          iconUrl="img/preferences.svg"
          label={locale === 'en' ? 'Settings' : '設定'}
        />
      </NavLink>
    </div>
  )
};