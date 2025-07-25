async function fetchImagesFromPage() {
    const url = document.getElementById("imageUrl").value;
    const status = document.getElementById("status");
    const imagesContainer = document.getElementById("images");
  
    try {
      const res = await fetch(`http://localhost:3001/api/scrape-images?url=${encodeURIComponent(url)}`);
      const data = await res.json();
  
      imagesContainer.innerHTML = '';  // Clear previous images
  
      if (data.images && data.images.length > 0) {
        status.innerHTML = "Found images:";
        data.images.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          imagesContainer.appendChild(img);
        });
      } else {
        status.textContent = "No images found.";
      }
    } catch (err) {
      status.textContent = "Failed to fetch images.";
    }
  }
  