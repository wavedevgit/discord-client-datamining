/** chunk id: 272835, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    H: () => u
});
var r = l(627968),
    a = l(64700),
    n = l(735438),
    s = l(397927),
    i = l(252561),
    o = l(720462),
    d = l(488669);
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
            let [e, t] = a.useState(15), [l, u] = a.useState(8), [h, m] = a.useState("xl"), [x, b] = a.useState(!0), p = a.useMemo(() => [...Array(e)].map((e, t) => (0, r.jsx)(s.DUT, {
                className: d.j,
                onClick: () => console.log(t),
                children: (0, r.jsxs)(s.BJc, {
                    direction: "vertical",
                    justify: "space-between",
                    align: "center",
                    children: [(0, r.jsx)("div", {
                        children: t
                    }), t % 3 == 0 && (0, r.jsx)(s.Button, {
                        onClick: () => console.log(`clicked button ${t}`),
                        text: "Click Me"
                    })]
                })
            }, t)), [e]);
            return (0, r.jsxs)("div", {
                children: [(0, r.jsx)(o.A, {
                    gap: l,
                    edgeFade: h,
                    hideActionsWhenDisabled: x,
                    children: p
                }), (0, r.jsx)(i.nB, {}), (0, r.jsxs)(i.MG, {
                    children: [(0, r.jsx)(s.Checkbox, {
                        checked: x,
                        onChange: () => b(!x),
                        label: "Hide Actions When Disabled"
                    }), (0, r.jsx)(s.ksK, {
                        type: "number",
                        min: 0,
                        value: e.toString(),
                        onChange: e => {
                            t((0, n.clamp)(+e, 0, 100))
                        },
                        label: "Children Count"
                    })]
                }), (0, r.jsx)(i.MG, {
                    children: (0, r.jsx)(s.l6P, {
                        value: l,
                        options: c,
                        onSelectionChange: u,
                        label: "Children Gap",
                        selectionMode: "single",
                        fullWidth: !0
                    })
                }), (0, r.jsx)(i.MG, {
                    children: (0, r.jsx)(s.l6P, {
                        value: h,
                        options: c,
                        onSelectionChange: m,
                        label: "Edge Fade Space",
                        selectionMode: "single",
                        fullWidth: !0
                    })
                })]
            })
        },
        controls: {}
    }