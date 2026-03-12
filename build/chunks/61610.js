/** chunk id: 61610 params = (module,exports,require) **/
I.d(_, {
    A: () => r
});
var A = I(627968),
    S = I(64700),
    T = I(954571),
    C = I(115063),
    t = I(253932),
    O = I(112469),
    e = I(871930),
    R = I(578746),
    N = I(542457),
    n = I(355097),
    P = I(531525);
I(820575);
var L = I(652215),
    D = I(985018),
    i = I(730844);

function l(E) {
    let {
        ingress: _,
        guildId: I
    } = E, O = t.JG.useSetting().includes(I), n = S.useCallback(E => {
        let A = (0, C.Kk)();
        E ? A.delete(I) : A.add(I), t.JG.updateSetting([...A]), T.default.track(L.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: N.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: _,
            guild_id: I
        })
    }, [_, I]);
    return "0" === I ? null : (0, A.jsx)(e.h, {
        setting: P.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        children: (0, A.jsx)(R.Ay, {
            title: D.intl.string(i.default.WhdCGP),
            value: !O,
            onChange: n,
            note: D.intl.string(i.default.UQ9RHJ)
        })
    })
}

function r(E) {
    let {
        ingress: _ = n.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: I
    } = E, S = (0, O.Tx)();
    return (0, A.jsx)(l, {
        ingress: _,
        guildId: I ?? S
    })
}