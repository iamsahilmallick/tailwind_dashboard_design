import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Left side - branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 text-white flex-col justify-between dark:bg-gray-900">
        <div>
          <h1 className="text-4xl font-bold">Admin Templates</h1>
          <p className="mt-2 text-secondary/90 dark:text-secondary/70">
            Your own admin dashboard
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm dark:bg-white/5">
            <p className="text-lg font-medium mb-2">
              Generate content instantly
            </p>
            <p className="text-white/80 dark:text-white/60">
              Our AI can help you draft emails, summarize documents, create
              social media posts and more!
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm dark:bg-white/5">
            <p className="text-lg font-medium mb-2">
              Remember your conversations
            </p>
            <p className="text-white/80 dark:text-white/60">
              Access your past chats and generated content in a well-organized
              history, making it easy to reference or continue work.
            </p>
          </div>
        </div>

        <div className="text-white/60 text-sm dark:text-white/40">
          © 2025 AI Chat Pro. All rights reserved.
        </div>
      </div>

      {/* Right side - authentication form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
