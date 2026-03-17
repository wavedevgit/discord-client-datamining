/** chunk id: 61610 params = (module,exports,require) **/
E.d(t, {
    A: () => s
});
var e = E(627968),
    A = E(64700),
    I = E(954571),
    S = E(115063),
    T = E(253932),
    n = E(112469),
    C = E(871930),
    R = E(578746),
    i = E(542457),
    l = E(355097),
    r = E(531525);
E(820575);
var N = E(652215),
    u = E(985018),
    d = E(536482);

function O(_) {
    let {
        ingress: t,
        guildId: E
    } = _, n = T.JG.useSetting().includes(E), l = A.useCallback(_ => {
        let e = (0, S.Kk)();
        _ ? e.delete(E) : e.add(E), T.JG.updateSetting([...e]), I.default.track(N.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: i.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: t,
            guild_id: E
        })
    }, [t, E]);
    return "0" === E ? null : (0, e.jsx)(C.h, {
        setting: r.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        children: (0, e.jsx)(R.Ay, {
            title: u.intl.string(d.default.WhdCGP),
            value: !n,
            onChange: l,
            note: u.intl.string(d.default.UQ9RHJ)
        })
    })
}

function s(_) {
    let {
        ingress: t = l.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: E
    } = _, A = (0, n.Tx)();
    return (0, e.jsx)(O, {
        ingress: t,
        guildId: E ?? A
    })
}