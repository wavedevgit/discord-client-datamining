/** chunk id: 221997, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    Q: () => d
});
var r = l(627968);
l(64700);
var a = l(397927),
    n = l(261225),
    s = l(673277),
    i = l(458306),
    o = l(304973);
let d = {
    name: "FeaturedChip",
    id: "featured-chip",
    component: e => (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Text, {
            variant: "text-lg/semibold",
            children: "Featured Chip will take up the full width of the parent, so it is best suited for CmsStack or Grid parents"
        }), (0, r.jsx)(s.A, {
            children: (0, r.jsx)(o.A, {
                ...e
            })
        }), (0, r.jsxs)(s.A, {
            children: [(0, r.jsx)(a.Text, {
                variant: "text-lg/semibold",
                children: "Grid (3):"
            }), (0, r.jsxs)(n.A, {
                columns: 3,
                children: [(0, r.jsx)(o.A, {
                    ...e
                }), (0, r.jsx)(o.A, {
                    ...e
                }), (0, r.jsx)(o.A, {
                    ...e
                }), (0, r.jsx)(o.A, {
                    ...e
                }), (0, r.jsx)(o.A, {
                    ...e
                }), (0, r.jsx)(o.A, {
                    ...e
                })]
            })]
        }), (0, r.jsxs)(s.A, {
            children: [(0, r.jsx)(a.Text, {
                variant: "text-lg/semibold",
                children: "Stack:"
            }), (0, r.jsxs)(i.Kp, {
                direction: "horizontal",
                children: [(0, r.jsx)(o.A, {
                    ...e
                }), (0, r.jsx)(o.A, {
                    ...e
                }), (0, r.jsx)(o.A, {
                    ...e
                }), (0, r.jsx)(o.A, {
                    ...e
                })]
            })]
        })]
    }),
    controls: {
        backgroundImage: {
            label: "Background Image",
            type: "text",
            defaultValue: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e"
        },
        ctaText: {
            label: "Background Image",
            type: "text",
            defaultValue: "Browse"
        },
        href: {
            label: "href",
            type: "text",
            defaultValue: "/shop/things"
        }
    }
}