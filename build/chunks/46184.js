/** chunk id: 46184, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(665260),
    s = n(93857),
    a = n(772927),
    o = n(871930),
    c = n(578746),
    d = n(115063),
    u = n(500470),
    _ = n(652215),
    p = n(985018);

function m() {
    var e;
    let t = null != (e = (0, u.k)()) ? e : void 0,
        n = s.up.useControlledSetting(t),
        m = i.useMemo(() => (0, d.Lx)(n), [n]);
    return null == t ? null : (0, r.jsxs)(a.A, {
        children: [(0, r.jsx)(o.h, {
            children: (0, r.jsx)(c.Ay, {
                title: p.intl.string(p.t["7x9dyE"]),
                value: m.all,
                onChange: e => s.up.updateControlledSetting(t, e ? _.yKI : _.yKI & ~_.dzt.NO_RELATION)
            })
        }), (0, r.jsx)(o.h, {
            children: (0, r.jsx)(c.Ay, {
                title: p.intl.string(p.t.NfeuZ3),
                value: m.all || m.mutualFriends,
                onChange: e => s.up.updateControlledSetting(t, e ? l.UI(n, _.dzt.MUTUAL_FRIENDS) : l.iE(n, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION))
            })
        }), (0, r.jsx)(o.h, {
            children: (0, r.jsx)(c.Ay, {
                title: p.intl.string(p.t.qsMfsH),
                value: m.all || m.mutualGuilds,
                onChange: e => s.up.updateControlledSetting(t, e ? l.UI(n, _.dzt.MUTUAL_GUILDS) : l.iE(n, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION))
            })
        })]
    })
}