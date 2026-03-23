/** chunk id: 149854 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(397927),
    o = n(840120),
    a = n(998418),
    u = n(890942),
    d = n(722523),
    c = n(490557),
    p = n(634925),
    m = n(744201),
    _ = n(867060),
    A = n(568065),
    f = n(876380);

function g(e) {
    let {
        guildId: t,
        powerup: n
    } = e, [g, x] = i.useState(void 0);
    (0, _.A)(g);
    let [v, h] = i.useState(!1), E = (0, a.Ay)(t, n).type !== A.b_.INACTIVE, {
        textColor: b
    } = (0, m.A)(E), I = (0, o.M5)(t, "GuildPowerupPerkCard"), j = n.skuId === l.FB;
    return (0, r.jsxs)(p.h, {
        onHover: e => h(e),
        guildId: t,
        powerup: n,
        badge: j && I ? "beta" : void 0,
        children: [(0, r.jsx)(c.l, {
            className: f.Sl,
            powerup: n,
            isHovering: v
        }), (0, r.jsx)(u.Ft, {
            title: n.title,
            textColor: b,
            footer: (0, r.jsx)(p.A, {
                guildId: t,
                powerup: n
            }),
            children: (0, r.jsx)(s.Text, {
                className: f.h_,
                color: b,
                variant: "text-sm/medium",
                children: n.description
            })
        }), (0, r.jsx)(u.kd, {
            children: (0, r.jsx)(d.Ay, {
                guildId: t,
                powerup: n,
                onError: x
            })
        })]
    })
}