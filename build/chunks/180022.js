/** chunk id: 180022 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(110259),
    d = n(417597),
    c = n(397927),
    u = n(775602),
    m = n(139286),
    _ = n(160761),
    g = n(954571),
    A = n(543233),
    x = n(29570),
    p = n(975662),
    h = n(322631),
    f = n(784356),
    T = n(452910),
    E = n(652215),
    S = n(49999),
    b = n(985018),
    C = n(296388);
let N = s.memo(e => {
    let {
        name: t,
        canReveal: n = !0,
        dismissibleContentType: l,
        forceShadow: A,
        cardType: f
    } = e, T = e?.onCtaClick, I = (0, d.bG)([u.A], () => u.A.useReducedMotion), [j, y] = s.useState(!1), [O, R] = s.useState(!1), L = f === h.cJ.CARD_CAROUSEL_FIRST_ROW || f === h.cJ.CARD_CAROUSEL_SECOND_ROW || f === h.cJ.CARD_CAROUSEL_THIRD_ROW, P = (0, p.A)(), [D, M] = (0, _.DP)(null != l && n ? [l] : []), {
        easterEggLevel: G,
        isEasterEggTriggered: k,
        onHover: U,
        onUnhover: w
    } = (0, x.A)(5), V = s.useMemo(() => (0, r.debounce)(() => {
        g.default.track(E.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
            card_type: (0, r.snakeCase)(t)
        })
    }, 800), [t]), B = s.useMemo(() => (0, r.debounce)(() => {
        null != T && g.default.track(E.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
            card_type: (0, r.snakeCase)(t),
            function_name: (0, r.snakeCase)(T.name)
        })
    }, 800), [t, T]);
    e = {
        onMouseEnter: V,
        ...e,
        onCtaClick: null != T ? () => {
            T?.(), B()
        } : void 0
    };
    let F = D !== l || null == l || O;
    return (s.useEffect(() => {
        I && j && (R(!0), g.default.track(E.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
        }), null != l && M(S.i.TAKE_ACTION))
    }, [I, j, l, t, M]), (0, m.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    }), n) ? t === p.U.UPCOMING_DROP_UNTIMED ? (0, i.jsx)("div", {
        className: C.iQ,
        onMouseEnter: U,
        onFocus: U,
        onMouseLeave: w,
        onBlur: w,
        children: (0, i.jsx)("div", {
            className: a()(C.Rz, {
                [C.sT]: A
            }),
            children: (0, i.jsxs)("div", {
                className: a()(C.Ci, {
                    [C.BX]: !k,
                    [C.yg]: k,
                    [C.Ud]: k && 3 === G,
                    [C.VN]: I
                }),
                children: [(0, i.jsx)("div", {
                    className: C.He,
                    children: (0, i.jsx)(v, {
                        ...e,
                        className: C.Du
                    })
                }), (0, i.jsx)("div", {
                    className: C.ll,
                    children: (0, i.jsx)(v, {
                        ...e,
                        className: C.Du
                    })
                })]
            })
        })
    }) : F ? (0, i.jsx)("div", {
        className: C.iQ,
        children: (0, i.jsx)("div", {
            className: a()({
                [C.u9]: !L,
                [C.E$]: L,
                [C.sT]: A,
                [C.VN]: I
            }),
            children: (0, i.jsx)(v, {
                ...e
            })
        })
    }) : (0, i.jsx)("div", {
        className: C.iQ,
        children: (0, i.jsx)("div", {
            className: a()(C.Rz, {
                [C.sT]: A
            }),
            children: (0, i.jsxs)(c.DUT, {
                onClick: () => y(!0),
                className: a()(C.Ci, C.vk, {
                    [C.zq]: j,
                    [C.BX]: !O && !j,
                    [C.VN]: I
                }),
                onTransitionEnd: e => {
                    j && "transform" === e.propertyName && e.target.classList.contains(C.Ci) && (R(!0), g.default.track(E.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                        card_type: t
                    }), null != l && M(S.i.TAKE_ACTION))
                },
                children: [(0, i.jsx)("div", {
                    className: C.UF,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(v, {
                        ...e
                    })
                }), (0, i.jsx)("div", {
                    className: C.He,
                    children: (0, i.jsx)(v, {
                        ...P.upcomingDropUntimed,
                        pillText: ""
                    })
                }), (0, i.jsx)("div", {
                    className: C.ll,
                    children: (0, i.jsx)(v, {
                        ...e,
                        description: null
                    })
                }), (0, i.jsx)("div", {
                    className: C.Z7,
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: b.intl.string(b.t.dcztdU),
                        onClick: () => y(!0)
                    })
                })]
            })
        })
    }) : (0, i.jsx)(N, {
        ...P.upcomingDropUntimed,
        forceShadow: A
    })
});
N.displayName = "PremiumPerkCard";
let v = s.forwardRef((e, t) => {
    let {
        title: n,
        titleClassName: s,
        subtitle: l,
        description: r,
        descriptionCta: o,
        customContent: d,
        isPremiumGetCta: u,
        onCtaClick: m,
        onMouseEnter: _,
        className: g,
        perkComponent: x,
        cardVariant: p,
        cardType: E,
        onClick: S,
        backgroundImage: b,
        pillText: N,
        perkImage: v,
        imageOverlayText: I,
        hasNitroGradientBackground: j
    } = e, y = E === h.cJ.CARD_CAROUSEL_FIRST_ROW || E === h.cJ.CARD_CAROUSEL_SECOND_ROW || E === h.cJ.CARD_CAROUSEL_THIRD_ROW, O = null != r || null != o, R = (0, A.Q)(p);
    return (0, i.jsxs)(c.DUT, {
        className: a()(C.Nr, g, R.cardContainer?.className, {
            [C.vk]: null != S,
            [C.JP]: y,
            [C.NT]: j
        }),
        onMouseEnter: _,
        style: {
            backgroundImage: null != b ? `url(${b})` : void 0,
            backgroundPosition: null != b ? "bottom right" : void 0,
            backgroundRepeat: null != b ? "no-repeat" : void 0
        },
        onClick: S,
        children: [null != N && (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: C.Io,
            children: N
        }), (0, i.jsx)("div", {
            ref: t
        }), (0, i.jsx)(f.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            perkImage: v,
            isCarousel: y,
            descriptionCta: o,
            customContent: d,
            onCtaClick: m,
            perkComponent: x,
            subtitleClassName: C.Dc,
            cardVariant: p,
            imageOverlayText: I
        }), O && (0, i.jsx)(T.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            description: r,
            descriptionCta: o,
            isPremiumGetCta: u,
            onCtaClick: m,
            cardVariant: p,
            perkComponent: x
        }), (0, i.jsx)("div", {
            className: a()(C.Iv, C.G1),
            ref: t
        })]
    })
});
v.displayName = "PerkCardContent";
let I = N