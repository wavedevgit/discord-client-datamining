/** chunk id: 121616 params = (module,exports,require) **/
n.d(t, {
    d: () => _
});
var i = n(64700),
    s = n(814278),
    l = n(419954),
    r = n(933297),
    a = n(723702),
    o = n(780964),
    d = n(179014),
    c = n(437690),
    u = n(985018);
let _ = (0, l.zZ)(o.X.VOICE_SECURITY_CATEGORY, {
    useTitle: () => u.intl.string(u.t.xVk85F),
    useInlineNotice: function() {
        return i.useMemo(() => ({
            type: r.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => u.intl.format(u.t["/6sFWa"], {
                helpArticle: (0, s.aW)()
            })
        }), [])
    },
    usePredicate: () => (0, a.isDesktop)(),
    buildLayout: () => [d.r, c.f]
})