import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import MediaGallery from "@/components/MediaGallery";
import { LinkGroup, ProjectCard } from "@/components/cards";

const projects = [
  {
    title: "Lean Scaling Co",
    description:
      "At Lean Scaling Co, I support the digital marketing and content efforts that position the company as a thought leader in scalable growth and operational strategy.\n\nMy work includes writing and developing SEO-driven blog articles that break down key topics such as scalable growth, leadership structure, and operational systems for founders and service-based businesses. I also support the rollout of digital campaigns by managing social media content, preparing posts, and coordinating content schedules.\n\nAlongside content creation, I track campaign performance across digital channels. This involves reviewing how content performs, identifying which topics resonate most with the audience, and making adjustments to improve reach and engagement.",
    impact:
      "In my role, I have taken ownership of content development and execution across blog and social platforms. Over the past 5 months, this has contributed to a steady 12-15% increase in overall social media engagement, while also improving consistency in posting and clarity in messaging across channels.",
    links: [
      { label: "Lean Scaling System", url: "https://www.leanscaling.com/lean-scaling-system" },
      { label: "Instagram", url: "https://www.instagram.com/leanscalingco" },
      { label: "Strategic Ops Blog", url: "https://www.strategicopsinstitute.com/blog" }
    ]
  },
  {
    title: "Sukume - Website Copy",
    description:
      "For Sukume, I worked on developing the website copy, focusing on clearly communicating the company vision, offering, and positioning. The platform brings together elements of technology, creativity, and culture, and the goal of the copy was to make that clear and easy to understand for a broader audience.",
    impact:
      "I led the full website copywriting, helping shape how the business presents itself online. The work made the messaging more clear and aligned across pages, which supported better understanding from both partners and users. I also contributed to broader strategy work across projects in tech, art, and fashion, while maintaining strong working relationships with stakeholders both locally and internationally.",
    links: [{ label: "Visit Sukume", url: "https://sukume.com/" }]
  },
  {
    title: "Botlhale AI - Social Media Strategy & Website Copy",
    description:
      "I worked with Botlhale AI on developing their social media strategy, as well as writing the About page for their website. The focus was on positioning the brand clearly within the AI space, while making their offering accessible and relevant to their target audience.",
    impact:
      "The work helped strengthen their brand positioning and messaging within the AI space. It also supported visibility through industry workshops and conferences, where the brand was able to connect with relevant partners and stakeholders.",
    links: [
      {
        label: "Strategy Deck",
        url: "https://docs.google.com/presentation/d/1arJByUkDiRDEJ02OEFSJctPKShR32NoP/edit"
      },
      {
        label: "About Page",
        url: "https://botlhale.ai/about-us-multilingual-solutions/"
      }
    ]
  },
  {
    title: "Sobae Frozen",
    description:
      "I worked with Sobae Frozen to support their brand positioning and execution across social media platforms. My role focused on aligning their content with their overall business direction, making sure the messaging reflected their product offering and brand identity.",
    impact:
      "Through refining their marketing and content approach, the brand was able to present itself more clearly and consistently online. This helped improve how the business communicates its value to its audience.",
    links: [{ label: "Instagram", url: "https://www.instagram.com/sobaefrozen/?hl=en" }]
  },
  {
    title: "Ferdinand Louw Interiors",
    description:
      "I developed the social media strategy and managed the Instagram page from 2023 to 2024. The focus was on building a strong and consistent brand presence from the ground up.",
    impact:
      "I grew the Instagram page from 0 to over 150 followers within the first 3 months through consistent posting and clear positioning. This laid a solid foundation for the brand online presence.",
    links: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/ferdilouw_interiors"
      }
    ]
  }
];

const mediaItems = [
  {
    category: "Images",
    title: "Campaign Visuals",
    helper: "Add campaign creatives, post designs, and visual assets here.",
    previewLabel: "Image preview placeholder"
  },
  {
    category: "Screenshots",
    title: "Analytics & Dashboards",
    helper: "Upload social analytics screenshots and campaign reporting snapshots.",
    previewLabel: "Dashboard screenshot placeholder"
  },
  {
    category: "Documents",
    title: "Strategy Decks & PDFs",
    helper: "Store strategy presentations, content plans, and project PDFs.",
    previewLabel: "Document preview placeholder"
  },
  {
    category: "Images",
    title: "Social Post Samples",
    helper: "Keep reusable placeholders for future social content uploads.",
    previewLabel: "Social sample placeholder"
  },
  {
    category: "Screenshots",
    title: "Performance Highlights",
    helper: "Show top-performing campaign metrics and engagement trends.",
    previewLabel: "Performance preview placeholder"
  },
  {
    category: "Documents",
    title: "Content Calendars",
    helper: "Upload monthly content calendars and campaign planning files.",
    previewLabel: "Calendar file placeholder"
  }
];

