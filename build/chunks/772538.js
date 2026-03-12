/** chunk id: 772538 params = (module,exports,require) **/
A.d(t, {
    A: () => d
});
var E = A(627968),
    e = A(64700),
    C = A(954571),
    T = A(975571),
    I = A(115063),
    S = A(253932),
    n = A(112469),
    R = A(871930),
    i = A(578746),
    l = A(542457),
    r = A(355097),
    N = A(531525);
A(820575);
var O = A(652215),
    u = A(985018);

function s(_) {
    let {
        ingress: t,
        guildId: A
    } = _, n = S.pE.useSetting().includes(A), r = e.useCallback(_ => {
        let E = (0, I.CN)();
        _ ? E.delete(A) : E.add(A), S.pE.updateSetting([...E]), C.default.track(O.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: l.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: t,
            guild_id: A
        })
    }, [t, A]);
    return "0" === A ? null : (0, E.jsx)(R.h, {
        setting: N.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
        children: (0, E.jsx)(i.Ay, {
            title: u.intl.string(u.t["T+nevN"]),
            value: !n,
            onChange: r,
            note: u.intl.format(u.t.jXKQCu, {
                helpdeskArticle: T.A.getArticleURL(O.MVz.ACTIVITY_STATUS_SETTINGS)
            })
        })
    })
}

function d(_) {
    let {
        ingress: t = r.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: A
    } = _, e = (0, n.Tx)();
    return (0, E.jsx)(s, {
        ingress: t,
        guildId: A ?? e
    })
}