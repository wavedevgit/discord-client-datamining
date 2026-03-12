/** chunk id: 61610 params = (module,exports,require) **/
A.d(t, {
    A: () => d
});
var E = A(627968),
    e = A(64700),
    C = A(954571),
    T = A(115063),
    I = A(253932),
    S = A(112469),
    n = A(871930),
    R = A(578746),
    i = A(542457),
    l = A(355097),
    r = A(531525);
A(820575);
var N = A(652215),
    O = A(985018),
    u = A(730844);

function s(_) {
    let {
        ingress: t,
        guildId: A
    } = _, S = I.JG.useSetting().includes(A), l = e.useCallback(_ => {
        let E = (0, T.Kk)();
        _ ? E.delete(A) : E.add(A), I.JG.updateSetting([...E]), C.default.track(N.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: i.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: t,
            guild_id: A
        })
    }, [t, A]);
    return "0" === A ? null : (0, E.jsx)(n.h, {
        setting: r.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        children: (0, E.jsx)(R.Ay, {
            title: O.intl.string(u.default.WhdCGP),
            value: !S,
            onChange: l,
            note: O.intl.string(u.default.UQ9RHJ)
        })
    })
}

function d(_) {
    let {
        ingress: t = l.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: A
    } = _, e = (0, S.Tx)();
    return (0, E.jsx)(s, {
        ingress: t,
        guildId: A ?? e
    })
}