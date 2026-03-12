/** chunk id: 180022 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n(110259),
    d = n(417597),
    c = n(397927),
    u = n(775602),
    _ = n(139286),
    m = n(160761),
    g = n(954571),
    A = n(543233),
    h = n(29570),
    x = n(975662),
    p = n(322631),
    T = n(784356),
    E = n(452910),
    C = n(652215),
    S = n(49999),
    f = n(985018),
    N = n(538662);
let b = s.memo(e => {
    let {
        name: t,
        canReveal: n = !0,
        dismissibleContentType: l,
        forceShadow: A,
        cardType: T
    } = e, E = e?.onCtaClick, v = (0, d.bG)([u.A], () => u.A.useReducedMotion), [j, O] = s.useState(!1), [y, R] = s.useState(!1), P = T === p.cJ.CARD_CAROUSEL_FIRST_ROW || T === p.cJ.CARD_CAROUSEL_SECOND_ROW || T === p.cJ.CARD_CAROUSEL_THIRD_ROW, D = (0, x.A)(), [L, M] = (0, m.DP)(null != l && n ? [l] : []), {
        easterEggLevel: G,
        isEasterEggTriggered: U,
        onHover: k,
        onUnhover: V
    } = (0, h.A)(5), w = s.useMemo(() => (0, a.debounce)(() => {
        g.default.track(C.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
            card_type: (0, a.snakeCase)(t)
        })
    }, 800), [t]), B = s.useMemo(() => (0, a.debounce)(() => {
        null != E && g.default.track(C.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
            card_type: (0, a.snakeCase)(t),
            function_name: (0, a.snakeCase)(E.name)
        })
    }, 800), [t, E]);
    e = {
        onMouseEnter: w,
        ...e,
        onCtaClick: null != E ? () => {
            E?.(), B()
        } : void 0
    };
    let H = L !== l || null == l || y;
    return (s.useEffect(() => {
        v && j && (R(!0), g.default.track(C.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
        }), null != l && M(S.i.TAKE_ACTION))
    }, [v, j, l, t, M]), (0, _.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    }), n) ? t === x.U.UPCOMING_DROP_UNTIMED ? (0, i.jsx)("div", {
        className: N.iQ,
        onMouseEnter: k,
        onFocus: k,
        onMouseLeave: V,
        onBlur: V,
        children: (0, i.jsx)("div", {
            className: r()(N.Rz, {
                [N.sT]: A
            }),
            children: (0, i.jsxs)("div", {
                className: r()(N.Ci, {
                    [N.BX]: !U,
                    [N.yg]: U,
                    [N.Ud]: U && 3 === G,
                    [N.VN]: v
                }),
                children: [(0, i.jsx)("div", {
                    className: N.He,
                    children: (0, i.jsx)(I, {
                        ...e,
                        className: N.Du
                    })
                }), (0, i.jsx)("div", {
                    className: N.ll,
                    children: (0, i.jsx)(I, {
                        ...e,
                        className: N.Du
                    })
                })]
            })
        })
    }) : H ? (0, i.jsx)("div", {
        className: N.iQ,
        children: (0, i.jsx)("div", {
            className: r()({
                [N.u9]: !P,
                [N.E$]: P,
                [N.sT]: A,
                [N.VN]: v
            }),
            children: (0, i.jsx)(I, {
                ...e
            })
        })
    }) : (0, i.jsx)("div", {
        className: N.iQ,
        children: (0, i.jsx)("div", {
            className: r()(N.Rz, {
                [N.sT]: A
            }),
            children: (0, i.jsxs)(c.DUT, {
                onClick: () => O(!0),
                className: r()(N.Ci, N.vk, {
                    [N.zq]: j,
                    [N.BX]: !y && !j,
                    [N.VN]: v
                }),
                onTransitionEnd: e => {
                    j && "transform" === e.propertyName && e.target.classList.contains(N.Ci) && (R(!0), g.default.track(C.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                        card_type: t
                    }), null != l && M(S.i.TAKE_ACTION))
                },
                children: [(0, i.jsx)("div", {
                    className: N.UF,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(I, {
                        ...e
                    })
                }), (0, i.jsx)("div", {
                    className: N.He,
                    children: (0, i.jsx)(I, {
                        ...D.upcomingDropUntimed,
                        pillText: ""
                    })
                }), (0, i.jsx)("div", {
                    className: N.ll,
                    children: (0, i.jsx)(I, {
                        ...e,
                        description: null
                    })
                }), (0, i.jsx)("div", {
                    className: N.Z7,
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: f.intl.string(f.t.dcztdU),
                        onClick: () => O(!0)
                    })
                })]
            })
        })
    }) : (0, i.jsx)(b, {
        ...D.upcomingDropUntimed,
        forceShadow: A
    })
});
b.displayName = "PremiumPerkCard";
let I = s.forwardRef((e, t) => {
    let {
        title: n,
        titleClassName: s,
        subtitle: l,
        description: a,
        descriptionCta: o,
        customContent: d,
        isPremiumGetCta: u,
        onCtaClick: _,
        onMouseEnter: m,
        className: g,
        perkComponent: h,
        cardVariant: x,
        cardType: C,
        onClick: S,
        backgroundImage: f,
        pillText: b,
        perkImage: I,
        imageOverlayText: v,
        hasNitroGradientBackground: j
    } = e, O = C === p.cJ.CARD_CAROUSEL_FIRST_ROW || C === p.cJ.CARD_CAROUSEL_SECOND_ROW || C === p.cJ.CARD_CAROUSEL_THIRD_ROW, y = null != a || null != o, R = (0, A.Q)(x);
    return (0, i.jsxs)(c.DUT, {
        className: r()(N.Nr, g, R.cardContainer?.className, {
            [N.vk]: null != S,
            [N.JP]: O,
            [N.NT]: j
        }),
        onMouseEnter: m,
        style: {
            backgroundImage: null != f ? `url(${f})` : void 0,
            backgroundPosition: null != f ? "bottom right" : void 0,
            backgroundRepeat: null != f ? "no-repeat" : void 0
        },
        onClick: S,
        children: [null != b && (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: N.Io,
            children: b
        }), (0, i.jsx)("div", {
            ref: t
        }), (0, i.jsx)(T.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            perkImage: I,
            isCarousel: O,
            descriptionCta: o,
            customContent: d,
            onCtaClick: _,
            perkComponent: h,
            subtitleClassName: N.Dc,
            cardVariant: x,
            imageOverlayText: v
        }), y && (0, i.jsx)(E.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            description: a,
            descriptionCta: o,
            isPremiumGetCta: u,
            onCtaClick: _,
            cardVariant: x,
            perkComponent: h
        }), (0, i.jsx)("div", {
            className: r()(N.Iv, N.G1),
            ref: t
        })]
    })
});
I.displayName = "PerkCardContent";
let v = b