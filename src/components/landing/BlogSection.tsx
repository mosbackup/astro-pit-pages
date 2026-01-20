import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Introducing Look-Ahead-Bench: A New Standard for Financial AI",
    excerpt: "We're releasing our comprehensive benchmark for detecting lookahead bias in LLMs. Learn how we tested 35+ models across 6 financial tasks.",
    category: "Research",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "The Scaling Paradox: Why Bigger Models Fail at Finance",
    excerpt: "Our research reveals a counterintuitive finding: larger LLMs show greater alpha decay. Here's why model size can hurt financial predictions.",
    category: "Research",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Getting Started with PiT-Inference API",
    excerpt: "A step-by-step guide to integrating point-in-time language models into your financial AI workflow.",
    category: "Tutorial",
    date: "Jan 5, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    title: "Understanding Temporal Data Contamination",
    excerpt: "How standard LLMs inadvertently 'learn' future market events during training and why this matters for quantitative finance.",
    category: "Research",
    date: "Dec 28, 2024",
    readTime: "10 min read",
    featured: false,
  },
];

export const BlogSection = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="absolute inset-0 glow-bg opacity-20" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div>
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
              Blog
            </span>
            <h2 className="text-3xl font-bold md:text-5xl">
              Latest <span className="gradient-text">Updates</span>
            </h2>
          </div>
          <Button variant="outline" className="gap-2">
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured Post */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group glass-card cursor-pointer rounded-2xl p-8 transition-all hover:border-primary/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Featured
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">
                  {featuredPost.category}
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-primary">
                {featuredPost.title}
              </h3>
              <p className="mb-6 text-muted-foreground">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>
            </motion.article>
          )}

          {/* Regular Posts */}
          <div className="space-y-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card cursor-pointer rounded-xl p-6 transition-all hover:border-primary/50"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Tag className="h-3 w-3 text-primary" />
                  <span className="text-xs text-primary">{post.category}</span>
                </div>
                <h4 className="mb-2 font-semibold transition-colors group-hover:text-primary">
                  {post.title}
                </h4>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
