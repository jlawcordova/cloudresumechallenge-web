import { AxiosResponse } from "axios";
import AxiosClient from "../Axios";
import IViewCount from "../../interfaces/IViewCount";

export const patchViewCount = async () => {
  const response: AxiosResponse<IViewCount> = await AxiosClient.patch(
    "/view-count"
  );

  return response.data;
};
