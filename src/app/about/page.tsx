import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - AI Productivity Blog",
  description: "Learn about AI Productivity Blog's mission to help professionals leverage AI tools for enhanced productivity and workflow optimization.",
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI Productivity Blog",
  "url": "https://aiproductivityblog.com",
  "logo": "https://aiproductivityblog.com/logo.svg",
  "description": "A leading authority on AI-powered productivity solutions, providing expert reviews, comprehensive guides, and actionable insights for professionals seeking to optimize their workflows through artificial intelligence.",
  "foundingDate": "2024",
  "sameAs": [
    "https://www.facebook.com/aiproductivityblog",
    "https://twitter.com/aiproductivityblog",
    "https://www.linkedin.com/company/aiproductivityblog",
    "https://github.com/aiproductivityblog"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@aiproductivityblog.com",
    "contactType": "Customer Service",
    "areaServed": "Worldwide",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Productivity Tools",
    "Workflow Automation",
    "AI Writing Tools",
    "Machine Learning",
    "Natural Language Processing",
    "Business Process Optimization",
    "Task Management"
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">About AI Productivity Blog</h1>
            <p className="text-muted-foreground text-lg">
              The definitive authority on AI-powered productivity solutions, delivering expert analysis and actionable strategies for professionals worldwide since 2024
            </p>
          </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                As recognized thought leaders in the AI productivity space, we are committed to advancing the professional application of artificial intelligence through rigorous research, comprehensive analysis, and evidence-based recommendations. Our mission extends beyond tool reviews—we provide strategic frameworks that enable organizations and individuals to architect intelligent workflows, optimize resource allocation, and achieve measurable productivity gains. Through our extensive testing protocols and industry partnerships, we deliver authoritative insights that bridge the gap between cutting-edge AI capabilities and real-world business outcomes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What We Do</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Rigorous Technical Analysis</h3>
                    <p className="text-muted-foreground">
                      Our editorial team conducts extensive benchmarking and comparative analysis of AI productivity tools, employing standardized testing methodologies to evaluate performance, accuracy, and integration capabilities across diverse professional environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Strategic Implementation Frameworks</h3>
                    <p className="text-muted-foreground">
                      We develop comprehensive deployment strategies and architectural blueprints that enable seamless AI tool integration, addressing technical requirements, change management, and ROI optimization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Industry-Leading Expertise</h3>
                    <p className="text-muted-foreground">
                      Our content features insights from AI researchers, enterprise architects, and productivity consultants who have successfully scaled AI implementations across Fortune 500 companies and high-growth startups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Evidence-Based Methodologies</h3>
                    <p className="text-muted-foreground">
                      We establish quantifiable metrics and performance benchmarks, providing data-driven frameworks for measuring productivity improvements, cost optimization, and strategic alignment with organizational objectives.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AI Writing Tools</Badge>
                <Badge variant="secondary">Workflow Automation</Badge>
                <Badge variant="secondary">Data Analysis</Badge>
                <Badge variant="secondary">Project Management</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Natural Language Processing</Badge>
                <Badge variant="secondary">Productivity Hacking</Badge>
                <Badge variant="secondary">Business Process Optimization</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Editorial Standards and Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our editorial process adheres to the highest standards of technical accuracy and professional integrity. Every tool evaluation undergoes systematic testing across multiple use cases, performance benchmarking, and security assessment. Our recommendations are based on empirical data, not marketing claims. Our editorial board comprises certified AI specialists, enterprise software architects, and productivity researchers with advanced degrees and industry certifications. Each publication undergoes peer review to ensure technical accuracy, strategic relevance, and actionable value for our professional readership.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Foundation and Evolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Established in 2024 by a consortium of AI researchers, enterprise technology architects, and productivity optimization specialists, AI Productivity Blog was conceived to address a critical market need: the disconnect between rapidly advancing AI capabilities and their practical implementation in professional environments. Our founding team, with combined experience spanning decades in machine learning, enterprise software development, and organizational efficiency consulting, identified systemic challenges in AI adoption that required authoritative, research-backed guidance.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                From our initial research publications, we have evolved into a recognized thought leadership platform, serving a global audience of C-suite executives, technology decision-makers, and productivity professionals. Our methodology integrates rigorous academic research with enterprise-grade implementation experience, ensuring that every recommendation is both theoretically sound and practically viable. We maintain active partnerships with leading AI research institutions and technology vendors, providing our readers with exclusive access to emerging tools and methodologies.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                As the AI productivity landscape continues to evolve at an unprecedented pace, we remain at the forefront of innovation, continuously expanding our research capabilities and editorial expertise. Our commitment extends beyond content creation—we actively contribute to industry standards, participate in academic research, and provide strategic consulting to organizations seeking to transform their operations through intelligent automation. Whether you're architecting enterprise AI strategies or optimizing individual workflows, we provide the authoritative insights and proven frameworks necessary to achieve measurable productivity transformation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Join Our Professional Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Become part of an exclusive community of technology leaders, productivity strategists, and AI implementation specialists. Gain access to our research library, participate in expert-led webinars, receive priority access to beta tool evaluations, and connect with peers who are driving innovation in AI-powered productivity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Our Latest Articles
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Users className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}