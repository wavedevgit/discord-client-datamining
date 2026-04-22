/** chunk id: 966739 params = (module,exports,require) **/
l.d(t, {
    V: () => d
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(261225),
    s = l(673277),
    o = l(219561),
    i = l(753825);
let d = {
    name: "FeaturedProduct",
    id: "featured-product",
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
                children: "PLACEHOLDER"
            }), (0, a.jsx)(s.A, {
                children: (0, a.jsx)(i.A, {
                    ...d
                })
            }), (0, a.jsxs)(s.A, {
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children: "Grid (3):"
                }), (0, a.jsxs)(n.A, {
                    columns: 3,
                    children: [(0, a.jsx)(i.A, {
                        ...d
                    }), (0, a.jsx)(i.A, {
                        ...d
                    }), (0, a.jsx)(i.A, {
                        ...d
                    }), (0, a.jsx)(i.A, {
                        ...d
                    }), (0, a.jsx)(i.A, {
                        ...d
                    }), (0, a.jsx)(i.A, {
                        ...d
                    })]
                })]
            }), (0, a.jsxs)(s.A, {
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children: "Stack:"
                }), (0, a.jsxs)(o.Kp, {
                    direction: "horizontal",
                    children: [(0, a.jsx)(i.A, {
                        ...d
                    }), (0, a.jsx)(i.A, {
                        ...d
                    }), (0, a.jsx)(i.A, {
                        ...d
                    }), (0, a.jsx)(i.A, {
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
        },
        skuId: {
            label: "Sku Id",
            type: "text",
            defaultValue: "1458472704192811088"
        }
    }
}