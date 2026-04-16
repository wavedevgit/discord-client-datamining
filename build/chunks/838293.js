/** chunk id: 838293 params = (module,exports,require) **/
n.d(t, {
    Ho: () => A,
    K7: () => h,
    f7: () => x
});
var i = n(419954),
    s = n(954571),
    l = n(115063),
    r = n(253932),
    a = n(780964),
    o = n(612025),
    d = n(112469),
    c = n(542457),
    u = n(355097),
    m = n(652215),
    g = n(985018),
    _ = n(395277);
let x = () => (0, d.Tx)() !== o.YG;

function h() {
    return g.intl.string(_.default.WhdCGP)
}
let A = (0, i.zD)(a.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: h,
    useSubtitle: () => g.intl.string(_.default.UQ9RHJ),
    useValue: () => {
        let e = (0, d.Tx)();
        return !r.JG.useSetting().includes(e)
    },
    setValue: e => {
        let t = o.xk.getState().selectedGuildId,
            n = (0, l.Kk)();
        e ? n.delete(t) : n.add(t), r.JG.updateSetting([...n]), s.default.track(m.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: c.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: u.bf.USER_SETTINGS_PRIVACY_SAFETY,
            guild_id: t
        })
    },
    usePredicate: x
})