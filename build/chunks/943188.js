/** chunk id: 943188, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    d: () => s
});
var r = l(627968);
l(64700);
var a = l(397927),
    n = l(673277);
let i = () => (0, r.jsx)("div", {
        style: {
            background: "rgba(255, 255, 255, 0.6)",
            height: 120
        }
    }),
    s = {
        name: "Section",
        id: "section",
        component: e => {
            let {
                verticalMargin: t,
                padding: l
            } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(a.Text, {
                    variant: "text-lg/semibold",
                    children: "Section is used to space out sections of the page. It takes a vertical margin to apply margin above and below, as well as padding to inset its children."
                }), (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("div", {
                        style: {
                            background: "red"
                        },
                        children: (0, r.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, r.jsx)(i, {})
                        })
                    }), (0, r.jsx)("div", {
                        style: {
                            background: "orange"
                        },
                        children: (0, r.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, r.jsx)(i, {})
                        })
                    }), (0, r.jsx)("div", {
                        style: {
                            background: "yellow"
                        },
                        children: (0, r.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, r.jsx)(i, {})
                        })
                    }), (0, r.jsx)("div", {
                        style: {
                            background: "green"
                        },
                        children: (0, r.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, r.jsx)(i, {})
                        })
                    }), (0, r.jsx)("div", {
                        style: {
                            background: "blue"
                        },
                        children: (0, r.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, r.jsx)(i, {})
                        })
                    }), (0, r.jsx)("div", {
                        style: {
                            background: "violet"
                        },
                        children: (0, r.jsx)(n.A, {
                            verticalMargin: t,
                            padding: l,
                            children: (0, r.jsx)(i, {})
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