import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

const ConfirmationDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full p-4">
        <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        <p className="mt-2">{message}</p>
        <div className="flex justify-end mt-4">
          <Button onClick={onClose} className="mr-2">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-red-600 hover:bg-red-700">
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
