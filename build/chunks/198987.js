/** chunk id: 198987, original params: t,e,i (module,exports,require) **/
i.d(e, {
    t: () => c
});
var n = i(64700),
    l = i(311907),
    s = i(419954),
    r = i(933297),
    u = i(803224),
    a = i(780964),
    o = i(840065),
    d = i(856134),
    T = i(662128),
    A = i(811231),
    S = i(985018);
let c = (0, s.zZ)(a.X.SOUNDS_CATEGORY, {
    useTitle: () => S.intl.string(S.t.MKWyKc),
    useInlineNotice: function() {
        let t = (0, l.bG)([u.A], () => u.A.getDisableAllSounds());
        return n.useMemo(() => {
            if (t) return {
                type: r.W.INLINE_NOTICE,
                noticeType: "warning",
                useText: () => S.intl.format(S.t.fRvixS, {
                    onClick: () => (0, o.openUserSettings)(a.X.NOTIFICATIONS_SOUNDS_CATEGORY)
                })
            }
        }, [t])
    },
    buildLayout: () => [A.Y, d.F, T.D]
})