import { Instagram, Music2 } from "lucide-react"

export default function PersonalAccount() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden
      bg-gradient-to-b 
      from-white via-purple-50 to-white
      dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#0b1120]"
    >

      {/* Glow Background (sama seperti about) */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[180px]" />
        <div className="hidden dark:block absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[180px]" />

        <div className="dark:hidden absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[180px]" />
        <div className="dark:hidden absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="flex justify-between text-sm text-neutral-600 mb-10">
          <span className="font-medium">Muhamad Naufal</span>
          <span>Creative Portfolio</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-16">
          My Personal Account
        </h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

         {/* LEFT VISUAL */}
<div className="relative flex justify-center items-center">

  {/* Phone Wrapper */}
  <div className="relative flex items-end">

    {/* Phone 1 */}
    <div className="relative w-[230px] h-[420px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-neutral-200 z-10">
      <img
        src="./assets/lanyard/ps-ig.png"
        alt="Instagram"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Phone 2 */}
    <div className="relative w-[210px] h-[390px] bg-white rounded-[40px] shadow-xl overflow-hidden border border-neutral-200 -ml-16 translate-y-10">
      <img
        src="./assets/lanyard/ps-ig.png"
        alt="TikTok"
        className="w-full h-full object-cover"
      />
    </div>

  </div>

  {/* Floating Instagram */}
  <div className="absolute left-4 top-24 bg-white shadow-lg rounded-xl p-3 border">
    <Instagram className="w-6 h-6 text-pink-500" />
  </div>

  {/* Floating TikTok */}
  <div className="absolute right-8 bottom-28 bg-white shadow-lg rounded-xl p-3 border">
    <Music2 className="w-6 h-6 text-black" />
  </div>

</div>

          {/* RIGHT TEXT */}
          <div className="space-y-6 text-neutral-700 leading-relaxed">

            <p>
              Aku mulai membangun personal branding dan aktif membuat konten sejak
              akhir 2022. Dalam waktu kurang lebih satu tahun aku berhasil
              mencapai lebih dari <strong>140 ribu followers</strong> di TikTok
              dan Instagram.
            </p>

            <p>
              Selama perjalanan itu aku juga sudah bekerja sama dengan berbagai
              brand dari yang baru merintis sampai brand besar, untuk membantu
              mereka meningkatkan engagement dan awareness lewat konten yang aku
              buat.
            </p>

            <ul className="space-y-2 mt-4">
              <li>✓ 140K+ followers combined</li>
              <li>✓ Strong Gen Z audience (18–30)</li>
              <li>✓ Content niche: remote work, freelance, digital income</li>
            </ul>

            {/* CTA */}
            <div className="mt-8 inline-flex items-center gap-3 bg-[#e9e4dc] px-6 py-3 rounded-full text-sm font-medium">
              <Instagram className="w-5 h-5 text-pink-500" />
              <Music2 className="w-5 h-5" />
              Tap the icons to visit my social media
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}