/**
 * Re-exports shared CartContext from @trueaid/shared.
 * The web app uses the same cart logic as the mobile app.
 */
export { CartProvider, useCart } from '@trueaid/shared';
export type { CartContextType } from '@trueaid/shared';
export type { AidItem, CartItem } from '@trueaid/shared';

