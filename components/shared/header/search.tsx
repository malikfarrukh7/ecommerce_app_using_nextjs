import {Input} from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
const categories = ["Mens", "Womens", "Kids", "Accessories", "Sale"];
export default function Search(){
    return (
        <form action= '/search' className ="flex items-stretch h-9">
            <Select name ="category">

                <SelectTrigger className= 'w-auto h-full dark:border-gray200  bg-gray-100 text-black border-r rounded-r-none rounded-l-md rtl: rounded-r-md rtl: rounded-l-none'>
                    <SelectValue placeholder= "All" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((category) =>(
                        <SelectItem key ={category} value ={categories}>
                            {categories}
                        </SelectItem>
                    ))}

                    </SelectContent>



            </Select>

            <Input 
            className="flex-1 rounded-none dark:border"
            name="q" 
            placeholder="Search products..."
            type='search'
              />
        </form>
        
    )
}