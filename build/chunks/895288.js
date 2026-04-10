/** chunk id: 895288 params = (module,exports,require) **/
n.d(t, {
    K7: () => h,
    UK: () => A,
    f7: () => x
});
var i = n(419954),
    s = n(954571),
    l = n(975571),
    r = n(115063),
    a = n(253932),
    o = n(780964),
    d = n(612025),
    c = n(112469),
    u = n(542457),
    m = n(355097),
    g = n(652215),
    _ = n(985018);
let x = () => (0, c.Tx)() !== d.YG;

function h() {
    return _.intl.string(_.t["T+nevN"])
}
let A = (0, i.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: h,
    useSubtitle: () => _.intl.format(_.t.jXKQCu, {
        helpdeskArticle: l.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS)
    }),
    useValue: () => {
        let e = (0, c.Tx)();
        return !a.pE.useSetting().includes(e)
    },
    setValue: e => {
        let t = d.xk.getState().selectedGuildId,
            n = (0, r.CN)();
        e ? n.delete(t) : n.add(t), a.pE.updateSetting([...n]), s.default.track(g.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: u.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: m.bf.USER_SETTINGS_PRIVACY_SAFETY,
            guild_id: t
        })
    },
    usePredicate: x
})