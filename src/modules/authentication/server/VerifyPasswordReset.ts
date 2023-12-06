import { ContextFunctions } from '@dfl/next-ssr-common';

export const verifyPasswordReset: ContextFunctions<{ key: string }, any> = async ({ params , req}) => {
  return { resetKey: params?.key };
};