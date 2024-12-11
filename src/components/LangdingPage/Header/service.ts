import { useRequest } from 'ahooks';

import { API_PATH } from '@api/constant';
import { request } from '@api/request';

interface IOptionsRequest {
  onSuccess?: (r: any) => void;
  onError?: (e: any) => void;
}

export const useFeedBackUser = (options?: IOptionsRequest) => {
  return useRequest(
    ({ respondent, comment }: { respondent: string; comment: string }) => {
      return request.post(API_PATH.FEED_BACK_USER, {
        data: {
          respondent,
          comment,
        },
      });
    },
    {
      manual: true,
      ...options,
    },
  );
};