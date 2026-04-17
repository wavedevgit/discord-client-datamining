/** chunk id: 184247 params = (module,exports,require) **/
l.d(t, {
    x: () => d
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(219561),
    s = l(261225),
    i = l(673277),
    o = l(427941);
let d = {
    name: "BackgroundImage",
    id: "background-image",
    component: e => {
        let {
            backgroundImage: t,
            secondBackgroundImage: l
        } = e;
        return (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r.Text, {
                variant: "text-lg/semibold",
                children: "Background Image just takes children and displays them in with a background image behind them, and some padding to add inset"
            }), (0, a.jsx)(o.A, {
                backgroundImage: {
                    src: t
                },
                children: (0, a.jsx)(i.A, {
                    children: (0, a.jsx)(s.A, {
                        columns: 2,
                        children: (0, a.jsxs)(n.Kp, {
                            direction: "vertical",
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "heading-xxl/bold",
                                children: "What can I get with orbs?"
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: "Spend Orbs on exclusives or grab your favorites from the shop"
                            })]
                        })
                    })
                })
            }), (0, a.jsx)(i.A, {
                children: (0, a.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children: "It also automatically handles animated asset urls"
                })
            }), (0, a.jsx)(o.A, {
                backgroundImage: {
                    src: l
                },
                children: (0, a.jsx)(i.A, {
                    children: (0, a.jsx)(s.A, {
                        columns: 2,
                        children: (0, a.jsxs)(n.Kp, {
                            direction: "vertical",
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "heading-xxl/bold",
                                children: "What can I get with orbs?"
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: "Spend Orbs on exclusives or grab your favorites from the shop"
                            })]
                        })
                    })
                })
            })]
        })
    },
    controls: {
        backgroundImage: {
            label: "Background Image",
            type: "text",
            defaultValue: "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8"
        },
        secondBackgroundImage: {
            label: "Second Background Image",
            type: "text",
            defaultValue: "https://cdn.discordapp.com/assets/content/5029a9a78bdc28cef510f1bfdac9addb8b88664ecd81902baccba38d3e1104b0"
        }
    }
}