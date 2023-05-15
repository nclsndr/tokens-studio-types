import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleSpacingToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.SPACING,
  string,
  Named,
  P
>;
