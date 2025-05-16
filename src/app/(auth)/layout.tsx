import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
    return (
      <main className="auth-container">
        <section className="auth-form">
          <div className="auth-box">
            <div className="flex flex-row gap-3">
              <Image
                src="/assets/icons/logo.svg"
                alt="logo"
                width={37}
                height={37}
              />
              <h1 className="text-2xl font-semibold text-white">
                Libraria.studio
              </h1>
              <div>{children}</div>
            </div>
          </div>
        </section>
        <section className="auth-illustration">
          <Image
            src="/assets/images/auth-illustration.png"
            alt="auth illustration"
            height={1000}
            width={1000}
            className="size-full object-cover"
          />
        </section>
      </main>
    );
};

export default AuthLayout;
