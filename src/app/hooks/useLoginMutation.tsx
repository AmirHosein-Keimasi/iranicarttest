import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface LoginResponse {
  message: string;
  token?: string;
}

export const useLoginMutation = () => {
  return useMutation<LoginResponse, Error, string>({
    mutationFn: async (phone: string) => {
      const res = await axios.post<LoginResponse>(
        "https://api.irxe.com/api/v1/login",
        {
          phone_number: phone,
        }
      );
      return res.data;
    },
  });
};
