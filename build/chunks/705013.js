/** chunk id: 705013 params = (module,exports,require) **/
n.d(t, {
    Ho: () => p,
    K7: () => x,
    f7: () => A
});
var i = n(419954),
    s = n(954571),
    l = n(115063),
    a = n(253932),
    r = n(780964),
    o = n(612025),
    d = n(112469),
    c = n(542457),
    u = n(355097),
    m = n(652215),
    _ = n(985018),
    g = n(536482);
let A = () => (0, d.Tx)() !== o.YG;

function x() {
    return _.intl.string(g.default.WhdCGP)
}
let p = (0, i.zD)(r.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: x,
    useSubtitle: () => _.intl.string(g.default.UQ9RHJ),
    useValue: () => {
        let e = (0, d.Tx)();
        return !a.JG.useSetting().includes(e)
    },
    setValue: e => {
        let t = o.xk.getState().selectedGuildId,
            n = (0, l.Kk)();
        e ? n.delete(t) : n.add(t), a.JG.updateSetting([...n]), s.default.track(m.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: c.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: u.bf.USER_SETTINGS_PRIVACY_SAFETY,
            guild_id: t
        })
    },
    usePredicate: A
})