import { useCallback, useState } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const request = useCallback(async (url, options = null) => {
        let response;
        let json;

        try{
            setError(null);
            setLoading(true);
            response = await axios.get(url, options)
            json = response.data;
        } catch (erro) {
            json = null;
            setError("Ocorreu um erro durante a requisição");
        } finally {
            setData(json);
            setLoading(false);
            return { response, json };
        }
    }, [])

    return {data, error, loading, request}
}

export default useFetch;