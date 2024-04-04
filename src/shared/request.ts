import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

export class RequestService {
  
    private async request<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios(config);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError: AxiosError = error;
                console.error('Error en la solicitud:', axiosError.message);
                throw new Error('Error en la solicitud');
            } else {
                console.error('Error en la solicitud:', error);
                throw new Error('Error en la solicitud');
            }
        }
    }

    public async get<T>(url: string): Promise<T> {
        return this.request<T>({ method: 'get', url: `${url}` });
    }

    public async post<T>(url: string, data?: any): Promise<T> {
        return this.request<T>({ method: 'post', url: `${url}`, data });
    }

    public async patch<T>(url: string, data?: any): Promise<T> {
        return this.request<T>({ method: 'patch', url: `${url}`, data });
    }

}

