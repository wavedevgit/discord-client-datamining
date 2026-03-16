/** chunk id: 772538 params = (module,exports,require) **/
_.d(e, {
    A: () => a
});
var E = _(627968),
    A = _(64700),
    I = _(954571),
    n = _(975571),
    S = _(115063),
    T = _(253932),
    C = _(112469),
    i = _(871930),
    l = _(578746),
    R = _(542457),
    r = _(355097),
    u = _(531525);
_(820575);
var s = _(652215),
    d = _(985018);

function N(t) {
    let {
        ingress: e,
        guildId: _
    } = t, C = T.pE.useSetting().includes(_), r = A.useCallback(t => {
        let E = (0, S.CN)();
        t ? E.delete(_) : E.add(_), T.pE.updateSetting([...E]), I.default.track(s.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: R.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: e,
            guild_id: _
        })
    }, [e, _]);
    return "0" === _ ? null : (0, E.jsx)(i.h, {
        setting: u.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
        children: (0, E.jsx)(l.Ay, {
            title: d.intl.string(d.t["T+nevN"]),
            value: !C,
            onChange: r,
            note: d.intl.format(d.t.jXKQCu, {
                helpdeskArticle: n.A.getArticleURL(s.MVz.ACTIVITY_STATUS_SETTINGS)
            })
        })
    })
}

function a(t) {
    let {
        ingress: e = r.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: _
    } = t, A = (0, C.Tx)();
    return (0, E.jsx)(N, {
        ingress: e,
        guildId: _ ?? A
    })
}