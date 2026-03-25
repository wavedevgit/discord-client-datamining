/** chunk id: 297407 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(158954),
    s = n(777347),
    l = n(915491),
    o = n(985018),
    a = n(542899);

function d(e) {
    let {
        guildId: t
    } = e, n = (0, s.A)(t);
    return 0 === n.length ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.DZT, {
            className: a.w,
            variant: "eyebrow",
            color: "text-subtle",
            children: o.intl.string(o.t.yM9Krm)
        }), (0, r.jsx)(i.IpV, {
            className: a.k,
            fade: !0,
            children: n.map((e, t) => (0, r.jsx)(l.A, {
                boost: e
            }, `boost-activity-${t}`))
        })]
    })
}