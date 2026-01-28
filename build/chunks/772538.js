/** Chunk was on 5606 **/
/** chunk id: 772538, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(954571),
    s = n(975571),
    a = n(115063),
    o = n(253932),
    c = n(112469),
    d = n(871930),
    u = n(578746),
    p = n(542457),
    _ = n(355097),
    m = n(531525);
n(820575);
var g = n(652215),
    f = n(985018);

function b(e) {
    let {
        ingress: t,
        guildId: n
    } = e, c = o.pE.useSetting().includes(n), _ = i.useCallback(e => {
        let r = (0, a.CN)();
        e ? r.delete(n) : r.add(n), o.pE.updateSetting([...r]), l.default.track(g.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: p.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
            ingress: t,
            guild_id: n
        })
    }, [t, n]);
    return "0" === n ? null : (0, r.jsx)(d.h, {
        setting: m.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
        children: (0, r.jsx)(u.Ay, {
            title: f.intl.string(f.t["T+nevN"]),
            value: !c,
            onChange: _,
            note: f.intl.format(f.t.jXKQCu, {
                helpdeskArticle: s.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS)
            })
        })
    })
}

function h(e) {
    let {
        ingress: t = _.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: n
    } = e, i = (0, c.Tx)();
    return (0, r.jsx)(b, {
        ingress: t,
        guildId: null != n ? n : i
    })
}