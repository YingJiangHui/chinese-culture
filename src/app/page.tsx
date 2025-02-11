import Link from "next/link";


export default function Home() {
    return (
            <div
                className="w-full flex-1 flex gap-8 justify-center items-center h-full font-[family-name:var(--font-geist-sans)]">
                <div className="flex gap-4 p-5 flex-wrap row-start-2 items-center sm:items-start">
                    <Link className="p-10 rounded-sm bg-red-100 text-5xl font-bold" href={`/liuren`}>六壬</Link>
                    <Link className="p-10 rounded-sm bg-red-100 text-5xl font-bold" href={`/liuren`}>干支</Link>
                    <Link className="p-10 rounded-sm bg-blue-100 text-5xl font-bold" href={`/liuren`}>子午流注</Link>
                    <Link className="p-10 rounded-sm bg-green-100 text-5xl font-bold" href={`/liuren`}>灵龟八法</Link>
                </div>
            </div>

    );
}
