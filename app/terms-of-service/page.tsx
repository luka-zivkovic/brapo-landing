"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function TermsOfService() {
  return (
    <div className="relative">
      <Header />
      <main className="pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
                <p className="text-gray-500 dark:text-gray-400">Last updated: May 23, 2025</p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
                <p>
                  By accessing our website at <strong>digitrail.com</strong>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                </p>

                <h2 className="text-2xl font-bold">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials on brapo&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose, or for any public display;</li>
                  <li>Attempt to decompile or reverse engineer any software contained on brapo&apos;s website;</li>
                  <li>Remove any copyright or other proprietary notations from the materials; or</li>
                  <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
                </ul>

                <h2 className="text-2xl font-bold">3. Disclaimer</h2>
                <p>
                  The materials on brapo&apos;s website are provided on an &apos;as is&apos; basis. brapo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-2xl font-bold">4. Limitations</h2>
                <p>
                  In no event shall brapo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on brapo&apos;s website, even if brapo or a brapo authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-2xl font-bold">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on brapo&apos;s website could include technical, typographical, or photographic errors. brapo does not warrant that any of the materials on its website are accurate, complete or current. brapo may make changes to the materials contained on its website at any time without notice.
                </p>

                <h2 className="text-2xl font-bold">6. Links</h2>
                <p>
                  brapo has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by brapo of the site. Use of any such linked website is at the user&apos;s own risk.
                </p>

                <h2 className="text-2xl font-bold">7. Modifications</h2>
                <p>
                  brapo may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-2xl font-bold">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>

                <h2 className="text-2xl font-bold">9. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="font-medium">
                  Email: legal@digitrail.com<br />
                  Phone: +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
