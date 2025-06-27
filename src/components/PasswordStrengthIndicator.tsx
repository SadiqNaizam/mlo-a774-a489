import React, { useMemo } from 'react';
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface PasswordStrengthIndicatorProps {
  password?: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  console.log('PasswordStrengthIndicator loaded');

  const strength = useMemo(() => {
    let score = 0;
    const checks = {
      length: password && password.length >= 8,
      uppercase: /[A-Z]/.test(password || ''),
      lowercase: /[a-z]/.test(password || ''),
      number: /\d/.test(password || ''),
      symbol: /[^A-Za-z0-9]/.test(password || ''),
    };

    if (checks.length) score++;
    if (checks.uppercase) score++;
    if (checks.lowercase) score++;
    if (checks.number) score++;
    if (checks.symbol) score++;

    if (!password) {
      return { label: '', progress: 0, color: '' };
    }

    switch (score) {
      case 1:
      case 2:
        return { label: 'Weak', progress: 33, color: 'bg-red-500' };
      case 3:
      case 4:
        return { label: 'Good', progress: 66, color: 'bg-yellow-500' };
      case 5:
        return { label: 'Strong', progress: 100, color: 'bg-green-500' };
      default:
        return { label: 'Very Weak', progress: 15, color: 'bg-red-500' };
    }
  }, [password]);

  if (!password) {
    return null;
  }

  return (
    <div className="space-y-2">
      <Progress value={strength.progress} className="h-2" indicatorClassName={strength.color} />
      <p className={cn(
          "text-xs font-medium",
          strength.color === 'bg-red-500' && 'text-red-500',
          strength.color === 'bg-yellow-500' && 'text-yellow-600',
          strength.color === 'bg-green-500' && 'text-green-600'
      )}>
        {strength.label}
      </p>
    </div>
  );
};

export default PasswordStrengthIndicator;