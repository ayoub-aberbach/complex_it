import { toast } from "react-toastify";

export const sharePw = async (result) => {
    if (navigator.share) {
        await navigator.share({ text: result });
        return;
    }

    navigator.vibrate(200);
    toast.warning("Sharing is Unsupported!!");
};

export const copyToClip = async (result) => {
    try {
        if (!result || result === "") {
            navigator.vibrate(200);
            toast.warning('Nothing to copy');

            return;
        }

        await navigator.clipboard.writeText(result);
        toast.success('Copied to Clipboard');
    } catch (error) {
        navigator.vibrate(200);
        toast.error(error.message);
        console.error(error.message);
    }
}
