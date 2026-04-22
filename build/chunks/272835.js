/** chunk id: 272835 params = (module,exports,require) **/
l.d(t, {
    H: () => u
});
var a = l(627968),
    r = l(64700),
    n = l(735438),
    s = l(397927),
    o = l(252561),
    i = l(951707),
    d = l(614822);
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
            let [e, t] = r.useState(15), [l, u] = r.useState(8), [x, h] = r.useState("xl"), [m, b] = r.useState(!0), p = r.useMemo(() => [...Array(e)].map((e, t) => (0, a.jsx)(s.DUT, {
                className: d.j,
                onClick: () => console.log(t),
                children: (0, a.jsxs)(s.BJc, {
                    direction: "vertical",
                    justify: "space-between",
                    align: "center",
                    children: [(0, a.jsx)("div", {
                        children: t
                    }), t % 3 == 0 && (0, a.jsx)(s.Button, {
                        onClick: () => console.log(`clicked button ${t}`),
                        text: "Click Me"
                    })]
                })
            }, t)), [e]);
            return (0, a.jsxs)("div", {
                children: [(0, a.jsx)(i.A, {
                    gap: l,
                    edgeFade: x,
                    hideActionsWhenDisabled: m,
                    children: p
                }), (0, a.jsx)(o.nB, {}), (0, a.jsxs)(o.MG, {
                    children: [(0, a.jsx)(s.Checkbox, {
                        checked: m,
                        onChange: () => b(!m),
                        label: "Hide Actions When Disabled"
                    }), (0, a.jsx)(s.ksK, {
                        type: "number",
                        min: 0,
                        value: e.toString(),
                        onChange: e => {
                            t((0, n.clamp)(+e, 0, 100))
                        },
                        label: "Children Count"
                    })]
                }), (0, a.jsx)(o.MG, {
                    children: (0, a.jsx)(s.l6P, {
                        value: l,
                        options: c,
                        onSelectionChange: u,
                        label: "Children Gap",
                        selectionMode: "single",
                        fullWidth: !0
                    })
                }), (0, a.jsx)(o.MG, {
                    children: (0, a.jsx)(s.l6P, {
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