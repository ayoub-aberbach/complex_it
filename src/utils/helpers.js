import { toast } from "react-toastify";

export const sharePw = async (result) => {
    if (navigator.share) {
        await navigator.share({ text: result });
        return;
    }

    toast.warning("Sharing is Unsupported!!");
};

export async function copyToClip(result) {
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
