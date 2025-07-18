import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import AddUserForm from "../forms/adduser";


type AddUserProps = {
    open: boolean;
    setOpen: (value: boolean) => void;

};


export default function AddUser({ open, setOpen }: AddUserProps) {



    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>

            </DialogTrigger>
            <DialogContent className="max-w-xl">
                <h2 className="text-lg font-bold mb-4">Add New User</h2>
                <AddUserForm />
            </DialogContent>
        </Dialog>
    );
}