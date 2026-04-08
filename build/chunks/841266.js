/** chunk id: 841266 params = (module,exports,require) **/
n.d(t, {
    U: () => c
});
var a = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(151196),
    r = n(473336),
    o = n(557347);

function d(e) {
    let {
        yaml: t,
        label: n
    } = e, s = i.useCallback(() => {
        navigator.clipboard.writeText(t)
    }, [t]);
    return (0, a.jsxs)(l.BJc, {
        gap: 4,
        children: [(0, a.jsxs)(l.BJc, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            justify: "space-between",
            children: [(0, a.jsx)(l.EYj, {
                variant: "text-md/semibold",
                children: n
            }), (0, a.jsx)(l.K0, {
                icon: l.TdU,
                "aria-label": `Copy ${n} YAML`,
                onClick: s,
                variant: "secondary",
                size: "sm"
            })]
        }), (0, a.jsx)("pre", {
            className: o.RP,
            children: t
        })]
    })
}

function c(e) {
    let {
        allResolvedStops: t
    } = e, n = i.useMemo(() => s._V.map((e, n) => {
        let a;
        return a = s.F$.map(e => {
            let {
                value: a
            } = e, i = s.KC[a], l = t[a];
            return `  ${i}:
    color: ${(0,r.b5)(l.colors[n])}
    opacity: ${l.opacities[n]}`
        }).join("\n"), `type: background
colors:
${a}
gradient-colors:
  color-mix: false
codegen:
  web: true
  mobile: false`
    }), [t]);
    return (0, a.jsxs)(l.BJc, {
        gap: 16,
        children: [(0, a.jsx)(l.DZT, {
            variant: "heading-sm/semibold",
            children: "Token YAML"
        }), s._V.map((e, t) => (0, a.jsx)(d, {
            yaml: n[t],
            label: e
        }, e))]
    })
}