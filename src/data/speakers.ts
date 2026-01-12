export interface Speaker {
  id: string
  name: string
  title: string          // Job title or role
  company?: string       // Optional company/organization
  imageUrl: string       // Path to speaker photo
  featured: boolean      // Flag for landing page display
  bio?: string          // Optional bio (for future use)
  social?: {            // Optional social links (for future use)
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dr. Sarah Chen",
    title: "Chief Blockchain Architect",
    company: "Ethereum Foundation",
    imageUrl: "/speaker-placeholder.svg",
    featured: true
  },
  {
    id: "speaker-2",
    name: "Marcus Rodriguez",
    title: "CEO",
    company: "DeFi Labs",
    imageUrl: "/speaker-placeholder.svg",
    featured: true
  },
  {
    id: "speaker-3",
    name: "Aisha Patel",
    title: "Head of Research",
    company: "Crypto Ventures",
    imageUrl: "/speaker-placeholder.svg",
    featured: true
  },
  {
    id: "speaker-4",
    name: "James O'Connor",
    title: "Founder & CTO",
    company: "BlockChain Security",
    imageUrl: "/speaker-placeholder.svg",
    featured: true
  },
  {
    id: "speaker-5",
    name: "Yuki Tanaka",
    title: "Protocol Developer",
    company: "Solana Labs",
    imageUrl: "/speaker-placeholder.svg",
    featured: false
  },
  {
    id: "speaker-6",
    name: "Elena Volkov",
    title: "Director of Innovation",
    company: "Web3 Foundation",
    imageUrl: "/speaker-placeholder.svg",
    featured: false
  },
  {
    id: "speaker-7",
    name: "Andre Silva",
    title: "Smart Contract Auditor",
    company: "CertiK",
    imageUrl: "/speaker-placeholder.svg",
    featured: false
  },
  {
    id: "speaker-8",
    name: "Priya Sharma",
    title: "VP of Product",
    company: "Coinbase",
    imageUrl: "/speaker-placeholder.svg",
    featured: false
  }
]
