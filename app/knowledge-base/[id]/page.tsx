"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { motion } from "framer-motion";

interface KnowledgeArticle {
  id: string;
  title: string;
  summary: string;
  category: "development" | "marketing" | "automation" | "general";
  tags: string[];
  content?: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
  relatedArticles?: string[];
  author?: {
    name: string;
    position: string;
    image: string;
  };
  publishDate?: string;
  lastUpdated?: string;
  featuredImage?: string;
}

// This data would normally come from a CMS or API
// For now, we're expanding the articles data with more detailed content
const articles: KnowledgeArticle[] = [
  {
    id: "choosing-right-web-framework",
    title: "How to Choose the Right Web Framework for Your Project",
    summary: "Learn the key factors to consider when selecting a web framework for your next development project, including project requirements, team expertise, and long-term maintenance.",
    category: "development",
    tags: ["web development", "frameworks", "technology selection"],
    content: {
      introduction: "Selecting the right web framework is one of the most crucial decisions in the early stages of a development project. The framework you choose will impact development speed, team productivity, application performance, and long-term maintainability. This guide will help you navigate this important decision with confidence.",
      sections: [
        {
          title: "Understand Your Project Requirements",
          content: "Before evaluating any frameworks, clearly define your project's functional and non-functional requirements. Consider factors such as application type (e.g., content-heavy site, single-page application, e-commerce platform), expected traffic, performance needs, scalability requirements, and security considerations. Different frameworks excel in different scenarios, so understanding your specific needs is essential."
        },
        {
          title: "Evaluate Your Team's Expertise",
          content: "Your team's familiarity with specific technologies should significantly influence your choice. Adopting a framework that aligns with your team's existing skills can accelerate development and reduce errors. If your team needs to learn a new framework, factor in the learning curve and training time. Consider whether the framework has good documentation, tutorials, and community support to facilitate the learning process."
        },
        {
          title: "Consider Long-term Maintenance",
          content: "Your application will likely exist for years, so evaluating the long-term viability of a framework is crucial. Research the framework's maturity, stability, and community support. Check the framework's release history, issue resolution time, and backward compatibility policies. A framework with an active community and corporate backing is more likely to receive regular updates, security patches, and new features."
        },
        {
          title: "Assess Performance and Scalability",
          content: "Different frameworks have different performance characteristics. Some are optimized for rendering speed, others for data processing or handling high concurrent traffic. Review benchmarks and case studies to understand how well the framework performs under conditions similar to your expected use case. Consider whether the framework provides built-in optimization features, server-side rendering capabilities, or code-splitting to improve performance."
        },
        {
          title: "Evaluate the Ecosystem and Extensions",
          content: "A robust ecosystem of libraries, plugins, and tools can significantly enhance development efficiency. Assess what built-in features the framework provides versus what you'll need to add through third-party extensions. Check if commonly needed functionalities (authentication, form handling, state management, etc.) are available within the ecosystem. Also, consider how well the framework integrates with your preferred development tools and workflow."
        }
      ],
      conclusion: "There's no one-size-fits-all answer when it comes to choosing a web framework. The right choice depends on your specific project requirements, team expertise, development timeline, and long-term maintenance considerations. Take time to thoroughly evaluate your options against these criteria. Don't simply choose the most popular framework or follow the latest trend—select the tool that best aligns with your project's needs and constraints. Remember that the framework is just a means to an end; the ultimate goal is to build a successful, maintainable application that serves your users effectively."
    },
    author: {
      name: "Marko Petrovic",
      position: "Senior Developer",
      image: "https://via.placeholder.com/256x256/3498db/ffffff?text=M"
    },
    publishDate: "2025-03-15",
    lastUpdated: "2025-05-10",
    featuredImage: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    relatedArticles: ["cloud-infrastructure-setup", "seo-for-developers"]
  },
  {
    id: "optimizing-landing-page-conversion",
    title: "Optimizing Landing Pages for Higher Conversion Rates",
    summary: "Discover proven techniques to optimize your landing pages for better conversion rates, including layout best practices, call-to-action strategies, and A/B testing methodologies.",
    category: "marketing",
    tags: ["landing pages", "conversion optimization", "A/B testing"],
    content: {
      introduction: "An effective landing page is a critical component in your digital marketing strategy. It's often the first impression potential customers have of your product or service, and it can make or break your conversion rates. This guide covers essential techniques to optimize your landing pages for maximum conversions.",
      sections: [
        {
          title: "Clarify Your Value Proposition",
          content: "Your value proposition should be immediately clear to visitors. Within seconds, they should understand what you're offering, why it's valuable, and how it's different from competitors. Use a compelling headline that addresses the visitor's primary pain point or desire. Support this with a subheading that provides additional context and benefits. Avoid jargon and focus on communicating value in customer-centric language."
        },
        {
          title: "Optimize Visual Hierarchy",
          content: "The visual layout of your landing page should guide visitors' attention to the most important elements. Use size, color, contrast, and whitespace to create a clear visual hierarchy. Your primary call-to-action should stand out visually. Important information should be placed 'above the fold' (visible without scrolling). Use images that support your message rather than distract from it. Consider using directional cues like arrows or a person's gaze to direct attention to key elements."
        },
        {
          title: "Craft Compelling CTAs",
          content: "Your call-to-action (CTA) is perhaps the most critical element on your landing page. Use action-oriented, specific language that clearly communicates what happens when the button is clicked (e.g., 'Get Your Free E-book' instead of 'Submit'). Test different button colors, sizes, and positions to find what works best. Consider adding secondary micro-conversions for visitors who aren't ready for your primary offer. Reduce friction by minimizing the steps required to complete the action."
        },
        {
          title: "Implement Strategic A/B Testing",
          content: "A/B testing is essential for continuous landing page optimization. Start by testing high-impact elements like headlines, CTAs, and hero images before moving to smaller details. Test one element at a time to clearly identify what impacts conversion rates. Ensure your tests run long enough to achieve statistical significance. Use heat maps and session recordings to gain qualitative insights into user behavior. Create a prioritized testing roadmap based on potential impact and implementation effort."
        },
        {
          title: "Optimize for Mobile Users",
          content: "With mobile traffic accounting for more than half of web traffic, mobile optimization is essential. Ensure your landing page loads quickly on mobile devices (under 3 seconds ideally). Use a responsive design that adapts to different screen sizes. Make CTAs large enough to be easily tapped with a finger. Simplify forms for mobile users by reducing fields and using appropriate input types. Test your page across various devices and browsers to ensure consistent functionality."
        }
      ],
      conclusion: "Landing page optimization is not a one-time task but an ongoing process of testing and refinement. What works for one audience or offer may not work for another. By focusing on clear value communication, strategic visual design, compelling calls-to-action, systematic testing, and mobile optimization, you can continuously improve your conversion rates. Remember to always make decisions based on data rather than assumptions or personal preferences. With patience and persistence, even small improvements in conversion rates can lead to significant revenue gains over time."
    },
    author: {
      name: "Ana Jovanovic",
      position: "Marketing Strategist",
      image: "https://via.placeholder.com/256x256/e74c3c/ffffff?text=A"
    },
    publishDate: "2025-04-08",
    lastUpdated: "2025-05-12",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    relatedArticles: ["measuring-marketing-roi", "digital-marketing-strategy-guide"]
  },
  {
    id: "implementing-ai-chatbots",
    title: "Implementing AI Chatbots: A Practical Guide",
    summary: "A comprehensive guide to implementing AI-powered chatbots on your website, from selecting the right technology to training your bot and measuring its effectiveness.",
    category: "automation",
    tags: ["AI", "chatbots", "customer service"],
    content: {
      introduction: "AI-powered chatbots have evolved from simple rule-based systems to sophisticated virtual assistants capable of handling complex customer interactions. When implemented effectively, they can provide 24/7 customer support, qualify leads, and reduce operational costs. This guide walks you through the process of implementing an AI chatbot that delivers real business value.",
      sections: [
        {
          title: "Define Clear Objectives and Use Cases",
          content: "Before selecting any technology, clearly define what you want your chatbot to accomplish. Common use cases include customer support, lead generation, appointment scheduling, and product recommendations. Identify specific tasks the bot should handle and set measurable goals (e.g., reducing support tickets by 30%, increasing qualified leads by 20%). Understanding your objectives will guide all subsequent implementation decisions."
        },
        {
          title: "Choose the Right Technology Stack",
          content: "The chatbot landscape offers various implementation options. Rule-based chatbots follow predefined paths and are suitable for simple, structured interactions. AI-powered chatbots using NLP (Natural Language Processing) can understand intent and handle more complex conversations but require more setup and training. Consider whether to build a custom solution or use existing platforms like Dialogflow, Microsoft Bot Framework, or industry-specific solutions. Evaluate factors such as integration capabilities, language support, and scalability when making your decision."
        },
        {
          title: "Design Conversational Flows",
          content: "Well-designed conversation flows are crucial for chatbot effectiveness. Map out common user journeys and create dialog trees that cover various scenarios. Design fallback responses for when the bot doesn't understand the query. Include clear paths for human handoff when the conversation exceeds the bot's capabilities. Create a personality and tone that aligns with your brand. Use progressive disclosure to avoid overwhelming users with too much information at once."
        },
        {
          title: "Train and Test Your Chatbot",
          content: "For AI-powered chatbots, training is an essential step. Create a diverse dataset of potential user queries covering various intents and phrasings. Include colloquialisms, misspellings, and different ways users might ask for the same thing. Test extensively with real users before full deployment. Monitor early interactions closely to identify and fix misunderstandings or gaps in the bot's knowledge. Remember that training is an ongoing process, not a one-time task."
        },
        {
          title: "Measure Performance and Continuously Improve",
          content: "Establish key performance indicators (KPIs) aligned with your business objectives. Common metrics include containment rate (percentage of conversations completed without human intervention), customer satisfaction scores, conversion rates for marketing bots, and average resolution time. Analyze conversation logs regularly to identify improvement opportunities. Look for common points where users abandon conversations or request human assistance. Use these insights to continuously refine your bot's responses and conversation flows."
        }
      ],
      conclusion: "Implementing an AI chatbot is a journey that requires careful planning, ongoing optimization, and a customer-centric approach. The technology continues to evolve rapidly, offering increasingly sophisticated capabilities. However, the most successful implementations are those that prioritize user experience over technological complexity. Start with clear objectives, focus on solving specific use cases well, and commit to continuous improvement based on user feedback and performance data. With this approach, your chatbot can become a valuable asset that enhances customer experience while delivering measurable business results."
    },
    author: {
      name: "Nikola Stefanovic",
      position: "AI Implementation Specialist",
      image: "https://via.placeholder.com/256x256/2ecc71/ffffff?text=N"
    },
    publishDate: "2025-03-02",
    lastUpdated: "2025-04-25",
    featuredImage: "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    relatedArticles: ["workflow-automation-best-practices", "email-automation-guide"]
  },
  {
    id: "digital-marketing-strategy-guide",
    title: "Building an Effective Digital Marketing Strategy",
    summary: "Learn how to create a comprehensive digital marketing strategy that aligns with your business goals, reaches your target audience, and delivers measurable results.",
    category: "marketing",
    tags: ["digital marketing", "strategy", "campaign planning"],
    content: {
      introduction: "An effective digital marketing strategy is essential for businesses of all sizes in today's digital-first world. It provides direction, helps allocate resources efficiently, and ensures all marketing efforts work cohesively toward common goals. This guide walks you through the process of building a comprehensive digital marketing strategy that delivers measurable results.",
      sections: [
        {
          title: "Define Clear Business Objectives",
          content: "Start by establishing specific, measurable business objectives that your digital marketing strategy will support. These might include increasing brand awareness, generating leads, boosting sales, improving customer retention, or entering new markets. Each objective should be SMART (Specific, Measurable, Achievable, Relevant, Time-bound). For example, rather than simply 'increase website traffic,' aim for 'increase organic website traffic by 30% within six months.' Clear objectives will guide all subsequent strategic decisions and provide benchmarks against which to measure success."
        },
        {
          title: "Identify and Understand Your Target Audience",
          content: "Develop detailed buyer personas that represent your ideal customers. Research demographics, psychographics, online behavior patterns, pain points, goals, and preferred communication channels. Use customer interviews, surveys, website analytics, social media insights, and competitive analysis to gather this information. Segment your audience into distinct groups with similar characteristics and needs. Understanding exactly who you're trying to reach allows you to create more relevant, personalized marketing messages and select the most appropriate channels to reach each segment."
        },
        {
          title: "Audit Your Current Digital Presence",
          content: "Before developing new strategies, assess your existing digital footprint. Analyze your website performance, content effectiveness, SEO ranking, social media engagement, email marketing metrics, and paid advertising results. Identify what's working well and what isn't. Compare your digital presence to key competitors to identify gaps and opportunities. This audit provides a baseline from which to measure future progress and helps identify the areas that need the most attention in your new strategy."
        },
        {
          title: "Select the Right Channels and Tactics",
          content: "Based on your objectives and audience insights, select the digital marketing channels that will most effectively reach your target customers. Options include search engine optimization (SEO), content marketing, social media marketing, email marketing, paid advertising (PPC, display, social), influencer partnerships, and more. For each channel, develop specific tactics that align with your overall objectives. Focus your resources on the channels your audience uses most rather than trying to maintain a presence everywhere. Create an integrated approach where channels complement and reinforce each other."
        },
        {
          title: "Develop a Content Strategy",
          content: "Content is the fuel that powers digital marketing. Develop a content strategy that addresses your audience's needs at each stage of the buyer's journey. Map content types (blog posts, videos, infographics, whitepapers, case studies, etc.) to specific buyer personas and stages. Create a content calendar to ensure consistent production and publication. Focus on creating valuable, relevant content that solves problems or answers questions rather than simply promoting your products. Plan for content distribution and promotion across your selected channels."
        },
        {
          title: "Implement Measurement and Analytics",
          content: "Establish key performance indicators (KPIs) for each channel and tactic that align with your overall objectives. Set up robust analytics tracking to monitor performance in real-time. Beyond basic metrics like traffic and conversions, implement attribution modeling to understand how different channels contribute to your goals. Create dashboards that make it easy to visualize performance data and share insights with stakeholders. Regular measurement allows you to quickly identify what's working and what isn't, so you can adjust your strategy accordingly."
        }
      ],
      conclusion: "Building an effective digital marketing strategy isn't a one-time task but an ongoing process of implementation, measurement, and refinement. Start with clear objectives, develop deep audience insights, choose appropriate channels, create valuable content, and measure results consistently. Remain flexible and willing to adjust your approach as you gather data and as digital platforms evolve. With a well-structured strategy as your foundation, your digital marketing efforts will become more cohesive, efficient, and effective at driving meaningful business results."
    },
    author: {
      name: "Jelena Markovic",
      position: "Digital Marketing Director",
      image: "https://via.placeholder.com/256x256/9b59b6/ffffff?text=J"
    },
    publishDate: "2025-03-18",
    lastUpdated: "2025-05-10",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    relatedArticles: ["measuring-marketing-roi", "optimizing-landing-page-conversion"]
  },
  {
    id: "workflow-automation-best-practices",
    title: "Workflow Automation Best Practices",
    summary: "Explore best practices for implementing workflow automation in your business to improve efficiency, reduce errors, and free up your team for higher-value work.",
    category: "automation",
    tags: ["workflow", "automation", "business processes"],
    content: {
      introduction: "Workflow automation is transforming how businesses operate, allowing organizations to streamline processes, reduce manual effort, minimize errors, and focus human talent on creative and strategic work. However, successful implementation requires careful planning and adherence to best practices. This guide outlines key strategies to maximize the benefits of workflow automation while avoiding common pitfalls.",
      sections: [
        {
          title: "Start With Process Analysis and Documentation",
          content: "Before automating any workflow, thoroughly document and analyze the existing process. Map out each step, identify bottlenecks, redundancies, and inefficiencies. Understand who is involved at each stage, what triggers the next action, and where decisions are made. This analysis often reveals opportunities for process improvement that should be addressed before automation. Remember that automating an inefficient process simply creates a faster inefficient process. Take time to standardize and optimize workflows first, then automate the refined version."
        },
        {
          title: "Prioritize Automation Opportunities Strategically",
          content: "Not all processes are equally suitable for automation. Prioritize workflows based on a combination of factors: frequency of execution, time consumption, error rates, importance to core business functions, and complexity. Processes that are rules-based, repetitive, high-volume, and currently error-prone typically offer the highest ROI for automation. Start with these 'quick wins' to build momentum and demonstrate value before tackling more complex workflows. Create a prioritization matrix that weighs potential time savings against implementation difficulty."
        },
        {
          title: "Select the Right Tools for Your Needs",
          content: "The automation tool landscape is vast, ranging from simple task automators to complex enterprise business process management suites. Select solutions based on your specific needs rather than trending technologies. Consider factors such as integration capabilities with your existing systems, scalability, ease of use for non-technical staff, security features, and total cost of ownership. For many organizations, a mix of tools may be appropriate — using specialized solutions for particular departments while maintaining an enterprise platform for cross-functional processes."
        },
        {
          title: "Design for Exceptions and Edge Cases",
          content: "While the 'happy path' might be straightforward to automate, real-world processes involve exceptions and edge cases. A robust automation implementation must account for these scenarios. Build in appropriate error handling, notification systems, and human intervention points. Consider implementing 'human-in-the-loop' automation for complex decision points rather than trying to automate everything. Document all exception handling procedures clearly, and ensure there's always a path to resolution when automation encounters unexpected situations."
        },
        {
          title: "Implement Gradual Changes with Feedback Loops",
          content: "Avoid the 'big bang' approach to automation implementation. Instead, roll out changes incrementally, starting with pilot projects or limited user groups. Establish clear feedback mechanisms to capture user experiences, unexpected issues, and improvement suggestions. This iterative approach allows you to refine automations based on real-world usage before scaling them across the organization. It also helps with change management by giving users time to adjust to new ways of working."
        },
        {
          title: "Monitor, Measure, and Continuously Improve",
          content: "Automation is not a 'set it and forget it' solution. Implement robust monitoring and analytics to track performance metrics like process completion time, error rates, resource utilization, and business outcomes. Regularly review these metrics against your initial goals and look for optimization opportunities. As business needs evolve, periodically reassess automated workflows to ensure they remain aligned with current objectives. Create a formal process for handling enhancement requests and prioritizing continuous improvements."
        }
      ],
      conclusion: "Effective workflow automation is a journey rather than a destination. By following these best practices—starting with thorough process analysis, prioritizing strategically, selecting appropriate tools, designing for exceptions, implementing changes gradually, and continuously monitoring performance—organizations can realize the full potential of automation. The goal isn't simply to replace human work with technology, but to create a harmonious system where automation handles routine tasks while empowering people to focus on innovation, customer relationships, and strategic thinking. With thoughtful implementation, workflow automation becomes a powerful competitive advantage that drives efficiency, quality, and employee satisfaction."
    },
    author: {
      name: "Stefan Kovacevic",
      position: "Process Automation Engineer",
      image: "https://via.placeholder.com/256x256/f39c12/ffffff?text=S"
    },
    publishDate: "2025-04-03",
    lastUpdated: "2025-05-15",
    featuredImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    relatedArticles: ["implementing-ai-chatbots", "email-automation-guide"]
  },
  {
    id: "seo-for-developers",
    title: "SEO for Developers: Technical Considerations",
    summary: "A developer-focused guide to technical SEO implementation, including performance optimization, structured data, and mobile-friendly techniques.",
    category: "development",
    tags: ["SEO", "technical SEO", "web performance"],
    content: {
      introduction: "Technical SEO is the foundation of any successful search engine optimization strategy. While content and backlinks often get more attention, technical implementation can make or break your site's visibility in search results. As a developer, you have the power to significantly influence how search engines crawl, index, and rank your website. This guide covers essential technical considerations that developers should prioritize when building and maintaining search-engine-friendly websites.",
      sections: [
        {
          title: "Site Architecture and Crawlability",
          content: "Search engines need to efficiently crawl and understand your site structure. Implement a logical URL hierarchy that reflects your content organization. Keep important pages within a few clicks from the homepage. Create and maintain comprehensive XML sitemaps that include all important URLs and update automatically when content changes. Use robots.txt strategically to guide crawlers, but be cautious about blocking resources that might be needed to render pages properly. Implement proper internal linking to establish content relationships and help crawlers discover all important pages. Monitor crawl stats in search console to identify and resolve crawl errors promptly."
        },
        {
          title: "Core Web Vitals and Performance Optimization",
          content: "Page performance is now a direct ranking factor through Google's Core Web Vitals. Focus on optimizing Largest Contentful Paint (LCP) by prioritizing the loading of above-the-fold content, using efficient image formats and compression, implementing server-side rendering or static site generation where appropriate, and leveraging CDNs. Improve First Input Delay (FID) by minimizing long-running JavaScript tasks, breaking up large JS bundles, and using web workers for complex operations. Enhance Cumulative Layout Shift (CLS) by specifying image dimensions, reserving space for dynamic content, and avoiding inserting content above existing content. Use tools like Lighthouse, PageSpeed Insights, and Chrome User Experience Report to measure and monitor these metrics in real-world conditions."
        },
        {
          title: "Structured Data Implementation",
          content: "Structured data helps search engines understand your content's context and can enable rich results in search listings. Implement schema.org markup using JSON-LD (preferred by Google) for appropriate content types such as articles, products, events, FAQs, how-tos, and more. Ensure structured data is dynamically generated to match the actual page content and is updated when content changes. Validate your implementation using Google's Structured Data Testing Tool or Schema Markup Validator. Extend beyond basic requirements where possible to provide additional context. For larger sites, develop a systematic approach to structured data implementation that scales with your content management system."
        },
        {
          title: "Mobile Optimization",
          content: "With mobile-first indexing, Google primarily uses the mobile version of your site for ranking. Implement responsive design that adapts seamlessly to all screen sizes rather than maintaining separate mobile and desktop sites. Ensure tap targets are appropriately sized (at least 48px × 48px) and spaced to prevent accidental clicks. Optimize viewport configuration to control how pages scale on different devices. Avoid using technologies not supported on mobile devices (like Flash). Test mobile usability thoroughly using tools like Google's Mobile-Friendly Test and real devices. Consider implementing mobile-specific features like AMP (Accelerated Mobile Pages) for content that benefits from extremely fast loading."
        },
        {
          title: "JavaScript SEO Considerations",
          content: "Modern web applications rely heavily on JavaScript, which presents unique SEO challenges. Understand that search engines may not execute all JavaScript during crawling, potentially missing content that's only available after JS execution. Implement server-side rendering (SSR), static site generation (SSG), or dynamic rendering to ensure critical content is available in the initial HTML. For single-page applications (SPAs), ensure proper implementation of History API for clean URLs and appropriate page titles and meta tags for each view. Monitor JavaScript errors that might prevent content rendering. Use feature detection rather than user-agent detection to provide appropriate experiences across devices."
        },
        {
          title: "Internationalization and Localization",
          content: "For websites serving multiple countries or languages, proper implementation of hreflang and locale handling is crucial. Use hreflang tags to indicate language and regional targeting of pages, ensuring they point to the correct fully-qualified URLs. Implement a consistent URL structure for different locales, either through separate domains, subdomains, or subdirectories. Ensure content is properly translated and culturally appropriate, not just directly translated. Consider region-specific technical requirements, such as different mobile usage patterns or connection speeds. Use appropriate server locations or CDNs to optimize loading times for specific geographic audiences. Implement proper language detection and redirection while always allowing users to manually switch languages."
        }
      ],
      conclusion: "Technical SEO is an evolving discipline that requires ongoing attention as search engines refine their algorithms and user expectations evolve. As a developer, integrating these technical considerations into your workflow from the beginning is far more efficient than retrofitting them later. Remember that technical excellence isn't just about pleasing search engines—it's about creating fast, accessible, and user-friendly experiences that happen to also perform well in search. By mastering these technical aspects of SEO, you provide a solid foundation upon which content and marketing teams can build, ultimately creating a website that's visible, accessible, and valuable to both users and search engines."
    },
    author: {
      name: "Milos Djordjevic",
      position: "Lead Front-End Developer",
      image: "https://via.placeholder.com/256x256/34495e/ffffff?text=M"
    },
    publishDate: "2025-03-27",
    lastUpdated: "2025-05-22",
    featuredImage: "https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    relatedArticles: ["choosing-right-web-framework", "cloud-infrastructure-setup"]
  },
  {
    id: "measuring-marketing-roi",
    title: "How to Accurately Measure Marketing ROI",
    summary: "Learn how to set up proper tracking and attribution to measure the true ROI of your marketing campaigns across different channels and touchpoints.",
    category: "marketing",
    tags: ["ROI", "analytics", "measurement"],
    content: {
      introduction: "Accurately measuring the return on investment (ROI) of marketing efforts is both essential and challenging in today's complex digital landscape. With customers interacting across multiple channels and touchpoints before converting, it's increasingly difficult to determine which marketing activities truly drive results. This guide provides a comprehensive framework for setting up robust tracking and attribution systems that reveal the true impact of your marketing investments.",
      sections: [
        {
          title: "Define Clear Marketing Objectives and KPIs",
          content: "Effective ROI measurement begins with clearly defined objectives and corresponding key performance indicators (KPIs). Different marketing initiatives serve different purposes—brand awareness, lead generation, customer retention, etc.—and each requires appropriate metrics. For awareness campaigns, metrics like reach, impressions, and brand lift surveys might be most relevant. For direct response campaigns, conversion rates, cost per acquisition, and revenue generated are typically more appropriate. Establish SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals for each marketing initiative and select KPIs that directly connect to business outcomes. This ensures you're measuring what truly matters to your organization's success."
        },
        {
          title: "Implement Comprehensive Tracking Infrastructure",
          content: "Accurate ROI measurement depends on robust tracking systems. Implement Google Analytics 4 (or similar analytics platforms) with enhanced e-commerce tracking, and configure goals and events that align with your KPIs. Set up UTM parameters consistently across all campaigns to track traffic sources accurately. Implement conversion tracking in all advertising platforms (Google Ads, Meta Ads, LinkedIn, etc.). For offline channels, use unique phone numbers, QR codes, promo codes, or dedicated landing pages to trace activities back to specific campaigns. Connect your CRM system with your marketing platforms to track leads through the entire sales cycle. Most importantly, establish a single source of truth for marketing data to avoid conflicting reports and ensure all stakeholders base decisions on the same information."
        },
        {
          title: "Select the Right Attribution Model",
          content: "Attribution models determine how credit for conversions is assigned to different marketing touchpoints. Single-touch models like first-click or last-click attribution are simplest but often misleading in complex customer journeys. Multi-touch models such as linear (equal credit to all touchpoints), time decay (more credit to recent touchpoints), or position-based (emphasizing first and last interactions) provide more nuanced insights. Data-driven attribution uses machine learning to distribute credit based on your actual conversion patterns. The right model depends on your sales cycle length, number of typical touchpoints, and business model. For most businesses, using multiple attribution models in parallel provides the most complete picture of marketing effectiveness. Regularly review and refine your attribution approach as your marketing mix evolves."
        },
        {
          title: "Calculate True Costs and Revenue",
          content: "Accurate ROI calculation requires comprehensive accounting of all marketing costs and resultant revenue. Beyond obvious expenses like media spend and agency fees, include content production costs, technology platforms, team salaries, and overhead allocated to marketing functions. On the revenue side, consider not just immediate sales but customer lifetime value, particularly for subscription businesses or products with high repeat purchase rates. For B2B companies with long sales cycles, incorporate pipeline value and probability-weighted forecasts. Distinguish between gross revenue and contribution margin to understand true profitability. When possible, separate incremental revenue (new business directly attributable to marketing) from baseline revenue (what would have occurred without marketing activity) for the most accurate ROI assessment."
        },
        {
          title: "Account for Time Lag and Seasonality",
          content: "Marketing efforts often produce results over extended periods, making timing crucial in ROI measurement. Establish appropriate lookback windows based on your typical sales cycle—shorter for immediate response products, longer for considered purchases or B2B solutions. Implement cohort analysis to track how groups of customers acquired during specific campaigns perform over time. Adjust for seasonality by comparing year-over-year results rather than sequential periods when appropriate. Recognize that brand-building activities may take months or years to fully impact financial results, requiring patience and longer measurement timeframes. Develop models that forecast expected long-term returns from current marketing investments to guide strategic decisions."
        },
        {
          title: "Leverage Advanced Analytics and Experimentation",
          content: "Move beyond basic reporting to advanced analytics that reveal deeper insights about marketing effectiveness. Implement marketing mix modeling (MMM) to understand the impact of both online and offline channels at a macro level. Use multi-touch attribution (MTA) for digital channel optimization. Conduct incrementality testing through controlled experiments—geo testing, holdout groups, or A/B tests—to measure the true incremental impact of specific channels or campaigns. Apply statistical techniques like regression analysis to identify correlations between marketing activities and business outcomes. Integrate artificial intelligence and machine learning where appropriate to identify patterns and optimization opportunities that might not be obvious through manual analysis."
        }
      ],
      conclusion: "Measuring marketing ROI accurately is a journey of continuous refinement rather than a one-time implementation. Start with clear objectives and basic tracking, then progressively enhance your measurement capabilities. Recognize that perfect attribution is practically impossible in today's complex marketing environment, but even incremental improvements in measurement accuracy can significantly improve decision-making and resource allocation. Balance quantitative data with qualitative insights, and remember that some valuable marketing outcomes—like brand equity building or customer relationship development—may not be fully captured in short-term ROI calculations. The ultimate goal is not perfect measurement but rather sufficiently accurate insights to make better marketing investments that drive sustainable business growth."
    },
    author: {
      name: "Aleksandra Petrovic",
      position: "Analytics & Attribution Specialist",
      image: "https://via.placeholder.com/256x256/16a085/ffffff?text=A"
    },
    publishDate: "2025-04-12",
    lastUpdated: "2025-05-20",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    relatedArticles: ["digital-marketing-strategy-guide", "optimizing-landing-page-conversion"]
  },
  {
    id: "cloud-infrastructure-setup",
    title: "Setting Up Scalable Cloud Infrastructure",
    summary: "A guide to setting up cloud infrastructure that can scale with your business needs, including considerations for security, cost management, and performance.",
    category: "development",
    tags: ["cloud", "infrastructure", "scalability"],
    content: {
      introduction: "Cloud infrastructure has revolutionized how businesses deploy and manage their IT resources. Instead of investing in expensive on-premises hardware, organizations can now leverage scalable, pay-as-you-go cloud services that grow with their needs. However, building a cloud infrastructure that truly delivers on the promises of scalability, security, cost-efficiency, and performance requires careful planning and implementation. This guide outlines key principles and best practices for setting up cloud infrastructure that can support your business through every stage of growth.",
      sections: [
        {
          title: "Foundation: Choose the Right Cloud Model",
          content: "Begin by selecting the appropriate cloud model for your specific needs. Public clouds (AWS, Azure, Google Cloud) offer maximum scalability and minimum upfront investment but less control. Private clouds provide greater security and compliance capabilities but require more management. Hybrid and multi-cloud approaches combine elements of both, offering flexibility but increasing complexity. Consider factors such as your organization's security requirements, compliance needs, existing infrastructure investments, team expertise, and long-term business strategy. Don't just follow industry trends—the right model depends on your specific use cases, data sensitivity, performance requirements, and growth projections."
        },
        {
          title: "Architecture: Design for Scalability and Resilience",
          content: "Architect your cloud infrastructure with scalability as a fundamental principle. Implement auto-scaling capabilities that dynamically adjust resources based on demand. Design stateless applications where possible to simplify horizontal scaling. Use load balancers to distribute traffic evenly across resources. Implement microservices architecture to allow independent scaling of application components. For resilience, deploy across multiple availability zones or regions to protect against localized failures. Implement circuit breakers and graceful degradation patterns to handle partial system failures. Create automated failover mechanisms and design self-healing systems that can recover without manual intervention. Remember that true scalability isn't just about handling more load—it's about maintaining performance, reliability, and cost-efficiency as you grow."
        },
        {
          title: "Security: Implement Defense in Depth",
          content: "Security in the cloud requires a multi-layered approach. Start by clearly defining identity and access management (IAM) policies using the principle of least privilege. Implement network security with virtual private clouds (VPCs), security groups, and network ACLs to control traffic flow. Encrypt data both in transit and at rest using industry-standard encryption protocols. Set up continuous security monitoring and automated compliance checks. Implement secure DevOps practices with infrastructure as code (IaC) to ensure consistent security configurations. Develop incident response procedures specifically for your cloud environment. Remember that while cloud providers secure the infrastructure, you remain responsible for securing your applications, data, access policies, and configurations."
        },
        {
          title: "Cost Management: Optimize Cloud Spending",
          content: "Without proper management, cloud costs can quickly escalate. Implement a comprehensive cost management strategy from day one. Use resource tagging to track spending by department, project, or environment. Leverage auto-scaling to match resources with actual demand rather than provisioning for peak loads. Consider reserved instances or savings plans for predictable workloads. Implement lifecycle policies for storage to automatically move or delete data based on age or usage patterns. Set up cost alerts and budgets to proactively monitor spending. Regularly review and right-size underutilized resources. Use cost optimization tools provided by your cloud vendor or third-party solutions. Make cost awareness a team responsibility rather than relegating it solely to finance or operations."
        },
        {
          title: "Operations: Embrace Infrastructure as Code and Automation",
          content: "Manual infrastructure management doesn't scale. Adopt infrastructure as code (IaC) using tools like Terraform, AWS CloudFormation, or Azure Resource Manager to define your infrastructure declaratively. This enables consistent deployments, version control for infrastructure, and the ability to recreate environments quickly. Implement CI/CD pipelines for infrastructure changes to ensure proper testing and validation. Automate routine operational tasks such as backups, patching, scaling, and monitoring. Develop comprehensive monitoring and observability solutions that provide insights into performance, availability, and user experience. Implement automated remediation for common issues. Document everything, especially custom configurations and operational procedures, to reduce dependency on institutional knowledge."
        },
        {
          title: "Governance: Establish Policies and Controls",
          content: "As your cloud infrastructure grows, governance becomes increasingly important. Establish clear policies for resource provisioning, security requirements, compliance standards, and cost management. Implement technical guardrails using service control policies, Azure Policy, or similar tools to enforce these policies automatically. Create a cloud center of excellence (CCoE) team to develop best practices, provide guidance, and ensure consistency across the organization. Implement regular compliance audits and security assessments. Develop processes for managing cloud resources throughout their lifecycle, from provisioning to decommissioning. Balance governance controls with the need for developer productivity and innovation—overly restrictive policies can lead to shadow IT as teams seek to work around limitations."
        }
      ],
      conclusion: "Building scalable cloud infrastructure is a journey that evolves with your business needs and technological capabilities. Start with a solid foundation based on your specific requirements, design for scalability and resilience from the beginning, implement comprehensive security measures, actively manage costs, embrace automation, and establish appropriate governance. Regularly reassess your architecture and strategies as your business grows and cloud services evolve. Remember that successful cloud infrastructure isn't just about technology—it requires the right combination of tools, processes, skills, and organizational culture. With thoughtful planning and implementation, cloud infrastructure can provide the agility, scalability, and reliability needed to support your business objectives now and in the future."
    },
    author: {
      name: "Nikola Jovanovic",
      position: "Cloud Solutions Architect",
      image: "https://via.placeholder.com/256x256/27ae60/ffffff?text=N"
    },
    publishDate: "2025-02-28",
    lastUpdated: "2025-05-18",
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    relatedArticles: ["choosing-right-web-framework", "seo-for-developers"]
  },
  {
    id: "email-automation-guide",
    title: "Email Marketing Automation Guide",
    summary: "Learn how to implement effective email marketing automation sequences to nurture leads, onboard customers, and increase retention.",
    category: "automation",
    tags: ["email marketing", "automation", "lead nurturing"],
    content: {
      introduction: "Email marketing automation has evolved from simple autoresponders to sophisticated, behavior-driven communication systems that deliver personalized content at optimal times. When implemented effectively, these automated sequences can nurture leads, streamline customer onboarding, boost engagement, and increase retention—all while saving time and resources. This guide walks you through the process of building strategic email automation workflows that drive measurable business results.",
      sections: [
        {
          title: "Strategic Planning: Map Customer Journeys First",
          content: "Effective email automation starts with understanding your customer journeys. Map out the different paths customers take from initial awareness through consideration, purchase, and retention. Identify key touchpoints, decision moments, and potential friction points along these journeys. Define specific goals for each stage, such as moving prospects from awareness to consideration or converting free trial users to paying customers. Segment your audience based on behavior patterns, needs, and value to your business. This strategic foundation ensures your automated emails address real customer needs at the right moments rather than simply sending messages on a predetermined schedule."
        },
        {
          title: "Lead Nurturing Sequences: Guide Prospects to Purchase",
          content: "Design lead nurturing workflows that progressively move prospects toward conversion. Start with educational content that addresses their pain points and establishes your credibility. Gradually introduce your solution, highlighting specific benefits relevant to different segments. Include social proof elements like testimonials and case studies at appropriate stages. Incorporate behavioral triggers that adapt the sequence based on engagement—accelerating the process for highly engaged leads and providing additional information for hesitant ones. Set up re-engagement branches for leads who go cold. Implement lead scoring to identify when prospects are sales-ready, automatically alerting your team or triggering more direct conversion messaging when thresholds are reached."
        },
        {
          title: "Onboarding Sequences: Ensure Customer Success",
          content: "Customer onboarding sequences are crucial for reducing churn and building long-term value. Design a structured series of emails that help new customers understand your product or service, starting with essential getting-started information and progressively introducing more advanced features. Time these messages based on typical learning curves rather than arbitrary schedules. Use behavior-based triggers to provide relevant guidance when users encounter specific features or potential roadblocks. Include proactive support offers at moments when customers typically need assistance. For complex products, implement milestone celebrations that recognize and reward progress. Remember that successful onboarding isn't just about feature adoption—it's about helping customers achieve their desired outcomes quickly."
        },
        {
          title: "Retention and Engagement Sequences: Build Lasting Relationships",
          content: "Develop automated sequences focused on long-term retention and engagement. Implement regular usage summaries that highlight value received and suggest next steps. Create anniversary or milestone emails that celebrate the customer relationship. Design re-engagement sequences triggered by signs of declining usage or engagement. Set up renewal reminder workflows for subscription-based businesses, emphasizing value received and previewing upcoming benefits. Implement cross-sell and upsell sequences based on usage patterns and complementary product fits. Consider implementing customer feedback loops at strategic points to gather insights and demonstrate that you value their input. Throughout these sequences, focus on reinforcing the customer's decision to choose your product and continually demonstrating ongoing value."
        },
        {
          title: "Personalization and Segmentation: Beyond Basic Merge Fields",
          content: "Sophisticated email automation requires moving beyond simple 'Hello [FirstName]' personalization to truly tailored communications. Segment your audience based on behavioral data, purchase history, engagement levels, and demographic information. Dynamically adjust email content based on these segments using conditional content blocks. Personalize send times based on individual open patterns. Use AI-powered tools to optimize subject lines and content for different segments. Implement dynamic product or content recommendations based on previous interactions. Consider progressive profiling techniques that gradually build detailed customer profiles through strategic questions and behavioral tracking. Remember that effective personalization isn't just about knowing who your customers are—it's about understanding their needs and preferences at each stage of their journey."
        },
        {
          title: "Measurement and Optimization: Continuous Improvement",
          content: "Implement comprehensive analytics to measure and optimize your email automation performance. Track traditional metrics like open rates, click-through rates, and conversion rates, but also monitor broader impact indicators like customer lifetime value, retention rates, and product usage changes. Set up A/B testing frameworks for continual refinement of subject lines, content, timing, and workflow structures. Establish clear KPIs for each automation sequence tied to business outcomes. Regularly audit your automation workflows to identify underperforming segments or branches. Use attribution modeling to understand how your email automations interact with other marketing channels. Create a formalized review process to regularly analyze performance data and implement improvements based on insights gained."
        }
      ],
      conclusion: "Email marketing automation represents a powerful opportunity to deliver personalized, timely communications at scale while simultaneously reducing manual workload. The most effective automation strategies are built on a foundation of customer journey mapping, thoughtful segmentation, and continuous optimization. Start with the highest-impact workflows—typically lead nurturing, onboarding, and retention sequences—and progressively expand your automation ecosystem as you gather data and refine your approach. Remember that automation should enhance the customer experience, not depersonalize it. When implemented with strategic intention and a customer-centric mindset, email automation can dramatically improve marketing efficiency while delivering more relevant, valuable content to your audience at exactly the right moments in their journey."
    },
    author: {
      name: "Marija Kovačević",
      position: "Email Marketing Automation Strategist",
      image: "https://via.placeholder.com/256x256/8e44ad/ffffff?text=M"
    },
    publishDate: "2025-03-08",
    lastUpdated: "2025-04-30",
    featuredImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    relatedArticles: ["implementing-ai-chatbots", "workflow-automation-best-practices"]
  }
];

