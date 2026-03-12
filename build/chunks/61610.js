/** chunk id: 61610 params = (module,exports,require) **/
A.d(_, {
    A: () => V
});
var I = A(627968),
    T = A(64700),
    S = A(954571),
    t = A(115063),
    e = A(253932),
    C = A(112469),
    O = A(871930),
    R = A(578746),
    n = A(542457),
    N = A(355097),
    P = A(531525);
A(820575);
var i = A(652215),
    l = A(985018),
    r = A(730844);

function D(E) {
    let {
        ingress: _,
        guildId: A
    } = E, C = e.JG.useSetting().includes(A), N = T.useCallback(E => {
        let I = (0, t.Kk)();
        E ? I.delete(A) : I.add(A), e.JG.updateSetting([...I]), S.default.track(i.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: n.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: _,
            guild_id: A
        })
    }, [_, A]);
    return "0" === A ? null : (0, I.jsx)(O.h, {
        setting: P.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        children: (0, I.jsx)(R.Ay, {
            title: l.intl.string(r.default.WhdCGP),
            value: !C,
            onChange: N,
            note: l.intl.string(r.default.UQ9RHJ)
        })
    })
}

function V(E) {
    let {
        ingress: _ = N.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: A
    } = E, T = (0, C.Tx)();
    return (0, I.jsx)(D, {
        ingress: _,
        guildId: A ?? T
    })
}