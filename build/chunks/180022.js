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
    C = n(49999),
    f = n(985018),
    N = n(296388);
let I = s.memo(e => {
    let {
        name: t,
        canReveal: n = !0,
        dismissibleContentType: l,
        forceShadow: A,
        cardType: T
    } = e, E = e?.onCtaClick, v = (0, d.bG)([u.A], () => u.A.useReducedMotion), [j, y] = s.useState(!1), [O, R] = s.useState(!1), L = T === p.cJ.CARD_CAROUSEL_FIRST_ROW || T === p.cJ.CARD_CAROUSEL_SECOND_ROW || T === p.cJ.CARD_CAROUSEL_THIRD_ROW, D = (0, h.A)(), [P, G] = (0, m.DP)(null != l && n ? [l] : []), {
        easterEggLevel: M,
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
    let H = P !== l || null == l || O;
    return (s.useEffect(() => {
        v && j && (R(!0), g.default.track(S.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
        }), null != l && G(C.i.TAKE_ACTION))
    }, [v, j, l, t, G]), (0, _.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    }), n) ? t === h.U.UPCOMING_DROP_UNTIMED ? (0, i.jsx)("div", {
        className: N.iQ,
        onMouseEnter: k,
        onFocus: k,
        onMouseLeave: V,
        onBlur: V,
        children: (0, i.jsx)("div", {
            className: a()(N.Rz, {
                [N.sT]: A
            }),
            children: (0, i.jsxs)("div", {
                className: a()(N.Ci, {
                    [N.BX]: !U,
                    [N.yg]: U,
                    [N.Ud]: U && 3 === M,
                    [N.VN]: v
                }),
                children: [(0, i.jsx)("div", {
                    className: N.He,
                    children: (0, i.jsx)(b, {
                        ...e,
                        className: N.Du
                    })
                }), (0, i.jsx)("div", {
                    className: N.ll,
                    children: (0, i.jsx)(b, {
                        ...e,
                        className: N.Du
                    })
                })]
            })
        })
    }) : H ? (0, i.jsx)("div", {
        className: N.iQ,
        children: (0, i.jsx)("div", {
            className: a()({
                [N.u9]: !L,
                [N.E$]: L,
                [N.sT]: A,
                [N.VN]: v
            }),
            children: (0, i.jsx)(b, {
                ...e
            })
        })
    }) : (0, i.jsx)("div", {
        className: N.iQ,
        children: (0, i.jsx)("div", {
            className: a()(N.Rz, {
                [N.sT]: A
            }),
            children: (0, i.jsxs)(c.DUT, {
                onClick: () => y(!0),
                className: a()(N.Ci, N.vk, {
                    [N.zq]: j,
                    [N.BX]: !O && !j,
                    [N.VN]: v
                }),
                onTransitionEnd: e => {
                    j && "transform" === e.propertyName && e.target.classList.contains(N.Ci) && (R(!0), g.default.track(S.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                        card_type: t
                    }), null != l && G(C.i.TAKE_ACTION))
                },
                children: [(0, i.jsx)("div", {
                    className: N.UF,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(b, {
                        ...e
                    })
                }), (0, i.jsx)("div", {
                    className: N.He,
                    children: (0, i.jsx)(b, {
                        ...D.upcomingDropUntimed,
                        pillText: ""
                    })
                }), (0, i.jsx)("div", {
                    className: N.ll,
                    children: (0, i.jsx)(b, {
                        ...e,
                        description: null
                    })
                }), (0, i.jsx)("div", {
                    className: N.Z7,
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: f.intl.string(f.t.dcztdU),
                        onClick: () => y(!0)
                    })
                })]
            })
        })
    }) : (0, i.jsx)(I, {
        ...D.upcomingDropUntimed,
        forceShadow: A
    })
});
I.displayName = "PremiumPerkCard";
let b = s.forwardRef((e, t) => {
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
        onClick: C,
        backgroundImage: f,
        pillText: I,
        perkImage: b,
        imageOverlayText: v,
        hasNitroGradientBackground: j
    } = e, y = S === p.cJ.CARD_CAROUSEL_FIRST_ROW || S === p.cJ.CARD_CAROUSEL_SECOND_ROW || S === p.cJ.CARD_CAROUSEL_THIRD_ROW, O = null != r || null != o, R = (0, A.Q)(h);
    return (0, i.jsxs)(c.DUT, {
        className: a()(N.Nr, g, R.cardContainer?.className, {
            [N.vk]: null != C,
            [N.JP]: y,
            [N.NT]: j
        }),
        onMouseEnter: m,
        style: {
            backgroundImage: null != f ? `url(${f})` : void 0,
            backgroundPosition: null != f ? "bottom right" : void 0,
            backgroundRepeat: null != f ? "no-repeat" : void 0
        },
        onClick: C,
        children: [null != I && (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: N.Io,
            children: I
        }), (0, i.jsx)("div", {
            ref: t
        }), (0, i.jsx)(T.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            perkImage: b,
            isCarousel: y,
            descriptionCta: o,
            customContent: d,
            onCtaClick: _,
            perkComponent: x,
            subtitleClassName: N.Dc,
            cardVariant: h,
            imageOverlayText: v
        }), O && (0, i.jsx)(E.A, {
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
            className: a()(N.Iv, N.G1),
            ref: t
        })]
    })
});
b.displayName = "PerkCardContent";
let v = I