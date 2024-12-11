import { useRequest } from 'ahooks';

import { API_PATH } from '@api/constant';
import { request } from '@api/request';

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