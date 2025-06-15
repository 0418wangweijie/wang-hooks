import {useRef,useMemo} from "react";
import isEqual from "@/utils/isEqual.ts";

const useDeepCompareMemo = <T>(fn:()=>T,deps: any[]) => {
    const firstRender = useRef<{value:T,deps:any[]} | null>(null)

    if (firstRender.current === null || !isEqual(deps,firstRender.current.deps)) {
        firstRender.current = {
            value: fn(),
            deps: deps,
        }
    }

    return useMemo(()=> firstRender.current!.value, deps)
}

export default useDeepCompareMemo