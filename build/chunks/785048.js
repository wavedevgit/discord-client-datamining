/** chunk id: 785048, original params: e,t,n (module,exports,require) **/
n.d(t, {
    U: () => A
});
var i = n(419954),
    s = n(954571),
    l = n(975571),
    a = n(115063),
    r = n(253932),
    o = n(780964),
    d = n(612025),
    c = n(112469),
    u = n(542457),
    _ = n(355097),
    g = n(652215),
    m = n(985018);
let A = (0, i.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: () => m.intl.string(m.t["T+nevN"]),
    useSubtitle: () => m.intl.format(m.t.jXKQCu, {
        helpdeskArticle: l.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS)
    }),
    useValue: () => {
        let e = (0, c.Tx)();
        return !r.pE.useSetting().includes(e)
    },
    setValue: e => {
        let t = d.xk.getState().selectedGuildId,
            n = (0, a.CN)();
        e ? n.delete(t) : n.add(t), r.pE.updateSetting([...n]), s.default.track(g.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: u.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: _.bf.USER_SETTINGS_PRIVACY_SAFETY,
            guild_id: t
        })
    },
    usePredicate: () => (0, c.Tx)() !== d.YG
})