/** chunk id: 149854 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(397927),
    a = n(840120),
    o = n(998418),
    d = n(890942),
    u = n(722523),
    c = n(490557),
    m = n(634925),
    p = n(744201),
    _ = n(867060),
    x = n(568065),
    A = n(772574);

function f(e) {
    let {
        guildId: t,
        powerup: n
    } = e, [f, g] = i.useState(void 0);
    (0, _.A)(f);
    let [v, h] = i.useState(!1), b = (0, o.Ay)(t, n).type !== x.b_.INACTIVE, {
        textColor: j
    } = (0, p.A)(b), E = (0, a.M5)(t, "GuildPowerupPerkCard"), I = n.skuId === l.FB;
    return (0, r.jsxs)(m.h, {
        onHover: e => h(e),
        guildId: t,
        powerup: n,
        badge: I && E ? "beta" : void 0,
        children: [(0, r.jsx)(c.l, {
            className: A.Sl,
            powerup: n,
            isHovering: v
        }), (0, r.jsx)(d.Ft, {
            title: n.title,
            textColor: j,
            footer: (0, r.jsx)(m.A, {
                guildId: t,
                powerup: n
            }),
            children: (0, r.jsx)(s.Text, {
                className: A.h_,
                color: j,
                variant: "text-sm/medium",
                children: n.description
            })
        }), (0, r.jsx)(d.kd, {
            children: (0, r.jsx)(u.Ay, {
                guildId: t,
                powerup: n,
                onError: g
            })
        })]
    })
}