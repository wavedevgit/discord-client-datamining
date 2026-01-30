/** chunk id: 149854, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(512750),
    o = n(397927),
    s = n(840120),
    a = n(998418),
    u = n(890942),
    d = n(722523),
    c = n(490557),
    p = n(634925),
    m = n(744201),
    f = n(867060),
    v = n(568065),
    g = n(876380);

function A(e) {
    let {
        guildId: t,
        powerup: n
    } = e, [A, _] = l.useState(void 0);
    (0, f.A)(A);
    let [x, h] = l.useState(!1), b = (0, a.Ay)(t, n).type !== v.b_.INACTIVE, {
        textColor: j
    } = (0, m.A)(b), E = (0, s.M5)(t, "GuildPowerupPerkCard"), w = n.skuId === i.FB;
    return (0, r.jsxs)(p.h, {
        onHover: e => h(e),
        guildId: t,
        powerup: n,
        badge: w && E ? "beta" : void 0,
        children: [(0, r.jsx)(c.l, {
            className: g.Sl,
            powerup: n,
            isHovering: x
        }), (0, r.jsx)(u.Ft, {
            title: n.title,
            textColor: j,
            footer: (0, r.jsx)(p.A, {
                guildId: t,
                powerup: n
            }),
            children: (0, r.jsx)(o.Text, {
                className: g.h_,
                color: j,
                variant: "text-sm/medium",
                children: n.description
            })
        }), (0, r.jsx)(u.kd, {
            children: (0, r.jsx)(d.Ay, {
                guildId: t,
                powerup: n,
                onError: _
            })
        })]
    })
}