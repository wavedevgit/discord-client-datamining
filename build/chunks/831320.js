/** Chunk was on 2827 **/
/** chunk id: 831320, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(665260),
    s = n(171316),
    a = n(115063),
    o = n(253932),
    c = n(871930),
    d = n(578746),
    u = n(531525),
    _ = n(652215),
    p = n(985018),
    m = n(842130);

function g() {
    let e = o.FA.useSetting(),
        t = i.useMemo(() => (0, a.Lx)(e), [e]),
        n = (0, s.uM)();
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.h, {
            setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
            children: (0, r.jsx)(d.Ay, {
                title: p.intl.string(p.t["7x9dyE"]),
                value: t.all,
                onChange: e => o.FA.updateSetting(e ? _.yKI : _.yKI & ~_.dzt.NO_RELATION),
                disabled: n,
                tooltipText: n ? p.intl.string(m.default["6Af/cw"]) : void 0
            })
        }), (0, r.jsx)(c.h, {
            setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
            children: (0, r.jsx)(d.Ay, {
                title: p.intl.string(p.t.NfeuZ3),
                value: t.all || t.mutualFriends,
                onChange: t => o.FA.updateSetting(t ? l.UI(e, _.dzt.MUTUAL_FRIENDS) : l.iE(e, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION)),
                disabled: n,
                tooltipText: n ? p.intl.string(m.default["6Af/cw"]) : void 0
            })
        }), (0, r.jsx)(c.h, {
            setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
            children: (0, r.jsx)(d.Ay, {
                title: p.intl.string(p.t.qsMfsH),
                value: t.all || t.mutualGuilds,
                onChange: t => o.FA.updateSetting(t ? l.UI(e, _.dzt.MUTUAL_GUILDS) : l.iE(e, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION)),
                disabled: n,
                tooltipText: n ? p.intl.string(m.default["6Af/cw"]) : void 0
            })
        })]
    })
}