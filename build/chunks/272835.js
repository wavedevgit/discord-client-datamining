/** chunk id: 272835, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    H: () => u
});
var r = l(627968),
    a = l(64700),
    n = l(735438),
    i = l(397927),
    s = l(252561),
    o = l(720462),
    d = l(309587);
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
            let [e, t] = a.useState(15), [l, u] = a.useState(8), [m, h] = a.useState("xl"), [x, p] = a.useState(!0), b = a.useMemo(() => [...Array(e)].map((e, t) => (0, r.jsx)(i.DUT, {
                className: d.j,
                onClick: () => console.log(t),
                children: (0, r.jsxs)(i.BJc, {
                    direction: "vertical",
                    justify: "space-between",
                    align: "center",
                    children: [(0, r.jsx)("div", {
                        children: t
                    }), t % 3 == 0 && (0, r.jsx)(i.Button, {
                        onClick: () => console.log(`clicked button ${t}`),
                        text: "Click Me"
                    })]
                })
            }, t)), [e]);
            return (0, r.jsxs)("div", {
                children: [(0, r.jsx)(o.A, {
                    gap: l,
                    edgeFade: m,
                    hideActionsWhenDisabled: x,
                    children: b
                }), (0, r.jsx)(s.nB, {}), (0, r.jsxs)(s.MG, {
                    children: [(0, r.jsx)(i.Checkbox, {
                        checked: x,
                        onChange: () => p(!x),
                        label: "Hide Actions When Disabled"
                    }), (0, r.jsx)(i.ksK, {
                        type: "number",
                        min: 0,
                        value: e.toString(),
                        onChange: e => {
                            t((0, n.clamp)(+e, 0, 100))
                        },
                        label: "Children Count"
                    })]
                }), (0, r.jsx)(s.MG, {
                    children: (0, r.jsx)(i.l6P, {
                        value: l,
                        options: c,
                        onSelectionChange: u,
                        label: "Children Gap",
                        selectionMode: "single",
                        fullWidth: !0
                    })
                }), (0, r.jsx)(s.MG, {
                    children: (0, r.jsx)(i.l6P, {
                        value: m,
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