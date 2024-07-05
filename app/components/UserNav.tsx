"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function UserNav() {
    return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
        <Avatar className="h-10 w-10 rounded-sm">
          <AvatarImage src="https://tazagpelawpqtlsesyno.supabase.co/storage/v1/object/public/imagesnetflix-clone/avatar.png"/>
          <AvatarFallback className="rounded-sm">Irfan</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenu>
        <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Irfan</p>
            <p className="text-xs leading-none text-muted-foreground">irfanhafeezkhan86@gmail.com</p>
        </div>
        </DropdownMenu>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
  </DropdownMenu>
  );
}
