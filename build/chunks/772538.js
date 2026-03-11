/** chunk id: 772538 params = (module,exports,require) **/
I.d(_, {
    A: () => r
});
var A = I(627968),
    S = I(64700),
    T = I(954571),
    C = I(975571),
    t = I(115063),
    O = I(253932),
    e = I(112469),
    R = I(871930),
    N = I(578746),
    n = I(542457),
    P = I(355097),
    L = I(531525);
I(820575);
var D = I(652215),
    i = I(985018);

function l(E) {
    let {
        ingress: _,
        guildId: I
    } = E, e = O.pE.useSetting().includes(I), P = S.useCallback(E => {
        let A = (0, t.CN)();
        E ? A.delete(I) : A.add(I), O.pE.updateSetting([...A]), T.default.track(D.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: n.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: _,
            guild_id: I
        })
    }, [_, I]);
    return "0" === I ? null : (0, A.jsx)(R.h, {
        setting: L.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
        children: (0, A.jsx)(N.Ay, {
            title: i.intl.string(i.t["T+nevN"]),
            value: !e,
            onChange: P,
            note: i.intl.format(i.t.jXKQCu, {
                helpdeskArticle: C.A.getArticleURL(D.MVz.ACTIVITY_STATUS_SETTINGS)
            })
        })
    })
}

function r(E) {
    let {
        ingress: _ = P.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: I
    } = E, S = (0, e.Tx)();
    return (0, A.jsx)(l, {
        ingress: _,
        guildId: I ?? S
    })
}