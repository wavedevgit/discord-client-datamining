/** Chunk was on 33957 **/
/** chunk id: 293865, original params: e,n,l (module,exports,require) **/
l.d(n, {
    A: () => y
});
var t = l(627968),
    r = l(64700),
    a = l(503698),
    i = l.n(a),
    s = l(311907),
    c = l(397927),
    o = l(736653),
    d = l(263063),
    u = l(57991),
    m = l(961973),
    h = l(997509),
    f = l(855687),
    g = l(576705),
    x = l(486020),
    b = l(652215),
    j = l(985018),
    p = l(574885),
    A = l(66087),
    _ = l(540725);

function v(e) {
    let {
        guild: n
    } = e, {
        variant: l,
        icon: r,
        text: a
    } = n.features.has(b.GuildFeatures.BANNER) ? {
        variant: "overlay-secondary",
        icon: c.XGR,
        text: j.intl.string(j.t.b0y3DL)
    } : {
        variant: "expressive",
        icon: c._Jp,
        text: j.intl.string(j.t["+7XY31"])
    };
    return (0, t.jsx)("div", {
        className: p.SY,
        children: (0, t.jsx)(c.Button, {
            variant: l,
            icon: r,
            text: a,
            onClick: () => {
                h.A.open(n.id, b.BEX.ONBOARDING, void 0, b.nd0.SERVER_GUIDE)
            }
        })
    })
}
let y = r.memo(function(e) {
    let n, {
            guild: a,
            titleClassName: h
        } = e,
        {
            homeHeaderImage: y,
            isHomeHeaderImageSet: I
        } = {
            homeHeaderImage: n = r.useMemo(() => null == a ? null : x.Ay.getGuildHomeHeaderURL({
                id: a.id,
                homeHeader: a.homeHeader
            }), [a]),
            isHomeHeaderImageSet: null != n,
            homeHeaderScroll: 200 * (null != n)
        },
        N = (0, m.A2)(a.id),
        C = (0, s.bG)([g.A], () => (0, f.K)(g.A, a)),
        O = (0, o.Ay)();
    return (0, t.jsxs)("div", {
        className: p.wx,
        children: [(0, t.jsxs)("div", {
            className: p.w5,
            children: [(0, t.jsx)("div", {
                className: i()(p.NC, {
                    [p.KN]: !I
                }),
                style: {
                    backgroundImage: "url(".concat(I ? y : "dark" === O ? A : _, ")")
                }
            }), N && (0, t.jsx)(v, {
                guild: a
            })]
        }), (0, t.jsx)("div", {
            className: p.oB,
            children: (0, t.jsxs)("div", {
                className: h,
                children: [(0, t.jsx)(d.A, {
                    className: p.nr,
                    guild: a,
                    size: d.A.Sizes.XLARGE,
                    active: !0
                }), (0, t.jsx)(c.Fmo, {
                    children: (0, t.jsxs)("div", {
                        className: p.Bv,
                        children: [(0, t.jsx)(c.Heading, {
                            className: p.Bv,
                            variant: "heading-xxl/bold",
                            children: a.name
                        }), (0, t.jsx)(u.A, {
                            size: 24,
                            guild: a,
                            tooltipPosition: "bottom",
                            tooltipColor: c.STz.Colors.PRIMARY
                        }), C && (0, t.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p.ak,
                            children: (0, t.jsx)(c.Button, {
                                variant: "secondary",
                                text: j.intl.string(j.t.VINpSK),
                                onClick: () => (0, c.mMO)(async () => {
                                    let {
                                        default: e
                                    } = await Promise.all([l.e("43600"), l.e("65202")]).then(l.bind(l, 234355));
                                    return n => {
                                        var l, r;
                                        return (0, t.jsx)(e, (l = function(e) {
                                            for (var n = 1; n < arguments.length; n++) {
                                                var l = null != arguments[n] ? arguments[n] : {},
                                                    t = Object.keys(l);
                                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                                                    return Object.getOwnPropertyDescriptor(l, e).enumerable
                                                }))), t.forEach(function(n) {
                                                    var t;
                                                    t = l[n], n in e ? Object.defineProperty(e, n, {
                                                        value: t,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    }) : e[n] = t
                                                })
                                            }
                                            return e
                                        }({}, n), r = r = {
                                            guild: a,
                                            source: b.PE1.GUILD_HOME
                                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                                            var l = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var t = Object.getOwnPropertySymbols(e);
                                                l.push.apply(l, t)
                                            }
                                            return l
                                        })(Object(r)).forEach(function(e) {
                                            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
                                        }), l))
                                    }
                                })
                            })
                        })]
                    })
                })]
            })
        })]
    })
})