const strengths = [
  "Social media strategy",
  "Content creation",
  "Campaign execution",
  "Analytics and performance tracking"
];

const groupedLinks = [
  {
    title: "Lean Scaling Co",
    links: [
      { label: "Lean Scaling System", url: "https://www.leanscaling.com/lean-scaling-system" },
      { label: "Instagram", url: "https://www.instagram.com/leanscalingco" },
      { label: "Strategic Ops Blog", url: "https://www.strategicopsinstitute.com/blog" }
    ]
  },
  {
    title: "Sukume",
    links: [{ label: "Website", url: "https://sukume.com/" }]
  },
  {
    title: "Botlhale AI",
    links: [
      {
        label: "Strategy Deck",
        url: "https://docs.google.com/presentation/d/1arJByUkDiRDEJ02OEFSJctPKShR32NoP/edit"
      },
      { label: "About Page", url: "https://botlhale.ai/about-us-multilingual-solutions/" }
    ]
  },
  {
    title: "Sobae Frozen",
    links: [{ label: "Instagram", url: "https://www.instagram.com/sobaefrozen/?hl=en" }]
  },
  {
    title: "Ferdinand Louw Interiors",
    links: [{ label: "Instagram", url: "https://www.instagram.com/ferdilouw_interiors" }]
  }
];

export default function Home() {
  return (
    <main>
      <section className="section-dark border-b border-white/10">
        <div className="container-page py-24 md:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-accent">
                Growth Marketing Portfolio
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-lightText md:text-6xl">
                Vuyisile Phika
              </h1>
              <p className="mt-4 text-lg text-slate-300 md:text-xl">
                Growth Marketer & Content Lead
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                I help brands grow through clear messaging, practical strategy, and consistent
                content execution. My work is focused on real outcomes: stronger positioning, better
                engagement, and measurable campaign impact.
              </p>
              <Link
                href="#projects"
                className="mt-10 inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-greenDeep"
              >
                View My Work
              </Link>
            </div>
            <div className="mx-auto w-full max-w-sm">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
                <Image
                  src="/vuyisile-phika.png"
                  alt="Vuyisile Phika portrait"
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-light py-20 md:py-24" id="about">
        <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Clear strategy, strong content, and focused growth execution"
          description="I work across social media, campaigns, and content systems to help brands communicate better and grow with consistency. My approach combines creative direction with performance tracking."
          tone="light"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((strength) => (
            <div key={strength} className="rounded-xl border bg-surface p-5 text-sm shadow-soft">
              {strength}
            </div>
          ))}
        </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-dark py-20 md:py-24" id="projects">
        <div className="container-page">
          <SectionHeading
            eyebrow="Main Work"
            title="Projects"
            description="Detailed case studies covering strategy, copy, campaign execution, and measurable impact."
            tone="dark"
          />
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-light py-20 md:py-24" id="media-content">
        <div className="container-page">
        <SectionHeading
          eyebrow="Media"
          title="Media & Content Uploads"
          description="A gallery-style section for campaign images, analytics screenshots, and strategy documents. Click any block to open a quick preview."
          tone="light"
        />
        <MediaGallery items={mediaItems} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-dark py-20 md:py-24" id="links">
        <div className="container-page">
          <SectionHeading
            eyebrow="Access"
            title="Project Links"
            description="All relevant links grouped by project for quick access."
            tone="dark"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {groupedLinks.map((group) => (
              <LinkGroup key={group.title} {...group} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-light py-20 md:py-24" id="contact">
        <div className="container-page">
        <div className="rounded-3xl border border-border/80 bg-surface p-8 shadow-soft md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-darkText md:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            If you are looking for growth-focused content, clear messaging, and practical campaign
            strategy, I&apos;d love to hear about your goals.
          </p>
          <div className="mt-8 flex flex-col gap-3 text-sm text-darkText">
            <a className="transition hover:text-accent" href="mailto:vuyisile.phika@email.com">
              vuyisile.phika@email.com
            </a>
            <a
              className="transition hover:text-greenDeep"
              href="https://www.linkedin.com/in/vuyisilephika"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/vuyisilephika
            </a>
          </div>
        </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
