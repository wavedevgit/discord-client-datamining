/** chunk id: 772538 params = (module,exports,require) **/
I.d(_, {
    A: () => r
});
var S = I(627968),
    A = I(64700),
    T = I(954571),
    C = I(975571),
    O = I(115063),
    t = I(253932),
    e = I(112469),
    R = I(871930),
    N = I(578746),
    n = I(542457),
    P = I(355097),
    D = I(531525);
I(820575);
var L = I(652215),
    i = I(985018);

function l(E) {
    let {
        ingress: _,
        guildId: I
    } = E, e = t.pE.useSetting().includes(I), P = A.useCallback(E => {
        let S = (0, O.CN)();
        E ? S.delete(I) : S.add(I), t.pE.updateSetting([...S]), T.default.track(L.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: n.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: _,
            guild_id: I
        })
    }, [_, I]);
    return "0" === I ? null : (0, S.jsx)(R.h, {
        setting: D.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
        children: (0, S.jsx)(N.Ay, {
            title: i.intl.string(i.t["T+nevN"]),
            value: !e,
            onChange: P,
            note: i.intl.format(i.t.jXKQCu, {
                helpdeskArticle: C.A.getArticleURL(L.MVz.ACTIVITY_STATUS_SETTINGS)
            })
        })
    })
}

function r(E) {
    let {
        ingress: _ = P.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: I
    } = E, A = (0, e.Tx)();
    return (0, S.jsx)(l, {
        ingress: _,
        guildId: I ?? A
    })
}