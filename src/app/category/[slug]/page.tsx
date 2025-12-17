import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

// Mock data - replace with actual database queries
const getCategoryData = async (slug: string) => {
  const categories = {
    "ai-writing-tools": {
      name: "AI Writing Tools",
      description: "Comprehensive reviews of AI-powered writing assistants that help you create high-quality content faster and more efficiently.",
      posts: [
        {
          id: 1,
          title: "Top 10 AI Writing Tools for Content Creators in 2024",
          excerpt: "Comprehensive review of the best AI-powered writing assistants that can help you create high-quality content faster than ever.",
          author: "Sarah Johnson",
          date: "2024-01-15",
          readTime: 8,
          image: "/api/placeholder/400/250",
          slug: "top-10-ai-writing-tools-2024"
        },
        {
          id: 2,
          title: "ChatGPT vs Jasper: Which AI Writing Assistant is Right for You?",
          excerpt: "In-depth comparison of two leading AI writing tools to help you choose the best option for your content creation needs.",
          author: "Michael Chen",
          date: "2024-01-12",
          readTime: 12,
          image: "/api/placeholder/400/250",
          slug: "chatgpt-vs-jasper-comparison"
        },
        {
          id: 3,
          title: "How to Use AI Writing Tools for Academic Research Papers",
          excerpt: "Learn how to leverage AI writing assistants to improve your academic writing while maintaining academic integrity.",
          author: "Dr. Emily Roberts",
          date: "2024-01-08",
          readTime: 15,
          image: "/api/placeholder/400/250",
          slug: "ai-writing-tools-academic-research"
        }
      ]
    },
    "productivity-automation": {
      name: "Productivity Automation",
      description: "Tools and strategies to automate repetitive tasks and streamline your workflow using artificial intelligence.",
      posts: [
        {
          id: 4,
          title: "How to Automate Your Workflow with AI: A Complete Guide",
          excerpt: "Learn how to leverage artificial intelligence to automate repetitive tasks and focus on what matters most in your business.",
          author: "Michael Chen",
          date: "2024-01-12",
          readTime: 12,
          image: "/api/placeholder/400/250",
          slug: "automate-workflow-ai-guide"
        },
        {
          id: 5,
          title: "Zapier vs Make: Best Automation Tools for AI Integration",
          excerpt: "Compare the leading automation platforms and learn how to integrate AI tools into your existing workflows seamlessly.",
          author: "Sarah Johnson",
          date: "2024-01-10",
          readTime: 10,
          image: "/api/placeholder/400/250",
          slug: "zapier-vs-make-automation-comparison"
        }
      ]
    },
    "ai-research-analysis": {
      name: "AI Research & Analysis",
      description: "Advanced AI tools for research, data analysis, and extracting valuable insights from complex information.",
      posts: [
        {
          id: 6,
          title: "AI Research Tools That Will Revolutionize Your Data Analysis",
          excerpt: "Discover cutting-edge AI tools that can process and analyze vast amounts of data to uncover valuable insights for your research.",
          author: "Dr. Emily Roberts",
          date: "2024-01-10",
          readTime: 10,
          image: "/api/placeholder/400/250",
          slug: "ai-research-tools-data-analysis"
        }
      ]
    },
    "task-management-ai": {
      name: "Task Management AI",
      description: "Smart task management and project planning tools powered by artificial intelligence for enhanced productivity.",
      posts: [
        {
          id: 7,
          title: "AI-Powered Project Management: Tools and Best Practices",
          excerpt: "Explore the latest AI-enhanced project management tools that can help you plan, execute, and optimize your projects more effectively.",
          author: "Sarah Johnson",
          date: "2024-01-05",
          readTime: 8,
          image: "/api/placeholder/400/250",
          slug: "ai-powered-project-management-tools"
        }
      ]
    }
  };

  return categories[slug as keyof typeof categories] || null;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = await getCategoryData(params.slug);
  
  if (!category) {
    return {
      title: "Category Not Found - AI Productivity Blog",
      description: "The requested category could not be found.",
    };
  }

  return {
    title: `${category.name} - AI Productivity Blog`,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryData(params.slug);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The category you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowRight className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Category Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Category
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.posts.map((post) => (
            <Card key={post.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{category.name}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="ghost" className="p-0 h-auto font-normal text-primary">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {category.posts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated on {category.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest articles, reviews, and insights on {category.name.toLowerCase()} delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}