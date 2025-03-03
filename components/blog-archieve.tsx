import Image from "next/image";
import Link from "next/link";
import blogImage from "@/public/assets/blog.svg";
const blogPosts = [
  {
    id: 1,
    title: "Prohibited Trading Rules",
    excerpt:
      "we welcome every trading strategy except those designed to exploit our program.",
    image: blogImage,
    slug: "prohibited-trading-rules",
  },
  {
    id: 2,
    title: "Prohibited Trading Rules",
    excerpt:
      "we welcome every trading strategy except those designed to exploit our program.",
    image: blogImage,
    slug: "prohibited-trading-rules-2",
  },
  {
    id: 3,
    title: "Prohibited Trading Rules",
    excerpt:
      "we welcome every trading strategy except those designed to exploit our program.",
    image: blogImage,
    slug: "prohibited-trading-rules-3",
  },
];

export default function BlogArchieve() {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto">
      <h2 className="text-center text-[40px] md:text-[48px] font-violet-sans text-[#2e3b7d] mb-16">
        Blog Archive
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-[32px]  custom-shadow overflow-hidden flex flex-col"
          >
            <div className="relative h-[260px] w-full">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-[24px] font-violet-sans text-[#2e3b7d] mb-4">
                {post.title}
              </h3>
              <p className="text-[#2e3b7d] mb-6 flex-grow">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-center py-3 px-6 border border-[rgba(0, 0, 0, 0.16)] rounded-2xl text-[#2e3b7d] hover:bg-[#f8faff] transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
