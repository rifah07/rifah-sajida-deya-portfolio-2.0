"""Builds public/Rifah_Sajida_Deya_cv.pdf. Run: pip install reportlab && python scripts/cv/build_cv.py"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import ListFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "public" / "Rifah_Sajida_Deya_cv.pdf"
FONTS = Path(__file__).parent / "fonts"

for name in ("Regular", "Bold", "Italic"):
    pdfmetrics.registerFont(TTFont(f"Alegreya-{name}", FONTS / f"Alegreya-{name}.ttf"))
pdfmetrics.registerFontFamily(
    "Alegreya", normal="Alegreya-Regular", bold="Alegreya-Bold", italic="Alegreya-Italic"
)

LINK = "#2b5797"
MARGIN = 40
WIDTH = A4[0] - 2 * MARGIN - 12  # minus the frame's default 6pt side padding

base = ParagraphStyle("base", fontName="Alegreya-Regular", fontSize=9.6, leading=11.7)
center = ParagraphStyle("center", base, alignment=TA_CENTER)
right = ParagraphStyle("right", base, alignment=TA_RIGHT)
name_style = ParagraphStyle("name", center, fontName="Alegreya-Bold", fontSize=22, leading=26)
heading = ParagraphStyle("heading", center, fontName="Alegreya-Bold", fontSize=10.5)


def a(url, text):
    return f'<a href="{url}" color="{LINK}">{text}</a>'


def links(*pairs):
    return " &nbsp;|&nbsp; ".join(a(url, text) for text, url in pairs)


def section(title):
    t = Table([[Paragraph(title.upper(), heading)]], colWidths=[WIDTH])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#e8e8e8")),
        ("TOPPADDING", (0, 0), (-1, -1), 1.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    return [Spacer(1, 4), t, Spacer(1, 2)]


def row(left, right_text=""):
    t = Table([[Paragraph(left, base), Paragraph(right_text, right)]], colWidths=[WIDTH * 0.78, WIDTH * 0.22])
    t.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


def bullets(items):
    return ListFlowable(
        [Paragraph(i, base) for i in items],
        bulletType="bullet", start="•", leftIndent=10, bulletFontSize=8, bulletOffsetY=-1,
    )


def project(title, project_links, tech, items):
    return [
        Spacer(1, 3),
        Paragraph(f"<b>{title}</b> &nbsp;|&nbsp; {links(*project_links)}", base),
        Paragraph(f"<i>Tech: {tech}</i>", base),
        bullets(items),
    ]


GH = "https://github.com/rifah07"

story = [
    Paragraph("Rifah Sajida Deya", name_style),
    Paragraph("<i>Junior Full-Stack Engineer</i>", ParagraphStyle("role", center, fontSize=11.5, leading=15)),
    Paragraph(
        f'{a("mailto:rifahsajida7@gmail.com", "rifahsajida7@gmail.com")} &nbsp;|&nbsp; '
        f'{a("tel:+8801872303753", "+88-01872303753")} &nbsp;|&nbsp; Jatrabari, Dhaka-1362, Bangladesh',
        center,
    ),
    Paragraph(links(
        ("LinkedIn", "https://www.linkedin.com/in/rifah-sajida-deya-1011/"),
        ("GitHub", GH),
        ("LeetCode", "https://leetcode.com/u/rifah07/"),
        ("Portfolio", "https://rifah-sajida-deya-portfolio.vercel.app/"),
    ), center),

    *section("Summary"),
    Paragraph(
        "Full-stack engineer with a backend focus. I work at Periscale AI on a commerce platform used by online "
        "sellers, where I build Django REST APIs, React/TypeScript screens and parts of the LangGraph AI agent. "
        "Co-first author of a machine learning and explainable AI paper accepted in IET Systems Biology. "
        "Most comfortable with Node.js, TypeScript, Python and PostgreSQL.",
        base,
    ),

    *section("Education"),
    row("<b>B.Sc. in Computer Science and Engineering</b>", "2019 – 2025"),
    row("<i>Jagannath University, Dhaka</i>", "CGPA: 3.53"),

    *section("Skills"),
    *[Paragraph(f"<b>{k}:</b> {v}", base) for k, v in [
        ("Languages", "TypeScript, JavaScript, Python, C++, Ruby"),
        ("Backend", "Node.js, Express.js, NestJS, Django REST Framework, FastAPI, Hono, REST APIs, Webhooks"),
        ("Frontend", "React, Next.js, TanStack Query, HTML5, CSS3, Tailwind CSS, Bootstrap, Shadcn UI, Material UI"),
        ("Databases", "PostgreSQL, MySQL, MongoDB, Redis, Prisma, TypeORM, Mongoose"),
        ("AI / ML", "LangGraph, Google Gemini API, RAG, pgvector, machine learning, explainable AI"),
        ("Security", "JWT, RBAC, multi-tenant data isolation, Zod validation, Helmet, rate limiting"),
        ("Tools", "Git, GitHub, Docker, Swagger/OpenAPI, Postman, Vercel, Render, Netlify"),
    ]],

    *section("Experience"),
    row("<b>Junior Full-Stack Engineer</b>", "06/2026 – Present"),
    row(f'<i>{a("https://www.periscale.ai/", "Periscale AI")} &nbsp;(joined as Intern, promoted Oct 2026)</i>', "Remote"),
    bullets([
        "Build features across the Django REST backend, React/TypeScript dashboard and FastAPI + LangGraph agent service.",
        "Added order taking, product photo and voice note understanding, and returning-customer memory to the AI "
        "sales agent that replies to customers on Messenger, Instagram and web chat in English, Bangla and Banglish.",
        "Built the human handoff flow so the agent passes a conversation to a staff member when it should, and the "
        "staff reply still reaches the customer after they leave the chat.",
        "Fixed dropped and stuck AI replies in production by adding caching, timeouts and retries around LLM calls.",
        "Integrated three courier APIs (Carrybee, Pathao, Steadfast): backend services, webhook handlers with "
        "signature verification, and frontend forms with cascading location search.",
        "Split the core Orders &amp; Finance page into role-specific Call Center, Processing and Shipment boards.",
        "Shipped discounts, location-based delivery charges, invoices, follow-ups and inbox analytics, DB to UI.",
        "Wrote API documentation and Postman collections for a field-service product's Hono/TypeScript backend.",
    ]),

    *section("Publication"),
    row(
        "<b>Identifying Influential Biomarkers of Colorectal Cancer Using Bioinformatics and Machine Learning "
        "Approaches with Explainable AI</b>",
        "Accepted 10/2026",
    ),
    Paragraph(
        "F. A. Suci*, <b>R. S. Deya</b>*, R. K. Halder†, M. N. Uddin†. &nbsp;<i>IET Systems Biology</i>, Wiley. "
        "Open access, in production. DOI:&nbsp;10.1049/syb2.70092",
        base,
    ),
    Paragraph("<i>*Co-first authors. †Corresponding authors. Journal indexed in SCIE, Scopus and Web of Science; Q2; Impact Factor 1.9.</i>", base),

    *section("Projects"),
    *project(
        "ShopSphere, Multivendor E-Commerce Platform",
        [
            ("GitHub", f"{GH}/ShopSphere__A-Complete-World-for-Shopping__Backend"),
            ("Live", "https://shopsphere-complete-world-for-shopping.lovable.app/"),
            ("API Docs", "https://shopsphere-a-complete-world-for-shopping.onrender.com/api-docs"),
        ],
        "TypeScript, Node.js, Express, MongoDB, JWT, Puppeteer",
        [
            "Admin, seller and buyer roles with cart, wishlist, orders, coupons, refunds, reviews and "
            "Stripe/PayPal/COD payments.",
            "Competitor price scraper (Puppeteer, with a Cheerio fallback) that suggests prices to sellers.",
        ],
    ),
    *project(
        "Multi-Tenant Organization Workspace API",
        [
            ("GitHub", f"{GH}/multi_tenant_organization"),
            ("Live", "https://multi-tenant-workspace.lovable.app/"),
            ("API Docs", "https://multi-tenant-organization-9d2r.onrender.com/api-docs"),
        ],
        "TypeScript, Node.js, Express, PostgreSQL, Prisma, Zod",
        [
            "Every query is scoped to an organization, so tenants can never see each other's projects, tasks or users.",
            "Three roles (Platform Admin, Org Admin, Member), Swagger docs and a Postman collection.",
        ],
    ),
    *project(
        "ExpenseBot, AI Telegram Expense Tracker",
        [
            ("GitHub (Backend)", f"{GH}/expense-tracker-telegram-bot-backend"),
            ("GitHub (Frontend)", f"{GH}/expense-tracker-telegram-bot-frontend"),
            ("Live Bot", "https://t.me/ExpenseTrack_R_Bot"),
            ("Dashboard", "https://expense-tracker-telegram-bot-fronte.vercel.app/"),
        ],
        "TypeScript, Node.js, Express, PostgreSQL, Prisma, React",
        [
            'Users type "500 uber yesterday" and Gemini extracts amount, category and date; common phrases '
            "are keyword-matched to skip the API call.",
            "Sends a Telegram alert when monthly spending passes the user's budget; React dashboard for charts and edits.",
        ],
    ),
    *project(
        "ShopBot, AI E-Commerce Chatbot",
        [
            ("GitHub", f"{GH}/ai-ecommerce-chatbot"),
            ("Live", "https://ai-ecommerce-chatbot-six.vercel.app/shop"),
        ],
        "Next.js 15, TypeScript, MongoDB, Mongoose, Gemini, Zod",
        [
            "Customers browse, manage the cart, check out and cancel orders through chat (10 intents). Gemini only "
            "extracts the intent; Zod validates it and the service layer acts, so the AI never touches data directly.",
            "Falls back cleanly when Gemini is overloaded or returns bad JSON; JWT auth with customer and admin roles.",
        ],
    ),
]

doc = SimpleDocTemplate(
    str(OUT), pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN, topMargin=26, bottomMargin=24,
    title="Rifah Sajida Deya - CV", author="Rifah Sajida Deya",
)
doc.build(story)
pages = doc.page
assert pages == 1, f"CV spilled onto {pages} pages; tighten content"
print(f"Wrote {OUT}")
