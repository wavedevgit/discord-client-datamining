/** chunk id: 61610 params = (module,exports,require) **/
I.d(_, {
    A: () => r
});
var S = I(627968),
    A = I(64700),
    T = I(954571),
    C = I(115063),
    O = I(253932),
    t = I(112469),
    e = I(871930),
    R = I(578746),
    N = I(542457),
    n = I(355097),
    P = I(531525);
I(820575);
var D = I(652215),
    L = I(985018),
    i = I(730844);

function l(E) {
    let {
        ingress: _,
        guildId: I
    } = E, t = O.JG.useSetting().includes(I), n = A.useCallback(E => {
        let S = (0, C.Kk)();
        E ? S.delete(I) : S.add(I), O.JG.updateSetting([...S]), T.default.track(D.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: N.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: _,
            guild_id: I
        })
    }, [_, I]);
    return "0" === I ? null : (0, S.jsx)(e.h, {
        setting: P.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        children: (0, S.jsx)(R.Ay, {
            title: L.intl.string(i.default.WhdCGP),
            value: !t,
            onChange: n,
            note: L.intl.string(i.default.UQ9RHJ)
        })
    })
}

function r(E) {
    let {
        ingress: _ = n.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: I
    } = E, A = (0, t.Tx)();
    return (0, S.jsx)(l, {
        ingress: _,
        guildId: I ?? A
    })
}