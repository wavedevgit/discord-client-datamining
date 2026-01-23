/** Chunk was on 28979 **/
/** chunk id: 198987, original params: t,e,i (module,exports,require) **/
i.d(e, {
    t: () => S
});
var n = i(64700),
    l = i(311907),
    s = i(419954),
    r = i(933297),
    u = i(803224),
    a = i(780964),
    o = i(840065),
    T = i(856134),
    A = i(811231),
    d = i(985018);
let S = (0, s.zZ)(a.X.SOUNDS_CATEGORY, {
    useTitle: () => d.intl.string(d.t.MKWyKc),
    useNotice: function() {
        let t = (0, l.bG)([u.A], () => u.A.getDisableAllSounds());
        return n.useMemo(() => {
            if (t) return {
                type: r.W.INLINE_NOTICE,
                noticeType: "warning",
                useText: () => d.intl.format(d.t.fRvixS, {
                    onClick: () => (0, o.openUserSettings)(a.X.NOTIFICATIONS_SOUNDS_CATEGORY)
                })
            }
        }, [t])
    },
    buildLayout: () => [A.Y, T.F]
})