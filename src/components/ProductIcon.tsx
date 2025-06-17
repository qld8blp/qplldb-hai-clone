/**
 * ProductIcon Component
 * Creates SVG placeholder icons for product categories
 * These will be replaced with AI-generated images later
 */

interface ProductIconProps {
  type: 'powder' | 'wire' | 'equipment' | 'parts'
  className?: string
}

export default function ProductIcon({
  type,
  className = 'w-24 h-24',
}: ProductIconProps) {
  const icons = {
    powder: (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#1e3a8a"
          strokeWidth="2"
          fill="#f0f4ff"
        />
        <circle cx="35" cy="40" r="8" fill="#1e3a8a" opacity="0.6" />
        <circle cx="50" cy="45" r="6" fill="#1e3a8a" opacity="0.8" />
        <circle cx="60" cy="38" r="7" fill="#1e3a8a" opacity="0.7" />
        <circle cx="40" cy="55" r="5" fill="#1e3a8a" opacity="0.5" />
        <circle cx="55" cy="58" r="9" fill="#1e3a8a" opacity="0.6" />
        <circle cx="45" cy="70" r="6" fill="#1e3a8a" opacity="0.7" />
        <text
          x="50"
          y="90"
          textAnchor="middle"
          fontSize="10"
          fill="#1e3a8a"
          fontWeight="500"
        >
          POWDER
        </text>
      </svg>
    ),
    wire: (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#1e3a8a"
          strokeWidth="2"
          fill="#f0f4ff"
        />
        <path
          d="M20 50 Q35 30, 50 50 T80 50"
          stroke="#1e3a8a"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M20 60 Q35 40, 50 60 T80 60"
          stroke="#1e3a8a"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
        <circle cx="20" cy="50" r="4" fill="#1e3a8a" />
        <circle cx="80" cy="50" r="4" fill="#1e3a8a" />
        <text
          x="50"
          y="90"
          textAnchor="middle"
          fontSize="10"
          fill="#1e3a8a"
          fontWeight="500"
        >
          WIRE
        </text>
      </svg>
    ),
    equipment: (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#1e3a8a"
          strokeWidth="2"
          fill="#f0f4ff"
        />
        <rect
          x="30"
          y="35"
          width="40"
          height="30"
          rx="2"
          fill="#1e3a8a"
          opacity="0.8"
        />
        <rect x="25" y="45" width="10" height="10" rx="1" fill="#1e3a8a" />
        <rect x="65" y="45" width="10" height="10" rx="1" fill="#1e3a8a" />
        <path
          d="M40 65 L40 70 L35 75 M60 65 L60 70 L65 75"
          stroke="#1e3a8a"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="3" fill="white" />
        <text
          x="50"
          y="90"
          textAnchor="middle"
          fontSize="10"
          fill="#1e3a8a"
          fontWeight="500"
        >
          EQUIPMENT
        </text>
      </svg>
    ),
    parts: (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#1e3a8a"
          strokeWidth="2"
          fill="#f0f4ff"
        />
        <path d="M50 25 L60 40 L50 55 L40 40 Z" fill="#1e3a8a" opacity="0.7" />
        <circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="2"
        />
        <circle cx="50" cy="35" r="3" fill="#1e3a8a" />
        <circle cx="65" cy="50" r="3" fill="#1e3a8a" />
        <circle cx="50" cy="65" r="3" fill="#1e3a8a" />
        <circle cx="35" cy="50" r="3" fill="#1e3a8a" />
        <text
          x="50"
          y="90"
          textAnchor="middle"
          fontSize="10"
          fill="#1e3a8a"
          fontWeight="500"
        >
          PARTS
        </text>
      </svg>
    ),
  }

  return icons[type] || icons.powder
}
