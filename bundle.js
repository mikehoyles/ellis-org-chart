var App = (() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // app.tsx
  var import_react2 = __require("react");
  var import_client = __require("react-dom/client");

  // components/OrgNode.tsx
  var import_lucide_react = __require("lucide-react");
  var import_jsx_runtime = __require("react/jsx-runtime");
  var tierStyles = {
    executive: {
      border: "border-amber-500",
      badge: "bg-amber-500 text-white",
      badgeText: "EXECUTIVE",
      icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Crown, { size: 16 })
    },
    director: {
      border: "border-primary",
      badge: "badge-primary",
      badgeText: "DIRECTOR",
      icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.User, { size: 16 })
    },
    manager: {
      border: "border-secondary",
      badge: "badge-secondary",
      badgeText: "MANAGER",
      icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Users, { size: 16 })
    },
    agent: {
      border: "border-info",
      badge: "badge-info",
      badgeText: "AGENT",
      icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Bot, { size: 16 })
    }
  };
  var OrgNode = ({ node, isSelected, isExpanded, onSelect, onToggleExpand }) => {
    const style = tierStyles[node.tier];
    const hasChildren = node.childIds.length > 0;
    const liveCount = node.connections.filter((c) => c.status === "live").length;
    const totalCount = node.connections.length;
    const allLive = liveCount === totalCount;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: `card bg-base-200 border-2 cursor-pointer transition-all duration-200 hover:scale-[1.02] ${style.border} ${isSelected ? "ring-2 ring-primary ring-offset-2 ring-offset-base-100" : ""} ${node.tier === "executive" ? "shadow-lg shadow-amber-500/20" : ""}`,
        style: { minWidth: "210px", maxWidth: "250px" },
        onClick: () => onSelect(node.id),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card-body p-3 gap-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `badge badge-sm ${style.badge}`, children: style.badgeText }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tooltip tooltip-left", "data-tip": `${liveCount}/${totalCount} connections live`, children: allLive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Wifi, { size: 12, className: "text-success" }) : liveCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Wifi, { size: 12, className: "text-warning" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.WifiOff, { size: 12, className: "text-error" }) }),
              hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  className: "btn btn-ghost btn-xs",
                  onClick: (e) => {
                    e.stopPropagation();
                    onToggleExpand(node.id);
                  },
                  children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { size: 14 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "opacity-60", children: style.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "font-bold text-sm leading-tight", children: node.name }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[11px] text-base-content/50 leading-tight", children: node.title })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-base-content/60 leading-snug line-clamp-2", children: node.description }),
          node.salary && node.contractedRate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1.5 mt-0.5 px-1.5 py-1 rounded bg-base-300/50 border border-base-content/5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.DollarSign, { size: 10, className: "text-success shrink-0" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "text-[10px] text-base-content/70 leading-tight", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "font-semibold text-success", children: [
                "$",
                (node.salary / 1e3).toFixed(0),
                "K"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "opacity-50 mx-0.5", children: "/yr" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "opacity-30", children: "\xB7" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "font-semibold text-info ml-0.5", children: [
                "$",
                node.contractedRate
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "opacity-50", children: "/hr" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-wrap gap-1 mt-0.5", children: node.connections.map((conn) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              className: `${conn.status === "live" ? conn.color : "bg-base-300 text-base-content/40"} ${conn.status === "live" ? "text-white" : ""} text-[10px] font-bold px-1.5 py-0.5 rounded`,
              title: `${conn.name} \u2014 ${conn.status === "live" ? "\u2705 Live" : "\u23F3 Not connected"}`,
              children: conn.abbr
            },
            conn.abbr + conn.name
          )) })
        ] })
      }
    );
  };

  // utils/orgData.ts
  var SLACK = { name: "Slack", abbr: "SL", color: "bg-purple-500", status: "live" };
  var GDOCS = { name: "Google Docs/Drive", abbr: "GD", color: "bg-blue-600", status: "live" };
  var SHEETS = { name: "Google Sheets", abbr: "SH", color: "bg-success", status: "live" };
  var HUBSPOT = { name: "HubSpot", abbr: "HU", color: "bg-warning", status: "live" };
  var TRELLO = { name: "Trello", abbr: "TR", color: "bg-blue-500", status: "live" };
  var TELEGRAM = { name: "Telegram", abbr: "TG", color: "bg-sky-500", status: "live" };
  var META = { name: "Meta", abbr: "ME", color: "bg-info", status: "live" };
  var LINKEDIN = { name: "LinkedIn", abbr: "LI", color: "bg-info", status: "live" };
  var GA = { name: "Google Analytics", abbr: "AN", color: "bg-warning", status: "live" };
  var GSC = { name: "Google Search Console", abbr: "GS", color: "bg-info", status: "live" };
  var YOUTUBE = { name: "YouTube", abbr: "YT", color: "bg-red-600", status: "live" };
  var CANVA = { name: "Canva", abbr: "CV", color: "bg-teal-500", status: "live" };
  var FIGMA = { name: "Figma", abbr: "FG", color: "bg-violet-500", status: "live" };
  var ZOOM = { name: "Zoom", abbr: "ZM", color: "bg-blue-600", status: "live" };
  var GOOGLE_MEET = { name: "Google Meet", abbr: "GM", color: "bg-green-600", status: "live" };
  var FIREFLIES = { name: "Fireflies", abbr: "FF", color: "bg-yellow-500", status: "live" };
  var GOOGLE_ADS = { name: "Google Ads", abbr: "GA", color: "bg-info", status: "inactive" };
  var SEMRUSH = { name: "SEMrush", abbr: "SE", color: "bg-error", status: "inactive" };
  var BUFFER = { name: "Buffer", abbr: "BU", color: "bg-blue-500", status: "inactive" };
  var FRAMER = { name: "Framer", abbr: "FR", color: "bg-violet-600", status: "inactive" };
  var HOTJAR = { name: "Hotjar", abbr: "HJ", color: "bg-orange-500", status: "inactive" };
  var QUICKBOOKS = { name: "QuickBooks Online", abbr: "QB", color: "bg-green-700", status: "live" };
  var GMAIL = { name: "Gmail", abbr: "ML", color: "bg-red-500", status: "live" };
  var OUTLOOK = { name: "Outlook 365", abbr: "OL", color: "bg-blue-700", status: "live" };
  var GCAL = { name: "Google Calendar", abbr: "GC", color: "bg-blue-500", status: "live" };
  var ORG_DATA = {
    // ╔════════════════════════════════════════╗
    // ║           CHIEF EXECUTIVE              ║
    // ╚════════════════════════════════════════╝
    ceo: {
      id: "ceo",
      name: "Ellis",
      title: "Chief Executive Officer",
      tier: "executive",
      description: "Oversees the entire 49-agent AI organization. Single point of contact via Telegram.",
      fullDescription: "The AI CEO and primary interface for all organizational operations. Ellis receives all instructions via Telegram, analyzes intent, and silently delegates to the appropriate C-suite executive or agent \u2014 responding as one unified voice. Oversees Marketing (Avery), Finance (Finley), Operations & Sales (Parker), and Legal (Kendall). Manages 3 dedicated CSRs through Wren for client-specific support. Maintains strategic alignment across all pillars, resolves cross-departmental conflicts, and ensures the organization operates as a cohesive unit.",
      responsibilities: [
        "Serve as the single point of contact for Mike via Telegram \u2014 analyze intent and route to appropriate agents",
        "Oversee all C-suite executives: CMO (Avery), CFO (Finley), COO (Parker), CLO (Kendall)",
        "Maintain strategic alignment across Marketing, Finance, Operations, Sales, and Legal pillars",
        "Resolve cross-departmental conflicts and prioritize competing resource demands",
        "Synthesize organization-wide performance data into executive-level insights",
        "Ensure autonomous operations run smoothly and escalate only critical issues to Mike"
      ],
      triggers: [
        { name: "Telegram Intent Router", frequency: "Real-time (webhook)", action: "Analyze incoming message \u2192 Determine intent \u2192 Route to appropriate agent \u2192 Respond as unified voice" },
        { name: "Weekly Org Pulse", frequency: "Every Monday, 8:00 AM", action: "Pull KPI summaries from all pillars \u2192 Generate org-wide executive brief \u2192 Post via Telegram" },
        { name: "Cross-Pillar Sync", frequency: "Every Wednesday, 9:00 AM", action: "Review inter-pillar dependencies \u2192 Ensure alignment \u2192 Flag gaps" },
        { name: "Critical Alert Handler", frequency: "Real-time", action: "Evaluate escalated alerts from any pillar \u2192 Decide action \u2192 Respond or notify Mike" }
      ],
      connections: [TELEGRAM, SLACK, GDOCS, SHEETS, HUBSPOT, TRELLO],
      outputs: ["Telegram responses (unified voice)", "Weekly Org Pulse (Telegram)", "Cross-pillar alignment directives", "Critical alert escalations to Mike"],
      childIds: ["cmo", "cfo", "coo", "clo"],
      salary: 275e3,
      contractedRate: 345
    },
    // ╔════════════════════════════════════════╗
    // ║    PILLAR 1 — MARKETING (CMO)         ║
    // ╚════════════════════════════════════════╝
    cmo: {
      id: "cmo",
      name: "Avery",
      title: "Chief Marketing Officer",
      tier: "executive",
      description: "Orchestrates comprehensive marketing strategy across demand gen, content, brand, and operations.",
      fullDescription: "Strategic orchestrator of the entire marketing function. Synthesizes performance data from all four marketing pillars \u2014 Demand Generation, Content, Brand & Creative, and Marketing Operations \u2014 into unified strategy. Owns the marketing narrative, total budget allocation, and cross-departmental information-sharing flows. Reports to Ellis (CEO) and coordinates with Finley (CFO) on marketing ROI and Parker (COO) on sales enablement.",
      responsibilities: [
        "Produce monthly strategy memo in Google Docs covering demand, content, brand, and ops direction",
        "Maintain live executive dashboard pulling from all downstream directors and managers",
        "Review HubSpot pipeline metrics to ensure marketing-sourced revenue targets",
        "Receive and act on critical alerts escalated from all direct reports",
        "Make budget reallocation decisions across all four marketing pillars and cascade directives",
        "Ensure cross-departmental information sharing between Content, Brand, SEO, and Paid teams"
      ],
      triggers: [
        { name: "Monthly Strategy Review", frequency: "1st Monday, 9:00 AM", action: "Pull all director/manager data \u2192 Generate strategy memo \u2192 Post to Google Docs \u2192 Slack notify" },
        { name: "Weekly Marketing Pulse", frequency: "Every Monday, 8:00 AM", action: "Pull KPI summary from all 4 marketing pillars \u2192 Update dashboard \u2192 Report to CEO" },
        { name: "Cross-Dept Sync", frequency: "Every Wednesday, 9:00 AM", action: "Review information-sharing logs \u2192 Ensure content\u2194SEO, brand\u2194paid alignment \u2192 Flag gaps" },
        { name: "Critical Alert Handler", frequency: "Real-time (Slack)", action: "Evaluate escalated alerts \u2192 Decide action \u2192 Respond or escalate to CEO" }
      ],
      connections: [SLACK, GDOCS, SHEETS, HUBSPOT, TRELLO],
      outputs: ["Monthly Strategy Memo (Google Docs)", "Weekly Marketing Pulse (Sheets)", "Budget reallocation directives", "Cross-department alignment notes"],
      reportsTo: "ceo",
      childIds: ["demand-gen-director", "content-director", "brand-creative-manager", "marketing-ops-manager"],
      salary: 215e3,
      contractedRate: 270
    },
    // ╔════════════════════════════════════════╗
    // ║     PILLAR 1 — DEMAND GENERATION       ║
    // ╚════════════════════════════════════════╝
    "demand-gen-director": {
      id: "demand-gen-director",
      name: "Jordan",
      title: "Demand Gen Director",
      tier: "director",
      description: "Drives revenue pipeline through integrated paid and organic acquisition.",
      fullDescription: "Operational commander of all demand generation. Bridges paid and organic teams. Owns the revenue pipeline number and total acquisition budget. Consolidates manager reports into unified demand gen intelligence. Shares lead data and audience insights with Content Director and Marketing Ops. Uses Telegram for conversational reporting with leadership.",
      responsibilities: [
        "Consolidate Paid Media + SEO weekly summaries into unified demand gen report",
        "Review cross-channel performance and recommend budget shifts",
        "Track marketing-sourced pipeline in HubSpot and correlate with channel spend",
        "Share audience and conversion insights with Content Director for content optimization",
        "Escalate critical issues from managers to CMO",
        "Cascade CMO directives to managers"
      ],
      triggers: [
        { name: "Weekly Demand Gen Rollup", frequency: "Every Friday, 4:00 PM", action: "Pull manager summaries \u2192 Synthesize \u2192 Post to Sheets + Slack" },
        { name: "Budget Review", frequency: "Every Wednesday, 10:00 AM", action: "Pull spend/performance \u2192 Run allocation model \u2192 Recommend shifts" },
        { name: "Pipeline Sync", frequency: "Daily, 7:00 AM", action: "Pull HubSpot pipeline \u2192 Update attribution dashboard \u2192 Flag anomalies" },
        { name: "Escalation Relay", frequency: "Real-time", action: "Receive manager alerts \u2192 Assess severity \u2192 Escalate or handle" }
      ],
      connections: [SHEETS, HUBSPOT, SLACK, TELEGRAM],
      outputs: ["Weekly Demand Gen Report (Sheets + Slack)", "Budget Allocation Recommendations", "Pipeline Attribution Dashboard (Telegram)", "Escalation messages to CMO"],
      reportsTo: "cmo",
      childIds: ["paid-media-manager", "seo-manager", "competitive-intel"],
      salary: 152e3,
      contractedRate: 190
    },
    "paid-media-manager": {
      id: "paid-media-manager",
      name: "Morgan",
      title: "Paid Media Manager",
      tier: "manager",
      description: "Optimizes ad spend and strategy across search and social advertising channels.",
      fullDescription: "Tactical commander of all paid advertising. Synthesizes specialist reports into actionable strategy. Owns ROAS targets and total paid media budget. Decides budget splits between Meta, Google, and LinkedIn. Coordinates with Brand & Creative Manager for ad creative assets.",
      responsibilities: [
        "Aggregate reports from all 5 paid media agents into weekly summary",
        "Decide budget splits between Meta, Google, and LinkedIn",
        "Review and approve major campaign changes from specialists",
        "Coordinate with Brand Design Agent for ad creative production",
        "Triage alerts from Ad Performance Analyst and Budget Pacing Analyst",
        "Report weekly to Demand Gen Director"
      ],
      triggers: [
        { name: "Weekly Paid Summary", frequency: "Every Thursday, 3:00 PM", action: "Pull all agent reports \u2192 Create summary \u2192 Post to Sheets \u2192 Notify Director" },
        { name: "Daily Alert Digest", frequency: "Daily, 9:00 AM", action: "Review overnight alerts \u2192 Prioritize \u2192 Assign actions" },
        { name: "Channel Rebalance", frequency: "Every Tuesday, 11:00 AM", action: "Pull cross-channel ROAS \u2192 Recommend budget shifts" }
      ],
      connections: [META, GOOGLE_ADS, SHEETS, LINKEDIN],
      outputs: ["Weekly Paid Media Summary (Sheets + Slack)", "Channel budget allocation", "Action directives to specialists"],
      reportsTo: "demand-gen-director",
      childIds: ["meta-ads", "google-ads", "linkedin-ads", "ad-performance", "budget-pacing"],
      salary: 85e3,
      contractedRate: 105
    },
    "meta-ads": {
      id: "meta-ads",
      name: "Sofia",
      title: "Meta Ads Specialist",
      tier: "agent",
      description: "Manages and scales high-performance Facebook and Instagram advertising campaigns.",
      fullDescription: "Hands-on campaign operator for Facebook and Instagram. Manages audience targeting, bid strategies, creative rotations, and A/B testing. Scales winners and pauses underperformers daily. Requests creative refreshes from Brand Design Agent when ad fatigue is detected.",
      responsibilities: [
        "Monitor daily campaign performance (CPM, CPC, CTR, ROAS)",
        "Adjust audience targeting, bid strategies, and creative rotations",
        "A/B test ad creatives and landing page combinations",
        "Scale winning campaigns and pause underperformers",
        "Request new ad creatives from Brand Design when fatigue is detected",
        "Report weekly performance with recommendations"
      ],
      triggers: [
        { name: "Daily Performance Pull", frequency: "Daily, 6:00 AM", action: "Pull Meta metrics \u2192 Log to Sheets \u2192 Flag anomalies" },
        { name: "Weekly Optimization", frequency: "Every Wednesday, 10:00 AM", action: "Analyze trends \u2192 Adjust bids/audiences \u2192 Log \u2192 Report" },
        { name: "Creative Refresh Check", frequency: "Every Friday, 2:00 PM", action: "Check ad fatigue \u2192 Request creative swaps from Brand Design" }
      ],
      connections: [META, SHEETS, GA],
      keyMetrics: ["ROAS", "CPA", "CPM", "CTR", "Frequency", "Ad Relevance Score", "Conversion Rate"],
      outputs: ["Daily performance log (Sheets)", "Weekly optimization report", "Creative refresh requests"],
      reportsTo: "paid-media-manager",
      childIds: [],
      salary: 72e3,
      contractedRate: 90
    },
    "google-ads": {
      id: "google-ads",
      name: "Raj",
      title: "Paid Media Specialist \u2014 Google, Amazon & Reddit",
      tier: "agent",
      description: "Manages paid media across Google Ads, Amazon PPC, and Reddit Ads. Also covers Amazon FBA, affiliate, and organic Reddit strategy.",
      fullDescription: "Raj is PMG's full-stack paid media and marketplace specialist. Manages Google Search, Display, Performance Max, and Shopping campaigns. Leads Amazon channel strategy including FBA product research, listing optimization, Amazon PPC (Sponsored Products/Brands/Display), and affiliate content. Manages Reddit Ads (subreddit targeting, promoted posts, pixel retargeting) and organic Reddit community strategy. Conducts weekly SQR and campaign optimization across all platforms.",
      responsibilities: [
        "Manage Google Search, Display, Performance Max, and Shopping campaigns",
        "Conduct weekly Search Query Report analysis \u2014 add negatives, discover keywords",
        "Optimize bidding strategies (tCPA, tROAS, maximize conversions)",
        "Amazon FBA: product research, supplier sourcing, inventory management, launch strategy",
        "Amazon listing optimization: titles, bullets, A+ content, backend keywords, imagery",
        "Amazon PPC: Sponsored Products, Sponsored Brands, Sponsored Display \u2014 ACoS/TACoS management",
        "Amazon Affiliate: commission-optimized content strategy, FTC-compliant disclosure, tracking IDs",
        "Amazon Dropshipping: supplier vetting, margin analysis, fulfillment integration",
        "Reddit Ads: subreddit targeting, promoted posts, conversation ads, pixel retargeting",
        "Organic Reddit: subreddit research, community participation, brand presence strategy",
        "Report weekly performance across all platforms with recommendations"
      ],
      triggers: [
        { name: "Daily Performance Pull", frequency: "Daily, 6:00 AM", action: "Pull Google Ads + Amazon metrics \u2192 Log to Sheets \u2192 Flag anomalies" },
        { name: "SQR Analysis", frequency: "Every Tuesday, 9:00 AM", action: "Pull search query report \u2192 Identify negatives \u2192 Apply \u2192 Log" },
        { name: "Weekly Optimization", frequency: "Every Wednesday, 10:00 AM", action: "Analyze trends across Google/Amazon/Reddit \u2192 Adjust bids/keywords \u2192 Log \u2192 Report" },
        { name: "Amazon Keyword Harvest", frequency: "Every Monday, 8:00 AM", action: "Pull auto campaign search terms \u2192 Promote winners to exact match \u2192 Add negatives" },
        { name: "Reddit Campaign Review", frequency: "Every Thursday, 10:00 AM", action: "Pull Reddit Ads performance \u2192 Optimize subreddit targeting \u2192 Flag top/bottom performers" }
      ],
      connections: [GOOGLE_ADS, GA, SHEETS],
      keyMetrics: ["ROAS", "CPA", "ACoS", "TACoS", "Quality Score", "Impression Share", "CTR", "Conversion Rate", "Reddit CTR", "Amazon CVR"],
      outputs: ["Daily performance log (Sheets)", "SQR analysis log", "Weekly optimization report", "Amazon listing audit", "Reddit community strategy doc"],
      reportsTo: "paid-media-manager",
      childIds: [],
      salary: 92e3,
      contractedRate: 115
    },
    "linkedin-ads": {
      id: "linkedin-ads",
      name: "Priya",
      title: "LinkedIn Ads Specialist",
      tier: "agent",
      description: "Targets B2B decision-makers with precise sponsored content and messaging campaigns.",
      fullDescription: "Manages Sponsored Content, Message Ads, and Conversation Ads on LinkedIn. Builds and refines audience segments by job title, company size, and industry. Optimizes for lead gen and conversions.",
      responsibilities: [
        "Manage Sponsored Content, Message Ads, and Conversation Ads",
        "Build and refine audience segments (job title, company size, industry)",
        "Optimize for lead gen form submissions and website conversions",
        "A/B test ad copy, imagery, and CTA variations",
        "Report weekly performance with recommendations"
      ],
      triggers: [
        { name: "Daily Performance Pull", frequency: "Daily, 6:00 AM", action: "Pull LinkedIn metrics \u2192 Log to Sheets \u2192 Flag anomalies" },
        { name: "Weekly Optimization", frequency: "Every Wednesday, 10:00 AM", action: "Analyze trends \u2192 Adjust targeting/bids \u2192 Log \u2192 Report" },
        { name: "Audience Refresh", frequency: "Every Monday, 9:00 AM", action: "Review audience performance \u2192 Prune \u2192 Test new segments" }
      ],
      connections: [LINKEDIN, SHEETS, GA],
      keyMetrics: ["CPL", "CTR", "Lead Form Completion Rate", "CPC", "Audience Penetration"],
      outputs: ["Daily performance log (Sheets)", "Weekly optimization report", "Audience performance analysis"],
      reportsTo: "paid-media-manager",
      childIds: [],
      salary: 7e4,
      contractedRate: 90
    },
    "ad-performance": {
      id: "ad-performance",
      name: "Kai",
      title: "Ad Performance Analyst",
      tier: "agent",
      description: "Aggregates performance data to calculate ROAS and identify optimization opportunities.",
      fullDescription: "Cross-channel analytics engine. Pulls and unifies performance data from Meta, Google, and LinkedIn into a single view. Calculates blended ROAS, CPA, and LTV:CAC. Runs automated anomaly detection. Uses Telegram for conversational reporting and Q&A with stakeholders.",
      responsibilities: [
        "Unify performance data from Meta, Google, and LinkedIn into single view",
        "Calculate blended and channel-specific ROAS, CPA, and LTV:CAC ratios",
        "Build automated anomaly detection (spend spikes, ROAS drops)",
        "Create weekly cross-channel performance report",
        "Alert on critical metric deviations"
      ],
      triggers: [
        { name: "Daily Cross-Channel Sync", frequency: "Daily, 7:00 AM", action: "Pull all platform data \u2192 Unify in Sheets \u2192 Anomaly detection \u2192 Alert" },
        { name: "Weekly Performance Report", frequency: "Every Thursday, 12:00 PM", action: "Generate cross-channel analysis \u2192 Post to Sheets \u2192 Send Telegram summary \u2192 Notify Manager" },
        { name: "Monthly Deep Dive", frequency: "1st of month, 10:00 AM", action: "Month-over-month analysis \u2192 Attribution modeling \u2192 Post insights" }
      ],
      connections: [SHEETS, GA, SLACK, TELEGRAM],
      keyMetrics: ["Blended ROAS", "Channel ROAS", "CPA", "LTV:CAC", "Conversion Rate", "Spend Variance"],
      outputs: ["Daily anomaly alerts", "Weekly cross-channel report", "Monthly attribution analysis"],
      reportsTo: "paid-media-manager",
      childIds: [],
      salary: 72e3,
      contractedRate: 90
    },
    "budget-pacing": {
      id: "budget-pacing",
      name: "Dana",
      title: "Budget Pacing Analyst",
      tier: "agent",
      description: "Monitors daily spend pacing to ensure budget compliance and allocation efficiency.",
      fullDescription: "Financial watchdog of the paid media operation. Tracks daily spend against monthly/quarterly targets, calculates pacing rates, and alerts on overpacing or underpacing scenarios.",
      responsibilities: [
        "Track daily spend against monthly/quarterly budget targets",
        "Calculate pacing rates (% budget spent vs. % period elapsed)",
        "Alert on overpacing (>110%) or underpacing (<85%)",
        "Recommend daily spend adjustments to hit targets",
        "Produce weekly budget compliance report"
      ],
      triggers: [
        { name: "Daily Pacing Check", frequency: "Daily, 8:00 AM", action: "Pull spend data \u2192 Calculate pacing \u2192 Alert if off-pace \u2192 Update sheet" },
        { name: "Weekly Budget Report", frequency: "Every Friday, 10:00 AM", action: "Generate pacing summary \u2192 Forecast EOM \u2192 Recommend adjustments" },
        { name: "Monthly Budget Close", frequency: "Last business day, 3:00 PM", action: "Final reconciliation \u2192 Actual vs. budget variance \u2192 Archive" }
      ],
      connections: [SHEETS, SLACK, GOOGLE_ADS, META],
      keyMetrics: ["Pacing Rate", "Budget Utilization", "Forecast Accuracy", "Variance %"],
      outputs: ["Daily pacing status", "Over/underpace alerts (Slack)", "Weekly budget report", "Monthly reconciliation"],
      reportsTo: "paid-media-manager",
      childIds: [],
      salary: 68e3,
      contractedRate: 85
    },
    "seo-manager": {
      id: "seo-manager",
      name: "Sam",
      title: "SEO Manager",
      tier: "manager",
      description: "Develops strategies to increase organic search visibility and domain rating.",
      fullDescription: "Tactical commander of all organic search initiatives. Synthesizes SEO specialist reports into a unified organic growth strategy. Owns organic traffic and domain authority targets. Feeds keyword and content insights to the Content Director for production alignment. Uses SEMrush as the primary SEO research platform and Google Docs for content priority documentation.",
      responsibilities: [
        "Aggregate reports from all 4 SEO agents into weekly summary",
        "Use keyword data and ranking trends to prioritize content production",
        "Monitor site health score and ensure technical issues are resolved",
        "Direct backlink acquisition efforts based on competitive gap analysis",
        "Share keyword and content performance data with Content Director",
        "Report weekly to Demand Gen Director"
      ],
      triggers: [
        { name: "Weekly SEO Summary", frequency: "Every Thursday, 3:00 PM", action: "Pull SEO agent reports \u2192 Create summary \u2192 Post to Sheets \u2192 Notify Director" },
        { name: "Content Calendar Update", frequency: "Every Monday, 10:00 AM", action: "Pull keyword data + ranking changes \u2192 Update priority matrix in Google Docs" },
        { name: "Technical Health Check", frequency: "Every Wednesday, 8:00 AM", action: "Review Technical SEO audit \u2192 Prioritize fixes \u2192 Assign via Slack" }
      ],
      connections: [SEMRUSH, SHEETS, GDOCS],
      outputs: ["Weekly SEO Summary (Sheets + Slack)", "Content Priority Matrix (Google Docs)", "Technical fix priorities (Slack + Google Docs)"],
      reportsTo: "demand-gen-director",
      childIds: ["seo-content", "technical-seo", "backlink-analyst", "keyword-rank", "geo-aeo"],
      salary: 82e3,
      contractedRate: 100
    },
    "seo-content": {
      id: "seo-content",
      name: "Nina",
      title: "SEO Content Strategist",
      tier: "agent",
      description: "Identifies keyword opportunities and creates data-driven content briefs.",
      fullDescription: "Content intelligence engine. Conducts keyword research, analyzes content gaps vs. competitors, creates detailed content briefs, and maintains the editorial calendar. Bridges SEO data with content production by feeding briefs to the Written Content Agent. Uses SEMrush for keyword research and competitive analysis, and Google Docs for brief creation and collaboration.",
      responsibilities: [
        "Conduct keyword research to identify high-opportunity topics",
        "Analyze content gaps vs. competitors using SEMrush",
        "Create detailed content briefs with target keywords and structure",
        "Feed briefs to the Written Content Agent for production",
        "Track content performance post-publication"
      ],
      triggers: [
        { name: "Weekly Keyword Discovery", frequency: "Every Monday, 8:00 AM", action: "Pull trending keywords \u2192 Analyze volume/difficulty \u2192 Score \u2192 Update pipeline" },
        { name: "Content Gap Analysis", frequency: "Every other Monday, 9:00 AM", action: "Run competitor analysis in SEMrush \u2192 Identify gaps \u2192 Create briefs \u2192 Post to Google Docs" },
        { name: "Content Performance Review", frequency: "Every Friday, 11:00 AM", action: "Pull organic traffic per piece \u2192 Score \u2192 Recommend refreshes" }
      ],
      connections: [SEMRUSH, GDOCS, SHEETS],
      keyMetrics: ["Keyword Opportunity Score", "Content Gap Count", "Organic Traffic per Piece", "Brief Completion Rate"],
      outputs: ["Content briefs (Google Docs)", "Keyword opportunity reports (Sheets)", "Content performance tracker"],
      reportsTo: "seo-manager",
      childIds: [],
      salary: 72e3,
      contractedRate: 90
    },
    "technical-seo": {
      id: "technical-seo",
      name: "Leo",
      title: "Technical SEO Specialist",
      tier: "agent",
      description: "Audits site health to resolve indexing issues and improve core web vitals.",
      fullDescription: "Site health guardian. Runs weekly crawl audits, monitors Core Web Vitals, tracks indexation status, audits structured data, and ensures the site is fully crawlable and indexable. Coordinates with Web & UX Agent on technical fixes that require design changes. Uses SEMrush for site auditing and Google Search Console for index monitoring.",
      responsibilities: [
        "Run weekly site crawl audits (broken links, redirect chains, orphan pages)",
        "Monitor Core Web Vitals (LCP, FID, CLS) and page speed",
        "Track indexation status and resolve crawl errors",
        "Audit structured data / schema markup",
        "Monitor robots.txt and sitemap health"
      ],
      triggers: [
        { name: "Weekly Site Crawl", frequency: "Every Tuesday, 6:00 AM", action: "Run crawl audit via SEMrush \u2192 Categorize by severity \u2192 Log \u2192 Alert on critical" },
        { name: "Daily Index Monitor", frequency: "Daily, 7:00 AM", action: "Check GSC for crawl errors \u2192 Alert if critical \u2192 Log trends" },
        { name: "Core Web Vitals Check", frequency: "Every Wednesday, 8:00 AM", action: "Pull CWV metrics \u2192 Compare benchmarks \u2192 Flag regressions" },
        { name: "Schema Audit", frequency: "Monthly, 1st Tuesday", action: "Audit structured data \u2192 Validate markup \u2192 Recommend additions" }
      ],
      connections: [SEMRUSH, GSC, SHEETS],
      keyMetrics: ["Site Health Score", "Crawl Errors", "LCP", "FID", "CLS", "Index Coverage"],
      outputs: ["Weekly technical health scorecard", "Critical issue alerts (Slack)", "Monthly schema audit"],
      reportsTo: "seo-manager",
      childIds: [],
      salary: 82e3,
      contractedRate: 100
    },
    "backlink-analyst": {
      id: "backlink-analyst",
      name: "Maya",
      title: "Backlink Analyst",
      tier: "agent",
      description: "Monitors link profile quality and executes strategies to build high-authority backlinks.",
      fullDescription: "Link profile guardian. Tracks total backlinks, referring domains, and domain authority trends. Monitors for toxic links, analyzes competitor profiles, and identifies acquisition opportunities. Uses SEMrush for backlink analysis, toxic link detection, and competitive profiling.",
      responsibilities: [
        "Track backlink count, referring domains, and domain authority trends",
        "Monitor for toxic/spammy backlinks and recommend disavow actions",
        "Analyze competitor backlink profiles for acquisition targets",
        "Track new and lost backlinks daily",
        "Produce weekly link building progress report"
      ],
      triggers: [
        { name: "Daily Link Monitor", frequency: "Daily, 7:00 AM", action: "Pull new/lost backlinks from SEMrush \u2192 Log to Sheets \u2192 Alert on high-value changes" },
        { name: "Toxic Link Scan", frequency: "Every Wednesday, 9:00 AM", action: "Run toxic analysis in SEMrush \u2192 Flag dangerous links \u2192 Recommend disavow" },
        { name: "Competitor Link Analysis", frequency: "Every other Friday, 10:00 AM", action: "Analyze competitor profiles \u2192 Identify opportunities \u2192 Create target list" },
        { name: "Weekly Link Report", frequency: "Every Thursday, 2:00 PM", action: "Summarize link activity \u2192 DR/DA trends \u2192 Report to SEO Manager" }
      ],
      connections: [SEMRUSH, SHEETS, SLACK],
      keyMetrics: ["Domain Rating", "Referring Domains", "New/Lost Links", "Toxic Score", "Link Velocity"],
      outputs: ["Daily link change log", "Toxic link alerts", "Competitor link opportunities", "Weekly link report"],
      reportsTo: "seo-manager",
      childIds: [],
      salary: 62e3,
      contractedRate: 80
    },
    "keyword-rank": {
      id: "keyword-rank",
      name: "Zara",
      title: "Keyword Rank Tracker",
      tier: "agent",
      description: "Tracks daily keyword positions to measure visibility and competitor movements.",
      fullDescription: "Ranking intelligence engine. Tracks daily positions for all target keywords, calculates visibility scores, monitors competitor movements, and alerts on significant ranking changes. Uses SEMrush for position tracking and competitive rank analysis.",
      responsibilities: [
        "Track daily ranking positions for all target keywords",
        "Calculate overall visibility score and track trends",
        "Monitor competitor ranking movements",
        "Alert on significant ranking changes (gains/drops of 5+ positions)",
        "Segment tracking by category, intent type, and page"
      ],
      triggers: [
        { name: "Daily Rank Pull", frequency: "Daily, 6:00 AM", action: "Pull rankings from SEMrush \u2192 Log to Sheets \u2192 Calculate visibility \u2192 Alert on major changes" },
        { name: "Competitor Rank Check", frequency: "Every Monday, 7:00 AM", action: "Pull competitor rankings \u2192 Compare \u2192 Identify threats/opportunities" },
        { name: "Weekly Rank Report", frequency: "Every Thursday, 1:00 PM", action: "Summarize movements \u2192 Visibility trend \u2192 Top movers \u2192 Report" },
        { name: "Monthly Keyword Audit", frequency: "1st Friday, 9:00 AM", action: "Review full keyword set \u2192 Prune \u2192 Add new targets \u2192 Update tracking" }
      ],
      connections: [SEMRUSH, SHEETS, SLACK],
      keyMetrics: ["Avg. Position", "Visibility Score", "Top 3 Keywords", "Top 10 Keywords", "Position Changes"],
      outputs: ["Daily ranking snapshots", "Ranking change alerts", "Weekly visibility report", "Monthly keyword audit"],
      reportsTo: "seo-manager",
      childIds: [],
      salary: 58e3,
      contractedRate: 70
    },
    // ╔════════════════════════════════════════╗
    // ║     PILLAR 2 — CONTENT                ║
    // ╚════════════════════════════════════════╝
    "content-director": {
      id: "content-director",
      name: "Riley",
      title: "Content Director",
      tier: "director",
      description: "Owns content strategy and production across written, video, and social channels.",
      fullDescription: "Strategic leader of all content creation and distribution. Translates SEO keyword data and demand gen insights into a unified content calendar. Ensures brand voice consistency across written, video, and social channels. Coordinates closely with SEO Manager (receives briefs), Brand & Creative Manager (receives assets), and Marketing Ops (email content). Uses Google Docs for content planning and Trello for production workflow management.",
      responsibilities: [
        "Maintain and prioritize the unified content calendar in Google Docs",
        "Translate SEO briefs and demand gen insights into production assignments",
        "Ensure brand voice and messaging consistency across all content types",
        "Review and approve all major content before publication",
        "Track content pipeline velocity and production capacity",
        "Report weekly content performance to CMO"
      ],
      triggers: [
        { name: "Weekly Content Planning", frequency: "Every Monday, 9:00 AM", action: "Pull SEO briefs + demand insights \u2192 Prioritize calendar \u2192 Assign to agents via Trello \u2192 Slack notify" },
        { name: "Content Pipeline Review", frequency: "Every Wednesday, 2:00 PM", action: "Check Trello production status \u2192 Flag bottlenecks \u2192 Rebalance assignments" },
        { name: "Weekly Content Report", frequency: "Every Friday, 3:00 PM", action: "Pull performance data across all channels \u2192 Synthesize \u2192 Report to CMO" },
        { name: "Monthly Content Audit", frequency: "1st Thursday, 10:00 AM", action: "Audit all published content \u2192 Score performance \u2192 Recommend refreshes/retires" }
      ],
      connections: [GDOCS, SHEETS, SLACK, GA, TRELLO],
      outputs: ["Weekly content calendar (Google Docs)", "Production assignments (Trello)", "Weekly content performance report", "Monthly content audit"],
      reportsTo: "cmo",
      childIds: ["written-content", "video-multimedia", "social-media"],
      salary: 132e3,
      contractedRate: 165
    },
    "written-content": {
      id: "written-content",
      name: "Harper",
      title: "Written Content Agent",
      tier: "agent",
      description: "Produces blog posts, whitepapers, case studies, and long-form content from SEO briefs.",
      fullDescription: "The production engine for all written content. Takes content briefs from the SEO Content Strategist and produces optimized drafts. Writes blog posts, whitepapers, landing page copy, case studies, and email copy. Publishes via Framer and manages drafts in Google Docs. Uses Trello for tracking production workflow status.",
      responsibilities: [
        "Produce written content from SEO content briefs (blog posts, whitepapers, case studies)",
        "Optimize all content for target keyword coverage and readability",
        "Publish and format content in Framer with proper metadata",
        "Write landing page copy and email body content as requested",
        "Maintain a content style guide and ensure consistent voice",
        "Track draft-to-publish cycle time and content quality scores"
      ],
      triggers: [
        { name: "Daily Brief Check", frequency: "Daily, 8:00 AM", action: "Pull new briefs from Google Docs \u2192 Prioritize \u2192 Begin drafting \u2192 Update Trello status" },
        { name: "Content Optimization Pass", frequency: "Every Tuesday & Thursday, 10:00 AM", action: "Run drafts through optimization review \u2192 Refine keyword coverage \u2192 Score" },
        { name: "Publishing Pipeline", frequency: "Every Wednesday & Friday, 3:00 PM", action: "Finalize approved drafts \u2192 Publish to Framer \u2192 Notify Content Director" },
        { name: "Content Refresh Cycle", frequency: "Every other Monday, 11:00 AM", action: "Pull underperforming content list \u2192 Draft updates \u2192 Submit for review" }
      ],
      connections: [FRAMER, GDOCS, SHEETS, TRELLO],
      keyMetrics: ["Articles Published/Week", "Content Quality Score", "Draft-to-Publish Time", "Organic Traffic per Piece", "Readability Score"],
      outputs: ["Published articles (Framer)", "Content drafts (Google Docs)", "Optimization reports (Sheets)", "Style guide updates"],
      reportsTo: "content-director",
      childIds: [],
      salary: 65e3,
      contractedRate: 80
    },
    "video-multimedia": {
      id: "video-multimedia",
      name: "Marco",
      title: "Video & Multimedia Agent",
      tier: "agent",
      description: "Produces video scripts, manages YouTube presence, and creates multimedia content.",
      fullDescription: "Handles all video and multimedia content production. Creates video scripts, manages the YouTube channel (titles, descriptions, tags, thumbnails), produces short-form content for social, and repurposes written content into video formats. Coordinates with Brand Design Agent for visual assets and thumbnails. Uses Google Docs for script drafts and Trello for production tracking.",
      responsibilities: [
        "Write video scripts from content briefs and trending topics",
        "Optimize YouTube channel \u2014 titles, descriptions, tags, thumbnails, end screens",
        "Create short-form video concepts for social media distribution",
        "Repurpose written content into video and multimedia formats",
        "Track video performance and audience retention metrics",
        "Coordinate with Brand Design Agent for thumbnails and visual assets"
      ],
      triggers: [
        { name: "Weekly Script Pipeline", frequency: "Every Monday, 10:00 AM", action: "Pull content calendar \u2192 Draft scripts for queued videos \u2192 Submit for review" },
        { name: "YouTube Optimization", frequency: "Every Wednesday, 9:00 AM", action: "Audit published videos \u2192 Update metadata \u2192 Optimize for search" },
        { name: "Performance Review", frequency: "Every Friday, 11:00 AM", action: "Pull YouTube analytics \u2192 Track retention \u2192 Identify top performers \u2192 Report" },
        { name: "Short-Form Production", frequency: "Every Tuesday & Thursday, 2:00 PM", action: "Create short-form clips from long-form \u2192 Queue for Social Media Agent" }
      ],
      connections: [YOUTUBE, CANVA, SHEETS, GDOCS, TRELLO],
      keyMetrics: ["Views/Video", "Avg. Watch Time", "Subscriber Growth", "CTR (Thumbnails)", "Audience Retention %", "Shorts Performance"],
      outputs: ["Video scripts (Google Docs)", "YouTube metadata (optimized)", "Short-form content queue", "Weekly video performance report"],
      reportsTo: "content-director",
      childIds: [],
      salary: 72e3,
      contractedRate: 90
    },
    "social-media": {
      id: "social-media",
      name: "Liv",
      title: "Social Media Agent",
      tier: "agent",
      description: "Manages organic social presence, content scheduling, and community engagement.",
      fullDescription: "Owns all organic social media channels. Maintains the social content calendar, schedules posts via Buffer, creates platform-native content, and tracks engagement. Repurposes written and video content for social distribution. Distinct from paid social (Meta Ads Specialist) \u2014 this agent handles organic reach and community.",
      responsibilities: [
        "Maintain and execute the social media content calendar",
        "Schedule and publish posts across all platforms via Buffer",
        "Repurpose blog posts, videos, and assets into social-native formats",
        "Monitor engagement metrics and community responses",
        "Identify trending topics and real-time content opportunities",
        "Report weekly social performance to Content Director"
      ],
      triggers: [
        { name: "Daily Scheduling", frequency: "Daily, 7:00 AM", action: "Review content queue \u2192 Create platform-specific posts \u2192 Schedule via Buffer" },
        { name: "Engagement Monitor", frequency: "Daily, 12:00 PM & 5:00 PM", action: "Check engagement across platforms \u2192 Flag high-performers \u2192 Note trends" },
        { name: "Weekly Social Report", frequency: "Every Friday, 10:00 AM", action: "Pull analytics \u2192 Engagement rates, reach, follower growth \u2192 Report" },
        { name: "Trend Scanner", frequency: "Daily, 9:00 AM", action: "Scan trending topics \u2192 Assess relevance \u2192 Recommend real-time content" }
      ],
      connections: [BUFFER, CANVA, SHEETS, GA, SLACK],
      keyMetrics: ["Engagement Rate", "Reach/Impressions", "Follower Growth", "Share of Voice", "Post Frequency", "Click-Through Rate"],
      outputs: ["Daily scheduled posts (Buffer)", "Weekly social performance report", "Trend opportunity alerts (Slack)", "Content repurposing queue"],
      reportsTo: "content-director",
      childIds: [],
      salary: 62e3,
      contractedRate: 80
    },
    // ╔════════════════════════════════════════╗
    // ║     PILLAR 3 — BRAND & CREATIVE        ║
    // ╚════════════════════════════════════════╝
    "brand-creative-manager": {
      id: "brand-creative-manager",
      name: "Jules",
      title: "Brand & Creative Manager",
      tier: "manager",
      description: "Owns brand identity, visual design system, and web experience.",
      fullDescription: "Guardian of brand consistency and visual quality. Manages the creative pipeline that serves all other departments \u2014 ad creatives for Paid Media, visual assets for Content, and the website experience for conversion. Maintains the design system and brand guidelines. Uses Trello for creative request management and Google Docs for brand documentation.",
      responsibilities: [
        "Maintain the brand style guide and design system",
        "Prioritize the creative request pipeline from all departments",
        "Review and approve all visual assets before release",
        "Ensure brand consistency across ads, content, social, and web",
        "Track creative production velocity and request backlog",
        "Report weekly creative output and brand health to CMO"
      ],
      triggers: [
        { name: "Creative Request Triage", frequency: "Daily, 9:00 AM", action: "Pull new requests from Trello \u2192 Prioritize by urgency/impact \u2192 Assign to agents" },
        { name: "Weekly Creative Review", frequency: "Every Thursday, 2:00 PM", action: "Review all pending assets \u2192 Approve/revise \u2192 Release to requestors" },
        { name: "Brand Consistency Audit", frequency: "Monthly, 2nd Monday", action: "Audit live ads, social, and web for brand compliance \u2192 Log issues \u2192 Assign fixes" },
        { name: "Weekly Creative Report", frequency: "Every Friday, 4:00 PM", action: "Summarize output, backlog, turnaround times \u2192 Report to CMO" }
      ],
      connections: [FIGMA, CANVA, TRELLO, SLACK, GDOCS],
      outputs: ["Creative request pipeline (Trello)", "Brand style guide (Google Docs)", "Weekly creative output report", "Brand audit findings"],
      reportsTo: "cmo",
      childIds: ["brand-design", "web-ux"],
      salary: 88e3,
      contractedRate: 110
    },
    "brand-design": {
      id: "brand-design",
      name: "Sasha",
      title: "Brand Design Agent",
      tier: "agent",
      description: "Produces ad creatives, social graphics, presentation assets, and brand collateral.",
      fullDescription: "The visual production engine. Creates ad creatives for paid media campaigns, social media graphics, presentation decks, email headers, and all brand collateral. Works from the brand design system in Figma and produces assets in Canva for quick-turn requests. Serves all departments with visual assets. Uses Trello for tracking creative requests and production status.",
      responsibilities: [
        "Produce ad creatives for Meta, Google, and LinkedIn campaigns",
        "Create social media graphics and video thumbnails",
        "Design email headers, landing page visuals, and presentation decks",
        "Maintain and extend the component library in Figma",
        "Turn around quick-request assets using Canva templates",
        "Track creative performance data to inform future designs"
      ],
      triggers: [
        { name: "Daily Creative Queue", frequency: "Daily, 8:00 AM", action: "Pull assigned requests from Trello \u2192 Produce assets \u2192 Upload for review" },
        { name: "Ad Creative Batch", frequency: "Every Tuesday, 10:00 AM", action: "Produce ad creative variants \u2192 Upload to shared drive \u2192 Notify Paid Media" },
        { name: "Social Asset Batch", frequency: "Every Wednesday, 10:00 AM", action: "Create social graphics for the week \u2192 Queue for Social Media Agent" },
        { name: "Template Maintenance", frequency: "Monthly, 1st Wednesday", action: "Audit templates \u2192 Update brand elements \u2192 Refresh stale templates" }
      ],
      connections: [CANVA, FIGMA, TRELLO, SHEETS, SLACK],
      keyMetrics: ["Assets Produced/Week", "Avg. Turnaround Time", "Creative CTR (via paid data)", "Request Backlog Size", "Brand Compliance Score"],
      outputs: ["Ad creatives (all formats)", "Social media graphics", "Email/web visual assets", "Updated template library"],
      reportsTo: "brand-creative-manager",
      childIds: [],
      salary: 72e3,
      contractedRate: 90
    },
    "web-ux": {
      id: "web-ux",
      name: "Noor",
      title: "Web & UX Agent",
      tier: "agent",
      description: "Optimizes website experience, landing pages, and conversion rate through data-driven design.",
      fullDescription: "Owns the website experience from a conversion and UX perspective. Designs and optimizes landing pages, runs A/B tests, analyzes user behavior via Hotjar heatmaps and session recordings, and implements UX improvements. Coordinates with Technical SEO on site performance and with Brand Design on visual consistency. Uses Framer for page design and publishing.",
      responsibilities: [
        "Design and optimize landing pages for paid and organic campaigns",
        "Run A/B tests on page layouts, CTAs, forms, and copy",
        "Analyze Hotjar heatmaps and session recordings for UX insights",
        "Monitor conversion rates across key landing pages",
        "Implement page-level UX improvements in Framer",
        "Coordinate with Technical SEO on Core Web Vitals and page speed"
      ],
      triggers: [
        { name: "Weekly CRO Review", frequency: "Every Monday, 9:00 AM", action: "Pull conversion data \u2192 Identify underperformers \u2192 Prioritize A/B tests" },
        { name: "Heatmap Analysis", frequency: "Every Wednesday, 10:00 AM", action: "Review Hotjar recordings \u2192 Identify UX friction \u2192 Recommend changes" },
        { name: "A/B Test Monitor", frequency: "Daily, 11:00 AM", action: "Check running tests \u2192 Statistical significance \u2192 Call winners \u2192 Implement" },
        { name: "Monthly UX Audit", frequency: "1st Friday, 2:00 PM", action: "Full site UX audit \u2192 Accessibility check \u2192 Mobile experience \u2192 Report" }
      ],
      connections: [FRAMER, FIGMA, HOTJAR, GA, SHEETS],
      keyMetrics: ["Conversion Rate", "Bounce Rate", "A/B Test Win Rate", "Page Load Time", "CTA Click Rate", "Form Completion Rate"],
      outputs: ["Optimized landing pages (Framer)", "A/B test results", "UX audit reports", "Heatmap analysis summaries"],
      reportsTo: "brand-creative-manager",
      childIds: [],
      salary: 85e3,
      contractedRate: 105
    },
    // ╔════════════════════════════════════════╗
    // ║     PILLAR 4 — MARKETING OPERATIONS    ║
    // ╚════════════════════════════════════════╝
    "marketing-ops-manager": {
      id: "marketing-ops-manager",
      name: "Taylor",
      title: "Marketing Ops Manager",
      tier: "manager",
      description: "Manages the marketing tech stack, email lifecycle, CRM data, and events.",
      fullDescription: "The connective tissue of the entire marketing organization. Owns the marketing tech stack, data governance, email/lifecycle programs, CRM hygiene, and event operations. Ensures all agents have clean data to work with and that leads flow smoothly from acquisition through the funnel. The operational backbone that keeps everything running. Uses Trello for ops task management and Fireflies for capturing meeting action items that feed into HubSpot and Trello.",
      responsibilities: [
        "Oversee marketing tech stack health and integration reliability",
        "Ensure clean data flow between all marketing systems",
        "Manage email lifecycle programs and deliverability",
        "Maintain CRM data quality and lead scoring models",
        "Coordinate event operations and webinar logistics",
        "Report weekly ops health and pipeline metrics to CMO"
      ],
      triggers: [
        { name: "Daily Ops Health Check", frequency: "Daily, 7:00 AM", action: "Check integration status \u2192 Verify data flows \u2192 Alert on failures" },
        { name: "Weekly Ops Report", frequency: "Every Friday, 4:00 PM", action: "Pull ops metrics \u2192 Deliverability, CRM health, event pipeline \u2192 Report to CMO" },
        { name: "Monthly Tech Stack Review", frequency: "1st Wednesday, 10:00 AM", action: "Audit all integrations \u2192 Usage/cost analysis \u2192 Recommend changes" },
        { name: "Quarterly Data Governance", frequency: "Quarterly, 1st Monday", action: "Full CRM data audit \u2192 Dedup \u2192 Enrichment pass \u2192 Compliance review" }
      ],
      connections: [HUBSPOT, SHEETS, SLACK, TRELLO, FIREFLIES],
      outputs: ["Daily ops health alerts", "Weekly ops report", "Tech stack audit", "Data governance report"],
      reportsTo: "cmo",
      childIds: ["email-lifecycle", "crm-data", "events-webinars", "integrations-specialist"],
      salary: 9e4,
      contractedRate: 110
    },
    "email-lifecycle": {
      id: "email-lifecycle",
      name: "Mia",
      title: "Email & Lifecycle Agent",
      tier: "agent",
      description: "Manages email campaigns, inbox curation, and subscriber lifecycle programs across Gmail and Outlook.",
      fullDescription: "Owns all email operations for the organization. Manages the primary inbox \u2014 nightly automated triage of unread emails into organized folders (Clients, Vendors, Receipts, Newsletters, Notifications, Social, Meetings, Admin). Flags actionable emails needing replies and sends a daily Telegram digest at 6pm. Tracks unsubscribe candidates and recommends inbox cleanup. Also handles email marketing via HubSpot: nurture sequences, campaigns, segmentation, A/B testing, and compliance. Note: Mailchimp integration is on the future roadmap.",
      responsibilities: [
        "Nightly automated triage of primary inbox \u2014 categorize, file, mark read",
        "Flag emails requiring attention and send daily Telegram summary at 6pm",
        "Track and recommend unsubscribe candidates to reduce inbox noise",
        "Build and manage email nurture sequences for each funnel stage",
        "Execute promotional email campaigns from the marketing calendar",
        "Segment email lists by behavior, demographics, and engagement",
        "A/B test subject lines, send times, and email content",
        "Monitor deliverability, open rates, and spam complaints"
      ],
      triggers: [
        { name: "Nightly Inbox Processing", frequency: "Daily, 2:00 AM MT", action: "Scan unread emails \u2192 Categorize \u2192 File to folders \u2192 Flag actionable items" },
        { name: "Daily Inbox Summary", frequency: "Daily, 6:00 PM MT", action: "Query flagged items \u2192 Compile digest \u2192 Send to Telegram with unsubscribe recs" },
        { name: "Campaign Execution", frequency: "Per calendar (Tues/Thurs typical)", action: "Pull approved content \u2192 Build email in HubSpot \u2192 Test \u2192 Schedule \u2192 Send" },
        { name: "Weekly Email Report", frequency: "Every Friday, 11:00 AM", action: "Pull campaign metrics \u2192 Open, click, conversion rates \u2192 Report to Ops Manager" },
        { name: "Monthly List Hygiene", frequency: "1st Monday, 9:00 AM", action: "Clean inactive subscribers \u2192 Re-engage or sunset \u2192 Update segments" }
      ],
      connections: [HUBSPOT, SHEETS, SLACK, GA, OUTLOOK, GMAIL, TELEGRAM],
      keyMetrics: ["Inbox Zero Progress", "Emails Triaged/Day", "Response Flags Accuracy", "Open Rate", "Click-Through Rate", "Deliverability Rate", "Unsubscribe Rate"],
      outputs: ["Daily Telegram inbox digest", "Organized Outlook folders", "Unsubscribe recommendations", "Email campaign analytics", "List hygiene reports"],
      reportsTo: "marketing-ops-manager",
      childIds: [],
      salary: 72e3,
      contractedRate: 90
    },
    "crm-data": {
      id: "crm-data",
      name: "Ezra",
      title: "CRM & Data Agent",
      tier: "agent",
      description: "Maintains CRM data quality, lead scoring, and marketing-to-sales pipeline integrity.",
      fullDescription: "The data quality guardian. Maintains CRM hygiene, manages lead scoring models, ensures accurate attribution, and keeps the marketing-to-sales handoff clean. Runs regular deduplication, enrichment, and compliance checks. Provides the clean data foundation that every other agent depends on. Uses Fireflies to capture meeting action items and automatically sync them into HubSpot records.",
      responsibilities: [
        "Maintain lead scoring models and adjust based on conversion data",
        "Run regular CRM deduplication and data enrichment",
        "Ensure accurate marketing attribution across all channels",
        "Manage the marketing-to-sales lead handoff process and SLAs",
        "Track marketing-sourced pipeline and influenced revenue",
        "Monitor data compliance and privacy requirements"
      ],
      triggers: [
        { name: "Daily Lead Scoring", frequency: "Daily, 6:00 AM", action: "Score new leads \u2192 Route qualified leads to sales \u2192 Log in Sheets" },
        { name: "Weekly Attribution Sync", frequency: "Every Tuesday, 8:00 AM", action: "Pull multi-touch attribution data \u2192 Update channel scoring \u2192 Report" },
        { name: "Dedup & Enrich", frequency: "Every Wednesday, 6:00 AM", action: "Scan for duplicates \u2192 Merge \u2192 Enrich missing fields \u2192 Log changes" },
        { name: "Weekly Pipeline Report", frequency: "Every Thursday, 3:00 PM", action: "Pull pipeline data \u2192 MQL/SQL conversion \u2192 Marketing-sourced revenue \u2192 Report" },
        { name: "Monthly Compliance Check", frequency: "1st Tuesday, 10:00 AM", action: "Audit consent records \u2192 Check data retention \u2192 Flag violations" }
      ],
      connections: [HUBSPOT, SHEETS, SLACK, GA, FIREFLIES],
      keyMetrics: ["MQL\u2192SQL Rate", "Lead Score Accuracy", "Data Completeness %", "Duplicate Rate", "Attribution Accuracy", "Pipeline Value"],
      outputs: ["Daily scored leads", "Weekly attribution report", "Pipeline reports", "Data quality scorecards", "Compliance audit"],
      reportsTo: "marketing-ops-manager",
      childIds: [],
      salary: 78e3,
      contractedRate: 100
    },
    "events-webinars": {
      id: "events-webinars",
      name: "Ava",
      title: "Events & Webinars Agent",
      tier: "agent",
      description: "Plans and executes virtual events, webinars, and event-driven lead generation campaigns.",
      fullDescription: "Manages the full event lifecycle from planning through post-event follow-up. Handles webinar setup, registration pages, reminder sequences, live event logistics, and post-event nurture. Coordinates with Email & Lifecycle Agent for comms, Brand Design for assets, and CRM & Data for lead capture. Supports both Zoom and Google Meet for virtual events. Note: Eventbrite integration is on the future roadmap for expanded event registration capabilities.",
      responsibilities: [
        "Plan and set up webinars and virtual events end-to-end",
        "Create and optimize event registration pages",
        "Manage pre-event promotion and reminder sequences",
        "Run live event logistics (platform setup, moderation, tech checks)",
        "Execute post-event follow-up sequences and lead handoff",
        "Track event ROI \u2014 registrations, attendance, pipeline generated"
      ],
      triggers: [
        { name: "Event Planning Cycle", frequency: "Monthly, 2nd Monday", action: "Plan next month events \u2192 Create registration pages \u2192 Set up Zoom/Google Meet \u2192 Build promo plan" },
        { name: "Pre-Event Countdown", frequency: "7/3/1 days before event", action: "Send reminder emails \u2192 Social promo push \u2192 Final tech check" },
        { name: "Post-Event Follow-Up", frequency: "1 day after event", action: "Pull attendee list \u2192 Segment \u2192 Trigger nurture sequence \u2192 Update CRM" },
        { name: "Weekly Events Report", frequency: "Every Friday, 2:00 PM", action: "Upcoming events pipeline \u2192 Past event results \u2192 ROI summary \u2192 Report" }
      ],
      connections: [ZOOM, GOOGLE_MEET, HUBSPOT, SHEETS],
      keyMetrics: ["Registration Rate", "Attendance Rate", "Registrant\u2192MQL Rate", "Pipeline per Event", "Cost per Registrant", "NPS Score"],
      outputs: ["Event registration pages", "Webinar recordings", "Post-event lead lists", "Weekly events report", "Event ROI analysis"],
      reportsTo: "marketing-ops-manager",
      childIds: [],
      salary: 62e3,
      contractedRate: 80
    },
    // ╔════════════════════════════════════════╗
    // ║     PILLAR 5 — FINANCE                ║
    // ╚════════════════════════════════════════╝
    cfo: {
      id: "cfo",
      name: "Finley",
      title: "Chief Financial Officer",
      tier: "executive",
      description: "Oversees all financial operations \u2014 accounting, bookkeeping, invoicing, cash flow, and QuickBooks integration.",
      fullDescription: "Strategic financial leader and Ellis\u2019s C-suite counterpart. Owns the full financial stack: P&L management, cash flow forecasting, budget planning, invoice/receipt processing pipeline, and QuickBooks Online sync. Translates unstructured expense paperwork from any source into usable data at scale (Wellybox-style). Ensures financial health visibility via Telegram conversational reporting and Google Sheets dashboards.",
      responsibilities: [
        "Own P&L, balance sheet, and cash flow reporting via QuickBooks",
        "Oversee the automated invoice/receipt extraction pipeline from email inboxes",
        "Set and monitor budgets across all business units",
        "Ensure timely invoicing, collections, and vendor payments",
        "Provide financial forecasts and scenario planning",
        "Report financial health to leadership via Telegram and Google Docs"
      ],
      triggers: [
        { name: "Weekly Financial Pulse", frequency: "Every Monday, 8:00 AM", action: "Pull QBO P&L + cash flow \u2192 Summarize \u2192 Post to Sheets + Telegram" },
        { name: "Monthly Financial Close", frequency: "1st business day, 9:00 AM", action: "Reconcile all accounts \u2192 Generate financial statements \u2192 Archive in Google Drive" },
        { name: "Cash Flow Forecast", frequency: "Every Wednesday, 10:00 AM", action: "Project 30/60/90-day cash position \u2192 Alert on shortfalls \u2192 Update forecast sheet" },
        { name: "Budget vs. Actual Review", frequency: "Every Friday, 3:00 PM", action: "Compare actuals to budget \u2192 Flag variances >10% \u2192 Report to leadership" }
      ],
      connections: [QUICKBOOKS, SHEETS, GDOCS, SLACK, TELEGRAM],
      outputs: ["Weekly financial pulse (Telegram + Sheets)", "Monthly financial statements (Google Docs)", "Cash flow forecasts", "Budget variance reports"],
      reportsTo: "ceo",
      childIds: ["controller"],
      salary: 21e4,
      contractedRate: 260
    },
    controller: {
      id: "controller",
      name: "Blair",
      title: "Controller",
      tier: "manager",
      description: "Manages accounting operations, financial reporting, compliance, and audit readiness.",
      fullDescription: "The operational backbone of finance. Oversees the bookkeeper and accountant, ensuring accurate record-keeping, timely reporting, and regulatory compliance. Manages the chart of accounts in QuickBooks, reconciles bank statements, and prepares for audits. Coordinates the invoice/receipt extraction pipeline and ensures all financial data flows cleanly between Gmail, QuickBooks, and Google Drive.",
      responsibilities: [
        "Oversee daily bookkeeping and ensure transaction accuracy",
        "Manage chart of accounts and account reconciliation in QuickBooks",
        "Review and approve financial reports before CFO review",
        "Ensure tax compliance and coordinate with external accountants/auditors",
        "Monitor the invoice/receipt extraction pipeline for errors",
        "Manage vendor relationships and payment schedules"
      ],
      triggers: [
        { name: "Daily Reconciliation Check", frequency: "Daily, 7:00 AM", action: "Review previous day transactions \u2192 Flag discrepancies \u2192 Update reconciliation log" },
        { name: "Weekly Accounts Review", frequency: "Every Thursday, 2:00 PM", action: "Review AR/AP aging \u2192 Flag overdue \u2192 Recommend actions \u2192 Report to CFO" },
        { name: "Monthly Close Checklist", frequency: "Last business day, 10:00 AM", action: "Run close checklist \u2192 Verify all entries \u2192 Reconcile \u2192 Generate trial balance" },
        { name: "Quarterly Compliance Audit", frequency: "Quarterly, 1st week", action: "Audit all transactions \u2192 Verify tax remittances \u2192 Prepare compliance report" }
      ],
      connections: [QUICKBOOKS, SHEETS, GDOCS, GMAIL],
      outputs: ["Daily reconciliation log", "Weekly AR/AP aging report", "Monthly trial balance", "Quarterly compliance report"],
      reportsTo: "cfo",
      childIds: ["bookkeeper", "accountant"],
      salary: 108e3,
      contractedRate: 135
    },
    bookkeeper: {
      id: "bookkeeper",
      name: "Sage",
      title: "Bookkeeper",
      tier: "agent",
      description: "Extracts invoices and receipts from email, categorizes expenses, and syncs transactions to QuickBooks.",
      fullDescription: "The Wellybox-style automation engine. Continuously scans designated email inboxes for invoices, receipts, and expense documents. Uses AI to extract vendor name, amount, date, tax, and line items from unstructured PDFs, images, and email bodies. Categorizes expenses against the chart of accounts, creates corresponding entries in QuickBooks Online, and files source documents in organized Google Drive folders. Handles high-volume document processing at scale.",
      responsibilities: [
        "Scan email inboxes for invoices, receipts, and expense documents",
        "Extract key data (vendor, amount, date, tax, line items) from unstructured documents",
        "Categorize expenses against the QuickBooks chart of accounts",
        "Create purchase/expense entries in QuickBooks Online",
        "File source documents in organized Google Drive folders by vendor/month",
        "Flag anomalies \u2014 duplicate invoices, unusual amounts, missing data"
      ],
      triggers: [
        { name: "Inbox Scan", frequency: "Every 2 hours, business days", action: "Scan Gmail for new invoices/receipts \u2192 Extract data \u2192 Categorize \u2192 Queue for QBO entry" },
        { name: "QBO Sync", frequency: "Daily, 11:00 AM", action: "Push queued transactions to QuickBooks \u2192 Verify \u2192 File source docs to Google Drive" },
        { name: "Duplicate Detection", frequency: "Daily, 12:00 PM", action: "Scan recent entries for potential duplicates \u2192 Flag for Controller review" },
        { name: "Weekly Processing Report", frequency: "Every Friday, 9:00 AM", action: "Summarize documents processed, categorized, synced \u2192 Report to Controller" }
      ],
      connections: [GMAIL, QUICKBOOKS, GDOCS, SHEETS],
      keyMetrics: ["Documents Processed/Week", "Extraction Accuracy %", "Auto-Categorization Rate", "Processing Time per Doc", "Duplicate Detection Rate"],
      outputs: ["QuickBooks expense entries", "Filed receipts/invoices (Google Drive)", "Processing reports", "Anomaly alerts"],
      reportsTo: "controller",
      childIds: [],
      salary: 52e3,
      contractedRate: 65
    },
    accountant: {
      id: "accountant",
      name: "Rowan",
      title: "Accountant",
      tier: "agent",
      description: "Prepares financial statements, manages tax obligations, and performs period-end closing procedures.",
      fullDescription: "The analytical and compliance arm of finance. Handles month-end and year-end closing procedures, prepares financial statements (P&L, balance sheet, cash flow), manages tax calculations and remittance schedules, and performs variance analysis. Generates financial reports from QuickBooks data and maintains historical financial records in Google Drive for audit trails.",
      responsibilities: [
        "Execute month-end and year-end closing procedures",
        "Prepare financial statements \u2014 P&L, balance sheet, cash flow statement",
        "Calculate and track tax obligations (GST/HST, income tax provisions)",
        "Perform budget-to-actual variance analysis",
        "Maintain historical financial records and audit trails in Google Drive",
        "Generate custom financial reports for CFO decision-making"
      ],
      triggers: [
        { name: "Monthly Financial Statements", frequency: "5th business day, 9:00 AM", action: "Pull QBO data \u2192 Generate P&L, balance sheet, cash flow \u2192 Post to Google Docs \u2192 Notify CFO" },
        { name: "Tax Obligation Tracker", frequency: "Monthly, 15th", action: "Calculate tax obligations \u2192 Update remittance schedule \u2192 Alert on upcoming deadlines" },
        { name: "Variance Analysis", frequency: "Every Friday, 1:00 PM", action: "Compare actuals to budget/forecast \u2192 Identify material variances \u2192 Document explanations" },
        { name: "Quarterly Tax Prep", frequency: "Quarterly, last week", action: "Compile quarterly financials \u2192 Prepare tax working papers \u2192 Archive to Google Drive" }
      ],
      connections: [QUICKBOOKS, SHEETS, GDOCS],
      keyMetrics: ["Close Cycle Time (days)", "Report Accuracy %", "Tax Filing Timeliness", "Variance Explanation Coverage", "Audit Readiness Score"],
      outputs: ["Monthly financial statements (Google Docs)", "Tax obligation schedules", "Variance analysis reports", "Quarterly tax working papers"],
      reportsTo: "controller",
      childIds: [],
      salary: 68e3,
      contractedRate: 85
    },
    // ╔════════════════════════════════════════╗
    // ║     PILLAR 6 — LEGAL                  ║
    // ╚════════════════════════════════════════╝
    clo: {
      id: "clo",
      name: "Kendall",
      title: "General Counsel",
      tier: "executive",
      description: "Oversees all legal operations \u2014 contracts, compliance, corporate governance, and risk management.",
      fullDescription: "Strategic legal leader and C-suite peer to Ellis, Finley, and Parker. Owns the full legal stack: client agreement lifecycle (MSAs, SOWs, NDAs), regulatory compliance (CASL, PIPEDA), corporate governance, employment law, and IP protection. Reviews and approves all major agreements, advises on business decisions with legal implications, and coordinates with external counsel when complexity exceeds AI capabilities. Works closely with Finley on tax law and SR&ED compliance, with Parker/Sloane on client contract workflow, and with Cassidy on outbound email compliance.",
      responsibilities: [
        "Review and approve all major client agreements (MSAs, SOWs, NDAs, SLAs)",
        "Ensure CASL and PIPEDA compliance across all outbound and data-handling activities",
        "Advise on business decisions with legal implications (partnerships, hiring, entity structure)",
        "Maintain standard contract templates and clause libraries for rapid assembly",
        "Coordinate with external legal counsel for complex matters (litigation, regulatory inquiries)",
        "Report legal risk posture and contract status to leadership via Telegram and Google Docs"
      ],
      triggers: [
        { name: "Weekly Contract Status", frequency: "Every Monday, 9:00 AM", action: "Review open contracts \u2192 Track pending signatures \u2192 Flag expirations within 30 days \u2192 Report to leadership" },
        { name: "Quarterly Compliance Audit", frequency: "Quarterly, 1st week", action: "Audit CASL/PIPEDA compliance \u2192 Review data handling practices \u2192 Update risk register \u2192 Report" },
        { name: "Monthly Legal Digest", frequency: "1st business day, 10:00 AM", action: "Summarize contract activity, compliance status, risk items \u2192 Post to Google Docs \u2192 Telegram brief" }
      ],
      connections: [GDOCS, SHEETS, HUBSPOT, SLACK, TELEGRAM],
      outputs: ["Weekly contract status report", "Quarterly compliance audit", "Monthly legal digest (Google Docs)", "Risk assessment briefs"],
      reportsTo: "ceo",
      childIds: ["contract-manager", "compliance-officer", "corporate-counsel"],
      salary: 225e3,
      contractedRate: 280
    },
    "contract-manager": {
      id: "contract-manager",
      name: "Paige",
      title: "Contract Manager",
      tier: "manager",
      description: "Drafts, manages, and tracks all client contracts \u2014 MSAs, SOWs, NDAs, amendments, and renewals.",
      fullDescription: "The operational workhorse of the Legal division. Handles 80% of daily legal work: drafting Master Service Agreements, Statements of Work, Non-Disclosure Agreements, Service Level Agreements, change orders, and amendments. Maintains a standard clause library for rapid contract assembly and tracks all contract lifecycles \u2014 from initial draft through negotiation, execution, renewal, and termination. Integrates with the sales pipeline: when Beckett closes a deal and generates a resource plan, Paige auto-generates the corresponding MSA/SOW for Kendall's review.",
      responsibilities: [
        "Draft MSAs, SOWs, NDAs, SLAs, change orders, and amendments from templates",
        "Maintain and update standard contract templates and clause library",
        "Track contract lifecycles \u2014 pending, active, expiring, terminated",
        "Monitor auto-renewal dates and notify stakeholders 60/30/15 days before expiration",
        "Coordinate redlining and negotiation with clients via Google Docs",
        "Generate contracts from Beckett's resource plans for new client engagements"
      ],
      triggers: [
        { name: "Contract Expiration Watch", frequency: "Daily, 8:00 AM", action: "Scan active contracts \u2192 Flag expirations within 60/30/15 days \u2192 Notify stakeholders \u2192 Update tracker" },
        { name: "New Deal Contract Generation", frequency: "On HubSpot deal stage change", action: 'Detect deal moved to "Contract" stage \u2192 Pull resource plan \u2192 Generate MSA/SOW draft \u2192 Route to Kendall' },
        { name: "Weekly Contract Pipeline", frequency: "Every Friday, 3:00 PM", action: "Summarize contracts in draft, review, negotiation, and execution \u2192 Report to Kendall" }
      ],
      connections: [GDOCS, SHEETS, HUBSPOT, SLACK],
      keyMetrics: ["Contract Turnaround Time (days)", "Template Utilization Rate", "Renewal Capture Rate", "Contract Volume/Month", "Redline Cycles per Contract"],
      outputs: ["MSA/SOW/NDA drafts (Google Docs)", "Contract tracking spreadsheet (Google Sheets)", "Expiration alerts", "Weekly contract pipeline report"],
      reportsTo: "clo",
      childIds: [],
      salary: 88e3,
      contractedRate: 110
    },
    "compliance-officer": {
      id: "compliance-officer",
      name: "Hollis",
      title: "Compliance & Privacy Officer",
      tier: "agent",
      description: "Ensures regulatory compliance \u2014 CASL, PIPEDA, data privacy, and email marketing laws.",
      fullDescription: "The compliance and privacy guardian for the organization. Ensures all outbound communications comply with CASL (Canada's Anti-Spam Legislation) \u2014 critical for Cassidy's 150-prospect outbound email sequences. Manages PIPEDA compliance for client data handling, ad account access agreements, and analytics data retention. Maintains privacy policies and terms of service. Performs risk assessments on new service offerings and data practices. Works with Mia on unsubscribe compliance and email retention policies.",
      responsibilities: [
        "Ensure CASL compliance for all outbound email campaigns (consent tracking, unsubscribe mechanisms)",
        "Manage PIPEDA compliance for client data collection, storage, and handling",
        "Maintain and update privacy policies and terms of service",
        "Review data handling agreements for client ad account and analytics access",
        "Perform privacy impact assessments for new service offerings",
        "Coordinate with Mia on unsubscribe compliance and email retention policies"
      ],
      triggers: [
        { name: "CASL Compliance Check", frequency: "Weekly, Monday 10:00 AM", action: "Audit outbound email logs \u2192 Verify consent records \u2192 Check unsubscribe processing \u2192 Report to Kendall" },
        { name: "Privacy Policy Review", frequency: "Quarterly, 2nd week", action: "Review all privacy policies \u2192 Check against regulatory changes \u2192 Update as needed \u2192 Archive versions" },
        { name: "Data Handling Audit", frequency: "Monthly, 15th", action: "Audit client data access permissions \u2192 Review retention schedules \u2192 Flag expired consents \u2192 Report" }
      ],
      connections: [GDOCS, SHEETS, GMAIL, OUTLOOK],
      keyMetrics: ["CASL Compliance Rate", "Unsubscribe Processing Time", "Privacy Policy Currency", "Data Handling Audit Score", "Consent Record Coverage"],
      outputs: ["CASL compliance reports", "Privacy policy updates (Google Docs)", "Data handling audit reports", "Consent tracking logs (Google Sheets)"],
      reportsTo: "clo",
      childIds: [],
      salary: 95e3,
      contractedRate: 120
    },
    "corporate-counsel": {
      id: "corporate-counsel",
      name: "Sterling",
      title: "Corporate Counsel",
      tier: "agent",
      description: "Handles corporate governance, tax law, employment law, IP protection, and vendor agreements.",
      fullDescription: "The business-side legal brain. Works closely with Finley on corporate tax law, SR&ED claim compliance, grant terms and conditions, and entity structure optimization. Handles employment law matters including Cooper's internship classification (contractor vs. employee), non-compete/non-solicitation agreements, and hiring compliance. Manages intellectual property protection for PMG's content, brand assets, and proprietary systems. Reviews vendor agreements, SaaS licensing terms, and partnership contracts. Advises on insurance coverage (E&O, cyber liability) and business liability management.",
      responsibilities: [
        "Advise on corporate tax law and coordinate with Finley on SR&ED compliance and grant terms",
        "Handle employment law \u2014 internship classification, contractor agreements, non-competes",
        "Manage intellectual property protection for content, brand, and proprietary systems",
        "Review vendor agreements, SaaS licensing terms, and partnership contracts",
        "Advise on entity structure optimization and corporate governance",
        "Monitor insurance coverage (E&O, cyber liability) and flag renewal dates"
      ],
      triggers: [
        { name: "Vendor Agreement Review", frequency: "Monthly, 1st week", action: "Scan active vendor agreements \u2192 Flag upcoming renewals \u2192 Review terms \u2192 Report to Kendall" },
        { name: "IP & Trademark Monitor", frequency: "Quarterly, 3rd week", action: "Review IP portfolio \u2192 Check trademark status \u2192 Scan for infringement \u2192 Report" },
        { name: "Employment Compliance Check", frequency: "Quarterly, 1st week", action: "Audit contractor classifications \u2192 Review employment agreements \u2192 Verify compliance \u2192 Report" }
      ],
      connections: [GDOCS, SHEETS, QUICKBOOKS, SLACK],
      keyMetrics: ["Vendor Agreement Currency", "IP Portfolio Completeness", "Employment Compliance Score", "Grant Terms Adherence", "Insurance Coverage Adequacy"],
      outputs: ["Vendor agreement reviews (Google Docs)", "IP portfolio tracker (Google Sheets)", "Employment compliance reports", "Corporate governance advisories"],
      reportsTo: "clo",
      childIds: [],
      salary: 148e3,
      contractedRate: 185
    },
    // ╔════════════════════════════════════════╗
    // ║         EXECUTIVE OFFICE               ║
    // ╚════════════════════════════════════════╝
    ea: {
      id: "ea",
      name: "Quinn",
      title: "Executive Assistant",
      tier: "executive",
      description: "Mike's personal EA \u2014 calendars, inbox monitoring, daily briefings, scheduling, and personal logistics.",
      fullDescription: "Mike's personal Executive Assistant and command center for his day. Manages events across multiple Google Calendars (Primary, Work, Family, Client, and Holiday calendars), monitors both Gmail and Outlook inboxes, and delivers comprehensive morning briefings via Telegram. Quinn handles scheduling with timezone awareness, coordinates with Atlas on travel logistics, and flags anything requiring Mike's personal attention.",
      responsibilities: [
        "Daily morning briefing via Telegram (schedule, weather, inbox highlights, upcoming 48hrs)",
        "Manage events across all configured Google Calendars (Primary, Work, Family, Client, Holidays)",
        "Monitor Gmail and Outlook inboxes for urgent items",
        "Schedule and reschedule meetings with timezone awareness (MT/MST)",
        "Coordinate with Atlas on travel logistics and calendar blocking",
        "Track personal commitments, family events, hockey games, and important dates",
        "Flag email threads needing replies from Mia's daily processing"
      ],
      triggers: [
        { name: "Morning Briefing", frequency: "Weekdays, 7:00 AM MT", action: "Scan all calendars \u2192 Check both inboxes \u2192 Weather lookup \u2192 Compose briefing \u2192 Send via Telegram" }
      ],
      connections: [GCAL, GMAIL, OUTLOOK, TELEGRAM],
      keyMetrics: ["Briefing Delivery Rate", "Scheduling Conflicts Prevented", "Response Time to Requests", "Calendar Accuracy"],
      outputs: ["Daily morning briefings (Telegram)", "Calendar management across 8 accounts", "Meeting scheduling with conflict detection", "Inbox priority alerts"],
      childIds: ["travel-agent"],
      salary: 72e3,
      contractedRate: 90
    },
    "travel-agent": {
      id: "travel-agent",
      name: "Atlas",
      title: "Travel Agent",
      tier: "agent",
      description: "Mike's personal Travel Agent \u2014 flights, prices, itineraries, and booking coordination.",
      fullDescription: "Mike's personal Travel Agent. Searches for the best flights across Google Flights, Skiplagged, Kayak, and airline direct sites. Monitors prices for watched routes, presents options ranked by value (price \xD7 convenience \xD7 directness), and coordinates with Quinn on calendar blocking and booking logistics. Knows Mike's preferences: home airport YYC (Calgary), preferred carriers WestJet and Air Canada, recent routes YYC \u2194 YYZ.",
      responsibilities: [
        "Search and compare flights across Google Flights, Skiplagged, Kayak, and airline direct sites",
        "Present top options ranked by value (price \xD7 convenience \xD7 directness)",
        "Monitor prices for watched routes and alert on significant drops",
        "Research destination logistics (airport transfers, hotels, local transit)",
        "Create travel itineraries and coordinate calendar blocking with Quinn",
        "Track booking confirmations and reference numbers",
        "Consider loyalty programs and upgrade opportunities"
      ],
      triggers: [],
      connections: [GCAL, TELEGRAM, GDOCS],
      keyMetrics: ["Average Savings vs. First Result", "Booking Lead Time", "Price Drop Alerts Sent", "Trip Planning Completeness"],
      outputs: ["Flight comparison reports (Telegram)", "Travel itineraries", "Price monitoring alerts", "Booking confirmations filed to Drive"],
      reportsTo: "ea",
      childIds: [],
      salary: 48e3,
      contractedRate: 60
    },
    // ╔════════════════════════════════════════╗
    // ║       COO — OPERATIONS & SALES        ║
    // ╚════════════════════════════════════════╝
    coo: {
      id: "coo",
      name: "Parker",
      title: "Chief Operating Officer",
      tier: "executive",
      description: "Owns client delivery and revenue generation. Orchestrates operations, client success, and the full sales pipeline.",
      fullDescription: "Chief Operating Officer and C-suite peer to Ellis (CMO) and Finley (CFO). Parker owns the operational backbone of the organization \u2014 everything from client onboarding and project delivery to sales pipeline and revenue growth. Synthesizes data from HubSpot (deals, pipeline health), Trello (project delivery tracking), and cross-team signals from Slack to maintain a real-time pulse on business health. Makes strategic decisions about capacity, resource allocation, and client prioritization. Reports on operational KPIs and sales forecasts via Telegram.",
      responsibilities: [
        "Own end-to-end operational strategy \u2014 client delivery + revenue generation",
        "Monitor business health: pipeline value, win rate, client satisfaction, delivery velocity",
        "Allocate capacity across client engagements and new business pursuits",
        "Coordinate cross-functionally with Ellis (marketing resources) and Finley (revenue/cost impact)",
        "Set and enforce SLAs for client response times, project milestones, and sales follow-up",
        "Deliver weekly operations pulse via Telegram with key decisions needed",
        "Identify operational bottlenecks and systemic improvement opportunities"
      ],
      triggers: [
        { name: "Weekly Ops Pulse", frequency: "Every Monday, 8:30 AM", action: "Pull HubSpot pipeline + Trello delivery status \u2192 Synthesize ops health report \u2192 Send via Telegram" },
        { name: "Pipeline Review", frequency: "Every Wednesday, 9:00 AM", action: "Analyze deal progression, stalled deals, and forecast accuracy \u2192 Flag decisions needed" }
      ],
      connections: [HUBSPOT, TRELLO, SLACK, TELEGRAM, GDOCS, SHEETS],
      keyMetrics: ["Pipeline Value (Total)", "Win Rate %", "Client NPS / Satisfaction", "Avg Deal Cycle (days)", "Delivery On-Time %", "Revenue per Client"],
      outputs: ["Weekly operations pulse (Telegram)", "Pipeline health reports", "Capacity planning documents", "Cross-functional coordination briefs"],
      reportsTo: "ceo",
      childIds: ["client-ops-director", "sales-director"],
      salary: 22e4,
      contractedRate: 275
    },
    // ── Client Operations ──────────────────
    "client-ops-director": {
      id: "client-ops-director",
      name: "Reese",
      title: "Director of Client Operations",
      tier: "director",
      description: "Oversees client relationships from onboarding through retention. Ensures delivery quality and client satisfaction.",
      fullDescription: "Director of Client Operations responsible for the full client lifecycle \u2014 from onboarding new engagements through ongoing delivery and retention. Reese monitors client health signals across HubSpot (deal/contact activity), Trello (project boards), and communication channels (Slack, email) to proactively surface at-risk accounts and expansion opportunities. Sets delivery standards and ensures the team meets SLAs. Works with Sloane on smooth handoffs from sales to delivery.",
      responsibilities: [
        "Own client satisfaction across all active engagements",
        "Define and monitor onboarding workflows and delivery SLAs",
        "Surface at-risk accounts before they churn \u2014 proactive, not reactive",
        "Coordinate sales-to-delivery handoffs with Sloane's team",
        "Track client health scores combining engagement, delivery, and communication signals",
        "Ensure consistent service quality across all client types (SEO, CRO, automation, etc.)",
        "Report client ops metrics to Parker weekly"
      ],
      triggers: [
        { name: "Client Health Check", frequency: "Every Friday, 10:00 AM", action: "Score all active clients \u2192 Flag at-risk accounts \u2192 Update health dashboard \u2192 Report to COO" }
      ],
      connections: [HUBSPOT, TRELLO, SLACK, GDOCS, GMAIL],
      keyMetrics: ["Client Health Score (avg)", "Onboarding Completion Time", "At-Risk Account Count", "Client Retention Rate", "CSAT Score"],
      outputs: ["Weekly client health report", "Onboarding status updates", "At-risk account alerts", "Client ops playbooks (Google Docs)"],
      reportsTo: "coo",
      childIds: ["client-success", "project-delivery"],
      salary: 142e3,
      contractedRate: 180
    },
    "client-success": {
      id: "client-success",
      name: "Wren",
      title: "Client Success Manager",
      tier: "manager",
      description: "Oversees 3 dedicated CSRs \u2014 one per active client. Manages onboarding, health scoring, retention, and cross-client resource allocation.",
      fullDescription: "Client Success Manager overseeing 3 dedicated Customer Success Representatives (one per active client). Wren monitors HubSpot for client engagement signals (email opens, meeting frequency, deal activity), tracks onboarding milestones in Trello, manages cross-client resource allocation, and proactively flags accounts showing warning signs. Each CSR owns the full client relationship \u2014 intake, projects, people, processes \u2014 and coordinates with the broader org for execution. Wren ensures consistent service quality across all accounts and identifies patterns across the client portfolio.",
      responsibilities: [
        "Manage and coordinate 3 dedicated CSRs across all active client accounts",
        "Build and maintain client onboarding frameworks and playbooks",
        "Monitor cross-client engagement patterns in HubSpot for portfolio-level health",
        "Proactively flag at-risk accounts to Reese with recommended interventions",
        "Facilitate resource sharing between CSRs when clients have overlapping needs",
        "Track expansion opportunities from positive health signals across portfolio",
        "Ensure consistent client communication cadence and quality standards"
      ],
      triggers: [
        { name: "Portfolio Health Review", frequency: "Daily, 9:00 AM", action: "Aggregate CSR reports \u2192 Update portfolio health dashboard \u2192 Alert on red flags" },
        { name: "Onboarding Milestone Check", frequency: "Every Wednesday, 10:00 AM", action: "Review active onboarding Trello boards \u2192 Flag overdue milestones \u2192 Notify Reese" }
      ],
      connections: [HUBSPOT, TRELLO, GMAIL, OUTLOOK, SLACK],
      keyMetrics: ["Portfolio Health Score", "Onboarding Time-to-Value", "Churn Prevention Rate", "Expansion Revenue Influenced"],
      outputs: ["Portfolio health reports", "Cross-client resource recommendations", "At-risk account alerts", "CSR performance summaries"],
      reportsTo: "client-ops-director",
      childIds: ["csr-client-a", "csr-client-b", "csr-client-c"],
      salary: 82e3,
      contractedRate: 100
    },
    // ── Customer Success Representatives (3 dedicated CSRs) ────────────────────
    "csr-client-a": {
      id: "csr-client-a",
      name: "Alex",
      title: "CSR \u2014 Client A",
      tier: "agent",
      description: "Dedicated Customer Success Representative for Client A. Owns the full client relationship \u2014 projects, people, processes, and communications.",
      fullDescription: "Dedicated Customer Success Representative for Client A. Alex maintains the complete client knowledge base including intake documentation, active projects, key stakeholders, and processes. Pulls relevant context from Mia (emails, Fireflies transcripts) to stay current on all client communications. Coordinates with the broader org as needed \u2014 Riley for content, Morgan for paid media, Paige for contracts, Sage for invoicing. Proactively surfaces project updates, upcoming deadlines, and potential issues before they escalate.",
      responsibilities: [
        "Maintain Client A knowledge base \u2014 intake form, projects, people, processes",
        "Pull and synthesize context from Mia (emails, Fireflies meeting notes)",
        "Coordinate with org agents as needed (content, paid media, contracts, finance)",
        "Prepare pre-meeting briefs with current project status and open items",
        "Flag at-risk deliverables, unanswered requests, or communication gaps to Wren",
        "Track client satisfaction signals and expansion opportunities"
      ],
      triggers: [],
      connections: [HUBSPOT, TRELLO, GMAIL, OUTLOOK, GDOCS, SLACK],
      keyMetrics: ["Client Satisfaction", "Response Time", "Deliverable On-Time Rate", "Issue Resolution Speed"],
      outputs: ["Client status reports", "Meeting prep briefs", "Cross-org coordination requests", "Risk escalations"],
      reportsTo: "client-success",
      childIds: [],
      salary: 62e3,
      contractedRate: 80
    },
    "csr-client-b": {
      id: "csr-client-b",
      name: "Blake",
      title: "CSR \u2014 Client B",
      tier: "agent",
      description: "Dedicated Customer Success Representative for Client B. Owns the full client relationship \u2014 projects, people, processes, and communications.",
      fullDescription: "Dedicated Customer Success Representative for Client B. Blake maintains the complete client knowledge base including intake documentation, active projects, key stakeholders, and processes. Pulls relevant context from Mia (emails, Fireflies transcripts) to stay current on all client communications. Coordinates with the broader org as needed \u2014 Riley for content, Morgan for paid media, Paige for contracts, Sage for invoicing. Proactively surfaces project updates, upcoming deadlines, and potential issues before they escalate.",
      responsibilities: [
        "Maintain Client B knowledge base \u2014 intake form, projects, people, processes",
        "Pull and synthesize context from Mia (emails, Fireflies meeting notes)",
        "Coordinate with org agents as needed (content, paid media, contracts, finance)",
        "Prepare pre-meeting briefs with current project status and open items",
        "Flag at-risk deliverables, unanswered requests, or communication gaps to Wren",
        "Track client satisfaction signals and expansion opportunities"
      ],
      triggers: [],
      connections: [HUBSPOT, TRELLO, GMAIL, OUTLOOK, GDOCS, SLACK],
      keyMetrics: ["Client Satisfaction", "Response Time", "Deliverable On-Time Rate", "Issue Resolution Speed"],
      outputs: ["Client status reports", "Meeting prep briefs", "Cross-org coordination requests", "Risk escalations"],
      reportsTo: "client-success",
      childIds: [],
      salary: 62e3,
      contractedRate: 80
    },
    "csr-client-c": {
      id: "csr-client-c",
      name: "Frankie",
      title: "CSR \u2014 Client C",
      tier: "agent",
      description: "Dedicated Customer Success Representative for Client C. Owns the full client relationship \u2014 projects, people, processes, and communications.",
      fullDescription: "Dedicated Customer Success Representative for Client C. Frankie maintains the complete client knowledge base including intake documentation, active projects, key stakeholders, and processes. Pulls relevant context from Mia (emails, Fireflies transcripts) to stay current on all client communications. Coordinates with the broader org as needed \u2014 Riley for content, Morgan for paid media, Paige for contracts, Sage for invoicing. Proactively surfaces project updates, upcoming deadlines, and potential issues before they escalate.",
      responsibilities: [
        "Maintain Client C knowledge base \u2014 intake form, projects, people, processes",
        "Pull and synthesize context from Mia (emails, Fireflies meeting notes)",
        "Coordinate with org agents as needed (content, paid media, contracts, finance)",
        "Prepare pre-meeting briefs with current project status and open items",
        "Flag at-risk deliverables, unanswered requests, or communication gaps to Wren",
        "Track client satisfaction signals and expansion opportunities"
      ],
      triggers: [],
      connections: [HUBSPOT, TRELLO, GMAIL, OUTLOOK, GDOCS, SLACK],
      keyMetrics: ["Client Satisfaction", "Response Time", "Deliverable On-Time Rate", "Issue Resolution Speed"],
      outputs: ["Client status reports", "Meeting prep briefs", "Cross-org coordination requests", "Risk escalations"],
      reportsTo: "client-success",
      childIds: [],
      salary: 62e3,
      contractedRate: 80
    },
    // ╔════════════════════════════════════════╗
    // ║     PILLAR 7 — SALES                  ║
    // ╚════════════════════════════════════════╝
    "sales-director": {
      id: "sales-director",
      name: "Sloane",
      title: "Sales Director",
      tier: "director",
      description: "Owns the full revenue pipeline from inbound qualification through close.",
      fullDescription: "Revenue engine commander. Sloane owns everything from the first inbound inquiry through close \u2014 coordinating Beckett on lead qualification, Cassidy on outbound prospecting, and Emery on pipeline operations and reporting. Maintains a clean, updated HubSpot pipeline and ensures every qualified lead gets a response within 5 minutes. Works closely with Parker (COO) on capacity planning and with Wren (Client Success) on smooth sales-to-delivery handoffs.",
      responsibilities: [
        "Own the full revenue pipeline from lead to close",
        "Coordinate Beckett (inbound), Cassidy (outbound), and Emery (sales ops)",
        "Enforce 5-minute response SLA on all inbound leads",
        "Maintain HubSpot pipeline hygiene \u2014 stages, probabilities, close dates",
        "Report weekly sales forecast and pipeline health to Parker (COO)",
        "Coordinate sales-to-delivery handoffs with Wren (Client Success)"
      ],
      triggers: [
        { name: "Weekly Sales Forecast", frequency: "Every Friday, 2:00 PM", action: "Pull HubSpot pipeline, calculate weighted forecast, identify stalled deals, report to COO" },
        { name: "Pipeline Health Check", frequency: "Daily, 9:00 AM", action: "Review deal stages, flag stale opportunities, assign follow-up actions, alert team" },
        { name: "New Lead Alert", frequency: "Real-time (HubSpot webhook)", action: "New contact enters CRM, route to Beckett, ensure 5-min response SLA fires" }
      ],
      connections: [HUBSPOT, SHEETS, SLACK, TRELLO, TELEGRAM],
      outputs: ["Weekly sales forecast (Sheets + Telegram)", "Pipeline health reports", "Lead routing directives", "Sales-to-delivery handoff briefs"],
      reportsTo: "coo",
      childIds: ["inbound-sales", "outbound-sales", "sales-ops"],
      salary: 148e3,
      contractedRate: 185
    },
    "inbound-sales": {
      id: "inbound-sales",
      name: "Beckett",
      title: "Inbound Sales Agent",
      tier: "agent",
      description: "Qualifies inbound leads within 5 minutes, books discovery calls, and routes opportunities to Sloane.",
      fullDescription: "First responder for every inbound lead: form submissions, assessment completions, contact inquiries, and inbound calls. Beckett fires within 5 minutes of any new contact entering the CRM, sends a personalized email, books a discovery call via Cal.com, and logs all activity in HubSpot. Scores lead quality against ICP criteria (company size, industry, stated problem, budget signals) and routes qualified opportunities to Sloane with a full context brief.",
      responsibilities: [
        "Respond to all inbound leads within 5 minutes of CRM entry",
        "Send personalized qualification email and book discovery call via Cal.com",
        "Score lead quality against ICP criteria (industry, size, problem fit, budget)",
        "Log all activity in HubSpot \u2014 email sent, call booked, lead score",
        "Route qualified leads to Sloane with full context brief",
        "Track and report inbound lead volume, source, and conversion rates"
      ],
      triggers: [
        { name: "New Lead Response", frequency: "Real-time (HubSpot webhook)", action: "New contact enters CRM, score, send personalized email, book call via Cal.com, log activity" },
        { name: "Follow-Up Sequence", frequency: "24h / 72h after no response", action: "Check if discovery call booked, if not send follow-up email, log, alert Sloane if unresponsive" },
        { name: "Weekly Inbound Report", frequency: "Every Friday, 11:00 AM", action: "Summarize lead volume, sources, ICP match rate, conversion to call, report to Sloane" }
      ],
      connections: [HUBSPOT, GMAIL, GOOGLE_MEET, ZOOM, SLACK],
      keyMetrics: ["Lead Response Time", "Call Booking Rate", "ICP Match Rate", "Lead-to-Opportunity Rate", "Source Attribution"],
      outputs: ["Personalized qualification emails", "Discovery calls booked (Cal.com)", "Lead quality scores (HubSpot)", "Weekly inbound report"],
      reportsTo: "sales-director",
      childIds: [],
      salary: 68e3,
      contractedRate: 85
    },
    "outbound-sales": {
      id: "outbound-sales",
      name: "Cassidy",
      title: "Outbound Sales Agent",
      tier: "agent",
      description: "Executes CASL-compliant outbound prospecting sequences to qualified target accounts.",
      fullDescription: "Runs structured outbound prospecting campaigns to ICP-matched target accounts. Cassidy researches prospects, personalizes messaging based on company context and pain signals, and executes multi-touch email sequences \u2014 all CASL/CAN-SPAM compliant with proper consent and unsubscribe mechanisms. Works from a curated prospect list maintained in HubSpot, and coordinates with Hollis (Compliance Officer) on legal sign-off before any new campaign fires. Never sends bulk blast emails \u2014 every sequence is personalized at the company level.",
      responsibilities: [
        "Research target accounts and identify decision-makers using ICP criteria",
        "Write and execute personalized multi-touch outbound email sequences",
        "Ensure full CASL/CAN-SPAM compliance \u2014 consent tracking, unsubscribe mechanisms",
        "Coordinate with Hollis (Compliance) on legal sign-off for new campaigns",
        "Track reply rates, positive responses, and meeting bookings",
        "Route positive responses to Beckett for discovery call booking",
        "Report weekly outbound activity and pipeline contribution to Sloane"
      ],
      triggers: [
        { name: "Outbound Sequence Execution", frequency: "Weekdays, 10:00 AM", action: "Pull next-step contacts from HubSpot, send personalized email, log activity, update sequence stage" },
        { name: "Reply Monitoring", frequency: "Daily, 9:00 AM and 3:00 PM", action: "Scan for replies, categorize positive/neutral/negative, route positive to Beckett, log all" },
        { name: "Weekly Outbound Report", frequency: "Every Friday, 1:00 PM", action: "Summarize sequences active, emails sent, reply rate, meetings booked, report to Sloane" }
      ],
      connections: [HUBSPOT, GMAIL, OUTLOOK, SHEETS, SLACK],
      keyMetrics: ["Emails Sent/Week", "Reply Rate", "Positive Response Rate", "Meetings Booked", "Pipeline Contribution", "CASL Compliance Rate"],
      outputs: ["Personalized outbound sequences", "Reply categorization log (HubSpot)", "Meeting bookings passed to Beckett", "Weekly outbound performance report"],
      reportsTo: "sales-director",
      childIds: [],
      salary: 72e3,
      contractedRate: 90
    },
    "sales-ops": {
      id: "sales-ops",
      name: "Emery",
      title: "Sales Operations Agent",
      tier: "agent",
      description: "Maintains pipeline integrity, sales reporting, and CRM hygiene for the revenue team.",
      fullDescription: "The operational backbone of the sales team. Emery ensures the HubSpot pipeline is clean, accurate, and up to date \u2014 no stale deals, no missing data, no phantom opportunities. Runs weekly pipeline reconciliation, builds sales performance dashboards, and provides Sloane with the data needed to forecast accurately and identify where deals are stalling. Coordinates with Ezra (CRM and Data) on data governance standards and with Paige (Contracts) on deal-to-contract workflow triggers.",
      responsibilities: [
        "Maintain CRM hygiene \u2014 update stale deals, flag missing data, archive dead opportunities",
        "Build and maintain sales performance dashboards (win rate, cycle time, source attribution)",
        "Run weekly pipeline reconciliation and identify forecast gaps",
        "Coordinate with Ezra (CRM and Data) on lead scoring and attribution accuracy",
        "Trigger contract generation workflow when deals reach Contract stage in HubSpot",
        "Track sales team activity metrics and surface coaching signals to Sloane"
      ],
      triggers: [
        { name: "Daily Pipeline Hygiene", frequency: "Daily, 7:00 AM", action: "Scan HubSpot for stale deals, flag deals with no activity over 7 days, alert Sloane, update fields" },
        { name: "Weekly Pipeline Reconciliation", frequency: "Every Thursday, 10:00 AM", action: "Pull full pipeline, validate stages and close dates and amounts, identify discrepancies, report to Sloane" },
        { name: "Contract Stage Trigger", frequency: "Real-time (HubSpot deal stage)", action: "Deal moves to Contract stage, pull resource plan, notify Paige (Contract Manager), log" }
      ],
      connections: [HUBSPOT, SHEETS, SLACK, TRELLO],
      keyMetrics: ["Pipeline Accuracy Rate", "Stale Deal Count", "Data Completeness %", "Forecast Accuracy", "CRM Activity Coverage"],
      outputs: ["Daily pipeline hygiene report", "Weekly pipeline reconciliation", "Sales performance dashboards (Sheets)", "Contract stage trigger notifications"],
      reportsTo: "sales-director",
      childIds: [],
      salary: 65e3,
      contractedRate: 80
    },
    // ── Project Delivery ───────────────────────────────────────────────────────
    "project-delivery": {
      id: "project-delivery",
      name: "Tatum",
      title: "Project Delivery Agent",
      tier: "agent",
      description: "Manages active client project execution \u2014 milestones, timelines, dependencies, and delivery quality.",
      fullDescription: "The delivery engine for all active client engagements. Tatum owns the Trello project boards for every active client, tracks milestone completion, surfaces blockers before they impact timelines, and ensures the org delivers what it promises. Works alongside each CSR (Alex, Blake, Frankie) to keep the client-facing relationship aligned with what is happening operationally. Reports to Reese (Director of Client Operations) and coordinates with all execution agents across content, paid media, and ops to drive cross-team delivery accountability.",
      responsibilities: [
        "Own and maintain Trello project boards for all active client engagements",
        "Track milestone completion rates and flag overdue deliverables to Reese",
        "Surface blockers and cross-team dependencies before they impact timelines",
        "Coordinate with execution agents (content, paid media, SEO, ops) on delivery tasks",
        "Ensure smooth onboarding-to-delivery transition for new client engagements",
        "Report weekly delivery health \u2014 on-time rate, blocked items, upcoming milestones"
      ],
      triggers: [
        { name: "Daily Delivery Scan", frequency: "Daily, 8:00 AM", action: "Review all active Trello boards, identify overdue items, alert responsible agents, log" },
        { name: "Weekly Delivery Report", frequency: "Every Thursday, 4:00 PM", action: "Compile milestone status across all accounts, on-time rate, blockers, report to Reese" },
        { name: "New Client Onboarding", frequency: "On HubSpot deal stage: Onboarding", action: "Create Trello project board, set up milestone structure, assign tasks, notify CSR" }
      ],
      connections: [TRELLO, SLACK, GDOCS, HUBSPOT, SHEETS],
      keyMetrics: ["On-Time Delivery Rate", "Milestone Completion Rate", "Blocker Resolution Time", "Onboarding Time-to-Live", "Cross-Team Task Completion"],
      outputs: ["Trello project boards (all active clients)", "Weekly delivery health report", "Blocker alerts (Slack)", "Onboarding milestone templates"],
      reportsTo: "client-ops-director",
      childIds: [],
      salary: 72e3,
      contractedRate: 90
    },
    // ── GEO / AEO ─────────────────────────────────────────────────────────────
    "geo-aeo": {
      id: "geo-aeo",
      name: "Pax",
      title: "GEO and AEO Specialist",
      tier: "agent",
      description: "Optimizes content and technical signals for visibility in AI answer engines \u2014 Perplexity, ChatGPT, Gemini, and Claude.",
      fullDescription: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) specialist. Pax monitors and improves how the organization and its clients appear in AI-generated answers across Perplexity, ChatGPT, Gemini, Claude, and Google AI Overviews. Manages llms.txt files, structured data and schema markup for AI parsing, entity authority signals, and citation likelihood. Works closely with Leo (Technical SEO) on schema implementation and Nina (SEO Content Strategist) on content structuring for AI retrieval. This is an emerging discipline distinct from traditional SEO \u2014 Pax owns it entirely.",
      responsibilities: [
        "Monitor brand and client mentions in AI answer engine responses (Perplexity, ChatGPT, Gemini, Claude)",
        "Manage and maintain llms.txt files across all domains",
        "Audit and improve schema markup and structured data for AI parsing",
        "Build and maintain entity authority profiles to improve citation likelihood",
        "Recommend content restructuring to increase AI retrieval and snippet capture",
        "Track and report AI visibility scores and citation frequency by platform"
      ],
      triggers: [
        { name: "Weekly AI Citation Scan", frequency: "Every Monday, 8:00 AM", action: "Query target topics across Perplexity/ChatGPT/Gemini, log citation presence, compare vs. competitors, report" },
        { name: "Schema Audit", frequency: "Every other Wednesday, 9:00 AM", action: "Audit structured data across key pages, validate AI-parsability, flag gaps, coordinate with Leo" },
        { name: "llms.txt Review", frequency: "Monthly, 1st Tuesday", action: "Review and update llms.txt, ensure accuracy, validate with crawl test, log changes" },
        { name: "AI Visibility Report", frequency: "Every Friday, 3:00 PM", action: "Compile citation frequency, topic coverage, and entity strength, report to Sam (SEO Manager)" }
      ],
      connections: [GSC, SHEETS, GDOCS, SLACK],
      keyMetrics: ["AI Citation Frequency", "Topic Coverage in AI Answers", "Entity Authority Score", "Schema Completeness %", "llms.txt Coverage", "AI vs. Competitor Visibility"],
      outputs: ["Weekly AI citation report (Sheets)", "Schema audit findings (Google Docs)", "llms.txt updates", "AI visibility benchmarks", "Competitor citation analysis"],
      reportsTo: "seo-manager",
      childIds: [],
      salary: 78e3,
      contractedRate: 95
    },
    // ── Integrations ──────────────────────────────────────────────────────────
    "integrations-specialist": {
      id: "integrations-specialist",
      name: "Remy",
      title: "Integrations and Automation Specialist",
      tier: "agent",
      description: "Owns platform onboarding, API connections, webhook configuration, and marketing technology integrations.",
      fullDescription: "The technical connective tissue of the marketing stack. Remy owns every integration between platforms \u2014 CRM webhooks, API connections, data pipeline configurations, and the full tech onboarding sequence when a new client or platform is added. Ensures all connections are active, authenticated, and flowing correctly. Coordinates with Taylor (Marketing Ops Manager) on stack health and with Ezra (CRM and Data) on data flow integrity. When a new client onboards, Remy owns the entire technical integration setup so the rest of the org can operate immediately.",
      responsibilities: [
        "Own all platform integrations \u2014 authentication, webhook configuration, data mapping",
        "Build and maintain integration documentation for every active connection",
        "Onboard new platforms \u2014 set up API connections, test data flows, validate outputs",
        "Monitor integration health daily \u2014 catch failures before they impact operations",
        "Coordinate with Ezra on CRM data flow integrity and field mapping accuracy",
        "Build automation workflows to reduce manual handoffs between platforms"
      ],
      triggers: [
        { name: "Daily Integration Health Check", frequency: "Daily, 7:30 AM", action: "Ping all active integrations, verify data flows, alert Taylor on failures, log status" },
        { name: "New Platform Onboarding", frequency: "On request (Slack trigger)", action: "Receive platform onboarding request, set up API connection, map data fields, test, document, report complete" },
        { name: "Weekly Integration Audit", frequency: "Every Wednesday, 10:00 AM", action: "Review all active integrations, check for stale tokens and rate limit issues and schema drift, flag risks" }
      ],
      connections: [HUBSPOT, SLACK, SHEETS, TRELLO, GDOCS],
      keyMetrics: ["Integration Uptime %", "Onboarding Time (new platform)", "Data Flow Accuracy", "Automation Workflows Active", "Mean Time to Resolve Integration Failure"],
      outputs: ["Daily integration health report", "Integration documentation (Google Docs)", "Onboarding completion confirmations", "Automation workflow library"],
      reportsTo: "marketing-ops-manager",
      childIds: [],
      salary: 88e3,
      contractedRate: 110
    },
    // ── Competitive Intelligence ──────────────────────────────────────────────
    "competitive-intel": {
      id: "competitive-intel",
      name: "Knox",
      title: "Competitive Intelligence Agent",
      tier: "agent",
      description: "Monitors competitor activity across ads, content, pricing, and positioning to surface strategic opportunities.",
      fullDescription: "The strategic radar. Knox continuously monitors the competitive landscape across paid advertising, content production, SEO positioning, pricing, and go-to-market messaging. Tracks competitor ad creative changes (via Meta Ad Library and Google Ads Transparency), content publication patterns, keyword movements, and any public pricing or positioning shifts. Synthesizes findings into actionable intelligence for Jordan (Demand Gen Director), Morgan (Paid Media), and Sam (SEO) \u2014 surfacing gaps to exploit and threats to defend before they materialize.",
      responsibilities: [
        "Monitor competitor paid advertising across Meta Ad Library and Google Ads Transparency Center",
        "Track competitor content publication cadence and topic coverage",
        "Analyze competitor keyword rankings and organic growth movements",
        "Surface competitor positioning shifts and messaging changes",
        "Identify gaps in competitor coverage that represent opportunities",
        "Produce weekly competitive intelligence brief for Demand Gen Director and CMO"
      ],
      triggers: [
        { name: "Weekly Competitor Ad Scan", frequency: "Every Monday, 9:00 AM", action: "Pull Meta Ad Library and Google Transparency data for top competitors, log new ads, identify creative patterns, report" },
        { name: "Competitor SEO Monitor", frequency: "Every Tuesday, 8:00 AM", action: "Pull competitor keyword movements from SEMrush, identify significant gains and losses, surface opportunities, alert Sam" },
        { name: "Weekly Competitive Brief", frequency: "Every Thursday, 3:00 PM", action: "Synthesize all competitor intelligence, rank by strategic impact, produce brief, report to Jordan and CMO" },
        { name: "Monthly Competitor Deep Dive", frequency: "1st Monday, 10:00 AM", action: "Full audit of top 3 competitors across ads, content, SEO, pricing, social, post to Google Docs, present findings" }
      ],
      connections: [SEMRUSH, SHEETS, GDOCS, SLACK],
      keyMetrics: ["Competitor Ad Spend (estimated)", "Competitor Keyword Overlap", "Share of Voice vs. Competitors", "New Competitor Content Volume", "Opportunity Gap Score"],
      outputs: ["Weekly competitive intelligence brief (Google Docs + Slack)", "Competitor ad creative log (Sheets)", "SEO competitor movement alerts", "Monthly competitor deep dive (Google Docs)"],
      reportsTo: "demand-gen-director",
      childIds: [],
      salary: 72e3,
      contractedRate: 90
    }
  };
  function getChildren(id) {
    const node = ORG_DATA[id];
    if (!node) return [];
    return node.childIds.map((cid) => ORG_DATA[cid]).filter(Boolean);
  }

  // components/OrgTree.tsx
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var OrgTree = ({ node, selectedId, expandedIds, onSelect, onToggleExpand }) => {
    const children = getChildren(node.id);
    const isExpanded = expandedIds.has(node.id);
    const hasChildren = children.length > 0;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        OrgNode,
        {
          node,
          isSelected: selectedId === node.id,
          isExpanded,
          onSelect,
          onToggleExpand
        }
      ),
      hasChildren && isExpanded && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-px h-6 bg-base-content/20" }),
        children.length === 1 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          OrgTree,
          {
            node: children[0],
            selectedId,
            expandedIds,
            onSelect,
            onToggleExpand
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "div",
            {
              className: "absolute top-0 bg-base-content/20",
              style: {
                height: "1px",
                left: `calc(${100 / (children.length * 2)}% )`,
                right: `calc(${100 / (children.length * 2)}%)`
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex gap-4 items-start", children: children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-px h-6 bg-base-content/20" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              OrgTree,
              {
                node: child,
                selectedId,
                expandedIds,
                onSelect,
                onToggleExpand
              }
            )
          ] }, child.id)) })
        ] })
      ] })
    ] });
  };

  // components/DetailPanel.tsx
  var import_react = __require("react");
  var import_lucide_react2 = __require("lucide-react");
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  var DetailPanel = ({ node, onClose, onNavigate, getNodeTitle, getNodeName }) => {
    const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
    const tierColor = node.tier === "executive" ? "text-amber-500" : node.tier === "director" ? "text-primary" : node.tier === "manager" ? "text-secondary" : "text-info";
    const tierBadge = node.tier === "executive" ? "bg-amber-500 text-white" : node.tier === "director" ? "badge-primary" : node.tier === "manager" ? "badge-secondary" : "badge-info";
    const liveCount = node.connections.filter((c) => c.status === "live").length;
    const totalCount = node.connections.length;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col h-full bg-base-100 border-l border-base-300", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-4 border-b border-base-300 flex-shrink-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `badge badge-sm ${tierBadge}`, children: node.tier.toUpperCase() }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: `badge badge-sm ${liveCount === totalCount ? "badge-success" : liveCount > 0 ? "badge-warning" : "badge-error"}`, children: [
                liveCount,
                "/",
                totalCount,
                " live"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: `font-bold text-xl leading-tight ${tierColor}`, children: node.name }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-base-content/70 font-medium", children: node.title }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-base-content/50 mt-1", children: node.description }),
            node.salary && node.contractedRate && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex gap-3 mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-success/10 border border-success/20 rounded-lg px-3 py-1.5 text-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-[10px] uppercase tracking-wider text-success/70 font-medium", children: "Salary" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-sm font-bold text-success", children: [
                  "$",
                  (node.salary / 1e3).toFixed(0),
                  "K",
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-[10px] font-normal opacity-60", children: "/yr" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-info/10 border border-info/20 rounded-lg px-3 py-1.5 text-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-[10px] uppercase tracking-wider text-info/70 font-medium", children: "Contracted" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-sm font-bold text-info", children: [
                  "$",
                  node.contractedRate,
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-[10px] font-normal opacity-60", children: "/hr" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-warning/10 border border-warning/20 rounded-lg px-3 py-1.5 text-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-[10px] uppercase tracking-wider text-warning/70 font-medium", children: "Annual Bill" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "text-sm font-bold text-warning", children: [
                  "$",
                  (node.contractedRate * 2080 / 1e3).toFixed(0),
                  "K"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "btn btn-ghost btn-sm flex-shrink-0 ml-2", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.X, { size: 16 }) })
        ] }),
        node.reportsTo && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "button",
          {
            className: "btn btn-ghost btn-xs mt-2 gap-1 text-base-content/60",
            onClick: () => onNavigate(node.reportsTo),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.ArrowUpRight, { size: 12 }),
              "Reports to: ",
              getNodeName(node.reportsTo),
              " (",
              getNodeTitle(node.reportsTo),
              ")"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "tabs tabs-bordered flex-shrink-0 px-4 pt-2", children: [
        { key: "overview", label: "Overview", icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Briefcase, { size: 14 }) },
        { key: "triggers", label: "Triggers", icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Zap, { size: 14 }) },
        { key: "connections", label: "Connections", icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Link2, { size: 14 }) },
        { key: "outputs", label: "Outputs", icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.FileOutput, { size: 14 }) }
      ].map(({ key, label, icon }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          className: `tab tab-sm gap-1 ${activeTab === key ? "tab-active" : ""}`,
          onClick: () => setActiveTab(key),
          children: [
            icon,
            " ",
            label
          ]
        },
        key
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-1 overflow-y-auto p-4", children: [
        activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h3", { className: "font-semibold text-sm mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Briefcase, { size: 14, className: "opacity-60" }),
              " About ",
              node.name
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-base-content/80 leading-relaxed", children: node.fullDescription })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h3", { className: "font-semibold text-sm mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.CheckCircle, { size: 14, className: "opacity-60" }),
              " Responsibilities"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: "space-y-1.5", children: node.responsibilities.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { className: "flex items-start gap-2 text-sm text-base-content/80", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-primary mt-0.5 flex-shrink-0", children: "\u2022" }),
              r
            ] }, i)) })
          ] }),
          node.keyMetrics && node.keyMetrics.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h3", { className: "font-semibold text-sm mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.BarChart3, { size: 14, className: "opacity-60" }),
              " Key Metrics"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex flex-wrap gap-1.5", children: node.keyMetrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "badge badge-sm badge-outline", children: m }, m)) })
          ] }),
          node.childIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "font-semibold text-sm mb-2", children: "Direct Reports" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "space-y-1", children: node.childIds.map((cid) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "button",
              {
                className: "btn btn-ghost btn-sm btn-block justify-start gap-2 text-left",
                onClick: () => onNavigate(cid),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.ArrowUpRight, { size: 12, className: "opacity-60" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "text-sm truncate", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("strong", { children: getNodeName(cid) }),
                    " \u2014 ",
                    getNodeTitle(cid)
                  ] })
                ]
              },
              cid
            )) })
          ] })
        ] }),
        activeTab === "triggers" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "space-y-3", children: node.triggers.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "card bg-base-200 p-3", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Zap, { size: 14, className: "text-warning mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "font-semibold text-sm", children: t.name }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-1 mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Clock, { size: 11, className: "opacity-60" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-xs text-base-content/60", children: t.frequency })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-xs text-base-content/70 mt-1.5 leading-relaxed", children: t.action })
          ] })
        ] }) }, i)) }),
        activeTab === "connections" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "space-y-3", children: [
          node.connections.filter((c) => c.status === "live").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "text-xs font-semibold text-success mb-2 uppercase tracking-wider", children: "\u2705 Live" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "space-y-2", children: node.connections.filter((c) => c.status === "live").map((c) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "card bg-base-200 p-3", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `${c.color} text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0`, children: c.abbr }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "font-semibold text-sm", children: c.name }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.CircleCheck, { size: 16, className: "text-success flex-shrink-0" })
            ] }) }, c.abbr + c.name)) })
          ] }),
          node.connections.filter((c) => c.status === "inactive").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "text-xs font-semibold text-base-content/40 mb-2 uppercase tracking-wider", children: "\u23F3 Not Connected" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "space-y-2", children: node.connections.filter((c) => c.status === "inactive").map((c) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "card bg-base-200 p-3 opacity-60", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bg-base-300 text-base-content/40 text-xs font-bold px-2 py-1 rounded flex-shrink-0", children: c.abbr }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "font-semibold text-sm", children: c.name }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.CircleDashed, { size: 16, className: "text-base-content/30 flex-shrink-0" })
            ] }) }, c.abbr + c.name)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-4 p-3 bg-base-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "text-xs text-base-content/50", children: [
            liveCount,
            " of ",
            totalCount,
            " connection",
            totalCount !== 1 ? "s" : "",
            " live for ",
            node.name,
            ".",
            liveCount < totalCount && ` ${totalCount - liveCount} still needed for full capability.`
          ] }) })
        ] }),
        activeTab === "outputs" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "space-y-2", children: node.outputs.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-start gap-2 p-2 bg-base-200 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.FileOutput, { size: 14, className: "text-success mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-sm text-base-content/80", children: o })
        ] }, i)) })
      ] })
    ] });
  };

  // app.tsx
  var import_lucide_react3 = __require("lucide-react");
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  var App = () => {
    const [selectedId, setSelectedId] = (0, import_react2.useState)(null);
    const [expandedIds, setExpandedIds] = (0, import_react2.useState)(
      /* @__PURE__ */ new Set(["ceo", "cmo", "demand-gen-director", "paid-media-manager", "seo-manager", "content-director", "brand-creative-manager", "marketing-ops-manager", "cfo", "controller", "clo", "ea", "coo", "client-ops-director", "sales-director"])
    );
    const selectedNode = selectedId ? ORG_DATA[selectedId] : null;
    const handleSelect = (0, import_react2.useCallback)((id) => {
      setSelectedId((prev) => prev === id ? null : id);
    }, []);
    const handleToggleExpand = (0, import_react2.useCallback)((id) => {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    }, []);
    const handleNavigate = (0, import_react2.useCallback)((id) => {
      setSelectedId(id);
      setExpandedIds((prev) => {
        const next = new Set(prev);
        for (const [nodeId, node] of Object.entries(ORG_DATA)) {
          if (node.childIds.includes(id)) {
            next.add(nodeId);
          }
        }
        next.add(id);
        return next;
      });
    }, []);
    const getNodeTitle = (0, import_react2.useCallback)((id) => {
      return ORG_DATA[id]?.title || id;
    }, []);
    const getNodeName = (0, import_react2.useCallback)((id) => {
      return ORG_DATA[id]?.name || id;
    }, []);
    const expandAll = () => {
      setExpandedIds(new Set(Object.keys(ORG_DATA)));
    };
    const collapseAll = () => {
      setExpandedIds(new Set(rootNodes.map((n) => n.id)));
    };
    const rootNodes = (0, import_react2.useMemo)(() => {
      return Object.values(ORG_DATA).filter((n) => !n.reportsTo);
    }, []);
    const stats = (0, import_react2.useMemo)(() => {
      const allNodes = Object.values(ORG_DATA);
      const allConnections = allNodes.flatMap((n) => n.connections);
      const uniqueConnections = new Set(allConnections.map((c) => c.name));
      const uniqueLive = new Set(allConnections.filter((c) => c.status === "live").map((c) => c.name));
      const uniqueInactive = new Set(allConnections.filter((c) => c.status === "inactive").map((c) => c.name));
      const totalTriggers = allNodes.reduce((sum, n) => sum + n.triggers.length, 0);
      const executives = allNodes.filter((n) => n.tier === "executive").length;
      const directors = allNodes.filter((n) => n.tier === "director").length;
      const managers = allNodes.filter((n) => n.tier === "manager").length;
      const agents = allNodes.filter((n) => n.tier === "agent").length;
      return {
        total: allNodes.length,
        totalConnections: uniqueConnections.size,
        liveConnections: uniqueLive.size,
        inactiveConnections: uniqueInactive.size,
        totalTriggers,
        executives,
        directors,
        managers,
        agents
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex h-screen overflow-hidden bg-base-100", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: `flex-1 flex flex-col overflow-hidden ${selectedNode ? "w-1/2" : "w-full"}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-between px-4 py-3 border-b border-base-300 flex-shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Zap, { size: 18, className: "text-warning" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "font-bold text-sm text-base-content", children: "ELLIS" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-base-content/20", children: "|" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "badge badge-sm bg-amber-500 text-white border-0", children: [
                stats.executives,
                " Exec"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "badge badge-sm badge-primary", children: [
                stats.directors,
                " Directors"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "badge badge-sm badge-secondary", children: [
                stats.managers,
                " Managers"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "badge badge-sm badge-info", children: [
                stats.agents,
                " Agents"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-base-content/30", children: "|" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "badge badge-sm badge-ghost", children: [
                stats.total,
                " Total"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "badge badge-sm badge-success gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Wifi, { size: 10 }),
                " ",
                stats.liveConnections,
                " Live"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "badge badge-sm badge-ghost gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.WifiOff, { size: 10, className: "opacity-40" }),
                " ",
                stats.inactiveConnections,
                " Pending"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "badge badge-sm badge-ghost", children: [
                stats.totalTriggers,
                " Triggers"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { className: "btn btn-ghost btn-xs gap-1", onClick: expandAll, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.ChevronDown, { size: 12 }),
              " Expand All"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { className: "btn btn-ghost btn-xs gap-1", onClick: collapseAll, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.ChevronUp, { size: 12 }),
              " Collapse"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex-1 overflow-auto p-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex justify-center min-w-max gap-16", children: rootNodes.map((root) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            OrgTree,
            {
              node: root,
              selectedId,
              expandedIds,
              onSelect: handleSelect,
              onToggleExpand: handleToggleExpand
            },
            root.id
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-center gap-6 mt-8 pb-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-3 h-3 rounded border-2 border-amber-500" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs text-base-content/60", children: "Executive" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-3 h-3 rounded border-2 border-primary" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs text-base-content/60", children: "Director" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-3 h-3 rounded border-2 border-secondary" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs text-base-content/60", children: "Manager" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-3 h-3 rounded border-2 border-info" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs text-base-content/60", children: "Agent" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-base-content/20", children: "|" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Wifi, { size: 12, className: "text-success" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs text-base-content/60", children: "All connections live" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Wifi, { size: 12, className: "text-warning" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xs text-base-content/60", children: "Partial" })
            ] })
          ] }),
          !selectedNode && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-center text-sm text-base-content/40 mt-4", children: "Click any agent to view details \u2192" })
        ] })
      ] }),
      selectedNode && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-96 flex-shrink-0 border-l border-base-300 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        DetailPanel,
        {
          node: selectedNode,
          onClose: () => setSelectedId(null),
          onNavigate: handleNavigate,
          getNodeTitle,
          getNodeName
        }
      ) })
    ] });
  };
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(App, {}));
})();
