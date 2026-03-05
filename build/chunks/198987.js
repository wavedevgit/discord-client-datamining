/** chunk id: 198987, original params: e,t,n (module,exports,require) **/
n.d(t, {
    t: () => m
});
var i = n(64700),
    s = n(311907),
    l = n(419954),
    a = n(933297),
    r = n(803224),
    o = n(780964),
    d = n(840065),
    c = n(856134),
    u = n(662128),
    _ = n(811231),
    g = n(985018);
let m = (0, l.zZ)(o.X.SOUNDS_CATEGORY, {
    useTitle: () => g.intl.string(g.t.MKWyKc),
    useInlineNotice: function() {
        let e = (0, s.bG)([r.A], () => r.A.getDisableAllSounds());
        return i.useMemo(() => {
            if (e) return {
                type: a.lT.INLINE_NOTICE,
                noticeType: "warning",
                useText: () => g.intl.format(g.t.fRvixS, {
                    onClick: () => (0, d.openUserSettings)(o.X.NOTIFICATIONS_SOUNDS_CATEGORY)
                })
            }
        }, [e])
    },
    buildLayout: () => [_.Y, c.F, u.D]
})