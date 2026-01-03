const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide mb-4 font-paci">
              Bazario<span className="text-gray-700">.</span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Discover stylish clothing and shoes crafted for comfort, quality,
              and everyday confidence. Elevate your lifestyle with modern fashion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Home", "Best Sellers", "Offers & Deals", "New Arrivals"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-black transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-gray-800">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Delivery Information",
                "Return & Refund Policy",
                "Payment Methods",
                "Track Your Order",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-gray-800">
              Follow Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Instagram", "Twitter", "Facebook"].map((item) => (
                <li
                  key={item}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Bazario. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Designed for modern shopping experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
