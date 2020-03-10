import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTtrigger] = useState(0);

    if (!options.url) {
        return;
    }

    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTtrigger(Date.now());
    };

    useEffect(() => {
        axiosInstance(options)
        .then(data => {
            setState({
            ...state,
            loading: false,
            data
            });
        }).catch(error => {
            setState({ ...state, loading: false, error });
        });
    }, [trigger]);

    return { ...state, refetch };
};

export default useAxios;
