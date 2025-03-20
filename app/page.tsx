export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="bg-sky-100 w-60 h-20 p-5 border">bg-sky-100 default color</div>
          <div className="bg-tahiti w-60 h-20 p-5 border">bg-tahiti custom color</div>
          <div className="bg-hotpink-t900 w-60 h-20 p-5 border text-headings">bg-hotpink-t900 from figma</div>
        </div>
      </main>
    </div>
  );
}
