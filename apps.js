/*
  ADDING A NEW APP
  ----------------
  1. Copy an app object below and give it a unique slug and pageUrl.
  2. Add a small HTML shell for that page using an existing app page as the template.
  3. Change the copy, features, image, setup notes, and version-specific links.
  4. Put the new app image inside assets. Run node scripts/build-product-pages.cjs after edits to refresh the static detail pages.
*/
window.PILOT_LIGHT_APPS = [
  {
    slug: "wallpaper-pilot",
    pageUrl: "wallpaper-pilot.html",
    name: "Wallpaper Pilot",
    status: "Available",
    statusTone: "stable",
    platform: "Windows desktop",
    version: "1.0.1",
    tagline: "A smarter way to rotate the wallpaper collection you already own.",
    description: "Wallpaper Pilot keeps large local wallpaper libraries moving without quickly repeating the same familiar images.",
    homeHighlights: ["Anti-repeat memory", "Folders + subfolders", "Local and private"],
    features: [
      "Automatic wallpaper rotation with custom intervals",
      "Folder and subfolder support",
      "Persistent anti-repeat history across restarts",
      "Balanced rotation between main folders",
      "1080p, 2K and 4K preferences",
      "Favorites, dislikes, history and quick apply",
      "System-tray controls and optional Start with Windows",
      "Optional GitHub update notifications in the portable edition"
    ],
    installSteps: [
      "Choose Microsoft Store for the 7-day trial and $1.99 USD one-time purchase, or download the free portable EXE.",
      "Install and open the Store edition, or open the portable EXE. The direct download is unsigned and Windows may show an unknown-publisher or reputation warning.",
      "Choose the top-level folder that holds your wallpapers and include subfolders if needed.",
      "Set your rotation preferences, then leave the app open or minimize it to the system tray."
    ],
    goodToKnow: [
      "The Microsoft Store edition offers a 7-day free trial, then a $1.99 USD one-time purchase. There is no subscription. The portable edition remains free.",
      "Wallpaper Pilot runs locally and does not upload your image library or require a Pilot Light Apps account. Microsoft Store handles the Store edition installation and license.",
      "It asks Windows to apply one wallpaper; version 1.0.1 does not choose a different image or folder for each monitor.",
      "Uninstall can preserve or remove Wallpaper Pilot's saved data and never deletes your original wallpaper files."
    ],
    guides: [
      {
        title: "Windows wallpaper switcher for a local collection",
        description: "Compare the built-in Windows slideshow with a local switcher that remembers recent images.",
        url: "windows-wallpaper-switcher.html"
      },
      {
        title: "Stop Windows wallpaper from repeating",
        description: "Practical checks and an anti-repeat option for collections that keep showing the same pictures.",
        url: "stop-windows-wallpaper-repeating.html"
      },
      {
        title: "Shuffle wallpaper folders and subfolders",
        description: "Keep an organized collection intact while rotating images from nested folders.",
        url: "shuffle-wallpaper-subfolders-windows.html"
      }
    ],
    image: "assets/wallpaper-pilot-screenshot.png",
    imageWidth: 2611,
    imageHeight: 1707,
    imageAlt: "Wallpaper Pilot application window with local-folder, shuffle, history, favorites, and tray controls",
    storeUrl: "https://apps.microsoft.com/detail/9NBKPH45G9RM",
    storeLabel: "Get it from Microsoft Store",
    storeTerms: "Microsoft Store: 7-day free trial, then $1.99 USD once. No subscription.",
    downloadLabel: "Free portable download",
    shortDownloadLabel: "Free portable download",
    downloadUrl: "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/download/v1.0.1/Wallpaper-Pilot.exe",
    itchLabel: "Get it on itch.io",
    itchUrl: "https://echoofhumanity50.itch.io/wallpaper-pilot",
    downloadNotice: {
      title: "About the free portable download",
      text: "The free portable EXE is unsigned, so Windows may show an unknown-publisher or reputation warning. This notice applies to the direct download; the Store edition installs through Microsoft Store. Use the official links on this page for either edition.",
      detailsLabel: "View release details and SHA-256 fingerprint",
      detailsUrl: "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/tag/v1.0.1"
    }
  },
  {
    slug: "display-audio-switcher",
    pageUrl: "display-audio-switcher.html",
    name: "Display / Audio Switcher",
    status: "Available",
    statusTone: "stable",
    platform: "Windows desktop",
    version: "1.0.0",
    tagline: "One click changes the way Windows displays and plays sound.",
    description: "Save practical PC, TV, or dual-screen profiles and switch the Windows display action and playback output together from one window or the system tray.",
    homeHighlights: ["Display + sound profiles", "Window or tray switching", "Optional Voicemeeter launch"],
    features: [
      "Detects attached displays and Windows playback outputs",
      "Three editable PC, TV, or dual-screen profiles",
      "PC-only, second-screen, duplicate, and extend actions",
      "Switches display action and playback output together",
      "Runs profiles from the settings window or system tray",
      "Optional Start with Windows",
      "Automatic Voicemeeter launch when its output is selected",
      "Portable ZIP with the required app runtime included"
    ],
    installSteps: [
      "Download DisplayAudioSwitcher-Windows.zip.",
      "Choose Extract All. Keep the complete DisplayAudioSwitcher folder together.",
      "Open the extracted folder and run DisplayAudioSwitcher.exe.",
      "Refresh devices, configure the profiles you want, and save. Enabled profiles then appear in the tray menu."
    ],
    goodToKnow: [
      "The app is unsigned, so Windows may show an unknown-publisher or reputation warning.",
      "All four display actions stay visible because they are Windows commands; this lets a profile turn a connected but currently disabled screen back on.",
      "Voicemeeter is optional and must be installed separately. The normal display and sound switching package is otherwise self-contained.",
      "If Start with Windows is enabled, turn it off before permanently moving or deleting the extracted folder."
    ],
    guides: [
      {
        title: "Windows display and audio switcher",
        description: "Why Win+P only solves half the job and how a saved profile can change display and sound together.",
        url: "windows-display-audio-switcher.html"
      },
      {
        title: "Switch a PC between a monitor and TV",
        description: "A repeatable monitor-to-TV setup for the screen mode and playback device you want.",
        url: "switch-pc-monitor-tv-audio.html"
      },
      {
        title: "Save Windows display and audio profiles",
        description: "Turn a repeated multi-step setup into named profiles available from the system tray.",
        url: "save-display-audio-profiles-windows.html"
      }
    ],
    image: "assets/display-audio-switcher-screenshot.png",
    imageWidth: 2240,
    imageHeight: 1520,
    imageAlt: "Display and Audio Switcher showing connected displays, audio outputs, and three saved switching profiles",
    downloadLabel: "Download Display / Audio Switcher",
    shortDownloadLabel: "Download 1.0.0",
    downloadUrl: "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/download/display-audio-switcher-v1.0.0/DisplayAudioSwitcher-Windows.zip",
    itchLabel: "Get it on itch.io",
    itchUrl: "https://echoofhumanity50.itch.io/display-audio-switcher",
    downloadNotice: {
      title: "Portable ZIP and unsigned-app notice",
      text: "Extract the entire ZIP before running DisplayAudioSwitcher.exe and keep its folder together. This independently published app is not yet digitally signed, so Windows may show an unknown-publisher or reputation warning. Download only from this official page.",
      detailsLabel: "View release details and verify the ZIP checksum",
      detailsUrl: "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/tag/display-audio-switcher-v1.0.0"
    }
  },
  {
    slug: "picture-pilot",
    pageUrl: "picture-pilot.html",
    name: "Picture Pilot Sorter",
    status: "Public test — not final",
    statusTone: "testing",
    platform: "Windows desktop",
    version: "0.5.0-beta.7",
    tagline: "Turn a large photo collection into useful, verified folders.",
    description: "Picture Pilot helps you review local photo collections, account for every physical file, inspect exact duplicates, create your own tags, revisit focused sorting passes, and build organized folders without changing the originals.",
    homeHighlights: ["Custom layered tags", "HEIC + common photos", "Full scan accounting"],
    features: [
      "Custom tags with numbered keyboard shortcuts",
      "Normal, Shift-click, and Ctrl-click multi-photo selection",
      "Layer several tags onto the same photo",
      "Standard similarity groups and optional local Smart Groups",
      "All-photo, untagged-photo, and tag-filtered sorting passes",
      "Tag browsing, Undo, and point-centered photo zoom",
      "HEIC/HEIF and common photo formats, with a bundled local decoder for Apple images",
      "Scan report totals for photos, videos, unsupported formats, other files, prior work, unreadable files, and exact duplicates",
      "Browse every excluded video, unsupported image, or other file by path and extension",
      "Side-by-side exact duplicate review with a fresh SHA-256 confirmation",
      "New dated output folders with verified copies and one exported file per exact image per tag",
      "Local backup, restore, and guarded uninstall tools",
      "Built-in public-test safety notice, tutorial, and feedback shortcut"
    ],
    installSteps: [
      "Download PicturePilotSorter-Windows-0.5.0-beta.7.zip.",
      "Choose Extract All.",
      "Run Picture Pilot Testing.exe once from the extracted folder. The first launch can take up to a minute while Windows scans and unpacks the portable app.",
      "Follow the first-run guide, then choose a copied or non-critical photo folder for this test."
    ],
    goodToKnow: [
      "This is a public test build. Back up irreplaceable photos first and begin with a copied or non-critical folder.",
      "Do not delete original photos after building folders until you have independently checked the Scan report and completed output.",
      "Picture Pilot stores settings and sorting history locally under your Windows Local AppData folder.",
      "Original photos are read but never moved, renamed, edited, overwritten, or deleted.",
      "Smart Groups runs locally and never assigns a tag without you.",
      "Only byte-for-byte exact duplicate images are consolidated during folder building; visually similar photos are never treated as duplicates.",
      "Videos are detected, counted, and listed so folder totals reconcile, but this app remains photo-only.",
      "HEIC/HEIF support includes a bundled local decoder and does not require Microsoft's optional photo codecs. Damaged or unsupported variations are listed as unreadable and left untouched.",
      "Use the in-app Feedback button to report unexpected file counts, unreadable photos, duplicate mistakes, crashes, or incorrect output.",
      "The download contains one portable application file; release records remain on the website.",
      "The app is photo-only and is not digitally signed yet."
    ],
    guides: [
      {
        title: "Sort a large photo collection on Windows",
        description: "Build a safe workflow for reviewing, tagging, and organizing a large local photo library without changing the originals.",
        url: "sort-large-photo-collection-windows.html"
      },
      {
        title: "Organize AI-generated images on Windows",
        description: "Turn export folders and repeated variations into useful, layered categories with manual control.",
        url: "organize-ai-generated-images-windows.html"
      },
      {
        title: "Find exact duplicate photos safely",
        description: "Understand byte-for-byte duplicates, visual similarity, and why a backup-first review matters.",
        url: "find-exact-duplicate-photos-windows.html"
      },
      {
        title: "Sort HEIC photos into folders on Windows",
        description: "Review Apple HEIC and HEIF photos locally and build organized folders without replacing the source files.",
        url: "sort-heic-photos-into-folders-windows.html"
      }
    ],
    image: "assets/picture-pilot-screenshot.jpg",
    imageWidth: 2946,
    imageHeight: 1907,
    imageAlt: "Picture Pilot Sorter public-test window with folder controls, sorting passes, photo workspace, custom tags, Smart Groups, and verified folder building",
    downloadLabel: "Download Picture Pilot public test",
    shortDownloadLabel: "Download public test",
    downloadUrl: "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/download/picture-pilot-sorter-v0.5.0-beta.7-public-test/PicturePilotSorter-Windows-0.5.0-beta.7.zip",
    downloadNotice: {
      title: "Public test, backup, and unsigned-app notice",
      text: "Picture Pilot 0.5.0-beta.7 is a public test build, not a finished release. Back up irreplaceable photos and begin with a copied or non-critical folder. Do not delete originals until you have independently checked the Scan report and completed output. The app is independently published and not yet digitally signed, so Windows may show an unfamiliar-app or unknown-publisher warning. Download only from this official page.",
      detailsLabel: "View public-test notes and verify the ZIP checksum",
      detailsUrl: "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/tag/picture-pilot-sorter-v0.5.0-beta.7-public-test"
    }
  },
  {
    "slug": "video-pilot",
    "pageUrl": "video-pilot.html",
    "name": "Video Pilot",
    "status": "Public test — not final",
    "statusTone": "testing",
    "platform": "Windows 10/11 x64",
    "version": "0.1.0-beta.7",
    "tagline": "Prepare video for VEGAS, or upscale it with local AI.",
    "description": "Convert MP4 and MKV videos to editing-friendly H.264/AAC, or upscale to 1080p and 4K with local AI. Review comparisons, set options for each queued video, and keep the originals.",
    "homeHighlights": [
      "H.264/AAC for editing",
      "1080p + 4K upscaling",
      "Local queue + resume"
    ],
    "features": [
      "Compatibility-only mode keeps source size and frame timing, with AI enhancement off",
      "1080p and 4K targets for landscape and portrait video",
      "Smooth Motion (M1) and Fine Detail (M3) with adjustable blending strength",
      "Clean finished videos or short full-view and centre-detail comparisons",
      "Drag and drop files or folders, then edit each queued video separately",
      "Visible destinations and separate output files; originals stay in place",
      "NVIDIA encoding, AMD encoding in beta, and CPU fallback",
      "Local progress, safe pause and saved checkpoints for resuming",
      "Website and optional donation links; no account or subscription required"
    ],
    "installSteps": [
      "Download VideoPilot-Windows-0.1.0-beta.7.zip.",
      "Choose Extract All and keep every extracted file and folder together.",
      "Open Video Pilot.exe. Start with a short copied or non-critical test clip.",
      "Select a queued video, choose its task and destination, and wait for Saved or click Save options.",
      "Press Start / resume. Review the finished video before relying on it in an edit."
    ],
    "goodToKnow": [
      "This is a public test build. Keep the originals and begin with a short test clip.",
      "Windows 10/11 x64, .NET Framework 4.8 and Microsoft Visual C++ x64 Redistributable are required. AI upscaling also needs a Vulkan-capable graphics driver.",
      "Compatibility-only mode converts format without AI smoothing or upscaling. The combined task upscales and exports H.264/AAC in one job.",
      "AMD encoding is included in beta but has not yet been verified on an AMD graphics card.",
      "This build supports common SDR, progressive, square-pixel footage. HDR, interlaced and anamorphic inputs are held for separate treatment.",
      "AI and comparison jobs require constant frame timing. Clean compatibility conversion can preserve variable frame timing.",
      "An unfinished AI checkpoint may repeat after resuming; a whole-file compatibility encode restarts if interrupted.",
      "The app is unsigned. Windows may show an unknown-publisher or reputation warning. Download only through the official links.",
      "Actual VEGAS import/render, restarting and resuming on another Windows computer, and AMD hardware testing are part of this test round.",
      "Report problems through the Pilot Light Apps support page or GitHub issues. Include the app version, Windows version, graphics card, chosen options and the error text; avoid posting private videos or personal paths."
    ],
    "guides": [{"title":"Microsoft runtime setup","description":"Install the supported Microsoft Visual C++ x64 Redistributable from Microsoft if the app reports that its processing runtime is missing.","url":"https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist"}],
    "image": "assets/video-pilot-screenshot.png",
    "imageWidth": 2386,
    "imageHeight": 1871,
    "imageAlt": "Video Pilot public-test interface with per-video render options, destination, editable queue, local progress and pause controls",
    "downloadLabel": "Download Video Pilot public test",
    "shortDownloadLabel": "Download public test",
    "downloadUrl": "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/download/video-pilot-v0.1.0-beta.7-public-test/VideoPilot-Windows-0.1.0-beta.7.zip",
    "downloadNotice": {
      "title": "Public test and unsigned-app notice",
      "text": "Video Pilot 0.1.0-beta.7 is a testing build. Begin with a short copied clip and keep the original. AI upscaling needs a Vulkan-capable GPU. AMD hardware and separate-computer VEGAS checks are still part of testing. The portable app is unsigned; read the release notes and verify the ZIP checksum before running it.",
      "detailsLabel": "View test notes, licenses and SHA-256 checksum",
      "detailsUrl": "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/tag/video-pilot-v0.1.0-beta.7-public-test"
    }
  }
];
