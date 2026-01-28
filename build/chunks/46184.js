/** Chunk was on 5606 **/
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
    p = n(652215),
    _ = n(985018);

function m() {
    var e;
    let t = null != (e = (0, u.k)()) ? e : void 0,
        n = s.up.useControlledSetting(t),
        m = i.useMemo(() => (0, d.Lx)(n), [n]);
    return null == t ? null : (0, r.jsxs)(a.A, {
        children: [(0, r.jsx)(o.h, {
            children: (0, r.jsx)(c.Ay, {
                title: _.intl.string(_.t["7x9dyE"]),
                value: m.all,
                onChange: e => s.up.updateControlledSetting(t, e ? p.yKI : p.yKI & ~p.dzt.NO_RELATION)
            })
        }), (0, r.jsx)(o.h, {
            children: (0, r.jsx)(c.Ay, {
                title: _.intl.string(_.t.NfeuZ3),
                value: m.all || m.mutualFriends,
                onChange: e => s.up.updateControlledSetting(t, e ? l.UI(n, p.dzt.MUTUAL_FRIENDS) : l.iE(n, p.dzt.MUTUAL_FRIENDS, p.dzt.NO_RELATION))
            })
        }), (0, r.jsx)(o.h, {
            children: (0, r.jsx)(c.Ay, {
                title: _.intl.string(_.t.qsMfsH),
                value: m.all || m.mutualGuilds,
                onChange: e => s.up.updateControlledSetting(t, e ? l.UI(n, p.dzt.MUTUAL_GUILDS) : l.iE(n, p.dzt.MUTUAL_GUILDS, p.dzt.NO_RELATION))
            })
        })]
    })
}