/** chunk id: 688927 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(985018),
    o = n(991764);
let c = e => {
    let {
        node: {
            header: t,
            subheader: n,
            button: c
        },
        isModeratorReport: u,
        isTidaReport: _ = !1,
        hideTitle: m = !1
    } = e, p = c?.type === "submit", h = l.useMemo(() => r.A.reactParserFor({
        ...r.A.defaultRules,
        link: s.B
    }), []);
    return (0, a.jsxs)("div", {
        className: o.N,
        children: [m || null == t || "" === t ? null : (0, a.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: t
        }), null != n && "" !== t ? (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            className: o.m,
            children: h(n)
        }) : null, p && !u && !_ && (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: d.intl.format(d.t.Q0tSKT, {})
        })]
    })
}