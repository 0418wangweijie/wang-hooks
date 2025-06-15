import {DependencyList,  useEffect, useRef} from "react";

type EffectCallback = () => void | (() => void | undefined);

const useUpdateEffect = (fn: EffectCallback, deps: DependencyList): void => {
    const firstRender = useRef<boolean>(true)

    console.log('useUpdateEffect', deps)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            return fn()
        }
    }, deps);
}

export default useUpdateEffect;