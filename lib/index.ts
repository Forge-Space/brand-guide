import type { BrandIdentity } from '@forgespace/branding-mcp';
import identityJson from '../brand/identity.json' with { type: 'json' };

export const identity: BrandIdentity = identityJson as BrandIdentity;

export type {
  BrandIdentity,
  ColorPalette,
  TypographySystem,
  SpacingScale,
  ShadowSystem,
  BorderSystem,
  MotionSystem,
  GradientSystem,
  LogoOutput,
  BrandStyle,
  ColorHarmony,
  ExportFormat,
} from './types.js';
