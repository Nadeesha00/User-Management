import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";



type FormData = {
    name: string;
    email: string;
    address: string;
    telephone: string;
    profileImage: string;
};



export default function AddUserForm() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register("name", { required: true })} />
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email", { required: true })} />
            </div>

            <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" {...register("address", { required: true })} />
            </div>

            <div>
                <Label htmlFor="telephone">Telephone</Label>
                <Input id="telephone" {...register("telephone", { required: true })} />
            </div>

            <div>
                <Label htmlFor="profileImage">Profile Image</Label>
                <Input id="profileImage" type="file" accept="image/*" {...register("profileImage", { required: true })} />
            </div>

            <Button type="submit" className="w-full bg-blue-600 text-white">
                Save
            </Button>
        </form>
    );
}
