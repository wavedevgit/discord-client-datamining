/** Chunk was on 28979 **/
/** chunk id: 785048, original params: t,e,i (module,exports,require) **/
i.d(e, {
    U: () => g
}), i(896048);
var n = i(419954),
    l = i(954571),
    s = i(975571),
    r = i(115063),
    u = i(253932),
    a = i(780964),
    o = i(612025),
    T = i(112469),
    d = i(542457),
    A = i(355097),
    S = i(652215),
    E = i(985018);
let g = (0, n.zD)(a.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: () => E.intl.string(E.t["T+nevN"]),
    useSubtitle: () => E.intl.format(E.t.jXKQCu, {
        helpdeskArticle: s.A.getArticleURL(S.MVz.ACTIVITY_STATUS_SETTINGS)
    }),
    useValue: () => {
        let t = (0, T.Tx)();
        return !u.pE.useSetting().includes(t)
    },
    setValue: t => {
        let e = o.xk.getState().selectedGuildId,
            i = (0, r.CN)();
        t ? i.delete(e) : i.add(e), u.pE.updateSetting([...i]), l.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: d.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: A.bf.USER_SETTINGS_PRIVACY_SAFETY,
            guild_id: e
        })
    },
    usePredicate: () => (0, T.Tx)() !== o.YG
})