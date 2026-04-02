/** chunk id: 808411 params = (module,exports,require) **/
l.d(t, {
    A: () => u
});
var a = l(627968),
    n = l(64700),
    r = l(735438),
    i = l(397927),
    o = l(914410),
    s = l(252561);
let u = () => {
    let [e, t] = n.useState(0), [l, u] = n.useState(4), [d, c] = n.useState(2), [p, m] = n.useState(o.fh.LIGHT), [h, x] = n.useState(o.qP.BLUE), [b, f] = n.useState("darkslategray"), [y, g] = n.useState("blanchedalmond"), [v, E] = n.useState("pink"), [_, C] = n.useState(!0), j = n.useMemo(() => Object.entries(o.fh).map(e => {
        let [t, l] = e;
        return {
            id: l,
            label: t,
            value: l
        }
    }), []), S = n.useMemo(() => Object.entries(o.qP).map(e => {
        let [t, l] = e;
        return {
            id: l,
            label: t,
            value: l
        }
    }), []);
    return (0, a.jsxs)(s.LB, {
        children: [(0, a.jsx)(o.Ay, {
            progress: d,
            minimum: e,
            maximum: l,
            weight: p,
            variant: h,
            override: {
                default: {
                    background: b,
                    gradientStart: y,
                    gradientEnd: v
                }
            },
            glowing: _
        }), (0, a.jsx)(s.nB, {}), (0, a.jsx)(s.MG, {
            children: (0, a.jsx)(i.ksK, {
                type: "number",
                value: d.toString(),
                onChange: t => {
                    c((0, r.clamp)(+t, e, l))
                },
                label: `Progress ( ${e} - ${l} ) `
            })
        }), (0, a.jsx)(s.MG, {
            children: (0, a.jsx)(i.ksK, {
                type: "number",
                value: e.toString(),
                onChange: e => {
                    0 > +e || +e >= l || (d < +e && c(+e), t(+e))
                },
                label: "Minimum Value"
            })
        }), (0, a.jsx)(s.MG, {
            children: (0, a.jsx)(i.ksK, {
                type: "number",
                value: l.toString(),
                onChange: t => {
                    +t <= e || 1 > +t || (d > +t && c(+t), u(+t))
                },
                label: "Maximum Value"
            })
        }), (0, a.jsx)(s.MG, {
            children: (0, a.jsx)(i.l6P, {
                label: "Variant",
                hideLabel: !0,
                placeholder: "Variant",
                onSelectionChange: e => {
                    null !== e && x(e)
                },
                value: h,
                options: S,
                selectionMode: "single",
                fullWidth: !0
            })
        }), (0, a.jsx)(s.MG, {
            children: (0, a.jsx)(i.l6P, {
                label: "Weight",
                selectionMode: "single",
                placeholder: "Weight",
                onSelectionChange: e => {
                    null !== e && m(e)
                },
                value: p,
                options: j
            })
        }), (0, a.jsx)(s.MG, {
            children: (0, a.jsx)(i.Checkbox, {
                label: "Glowing",
                checked: _,
                onChange: e => {
                    C(e)
                }
            })
        }), (0, a.jsx)(s.nB, {}), (0, a.jsx)(i.Text, {
            variant: "text-lg/semibold",
            color: "text-feedback-critical",
            children: "To use overrides, the variant must be set to UNSET"
        }), (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            children: 'Note: this component allows setting overrides per theme. For simplicity in this story, we only set the "default" override which applies to all themes'
        }), (0, a.jsx)(s.MG, {
            children: (0, a.jsx)(i.ksK, {
                value: b,
                onChange: e => {
                    f(e)
                },
                label: "Background (optional)"
            })
        }), (0, a.jsx)(s.MG, {
            children: (0, a.jsx)(i.ksK, {
                value: y,
                onChange: e => {
                    g(e)
                },
                label: "Gradient Start"
            })
        }), (0, a.jsx)(s.MG, {
            children: (0, a.jsx)(i.ksK, {
                value: v,
                onChange: e => {
                    E(e)
                },
                label: "Gradient End"
            })
        })]
    })
}