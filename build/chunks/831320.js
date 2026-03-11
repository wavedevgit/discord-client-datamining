/** chunk id: 831320 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(665260),
    a = n(171316),
    r = n(115063),
    o = n(253932),
    d = n(871930),
    c = n(578746),
    u = n(531525),
    _ = n(652215),
    g = n(985018),
    A = n(842130);

function m() {
    let e = o.FA.useSetting(),
        t = s.useMemo(() => (0, r.Lx)(e), [e]),
        n = (0, a.uM)();
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.h, {
            setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
            children: (0, i.jsx)(c.Ay, {
                title: g.intl.string(g.t["7x9dyE"]),
                value: t.all,
                onChange: e => o.FA.updateSetting(e ? _.yKI : _.yKI & ~_.dzt.NO_RELATION),
                disabled: n,
                tooltipText: n ? g.intl.string(A.default["6Af/cw"]) : void 0
            })
        }), (0, i.jsx)(d.h, {
            setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
            children: (0, i.jsx)(c.Ay, {
                title: g.intl.string(g.t.NfeuZ3),
                value: t.all || t.mutualFriends,
                onChange: t => o.FA.updateSetting(t ? l.UI(e, _.dzt.MUTUAL_FRIENDS) : l.iE(e, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION)),
                disabled: n,
                tooltipText: n ? g.intl.string(A.default["6Af/cw"]) : void 0
            })
        }), (0, i.jsx)(d.h, {
            setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
            children: (0, i.jsx)(c.Ay, {
                title: g.intl.string(g.t.qsMfsH),
                value: t.all || t.mutualGuilds,
                onChange: t => o.FA.updateSetting(t ? l.UI(e, _.dzt.MUTUAL_GUILDS) : l.iE(e, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION)),
                disabled: n,
                tooltipText: n ? g.intl.string(A.default["6Af/cw"]) : void 0
            })
        })]
    })
}