// Article detail component
const ArticleDetail = () => {
  const params = useParams();
  const articleId = params.id as string;
  const [article, setArticle] = useState<KnowledgeArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<KnowledgeArticle[]>([]);

  useEffect(() => {
    // Find the article with the matching ID
    const foundArticle = articles.find(a => a.id === articleId);
    setArticle(foundArticle || null);

    // Find related articles if any are specified
    if (foundArticle && foundArticle.relatedArticles) {
      const related = articles.filter(a => 
        foundArticle.relatedArticles?.includes(a.id)
      );
      setRelatedArticles(related);
    }
  }, [articleId]);

  if (!article) {
    return (
      <div className="relative">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 md:px-6 text-center py-24">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-8">The article you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <Link href="/knowledge-base" className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors">
              Back to Knowledge Base
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative">
      <Header />
      <main className="pt-20 pb-16">
        {/* Article Header */}
        <section className="w-full py-12 bg-gradient-to-b from-amber-50 to-white dark:from-zinc-900 dark:to-zinc-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link href="/knowledge-base" className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Knowledge Base
                </Link>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{article.title}</h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">{article.summary}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {/* Category as first tag with special styling */}
                  <span className={`inline-block px-3 py-1 text-xs font-medium border rounded-md ${
                    article.category === "development" ? "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400" :
                    article.category === "marketing" ? "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400" :
                    article.category === "automation" ? "bg-teal-50 border-teal-200 text-teal-800 dark:bg-teal-900/20 dark:border-teal-800 dark:text-teal-400" :
                    "bg-purple-50 border-purple-200 text-purple-800 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-400"
                  }`}>
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </span>
                  
                  {/* Regular tags */}
                  {article.tags.map(tag => (
                    <span key={tag} className="inline-block px-3 py-1 text-xs bg-zinc-50 border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 rounded-md text-zinc-600 dark:text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Article Meta */}
                {article.author && (
                  <div className="flex items-center mt-4">
                    <div 
                      className="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white font-bold" 
                      style={{ 
                        backgroundColor: 
                          article.category === "development" ? "#3498db" : 
                          article.category === "marketing" ? "#e74c3c" : 
                          article.category === "automation" ? "#2ecc71" : 
                          "#9b59b6" 
                      }}
                    >
                      {article.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{article.author.name}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{article.author.position}</p>
                    </div>
                    {article.publishDate && (
                      <div className="ml-auto text-right text-sm text-zinc-500 dark:text-zinc-400">
                        <p>Published: {new Date(article.publishDate).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'})}</p>
                        {article.lastUpdated && (
                          <p>Updated: {new Date(article.lastUpdated).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'})}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Featured Image */}
              {article.featuredImage && (
                <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={article.featuredImage} 
                    alt={article.title} 
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              {article.content ? (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {/* Introduction */}
                  <div className="mb-10">
                    <p className="text-lg leading-relaxed">{article.content.introduction}</p>
                  </div>
                  
                  {/* Content Sections */}
                  {article.content.sections.map((section, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="mb-10"
                    >
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{section.content}</p>
                    </motion.div>
                  ))}
                  
                  {/* Conclusion */}
                  <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800/30">
                    <h2 className="text-xl font-bold mb-3">Conclusion</h2>
                    <p className="text-zinc-700 dark:text-zinc-300">{article.content.conclusion}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-zinc-500 dark:text-zinc-400">Detailed content for this article is coming soon.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="w-full py-12 bg-zinc-50 dark:bg-zinc-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedArticles.map((related, index) => (
                    <motion.div
                      key={related.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700"
                    >
                      <div className="p-6">
                        <div className="mb-3">
                          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                            related.category === "development" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" :
                            related.category === "marketing" ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" :
                            related.category === "automation" ? "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400" :
                            "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                          }`}>
                            {related.category.charAt(0).toUpperCase() + related.category.slice(1)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{related.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{related.summary}</p>
                        <Link
                          href={`/knowledge-base/${related.id}`}
                          className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                        >
                          Read article
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-amber-50 to-teal-50 dark:from-zinc-800 dark:to-zinc-800 rounded-xl p-8 shadow-md border border-amber-100 dark:border-amber-900/20">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Need Help Implementing These Strategies?</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  Our team of experts can help you apply these insights to your specific business challenges.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-teal-600 text-white font-medium rounded-lg hover:from-amber-700 hover:to-teal-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default function Page() {
  return <ArticleDetail />;
}
