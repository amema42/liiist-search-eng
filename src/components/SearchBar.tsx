"use client"
import { Loader2, Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useRef, useState, useTransition } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [isSearching, startTransition] = useTransition()
    const router = useRouter()
    const [query, setQuery] = useState <string>('')
    const search = () => {
        startTransition(() => {
            router.push(`/search?query=${query}`)
        })
    }

    return (
    <div className="relative w-full h-14 flex flex-col bg-white">
        <div className="relative h-14 z-10 rounded-md">
            <Input
            disabled={isSearching}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter"){
                    search()
                }
                if (e.key === "Escape"){
                    inputRef?.current?.blur() /*Accesability Esc Key*/
                }
            }} ref={inputRef} className="absolute inset-0 h-full rounded-3xl" />
            <Button
            disabled={isSearching}
            //size="sm"
            onClick={search} 
            className="absolute right-0 inset-y-0 h-full rounded-r-3xl rounded-l-none">
                { isSearching ? <Loader2 className="h-8 w-8 animate-spin"/> :
                <Search className="h-8 w-8"/> }
            </Button>
        </div>
    </div>
    )
}

export default SearchBar