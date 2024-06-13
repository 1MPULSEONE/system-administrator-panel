import {useMutation} from "@tanstack/react-query";

export const PING_MUTATE_KEY = ['ping'];

export const usePingMutate = () => {
    return useMutation({
        mutationKey: PING_MUTATE_KEY,
        mutationFn: async  (ip) => {

            const requestBody = {
                ip : ip,
            };

            const response =  await  fetch('http://localhost:5000/ping',{
                mode: 'cors',
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                body: JSON.stringify(requestBody)
            });

            const body = await response.json();

            if (response.status !== 200) {
                throw Error(body.message)
            }

            return body;
        }
    })
}