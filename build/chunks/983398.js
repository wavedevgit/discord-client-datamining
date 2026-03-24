/** chunk id: 983398 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(158954),
    a = n(827734),
    u = n(397927),
    d = n(210273),
    c = n(998418),
    p = n(890942),
    m = n(722523),
    _ = n(634925),
    f = n(744201),
    g = n(867060),
    x = n(568065),
    A = n(652215),
    v = n(508155),
    h = n(333354),
    E = n(985018),
    j = n(876380),
    b = n(206188);

function I(e) {
    let t, {
        active: n,
        nextActive: i,
        position: s
    } = e;
    return t = n && !1 !== i ? x.z0.FULL : n && !1 === i ? x.z0.HALF : x.z0.NONE, (0, r.jsxs)("div", {
        className: b.progressContainer,
        children: [(0, r.jsx)("div", {
            className: l()(b.progress, b[s], b[t])
        }), (0, r.jsx)("div", {
            className: l()(b.boostContainer, j.JD, {
                [b.boostContainerActive]: n,
                [j.vu]: n
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
        textColor: s,
        iconColor: l
    } = (0, f.A)(t), a = i.useMemo(() => {
        let e = v.t[n];
        if (null == e) return [];
        let t = e.tier === A.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
        return t?.map((e, t) => {
            let i = (0, d.X)(e.perkIcon);
            return (0, r.jsxs)("div", {
                className: b.perkRow,
                children: [(0, r.jsx)(i, {
                    color: l,
                    size: "sm"
                }), (0, r.jsx)(o.EYj, {
                    className: b.perkText,
                    color: s,
                    variant: "text-sm/medium",
                    children: e.getCopy()
                })]
            }, `perk-${n}-${t}`)
        })
    }, [n, l, s]);
    return (0, r.jsxs)("div", {
        className: b.perkRowContainer,
        children: [a, (0, r.jsx)("div", {
            className: b.perkRow,
            children: (0, r.jsx)(o.EYj, {
                color: s,
                variant: "text-sm/medium",
                children: E.intl.string(h.default.nIj3LZ)
            })
        })]
    })
}

function C(e) {
    let t, {
            guildId: n,
            index: s,
            powerup: l,
            nextPowerup: o
        } = e,
        a = (0, c.Ay)(n, l),
        u = (0, c.Ay)(n, o),
        d = a.type !== x.b_.INACTIVE,
        A = u.type !== x.b_.INACTIVE,
        v = a.type === x.b_.TIER_OVERRIDE_ACTIVATED,
        [h, E] = i.useState(void 0);
    (0, g.A)(h), t = 0 === s ? x.At.START : null == o ? x.At.END : x.At.MIDDLE;
    let {
        textColor: j
    } = (0, f.A)(d);
    return (0, r.jsxs)(_.h, {
        guildId: n,
        powerup: l,
        className: b.card,
        children: [(0, r.jsx)(I, {
            position: t,
            active: d,
            nextActive: null != o ? A : void 0
        }), (0, r.jsx)(p.Ft, {
            title: l.title,
            textColor: j,
            footer: !v && (0, r.jsx)(_.A, {
                className: b.footer,
                guildId: n,
                powerup: l
            }),
            children: (0, r.jsx)(S, {
                isActive: d,
                index: s
            })
        }), !v && (0, r.jsx)(p.kd, {
            children: (0, r.jsx)(m.Ay, {
                guildId: n,
                powerup: l,
                onError: E
            })
        })]
    })
}