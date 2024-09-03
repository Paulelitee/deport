"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
const posts = [
    {
        title: 'Feed',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },{
        title: 'Content',
        href: '/content'
    },{
        title: 'Guestbook',
        href: '/guestbook'
    },
]

export default function MainNav() {

    const path = usePathname()
    console.log(path)

    return <div className="capitalize flex justify-around my-5 font-bold">
        {posts.map(
            (post, id) => <Link href = {`${post.href}`}
            className = { path === post.href ? 'nav-element nav-active' : 'nav-element' } key = {id}>{post.title}</Link>
        )}
    </div>
}