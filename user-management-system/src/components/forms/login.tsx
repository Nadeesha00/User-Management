import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { login } from '../../services/userService';
import { useNavigate } from "react-router-dom";

type LoginFormInputs = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const handlelogin = async (data: LoginFormInputs) => {
    const hardcodedUsername = "admin";
    const hardcodedPassword = "123456";

    if (data.username === hardcodedUsername && data.password === hardcodedPassword) {
      alert("Login successful");
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handlelogin)}
      className="flex flex-col items-center w-full"
    >
      <div className="w-full h-full flex flex-col gap-6">
       
        <div className="flex flex-col items-start gap-[6px] self-stretch">
          <Label
            htmlFor="username"
            className="text-foreground text-sm font-medium leading-none font-inter overflow-hidden text-ellipsis self-stretch"
          >
            Username
          </Label>
          <Input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
            className="font-inter text-sm"
            placeholder="Enter your username"
          />
        </div>

       
        <div className="flex flex-col items-start gap-[6px] self-stretch">
          <Label
            htmlFor="password"
            className="text-foreground text-sm font-medium leading-none font-inter overflow-hidden text-ellipsis self-stretch"
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className="font-inter text-sm"
            placeholder="Enter your password"
          />
        </div>

        
        <Button
          type="submit"
          className="self-stretch px-8 py-3 bg-blue-500 text-white rounded-[32px] mt-9 font-medium  h-12"
        >
          Login
        </Button>
      </div>
    </form>
  );
}
