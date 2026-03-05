/** chunk id: 272835, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    H: () => u
});
var l = a(627968),
    r = a(64700),
    n = a(735438),
    s = a(397927),
    i = a(252561),
    o = a(720462),
    d = a(488669);
let c = [{
        id: "xxs",
        label: "xxs",
        value: "xxs"
    }, {
        id: "xs",
        label: "xs",
        value: "xs"
    }, {
        id: "sm",
        label: "sm",
        value: "sm"
    }, {
        id: "md",
        label: "md",
        value: "md"
    }, {
        id: "lg",
        label: "lg",
        value: "lg"
    }, {
        id: "xl",
        label: "xl",
        value: "xl"
    }, {
        id: "xxl",
        label: "xxl",
        value: "xxl"
    }, {
        id: "none",
        label: "0px",
        value: 0
    }, {
        id: "4px",
        label: "4px",
        value: 4
    }, {
        id: "6px",
        label: "6px",
        value: 6
    }, {
        id: "8px",
        label: "8px",
        value: 8
    }, {
        id: "12px",
        label: "12px",
        value: 12
    }, {
        id: "16px",
        label: "16px",
        value: 16
    }, {
        id: "20px",
        label: "20px",
        value: 20
    }, {
        id: "24px",
        label: "24px",
        value: 24
    }, {
        id: "32px",
        label: "32px",
        value: 32
    }, {
        id: "40px",
        label: "40px",
        value: 40
    }],
    u = {
        name: "Interactive H Scroll",
        id: "interactive-h-scroll",
        component: () => {
            let [e, t] = r.useState(15), [a, u] = r.useState(8), [x, h] = r.useState("xl"), [m, b] = r.useState(!0), p = r.useMemo(() => [...Array(e)].map((e, t) => (0, l.jsx)(s.DUT, {
                className: d.j,
                onClick: () => console.log(t),
                children: (0, l.jsxs)(s.BJc, {
                    direction: "vertical",
                    justify: "space-between",
                    align: "center",
                    children: [(0, l.jsx)("div", {
                        children: t
                    }), t % 3 == 0 && (0, l.jsx)(s.Button, {
                        onClick: () => console.log(`clicked button ${t}`),
                        text: "Click Me"
                    })]
                })
            }, t)), [e]);
            return (0, l.jsxs)("div", {
                children: [(0, l.jsx)(o.A, {
                    gap: a,
                    edgeFade: x,
                    hideActionsWhenDisabled: m,
                    children: p
                }), (0, l.jsx)(i.nB, {}), (0, l.jsxs)(i.MG, {
                    children: [(0, l.jsx)(s.Checkbox, {
                        checked: m,
                        onChange: () => b(!m),
                        label: "Hide Actions When Disabled"
                    }), (0, l.jsx)(s.ksK, {
                        type: "number",
                        min: 0,
                        value: e.toString(),
                        onChange: e => {
                            t((0, n.clamp)(+e, 0, 100))
                        },
                        label: "Children Count"
                    })]
                }), (0, l.jsx)(i.MG, {
                    children: (0, l.jsx)(s.l6P, {
                        value: a,
                        options: c,
                        onSelectionChange: u,
                        label: "Children Gap",
                        selectionMode: "single",
                        fullWidth: !0
                    })
                }), (0, l.jsx)(i.MG, {
                    children: (0, l.jsx)(s.l6P, {
                        value: x,
                        options: c,
                        onSelectionChange: h,
                        label: "Edge Fade Space",
                        selectionMode: "single",
                        fullWidth: !0
                    })
                })]
            })
        },
        controls: {}
    }