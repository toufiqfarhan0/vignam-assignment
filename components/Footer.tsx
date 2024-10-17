import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-purple-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Postable Clone</h2>
            <p className="text-sm">
              We help you create postable content! Postable Clone is a free, unlimited tool designed to empower individuals, influencers, and businesses to amplify their voice and effortlessly create engaging content that goes beyond the ordinary.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Tweet Converter</Link></li>
              <li><Link href="#" className="hover:underline">Post Schedule</Link></li>
              <li><Link href="#" className="hover:underline">Screenshot Designer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms and Conditions</Link></li>
              <li><Link href="#" className="hover:underline">Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Twitter</Link></li>
              <li><Link href="#" className="hover:underline">LinkedIn</Link></li>
              <li><Link href="#" className="hover:underline">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-500 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Postable Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}