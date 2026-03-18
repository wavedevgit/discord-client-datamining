/** chunk id: 61610 params = (module,exports,require) **/
e.d(_, {
    A: () => V
});
var E = e(627968),
    A = e(64700),
    I = e(954571),
    T = e(115063),
    S = e(253932),
    n = e(112469),
    C = e(871930),
    R = e(578746),
    i = e(542457),
    l = e(355097),
    r = e(531525);
e(820575);
var u = e(652215),
    d = e(985018),
    N = e(536482);

function s(t) {
    let {
        ingress: _,
        guildId: e
    } = t, n = S.JG.useSetting().includes(e), l = A.useCallback(t => {
        let E = (0, T.Kk)();
        t ? E.delete(e) : E.add(e), S.JG.updateSetting([...E]), I.default.track(u.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: i.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: _,
            guild_id: e
        })
    }, [_, e]);
    return "0" === e ? null : (0, E.jsx)(C.h, {
        setting: r.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        children: (0, E.jsx)(R.Ay, {
            title: d.intl.string(N.default.WhdCGP),
            value: !n,
            onChange: l,
            note: d.intl.string(N.default.UQ9RHJ)
        })
    })
}

function V(t) {
    let {
        ingress: _ = l.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: e
    } = t, A = (0, n.Tx)();
    return (0, E.jsx)(s, {
        ingress: _,
        guildId: e ?? A
    })
}