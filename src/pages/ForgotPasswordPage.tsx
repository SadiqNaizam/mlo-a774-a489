import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>;

const ForgotPasswordPage = () => {
  console.log('ForgotPasswordPage loaded');
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    setIsLoading(true);
    console.log('Password reset requested for:', data.email);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("If an account with that email exists, a password reset link has been sent.");
      form.reset();
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AuthHeader />
      <main className="flex-1">
        <AuthFormWrapper
          title="Forgot Your Password?"
          subtitle="No problem. Enter your email below and we'll send you a reset link."
          footer={
            <p>
              Remember your password?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Sign In
              </Link>
            </p>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Reset Link
              </Button>
            </form>
          </Form>
        </AuthFormWrapper>
      </main>
      <AuthFooter />
    </div>
  );
};

export default ForgotPasswordPage;