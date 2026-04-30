import {ToastContainer, toast} from "react-toastify";

const Toast = () => {
    const notificacao = (msg:string) => toast.success(msg);
    const erro = (msg:string) => toast.error(msg);

    return (
        <ToastContainer/>
    )
}

export default Toast;