// components/Banner.jsx
export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-fuchsia-600 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2">Featured</h3>
      <div className="flex gap-4 overflow-x-auto">
        <img src="https://i.scdn.co/image/ab67616d00001e02063f570c1b1cd0173eeae4b6" className="w-32 rounded-lg" />
        <img src="https://i.scdn.co/image/ab67616d00001e022f2a09e62bfa47090160b12e" className="w-32 rounded-lg" />
        <img src="https://i.scdn.co/image/ab67616d00001e020f04e6c274a89b132a12c1e4" className="w-32 rounded-lg" />
        <img src="https://i.scdn.co/image/ab67616d00001e024d94ad373e01a741cdbf0034" className="w-32 rounded-lg" />
      </div>
    </section>
  );
}
