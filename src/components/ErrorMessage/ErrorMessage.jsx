import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const errorMessage = ({ message }) => {
  toast.error(message); 

  return null;
};

export default errorMessage;
