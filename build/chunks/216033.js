/** chunk id: 216033 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(46054),
    s = n(861662),
    d = n(177983);

function o(e) {
    let {
        element: {
            data: {
                header: t,
                body: n,
                is_localized: o
            }
        }
    } = e, c = a.useMemo(() => r.A.reactParserFor({
        ...r.A.defaultRules,
        link: s.B
    }), []);
    return o && (null != t || null != n) ? (0, l.jsxs)("div", {
        children: [null != t && (0, l.jsx)(i.Heading, {
            variant: "heading-sm/semibold",
            color: "text-default",
            className: d.w,
            children: t
        }), null != n && (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            className: d.r,
            children: c(n)
        })]
    }) : null
}