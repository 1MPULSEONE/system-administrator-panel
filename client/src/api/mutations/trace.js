import {useMutation} from "@tanstack/react-query";

export const TRACE_MUTATE_KEY = ['trace'];

export const useTraceMutate = () => {
        return useMutation({
            mutationKey: TRACE_MUTATE_KEY,
            mutationFn: async  (ip) => {

                const requestBody = {
                    target: ip,
                };

                const response =  await  fetch('http://localhost:5000/trace', {
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