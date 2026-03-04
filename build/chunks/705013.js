/** chunk id: 705013, original params: t,e,i (module,exports,require) **/
i.d(e, {
    H: () => g
});
var n = i(419954),
    l = i(954571),
    s = i(115063),
    a = i(253932),
    r = i(780964),
    u = i(612025),
    o = i(112469),
    d = i(542457),
    A = i(355097),
    T = i(652215),
    S = i(985018),
    E = i(536482);
let g = (0, n.zD)(r.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: () => S.intl.string(E.default.WhdCGP),
    useSubtitle: () => S.intl.string(E.default.UQ9RHJ),
    useValue: () => {
        let t = (0, o.Tx)();
        return !a.JG.useSetting().includes(t)
    },
    setValue: t => {
        let e = u.xk.getState().selectedGuildId,
            i = (0, s.Kk)();
        t ? i.delete(e) : i.add(e), a.JG.updateSetting([...i]), l.default.track(T.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: d.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: A.bf.USER_SETTINGS_PRIVACY_SAFETY,
            guild_id: e
        })
    },
    usePredicate: () => (0, o.Tx)() !== u.YG
})