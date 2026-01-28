/** Chunk was on 28979 **/
/** chunk id: 121616, original params: t,e,i (module,exports,require) **/
i.d(e, {
    d: () => d
});
var n = i(64700),
    l = i(814278),
    s = i(419954),
    r = i(933297),
    u = i(780964),
    a = i(179014),
    o = i(437690),
    T = i(985018);
let d = (0, s.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
    useTitle: () => T.intl.string(T.t.xVk85F),
    useInlineNotice: function() {
        return n.useMemo(() => ({
            type: r.W.INLINE_NOTICE,
            noticeType: "info",
            useText: () => T.intl.format(T.t["/6sFWa"], {
                helpArticle: (0, l.aW)()
            })
        }), [])
    },
    buildLayout: () => [a.r, o.f]
})