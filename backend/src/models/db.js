import fs from 'fs';
import path from 'path';
import { config } from '../config/index.js';

// Seed data definitions
const seedData = {
  designs: [
    {
      id: "cantilever-house",
      title: "The Cantilever House",
      typology: "Modern Pavilion",
      category: "modern",
      sqft: "4,600 SQ FT",
      specs: "4 Beds • 4.5 Baths",
      description: "Minimalist glass envelope with suspended roof structure, submerged infinity pool, and seamless passive ventilation channels.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-yNEGs_iri64xwzo5wlxLVQz5ml-4ST0JljkVQQbltEJczQBRntmQ1C3dbk0EH5WYvt",
      alt: "Modern architectural luxury cantilever house over infinity pool",
      features: [
        { icon: "straighten", text: "4,600 sq ft living area" },
        { icon: "bed", text: "4 En-suite master suites" },
        { icon: "bathtub", text: "4.5 Thermal stone baths" },
        { icon: "wb_sunny", text: "Passive solar orientation" }
      ],
      blueprint: {
        level: "Level 01 • Master Schematic",
        scale: "Scale 1:100",
        orientation: "South-West 42°",
        highlights: [
          "Column-free 22m span living pavilion",
          "Triple-glazed motorized sliding thermal glass walls",
          "Integrated rainwater harvesting and underground thermal mass cooling",
          "Submerged cantilevered edge reflecting pool"
        ]
      }
    },
    {
      id: "villa-travertino",
      title: "Villa Travertino",
      typology: "Luxury Villa",
      category: "luxury",
      sqft: "7,200 SQ FT",
      specs: "6 Beds • 7 Baths",
      description: "Monolithic Italian travertine volumes connected by tranquil water gardens, interior olive courtyards, and double-height hearth salons.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD40LGqQbA4O_fGfHIshx_h_2vMbFvOC55ofipl3gPOD3spym90RM91Dr1CReLXRjylHt",
      alt: "Luxury Italian travertine villa with reflecting pools",
      features: [
        { icon: "straighten", text: "7,200 sq ft floor plan" },
        { icon: "bed", text: "6 Bedrooms + staff wing" },
        { icon: "bathtub", text: "7 Custom fluted marble baths" },
        { icon: "pool", text: "Dual heated thermal pools" }
      ],
      blueprint: {
        level: "Ground & Courtyard Level",
        scale: "Scale 1:125",
        orientation: "South-Facing Courtyard",
        highlights: [
          "Unreinforced monolithic roman travertine exterior",
          "Atrium glass roof with micro-climate control",
          "Underground wine cellar and subterranean wellness retreat",
          "Private guest villa wing with independent access"
        ]
      }
    },
    {
      id: "stone-slate-manor",
      title: "Stone & Slate Manor",
      typology: "Traditional Estate",
      category: "traditional",
      sqft: "5,400 SQ FT",
      specs: "5 Beds • 5 Baths",
      description: "Hand-dressed Cotswold limestone masonry married with dark zinc standing seams, timber eaves, and expansive bay windows.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPVlI0ZszarDTg_8Gi04W5N7KPwtthfqe2_tXLHxf4dL0CUa20ULWZRltjd9pWFtovCs",
      alt: "Handcrafted stone and dark zinc slate manor residence",
      features: [
        { icon: "straighten", text: "5,400 sq ft estate layout" },
        { icon: "bed", text: "5 Heritage-trimmed bedrooms" },
        { icon: "fireplace", text: "3 Hand-carved stone hearths" },
        { icon: "forest", text: "Integrated English garden courtyards" }
      ],
      blueprint: {
        level: "Ground, Mezzanine & Attic",
        scale: "Scale 1:100",
        orientation: "East-West Daylight Path",
        highlights: [
          "Dressed coursed limestone with lime-based mortar",
          "Exposed reclaimed white oak structural trusses",
          "Custom bronze-framed casement fenestration",
          "Enclosed kitchen garden with greenhouse connection"
        ]
      }
    },
    {
      id: "nordic-micro-lodge",
      title: "The Nordic Micro-Lodge",
      typology: "Small House",
      category: "micro",
      sqft: "1,250 SQ FT",
      specs: "2 Beds • 1.5 Baths",
      description: "Compact architectural gem engineered with carbon-sequestering CLT timber, radiant basalt floors, and oversized stargazing skylights.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjlwPM5w2nWsXiM5WUvGiotRZwk-o-W0bdPlfE0fDNc78-7TBaqi9_01MAzCe2Mid7fV",
      alt: "Minimalist Nordic micro lodge made of CLT timber",
      features: [
        { icon: "straighten", text: "1,250 sq ft optimized volume" },
        { icon: "bed", text: "2 Modular loft sanctuaries" },
        { icon: "solar_power", text: "Net-zero solar & geothermal" },
        { icon: "sauna", text: "Integrated Finnish cedar sauna" }
      ],
      blueprint: {
        level: "Floor 01 + Loft Mezzanine",
        scale: "Scale 1:50",
        orientation: "Panoramic North Horizon",
        highlights: [
          "Prefabricated Cross-Laminated Timber (CLT) panels",
          "Airtight envelope exceeding Passive House standard",
          "Concealed storage joinery integrated into structural walls",
          "Stargazing operable insulated roof window"
        ]
      }
    },
    {
      id: "twin-aspect-duplex",
      title: "The Twin Aspect Duplex",
      typology: "Duplex Residence",
      category: "duplex",
      sqft: "3,800 SQ FT EA",
      specs: "3 Beds • 3 Baths Per Unit",
      description: "Mirrored sculptural multi-family residence balancing communal landscaped central breezeways with acoustic isolation and private view corridors.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNglJZ2cgHy_FRyvomSaRSOkiiOTB_9qbaF5k9Pgo-7NNyNIg9d7A0T6R5NfazbQ0HOo",
      alt: "Contemporary twin aspect architectural duplex",
      features: [
        { icon: "straighten", text: "3,800 sq ft per residential unit" },
        { icon: "apartment", text: "Dual independent entrances" },
        { icon: "volume_off", text: "STC 68 Acoustic isolation envelope" },
        { icon: "roofing", text: "Private dual rooftop garden terraces" }
      ],
      blueprint: {
        level: "Mirror Levels 01 & 02",
        scale: "Scale 1:100",
        orientation: "Dual Axis Sun Angles",
        highlights: [
          "Double central party wall with acoustic decouplers",
          "Independent geothermal heat pumps and HVAC zoning",
          "Private light wells bringing natural daylight to lower floors",
          "Rooftop entertaining deck with outdoor summer kitchen"
        ]
      }
    },
    {
      id: "monolith-curvatura",
      title: "Monolith Curvatura",
      typology: "Contemporary Architecture",
      category: "contemporary",
      sqft: "6,100 SQ FT",
      specs: "4 Beds • 5 Baths",
      description: "Sweeping cast-in-place board-marked white concrete ribbons framing kinetic glass apertures and an amphitheater courtyard.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjBYMk_RfbsaiOBUGzKhwr2IOmSkCKMlPghmS0WB4Sur3cRBShaCJ6qPvAffFka5pbzZ",
      alt: "Contemporary white monolithic curved concrete residence",
      features: [
        { icon: "straighten", text: "6,100 sq ft sculptural form" },
        { icon: "bed", text: "4 Cantilevered bed suites" },
        { icon: "architecture", text: "Curved white architectural concrete" },
        { icon: "light_mode", text: "Sculptural daylight wells" }
      ],
      blueprint: {
        level: "Lower Gallery, Main Level & Upper Cantilever",
        scale: "Scale 1:120",
        orientation: "Curvilinear Panoramic Exposure",
        highlights: [
          "Continuous custom curve board-formed concrete walls",
          "Frameless structural curved glass from floor to ceiling",
          "Sunken interior conversation pit centered on outdoor pool",
          "Integrated smart automated climate and shading systems"
        ]
      }
    }
  ],
  interiors: [
    {
      id: "living",
      tabLabel: "Living Room",
      title: "Double-Height Hearth Salon",
      subtitle: "Tactile Living Sanctuary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdp6bD6jNWTITHjFvl8t333Md72lFmuh9riOswF9PhDbWmfkRwLduPUOF3FRVFKL2IJz",
      alt: "Double-height living room salon with monolithic travertine hearth and rift oak paneling",
      description: "Anchored by an 8-meter fluted travertine chimney breast and low-profile Pierre Paulin seating. Bespoke acoustic wall panels finished in un-dyed bouclé and rift-sawn Austrian oak create an intimate acoustic atmosphere despite towering ceiling heights.",
      specs: [
        { label: "Ceiling Height", value: "7.2 Meters" },
        { label: "Hearth Material", value: "Fluted Roman Travertine" },
        { label: "Joinery", value: "Quarter-sawn White Oak" },
        { label: "Acoustic Rating", value: "NRC 0.85 Absorption" },
        { label: "Lighting Scene", value: "2700K Low-Glare Diffuse" }
      ],
      materials: [
        { name: "Roman Travertine", type: "Natural Stone", color: "#ded9d5" },
        { name: "Austrian Oak", type: "Natural Wood", color: "#c1a57b" },
        { name: "Bouclé Wool", type: "Fabric", color: "#f8f3ef" },
        { name: "Brushed Bronze", type: "Hardware", color: "#715b33" }
      ]
    },
    {
      id: "bedroom",
      tabLabel: "Master Suite",
      title: "Sanctuary Master Chamber",
      subtitle: "Rest & Acoustic Solitude",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw6-s_AE5Au4NmVw7dXQEWhNruiU3H5KF4ks4sYVtN3eDthwS9nGFBugwKoG_5gWD1qF",
      alt: "Minimalist master bedroom with panoramic sunrise glass curtain and floating walnut headboard",
      description: "An intentional threshold for restoration. Features a floating European walnut platform bed, concealed indirect cove illumination, integrated motorized linen blackout curtains, and a private cantilevered morning terrace overlooking wild lavender beds.",
      specs: [
        { label: "Orientation", value: "East (Dawn Exposure)" },
        { label: "Flooring", value: "Wide-Plank Belgian Oak" },
        { label: "Glazing", value: "Triple Acoustical Low-E" },
        { label: "Blackout", value: "Dual Motorized Linen/Mylar" },
        { label: "HVAC Sound", value: "< NC-20 Whisper Quiet" }
      ],
      materials: [
        { name: "European Walnut", type: "Timber", color: "#543d2b" },
        { name: "Raw Belgian Linen", type: "Textile", color: "#e6e2de" },
        { name: "Micro-Cement", type: "Surface", color: "#ece7e3" },
        { name: "Matte Brass", type: "Metal", color: "#a88e5d" }
      ]
    },
    {
      id: "kitchen",
      tabLabel: "Kitchen",
      title: "Sculptural Culinary Atelier",
      subtitle: "Precision & Culinary Art",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl5yaOrveK8eP_i96yZpgDHHt2zqI3MsmAh6m2B14MO2PiNvu9ieHlJzz4Ct3Sp97W2s",
      alt: "Monolithic Calacatta marble kitchen island with smoked oak and concealed appliances",
      description: "Conceived as a sculpture rather than utility. A monolithic 5.2-meter Calacatta Viola island is surrounded by smoked fumed oak cabinetry concealing Gaggenau 400-series induction cooktops, hidden prep sculleries, and ambient LED shadow gaps.",
      specs: [
        { label: "Island Length", value: "5.2 Meters Monolithic" },
        { label: "Island Surface", value: "Calacatta Viola Marble" },
        { label: "Cabinetry", value: "Fumed Bog Oak Veneer" },
        { label: "Extraction", value: "Downdraft Plasma Filter" },
        { label: "Prep Scullery", value: "Concealed Pocket Doors" }
      ],
      materials: [
        { name: "Calacatta Viola", type: "Marble", color: "#7a4358" },
        { name: "Fumed Bog Oak", type: "Timber", color: "#32302e" },
        { name: "Blackened Steel", type: "Metal", color: "#1d1b19" },
        { name: "Integrated Glass", type: "Glazing", color: "#727974" }
      ]
    },
    {
      id: "bathroom",
      tabLabel: "Bath & Spa",
      title: "Skylit Hydrotherapy Spa",
      subtitle: "Private Thermal Retreat",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXqJj_vCKv0Rjreqbi5WVzK89bZiXFiWTrvp-BCER1tW-92Vq7a65DArwtdPlyvoUaVQ",
      alt: "Skylit master bathroom with carved stone freestanding soaking tub and glass rain shower",
      description: "Bathed in natural daylight via a monumental overhead glass aperture. Seamless tadelakt lime plaster walls envelope a carved monolithic limestone soaking tub, frameless rain shower, and heated bush-hammered granite floors.",
      specs: [
        { label: "Soaking Tub", value: "Solid Hand-Carved Limestone" },
        { label: "Wall Finish", value: "Moroccan Tadelakt Plaster" },
        { label: "Shower", value: "Overhead 60cm Rain Sky" },
        { label: "Heating", value: "Hydronic Radiant Underfloor" },
        { label: "Aperture", value: "Triple-Layer Sky Skylight" }
      ],
      materials: [
        { name: "Pietra di Rapolano", type: "Limestone", color: "#dfc392" },
        { name: "Tadelakt Plaster", type: "Mineral", color: "#f2ede9" },
        { name: "Bush-Hammered Granite", type: "Stone", color: "#595d5b" },
        { name: "Brushed Gunmetal", type: "Fixtures", color: "#2b2e2d" }
      ]
    },
    {
      id: "dining",
      tabLabel: "Dining Room",
      title: "Courtyard Feast Gallery",
      subtitle: "Communal Banquet Architecture",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvFICD28PFqoCjX3QNZWxxeRC9iIQRG5icuon_DFGIAHuoS8_zNSuEjFEiAV3F-iqyN7",
      alt: "Spacious dining pavilion with custom 12-person live-edge table overlooking enclosed botanical courtyard",
      description: "Framed on three sides by floor-to-ceiling pivoting glass portals connecting seamlessly to an interior bonsai courtyard. Houses a single-slab claro walnut dining table seating fourteen, illuminated by a suspended minimal bronze sculptural luminaire.",
      specs: [
        { label: "Seating Capacity", value: "14 Guests" },
        { label: "Dining Table", value: "Single-Slab Claro Walnut" },
        { label: "Chandelier", value: "Bespoke Michael Anastassiades" },
        { label: "Wine Wall", value: "Temperature-Zoned 480 Bottles" },
        { label: "Courtyard Connection", value: "3-Sided Flush Threshold" }
      ],
      materials: [
        { name: "Claro Walnut", type: "Hardwood", color: "#483626" },
        { name: "Patinated Bronze", type: "Metal", color: "#57441e" },
        { name: "Acoustic Plaster", type: "Ceiling", color: "#fef8f4" },
        { name: "Honed Basalt", type: "Flooring", color: "#363837" }
      ]
    }
  ],
  exteriors: [
    {
      id: "facades",
      category: "Facade Architecture",
      title: "Sculptural Envelopes",
      subtitle: "Rainscreen Engineering & Thermal Mass",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0f_OQ1fcYhng_czQRGZMFQRu72L8K8ssho7-oWeVRWdCTbkuDn8w5I2E6ftHvGxwMVy",
      alt: "Modern architectural facade with charred yakisugi cedar rainscreen and frameless glass",
      description: "Carbon-neutral charred timber (Yakisugi) rainscreens paired with frameless thermal glazing systems. Solar-optimized cantilevered eaves eliminate summer solar heat gain while capturing passive winter warming.",
      elements: [
        { name: "Yakisugi Cedar", description: "Deeply charred Japanese cedar offering fire and decay resistance without synthetic sealants" },
        { name: "Frameless Structural Glazing", description: "Multi-story continuous glass panels providing uninterrupted visual connection to horizon" },
        { name: "Concealed Guttering", description: "Laser-cut hidden drainage reveals that keep facade surfaces pristine over decades" }
      ],
      technical: {
        uValue: "0.8 W/m²K thermal efficiency",
        airtightness: "Passive House certifiable < 0.6 ACH@50Pa",
        claddingLife: "80+ Year expected exterior durability"
      }
    },
    {
      id: "landscapes",
      category: "Biophilic Landscapes",
      title: "Water & Xeriscape Courts",
      subtitle: "Ecological Micro-Climates",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIQg3ORqNXCBoBHdOT2Nyy8pGaXABmk5L8sBVPAVXj1HRz0R7C31WkG8gmgv8ZvKCYZ_",
      alt: "Reflecting pool water court surrounded by native drought-tolerant architectural flora",
      description: "Drought-resilient native botanicals, quiet water channels, and custom perimeter lighting scenes. Reflecting pools create evaporative cooling zones reducing surrounding outdoor temperatures by up to 5°C.",
      elements: [
        { name: "Black Basalt Reflecting Pools", description: "Mirror-still water courts creating symmetrical architectural reflections" },
        { name: "Xeriscape Flora", description: "Sculptural olive trees, wild lavender, ornamental grasses requiring minimal irrigation" },
        { name: "Submerged Step Stones", description: "Floating monolithic stone paths that cross water bodies to entrance vestibules" }
      ],
      technical: {
        waterReclaim: "100% Greywater & rainwater filtration cycle",
        irrigation: "Sub-surface root sensors with weather predictive smart control",
        lightingScene: "24V Low-voltage dark-sky compliant recessed uplighting"
      }
    },
    {
      id: "terraces",
      category: "Terraces & Decks",
      title: "Floating Cedar Pergolas",
      subtitle: "Al Fresco Architectural Living",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnId10xxR9g8o8YRzDYt53fjR5AbV1NvsuQT1WB6VC_QJ6Rgx4o4GWrBZSGYMJ18nK9E",
      alt: "Cantilevered wooden terrace pergola with outdoor fireplace and sunken lounge",
      description: "Expansive outdoor living zones sheltered by motorized acoustic louvers. Seamless transitions flush with indoor floor levels extend interior salons onto cantilevered teak sun terraces.",
      elements: [
        { name: "Motorized Bioclimatic Louvers", description: "Automated roof blades modulating sunlight, shade, and rain shielding" },
        { name: "Flush Threshold Tracks", description: "Zero-step sliding door tracks embedded flush with indoor hardwood flooring" },
        { name: "Integrated Outdoor Fireplaces", description: "Outdoor hearths built into structural concrete pillars for cool evening warmth" }
      ],
      technical: {
        windLoad: "Engineered to withstand up to 140 km/h wind gusts",
        deckMaterial: "FSC-certified plantation teak treated with natural oils",
        drainage: "Perforated subterranean perimeter drain slots"
      }
    },
    {
      id: "portals",
      category: "Portals & Entrances",
      title: "Monumental Pivoting Portals",
      subtitle: "Ceremonial Thresholds of Arrival",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxuM9GYO_YeQu43Fz1GBXD4j2lhAihBnKwKlLc5uDU5Y1np7Z2Fy2VSf5hDIamgEdZzz",
      alt: "Monumental 4-meter bronze and smoked oak pivot front entrance door",
      description: "Oversized 3.8-meter pivot entrance doors weighing up to 450kg, engineered to glide effortlessly on concealed German hydraulic floor springs with biometric access integration.",
      elements: [
        { name: "FritsJurgens Pivot Hardware", description: "Concealed heavy-duty pivot hinges requiring zero maintenance" },
        { name: "Thermal Acoustic Core", description: "Multi-layered aerogel and cork core providing acoustic silence and thermal insulation" },
        { name: "Patinated Bronze Cladding", description: "Hand-aged architectural bronze sheet developing rich patina over time" }
      ],
      technical: {
        height: "Up to 4.2 Meters custom fabricated height",
        operationForce: "< 15N opening push force despite 450kg weight",
        security: "EN 1627 RC3 Burglar resistance with biometric reader"
      }
    }
  ],
  gallery: [
    {
      id: "villa-solaria",
      title: "Villa Solaria",
      location: "Mallorca, Spain • 2024",
      category: "exterior night",
      tags: ["Night Views", "Luxury Villa", "Exteriors"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-yNEGs_iri64xwzo5wlxLVQz5ml-4ST0JljkVQQbltEJczQBRntmQ1C3dbk0EH5WYvt",
      alt: "Villa Solaria at twilight with glowing architectural illumination",
      description: "Cliffside Mediterranean sanctuary carved into calcarenite rock, balancing panoramic sea vistas with shaded stone courtyards."
    },
    {
      id: "nordic-pavilion",
      title: "The Nordic Pavilion",
      location: "Oslo, Norway • 2023",
      category: "exterior living",
      tags: ["Minimalist", "Sustainable", "Exteriors"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD40LGqQbA4O_fGfHIshx_h_2vMbFvOC55ofipl3gPOD3spym90RM91Dr1CReLXRjylHt",
      alt: "The Nordic Pavilion nestled in pine forest",
      description: "Low-impact pine forest pavilion engineered using regional larch and triple-laminated glass ribbons."
    },
    {
      id: "glass-sanctuary",
      title: "The Glass Sanctuary",
      location: "Aspen, Colorado • 2024",
      category: "interior living",
      tags: ["Interiors", "Living", "Alpine"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdp6bD6jNWTITHjFvl8t333Md72lFmuh9riOswF9PhDbWmfkRwLduPUOF3FRVFKL2IJz",
      alt: "The Glass Sanctuary with dramatic alpine mountain view from warm interior hearth",
      description: "High-altitude winter residence combining double-glazed thermal curtain walls with tactile lamb wool and blackened steel."
    },
    {
      id: "highland-modernist",
      title: "Highland Modernist",
      location: "Kyoto, Japan • 2024",
      category: "exterior night",
      tags: ["Night Views", "Minimalist", "Courtyard"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7iecoc7Jv-lhmwAOSYW5DuAraG0qlS7Bq3xmmJh3fOTjFJ3X2Wz6YqygUf5NCsRIizQ",
      alt: "Modernist Japanese pavilion courtyard at dusk with serene water reflections",
      description: "A contemporary dialogue with Sukiya-zukuri principles, utilizing charred cedar, tatami proportions, and gravel karesansui gardens."
    },
    {
      id: "culinary-atelier-monograph",
      title: "Atelier Culinary Pavilions",
      location: "Geneva, Switzerland • 2024",
      category: "interior living",
      tags: ["Interiors", "Minimalist"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl5yaOrveK8eP_i96yZpgDHHt2zqI3MsmAh6m2B14MO2PiNvu9ieHlJzz4Ct3Sp97W2s",
      alt: "Calacatta Viola marble kitchen with concealed architectural joinery",
      description: "Monolithic natural stone kitchen pavilion celebrating raw culinary craftsmanship."
    },
    {
      id: "thermal-spa-chamber",
      title: "Thermal Stone Bath Chamber",
      location: "Vals, Switzerland • 2023",
      category: "interior living",
      tags: ["Interiors", "Wellness"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXqJj_vCKv0Rjreqbi5WVzK89bZiXFiWTrvp-BCER1tW-92Vq7a65DArwtdPlyvoUaVQ",
      alt: "Skylit natural stone bathroom retreat with carved tub",
      description: "Subterranean hydrotherapy sanctuary with natural zenithal daylighting."
    }
  ],
  studio: {
    studioName: "DreamSpace Studio",
    subtitle: "Architectural Portfolio 2024–2025",
    heroHeading: "Form, Light & Living Serenity",
    principal: {
      name: "Elena Vance & Associates",
      credentials: "AA Dipl, RIBA • 18 Yrs Practice",
      quote: "“We don’t design mere containers for living; we curate physical choreographies of shadow, mass, and natural light that cultivate emotional tranquility and timeless residence.”",
      bio: "Founded in 2007 by Elena Vance after graduating from the Architectural Association in London and practicing alongside Peter Zumthor, Elena Vance & Associates has delivered over 180 bespoke private residential estates across 12 countries. The studio operates at the nexus of contextual minimalism and visceral materiality.",
      portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBd9a8UnGSQY22qn5m4MdAkCuAZDCsvvHt9vox0ePS3tQv1zyZMiXdtZUJLT7KMu0MsxW8mNS_HAyu86xkgMaW21f9opjT4Xsc3MdihOi1I70W7oeqlgvHS7wmkW2hjG_euwA4gSiKXoT-i0rLuitfgJlmr07NaYPOl8WLnYNxP-bj4hRzg5AWp4qqq4_aagicSp4C03j6zoYgN1TKv9Dam4D3i9Vd0zpF6CVoQyo"
    },
    stats: [
      { value: "180+", label: "Residences Completed" },
      { value: "14", label: "International Prizes Won" },
      { value: "98%", label: "Bespoke Millwork & Detail" },
      { value: "12", label: "Global Regional Offices" }
    ],
    materialPillars: [
      {
        icon: "forest",
        title: "Sustainable Timber",
        description: "FSC-certified local cedar, Austrian white oak, and carbon-sequestering cross-laminated spruce sourced from generational family forests.",
        tag: "Regenerative Core"
      },
      {
        icon: "layers",
        title: "Roman Travertine & Basalt",
        description: "Monolithic, hand-quarried Italian travertine and volcanic basalt chosen for geological endurance and tactile warmth underfoot.",
        tag: "Earthbound Mass"
      },
      {
        icon: "wb_twilight",
        title: "Micro-Climate Glazing",
        description: "Custom frameless structural glass curtains with argon-filled low-emissivity coatings to maximize solar heat management and view clarity.",
        tag: "Luminous Boundary"
      },
      {
        icon: "architecture",
        title: "Low-Carbon Concrete",
        description: "Board-marked architectural concrete with 60% slag replacement for reduced embodied carbon and authentic artisanal grain texture.",
        tag: "Structural Poetry"
      }
    ],
    milestones: [
      { year: "2007", title: "Studio Founded", description: "Established in London with initial focus on coastal pavilion residences." },
      { year: "2014", title: "RIBA National Award", description: "Honored for The Glass Sanctuary in Aspen, Colorado." },
      { year: "2019", title: "Paris & Tokyo Ateliers", description: "Expanded practice to Europe and Asia-Pacific bespoke estates." },
      { year: "2024", title: "Global Monograph of the Year", description: "Recognized for Villa Solaria and sustainable micro-climate typologies." }
    ]
  },
  consultations: [],
  newsletter_subscribers: []
};

class Database {
  constructor(filePath) {
    this.filePath = filePath;
    this.ensureInitialized();
  }

  ensureInitialized() {
    const dir = path.dirname(this.filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(this.filePath)) {
      this.writeSync(seedData);
    }
  }

  readSync() {
    try {
      const content = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(content);
    } catch (err) {
      console.error('Error reading database file, restoring defaults:', err);
      return seedData;
    }
  }

  writeSync(data) {
    const tempPath = `${this.filePath}.tmp.${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempPath, this.filePath);
  }

  getCollection(name) {
    const data = this.readSync();
    return data[name] || [];
  }

  findById(collectionName, id) {
    const collection = this.getCollection(collectionName);
    return collection.find((item) => item.id === id) || null;
  }

  insert(collectionName, item) {
    const data = this.readSync();
    if (!data[collectionName]) {
      data[collectionName] = [];
    }

    const newItem = {
      id: item.id || `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...item,
    };

    data[collectionName].unshift(newItem);
    this.writeSync(data);
    return newItem;
  }

  update(collectionName, id, updates) {
    const data = this.readSync();
    const collection = data[collectionName] || [];
    const index = collection.findIndex((item) => item.id === id);

    if (index === -1) {
      return null;
    }

    collection[index] = {
      ...collection[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    data[collectionName] = collection;
    this.writeSync(data);
    return collection[index];
  }

  delete(collectionName, id) {
    const data = this.readSync();
    const collection = data[collectionName] || [];
    const initialLen = collection.length;
    data[collectionName] = collection.filter((item) => item.id !== id);

    if (data[collectionName].length !== initialLen) {
      this.writeSync(data);
      return true;
    }
    return false;
  }

  query(collectionName, filterFn) {
    const collection = this.getCollection(collectionName);
    return collection.filter(filterFn);
  }
}

export const db = new Database(config.dataPath);

