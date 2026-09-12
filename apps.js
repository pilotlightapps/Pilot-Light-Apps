/*
  ADDING A NEW APP
  ----------------
  1. Copy an app object below and give it a unique slug and pageUrl.
  2. Add a small HTML shell for that page using an existing app page as the template.
  3. Change the copy, features, image, setup notes, and version-specific links.
  4. Put the new app image inside assets. The home directory and detail page render from this data.
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
      "Optional GitHub update notifications"
    ],
    installSteps: [
      "Download the portable Wallpaper Pilot EXE.",
      "Open it. Because the app is unsigned, Windows may show an unknown-publisher or reputation warning.",
      "Choose the top-level folder that holds your wallpapers and include subfolders if needed.",
      "Set your rotation preferences, then leave the app open or minimize it to the system tray."
    ],
    goodToKnow: [
      "Wallpaper Pilot runs locally and does not upload your image library or require an account.",
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
    imageAlt: "Wallpaper Pilot application window with local-folder, shuffle, history, favorites, and tray controls",
    downloadLabel: "Download Wallpaper Pilot",
    shortDownloadLabel: "Download 1.0.1",
    downloadUrl: "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/download/v1.0.1/Wallpaper-Pilot.exe",
    itchLabel: "Get it on itch.io",
    itchUrl: "https://echoofhumanity50.itch.io/wallpaper-pilot",
    downloadNotice: {
      title: "Why Windows may show a warning",
      text: "Wallpaper Pilot is independently published and is not yet digitally signed. Windows may show an unknown-publisher or reputation warning. This means the app is not yet widely recognized; it is not a notification that malware was detected. Download only from this official page.",
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
    status: "Testing — not final",
    statusTone: "testing",
    platform: "Windows desktop",
    version: "0.5.0-beta.2",
    tagline: "Turn a large photo collection into useful, verified folders.",
    description: "Picture Pilot helps you review local photo collections, create your own tags, revisit focused sorting passes, and build organized folders without changing the originals.",
    homeHighlights: ["Custom layered tags", "Local Smart Groups", "Verified folder output"],
    features: [
      "Custom tags with numbered keyboard shortcuts",
      "Normal, Shift-click, and Ctrl-click multi-photo selection",
      "Layer several tags onto the same photo",
      "Standard similarity groups and optional local Smart Groups",
      "All-photo, untagged-photo, and tag-filtered sorting passes",
      "Tag browsing, Undo, and point-centered photo zoom",
      "New dated output folders with verified copies",
      "Local backup, restore, and guarded uninstall tools"
    ],
    installSteps: [
      "Download PicturePilotSorter-Windows-0.5.0-beta.2.zip.",
      "Choose Extract All and keep the complete extracted package together.",
      "Open the App folder and run Picture Pilot Testing.exe.",
      "Follow the first-run guide, then choose a copied or non-critical photo folder for this test."
    ],
    goodToKnow: [
      "This is a testing build. Please wait for the final release before relying on it as the only record of important sorting work.",
      "Picture Pilot stores settings and sorting history locally under your Windows Local AppData folder.",
      "Original photos are read but never moved, renamed, edited, overwritten, or deleted.",
      "Smart Groups runs locally and never assigns a tag without you.",
      "The app is photo-only and is not digitally signed yet."
    ],
    guides: [],
    image: "assets/picture-pilot-testing-icon.png",
    imageAlt: "Pilot Light Apps compass-and-lantern mark representing the Picture Pilot Sorter testing build",
    downloadLabel: "Download Picture Pilot testing build",
    shortDownloadLabel: "Download test build",
    downloadUrl: "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/download/picture-pilot-sorter-v0.5.0-beta.2-testing/PicturePilotSorter-Windows-0.5.0-beta.2.zip",
    downloadNotice: {
      title: "Testing build and unsigned-app notice",
      text: "Picture Pilot 0.5.0-beta.2 is an early testing build, not a finished release. Test it with copied or non-critical photos first. The app is independently published and not yet digitally signed, so Windows may show an unfamiliar-app or unknown-publisher warning. Download only from this official page.",
      detailsLabel: "View testing notes and verify the ZIP checksum",
      detailsUrl: "https://github.com/pilotlightapps/Pilot-Light-Apps/releases/tag/picture-pilot-sorter-v0.5.0-beta.2-testing"
    }
  }
];
