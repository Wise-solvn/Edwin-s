"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Ticket, Play, Star, ArrowRight, Filter } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const upcomingPerformances = [
  {
    id: 1,
    title: "Summer Vibes Festival",
    artist: "Multiple Artists",
    date: "June 15, 2026",
    time: "4:00 PM - 11:00 PM",
    location: "Central Park, New York",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop",
    price: "$75",
    category: "Festival",
    featured: true,
    soldOut: false,
    attendees: 2500,
  },
  {
    id: 2,
    title: "Jazz Under the Stars",
    artist: "Aisha Thompson Quartet",
    date: "April 28, 2026",
    time: "8:00 PM",
    location: "Blue Note Jazz Club, NYC",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
    price: "$45",
    category: "Jazz",
    featured: false,
    soldOut: false,
    attendees: 150,
  },
  {
    id: 3,
    title: "R&B Nights",
    artist: "Maya Chen",
    date: "May 5, 2026",
    time: "9:00 PM",
    location: "The Roxy, Los Angeles",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    price: "$60",
    category: "R&B",
    featured: true,
    soldOut: false,
    attendees: 800,
  },
  {
    id: 4,
    title: "Hip Hop Showcase",
    artist: "Marcus Rivera & Friends",
    date: "May 12, 2026",
    time: "10:00 PM",
    location: "House of Blues, Chicago",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop",
    price: "$55",
    category: "Hip Hop",
    featured: false,
    soldOut: true,
    attendees: 600,
  },
]

const pastPerformances = [
  {
    id: 5,
    title: "New Year's Eve Gala",
    artist: "David Kim",
    date: "December 31, 2025",
    location: "Madison Square Garden",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop",
    views: "2.5M",
    rating: 4.9,
  },
  {
    id: 6,
    title: "Acoustic Sessions Live",
    artist: "Nina Williams",
    date: "January 20, 2026",
    location: "The Troubadour, LA",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
    views: "890K",
    rating: 4.8,
  },
  {
    id: 7,
    title: "Electronic Dreams",
    artist: "James Park",
    date: "February 14, 2026",
    location: "Warehouse District, Miami",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
    views: "1.2M",
    rating: 4.7,
  },
]

const categories = ["All", "Festival", "Jazz", "R&B", "Hip Hop", "Rock", "Electronic"]

export default function PerformancesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPerformances = selectedCategory === "All" 
    ? upcomingPerformances 
    : upcomingPerformances.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Performance Portal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Live Performances
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover upcoming live performances, book your tickets, and watch recordings 
              of past shows from talented artists around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="bg-card border border-border mb-8">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Upcoming Shows
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Past Performances
              </TabsTrigger>
              <TabsTrigger value="book" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Book a Venue
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Shows */}
            <TabsContent value="upcoming">
              {/* Category Filter */}
              <div className="flex items-center gap-4 mb-8 flex-wrap">
                <Filter className="h-5 w-5 text-muted-foreground" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Featured Performance */}
              {filteredPerformances.filter(p => p.featured).map((performance) => (
                <Card key={performance.id} className="bg-card border-border overflow-hidden mb-8">
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto relative">
                      <img
                        src={performance.image}
                        alt={performance.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                      <Badge variant="outline" className="w-fit mb-4">{performance.category}</Badge>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{performance.title}</h2>
                      <p className="text-lg text-muted-foreground mb-4">{performance.artist}</p>
                      <div className="space-y-2 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {performance.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {performance.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {performance.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {performance.attendees.toLocaleString()} attending
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{performance.price}</span>
                        <Button size="lg">
                          <Ticket className="mr-2 h-5 w-5" />
                          Get Tickets
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}

              {/* Other Performances */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPerformances.filter(p => !p.featured).map((performance) => (
                  <Card key={performance.id} className="bg-card border-border overflow-hidden group">
                    <div className="aspect-video relative">
                      <img
                        src={performance.image}
                        alt={performance.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {performance.soldOut && (
                        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                          <Badge variant="destructive" className="text-lg py-2 px-4">Sold Out</Badge>
                        </div>
                      )}
                      <Badge variant="outline" className="absolute top-4 left-4 bg-background/80">
                        {performance.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{performance.title}</h3>
                      <p className="text-muted-foreground mb-4">{performance.artist}</p>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {performance.date} at {performance.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {performance.location}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{performance.price}</span>
                        <Button disabled={performance.soldOut}>
                          {performance.soldOut ? "Sold Out" : "Get Tickets"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Past Performances */}
            <TabsContent value="past">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastPerformances.map((performance) => (
                  <Card key={performance.id} className="bg-card border-border overflow-hidden group cursor-pointer">
                    <div className="aspect-video relative">
                      <img
                        src={performance.image}
                        alt={performance.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <Play className="h-8 w-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{performance.title}</h3>
                      <p className="text-muted-foreground mb-2">{performance.artist}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{performance.date}</span>
                        <span>{performance.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{performance.views} views</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-primary fill-primary" />
                          <span className="font-medium">{performance.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Book a Venue */}
            <TabsContent value="book">
              <div className="max-w-3xl mx-auto text-center py-12">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Book Your Performance</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                  Ready to take the stage? Browse available venues and book your next 
                  performance. We partner with top venues across the country to help 
                  artists showcase their talent.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    Browse Venues
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">100+</div>
                    <div className="text-sm text-muted-foreground">Partner Venues</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Shows Booked</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Cities</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
