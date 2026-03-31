import * as React from 'react';
import { useCallback, useContext } from 'react';
import { BulletCalculatorContext } from '../context/bulletcalc_context';
import { Card } from '../components/Card';
import { CardButton } from '../components/CardButton';

declare let gtag: any;

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  marginBottom: '1em'
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.2em',
  fontWeight: 'normal',
  textAlign: 'center',
  marginBottom: '1em'
};

const preferencesCardStyle: React.CSSProperties = {
  ...cardStyle,
  backgroundColor: 'var(--primary-color)'
};

const cardButtonStyle: React.CSSProperties = {
  color: 'white',
  boxShadow: 'none',
  width: '10em',
  maxWidth: '70%',
  margin: '1em 0',
  padding: '0.3em 0'
};

const installButtonStyle: React.CSSProperties = {
  ...cardButtonStyle,
  backgroundColor: 'var(--positive-color)',
};

const resetButtonStyle: React.CSSProperties = {
  ...cardButtonStyle,
  backgroundColor: 'var(--danger-color)',
};

const languageButtonStyle: React.CSSProperties = {
  ...cardButtonStyle,
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
};

const selectedLanguageButtonStyle: React.CSSProperties = {
  ...languageButtonStyle,
  backgroundColor: 'rgba(255, 255, 255, 0.35)',
  border: 'solid 1px white',
};

const languageButtonContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.8em',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%'
};

const requestFormLinkStyle: React.CSSProperties = {
  color: 'white',
  textAlign: 'center'
};

const viewSourceOnGitHubStyle: React.CSSProperties = {
  textAlign: 'center'
};

const githubLinkStyle: React.CSSProperties = {
  color: 'black',
  textAlign: 'center'
};

export const PreferencesPage = () => {
  const {
    installPrompt,
    setInstallPrompt,
    systemPreferences,
    locale,
    setLocale,
    setBulletCosts,
    setInventory,
    setBulletInventory,
    setSystemPreferences
  } = useContext(BulletCalculatorContext);

  const t = {
    installTitle: locale === 'en' ? 'Install App' : '端末インストール',
    installDescription: locale === 'en'
      ? 'Install this on your device so you can use it like a standalone app.'
      : '端末にインストールすることで独立アプリとして使用できるようになります。',
    installButton: locale === 'en' ? 'Install' : 'インストール',
    languageTitle: locale === 'en' ? 'Language' : '言語',
    systemTitle: locale === 'en' ? 'System' : 'システム',
    resetButton: locale === 'en' ? 'Reset All Data' : '全データ消去',
    feedbackTitle: locale === 'en' ? 'Feedback Box' : 'ご意見BOX',
    feedbackLink: locale === 'en' ? 'Send Feedback / Bug Report' : 'ご意見・バグ報告を送る',
    resetConfirm: locale === 'en'
      ? 'This will delete all saved data. Continue?'
      : '保存データを全て消去します。よろしいですか？',
    resetDone: locale === 'en' ? 'Deleted.' : '消去しました'
  };

  const onClickInstall = useCallback((event: AnimationPlaybackEvent) => {
    if (!installPrompt) {
      return;
    }

    installPrompt.prompt();

    installPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        gtag('event', 'Add to Homescreen', {'event_category': 'App', 'event_label': 'GBF Bullet Calc'});
      }

      setInstallPrompt(null);
    });
  }, [installPrompt, setInstallPrompt]);

  const onClickReset = useCallback(() => {
    if (confirm(t.resetConfirm)) {
      setBulletCosts([]);
      setInventory({});
      setBulletInventory([]);
      setSystemPreferences({ locale });
      alert(t.resetDone);
    }
  }, [setBulletCosts, setInventory, setBulletInventory, setSystemPreferences, locale, t.resetConfirm, t.resetDone]);

  const onClickJapanese = useCallback(() => {
    setLocale('ja');
  }, [setLocale]);

  const onClickEnglish = useCallback(() => {
    setLocale('en');
  }, [setLocale]);

  return (
    <div className="page">
      {installPrompt ? (
        <Card style={preferencesCardStyle}>
          <h2 style={cardTitleStyle}>{t.installTitle}</h2>
          <div>{t.installDescription}</div>
          <CardButton
            style={installButtonStyle}
            onAnimationFinish={onClickInstall}
          >
            {t.installButton}
          </CardButton>
        </Card>
      ) : null}

      <Card style={preferencesCardStyle}>
        <h2 style={cardTitleStyle}>{t.languageTitle}</h2>
        <div style={languageButtonContainerStyle}>
          <CardButton
            style={locale === 'ja' ? selectedLanguageButtonStyle : languageButtonStyle}
            onAnimationFinish={onClickJapanese}
          >
            日本語
          </CardButton>

          <CardButton
            style={locale === 'en' ? selectedLanguageButtonStyle : languageButtonStyle}
            onAnimationFinish={onClickEnglish}
          >
            English
          </CardButton>
        </div>
      </Card>

      <Card style={preferencesCardStyle}>
        <h2 style={cardTitleStyle}>{t.systemTitle}</h2>
        <CardButton
          style={resetButtonStyle}
          onAnimationFinish={onClickReset}
        >
          {t.resetButton}
        </CardButton>
      </Card>

      <Card style={preferencesCardStyle}>
        <h2 style={cardTitleStyle}>{t.feedbackTitle}</h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeu-FUTzPJnYH6nK9ikSAm2rUZpZPT-whpYUtbsjI2hTpn0IQ/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          style={requestFormLinkStyle}
        >
          {t.feedbackLink}
        </a>
      </Card>

      <div style={viewSourceOnGitHubStyle}>
        <a
          href="https://github.com/subterraneanflower/gbf-bullet-calculator"
          target="_blank"
          rel="noopener noreferrer"
          style={githubLinkStyle}
        >
          View Source on GitHub
        </a>
      </div>
    </div>
  );
};