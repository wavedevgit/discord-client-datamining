/** Chunk was on 88615 **/
/** chunk id: 983398, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    o = n.n(i),
    s = n(158954),
    a = n(827734),
    u = n(397927),
    d = n(210273),
    c = n(998418),
    p = n(890942),
    m = n(722523),
    f = n(634925),
    v = n(744201),
    g = n(867060),
    A = n(568065),
    _ = n(652215),
    x = n(508155),
    h = n(333354),
    b = n(985018),
    j = n(876380),
    E = n(206188);

function w(e) {
    let t, {
        active: n,
        nextActive: l,
        position: i
    } = e;
    return t = n && !1 !== l ? A.z0.FULL : n && !1 === l ? A.z0.HALF : A.z0.NONE, (0, r.jsxs)("div", {
        className: E.progressContainer,
        children: [(0, r.jsx)("div", {
            className: o()(E.progress, E[i], E[t])
        }), (0, r.jsx)("div", {
            className: o()(E.boostContainer, j.JD, {
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

function y(e) {
    let {
        isActive: t,
        index: n
    } = e, {
        textColor: i,
        iconColor: o
    } = (0, v.A)(t), a = l.useMemo(() => {
        let e = x.t[n];
        if (null == e) return [];
        let t = e.tier === _.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
        return null == t ? void 0 : t.map((e, t) => {
            let l = (0, d.X)(e.perkIcon);
            return (0, r.jsxs)("div", {
                className: E.perkRow,
                children: [(0, r.jsx)(l, {
                    color: o,
                    size: "sm"
                }), (0, r.jsx)(s.EYj, {
                    className: E.perkText,
                    color: i,
                    variant: "text-sm/medium",
                    children: e.getCopy()
                })]
            }, "perk-".concat(n, "-").concat(t))
        })
    }, [n, o, i]);
    return (0, r.jsxs)("div", {
        className: E.perkRowContainer,
        children: [a, (0, r.jsx)("div", {
            className: E.perkRow,
            children: (0, r.jsx)(s.EYj, {
                color: i,
                variant: "text-sm/medium",
                children: b.intl.string(h.default.nIj3LZ)
            })
        })]
    })
}

function I(e) {
    let t, {
            guildId: n,
            index: i,
            powerup: o,
            nextPowerup: s
        } = e,
        a = (0, c.Ay)(n, o),
        u = (0, c.Ay)(n, s),
        d = a.type !== A.b_.INACTIVE,
        _ = u.type !== A.b_.INACTIVE,
        x = a.type === A.b_.TIER_OVERRIDE_ACTIVATED,
        [h, b] = l.useState(void 0);
    (0, g.A)(h), t = 0 === i ? A.At.START : null == s ? A.At.END : A.At.MIDDLE;
    let {
        textColor: j
    } = (0, v.A)(d);
    return (0, r.jsxs)(f.h, {
        guildId: n,
        powerup: o,
        className: E.card,
        children: [(0, r.jsx)(w, {
            position: t,
            active: d,
            nextActive: null != s ? _ : void 0
        }), (0, r.jsx)(p.Ft, {
            title: o.title,
            textColor: j,
            footer: !x && (0, r.jsx)(f.A, {
                className: E.footer,
                guildId: n,
                powerup: o
            }),
            children: (0, r.jsx)(y, {
                isActive: d,
                index: i
            })
        }), !x && (0, r.jsx)(p.kd, {
            children: (0, r.jsx)(m.Ay, {
                guildId: n,
                powerup: o,
                onError: b
            })
        })]
    })
}