export default function importAll() {
  const modules = import.meta.glob("../../V2_icons/**/*.png", {
    eager: true,
    import: "default",
  });

  const images = {};
  for (const [path, url] of Object.entries(modules)) {
    const filename = path.split("/").pop(); // e.g., '1000.png'
    images[filename] = url;
  }

  return images;
}
