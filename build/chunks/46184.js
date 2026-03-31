/** chunk id: 46184 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(665260),
    a = n(93857),
    r = n(772927),
    o = n(106148),
    d = n(650832),
    c = n(115063),
    u = n(500470),
    m = n(652215),
    g = n(985018);

function _() {
    let e = (0, u.k)() ?? void 0,
        t = a.up.useControlledSetting(e),
        n = s.useMemo(() => (0, c.Lx)(t), [t]);
    return null == e ? null : (0, i.jsxs)(r.A, {
        children: [(0, i.jsx)(o.h, {
            children: (0, i.jsx)(d.Ay, {
                title: g.intl.string(g.t["7x9dyE"]),
                value: n.all,
                onChange: t => a.up.updateControlledSetting(e, t ? m.yKI : m.yKI & ~m.dzt.NO_RELATION)
            })
        }), (0, i.jsx)(o.h, {
            children: (0, i.jsx)(d.Ay, {
                title: g.intl.string(g.t.NfeuZ3),
                value: n.all || n.mutualFriends,
                onChange: n => a.up.updateControlledSetting(e, n ? l.UI(t, m.dzt.MUTUAL_FRIENDS) : l.iE(t, m.dzt.MUTUAL_FRIENDS, m.dzt.NO_RELATION))
            })
        }), (0, i.jsx)(o.h, {
            children: (0, i.jsx)(d.Ay, {
                title: g.intl.string(g.t.qsMfsH),
                value: n.all || n.mutualGuilds,
                onChange: n => a.up.updateControlledSetting(e, n ? l.UI(t, m.dzt.MUTUAL_GUILDS) : l.iE(t, m.dzt.MUTUAL_GUILDS, m.dzt.NO_RELATION))
            })
        })]
    })
}