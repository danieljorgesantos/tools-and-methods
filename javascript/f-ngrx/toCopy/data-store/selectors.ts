import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/_core/interfaces/auth.interface';

export const selectDataState = createFeatureSelector<any>('dataState');

