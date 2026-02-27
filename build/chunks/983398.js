/** chunk id: 983398, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(158954),
    a = n(827734),
    u = n(397927),
    d = n(210273),
    c = n(998418),
    p = n(890942),
    m = n(722523),
    A = n(634925),
    _ = n(744201),
    f = n(867060),
    g = n(568065),
    x = n(652215),
    v = n(508155),
    h = n(333354),
    b = n(985018),
    j = n(876380),
    E = n(206188);

function I(e) {
    let t, {
        active: n,
        nextActive: l,
        position: i
    } = e;
    return t = n && !1 !== l ? g.z0.FULL : n && !1 === l ? g.z0.HALF : g.z0.NONE, (0, r.jsxs)("div", {
        className: E.progressContainer,
        children: [(0, r.jsx)("div", {
            className: s()(E.progress, E[i], E[t])
        }), (0, r.jsx)("div", {
            className: s()(E.boostContainer, j.JD, {
                [E.boostContainerActive]: n,
                [j.vu]: n
            }),
            children: (0, r.jsx)(u._Jp, {
                size: "sm",
                color: a.A.colors.ICON_STRONG
            })
        })]
    })
}

function w(e) {
    let {
        isActive: t,
        index: n
    } = e, {
        textColor: i,
        iconColor: s
    } = (0, _.A)(t), a = l.useMemo(() => {
        let e = v.t[n];
        if (null == e) return [];
        let t = e.tier === x.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
        return t?.map((e, t) => {
            let l = (0, d.X)(e.perkIcon);
            return (0, r.jsxs)("div", {
                className: E.perkRow,
                children: [(0, r.jsx)(l, {
                    color: s,
                    size: "sm"
                }), (0, r.jsx)(o.EYj, {
                    className: E.perkText,
                    color: i,
                    variant: "text-sm/medium",
                    children: e.getCopy()
                })]
            }, `perk-${n}-${t}`)
        })
    }, [n, s, i]);
    return (0, r.jsxs)("div", {
        className: E.perkRowContainer,
        children: [a, (0, r.jsx)("div", {
            className: E.perkRow,
            children: (0, r.jsx)(o.EYj, {
                color: i,
                variant: "text-sm/medium",
                children: b.intl.string(h.default.nIj3LZ)
            })
        })]
    })
}

function S(e) {
    let t, {
            guildId: n,
            index: i,
            powerup: s,
            nextPowerup: o
        } = e,
        a = (0, c.Ay)(n, s),
        u = (0, c.Ay)(n, o),
        d = a.type !== g.b_.INACTIVE,
        x = u.type !== g.b_.INACTIVE,
        v = a.type === g.b_.TIER_OVERRIDE_ACTIVATED,
        [h, b] = l.useState(void 0);
    (0, f.A)(h), t = 0 === i ? g.At.START : null == o ? g.At.END : g.At.MIDDLE;
    let {
        textColor: j
    } = (0, _.A)(d);
    return (0, r.jsxs)(A.h, {
        guildId: n,
        powerup: s,
        className: E.card,
        children: [(0, r.jsx)(I, {
            position: t,
            active: d,
            nextActive: null != o ? x : void 0
        }), (0, r.jsx)(p.Ft, {
            title: s.title,
            textColor: j,
            footer: !v && (0, r.jsx)(A.A, {
                className: E.footer,
                guildId: n,
                powerup: s
            }),
            children: (0, r.jsx)(w, {
                isActive: d,
                index: i
            })
        }), !v && (0, r.jsx)(p.kd, {
            children: (0, r.jsx)(m.Ay, {
                guildId: n,
                powerup: s,
                onError: b
            })
        })]
    })
}