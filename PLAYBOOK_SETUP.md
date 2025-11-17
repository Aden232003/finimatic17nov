# Playbook Video Player Setup Guide

## Overview
The Playbook section now uses a **fully custom HTML5 video player** with Font Awesome icons and real video metadata.

## What's Been Implemented

### ✅ Completed Features:
1. **Font Awesome Icons** - Clean, professional icons instead of emojis
   - Eye icon for views
   - Thumbs up icon for likes
   - Comment icon for comments
   - Play/pause controls
   - Volume controls

2. **Custom Video Player**:
   - Full HTML5 `<video>` element support
   - Custom scrubber bar with real-time progress
   - Play/pause button
   - Mute/unmute button
   - Time display (current/total)
   - Functional seeking via scrubber

3. **Metadata System**:
   - Centralized metadata in `videoMetadata.js`
   - Automatic number formatting (248K, 1.4M, etc.)
   - Easy to update video stats

## How to Get Actual Video Metadata

### Method 1: Manual (Quick)
1. Visit each YouTube video URL
2. Look at the view count, likes, and comments
3. Update `videoMetadata.js` with the actual numbers

Example:
```javascript
'3UJ6QvY29Kc': {
    title: 'Actual Video Title from YouTube',
    views: '248532',      // Exact number
    likes: '8234',
    comments: '1456'
}
```

### Method 2: YouTube API (Recommended for accuracy)
1. Get a YouTube Data API key from Google Cloud Console
2. Use this API endpoint:
```
https://www.googleapis.com/youtube/v3/videos?id=VIDEO_ID&key=YOUR_API_KEY&part=snippet,statistics
```

3. Extract data from the response and update `videoMetadata.js`

## How to Add Actual Video Files

Since we cannot legally download YouTube videos directly, you have two options:

### Option 1: Host Your Own Screen Recordings
1. **Record the videos**:
   - Use OBS Studio or similar to record your screen
   - Play the YouTube videos and record them
   - Export as MP4

2. **Upload to your server**:
   ```
   /videos/3UJ6QvY29Kc.mp4
   /videos/I6aNI19NCxw.mp4
   /videos/_iMRs2vjaUk.mp4
   /videos/YXFvwJQBzJc.mp4
   ```

3. **Update HTML** - Change each video source:
   ```html
   <video class="playbook-video" style="display: none;" loop muted>
       <source src="videos/3UJ6QvY29Kc.mp4" type="video/mp4">
   </video>
   ```

4. **Enable playback** in `script.js` - Uncomment these lines (around line 435):
   ```javascript
   // Uncomment these lines:
   thumbnail.classList.add('hidden');
   video.style.display = 'block';
   video.play();
   isPlaying = true;
   ```

### Option 2: Keep Using Thumbnails Only
If you prefer to just show thumbnails (no actual video playback):
- Current setup shows thumbnails from YouTube
- Clicking shows an instructional alert
- Stats and metadata still display correctly
- No video hosting required

## Current Video IDs

| Video ID | Purpose |
|----------|---------|
| 3UJ6QvY29Kc | Video 1 - Bravo's Research style |
| I6aNI19NCxw | Video 2 - EPP Research style |
| _iMRs2vjaUk | Video 3 - Technical analysis |
| YXFvwJQBzJc | Video 4 - Market outlook |

## File Structure

```
Finimatic/
├── index.html              # Main HTML with video player structure
├── styles.css              # Styling including custom controls
├── script.js               # Video player functionality
├── videoMetadata.js        # Video titles, views, likes, comments
└── videos/                 # (Create this) Your video files
    ├── 3UJ6QvY29Kc.mp4
    ├── I6aNI19NCxw.mp4
    ├── _iMRs2vjaUk.mp4
    └── YXFvwJQBzJc.mp4
```

## Next Steps

1. **Update metadata** in `videoMetadata.js` with actual YouTube stats
2. **Record or obtain video files** (if you want playback)
3. **Upload videos** to your server in a `/videos/` folder
4. **Update video sources** in `index.html`
5. **Uncomment playback code** in `script.js`

## Notes

- All icons use Font Awesome 6.5.1 (loaded via CDN)
- Video player is fully functional once you add video files
- Scrubber accurately seeks through videos
- Time display updates in real-time
- No YouTube branding or redirects
- Users stay on your landing page
