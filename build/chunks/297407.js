/** chunk id: 297407 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(777347),
    s = n(915491),
    a = n(985018),
    o = n(328737);

function d(e) {
    let {
        guildId: t
    } = e, n = (0, l.A)(t);
    return 0 === n.length ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.DZT, {
            className: o.w,
            variant: "eyebrow",
            color: "text-subtle",
            children: a.intl.string(a.t.yM9Krm)
        }), (0, r.jsx)(i.IpV, {
            className: o.k,
            fade: !0,
            children: n.map((e, t) => (0, r.jsx)(s.A, {
                boost: e
            }, `boost-activity-${t}`))
        })]
    })
}