/** chunk id: 585026, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    r: () => i
});
var r = l(627968);
l(64700);
var a = l(397927),
    n = l(646092);
let i = {
    name: "Button",
    id: "cms-button",
    component: e => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Text, {
            variant: "text-lg/semibold",
            children: "Button component for CMS interactions."
        }), (0, r.jsxs)(a.BJc, {
            direction: "vertical",
            children: [(0, r.jsx)(n.A, {
                ...e
            }), (0, r.jsx)("hr", {}), (0, r.jsx)(n.A, {
                href: e.href,
                ctaText: "Variant = primary",
                variant: "primary"
            }), (0, r.jsx)(n.A, {
                href: e.href,
                ctaText: "Variant = secondary",
                variant: "secondary"
            }), (0, r.jsx)(n.A, {
                href: e.href,
                ctaText: "Variant = critical-primary",
                variant: "critical-primary"
            }), (0, r.jsx)(n.A, {
                href: e.href,
                ctaText: "Variant = critical-secondary",
                variant: "critical-secondary"
            }), (0, r.jsx)(n.A, {
                href: e.href,
                ctaText: "Variant = active",
                variant: "active"
            }), (0, r.jsx)(n.A, {
                href: e.href,
                ctaText: "Variant = overlay-primary",
                variant: "overlay-primary"
            }), (0, r.jsx)(n.A, {
                href: e.href,
                ctaText: "Variant = overlay-secondary",
                variant: "overlay-secondary"
            }), (0, r.jsx)(n.A, {
                href: e.href,
                ctaText: "Variant = expressive",
                variant: "expressive"
            })]
        })]
    }),
    controls: {
        href: {
            type: "text",
            label: "URL",
            defaultValue: "https://discord.com"
        },
        ctaText: {
            type: "text",
            label: "Button Text",
            defaultValue: "Click Me"
        },
        variant: {
            type: "select",
            label: "Variant",
            defaultValue: "secondary",
            options: [{
                label: "Primary",
                value: "primary"
            }, {
                label: "Secondary",
                value: "secondary"
            }, {
                label: "Critical Primary",
                value: "critical-primary"
            }, {
                label: "Critical Secondary",
                value: "critical-secondary"
            }, {
                label: "Active",
                value: "active"
            }, {
                label: "Overlay Primary",
                value: "overlay-primary"
            }, {
                label: "Overlay Secondary",
                value: "overlay-secondary"
            }, {
                label: "Expressive",
                value: "expressive"
            }]
        }
    }
}