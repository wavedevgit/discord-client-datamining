/** chunk id: 289588, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(934551),
    l = n(158954),
    s = n(827734),
    a = n(379512),
    o = n(568065),
    d = n(616944);

function u(e) {
    let {
        count: t,
        type: n
    } = e;
    return (0, r.jsxs)("div", {
        className: d.k,
        children: [(0, r.jsxs)("div", {
            className: d.N,
            children: [(0, r.jsx)(i.BoostGemIcon, {
                size: "sm",
                color: n !== o.yG.AVAILABLE ? s.A.colors.TEXT_MUTED : s.A.unsafe_rawColors.GUILD_BOOSTING_PINK
            }), (0, r.jsx)(l.DZT, {
                color: n !== o.yG.AVAILABLE ? "text-muted" : "text-strong",
                variant: "heading-lg/semibold",
                children: t
            })]
        }), (0, r.jsx)(l.EYj, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: (0, a.F)(t, n)
        })]
    })
}