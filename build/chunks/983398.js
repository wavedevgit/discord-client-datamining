/** chunk id: 983398 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(158954),
    a = n(827734),
    u = n(397927),
    d = n(210273),
    c = n(998418),
    p = n(890942),
    m = n(722523),
    _ = n(634925),
    A = n(744201),
    f = n(867060),
    g = n(568065),
    x = n(652215),
    v = n(508155),
    h = n(136708),
    E = n(985018),
    b = n(772574),
    I = n(956022);

function j(e) {
    let t, {
        active: n,
        nextActive: i,
        position: l
    } = e;
    return t = n && !1 !== i ? g.z0.FULL : n && !1 === i ? g.z0.HALF : g.z0.NONE, (0, r.jsxs)("div", {
        className: I.progressContainer,
        children: [(0, r.jsx)("div", {
            className: s()(I.progress, I[l], I[t])
        }), (0, r.jsx)("div", {
            className: s()(I.boostContainer, b.JD, {
                [I.boostContainerActive]: n,
                [b.vu]: n
            }),
            children: (0, r.jsx)(u._Jp, {
                size: "sm",
                color: a.A.colors.ICON_STRONG
            })
        })]
    })
}

function S(e) {
    let {
        isActive: t,
        index: n
    } = e, {
        textColor: l,
        iconColor: s
    } = (0, A.A)(t), a = i.useMemo(() => {
        let e = v.t[n];
        if (null == e) return [];
        let t = e.tier === x.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
        return t?.map((e, t) => {
            let i = (0, d.X)(e.perkIcon);
            return (0, r.jsxs)("div", {
                className: I.perkRow,
                children: [(0, r.jsx)(i, {
                    color: s,
                    size: "sm"
                }), (0, r.jsx)(o.EYj, {
                    className: I.perkText,
                    color: l,
                    variant: "text-sm/medium",
                    children: e.getCopy()
                })]
            }, `perk-${n}-${t}`)
        })
    }, [n, s, l]);
    return (0, r.jsxs)("div", {
        className: I.perkRowContainer,
        children: [a, (0, r.jsx)("div", {
            className: I.perkRow,
            children: (0, r.jsx)(o.EYj, {
                color: l,
                variant: "text-sm/medium",
                children: E.intl.string(h.default.nIj3LZ)
            })
        })]
    })
}

function C(e) {
    let t, {
            guildId: n,
            index: l,
            powerup: s,
            nextPowerup: o
        } = e,
        a = (0, c.Ay)(n, s),
        u = (0, c.Ay)(n, o),
        d = a.type !== g.b_.INACTIVE,
        x = u.type !== g.b_.INACTIVE,
        v = a.type === g.b_.TIER_OVERRIDE_ACTIVATED,
        [h, E] = i.useState(void 0);
    (0, f.A)(h), t = 0 === l ? g.At.START : null == o ? g.At.END : g.At.MIDDLE;
    let {
        textColor: b
    } = (0, A.A)(d);
    return (0, r.jsxs)(_.h, {
        guildId: n,
        powerup: s,
        className: I.card,
        children: [(0, r.jsx)(j, {
            position: t,
            active: d,
            nextActive: null != o ? x : void 0
        }), (0, r.jsx)(p.Ft, {
            title: s.title,
            textColor: b,
            footer: !v && (0, r.jsx)(_.A, {
                className: I.footer,
                guildId: n,
                powerup: s
            }),
            children: (0, r.jsx)(S, {
                isActive: d,
                index: l
            })
        }), !v && (0, r.jsx)(p.kd, {
            children: (0, r.jsx)(m.Ay, {
                guildId: n,
                powerup: s,
                onError: E
            })
        })]
    })
}