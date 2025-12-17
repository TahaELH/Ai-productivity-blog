import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy - AI Productivity Blog",
  description: "Privacy policy for AI Productivity Blog. Learn how we collect, use, and protect your personal information in compliance with GDPR and CCPA.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to AI Productivity Blog ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aiproductivityblog.com and use our services. This policy is compliant with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable privacy laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Information You Provide to Us</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Contact information (name, email address) when you subscribe to our newsletter</li>
                    <li>Information provided when you contact us through our contact form</li>
                    <li>Comments and feedback on our blog posts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Information Automatically Collected</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>IP address and geolocation data</li>
                    <li>Browser type, operating system, and device information</li>
                    <li>Pages visited, time spent, and click patterns</li>
                    <li>Referring website information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Google AdSense and Advertising</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website uses Google AdSense to display advertisements. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to this website or other websites.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold">Google AdSense may use:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>DoubleClick Cookie:</strong> To serve more relevant ads across the web</li>
                  <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li><strong>Ad Personalization:</strong> To customize ads based on your interests</li>
                </ul>
                <p className="text-muted-foreground">
                  You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google's Ads Settings</a> or <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a>.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide and maintain our website and services</li>
                <li>To personalize your experience and deliver relevant content</li>
                <li>To improve our website based on user feedback and analytics</li>
                <li>To communicate with you regarding our services and content</li>
                <li>To display relevant advertisements through Google AdSense</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To analyze website traffic and user behavior for optimization purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights Under GDPR and CCPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">GDPR Rights (EU Residents)</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                    <li><strong>Right to Data Portability:</strong> Transfer your data to another service</li>
                    <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">CCPA Rights (California Residents)</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Right to Know:</strong> Request disclosure of personal information collected</li>
                    <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                    <li><strong>Right to Opt-Out:</strong> Opt-out of sale of personal information</li>
                    <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising privacy rights</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Third-Party Links</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-muted-foreground">
                <p>If you have any questions about this Privacy Policy or your rights, please contact us:</p>
                <p><strong>Email:</strong> privacy@aiproductivityblog.com</p>
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