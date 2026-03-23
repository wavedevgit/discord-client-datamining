/** chunk id: 180022 params = (module,exports,require) **/
n.d(t, {
    A: () => v
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
    _ = n(139286),
    m = n(160761),
    g = n(954571),
    A = n(543233),
    x = n(29570),
    h = n(975662),
    p = n(322631),
    T = n(784356),
    E = n(452910),
    S = n(652215),
    f = n(49999),
    C = n(985018),
    b = n(296388);
let N = s.memo(e => {
    let {
        name: t,
        canReveal: n = !0,
        dismissibleContentType: l,
        forceShadow: A,
        cardType: T
    } = e, E = e?.onCtaClick, v = (0, d.bG)([u.A], () => u.A.useReducedMotion), [j, y] = s.useState(!1), [R, O] = s.useState(!1), L = T === p.cJ.CARD_CAROUSEL_FIRST_ROW || T === p.cJ.CARD_CAROUSEL_SECOND_ROW || T === p.cJ.CARD_CAROUSEL_THIRD_ROW, D = (0, h.A)(), [P, M] = (0, m.DP)(null != l && n ? [l] : []), {
        easterEggLevel: G,
        isEasterEggTriggered: U,
        onHover: k,
        onUnhover: V
    } = (0, x.A)(5), w = s.useMemo(() => (0, r.debounce)(() => {
        g.default.track(S.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
            card_type: (0, r.snakeCase)(t)
        })
    }, 800), [t]), B = s.useMemo(() => (0, r.debounce)(() => {
        null != E && g.default.track(S.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
            card_type: (0, r.snakeCase)(t),
            function_name: (0, r.snakeCase)(E.name)
        })
    }, 800), [t, E]);
    e = {
        onMouseEnter: w,
        ...e,
        onCtaClick: null != E ? () => {
            E?.(), B()
        } : void 0
    };
    let H = P !== l || null == l || R;
    return (s.useEffect(() => {
        v && j && (O(!0), g.default.track(S.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
        }), null != l && M(f.i.TAKE_ACTION))
    }, [v, j, l, t, M]), (0, _.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    }), n) ? t === h.U.UPCOMING_DROP_UNTIMED ? (0, i.jsx)("div", {
        className: b.iQ,
        onMouseEnter: k,
        onFocus: k,
        onMouseLeave: V,
        onBlur: V,
        children: (0, i.jsx)("div", {
            className: a()(b.Rz, {
                [b.sT]: A
            }),
            children: (0, i.jsxs)("div", {
                className: a()(b.Ci, {
                    [b.BX]: !U,
                    [b.yg]: U,
                    [b.Ud]: U && 3 === G,
                    [b.VN]: v
                }),
                children: [(0, i.jsx)("div", {
                    className: b.He,
                    children: (0, i.jsx)(I, {
                        ...e,
                        className: b.Du
                    })
                }), (0, i.jsx)("div", {
                    className: b.ll,
                    children: (0, i.jsx)(I, {
                        ...e,
                        className: b.Du
                    })
                })]
            })
        })
    }) : H ? (0, i.jsx)("div", {
        className: b.iQ,
        children: (0, i.jsx)("div", {
            className: a()({
                [b.u9]: !L,
                [b.E$]: L,
                [b.sT]: A,
                [b.VN]: v
            }),
            children: (0, i.jsx)(I, {
                ...e
            })
        })
    }) : (0, i.jsx)("div", {
        className: b.iQ,
        children: (0, i.jsx)("div", {
            className: a()(b.Rz, {
                [b.sT]: A
            }),
            children: (0, i.jsxs)(c.DUT, {
                onClick: () => y(!0),
                className: a()(b.Ci, b.vk, {
                    [b.zq]: j,
                    [b.BX]: !R && !j,
                    [b.VN]: v
                }),
                onTransitionEnd: e => {
                    j && "transform" === e.propertyName && e.target.classList.contains(b.Ci) && (O(!0), g.default.track(S.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                        card_type: t
                    }), null != l && M(f.i.TAKE_ACTION))
                },
                children: [(0, i.jsx)("div", {
                    className: b.UF,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(I, {
                        ...e
                    })
                }), (0, i.jsx)("div", {
                    className: b.He,
                    children: (0, i.jsx)(I, {
                        ...D.upcomingDropUntimed,
                        pillText: ""
                    })
                }), (0, i.jsx)("div", {
                    className: b.ll,
                    children: (0, i.jsx)(I, {
                        ...e,
                        description: null
                    })
                }), (0, i.jsx)("div", {
                    className: b.Z7,
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: C.intl.string(C.t.dcztdU),
                        onClick: () => y(!0)
                    })
                })]
            })
        })
    }) : (0, i.jsx)(N, {
        ...D.upcomingDropUntimed,
        forceShadow: A
    })
});
N.displayName = "PremiumPerkCard";
let I = s.forwardRef((e, t) => {
    let {
        title: n,
        titleClassName: s,
        subtitle: l,
        description: r,
        descriptionCta: o,
        customContent: d,
        isPremiumGetCta: u,
        onCtaClick: _,
        onMouseEnter: m,
        className: g,
        perkComponent: x,
        cardVariant: h,
        cardType: S,
        onClick: f,
        backgroundImage: C,
        pillText: N,
        perkImage: I,
        imageOverlayText: v,
        hasNitroGradientBackground: j
    } = e, y = S === p.cJ.CARD_CAROUSEL_FIRST_ROW || S === p.cJ.CARD_CAROUSEL_SECOND_ROW || S === p.cJ.CARD_CAROUSEL_THIRD_ROW, R = null != r || null != o, O = (0, A.Q)(h);
    return (0, i.jsxs)(c.DUT, {
        className: a()(b.Nr, g, O.cardContainer?.className, {
            [b.vk]: null != f,
            [b.JP]: y,
            [b.NT]: j
        }),
        onMouseEnter: m,
        style: {
            backgroundImage: null != C ? `url(${C})` : void 0,
            backgroundPosition: null != C ? "bottom right" : void 0,
            backgroundRepeat: null != C ? "no-repeat" : void 0
        },
        onClick: f,
        children: [null != N && (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: b.Io,
            children: N
        }), (0, i.jsx)("div", {
            ref: t
        }), (0, i.jsx)(T.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            perkImage: I,
            isCarousel: y,
            descriptionCta: o,
            customContent: d,
            onCtaClick: _,
            perkComponent: x,
            subtitleClassName: b.Dc,
            cardVariant: h,
            imageOverlayText: v
        }), R && (0, i.jsx)(E.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            description: r,
            descriptionCta: o,
            isPremiumGetCta: u,
            onCtaClick: _,
            cardVariant: h,
            perkComponent: x
        }), (0, i.jsx)("div", {
            className: a()(b.Iv, b.G1),
            ref: t
        })]
    })
});
I.displayName = "PerkCardContent";
let v = N