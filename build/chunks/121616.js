/** chunk id: 121616, original params: t,e,i (module,exports,require) **/
i.d(e, {
    d: () => T
});
var n = i(64700),
    l = i(814278),
    s = i(419954),
    r = i(933297),
    u = i(780964),
    a = i(179014),
    o = i(437690),
    d = i(985018);
let T = (0, s.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
    useTitle: () => d.intl.string(d.t.xVk85F),
    useInlineNotice: function() {
        return n.useMemo(() => ({
            type: r.W.INLINE_NOTICE,
            noticeType: "info",
            useText: () => d.intl.format(d.t["/6sFWa"], {
                helpArticle: (0, l.aW)()
            })
        }), [])
    },
    buildLayout: () => [a.r, o.f]
})