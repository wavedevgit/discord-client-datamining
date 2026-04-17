/** chunk id: 943188 params = (module,exports,require) **/
l.d(t, {
    d: () => i
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(673277);
let s = () => (0, a.jsx)("div", {
        style: {
            background: "rgba(255, 255, 255, 0.6)",
            height: 120
        }
    }),
    i = {
        name: "Section",
        id: "section",
        component: e => {
            let {
                verticalMargin: t,
                padding: l
            } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children: "Section is used to space out sections of the page. It takes a vertical margin to apply margin above and below, as well as padding to inset its children."
                }), (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("div", {
                        style: {
                            background: "red"
                        },
                        children: (0, a.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, a.jsx)(s, {})
                        })
                    }), (0, a.jsx)("div", {
                        style: {
                            background: "orange"
                        },
                        children: (0, a.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, a.jsx)(s, {})
                        })
                    }), (0, a.jsx)("div", {
                        style: {
                            background: "yellow"
                        },
                        children: (0, a.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, a.jsx)(s, {})
                        })
                    }), (0, a.jsx)("div", {
                        style: {
                            background: "green"
                        },
                        children: (0, a.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, a.jsx)(s, {})
                        })
                    }), (0, a.jsx)("div", {
                        style: {
                            background: "blue"
                        },
                        children: (0, a.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, a.jsx)(s, {})
                        })
                    }), (0, a.jsx)("div", {
                        style: {
                            background: "violet"
                        },
                        children: (0, a.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, a.jsx)(s, {})
                        })
                    })]
                })]
            })
        },
        controls: {
            verticalMargin: {
                label: "Vertical Margin",
                type: "number",
                defaultValue: 16
            },
            padding: {
                label: "Padding",
                type: "number",
                defaultValue: 8
            }
        }
    }