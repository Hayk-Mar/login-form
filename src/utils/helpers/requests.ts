import { AxiosError, AxiosPromise } from "axios";
import { RequestMessages } from "utils/enums/api";

export const send = async (axiosEndpoint: () => AxiosPromise) => {
    try {
        const result = await axiosEndpoint();

        if (result.status === 200) {
            return result.data;
        }

        const error = Array.isArray(result.data?.detail) ? result.data?.detail[0].error : result.data?.detail || RequestMessages.Error
        return {
            hasError: true,
            message: error,
        };
    } catch (err) {
        if (err instanceof AxiosError) {
            const error = Array.isArray(err.response?.data?.detail) ? err.response?.data?.detail[0].error : err.response?.data?.detail || RequestMessages.Error
            return {
                hasError: true,
                message: error,
            };
        }

        return {
            hasError: true,
            message: RequestMessages.Error,
        };
    }
};
