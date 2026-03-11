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
    g = n(160761),
    A = n(954571),
    m = n(543233),
    h = n(29570),
    p = n(975662),
    x = n(322631),
    E = n(784356),
    T = n(452910),
    S = n(652215),
    C = n(49999),
    I = n(985018),
    f = n(296388);
let b = s.memo(e => {
    let {
        name: t,
        canReveal: n = !0,
        dismissibleContentType: l,
        forceShadow: m,
        cardType: E
    } = e, T = e?.onCtaClick, v = (0, d.bG)([u.A], () => u.A.useReducedMotion), [O, j] = s.useState(!1), [R, y] = s.useState(!1), P = E === x.cJ.CARD_CAROUSEL_FIRST_ROW || E === x.cJ.CARD_CAROUSEL_SECOND_ROW || E === x.cJ.CARD_CAROUSEL_THIRD_ROW, L = (0, p.A)(), [D, G] = (0, g.DP)(null != l && n ? [l] : []), {
        easterEggLevel: M,
        isEasterEggTriggered: U,
        onHover: k,
        onUnhover: V
    } = (0, h.A)(5), w = s.useMemo(() => (0, r.debounce)(() => {
        A.default.track(S.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
            card_type: (0, r.snakeCase)(t)
        })
    }, 800), [t]), H = s.useMemo(() => (0, r.debounce)(() => {
        null != T && A.default.track(S.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
            card_type: (0, r.snakeCase)(t),
            function_name: (0, r.snakeCase)(T.name)
        })
    }, 800), [t, T]);
    e = {
        onMouseEnter: w,
        ...e,
        onCtaClick: null != T ? () => {
            T?.(), H()
        } : void 0
    };
    let B = D !== l || null == l || R;
    return (s.useEffect(() => {
        v && O && (y(!0), A.default.track(S.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
        }), null != l && G(C.i.TAKE_ACTION))
    }, [v, O, l, t, G]), (0, _.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    }), n) ? t === p.U.UPCOMING_DROP_UNTIMED ? (0, i.jsx)("div", {
        className: f.iQ,
        onMouseEnter: k,
        onFocus: k,
        onMouseLeave: V,
        onBlur: V,
        children: (0, i.jsx)("div", {
            className: a()(f.Rz, {
                [f.sT]: m
            }),
            children: (0, i.jsxs)("div", {
                className: a()(f.Ci, {
                    [f.BX]: !U,
                    [f.yg]: U,
                    [f.Ud]: U && 3 === M,
                    [f.VN]: v
                }),
                children: [(0, i.jsx)("div", {
                    className: f.He,
                    children: (0, i.jsx)(N, {
                        ...e,
                        className: f.Du
                    })
                }), (0, i.jsx)("div", {
                    className: f.ll,
                    children: (0, i.jsx)(N, {
                        ...e,
                        className: f.Du
                    })
                })]
            })
        })
    }) : B ? (0, i.jsx)("div", {
        className: f.iQ,
        children: (0, i.jsx)("div", {
            className: a()({
                [f.u9]: !P,
                [f.E$]: P,
                [f.sT]: m,
                [f.VN]: v
            }),
            children: (0, i.jsx)(N, {
                ...e
            })
        })
    }) : (0, i.jsx)("div", {
        className: f.iQ,
        children: (0, i.jsx)("div", {
            className: a()(f.Rz, {
                [f.sT]: m
            }),
            children: (0, i.jsxs)(c.DUT, {
                onClick: () => j(!0),
                className: a()(f.Ci, f.vk, {
                    [f.zq]: O,
                    [f.BX]: !R && !O,
                    [f.VN]: v
                }),
                onTransitionEnd: e => {
                    O && "transform" === e.propertyName && e.target.classList.contains(f.Ci) && (y(!0), A.default.track(S.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                        card_type: t
                    }), null != l && G(C.i.TAKE_ACTION))
                },
                children: [(0, i.jsx)("div", {
                    className: f.UF,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(N, {
                        ...e
                    })
                }), (0, i.jsx)("div", {
                    className: f.He,
                    children: (0, i.jsx)(N, {
                        ...L.upcomingDropUntimed,
                        pillText: ""
                    })
                }), (0, i.jsx)("div", {
                    className: f.ll,
                    children: (0, i.jsx)(N, {
                        ...e,
                        description: null
                    })
                }), (0, i.jsx)("div", {
                    className: f.Z7,
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: I.intl.string(I.t.dcztdU),
                        onClick: () => j(!0)
                    })
                })]
            })
        })
    }) : (0, i.jsx)(b, {
        ...L.upcomingDropUntimed,
        forceShadow: m
    })
});
b.displayName = "PremiumPerkCard";
let N = s.forwardRef((e, t) => {
    let {
        title: n,
        titleClassName: s,
        subtitle: l,
        description: r,
        descriptionCta: o,
        customContent: d,
        isPremiumGetCta: u,
        onCtaClick: _,
        onMouseEnter: g,
        className: A,
        perkComponent: h,
        cardVariant: p,
        cardType: S,
        onClick: C,
        backgroundImage: I,
        pillText: b,
        perkImage: N,
        imageOverlayText: v,
        hasNitroGradientBackground: O
    } = e, j = S === x.cJ.CARD_CAROUSEL_FIRST_ROW || S === x.cJ.CARD_CAROUSEL_SECOND_ROW || S === x.cJ.CARD_CAROUSEL_THIRD_ROW, R = null != r || null != o, y = (0, m.Q)(p);
    return (0, i.jsxs)(c.DUT, {
        className: a()(f.Nr, A, y.cardContainer?.className, {
            [f.vk]: null != C,
            [f.JP]: j,
            [f.NT]: O
        }),
        onMouseEnter: g,
        style: {
            backgroundImage: null != I ? `url(${I})` : void 0,
            backgroundPosition: null != I ? "bottom right" : void 0,
            backgroundRepeat: null != I ? "no-repeat" : void 0
        },
        onClick: C,
        children: [null != b && (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: f.Io,
            children: b
        }), (0, i.jsx)("div", {
            ref: t
        }), (0, i.jsx)(E.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            perkImage: N,
            isCarousel: j,
            descriptionCta: o,
            customContent: d,
            onCtaClick: _,
            perkComponent: h,
            subtitleClassName: f.Dc,
            cardVariant: p,
            imageOverlayText: v
        }), R && (0, i.jsx)(T.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            description: r,
            descriptionCta: o,
            isPremiumGetCta: u,
            onCtaClick: _,
            cardVariant: p,
            perkComponent: h
        }), (0, i.jsx)("div", {
            className: a()(f.Iv, f.G1),
            ref: t
        })]
    })
});
N.displayName = "PerkCardContent";
let v = b