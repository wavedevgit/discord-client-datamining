/** chunk id: 145996 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    r = n(463259),
    s = n(287809),
    d = n(985018),
    o = n(321547);
let c = e => {
    let {
        widget: t,
        userId: n
    } = e, c = (0, l.bG)([s.default], () => s.default.getUser(n));
    return null == c ? null : (0, a.jsxs)("div", {
        className: o.k,
        children: [(0, a.jsx)(i.Heading, {
            className: o.w,
            variant: "heading-sm/semibold",
            children: d.intl.string(d.t.SpsnDY)
        }), (0, a.jsx)(r.u, {
            widget: t,
            user: c,
            disableInteraction: !0
        })]
    })
}