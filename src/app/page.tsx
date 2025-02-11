import Link from "next/link";


export default function Home() {
    return (
            <div
                className="w-full flex-1 flex gap-8 justify-center items-center h-full font-[family-name:var(--font-geist-sans)]">
                <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                    <Link className="p-10 rounded-sm bg-red-100 text-5xl font-bold" href={`/liuren`}>六壬</Link>
                </div>
            </div>

    );
}
