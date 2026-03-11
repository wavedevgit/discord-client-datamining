/** chunk id: 654757 params = (module,exports,require) **/
n.d(t, {
    T: () => A
});
var i = n(419954),
    s = n(975571),
    l = n(780964),
    a = n(358776),
    r = n(240194),
    o = n(419882),
    d = n(266057),
    c = n(815669),
    u = n(246743),
    _ = n(652215),
    g = n(985018);
let A = (0, i.zZ)(l.X.MOTION_CATEGORY, {
    useTitle: () => g.intl.string(g.t.e3TR1b),
    useSubtitle: (0, a.Ci)("Motion") ? void 0 : () => g.intl.format(g.t["2l9U2j"], {
        helpdeskArticle: s.A.getArticleURL(_.MVz.REDUCED_MOTION)
    }),
    buildLayout: () => (0, a.Ci)("Motion") ? [c.z, u.W, o.R, r.b, d.S] : [u.W, c.z, o.R, r.b, d.S]
})