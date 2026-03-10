/** chunk id: 983398 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(158954),
    o = n(827734),
    d = n(397927),
    u = n(210273),
    c = n(998418),
    m = n(890942),
    p = n(722523),
    _ = n(634925),
    x = n(744201),
    A = n(867060),
    f = n(568065),
    g = n(652215),
    v = n(508155),
    h = n(333354),
    b = n(985018),
    j = n(876380),
    E = n(206188);

function I(e) {
    let t, {
        active: n,
        nextActive: i,
        position: l
    } = e;
    return t = n && !1 !== i ? f.z0.FULL : n && !1 === i ? f.z0.HALF : f.z0.NONE, (0, r.jsxs)("div", {
        className: E.progressContainer,
        children: [(0, r.jsx)("div", {
            className: s()(E.progress, E[l], E[t])
        }), (0, r.jsx)("div", {
            className: s()(E.boostContainer, j.JD, {
                [E.boostContainerActive]: n,
                [j.vu]: n
            }),
            children: (0, r.jsx)(d._Jp, {
                size: "sm",
                color: o.A.colors.ICON_STRONG
            })
        })]
    })
}

function C(e) {
    let {
        isActive: t,
        index: n
    } = e, {
        textColor: l,
        iconColor: s
    } = (0, x.A)(t), o = i.useMemo(() => {
        let e = v.t[n];
        if (null == e) return [];
        let t = e.tier === g.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
        return t?.map((e, t) => {
            let i = (0, u.X)(e.perkIcon);
            return (0, r.jsxs)("div", {
                className: E.perkRow,
                children: [(0, r.jsx)(i, {
                    color: s,
                    size: "sm"
                }), (0, r.jsx)(a.EYj, {
                    className: E.perkText,
                    color: l,
                    variant: "text-sm/medium",
                    children: e.getCopy()
                })]
            }, `perk-${n}-${t}`)
        })
    }, [n, s, l]);
    return (0, r.jsxs)("div", {
        className: E.perkRowContainer,
        children: [o, (0, r.jsx)("div", {
            className: E.perkRow,
            children: (0, r.jsx)(a.EYj, {
                color: l,
                variant: "text-sm/medium",
                children: b.intl.string(h.default.nIj3LZ)
            })
        })]
    })
}

function S(e) {
    let t, {
            guildId: n,
            index: l,
            powerup: s,
            nextPowerup: a
        } = e,
        o = (0, c.Ay)(n, s),
        d = (0, c.Ay)(n, a),
        u = o.type !== f.b_.INACTIVE,
        g = d.type !== f.b_.INACTIVE,
        v = o.type === f.b_.TIER_OVERRIDE_ACTIVATED,
        [h, b] = i.useState(void 0);
    (0, A.A)(h), t = 0 === l ? f.At.START : null == a ? f.At.END : f.At.MIDDLE;
    let {
        textColor: j
    } = (0, x.A)(u);
    return (0, r.jsxs)(_.h, {
        guildId: n,
        powerup: s,
        className: E.card,
        children: [(0, r.jsx)(I, {
            position: t,
            active: u,
            nextActive: null != a ? g : void 0
        }), (0, r.jsx)(m.Ft, {
            title: s.title,
            textColor: j,
            footer: !v && (0, r.jsx)(_.A, {
                className: E.footer,
                guildId: n,
                powerup: s
            }),
            children: (0, r.jsx)(C, {
                isActive: u,
                index: l
            })
        }), !v && (0, r.jsx)(m.kd, {
            children: (0, r.jsx)(p.Ay, {
                guildId: n,
                powerup: s,
                onError: b
            })
        })]
    })
}