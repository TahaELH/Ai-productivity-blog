import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">AI Productivity Blog</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover the latest AI tools and productivity techniques to supercharge your workflow and achieve more in less time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/aiproductivityblog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/aiproductivityblog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/aiproductivityblog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/aiproductivityblog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category/ai-writing-tools" className="text-muted-foreground hover:text-primary">
                  AI Writing Tools
                </Link>
              </li>
              <li>
                <Link href="/category/productivity-automation" className="text-muted-foreground hover:text-primary">
                  Productivity Automation
                </Link>
              </li>
              <li>
                <Link href="/category/ai-research-analysis" className="text-muted-foreground hover:text-primary">
                  AI Research & Analysis
                </Link>
              </li>
              <li>
                <Link href="/category/task-management-ai" className="text-muted-foreground hover:text-primary">
                  Task Management AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-muted-foreground hover:text-primary">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/robots.txt" className="text-muted-foreground hover:text-primary">
                  Robots.txt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@aiproductivityblog.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AI Productivity Blog. All rights reserved.</p>
          <p className="mt-2">
            This website is compliant with Google AdSense policies and follows best practices for user experience and content quality.
          </p>
        </div>
      </div>
    </footer>
  );
}