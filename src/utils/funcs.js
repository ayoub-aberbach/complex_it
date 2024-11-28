import { toast } from "react-toastify";

export async function sharePw(result) { await navigator.share({ text: result }) }

export async function writeClipboardText(result) {
    try {
        if (!result || result === "") {
            toast.warning('NOTHING TO COPY');
            return;
        }

        await navigator.clipboard.writeText(result);
        toast.success('COPIED TO CLIPBOARD');
    } catch (error) {
        console.error(error.message);
    }
}
