import apiClient from './apiClient';
import type { Application } from './types/Application';

export const appService = {
  getApplications: async (): Promise<Application[]> => {
    const { data } = await apiClient.get("/applications");
    return data;
  },

  getApplicationById: async(applicationId: number): Promise<Application | null> => {
    const { data } = await apiClient.get(`/applications/${applicationId}`);
    return data;
  },

  getApplicationsByStatus: async (statusId): Promise<Application[]> => {
    const { data } = await apiClient.get(`/applications/status/${statusId}`);
    return data;
  },

  saveApplication: async (appPayload): Promise<Application> => {
    const { data } = await apiClient.post(`/applications`, appPayload);
    console.log(data);
    return data;
  },

  deleteApplication: async(appId) => {
    const { data } = await apiClient.delete(`/applications`,
      { params : { applicationId: appId }
      });
    return data;
  }

}