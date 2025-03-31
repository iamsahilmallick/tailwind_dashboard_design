// useCopyToClipboard.ts
import copy from "copy-to-clipboard";
import { useState } from "react";
import { toast } from "sonner";

interface CopyOptions {
  debug?: boolean;
  message?: string;
}

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyText = (text: string, options: CopyOptions = {}) => {
    const { debug = false, message = "Text copied!" } = options;
    try {
      const success = copy(text, {
        debug,
        message
      });

      if (success) {
        setIsCopied(true);
        toast.success(message);
      } else {
        setIsCopied(false);
        toast.error("Failed to copy text!");
      }
    } catch (error) {
      setIsCopied(false);
      toast.error("An error occurred while copying.");
      console.error(error);
    }
  };

  return {
    isCopied,
    copyText
  };
};

export default useCopyToClipboard;
