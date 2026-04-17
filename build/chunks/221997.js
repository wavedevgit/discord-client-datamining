/** chunk id: 221997 params = (module,exports,require) **/
l.d(t, {
    Q: () => d
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(261225),
    s = l(673277),
    i = l(219561),
    o = l(304973);
let d = {
    name: "FeaturedChip",
    id: "featured-chip",
    component: e => {
        let {
            backgroundImage: t,
            ...l
        } = e, d = {
            backgroundImage: {
                src: t
            },
            ...l
        };
        return (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r.Text, {
                variant: "text-lg/semibold",
                children: "Featured Chip will take up the full width of the parent, so it is best suited for CmsStack or Grid parents"
            }), (0, a.jsx)(s.A, {
                children: (0, a.jsx)(o.A, {
                    ...d
                })
            }), (0, a.jsxs)(s.A, {
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children: "Grid (3):"
                }), (0, a.jsxs)(n.A, {
                    columns: 3,
                    children: [(0, a.jsx)(o.A, {
                        ...d
                    }), (0, a.jsx)(o.A, {
                        ...d
                    }), (0, a.jsx)(o.A, {
                        ...d
                    }), (0, a.jsx)(o.A, {
                        ...d
                    }), (0, a.jsx)(o.A, {
                        ...d
                    }), (0, a.jsx)(o.A, {
                        ...d
                    })]
                })]
            }), (0, a.jsxs)(s.A, {
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children: "Stack:"
                }), (0, a.jsxs)(i.Kp, {
                    direction: "horizontal",
                    children: [(0, a.jsx)(o.A, {
                        ...d
                    }), (0, a.jsx)(o.A, {
                        ...d
                    }), (0, a.jsx)(o.A, {
                        ...d
                    }), (0, a.jsx)(o.A, {
                        ...d
                    })]
                })]
            })]
        })
    },
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