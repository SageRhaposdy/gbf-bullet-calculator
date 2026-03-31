import * as React from "react";
import { BulletCalculatorData } from '../data/bulletcalc';
import { BulletCost } from '../data/gbf';

export const BulletCalculatorContext = React.createContext<BulletCalculatorData>({
  bulletCosts: [],
  inventory: {},
  bulletInventory: [],
  systemPreferences: { locale: 'ja' },
  locale: 'ja',
  setBulletCosts: (newBullets: BulletCost[]) => null,
  setInventory: (newInventory: {[slug: string]: number}) => null,
  setBulletInventory: (newBulletInventory: BulletCost[]) => null,
  setActionButton: (newButton?: React.ReactNode) => null,
  setSystemPreferences: (newPref: {[k: string]: any}) => null,
  setLocale: (locale: string) => null,
  setInstallPrompt: (prompt: any) => null
});