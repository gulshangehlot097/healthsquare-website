"use client";
import { useEffect, useState,useMemo } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, ArrowUp } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

function CookieBanner() {
  const KEY = "cookie_consent_v1";
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 bottom-5 z-50 mx-auto max-w-3xl rounded-2xl border border-white/50 bg-white/70 backdrop-blur-lg shadow-lg p-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-sm text-slate-700"
    >
      <p>
        We use cookies to improve your experience. By using our site, you agree
        to our{" "}
        <Link href="#cookies" className="underline text-blue-600">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            localStorage.setItem(KEY, "yes");
            setShow(false);
          }}
          className="rounded-xl bg-[#0C78D1] text-white px-4 py-1.5 font-medium shadow-sm hover:shadow transition"
        >
          Accept
        </motion.button>
        <MotionLink
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-xl border border-slate-300 px-4 py-1.5 font-medium hover:bg-slate-50 transition"
        >
          Manage
        </MotionLink>
      </div>
    </motion.div>
  );
}

function ScrollSection({ children, ...props }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default function PrivacyPolicy() {
  const lastUpdated = "01 March 2022";
  const [activeId, setActiveId] = useState("intro");

const sections = useMemo(
  () => [
    { id: "intro", label: "Introduction" },
    { id: "definitions", label: "Definitions" },
    { id: "collect", label: "Information We Collect From You" },
    { id: "ways", label: "Ways of Collecting Information" },
    { id: "use", label: "Use of Your Personal Information" },
    { id: "sharing", label: "Sharing / Disclosure" },
    { id: "consent", label: "Your Consent" },
    { id: "cookies", label: "Cookies" },
    { id: "security", label: "Data Security Precautions" },
    { id: "thirdparty", label: "Third Party Sites" },
    { id: "contact", label: "Contact" },
  ],
  [] 
);

useEffect(() => {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveId(e.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
  );

  sections.forEach((s) => {
    const el = document.getElementById(s.id);
    if (el) obs.observe(el);
  });

  return () => obs.disconnect();
}, [sections]);


  return (
    <>
      {/* Background */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-gradient-to-br from-[#E6F8FF] via-white to-[#F0FFF8] overflow-hidden"
      >
        <div className="absolute top-[-10%] right-[10%] h-72 w-72 bg-[#00B4D8]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[10%] left-[10%] h-96 w-96 bg-[#34D399]/20 blur-3xl rounded-full" />
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-8 py-20">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-lg border border-white/60 shadow-lg p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E0F7FA]/40 to-[#E6FFFA]/30" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-slate-200 px-3 py-1 text-xs text-slate-600 shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#34D399]" />
                Trusted Healthcare Partner
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Privacy Policy
              </h1>
              <p className="mt-3 max-w-2xl text-slate-700 leading-relaxed">
                This Privacy Policy explains how Health Square collects, uses,
                and protects your information when you use our website and services.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-700">
                  Last Updated: {lastUpdated}
                </span>
                <Link
                  href="#intro"
                  className="rounded-full bg-[#0C78D1] text-white px-4 py-1.5 hover:shadow-md transition"
                >
                  Start Reading
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="w-full max-w-md grid grid-cols-2 gap-3">
                <CardLink
                  href="#collect"
                  icon={<Lock />}
                  title="Data Collection"
                  desc="What we collect"
                />
                <CardLink
                  href="#security"
                  icon={<Shield />}
                  title="Data Security"
                  desc="How we protect it"
                />
              </div>
            </div>
          </div>
        </motion.header>

        {/* Sidebar + Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-10">
          {/* TOC */}
          <aside className="hidden lg:block sticky top-28 self-start">
            <nav className="rounded-2xl bg-white/60 backdrop-blur border border-white/50 shadow-sm p-4">
              <div className="mb-2 text-xs uppercase tracking-wider text-slate-500 font-medium">
                On this page
              </div>
              <ul className="space-y-1 text-sm">
                {sections.map((s) => (
                  <MotionLink
                    key={s.id}
                    href={`#${s.id}`}
                    whileHover={{ x: 3 }}
                    className={`flex items-center gap-2 rounded-md px-2 py-1 transition ${
                      activeId === s.id
                        ? "bg-gradient-to-r from-[#E0F7FA] to-[#E6FFFA] text-slate-900 font-medium"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all ${
                        activeId === s.id ? "bg-[#00B4D8]" : "bg-slate-300"
                      }`}
                    />
                    {s.label}
                  </MotionLink>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="relative space-y-10 text-slate-700 leading-relaxed">
            {/* INTRODUCTION */}
            <ScrollSection id="intro" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">Introduction</h2>
              <p>
                Health Square recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Privacy Policy sets out how Health Square uses and protects any information that you give Health Square when you use this www.healthsquare.in or any other digital medium and other offline sources of our Company. Health Square is committed to ensure that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this Privacy Policy as it describes how we treat user information we collect from you, the policies and procedures on the collection, use, disclosure and protection of your  information when you use our Health Square Platform.
              </p>
              <p className="mt-3">
                This Privacy Policy applies to current and former visitors to our Health Square Platform and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy. Health Square may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
              </p>
            </ScrollSection>

            {/* DEFINITIONS */}
            <ScrollSection id="definitions" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">DEFINITIONS</h2>
              <p>
                The terms “Health Square”, “Company”, “we”, “us” and “our” refer to the Health Square. The term “Health Square Platform” refers to www.healthsquare.in or any other digital medium and other offline sources.
              </p>
              <p className="mt-3">
                The terms “you” and “your” refer to the visitor/user/subscriber of the www.healthsquare.in website or any other digital medium and other offline sources.
              </p>
              <p className="mt-3">
                The term “Group” means, with respect to any person, any entity that is controlled by such person, or any entity that controls such person, or any entity that is under common control with such person, whether directly or indirectly, or, in the case of a natural person, any Relative of such person.
              </p>
              <p className="mt-3">
                The term “Services” refers to any services offered by Health Square whether on the Website or otherwise.
              </p>
              <p className="mt-3">
                The term “Policy” refers to this Privacy Policy.
              </p>
              <p className="mt-3">
                Please read this Policy before using the Health Square Platform or submitting any personal information to Health Square. This Policy is a part of and incorporated within, and is to be read along with, the Terms of Use.
              </p>
            </ScrollSection>

            {/* INFORMATION WE COLLECT */}
            <ScrollSection id="collect" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">INFORMATION WE COLLECT FROM YOU</h2>

              <h3 className="font-semibold text-slate-900 mt-2">Contact information:</h3>
              <p>We  might   collect   your  Name,   Email,  Phone,   Address,   IP Address.</p>

              <h3 className="font-semibold text-slate-900 mt-4">Payment and billing information:</h3>
              <p>
                We might collect your billing name, billing address and payment method when you buy a product/service. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">Information you post:</h3>
              <p>
                We collect information you post in a public space on our Health Square Platform or on a third-party social media site belonging to Health Square.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">Usage and Preference Information:</h3>
              <p>
                We collect information as to how you interact with our Services, preferences expressed and settings chosen. Health Square Platform includes the Health Square advertising services (“Ad Services”), which may collect user activity and browsing history within the Health Square Platform and across third-party sites and online services, including those sites and services that include our ad pixels (“Pixels”), widgets, plug-ins, buttons, or related services or through the use of cookies. Our Ad Services collect browsing information including, without limitation, your Internet protocol (IP) address and location, your login information, browser type and version, date and time stamp, user agent, Health Square cookie ID (if applicable), time zone setting, browser plug-in types and versions, operating system and platform, and other information about user activities on the Health Square Platform, as well as on third party sites and services that have embedded our Pixels, widgets, plug-ins, buttons, or related services.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">Transaction Information:</h3>
              <p>
                We collect transaction details related to your use of our Services, and information about your activity on the Services, including the full Uniform Resource Locators (URL), the type of Services you requested or provided, comments, domain names, search results selected, number of clicks, information and pages viewed and searched for, the order of those pages, length of your visit to our Services, the date and time you used the Services, amount charged, details regarding application of promotional code, methods used to browse away from the page and any phone number used to call our customer service number and other related transaction details.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">Demographic information:</h3>
              <p>
                We may collect demographic information about you during the use of Health Square website. We might collect this as a part of a survey also.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">Other information:</h3>
              <p>
                If you use Health Square website, we may collect information about your IP address and the browser you’re using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.
              </p>
            </ScrollSection>

            {/* WAYS OF COLLECTING */}
            <ScrollSection id="ways" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">WAYS OF COLLECTING INFORMATION</h2>

              <h3 className="font-semibold text-slate-900 mt-2">We collect information directly from you:</h3>
              <p>
                We collect information directly from you when you register on Health Square Platform. We also collect information if you post a comment on Health Square Platform or ask us a question through phone or email or any other source of communication.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We collect information from you passively:</h3>
              <p>
                We use tracking tools like Google Analytics, Google Webmaster, Google Cookies for collecting information about your usage of our website.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We get information about you from third parties:</h3>
              <p>
                We may receive information about you from third parties, such as other users, partners (including ad partners, analytics providers, search information providers), or our affiliated companies or if you use any of the other websites/apps we operate or the other Services we provide. Users of our Ad Services and other third- parties may share information with us such as the cookie ID, device ID, or demographic or interest data, and information about content viewed or actions taken on a third-party website, online services or apps. For example, users of our Ad Services may also be able to share customer list information (e.g., email or phone number) with us to create customized audience segments for their ad campaigns.
              </p>
              <p className="mt-3">
                When you sign in to Health Square website with your SNS account, or otherwise connect to your SNS account with the Services, you consent to our collection, storage, and use, in accordance with this Policy, of the information that you make available to us through the social media interface. This could include, without limitation, any information that you have made public through your social media account, information that the social media service shares with us, or information that is disclosed during the sign-in process. Please see your social media provider’s privacy policy and help center for more information about how they share information when you choose to connect your account.
              </p>
              <p className="mt-3">
                If you are partner company, we may, additionally, receive feedback and rating from other users.
              </p>
            </ScrollSection>

            {/* USE OF PERSONAL INFORMATION */}
            <ScrollSection id="use" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">USE OF YOUR PERSONAL INFORMATION</h2>

              <h3 className="font-semibold text-slate-900 mt-2">We use information to contact you:</h3>
              <p>
                We might use the information you provide to contact you for confirmation of a purchase from Health Square Platform or for other promotional purposes.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We use information to abide by the contracts:</h3>
              <p>
                We might use the information you provide to carry out our obligations arising from any contracts entered into between you and us and to provide you with the relevant information and services.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We use information to respond to your requests or questions:</h3>
              <p>
                We might use your information to confirm your registration for rendering services we offer.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We use information to improve our products and services:</h3>
              <p>
                We might use your information to customize your experience with us. This could include displaying content based upon your preferences. We might also use your information to understand our users (what they do on our Services, what features they like, how they use them, etc.), improve the content and features of our Services (such as by personalizing content to your interests), process and complete your transactions, make special offers, provide customer support, process and respond to your queries and to generate and review reports and data about, and to conduct research on, our user base and Service usage patterns. If you are a partner company, we may use the information to track the progress of your service to our customers.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We use information to look at site trends and customer interests:</h3>
              <p>
                We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties. We may use your information to provide you with information about services we consider similar to those that you are already using, or have
              </p>
              <p>
                enquired about, or may interest you. If you are a registered/Opt-In user, we will contact you by electronic means (e-mail or SMS or telephone or RCS business messages) with information about these services.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We use information for security purposes:</h3>
              <p>
                We may use information to protect our company, our customers, or our Health Square Platform.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We use information for marketing purposes:</h3>
              <p>
                We might send you information about special promotions or offers. We might also tell you about new features or products or enroll you in our newsletter. These might be our own offers or products, or third-party offers or products we think you might find interesting. We may use the information to measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We use information to send you transactional communications:</h3>
              <p>
                We might send you emails or SMS about your account or purchase of our product.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We use information as otherwise permitted by law:</h3>
              <p>
                We may combine the information that we receive from third parties with the information you give to us and information we collect about you for the purposes set out above. Further, we may anonymize and/or de-identify information collected from you through the Services or via other means, including via the use of third-party web analytic tools. As a result, our use and disclosure of aggregated and/or de-identified information is not restricted by this Policy, and it may be used and disclosed to others without limitation.
              </p>
              <p className="mt-3">
                We analyse the log files of our Health Square Platform that may contain Internet Protocol (IP) addresses, browser type and language, Internet service provider (ISP), referring, app crashes, page viewed and exit websites and applications, operating system, date/time stamp, and clickstream data. This helps us to administer the website, to learn about user behavior on the site,
              </p>
              <p>
                to improve our product and services, and to gather demographic information about our user base as a whole.
              </p>
            </ScrollSection>

            {/* SHARING / DISCLOSURE */}
            <ScrollSection id="sharing" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                SHARING/DISCLOSURE/DISTRIBUTION OF YOUR INFORMATION WITH THIRD-PARTIES
              </h2>

              <h3 className="font-semibold text-slate-900 mt-2">We will share information with third parties who perform services on our behalf:</h3>
              <p>
                We may share your information with our vendors, consultants, marketing partners, research firms and other service providers or business partners, such as payment processing companies, to support our business. For example, your information may be shared with outside vendors to send you emails and messages or push notifications to your devices in relation to our Services, to help us analyze and improve the use of our Services, to process and collect payments.
              </p>
              <p className="mt-3">
                We may also use vendors for other projects, such as conducting surveys or organizing sweepstakes for us. Some vendors may be located outside of India.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We may share information with Advertisers and advertising networks:</h3>
              <p>
                We may work with third parties such as network advertisers to serve advertisements on the Health Square Platform and on third-party websites or other media (e.g., social networking platforms). These third parties may use cookies, JavaScript, web beacons (including clear GIFs), Flash LSOs and other tracking technologies to measure the effectiveness of their ads and to personalize advertising content to you.
              </p>
              <p className="mt-3">
                While you cannot opt out of advertising on the Health Square Platform, you may opt out of much interest-based advertising on third party sites and through third party ad networks (including DoubleClick Ad Exchange, Facebook Audience Network and Google AdSense). Opting out means that you will no longer receive personalized ads by third parties ad networks from which you have opted out, which is based on your browsing information across multiple sites and online services. If you delete cookies or change devices, your ‘opt out’ may no longer be effective to fulfill the purpose for which you provide it.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We will share information with our business partners:</h3>
              <p>
                This includes a third party who provide us various services. Our partners use the information we give them as described in their privacy policies.
              </p>
              <p className="mt-3">
                While you place a request to order through the Health Square Platform, your information is provided to us and to the vendors with whom you may choose to order. In order to facilitate your online order processing, we provide your information to that vendors in a similar manner as if you had made a goods/products/food order directly with the vendors. If you provide a mobile phone number, Health Square may send you text messages regarding the orders delivery status.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We will share information with Other Users:</h3>
              <p>
                If you are a delivery partner, we may share your name, phone number and/or profile picture (if applicable), tracking details with other users to provide them the Services.
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We may share information if we think we have to in order to comply with the law or to protect ourselves:</h3>
              <p>
                We may also share it if a government agency or investigatory body or other companies assisting us, requests when we are:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Obligated under the applicable laws or in good faith to respond to court orders and processes; or</li>
                <li>Detecting and preventing against actual or potential occurrence of identity theft, fraud, abuse of Services and other illegal acts;</li>
                <li>Responding to claims that an advertisement, posting or other content violates the intellectual property rights of a third party;</li>
                <li>Under a duty to disclose or share your personal data in order to enforce our Terms of Use and other agreements, policies or to protect the rights, property, or safety of the Company, our customers, or others, or in the event of a claim or dispute relating to your use of our Services. This includes exchanging information with other companies and organisations for the purposes of fraud detection and credit risk reduction.</li>
              </ul>

              <h3 className="font-semibold text-slate-900 mt-4">We may share information for Internal Use or may share it with any successor to all or part of our business:</h3>
              <p>
                For example, if part of our business is sold we may give our customer list as part of that transaction. We may also share your information with any present or future member of our “Group” (as defined above) or affiliates for our internal business purposes
              </p>

              <h3 className="font-semibold text-slate-900 mt-4">We may share your information for reasons not described in this policy:</h3>
              <p>
                We may share your information other than as described in this
              </p>
              <p>
                Policy if we notify you and you consent to the sharing. We will tell you before we do this.
              </p>
            </ScrollSection>

            {/* CONSENT */}
            <ScrollSection id="consent" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">YOUR CONSENT</h2>
              <p>
                By using the Health Square Platform and the Services provided therein, you agree and consent to the collection, transfer, use, storage, disclosure and sharing of your information as described and collected by us in accordance with this Policy. If you do not agree with the Policy, please do not use or access the Health Square website.
              </p>
            </ScrollSection>

            {/* COOKIES */}
            <ScrollSection id="cookies" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">COOKIES</h2>
              <p>
                Our Health Square website and third parties with whom we partner, may use cookies, pixel tags, web beacons, mobile device IDs, “flash cookies” and similar files or technologies to collect and store information with respect to your use of the Services and third-party websites.
              </p>
              <p className="mt-3">
                Cookies are small files that are stored on your browser or device by websites, apps, online media and advertisements. We use cookies and similar technologies for purposes such as:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Authenticating users;</li>
                <li>Remembering user preferences and settings;</li>
                <li>Determining the popularity of content;</li>
                <li>Delivering   and   measuring   the   effectiveness   of   advertising campaigns;</li>
                <li>Analysing site traffic and trends, and generally understanding the</li>
              </ul>
              <p>online behaviours and interests of people who interact with our services.</p>
              <p className="mt-3">
                A pixel tag (also called a web beacon or clear GIF) is a tiny graphic with a unique identifier, embedded invisibly on a webpage (or an online ad or email), and is used to count or track things like activity on a webpage or ad impressions or clicks, as well as to access cookies stored on users’ computers. We use pixel tags to measure the popularity of our various pages, features and services. We also may include web beacons in e- mail messages or newsletters to determine whether the message has been opened and for other analytics.
              </p>
              <p className="mt-3">
                To modify your cookie settings, please visit your browser’s settings. By using our Services with your browser settings to accept cookies, you are consenting to our use of cookies in the manner described in this section.
              </p>
              <p className="mt-3">
                We may also allow third parties to provide audience measurement and analytics services for us, to serve advertisements on our behalf across the Internet, and to track and report on the performance of those advertisements. These entities may use cookies, web beacons, SDKs and other technologies to identify your device when you visit the Health Square website and use our Services, as well as when you visit other online sites and services.
              </p>
            </ScrollSection>

            {/* DATA SECURITY */}
            <ScrollSection id="security" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">DATA SECURITY PRECAUTIONS</h2>
              <p>
                We have in place appropriate technical and security measures to secure the information collected by us. We use vault and tokenization services from third party service providers to protect the sensitive personal information provided by you. The third-party service providers with respect to our vault and tokenization services and our payment gateway and payment processing are compliant with the payment card industry standard (generally referred to as PCI compliant service providers). You are advised not to send your full credit/debit card details through unencrypted electronic platforms. Where we have given you (or where you have chosen) a username and password which enables you to access certain parts of the Health Square Platform, you are responsible for keeping these details confidential. We ask you not to share your password with anyone.
              </p>
              <p className="mt-3">
                Please be aware that the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted through the Health Square Platform. Once we have received your information, we will use strict physical, electronic, and procedural safeguards to try to prevent unauthorized access.
              </p>
            </ScrollSection>

            {/* THIRD PARTY SITES */}
            <ScrollSection id="thirdparty" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">THIRD PARTY SITES</h2>
              <p>
                The Health Square website may contain links to other websites. If you click on one of the links to third party websites, you may be taken to websites we do not control. Any personal information about you collected whilst visiting such websites is not governed by this Policy. Health Square shall not be responsible for and has no control over the practices and content of any website accessed using the links contained on the Health Square Platform. Read the privacy policy of other websites carefully as this policy does not apply to the privacy practices of those websites. We are not responsible for these third party sites.
              </p>
              <p className="mt-3">
                This Policy shall also not apply to any information you may disclose to any of our service providers/service personnel which we do not require you to disclose to us or any of our service providers under this Policy.
              </p>
            </ScrollSection>

            {/* CONTACT */}
            <ScrollSection id="contact" className="rounded-3xl bg-white/80 backdrop-blur border border-white/50 shadow p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">Contact</h2>
              <p>
                If you have any queries relating to the processing or usage of information provided by you in connection with this Policy or other privacy concerns, you can email us at{" "}
                <a href="mailto:info@healthsquare.in" className="text-blue-600 underline">info@healthsquare.in</a>.
              </p>
            </ScrollSection>

            {/* Scroll to top */}
            <MotionLink
              href="#intro"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#0C78D1] text-white px-4 py-2 shadow-lg hover:shadow-xl transition"
            >
              <ArrowUp className="h-4 w-4" />
              Top
            </MotionLink>
          </article>
        </div>

        <CookieBanner />
      </main>
    </>
  );
}

function CardLink({ href, icon, title, desc }) {
  return (
    <MotionLink
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group rounded-2xl border border-white/60 bg-white/70 backdrop-blur shadow-sm hover:shadow-md p-4 transition"
    >
      <div className="text-[#00B4D8] group-hover:text-[#34D399]">{icon}</div>
      <div className="mt-1 text-sm font-medium text-slate-800">{title}</div>
      <p className="text-xs text-slate-500">{desc}</p>
    </MotionLink>
  );
}
