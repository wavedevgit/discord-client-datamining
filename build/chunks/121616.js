/** chunk id: 121616, original params: e,t,n (module,exports,require) **/
n.d(t, {
    d: () => u
});
var i = n(64700),
    s = n(814278),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(179014),
    d = n(437690),
    c = n(985018);
let u = (0, l.zZ)(r.X.VOICE_SECURITY_CATEGORY, {
    useTitle: () => c.intl.string(c.t.xVk85F),
    useInlineNotice: function() {
        return i.useMemo(() => ({
            type: a.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => c.intl.format(c.t["/6sFWa"], {
                helpArticle: (0, s.aW)()
            })
        }), [])
    },
    buildLayout: () => [o.r, d.f]
})