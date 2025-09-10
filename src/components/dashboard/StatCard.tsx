import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  variant: "cases" | "deaths" | "recovered" | "active";
  className?: string;
}

const variantStyles = {
  cases: "bg-blue-50 text-white border-l-4 border-blue-500",
  deaths: "bg-red-50 text-white border-l-4 border-red-500", 
  recovered: "bg-green-50 text-white border-l-4 border-green-500",
  active: "bg-purple-50 text-white border-l-4 border-purple-500",
};

export function StatCard({ title, value, icon: Icon, variant, className }: StatCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <Card className={cn("overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white border", className)}>
      <CardHeader className={cn("pb-3 bg-gradient-to-r", 
        variant === "cases" && "from-blue-500 to-blue-600",
        variant === "deaths" && "from-red-500 to-red-600", 
        variant === "recovered" && "from-green-500 to-green-600",
        variant === "active" && "from-purple-500 to-purple-600"
      )}>
        <CardTitle className="flex items-center justify-between text-sm font-semibold text-white">
          {title}
          <Icon className="h-5 w-5" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 bg-white">
        <div className="text-3xl font-bold text-gray-900 mt-2">
          {formatNumber(value)}
        </div>
        <p className="text-sm text-gray-600 mt-2 font-medium">
          Total {title.toLowerCase()}
        </p>
      </CardContent>
    </Card>
  );
}