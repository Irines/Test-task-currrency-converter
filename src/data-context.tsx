import * as React from 'react';
import { CurrencyContextType } from './interfaces/currency-data';

export const CurrencyContext = React.createContext<CurrencyContextType | null>(null);
