import { useCallback, useEffect } from "react";
import useLatestRef from "./useLatestRef";
import eventEmitter from "@/services/event.emitter";

const useEventEmitter = (
  eventName: string,
  callback: (...args: unknown[]) => unknown
) => {
  const callbackRef = useLatestRef(callback);

  const handleEvent = useCallback(
    (...data: unknown[]) => {
      callbackRef.current(...data);
    },
    [callbackRef]
  );

  useEffect(() => {
    if (eventName?.trim()) {
      eventEmitter.on(eventName, handleEvent);
    }
    return () => {
      eventEmitter.off(eventName, handleEvent);
    };
  }, [eventName, handleEvent]);
};

export default useEventEmitter;
