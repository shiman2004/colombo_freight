import { Ship, Plane, Truck, Warehouse, FileCheck, PackageOpen } from 'lucide-react'

export interface ServiceItem {
  id: string
  titlePrimary: string
  titleSecondary: string
  fullTitle: string
  description: string
  image: string
  mode: 'Ocean' | 'Air' | 'Road'
  badge?: string
  features?: string[]
}

export const services: ServiceItem[] = [
  {
    id: 'land-transport',
    titlePrimary: 'Land',
    titleSecondary: 'Transportation',
    fullTitle: 'Land Transportation & Island-wide Haulage',
    description: "Colombo Freight provides reliable island-wide container haulage, bonded trucking, and heavy freight transport across Sri Lanka with real-time GPS fleet tracking.",
    image: '/services/land.jpg',
    mode: 'Road',
    badge: 'Island-wide Fleet',
    features: ['GPS-tracked fleet', 'Bonded trucking', 'Heavy lift haulage']
  },
  {
    id: 'air-freight',
    titlePrimary: 'Air',
    titleSecondary: 'Freight',
    fullTitle: 'Air Freight Cargo Solutions',
    description: 'Fast, secure air cargo services with direct airline space allocations, temperature-controlled cargo, priority express, and customs clearance at Bandaranaike International Airport.',
    image: '/services/air.jpg',
    mode: 'Air',
    badge: 'Express Delivery',
    features: ['Scheduled charters', 'Priority express', 'Airport clearance']
  },
  {
    id: 'ocean-freight',
    titlePrimary: 'Ocean',
    titleSecondary: 'Freight',
    fullTitle: 'Ocean Freight (FCL & LCL)',
    description: "Colombo Freight's ocean freight solutions handle FCL, LCL, and project cargo globally. We connect Colombo Port to all major international trade lanes with competitive vessel rates.",
    image: '/services/ocean.jpg',
    mode: 'Ocean',
    badge: 'Global Ports',
    features: ['FCL & LCL services', 'Direct port calls', 'Breakbulk & RoRo']
  },
  {
    id: 'consolidation',
    titlePrimary: 'Cargo',
    titleSecondary: 'Consolidation',
    fullTitle: 'LCL Cargo Consolidation',
    description: 'Cost-effective consolidation services combining smaller shipments into full container loads, reducing overall freight expenses with dedicated stuffing and de-stuffing hubs.',
    image: '/services/consolidation.jpg',
    mode: 'Ocean',
    badge: 'Cost Efficient',
    features: ['Weekly scheduled boxes', 'Bonded CFS facilities', 'Cargo security & inspection']
  },
  {
    id: 'multi-country-consolidation',
    titlePrimary: 'Multi-Country',
    titleSecondary: 'Consolidation',
    fullTitle: 'Multi-Country Consolidation (MCC)',
    description: 'Leverage Sri Lanka’s strategic maritime location in the Indian Ocean to merge cargo originating from multiple Asian origins into single buyer containers destined worldwide.',
    image: '/services/mcc.jpg',
    mode: 'Ocean',
    badge: 'Regional Hub',
    features: ['Buyer consolidation', 'Zero transshipment tax', 'Value-added packing']
  },
  {
    id: 'transshipment',
    titlePrimary: 'Port',
    titleSecondary: 'Transshipment',
    fullTitle: 'Transshipment & Entrepôt Services',
    description: 'Seamless transshipment handling through Port of Colombo with rapid vessel-to-vessel transfers, entrepôt trade assistance, and cargo repacking services.',
    image: '/services/transshipment.jpg',
    mode: 'Ocean',
    badge: 'Hub Advantage',
    features: ['Rapid vessel transfer', 'Entrepôt trade', 'Documentation handling']
  },
  {
    id: 'customs-brokerage',
    titlePrimary: 'Customs',
    titleSecondary: 'Brokerage',
    fullTitle: 'Customs Brokerage & Compliance',
    description: 'Dedicated customs brokerage services executed through our affiliated specialist Paragon Cargo Solutions, ensuring 100% regulatory compliance and rapid clearance.',
    image: '/services/customs.jpg',
    mode: 'Road',
    badge: 'Paragon Solutions',
    features: ['Tariff classification', 'Duty consultation', 'Fast-track clearance']
  }
]

export const industries = ['Government Contracts','Automobiles','Personal Effect Shipments','Trading']

export const lanes = [
  ['Freight Forwarding','Colombo, Sri Lanka','Service'],
  ['Customs Brokerage','Paragon Cargo Solutions','Service'],
  ['Trading','Suroor International','Affiliate']
]

export const testimonials = [
  {quote:'For freight forwarding, customs brokerage, warehousing, cargo packaging and transport services, contact our Colombo office.', name:'Colombo Freight (Pvt) Ltd', role:'011 230 4425', company:'info@cmb-freight.com', country:'Colombo 02, Sri Lanka'}
]
