/** chunk id: 46184 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(665260),
    a = n(93857),
    r = n(106148),
    o = n(650832),
    d = n(115063),
    c = n(500470),
    u = n(677428),
    m = n(652215),
    g = n(985018);

function _() {
    let e = (0, c.k)() ?? void 0,
        t = a.up.useControlledSetting(e),
        n = s.useMemo(() => (0, d.Lx)(t), [t]);
    return null == e ? null : (0, i.jsxs)(u.A, {
        children: [(0, i.jsx)(r.h, {
            children: (0, i.jsx)(o.Ay, {
                title: g.intl.string(g.t["7x9dyE"]),
                value: n.all,
                onChange: t => a.up.updateControlledSetting(e, t ? m.yKI : m.yKI & ~m.dzt.NO_RELATION)
            })
        }), (0, i.jsx)(r.h, {
            children: (0, i.jsx)(o.Ay, {
                title: g.intl.string(g.t.NfeuZ3),
                value: n.all || n.mutualFriends,
                onChange: n => a.up.updateControlledSetting(e, n ? l.UI(t, m.dzt.MUTUAL_FRIENDS) : l.iE(t, m.dzt.MUTUAL_FRIENDS, m.dzt.NO_RELATION))
            })
        }), (0, i.jsx)(r.h, {
            children: (0, i.jsx)(o.Ay, {
                title: g.intl.string(g.t.qsMfsH),
                value: n.all || n.mutualGuilds,
                onChange: n => a.up.updateControlledSetting(e, n ? l.UI(t, m.dzt.MUTUAL_GUILDS) : l.iE(t, m.dzt.MUTUAL_GUILDS, m.dzt.NO_RELATION))
            })
        })]
    })
}