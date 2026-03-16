/** chunk id: 61610 params = (module,exports,require) **/
_.d(e, {
    A: () => a
});
var E = _(627968),
    A = _(64700),
    I = _(954571),
    n = _(115063),
    S = _(253932),
    T = _(112469),
    C = _(871930),
    i = _(578746),
    l = _(542457),
    R = _(355097),
    r = _(531525);
_(820575);
var u = _(652215),
    s = _(985018),
    d = _(536482);

function N(t) {
    let {
        ingress: e,
        guildId: _
    } = t, T = S.JG.useSetting().includes(_), R = A.useCallback(t => {
        let E = (0, n.Kk)();
        t ? E.delete(_) : E.add(_), S.JG.updateSetting([...E]), I.default.track(u.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: l.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: e,
            guild_id: _
        })
    }, [e, _]);
    return "0" === _ ? null : (0, E.jsx)(C.h, {
        setting: r.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        children: (0, E.jsx)(i.Ay, {
            title: s.intl.string(d.default.WhdCGP),
            value: !T,
            onChange: R,
            note: s.intl.string(d.default.UQ9RHJ)
        })
    })
}

function a(t) {
    let {
        ingress: e = R.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: _
    } = t, A = (0, T.Tx)();
    return (0, E.jsx)(N, {
        ingress: e,
        guildId: _ ?? A
    })
}