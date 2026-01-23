/** Chunk was on 58652 **/
/** chunk id: 145996, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(463259),
    s = n(287809),
    o = n(985018),
    d = n(395618);
let c = e => {
    let {
        widget: t,
        userId: n
    } = e, c = (0, r.bG)([s.default], () => s.default.getUser(n));
    return null == c ? null : (0, l.jsxs)("div", {
        className: d.k,
        children: [(0, l.jsx)(i.Heading, {
            className: d.w,
            variant: "heading-sm/semibold",
            children: o.intl.string(o.t.SpsnDY)
        }), (0, l.jsx)(a.u, {
            widget: t,
            user: c,
            disableInteraction: !0
        })]
    })
}