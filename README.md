Approach, Code Quality & Decision-Making
1. Component & Styling Decisions

Component structure:

Main PracticeSummaryCard handles layout, metrics, status, and recommendation.

Smaller reusable components like TrendChart for the 6-month trend, making it modular and easy to reuse.

Styling approach:

Tailwind CSS for fast, responsive styling without writing custom CSS.

Utility classes ensure consistent spacing, typography, and hover states.

Visual consistency & responsiveness:

Used consistent mb spacing between sections, text-sm/text-lg for hierarchy.

Cards are responsive using grid/flex and flex-1 for bars in trend chart.

Hover states for card shadow and bar tooltip added to improve UX.

2. Scaling & Real-World Use

Integration into dashboard:

Can be reused in a grid or list view for multiple practices.

Subcomponents like TrendChart allow for theming or data updates without changing main card.

Easy to integrate with a design system by replacing Tailwind colors with design tokens.

If I had one extra day:

Add accessibility improvements (ARIA labels, keyboard hover for tooltip).

Smooth animations for trend chart bars.

Unit tests for components.

Theming support & localization for multi-country dashboards.

3. Time Management

Setup: 10–15 minutes (Vite + Tailwind + folder structure)

Layout & structure: 30–40 minutes (card skeleton + grid + trend chart)

Styling & polish: 45–50 minutes (spacing, colors, hover, tooltip, responsiveness)

README/explanation: 10–15 minutes