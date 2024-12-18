import { useRequest } from 'ahooks';

import { API_PATH } from '@api/constant';
import { privateRequest, request } from '@api/request';

interface IOptionsRequest {
  onSuccess?: (r: any) => void;
  onError?: (e: any) => void;
}

export const useSubcribleUser = (options?: IOptionsRequest) => {
  return useRequest(
    (email: string) => {
      return request.post(API_PATH.SUBCRIBLE_USER(email), {});
    },
    {
      manual: true,
      ...options,
    },
  );
};

const serviceGetConfigLdPage = async () => {
  return await privateRequest(request.get, API_PATH.SET_UP_LDPAGE);
};

export const useGetConfigLdPage = () => {
  const { data, loading, run, refreshAsync } = useRequest(async () => {
    return await serviceGetConfigLdPage();
  });

  return {
    dataConfigLdPage: data,
    run,
    loading,
    refreshAsync,
  };
};
