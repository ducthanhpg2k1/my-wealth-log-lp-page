import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'sonner';

const AppLayout = ({ children }: any) => {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>

      <Toaster position='top-center' />
    </>
  );
};

export default AppLayout;
