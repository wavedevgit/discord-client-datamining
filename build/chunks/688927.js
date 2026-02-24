/** chunk id: 688927, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(985018),
    o = n(174161);
let c = e => {
    let {
        node: {
            header: t,
            subheader: n,
            button: c
        },
        isModeratorReport: u,
        isTidaReport: _ = !1
    } = e, m = c?.type === "submit", x = a.useMemo(() => r.A.reactParserFor({
        ...r.A.defaultRules,
        link: s.B
    }), []);
    return (0, l.jsxs)("div", {
        className: o.N,
        children: [null != t && "" !== t ? (0, l.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: t
        }) : null, null != n && "" !== t ? (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: x(n)
        }) : null, m && !u && !_ && (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: d.intl.format(d.t.Q0tSKT, {})
        })]
    })
}