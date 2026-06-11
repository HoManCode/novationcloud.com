import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.service.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | NovationCloud`,
    description: post.description,
    keywords: [...post.service.keywords],
    alternates: { canonical: `/blog/${post.service.slug}` },
    openGraph: {
      title: `${post.title} | NovationCloud`,
      description: post.description,
      url: `/blog/${post.service.slug}`,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "NovationCloud",
    },
    publisher: {
      "@type": "Organization",
      name: "NovationCloud",
      logo: {
        "@type": "ImageObject",
        url: "https://novationcloud.com/novationcloud-logo.svg",
      },
    },
    mainEntityOfPage: `https://novationcloud.com/blog/${post.service.slug}`,
    about: post.service.keywords,
    areaServed: ["Melbourne", "Victoria", "Australia"],
  };

  return (
    <main className="bg-dark text-white min-h-screen py-12 sm:py-16 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/services"
          className="inline-block text-sm font-semibold text-blue-300 hover:text-blue-100 mb-6"
        >
          Back to services
        </Link>

        <p className="text-xs uppercase tracking-[0.16em] text-blue-300 mb-3">
          {post.service.title}
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {post.title}
        </h1>

        <p className="text-gray-200 text-base sm:text-lg mb-8">
          {post.intro}
        </p>

        <div className="space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                {section.heading}
              </h2>
              <p className="text-gray-200 leading-7">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 p-6 bg-slate-900 border border-white/10 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Need help with this?</h2>
          <p className="text-gray-200 mb-5">{post.cta}</p>
          <Link
            href="/contact"
            className="inline-block px-5 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10"
          >
            Book a consultation
          </Link>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
