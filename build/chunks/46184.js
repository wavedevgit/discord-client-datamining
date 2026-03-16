/** chunk id: 46184 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(665260),
    a = n(93857),
    r = n(772927),
    o = n(871930),
    d = n(578746),
    c = n(115063),
    u = n(500470),
    _ = n(652215),
    m = n(985018);

function g() {
    let e = (0, u.k)() ?? void 0,
        t = a.up.useControlledSetting(e),
        n = s.useMemo(() => (0, c.Lx)(t), [t]);
    return null == e ? null : (0, i.jsxs)(r.A, {
        children: [(0, i.jsx)(o.h, {
            children: (0, i.jsx)(d.Ay, {
                title: m.intl.string(m.t["7x9dyE"]),
                value: n.all,
                onChange: t => a.up.updateControlledSetting(e, t ? _.yKI : _.yKI & ~_.dzt.NO_RELATION)
            })
        }), (0, i.jsx)(o.h, {
            children: (0, i.jsx)(d.Ay, {
                title: m.intl.string(m.t.NfeuZ3),
                value: n.all || n.mutualFriends,
                onChange: n => a.up.updateControlledSetting(e, n ? l.UI(t, _.dzt.MUTUAL_FRIENDS) : l.iE(t, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION))
            })
        }), (0, i.jsx)(o.h, {
            children: (0, i.jsx)(d.Ay, {
                title: m.intl.string(m.t.qsMfsH),
                value: n.all || n.mutualGuilds,
                onChange: n => a.up.updateControlledSetting(e, n ? l.UI(t, _.dzt.MUTUAL_GUILDS) : l.iE(t, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION))
            })
        })]
    })
}