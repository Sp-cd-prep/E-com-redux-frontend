import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toastify = (message) => {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
}

