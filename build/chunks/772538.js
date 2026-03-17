/** chunk id: 772538 params = (module,exports,require) **/
E.d(t, {
    A: () => s
});
var e = E(627968),
    A = E(64700),
    I = E(954571),
    S = E(975571),
    T = E(115063),
    n = E(253932),
    C = E(112469),
    R = E(871930),
    i = E(578746),
    l = E(542457),
    r = E(355097),
    N = E(531525);
E(820575);
var u = E(652215),
    d = E(985018);

function O(_) {
    let {
        ingress: t,
        guildId: E
    } = _, C = n.pE.useSetting().includes(E), r = A.useCallback(_ => {
        let e = (0, T.CN)();
        _ ? e.delete(E) : e.add(E), n.pE.updateSetting([...e]), I.default.track(u.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: l.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: t,
            guild_id: E
        })
    }, [t, E]);
    return "0" === E ? null : (0, e.jsx)(R.h, {
        setting: N.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
        children: (0, e.jsx)(i.Ay, {
            title: d.intl.string(d.t["T+nevN"]),
            value: !C,
            onChange: r,
            note: d.intl.format(d.t.jXKQCu, {
                helpdeskArticle: S.A.getArticleURL(u.MVz.ACTIVITY_STATUS_SETTINGS)
            })
        })
    })
}

function s(_) {
    let {
        ingress: t = r.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: E
    } = _, A = (0, C.Tx)();
    return (0, e.jsx)(O, {
        ingress: t,
        guildId: E ?? A
    })
}