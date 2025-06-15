import '@testing-library/jest-dom';
import {renderHook} from "@testing-library/react";
import useUpdateEffect from "../index.ts";

describe('useUpdateEffect', () => {
    it('should skip execution on first render', () => {
        const callback = jest.fn();
        renderHook(() => useUpdateEffect(callback,[]));

        expect(callback).not.toHaveBeenCalled()
    });
})