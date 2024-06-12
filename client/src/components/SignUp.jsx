import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
  "https://cnojvmxqbjmdqqvdmgsf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNub2p2bXhxYmptZHFxdmRtZ3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMjczODcsImV4cCI6MjAzMzcwMzM4N30.gpS2mXB8Dbec8Cw12JLJi6-Ewha9n8Xr5-49GoXB9jI"
);

const RegisterExample = ({setIsOpen}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        console.error(email, password);
      } else {
        console.log("Успешная регистрация. Пользователь:", user);
      }
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" bg-slate-100 h-[450px] w-96 rounded-2xl shadow-2xl border border-gray-600">
        <div className="flex flex-col items-center justify-between h-[450px] pt-6 pb-6">
          <div className="flex flex-col items-center gap-3">
            <p className=" text-2xl">Sign up</p>
            <div className="bg-gray-400 h-0.5 w-96 flex items-center rounded-full"></div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <input
              className="w-64 px-4 py-3 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500 placeholder:text-lg"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-64 px-4 py-3 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500 placeholder:text-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              className=" w-48 py-2 bg-violet-700 text-white rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
              onClick={handleRegister}
            >
              Submit
            </button>
            <div className=" text-blue-600 focus:border-blue-700" onClick={() => setIsOpen(true)}>
              Have you already Sign up? Sign in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterExample;