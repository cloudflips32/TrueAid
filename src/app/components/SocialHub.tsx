import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useCart, CartItem } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import {
  Heart,
  MessageSquare,
  Share2,
  Send,
  Copy,
  Check,
  MapPin,
  Sparkles,
  Package,
  Handshake,
  X,
  Globe,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

// Available Stock Photos representing charity/volunteer support and TrueAid's color scheme
const STOCK_PHOTOS = [
  "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800", // Food Distribution
  "https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=800", // Logistics center boxes
  "https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&w=800", // Care package receipt
  "https://images.pexels.com/photos/7156163/pexels-photo-7156163.jpeg?auto=compress&cs=tinysrgb&w=800", // Care package receipt
  "https://images.pexels.com/photos/4585749/pexels-photo-4585749.jpeg?auto=compress&cs=tinysrgb&w=800", // Stacked hands in solidarity
  "https://images.pexels.com/photos/6646922/pexels-photo-6646922.jpeg?auto=compress&cs=tinysrgb&w=800", // Sorting clothes and supplies
];

const CONGRATS_MESSAGES = [
  (name: string, itemsText: string, location: string) =>
    `Congratulations to our incredible supporter, ${name}! Warsaw, Poland is receiving a critical shipment of ${itemsText} as a direct donation. Together we deliver hope!`,
  (name: string, itemsText: string, location: string) =>
    `A massive thank you to ${name}! Direct aid consisting of ${itemsText} is now dispatched to Warsaw. Poland is deeply grateful for your life-changing support!`,
  (name: string, itemsText: string, location: string) =>
    `Impact Achieved! ${name} has sponsored a premium package of ${itemsText} for delivery to local distribution networks. Poland thanks you for standing with them!`,
  (name: string, itemsText: string, location: string) =>
    `We celebrate the generosity of ${name}! Warsaw just received a shipment of ${itemsText} to support families in Poland. Direct aid, real impact!`,
];

interface Comment {
  id: string;
  userName: string;
  text: string;
  timestamp: string;
}

interface SocialPost {
  id: string;
  userName: string;
  userAvatar: string;
  stockPhoto: string;
  items: { name: string; quantity: number; image: string }[];
  targetLocation: string;
  message: string;
  timestamp: string;
  likesCount: number;
  isLiked: boolean;
  comments: Comment[];
  userType?: string;
}

const INITIAL_MOCK_POSTS: SocialPost[] = [
  {
    id: "mock-1",
    userName: "Sarah Jenkins",
    userAvatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
    stockPhoto: STOCK_PHOTOS[3],
    items: [
      {
        name: "Warm Clothing Packs",
        quantity: 3,
        image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Thermal Blankets",
        quantity: 2,
        image: "https://images.pexels.com/photos/3756453/pexels-photo-3756453.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
    ],
    targetLocation: "Kyiv, Ukraine",
    message: "A massive thank you to Sarah Jenkins! Warm clothing packs and thermal blankets are currently being sorted by volunteers in Kyiv, Ukraine. Your generosity shields families from the cold!",
    timestamp: "2 hours ago",
    likesCount: 24,
    isLiked: false,
    comments: [
      {
        id: "c-1-1",
        userName: "Mark Kowalski",
        text: "Incredible support! Our logistics hubs are ready to catalog and distribute these packs.",
        timestamp: "1 hour ago",
      },
      {
        id: "c-1-2",
        userName: "Elena Petrov",
        text: "Thank you Sarah! Direct impact right where it's needed most.",
        timestamp: "30 mins ago",
      },
    ],
  },
  {
    id: "mock-2",
    userName: "David Vance",
    userAvatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100",
    stockPhoto: STOCK_PHOTOS[0],
    items: [
      {
        name: "Food & Pure Water Supply",
        quantity: 5,
        image: "https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
    ],
    targetLocation: "Warsaw, Poland",
    message: "Congratulations to our supporter, David Vance! Warsaw, Poland will receive 5x Pure Water & Food Supplies as a direct donation. Local soup networks are fully equipped and ready to distribute!",
    timestamp: "5 hours ago",
    likesCount: 15,
    isLiked: false,
    comments: [
      {
        id: "c-2-1",
        userName: "TrueAid Team",
        text: "Poland's relief stations have logged David's donation. Tracking metrics are fully live on our transparency board!",
        timestamp: "4 hours ago",
      },
    ],
  },
  {
    id: "mock-3",
    userName: "Global Citizen NGO",
    userAvatar: "https://images.pexels.com/photos/6347738/pexels-photo-6347738.jpeg",
    stockPhoto: STOCK_PHOTOS[2],
    items: [
      {
        name: "Hot Beverages & Fresh Coffee",
        quantity: 10,
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
    ],
    targetLocation: "Warsaw, Poland",
    message: "Impact Achieved! Global Citizen NGO has sponsored 10x high-quality hot beverage drops for volunteer relief groups in Warsaw. A warm cup makes a world of difference!",
    timestamp: "1 day ago",
    likesCount: 42,
    isLiked: true,
    comments: [
      {
        id: "c-3-1",
        userName: "Julia Weber",
        text: "Wow! Delivering warm coffee to the field operators is such a thoughtful gesture.",
        timestamp: "18 hours ago",
      },
    ],
    userType: "org",
  },
];

export default function SocialHub() {
  const { items, clearCart, selectedTargetCountry, selectedTargetCity } = useCart();
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [newlyGeneratedPost, setNewlyGeneratedPost] = useState<SocialPost | null>(null);
  const [activeCommentsPostId, setActiveCommentsPostId] = useState<string | null>(null);
  const [newCommentText, setNewCommentText] = useState("");
  const [shareSuccessId, setShareSuccessId] = useState<string | null>(null);

  // Load and sync posts with localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem("trueaid_social_posts");
    if (savedPosts) {
      try {
        const parsed = JSON.parse(savedPosts);
        // Ensure all initial mock posts exist in the loaded feed, backfilling any missing ones (like mock-3)
        let updated = [...parsed];
        let hasChanges = false;
        INITIAL_MOCK_POSTS.forEach((mock) => {
          if (!updated.some((p) => p.id === mock.id)) {
            updated.push(mock);
            hasChanges = true;
          }
        });
        setPosts(updated);
        if (hasChanges) {
          localStorage.setItem("trueaid_social_posts", JSON.stringify(updated));
        }
      } catch (e) {
        console.error("Failed to parse social posts", e);
        setPosts(INITIAL_MOCK_POSTS);
        localStorage.setItem("trueaid_social_posts", JSON.stringify(INITIAL_MOCK_POSTS));
      }
    } else {
      setPosts(INITIAL_MOCK_POSTS);
      localStorage.setItem("trueaid_social_posts", JSON.stringify(INITIAL_MOCK_POSTS));
    }
  }, []);

  // Capture checkout success and generate new post
  useEffect(() => {
    const success = searchParams.get("success");
    if (success === "true" && items.length > 0) {
      // Pick target location details
      const city = selectedTargetCity || "Warsaw";
      const country = selectedTargetCountry === "pl" ? "Poland" : selectedTargetCountry === "ua" ? "Ukraine" : "Poland";
      const locationString = `${city}, ${country}`;

      // Pick a random stock photo
      const randomStockPhoto = STOCK_PHOTOS[Math.floor(Math.random() * STOCK_PHOTOS.length)];

      // Generate items description text (e.g. "3x Food Supplies & 2x Warm Clothing Packs")
      const itemsText = items
        .map((item) => `${item.quantity}x ${item.name}`)
        .join(" & ");

      // Generate randomized beautiful congrats message
      const donorName = user?.name || "Generous Donor";
      const messageFn = CONGRATS_MESSAGES[Math.floor(Math.random() * CONGRATS_MESSAGES.length)];
      const generatedMessage = messageFn(donorName, itemsText, locationString);

      // Create new social post object
      const newPost: SocialPost = {
        id: `post-${Date.now()}`,
        userName: donorName,
        userAvatar: user?.email
          ? `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(donorName)}`
          : "https://api.dicebear.com/7.x/initials/svg?seed=Donor",
        stockPhoto: randomStockPhoto,
        items: items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          image: item.image,
        })),
        targetLocation: locationString,
        message: generatedMessage,
        timestamp: "Just now",
        likesCount: 1,
        isLiked: true,
        comments: [
          {
            id: `c-${Date.now()}-welcome`,
            userName: "TrueAid Team",
            text: `Thank you so much, ${donorName}! Your order has been placed successfully and has been cataloged at Warsaw's regional logistics depot.`,
            timestamp: "Just now",
          },
        ],
      };

      // Add to state and localStorage
      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);
      localStorage.setItem("trueaid_social_posts", JSON.stringify(updatedPosts));

      // Trigger Celebration Modal
      setNewlyGeneratedPost(newPost);

      // Clear Cart to prevent duplicate orders
      clearCart();

      // Clean search parameters from URL cleanly without page refresh
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("success");
      setSearchParams(newParams, { replace: true });
    }
  }, [searchParams, items, user, clearCart, selectedTargetCity, selectedTargetCountry, posts, setSearchParams]);

  // Handler to like/unlike posts
  const handleLike = (postId: string) => {
    const updated = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likesCount: post.isLiked ? post.likesCount - 1 : post.likesCount + 1,
        };
      }
      return post;
    });
    setPosts(updated);
    localStorage.setItem("trueaid_social_posts", JSON.stringify(updated));
  };

  // Handler to add a comment
  const handleAddComment = (postId: string) => {
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      userName: user?.name || "Generous Supporter",
      text: newCommentText.trim(),
      timestamp: "Just now",
    };

    const updated = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    });

    setPosts(updated);
    localStorage.setItem("trueaid_social_posts", JSON.stringify(updated));
    setNewCommentText("");
  };

  // Handler to copy share link
  const handleShare = (post: SocialPost) => {
    const shareText = `Check out my donation impact card on TrueAid! Direct aid delivered: ${post.items.map((i) => `${i.quantity}x ${i.name}`).join(", ")} to ${post.targetLocation}. 🧡🤝`;
    navigator.clipboard.writeText(shareText);
    setShareSuccessId(post.id);
    setTimeout(() => setShareSuccessId(null), 3000);
  };

  return (
    <section id="impact-stories" className="w-full py-24 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            TrueAid Community Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Impact Share &amp; Delivery Stories
          </h2>
          <p className="text-gray-500 dark:text-slate-400 max-w-xl mx-auto text-sm font-medium leading-relaxed">
            See the direct change our community is creating. Every checkout automatically generates an impact post showing exact goods bound for delivery.
          </p>
        </div>

        {/* Social Feed List */}
        <div className="space-y-12">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md rounded-2xl transition-all duration-300"
            >
              {/* Card Header: Supporter Info */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gray-50 dark:border-slate-850">
                <div className="flex items-center gap-3">
                  <img
                    src={post.userAvatar}
                    alt={post.userName}
                    className="w-10 h-10 rounded-full border border-orange-500/20 bg-gray-50 dark:bg-slate-800"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                      {post.userName}
                      {post.userType === "org" || post.userName.toLowerCase().includes("ngo") || post.userName.toLowerCase().includes("partner") ? (
                        <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 text-[10px] py-0.5 px-2 rounded-full border-none font-bold">
                          Org Partner
                        </Badge>
                      ) : (
                        <Badge className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 text-[10px] py-0.5 px-2 rounded-full border-none font-bold">
                          Supporter
                        </Badge>
                      )}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-gray-400 dark:text-slate-400 font-semibold mt-0.5">
                      <MapPin className="w-3 h-3 text-orange-500" />
                      <span>{post.targetLocation}</span>
                      <span className="mx-1">•</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>

                <div className="text-gray-400 hover:text-[#003865] dark:hover:text-blue-400 transition-colors">
                  <Globe className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Collage Media Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                {/* Main Stock Photo representing the charity and theme */}
                <img
                  src={post.stockPhoto}
                  alt="TrueAid Impact"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />

                {/* Top-Left Corner Logo Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white/20 z-10">
                  <div className="bg-orange-500 p-1 rounded-md">
                    <Handshake className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-black tracking-tight text-[#003865] dark:text-white">
                    TrueAid <span className="text-orange-500">Impact</span>
                  </span>
                </div>

                {/* Top-Right Corner Purchased Items Collage Overlay */}
                <div className="absolute top-4 right-4 md:max-w-[200px] sm:max-w-[260px] hidden md:flex flex-col gap-2 z-10">
                  {post.items.map((item, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={idx}
                      className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2 rounded-xl flex items-center gap-2.5 shadow-lg border border-gray-100 dark:border-slate-800"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-9 h-9 rounded-lg object-cover bg-gray-50 border border-gray-100 dark:border-slate-800"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] sm:text-[11px] font-extrabold text-gray-900 dark:text-white truncate">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Badge className="bg-orange-500 text-white font-extrabold text-[9px] px-1.5 py-0 rounded">
                            Qty {item.quantity}
                          </Badge>
                          <span className="text-[9px] font-bold text-green-600 dark:text-green-400 flex items-center">
                            <motion.span
                              animate={{ opacity: [0.2, 1, 0.2] }}
                              transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                              }}
                              className="mr-1"
                            >
                              •
                            </motion.span>
                            Bound for Delivery
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Pre-generated Thanks Message Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 sm:p-6 text-white z-10">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs sm:text-sm font-semibold leading-relaxed drop-shadow-md text-orange-50"
                  >
                    {post.message}
                  </motion.p>
                </div>
              </div>

              {/* Card Action Bar */}
              <div className="px-5 py-4 border-t border-gray-50 dark:border-slate-850 bg-gray-50/50 dark:bg-slate-900/50 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {/* Like Button */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer group"
                  >
                    <Heart
                      className={`w-5 h-5 transition-transform group-hover:scale-110 ${post.isLiked
                        ? "text-rose-500 fill-rose-500"
                        : "text-gray-400 dark:text-slate-400 group-hover:text-rose-500"
                        }`}
                    />
                    <span
                      className={
                        post.isLiked
                          ? "text-rose-500"
                          : "text-gray-600 dark:text-slate-300"
                      }
                    >
                      {post.likesCount} {post.likesCount === 1 ? "Like" : "Likes"}
                    </span>
                  </motion.button>

                  {/* Comment Button */}
                  <button
                    onClick={() =>
                      setActiveCommentsPostId(
                        activeCommentsPostId === post.id ? null : post.id
                      )
                    }
                    className="flex items-center gap-2 text-xs font-bold text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors cursor-pointer group"
                  >
                    <MessageSquare className="w-5 h-5 text-gray-400 dark:text-slate-400 group-hover:text-blue-500" />
                    <span>
                      {post.comments.length}{" "}
                      {post.comments.length === 1 ? "Comment" : "Comments"}
                    </span>
                  </button>
                </div>

                {/* Share Button */}
                <button
                  onClick={() => handleShare(post)}
                  className="flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors cursor-pointer group relative"
                >
                  {shareSuccessId === post.id ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-green-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4.5 h-4.5 text-gray-400 dark:text-slate-400 group-hover:text-blue-500" />
                      <span>Share Impact</span>
                    </>
                  )}
                </button>
              </div>

              {/* Dynamic Comments Drawer */}
              <AnimatePresence>
                {activeCommentsPostId === post.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-100 dark:border-slate-800 overflow-hidden bg-slate-50/30 dark:bg-slate-900/30"
                  >
                    <div className="p-4 sm:p-5 space-y-4">
                      {/* Comments List */}
                      {post.comments.length > 0 && (
                        <div className="space-y-3.5 max-h-60 overflow-y-auto pr-1">
                          {post.comments.map((comment) => (
                            <div
                              key={comment.id}
                              className="bg-white dark:bg-slate-850 p-6 rounded-xl border border-gray-50 dark:border-slate-800 text-xs shadow-xs"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-extrabold text-black dark:text-slate-500">
                                  {comment.userName}
                                </span>
                                <span className="text-[10px] text-black dark:text-slate-500">
                                  {comment.timestamp}
                                </span>
                              </div>
                              <p className="text-black pb-4 leading-relaxed font-medium">
                                {comment.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Comment Input Box */}
                      <div className="flex gap-2 pt-2">
                        <input
                          type="text"
                          placeholder="Write an encouraging comment..."
                          value={newCommentText}
                          onChange={(e) => setNewCommentText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleAddComment(post.id);
                          }}
                          className="flex-1 px-4 py-2 text-xs border border-gray-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-850 text-black outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium"
                        />
                        <Button
                          onClick={() => handleAddComment(post.id)}
                          className="bg-[#003865] hover:bg-[#002850] dark:bg-blue-600 dark:hover:bg-blue-700 h-9 rounded-xl flex items-center justify-center cursor-pointer shadow-sm"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>

      {/* Success Celebration Overlay / Share Modal */}
      <AnimatePresence>
        {newlyGeneratedPost && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 z-[100]">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 dark:border-slate-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setNewlyGeneratedPost(null)}
                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 text-white sm:text-gray-700 sm:dark:text-slate-300 dark:hover:bg-slate-800 rounded-full z-50 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">

                {/* Celebratory Header */}
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto shadow-inner">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                    Generosity Shared! Thank You!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium">
                    Your donation checkout completed successfully. Your custom impact post has been published to the Community Hub!
                  </p>
                </div>

                {/* Generated Collage Preview */}
                <div className="border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md relative aspect-video bg-slate-950">
                  <img
                    src={newlyGeneratedPost.stockPhoto}
                    alt="Celebration Collage"
                    className="w-full h-full object-cover opacity-90"
                  />

                  {/* Logo overlay */}
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20">
                    <Handshake className="w-3.5 h-3.5 text-orange-500" />
                    <span className="text-[10px] font-black tracking-tight text-[#003865] dark:text-white">
                      TrueAid <span className="text-orange-500">Impact</span>
                    </span>
                  </div>

                  {/* Items overlay */}
                  <div className="absolute top-3 right-3 max-w-[180px] flex flex-col gap-1.5">
                    {newlyGeneratedPost.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-1.5 rounded-lg flex items-center gap-2 shadow-sm border border-gray-100/50"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-7 h-7 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-extrabold text-gray-900 dark:text-white truncate">
                            {item.name}
                          </p>
                          <Badge className="bg-orange-500 text-white font-extrabold text-[8px] px-1 py-0 rounded mt-0.5">
                            Qty {item.quantity}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Congratulations message */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-4 sm:p-5 text-white">
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed text-orange-50">
                      {newlyGeneratedPost.message}
                    </p>
                  </div>
                </div>

                {/* Share Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <Button
                    onClick={() => handleShare(newlyGeneratedPost)}
                    className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {shareSuccessId === newlyGeneratedPost.id ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Copied Impact Text!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span>Copy Post Sharing Link</span>
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={() => setNewlyGeneratedPost(null)}
                    variant="outline"
                    className="w-full h-12 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-slate-350 hover:bg-gray-50 dark:hover:bg-slate-800 font-bold rounded-xl flex items-center justify-center cursor-pointer"
                  >
                    Done, View Community Feed
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
