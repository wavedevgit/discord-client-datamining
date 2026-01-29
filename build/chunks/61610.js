/** Chunk was on 2827 **/
/** chunk id: 61610, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(954571),
    s = n(115063),
    a = n(253932),
    o = n(112469),
    c = n(871930),
    d = n(578746),
    u = n(542457),
    _ = n(355097),
    p = n(531525);
n(820575);
var m = n(652215),
    g = n(985018),
    A = n(536482);

function f(e) {
    let {
        ingress: t,
        guildId: n
    } = e, o = a.JG.useSetting().includes(n), _ = i.useCallback(e => {
        let r = (0, s.Kk)();
        e ? r.delete(n) : r.add(n), a.JG.updateSetting([...r]), l.default.track(m.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
            action: u.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
            ingress: t,
            guild_id: n
        })
    }, [t, n]);
    return "0" === n ? null : (0, r.jsx)(c.h, {
        setting: p.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        children: (0, r.jsx)(d.Ay, {
            title: g.intl.string(A.default.WhdCGP),
            value: !o,
            onChange: _,
            note: g.intl.string(A.default.UQ9RHJ)
        })
    })
}

function b(e) {
    let {
        ingress: t = _.bf.USER_SETTINGS_PRIVACY_SAFETY,
        guildId: n
    } = e, i = (0, o.Tx)();
    return (0, r.jsx)(f, {
        ingress: t,
        guildId: null != n ? n : i
    })
}