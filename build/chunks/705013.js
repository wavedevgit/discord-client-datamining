/** Chunk was on 4670 **/
/** chunk id: 705013, original params: e,t,i (module,exports,require) **/
i.d(t, {
    H: () => _
}), i(896048);
var n = i(419954),
    l = i(954571),
    s = i(115063),
    r = i(253932),
    a = i(780964),
    u = i(612025),
    o = i(112469),
    d = i(542457),
    T = i(355097),
    c = i(652215),
    A = i(985018),
    S = i(536482);
let _ = (0, n.zD)(a.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: () => A.intl.string(S.default.WhdCGP),
    useSubtitle: () => A.intl.string(S.default.UQ9RHJ),
    useValue: () => {
        let e = (0, o.Tx)();
        return !r.JG.useSetting().includes(e)
    },
    setValue: e => {
        let t = u.xk.getState().selectedGuildId,
            i = (0, s.Kk)();
        e ? i.delete(t) : i.add(t), r.JG.updateSetting([...i]), l.default.track(c.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: d.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: T.bf.USER_SETTINGS_PRIVACY_SAFETY,
            guild_id: t
        })
    },
    usePredicate: () => (0, o.Tx)() !== u.YG
})