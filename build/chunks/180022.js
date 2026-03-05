/** chunk id: 180022, original params: e,t,n (module,exports,require) **/
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
    m = n(954571),
    A = n(543233),
    h = n(29570),
    p = n(975662),
    x = n(322631),
    E = n(784356),
    T = n(452910),
    S = n(652215),
    C = n(49999),
    f = n(985018),
    I = n(296388);
let b = s.memo(e => {
    let {
        name: t,
        canReveal: n = !0,
        dismissibleContentType: l,
        forceShadow: A,
        cardType: E
    } = e, T = e?.onCtaClick, v = (0, d.bG)([u.A], () => u.A.useReducedMotion), [j, O] = s.useState(!1), [R, y] = s.useState(!1), P = E === x.cJ.CARD_CAROUSEL_FIRST_ROW || E === x.cJ.CARD_CAROUSEL_SECOND_ROW || E === x.cJ.CARD_CAROUSEL_THIRD_ROW, L = (0, p.A)(), [D, G] = (0, g.DP)(null != l && n ? [l] : []), {
        easterEggLevel: M,
        isEasterEggTriggered: U,
        onHover: k,
        onUnhover: V
    } = (0, h.A)(5), w = s.useMemo(() => (0, r.debounce)(() => {
        m.default.track(S.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
            card_type: (0, r.snakeCase)(t)
        })
    }, 800), [t]), H = s.useMemo(() => (0, r.debounce)(() => {
        null != T && m.default.track(S.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
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
        v && j && (y(!0), m.default.track(S.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
        }), null != l && G(C.i.TAKE_ACTION))
    }, [v, j, l, t, G]), (0, _.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    }), n) ? t === p.U.UPCOMING_DROP_UNTIMED ? (0, i.jsx)("div", {
        className: I.iQ,
        onMouseEnter: k,
        onFocus: k,
        onMouseLeave: V,
        onBlur: V,
        children: (0, i.jsx)("div", {
            className: a()(I.Rz, {
                [I.sT]: A
            }),
            children: (0, i.jsxs)("div", {
                className: a()(I.Ci, {
                    [I.BX]: !U,
                    [I.yg]: U,
                    [I.Ud]: U && 3 === M,
                    [I.VN]: v
                }),
                children: [(0, i.jsx)("div", {
                    className: I.He,
                    children: (0, i.jsx)(N, {
                        ...e,
                        className: I.Du
                    })
                }), (0, i.jsx)("div", {
                    className: I.ll,
                    children: (0, i.jsx)(N, {
                        ...e,
                        className: I.Du
                    })
                })]
            })
        })
    }) : B ? (0, i.jsx)("div", {
        className: I.iQ,
        children: (0, i.jsx)("div", {
            className: a()({
                [I.u9]: !P,
                [I.E$]: P,
                [I.sT]: A,
                [I.VN]: v
            }),
            children: (0, i.jsx)(N, {
                ...e
            })
        })
    }) : (0, i.jsx)("div", {
        className: I.iQ,
        children: (0, i.jsx)("div", {
            className: a()(I.Rz, {
                [I.sT]: A
            }),
            children: (0, i.jsxs)(c.DUT, {
                onClick: () => O(!0),
                className: a()(I.Ci, I.vk, {
                    [I.zq]: j,
                    [I.BX]: !R && !j,
                    [I.VN]: v
                }),
                onTransitionEnd: e => {
                    j && "transform" === e.propertyName && e.target.classList.contains(I.Ci) && (y(!0), m.default.track(S.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                        card_type: t
                    }), null != l && G(C.i.TAKE_ACTION))
                },
                children: [(0, i.jsx)("div", {
                    className: I.UF,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(N, {
                        ...e
                    })
                }), (0, i.jsx)("div", {
                    className: I.He,
                    children: (0, i.jsx)(N, {
                        ...L.upcomingDropUntimed,
                        pillText: ""
                    })
                }), (0, i.jsx)("div", {
                    className: I.ll,
                    children: (0, i.jsx)(N, {
                        ...e,
                        description: null
                    })
                }), (0, i.jsx)("div", {
                    className: I.Z7,
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: f.intl.string(f.t.dcztdU),
                        onClick: () => O(!0)
                    })
                })]
            })
        })
    }) : (0, i.jsx)(b, {
        ...L.upcomingDropUntimed,
        forceShadow: A
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
        className: m,
        perkComponent: h,
        cardVariant: p,
        cardType: S,
        onClick: C,
        backgroundImage: f,
        pillText: b,
        perkImage: N,
        imageOverlayText: v,
        hasNitroGradientBackground: j
    } = e, O = S === x.cJ.CARD_CAROUSEL_FIRST_ROW || S === x.cJ.CARD_CAROUSEL_SECOND_ROW || S === x.cJ.CARD_CAROUSEL_THIRD_ROW, R = null != r || null != o, y = (0, A.Q)(p);
    return (0, i.jsxs)(c.DUT, {
        className: a()(I.Nr, m, y.cardContainer?.className, {
            [I.vk]: null != C,
            [I.JP]: O,
            [I.NT]: j
        }),
        onMouseEnter: g,
        style: {
            backgroundImage: null != f ? `url(${f})` : void 0,
            backgroundPosition: null != f ? "bottom right" : void 0,
            backgroundRepeat: null != f ? "no-repeat" : void 0
        },
        onClick: C,
        children: [null != b && (0, i.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: I.Io,
            children: b
        }), (0, i.jsx)("div", {
            ref: t
        }), (0, i.jsx)(E.A, {
            title: n,
            titleClassName: s,
            subtitle: l,
            perkImage: N,
            isCarousel: O,
            descriptionCta: o,
            customContent: d,
            onCtaClick: _,
            perkComponent: h,
            subtitleClassName: I.Dc,
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
            className: a()(I.Iv, I.G1),
            ref: t
        })]
    })
});
N.displayName = "PerkCardContent";
let v = b