/** chunk id: 772538 params = (module,exports,require) **/
A.d(_, {
    A: () => V
});
var I = A(627968),
    T = A(64700),
    S = A(954571),
    t = A(975571),
    e = A(115063),
    C = A(253932),
    O = A(112469),
    R = A(871930),
    n = A(578746),
    N = A(542457),
    P = A(355097),
    i = A(531525);
A(820575);
var l = A(652215),
    r = A(985018);

function D(E) {
    let {
        ingress: _,
        guildId: A
    } = E, O = C.pE.useSetting().includes(A), P = T.useCallback(E => {
        let I = (0, e.CN)();
        E ? I.delete(A) : I.add(A), C.pE.updateSetting([...I]), S.default.track(l.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: N.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: _,
            guild_id: A
        })
    }, [_, A]);
    return "0" === A ? null : (0, I.jsx)(R.h, {
        setting: i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
        children: (0, I.jsx)(n.Ay, {
            title: r.intl.string(r.t["T+nevN"]),
            value: !O,
            onChange: P,
            note: r.intl.format(r.t.jXKQCu, {
                helpdeskArticle: t.A.getArticleURL(l.MVz.ACTIVITY_STATUS_SETTINGS)
            })
        })
    })
}

function V(E) {
    let {
        ingress: _ = P.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: A
    } = E, T = (0, O.Tx)();
    return (0, I.jsx)(D, {
        ingress: _,
        guildId: A ?? T
    })
}