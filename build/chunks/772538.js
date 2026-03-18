/** chunk id: 772538 params = (module,exports,require) **/
e.d(_, {
    A: () => O
});
var E = e(627968),
    A = e(64700),
    I = e(954571),
    S = e(975571),
    T = e(115063),
    n = e(253932),
    C = e(112469),
    R = e(871930),
    i = e(578746),
    l = e(542457),
    r = e(355097),
    u = e(531525);
e(820575);
var N = e(652215),
    d = e(985018);

function s(t) {
    let {
        ingress: _,
        guildId: e
    } = t, C = n.pE.useSetting().includes(e), r = A.useCallback(t => {
        let E = (0, T.CN)();
        t ? E.delete(e) : E.add(e), n.pE.updateSetting([...E]), I.default.track(N.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: l.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: _,
            guild_id: e
        })
    }, [_, e]);
    return "0" === e ? null : (0, E.jsx)(R.h, {
        setting: u.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
        children: (0, E.jsx)(i.Ay, {
            title: d.intl.string(d.t["T+nevN"]),
            value: !C,
            onChange: r,
            note: d.intl.format(d.t.jXKQCu, {
                helpdeskArticle: S.A.getArticleURL(N.MVz.ACTIVITY_STATUS_SETTINGS)
            })
        })
    })
}

function O(t) {
    let {
        ingress: _ = r.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: e
    } = t, A = (0, C.Tx)();
    return (0, E.jsx)(s, {
        ingress: _,
        guildId: e ?? A
    })
}