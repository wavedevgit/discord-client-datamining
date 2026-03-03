/** chunk id: 216033, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    o = n(232409);

function d(e) {
    let {
        element: {
            data: {
                header: t,
                body: n,
                is_localized: d
            }
        }
    } = e, c = a.useMemo(() => r.A.reactParserFor({
        ...r.A.defaultRules,
        link: s.B
    }), []);
    return d && (null != t || null != n) ? (0, l.jsxs)("div", {
        children: [null != t && (0, l.jsx)(i.Heading, {
            variant: "heading-sm/semibold",
            color: "text-default",
            className: o.w,
            children: t
        }), null != n && (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            className: o.r,
            children: c(n)
        })]
    }) : null
}