import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "@/auth";
import { Label } from "@radix-ui/react-label";

const Body = () => {
  return (
    <div>
      <div className="text-center mb-4">
        <h1 className="text-4xl font-semibold">Sign in</h1>
      </div>
      <form
        action={async formData => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <div className="grid w-full items-center gap-2">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-1 mt-3">
        <Button>Sign in</Button>
        <Button variant="ghost">Create a new account</Button>
      </div>
      <Separator className="my-1" />
      <div>
        <form
          className="flex flex-col gap-2 mt-3"
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <Button type="submit" variant="outline">
            <FaGithub className="mr-1 size-4 mb-0.5" />
            GitHub
          </Button>
        </form>
        <form
          className="flex flex-col gap-2 mt-3"
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button type="submit" variant="outline">
            <FaGoogle className="mr-1 size-4 mb-0.5" />
            Google
          </Button>
        </form>
      </div>
      <p className="font-light text-sm mt-2">
        After clicking, you agree to our{" "}
        <a href="" className="underline">
          Term of service
        </a>{" "}
        and{" "}
        <a href="" className="underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default Body;
