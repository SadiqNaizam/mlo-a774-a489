import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  subtitle,
  children,
  footer
}) => {
  console.log('AuthFormWrapper loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
          {subtitle && (
            <CardDescription className="pt-2">
              {subtitle}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center text-sm text-gray-600">
          {footer}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthFormWrapper;