import { UserIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex items-center gap-4">
      <div>
        <nav className="flex items-center gap-4">
            <link href="/cart">
            <UserIcon className="h-5 w-5" />
            <span>Sign In</span>
            </link>

            <link href="/cart">
            <ShoppingCartIcon className="h-5 w-5" />
            <span className= 'font-bold'>Cart</span>
            </link> 
        </nav>
      </div>
    </div>
  );
}