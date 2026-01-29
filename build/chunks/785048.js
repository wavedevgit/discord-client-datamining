/** Chunk was on 4670 **/
/** chunk id: 785048, original params: e,t,i (module,exports,require) **/
i.d(t, {
    U: () => _
}), i(896048);
var n = i(419954),
    l = i(954571),
    s = i(975571),
    r = i(115063),
    a = i(253932),
    u = i(780964),
    o = i(612025),
    d = i(112469),
    T = i(542457),
    c = i(355097),
    A = i(652215),
    S = i(985018);
let _ = (0, n.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: () => S.intl.string(S.t["T+nevN"]),
    useSubtitle: () => S.intl.format(S.t.jXKQCu, {
        helpdeskArticle: s.A.getArticleURL(A.MVz.ACTIVITY_STATUS_SETTINGS)
    }),
    useValue: () => {
        let e = (0, d.Tx)();
        return !a.pE.useSetting().includes(e)
    },
    setValue: e => {
        let t = o.xk.getState().selectedGuildId,
            i = (0, r.CN)();
        e ? i.delete(t) : i.add(t), a.pE.updateSetting([...i]), l.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: T.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: c.bf.USER_SETTINGS_PRIVACY_SAFETY,
            guild_id: t
        })
    },
    usePredicate: () => (0, d.Tx)() !== o.YG
})