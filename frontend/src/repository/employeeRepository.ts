import { JsonServerService } from "../service/jsonServerService";
import { ApiService } from "../api/api";
import { Employee } from "../utils/types/Employee";
import { FetchResponse } from "../api/models";

export const jsonServerService = new JsonServerService();
export const apiService = new ApiService(jsonServerService);

export interface FetchAllEmployee {
  (params: Partial<Employee>): Promise<FetchResponse<Employee[]>>;
}

export const EmployeeRepository = {
  fetchAll: async (
    params: Partial<Employee>
  ): Promise<FetchResponse<Employee[]>> => {
    return apiService.get<Employee[]>("/employees", undefined, {
      ...params,
    });
  },
};
