"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useState } from "react";
import { motion } from "framer-motion";

interface KnowledgeArticle {
  id: string;
  title: string;
  summary: string;
  category: "development" | "marketing" | "automation" | "general";
  tags: string[];
}

const articles: KnowledgeArticle[] = [
  {
    id: "choosing-right-web-framework",
    title: "How to Choose the Right Web Framework for Your Project",
    summary: "Learn the key factors to consider when selecting a web framework for your next development project, including project requirements, team expertise, and long-term maintenance.",
    category: "development",
    tags: ["web development", "frameworks", "technology selection"]
  },
  {
    id: "optimizing-landing-page-conversion",
    title: "Optimizing Landing Pages for Higher Conversion Rates",
    summary: "Discover proven techniques to optimize your landing pages for better conversion rates, including layout best practices, call-to-action strategies, and A/B testing methodologies.",
    category: "marketing",
    tags: ["landing pages", "conversion optimization", "A/B testing"]
  },
  {
    id: "implementing-ai-chatbots",
    title: "Implementing AI Chatbots: A Practical Guide",
    summary: "A comprehensive guide to implementing AI-powered chatbots on your website, from selecting the right technology to training your bot and measuring its effectiveness.",
    category: "automation",
    tags: ["AI", "chatbots", "customer service"]
  },
  {
    id: "digital-marketing-strategy-guide",
    title: "Building an Effective Digital Marketing Strategy",
    summary: "Learn how to create a comprehensive digital marketing strategy that aligns with your business goals, reaches your target audience, and delivers measurable results.",
    category: "marketing",
    tags: ["digital marketing", "strategy", "campaign planning"]
  },
  {
    id: "workflow-automation-best-practices",
    title: "Workflow Automation Best Practices",
    summary: "Explore best practices for implementing workflow automation in your business to improve efficiency, reduce errors, and free up your team for higher-value work.",
    category: "automation",
    tags: ["workflow", "automation", "business processes"]
  },
  {
    id: "seo-for-developers",
    title: "SEO for Developers: Technical Considerations",
    summary: "A developer-focused guide to technical SEO implementation, including performance optimization, structured data, and mobile-friendly techniques.",
    category: "development",
    tags: ["SEO", "technical SEO", "web performance"]
  },
  {
    id: "measuring-marketing-roi",
    title: "How to Accurately Measure Marketing ROI",
    summary: "Learn how to set up proper tracking and attribution to measure the true ROI of your marketing campaigns across different channels and touchpoints.",
    category: "marketing",
    tags: ["ROI", "analytics", "measurement"]
  },
  {
    id: "cloud-infrastructure-setup",
    title: "Setting Up Scalable Cloud Infrastructure",
    summary: "A guide to setting up cloud infrastructure that can scale with your business needs, including considerations for security, cost management, and performance.",
    category: "development",
    tags: ["cloud", "infrastructure", "scalability"]
  },
  {
    id: "email-automation-guide",
    title: "Email Marketing Automation Guide",
    summary: "Learn how to implement effective email marketing automation sequences to nurture leads, onboard customers, and increase retention.",
    category: "automation",
    tags: ["email marketing", "automation", "lead nurturing"]
  }
];

export default function KnowledgeBase() {
  const [activeCategory, setActiveCategory] = useState<"all" | "development" | "marketing" | "automation" | "general">("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredArticles = articles.filter(article => {
    // Filter by category
    if (activeCategory !== "all" && article.category !== activeCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      return (
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  return (
    <div className="relative">
      <Header />
      <main className="pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white dark:from-zinc-900 dark:to-zinc-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Knowledge Base</h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                Explore our resources to learn best practices, tips, and insights about digital solutions.
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="mx-auto max-w-3xl mb-12 space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-zinc-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "all"
                      ? "bg-amber-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  All Topics
                </button>
                <button
                  onClick={() => setActiveCategory("development")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "development"
                      ? "bg-amber-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  Development
                </button>
                <button
                  onClick={() => setActiveCategory("marketing")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "marketing"
                      ? "bg-amber-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  Marketing
                </button>
                <button
                  onClick={() => setActiveCategory("automation")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "automation"
                      ? "bg-amber-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  Automation
                </button>
              </div>
            </div>
            
            {/* Articles Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700"
                  >
                    <div className="p-6">
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                          article.category === "development" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" :
                          article.category === "marketing" ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" :
                          article.category === "automation" ? "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400" :
                          "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                        }`}>
                          {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-3">{article.title}</h2>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4">{article.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map(tag => (
                          <span key={tag} className="inline-block px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-700 rounded-md text-zinc-600 dark:text-zinc-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`/knowledge-base/${article.id}`}
                        className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                      >
                        Read article
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-16 mx-auto max-w-3xl bg-gradient-to-r from-amber-50 to-teal-50 dark:from-zinc-800 dark:to-zinc-800 rounded-xl p-8 shadow-md border border-amber-100 dark:border-amber-900/20">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Subscribe to our newsletter to receive the latest articles, tips, and insights directly in your inbox.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-600"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-600 to-teal-600 text-white font-medium rounded-lg hover:from-amber-700 hover:to-teal-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
