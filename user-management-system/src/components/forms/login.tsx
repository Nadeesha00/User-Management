import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const handlelogin = (data: LoginFormInputs) => {
    console.log("Login Data", data);
  };

  return (
    <form
      onSubmit={handleSubmit(handlelogin)}
      className="flex flex-col items-center w-full"
    >
      <div className="w-full h-full flex flex-col gap-6">
        {/* Email Field */}
        <div className="flex flex-col items-start gap-[6px] self-stretch">
          <Label
            htmlFor="email"
            className="text-foreground text-sm font-medium leading-none font-inter overflow-hidden text-ellipsis self-stretch"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="font-inter text-sm"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
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

        {/* Submit Button */}
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
