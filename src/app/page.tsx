export default function LandingPage() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SwiftNest — Streamline Your Hosting</title>
  <meta name="description" content="SwiftNest helps hosts streamline booking, automate guest communication, and optimize pricing—all from one easy dashboard." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html {
      scroll-behavior: smooth;
    }
    /* Custom animation for fade-in up */
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .fade-in-up {
      animation: fadeInUp 0.8s ease forwards;
    }
  </style>
</head>
<body class="bg-gradient-to-b from-indigo-50 via-indigo-100 to-white font-['Inter'] text-gray-800 antialiased">
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" class="text-indigo-600 font-extrabold text-2xl hover:text-indigo-700 transition">SwiftNest</a>
      <ul class="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li><a href="#features" class="hover:text-indigo-600 transition">Features</a></li>
        <li><a href="#testimonials" class="hover:text-indigo-600 transition">Testimonials</a></li>
        <li><a href="#waitlist" class="hover:text-indigo-600 transition">Join Waitlist</a></li>
        <li><a href="#contact" class="hover:text-indigo-600 transition">Contact</a></li>
      </ul>
      <a href="#waitlist" class="hidden md:inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-xl hover:bg-indigo-700 transition font-semibold">Join Waitlist</a>
      <button aria-label="Open menu" id="menu-btn" class="md:hidden focus:outline-none">
        <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
    <div id="mobile-menu" class="md:hidden hidden px-6 pb-6">
      <ul class="space-y-4 text-gray-700 font-semibold">
        <li><a href="#features" class="block hover:text-indigo-600 transition">Features</a></li>
        <li><a href="#testimonials" class="block hover:text-indigo-600 transition">Testimonials</a></li>
        <li><a href="#waitlist" class="block hover:text-indigo-600 transition">Join Waitlist</a></li>
        <li><a href="#contact" class="block hover:text-indigo-600 transition">Contact</a></li>
      </ul>
    </div>
  </header>

  <main class="max-w-7xl mx-auto px-6 pt-16 pb-20">
    <section id="hero" class="flex flex-col-reverse lg:flex-row items-center gap-12">
      <div class="max-w-xl text-center lg:text-left fade-in-up">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-indigo-700 leading-tight mb-4 drop-shadow-[0_2px_4px_rgba(99,102,241,0.3)]">
          Streamline Hosting with <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">SwiftNest</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
          SwiftNest helps hosts streamline booking, automate guest communication, and optimize pricing—all from one easy dashboard. No more juggling platforms or spreadsheets.
        </p>
        <div class="space-y-3 sm:space-y-0 sm:flex sm:justify-center lg:justify-start sm:space-x-6">
          <a href="#waitlist" class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition focus:outline-none focus:ring-4 focus:ring-indigo-300" role="button">
            🚀 Get started in minutes
          </a>
          <a href="#waitlist" class="inline-block text-indigo-600 font-semibold underline hover:text-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded">
            🛠️ Currently in beta – Join our waitlist
          </a>
        </div>
      </div>
      <div class="w-full max-w-lg rounded-xl overflow-hidden shadow-lg fade-in-up" style="animation-delay: 0.3s">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Dashboard overview of SwiftNest app" class="w-full h-auto object-cover" loading="lazy" />
      </div>
    </section>

    <section id="features" class="mt-20">
      <h2 class="text-center text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-12 fade-in-up">Powerful Features That Simplify Hosting</h2>
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <article class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 fade-in-up" style="animation-delay: 0.1s" tabindex="0" aria-label="Streamline Booking Feature">
          <div class="text-indigo-600 mb-4 text-5xl select-none" aria-hidden="true">📅</div>
          <h3 class="text-xl font-semibold mb-2">Streamline Booking</h3>
          <p class="text-gray-600 leading-relaxed">Manage all your bookings from multiple platforms in one intuitive dashboard. Stay organized and never miss a reservation.</p>
        </article>
        <article class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 fade-in-up" style="animation-delay: 0.2s" tabindex="0" aria-label="Automate Guest Communication Feature">
          <div class="text-indigo-600 mb-4 text-5xl select-none" aria-hidden="true">💬</div>
          <h3 class="text-xl font-semibold mb-2">Automate Guest Communication</h3>
          <p class="text-gray-600 leading-relaxed">Send automated, personalized messages to guests, from booking confirmation to check-out reminders. Save time and improve guest experience.</p>
        </article>
        <article class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 fade-in-up" style="animation-delay: 0.3s" tabindex="0" aria-label="Optimize Pricing Feature">
          <div class="text-indigo-600 mb-4 text-5xl select-none" aria-hidden="true">📈</div>
          <h3 class="text-xl font-semibold mb-2">Optimize Pricing</h3>
          <p class="text-gray-600 leading-relaxed">Analyze market trends and occupancy rates to automatically adjust your pricing for maximum revenue and occupancy.</p>
        </article>
      </div>
    </section>

    <section id="testimonials" class="mt-24 bg-indigo-50 rounded-xl py-16 px-6 sm:px-16 shadow-inner fade-in-up">
      <h2 class="text-center text-3xl font-extrabold text-indigo-700 mb-12">What Hosts Are Saying</h2>
      <div class="max-w-5xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <figure class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1" tabindex="0">
          <blockquote class="text-gray-700 italic leading-relaxed mb-4">"SwiftNest saved me hours every week. Managing bookings and messaging guests is now effortless."</blockquote>
          <figcaption class="flex items-center space-x-4">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=64&q=80" alt="Photo of Emily, host from Austin" class="w-12 h-12 rounded-full object-cover" loading="lazy" />
            <div class="text-sm">
              <p class="font-semibold text-indigo-600">Emily R.</p>
              <p class="text-gray-500">Austin, TX</p>
            </div>
          </figcaption>
        </figure>
        <figure class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1" tabindex="0">
          <blockquote class="text-gray-700 italic leading-relaxed mb-4">"The pricing optimization feature helped me increase my monthly revenue by 15%. Highly recommend!"</blockquote>
          <figcaption class="flex items-center space-x-4">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=64&q=80" alt="Photo of James, host from Seattle" class="w-12 h-12 rounded-full object-cover" loading="lazy" />
            <div class="text-sm">
              <p class="font-semibold text-indigo-600">James L.</p>
              <p class="text-gray-500">Seattle, WA</p>
            </div>
          </figcaption>
        </figure>
        <figure class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1" tabindex="0">
          <blockquote class="text-gray-700 italic leading-relaxed mb-4">"No tech skills needed! The platform is super intuitive and helped me keep track easily."</blockquote>
          <figcaption class="flex items-center space-x-4">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&q=80" alt="Photo of Sophie, host from Miami" class="w-12 h-12 rounded-full object-cover" loading="lazy" />
            <div class="text-sm">
              <p class="font-semibold text-indigo-600">Sophie M.</p>
              <p class="text-gray-500">Miami, FL</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="waitlist" class="mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg py-16 px-8 text-center text-white fade-in-up">
      <h2 class="text-3xl sm:text-4xl font-extrabold mb-4 drop-shadow-lg">Join the SwiftNest Beta Waitlist</h2>
      <p class="mb-8 text-lg max-w-xl mx-auto drop-shadow-sm">Shape the future of hosting by getting early access to SwiftNest. No tech skills needed — get started in minutes!</p>
      <form class="max-w-xl mx-auto flex flex-col sm:flex-row gap-4" aria-label="Join waitlist form">
        <label for="email" class="sr-only">Email address</label>
        <input id="email" name="email" type="email" required placeholder="Enter your email" class="flex-1 rounded-lg px-4 py-3 text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-indigo-300" />
        <button type="submit" class="bg-white text-indigo-700 font-semibold rounded-lg px-6 py-3 shadow-md hover:shadow-xl hover:bg-indigo-50 transition focus:outline-none focus:ring-4 focus:ring-white">Join Waitlist</button>
      </form>
      <p class="mt-6 text-indigo-200 text-sm italic drop-shadow-md">We respect your privacy. Your email is safe with us.</p>
    </section>
  </main>

  <footer id="contact" class="bg-white border-t border-indigo-100 mt-32">
    <div class="max-w-7xl mx-auto px-6 py-12 sm:flex sm:justify-between sm:items-center">
      <div class="mb-8 sm:mb-0 text-center sm:text-left">
        <h3 class="text-indigo-700 font-extrabold text-lg mb-2">SwiftNest</h3>
        <p class="text-gray-600 max-w-sm mx-auto sm:mx-0">Helping hosts simplify hosting with smart automation and optimized pricing.</p>
      </div>
      <div class="text-center sm:text-right space-y-4">
        <p class="text-gray-600">Contact us:</p>
        <a href="mailto:support@swiftnest.com" class="text-indigo-600 font-semibold hover:underline focus:outline-none focus:underline">support@swiftnest.com</a>
      </div>
    </div>
    <div class="text-center text-gray-400 text-sm py-4 border-t border-indigo-100 select-none">
      © 2024 SwiftNest. All rights reserved.
    </div>
  </footer>

  <script>
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Smooth scroll polyfill for older browsers - optional (modern browsers support CSS scroll-behavior)
    // No extra JS required as html { scroll-behavior: smooth } is set

    // Form submission (dummy, no backend) - show alert and reset
    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = e.target.email;
      if (emailInput.value.trim()) {
        alert(\`Thank you for joining the waitlist, \${emailInput.value.trim()}! We will keep you updated.\`);
        emailInput.value = '';
      }
    });
  </script>
</body>
</html>`
    }} />
  )
}