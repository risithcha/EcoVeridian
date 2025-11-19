import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

// Legal information page
export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
          Legal Information
        </h1>

        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Copyright Notice</h2>
            <p className="text-muted-foreground leading-relaxed">
              EcoVeridian Website (Source Code)
              <br />
              Copyright &copy; {new Date().getFullYear()} EcoVeridian
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Open Source License</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is free software: you can redistribute it and/or
              modify it under the terms of the GNU Affero General Public License
              as published by the Free Software Foundation, either version 3 of
              the License, or (at your option) any later version.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This program is distributed in the hope that it will be useful,
              but WITHOUT ANY WARRANTY; without even the implied warranty of
              MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
              Affero General Public License for more details.
            </p>

            <div className="pt-4">
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="rounded-full">
                  Read Full License
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Source Code Access</h2>
            <p className="text-muted-foreground leading-relaxed">
              As required by the GNU Affero General Public License version 3,
              the complete source code for this website is available for
              download.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can access the source code, contribute, or learn more about
              this project at:
            </p>

            <div className="rounded-2xl bg-secondary/50 border border-border p-6">
              <code className="text-sm font-mono">
                https://github.com/EcoVeridian/ecoveridian-frontend
              </code>
            </div>

            <div className="pt-4">
              <a
                href="https://github.com/EcoVeridian/ecoveridian-frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full">
                  View Source Code on GitHub
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about licensing or need additional
              information, please contact us at{' '}
              <a
                href="mailto:help@ecoveridian.org"
                className="underline hover:text-foreground transition-colors"
              >
                help@ecoveridian.org
              </a>
              .
            </p>
          </div>
        </section>

        <div className="mt-16">
          <Link href="/">
            <Button variant="outline" className="rounded-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
