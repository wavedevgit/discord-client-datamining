/** chunk id: 149854, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(512750),
    s = n(397927),
    o = n(840120),
    a = n(998418),
    u = n(890942),
    d = n(722523),
    c = n(490557),
    p = n(634925),
    m = n(744201),
    A = n(867060),
    _ = n(568065),
    f = n(772574);

function g(e) {
    let {
        guildId: t,
        powerup: n
    } = e, [g, x] = l.useState(void 0);
    (0, A.A)(g);
    let [v, h] = l.useState(!1), b = (0, a.Ay)(t, n).type !== _.b_.INACTIVE, {
        textColor: j
    } = (0, m.A)(b), E = (0, o.M5)(t, "GuildPowerupPerkCard"), I = n.skuId === i.FB;
    return (0, r.jsxs)(p.h, {
        onHover: e => h(e),
        guildId: t,
        powerup: n,
        badge: I && E ? "beta" : void 0,
        children: [(0, r.jsx)(c.l, {
            className: f.Sl,
            powerup: n,
            isHovering: v
        }), (0, r.jsx)(u.Ft, {
            title: n.title,
            textColor: j,
            footer: (0, r.jsx)(p.A, {
                guildId: t,
                powerup: n
            }),
            children: (0, r.jsx)(s.Text, {
                className: f.h_,
                color: j,
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