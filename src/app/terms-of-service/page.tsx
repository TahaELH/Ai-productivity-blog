import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service - AI Productivity Blog",
  description: "Terms of service for AI Productivity Blog. Read our terms and conditions for using our website and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using AI Productivity Blog ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                AI Productivity Blog is an online platform that provides educational content, reviews, and insights about AI-powered productivity tools and techniques. Our services include blog posts, guides, reviews, and newsletters related to artificial intelligence and productivity enhancement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>You must be at least 13 years old to use this website</li>
                <li>You are responsible for maintaining the confidentiality of your account information</li>
                <li>You agree not to use the service for any unlawful purposes</li>
                <li>You will not post or transmit any content that is defamatory, obscene, or otherwise objectionable</li>
                <li>You will not attempt to gain unauthorized access to our systems or user data</li>
                <li>You will not use automated tools to access the website without permission</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Our Content</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on AI Productivity Blog, including but not limited to text, graphics, logos, images, and software, is the property of AI Productivity Blog or its content suppliers and is protected by international copyright laws.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">User-Generated Content</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By submitting content to our website (comments, feedback, etc.), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with our services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices. By using our website, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Third-Party Links and Advertisements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">External Links</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Advertisements</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We display advertisements through Google AdSense and other advertising networks. We are not responsible for the content of advertisements, and clicking on ads may redirect you to external websites. We do not endorse any products or services advertised on our site.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Disclaimer of Warranties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The information on this website is provided on an "as is" basis. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the website will be uninterrupted or error-free.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall AI Productivity Blog, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Indemnification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless AI Productivity Blog and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising from these terms will be resolved in the courts of San Francisco, California.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Changes to Terms of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. Your continued use of the Service after the effective date of the revised Terms constitutes acceptance of the changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-muted-foreground">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <p><strong>Email:</strong> legal@aiproductivityblog.com</p>
                <p><strong>Website:</strong> <a href="/contact" className="text-primary hover:underline">Contact Form</a></p>
                <p><strong>Address:</strong> San Francisco, CA 94102</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}