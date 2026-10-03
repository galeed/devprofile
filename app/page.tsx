import {
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Globe2,
  Mail,
  MapPin,
  MoreHorizontal,
  Pencil,
  Terminal,
} from 'lucide-react'

const contactItems = [
  { icon: Mail, label: 'email', value: 'alex.morgan@northstar.dev' },
  { icon: Globe2, label: 'website', value: 'alexmorgan.dev' },
  { icon: MapPin, label: 'location', value: 'Brooklyn, NY' },
  { icon: BriefcaseBusiness, label: 'company', value: 'Northstar Labs' },
]

const activity = [
  { action: 'pushed to', repo: 'northstar/cli', branch: 'main', time: '2h ago', color: 'bg-emerald-400' },
  { action: 'opened issue in', repo: 'vercel/next.js', branch: '#78142', time: 'yesterday', color: 'bg-amber-400' },
  { action: 'starred', repo: 'shadcn-ui/ui', branch: '', time: '3d ago', color: 'bg-sky-400' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0d0f] font-mono text-[#d7dde3] selection:bg-[#9fe870] selection:text-[#0b0d0f]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col border-x border-[#24292e] bg-[#101315]">
        <header className="flex h-14 items-center justify-between border-b border-[#24292e] px-5 text-xs sm:px-8">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-[#eef2f5]"><Terminal className="size-4 text-[#9fe870]" /><span className="font-semibold tracking-tight">dev_profile</span></div>
            <span className="hidden text-[#66717a] sm:inline">/</span>
            <span className="hidden text-[#89939c] sm:inline">users/alex-morgan</span>
          </div>
          <div className="flex items-center gap-4 text-[#89939c]"><span className="hidden sm:inline">v1.4.2</span><button aria-label="More options" className="rounded p-1 transition-colors hover:bg-[#1d2327] hover:text-[#d7dde3]"><MoreHorizontal className="size-4" /></button></div>
        </header>

        <div className="grid flex-1 lg:grid-cols-[minmax(0,1fr)_330px]">
          <section className="px-5 py-10 sm:px-10 lg:px-16 lg:py-16">
            <div className="mb-10 flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="relative shrink-0"><img src="/placeholder-user.jpg" alt="Alex Morgan" className="size-24 rounded-lg border border-[#3b454d] object-cover grayscale" /><span className="absolute -bottom-1 -right-1 size-3 rounded-full border-2 border-[#101315] bg-[#9fe870]" title="Online" /></div>
                <div><div className="mb-2 flex items-center gap-2 text-xs text-[#73808a]"><span className="text-[#9fe870]">@</span> alex-morgan</div><h1 className="text-3xl font-semibold tracking-[-0.04em] text-[#f3f6f8] sm:text-4xl">Alex Morgan</h1><p className="mt-2 max-w-xl font-sans text-sm leading-6 text-[#9aa5ad]">Product engineer building calm, useful tools for teams that care about craft.</p></div>
              </div>
              <button className="inline-flex h-9 items-center justify-center gap-2 rounded border border-[#3b454d] px-3 text-xs text-[#d7dde3] transition-colors hover:border-[#9fe870] hover:text-[#9fe870]"><Pencil className="size-3.5" /> edit profile</button>
            </div>

            <nav aria-label="Profile sections" className="mb-8 flex gap-6 border-b border-[#24292e] text-xs"><a className="border-b-2 border-[#9fe870] pb-3 text-[#f3f6f8]" href="#overview">overview</a><a className="pb-3 text-[#73808a] transition-colors hover:text-[#d7dde3]" href="#activity">activity <span className="text-[#4f5a62]">(24)</span></a><a className="pb-3 text-[#73808a] transition-colors hover:text-[#d7dde3]" href="#projects">projects <span className="text-[#4f5a62]">(08)</span></a></nav>

            <div id="overview" className="grid gap-8 xl:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)]">
              <div><div className="mb-3 flex items-center gap-2 text-xs text-[#73808a]"><span className="text-[#9fe870]">01</span><span>about.md</span></div><div className="rounded-lg border border-[#24292e] bg-[#0d1012] p-5 text-sm leading-7 text-[#aeb7be]"><p><span className="text-[#65717a]">## </span>Hi, I&apos;m Alex.</p><p className="mt-3 font-sans">I work across product, design, and infrastructure to turn rough ideas into dependable software. Currently focused on developer experience at <span className="text-[#d7dde3]">Northstar Labs</span>.</p><p className="mt-3 font-sans">Outside of work, you&apos;ll find me collecting field recordings, making excellent coffee, and exploring the edges of New York.</p></div></div>
              <div><div className="mb-3 flex items-center gap-2 text-xs text-[#73808a]"><span className="text-[#9fe870]">02</span><span>contact.json</span></div><div className="divide-y divide-[#24292e] rounded-lg border border-[#24292e] bg-[#0d1012]">{contactItems.map(({ icon: Icon, label, value }) => <div key={label} className="flex items-center gap-3 px-4 py-3"><Icon className="size-3.5 text-[#73808a]" /><div className="min-w-0"><div className="text-[10px] uppercase tracking-widest text-[#58636b]">{label}</div><div className="truncate text-xs text-[#c7d0d6]">{value}</div></div></div>)}</div></div>
            </div>

            <div id="activity" className="mt-12"><div className="mb-3 flex items-center justify-between text-xs"><div className="flex items-center gap-2 text-[#73808a]"><span className="text-[#9fe870]">03</span><span>recent_activity.log</span></div><a href="#activity" className="text-[#73808a] hover:text-[#9fe870]">view all <ChevronRight className="inline size-3" /></a></div><div className="rounded-lg border border-[#24292e] bg-[#0d1012]">{activity.map((item) => <div key={item.repo} className="flex items-center gap-3 border-b border-[#24292e] px-4 py-4 last:border-b-0"><span className={`size-1.5 rounded-full ${item.color}`} /><span className="text-xs text-[#89939c]">{item.action}</span><span className="text-xs text-[#d7dde3]">{item.repo}</span>{item.branch && <span className="rounded bg-[#1d252a] px-1.5 py-0.5 text-[10px] text-[#8e9ba4]">{item.branch}</span>}<span className="ml-auto text-[10px] text-[#58636b]">{item.time}</span></div>)}</div></div>
          </section>

          <aside className="border-t border-[#24292e] bg-[#0d1012] px-5 py-8 sm:px-10 lg:border-l lg:border-t-0 lg:px-8 lg:py-16">
            <div className="mb-8 flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.2em] text-[#58636b]">availability</p><div className="mt-2 flex items-center gap-2 text-xs text-[#9fe870]"><span className="size-1.5 rounded-full bg-[#9fe870]" /> open to conversations</div></div><Check className="size-4 text-[#9fe870]" /></div>
            <div className="mb-8 border-y border-[#24292e] py-6"><p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#58636b]">currently working on</p><div className="flex items-start gap-3"><Code2 className="mt-0.5 size-4 text-[#9fe870]" /><div><p className="text-xs text-[#d7dde3]">making infra feel invisible</p><p className="mt-1 font-sans text-xs leading-5 text-[#73808a]">A toolkit for small teams shipping at scale.</p></div></div></div>
            <div className="mb-8"><p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#58636b]">links</p><div className="flex flex-col gap-3 text-xs"><a href="#github" className="flex items-center gap-3 text-[#aeb7be] hover:text-[#9fe870]"><Code2 className="size-4" /> github.com/alex-morgan <ArrowUpRight className="ml-auto size-3" /></a><a href="#social" className="flex items-center gap-3 text-[#aeb7be] hover:text-[#9fe870]"><AtSign className="size-4" /> @alexmorgan <ArrowUpRight className="ml-auto size-3" /></a></div></div>
            <div><p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#58636b]">member since</p><div className="flex items-center gap-3 text-xs text-[#aeb7be]"><CalendarDays className="size-4 text-[#73808a]" /> October 2019</div></div>
            <button className="mt-12 flex w-full items-center justify-center gap-2 rounded bg-[#9fe870] px-4 py-3 text-xs font-semibold text-[#0b0d0f] transition-colors hover:bg-[#b5f58c]"><Mail className="size-3.5" /> send a message</button>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-[#58636b]"><Copy className="size-3" /> profile.last_updated: 2m ago</p>
          </aside>
        </div>
      </div>
    </main>
  )
}

export const metadata = {
  title: 'Alex Morgan — Developer Profile',
  description: 'Developer profile for Alex Morgan.',
}

export const viewport = { themeColor: '#0b0d0f' }

void ArrowUpRight
void Copy
void Globe2
void Mail
void MapPin
void MoreHorizontal
void Pencil
void CalendarDays
void Code2
void Check
void BriefcaseBusiness
void AtSign
void ChevronRight
void Terminal

