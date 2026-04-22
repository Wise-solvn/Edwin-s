"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Play, Pause, Heart, Share2, Search, Clock, Music2, Video } from "lucide-react"
import { useState } from "react"

const musicTracks = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Maya Chen",
    duration: "3:45",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    plays: "1.2M",
  },
  {
    id: 2,
    title: "City Lights",
    artist: "Marcus Rivera",
    duration: "4:12",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
    plays: "890K",
  },
  {
    id: 3,
    title: "Ocean Waves",
    artist: "Aisha Thompson",
    duration: "5:01",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    plays: "2.1M",
  },
  {
    id: 4,
    title: "Golden Hour",
    artist: "David Kim",
    duration: "3:33",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    plays: "756K",
  },
  {
    id: 5,
    title: "Electric Soul",
    artist: "Nina Williams",
    duration: "4:28",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
    plays: "1.5M",
  },
  {
    id: 6,
    title: "Starlight",
    artist: "James Park",
    duration: "3:58",
    image: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=400&h=400&fit=crop",
    plays: "623K",
  },
]

const videos = [
  {
    id: 1,
    title: "Live at Madison Square Garden",
    artist: "Maya Chen",
    duration: "45:00",
    thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop",
    views: "5.2M",
  },
  {
    id: 2,
    title: "Behind the Scenes: Album Recording",
    artist: "Marcus Rivera",
    duration: "12:34",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
    views: "1.8M",
  },
  {
    id: 3,
    title: "Acoustic Session",
    artist: "Aisha Thompson",
    duration: "28:15",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
    views: "3.4M",
  },
  {
    id: 4,
    title: "Music Video: Golden Hour",
    artist: "David Kim",
    duration: "4:33",
    thumbnail: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop",
    views: "8.9M",
  },
]

const genres = ["All", "Pop", "R&B", "Hip Hop", "Jazz", "Rock", "Electronic"]

export default function MusicVideosPage() {
  const [playingId, setPlayingId] = useState<number | null>(null)
  const [selectedGenre, setSelectedGenre] = useState("All")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Music & Videos
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover and stream music from talented artists. Watch exclusive videos, 
              live performances, and behind-the-scenes content.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search artists, tracks, or videos..."
                className="pl-10 bg-card border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="music" className="w-full">
            <TabsList className="bg-card border border-border mb-8">
              <TabsTrigger value="music" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Music2 className="h-4 w-4 mr-2" />
                Music
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Video className="h-4 w-4 mr-2" />
                Videos
              </TabsTrigger>
            </TabsList>

            {/* Music Tab */}
            <TabsContent value="music">
              {/* Genre Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {genres.map((genre) => (
                  <Button
                    key={genre}
                    variant={selectedGenre === genre ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </Button>
                ))}
              </div>

              {/* Tracks Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {musicTracks.map((track) => (
                  <Card key={track.id} className="bg-card border-border overflow-hidden group">
                    <div className="flex gap-4 p-4">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={track.image}
                          alt={track.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => setPlayingId(playingId === track.id ? null : track.id)}
                          className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {playingId === track.id ? (
                            <Pause className="h-8 w-8 text-primary" />
                          ) : (
                            <Play className="h-8 w-8 text-primary" />
                          )}
                        </button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{track.title}</h3>
                        <p className="text-sm text-muted-foreground">{track.artist}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {track.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Play className="h-3 w-3" />
                            {track.plays}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="bg-card border-border overflow-hidden group cursor-pointer">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <Play className="h-8 w-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.artist}</p>
                      <p className="text-xs text-muted-foreground mt-2">{video.views} views</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
