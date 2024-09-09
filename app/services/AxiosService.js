import { baseURL } from '../env.js';
import { logger } from '../utils/Logger.js';

// @ts-ignore
// eslint-disable-next-line no-undef
export const api = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true,
  api_key: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlF6TkNPRUZHUkRWRVJqVTBSRFkyTURRNU5VSXlRVEZFTXpaRlF6UXlNMFE1T0RaQk1qVkVNQSJ9.eyJodHRwczovL2NvZGV3b3Jrc2NsYXNzcm9vbS5jb20vaWQiOiI2NmRhMjdjMzM0NmMwYmJhMGYyZjcxZmUiLCJpc3MiOiJodHRwczovL2NvZGV3b3Jrc2NsYXNzcm9vbS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjZkYTI3YzNhYTVjNjgyMzM5OTU5YmVjIiwiYXVkIjpbImh0dHBzOi8vY29kZXdvcmtzY2xhc3Nyb29tLmNvbSIsImh0dHBzOi8vY29kZXdvcmtzY2xhc3Nyb29tLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MjU4Mjc1NDQsImV4cCI6MTcyNTkxMzk0NCwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBvZmZsaW5lX2FjY2VzcyIsImF6cCI6InBPWHcyT0d2MUxzWWk3TEVCbURGMDRSTGtYUXZsZG1sIiwicGVybWlzc2lvbnMiOltdfQ.nCvL-TbZoHlviuT4h3Z1NKimhChc6F2kI9sUU6N73yFHukbBAdEdOtqif7rj_IYIIPVajbhnJsm0kFfHrClYIeizblwumA1vTA_FN38kj4qereawo_DYAdcrVceIKzsh9mZxRfvCL-t4bCO0fI4Mdi4NBBI9A7iQr537YlMvcPJmG1uZTQqgGCcPXIfbLLWjikctMG6E74dCzYd4j1vBwcT4CFua-6NkG1hSftDjVLhUTPVwg8kglA3FMNYJ12d2BsjD3NB80I-oSRvJCejZwFsqdqAzbvPylwDu-YWe_0QSWSMgoNSpGKgTCfBjYrAu4J6_VB5MxeECH1L0ev4HXg'
})





api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}