const fs = require("fs");

const DIRECTORY = "/city/brampton/sponsors/"; // Directory to scan for images
const EXTRASPACES = "      ";

// Function to categorize images by Bronze, Silver, Gold
const categorizeImages = (images) => {
  const categorized = { Gold: [], Silver: [], Bronze: [] };

  images.forEach((image) => {
    const match = image.match(/^(.*)_(Bronze|Silver|Gold)\.png$/);
    if (match) {
      const type = match[2];
      categorized[type].push(image);
    }
  });

  return categorized;
};

// Read the images directory
fs.readdir("./public" + DIRECTORY, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    process.exit(1);
  }

  // Filter out non-image files (only .png files)
  const images = files.filter((file) => file.match(/\.png$/));
  const categorizedImages = categorizeImages(images);

  // Output the HTML code for each category with <Box> components
  Object.keys(categorizedImages).forEach((category) => {
    if (categorizedImages[category].length == 0) {
      return;
    }

    const medal = category == "Gold" ? "🥇" : category == "Silver" ? "🥈" : "🥉";

    console.log(`${EXTRASPACES}<h2 style={{
${EXTRASPACES}  margin: '0'
${EXTRASPACES}}}>${medal} ${category} Sponsorships</h2>`);
    console.log(`${EXTRASPACES}<Box sx={{
${EXTRASPACES}  borderRadius: '10px',
${EXTRASPACES}  backgroundColor: "white",
${EXTRASPACES}  display: 'flex',
${EXTRASPACES}  justifyContent: "center",
${EXTRASPACES}  alignItems: "center",
${EXTRASPACES}  gap: '1.5em',
${EXTRASPACES}  padding: '1rem',
${EXTRASPACES}}}>`);
    categorizedImages[category].forEach((image) => {
      const imageName = image; // Use the image file name as it is
      console.log(`${EXTRASPACES}  <Image src="${DIRECTORY}${imageName}" alt="${imageName}" width={700} height={250} />`);
    });

    console.log(`${EXTRASPACES}</Box>\n`);
  });
});
