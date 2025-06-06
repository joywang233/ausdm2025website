document.addEventListener('DOMContentLoaded', function() {
    // Define the fixed width of your website (e.g., 800px) in the mobile side.
    const websiteWidth = 800;

    // Get the current device width
    const deviceWidth = screen.width;

    // Calculate the initial scale
    const initialScale = deviceWidth / websiteWidth;

    // Select or create the meta viewport tag
    let viewportMetaTag = document.querySelector('meta[name="viewport"]');

    // If meta viewport tag doesn't exist, create one
    if (!viewportMetaTag) {
        viewportMetaTag = document.createElement('meta');
        viewportMetaTag.name = 'viewport';
        document.head.appendChild(viewportMetaTag);
    }

    // Set the dynamic initial scale in the meta viewport tag
    viewportMetaTag.setAttribute(
        'content',
        `width=${websiteWidth}, initial-scale=${initialScale}`
    );
});