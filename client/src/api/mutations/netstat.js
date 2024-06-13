import { useMutation } from "@tanstack/react-query";

export const NETSTAT_MUTATE_KEY = ['netstat'];

export const useNetstatMutate = () => {
    return useMutation({
        mutationKey: NETSTAT_MUTATE_KEY,
        mutationFn: async  (ip) => {

            const requestBody = {
                ip : ip,
            };

            const response =  await  fetch('http://localhost:5000/netstat', {
                mode: 'cors',
                method:'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body:  JSON.stringify(requestBody) ,
            });

            const body = await response.json();

            if (response.status !== 200) {
                throw Error(body.message)
            }
            return body;
        }
    })
}