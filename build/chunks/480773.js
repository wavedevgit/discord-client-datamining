/** chunk id: 480773 params = (module,exports,require) **/
l.d(t, {
    u: () => d
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(261225),
    s = l(673277),
    o = l(219561),
    i = l(18769);
let d = {
    name: "FeaturedCollection",
    id: "featured-collection",
    component: e => {
        let {
            columns: t,
            backgroundImage: l,
            logoSrc: d,
            supplementalImage: c,
            ctaText: u,
            href: x
        } = e, h = {
            backgroundImage: {
                src: l
            },
            logoSrc: {
                src: d
            },
            supplementalImage: {
                src: c
            },
            ctaText: u,
            href: x
        };
        return (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r.Text, {
                variant: "text-lg/semibold",
                children: "Featured Collection will take up the full width of the parent, so it is best suited for CmsStack or Grid parents"
            }), (0, a.jsx)(s.A, {
                children: (0, a.jsx)(i.A, {
                    ...h
                })
            }), (0, a.jsxs)(s.A, {
                children: [(0, a.jsxs)(r.Text, {
                    variant: "text-lg/semibold",
                    children: ["Grid (", t, "):"]
                }), (0, a.jsxs)(n.A, {
                    columns: t,
                    children: [(0, a.jsx)(i.A, {
                        ...h
                    }), (0, a.jsx)(i.A, {
                        ...h
                    })]
                })]
            }), (0, a.jsxs)(s.A, {
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children: "Stack:"
                }), (0, a.jsxs)(o.Kp, {
                    direction: "horizontal",
                    children: [(0, a.jsx)(i.A, {
                        ...h
                    }), (0, a.jsx)(i.A, {
                        ...h
                    }), (0, a.jsx)(i.A, {
                        ...h
                    }), (0, a.jsx)(i.A, {
                        ...h
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
        logoSrc: {
            label: "Logo Source",
            type: "text",
            defaultValue: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda"
        },
        supplementalImage: {
            label: "supplemental Image",
            type: "text",
            defaultValue: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png"
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
        columns: {
            label: "Columns",
            type: "number",
            defaultValue: 2
        }
    }
}