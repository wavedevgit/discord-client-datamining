/** chunk id: 214676, original params: e,t,r (module,exports,require) **/
r.d(t, {
    L: () => v,
    T: () => y
}), r(896048);
var n = r(627968),
    l = r(64700),
    a = r(503698),
    s = r.n(a),
    o = r(397927),
    i = r(328006),
    c = r(334840),
    d = r(48736),
    u = r(610042),
    b = r(29086),
    p = r(203656),
    f = r(525104),
    m = r(176201),
    g = r(178758),
    _ = r(652215),
    x = r(743981),
    j = r(985018),
    h = r(273034),
    O = r(191017);

function y() {
    var e;
    let [t, r] = l.useState(() => {
        let e = Math.floor(Math.random() * g.Oz.length);
        return {
            primary_color: g.Oz[e].start,
            secondary_color: g.Oz[e].end,
            tertiary_color: null
        }
    }), {
        gradientStyle: a,
        gradientClassname: c
    } = (0, o.v5K)({
        colorStrings: (0, m.K3)(t),
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: !0
    });
    return (0, n.jsxs)("div", {
        className: h.kL,
        children: [(0, n.jsx)("div", {
            className: h.zC,
            children: (0, n.jsx)(b.V, {
                avatar: i.A,
                username: "Cherry",
                usernameStyle: a,
                usernameClassName: s()(c, O.q),
                message: j.intl.string(j.t["6OSasb"])
            })
        }), (0, n.jsx)(d.default, {
            defaultColor: _.TGz,
            colors: g.Oz,
            value: t.primary_color,
            secondaryValue: null != (e = t.secondary_color) ? e : void 0,
            onChange: e => {
                var n, l;
                return r((n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({}, t), l = l = {
                    primary_color: e
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                }), n))
            },
            onChangeGradientColors: e => r({
                primary_color: e[0],
                secondary_color: e[1],
                tertiary_color: null
            }),
            isGradient: !0
        })]
    })
}

function v(e) {
    let {
        guildId: t
    } = e, [r, a] = l.useState(x.bl.HEART), s = (0, f.A)(), o = l.useMemo(() => ({
        unlockedBadges: s.unlockedBadges.slice(0, 10),
        lockedBadges: []
    }), [s]);
    return (0, n.jsxs)("div", {
        className: h.kL,
        children: [(0, n.jsx)("div", {
            className: h.zC,
            children: (0, n.jsx)(b.V, {
                avatar: c.A,
                username: "Roka",
                usernameStyle: {
                    color: "var(--brand-400)"
                },
                message: j.intl.string(j.t["6OSasb"]),
                decorations: (0, n.jsx)(p.M, {
                    guildId: t,
                    tag: "GGEZ",
                    badge: r
                })
            })
        }), (0, n.jsx)(u.y, {
            selectedBadge: r,
            onBadgeClicked: a,
            badgeCollection: o
        })]
    })
}