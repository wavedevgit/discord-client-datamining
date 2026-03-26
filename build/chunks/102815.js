/** chunk id: 102815 params = (module,exports,require) **/
a.d(t, {
    S: () => v
});
var r = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(735438),
    d = a(110259),
    o = a(732955),
    c = a(462887),
    u = a(397927),
    _ = a(736653),
    m = a(139286),
    p = a(531260),
    b = a(914410),
    f = a(954571),
    g = a(872725),
    h = a(857586),
    A = a(788868),
    x = a(652215),
    R = a(985018),
    C = a(130474);
let v = e => {
    let {
        id: t,
        title: a,
        description: i,
        caption: v,
        pillText: N,
        primaryAsset: I,
        primaryAssetClassName: S,
        backgroundAssetUrl: y,
        progress: T,
        ctaIcon: P,
        ctaIconPosition: j,
        ctaText: D,
        onCtaClick: O,
        subscriptionRequired: U,
        glowing: M = !1,
        progressGlowing: L = !1,
        featured: w,
        className: B,
        containerClassName: k,
        tabIndex: G = 0,
        blurTint: V
    } = e, W = (0, _.DP)(), {
        fractionalState: Y
    } = (0, p.A)();
    (0, m.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    });
    let H = n.useMemo(() => (0, l.debounce)(() => {
            f.default.track(x.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                card_type: (0, l.snakeCase)(a)
            })
        }, 800), [a]),
        F = n.useCallback(() => {
            null != O && (O(), f.default.track(x.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                card_type: (0, l.snakeCase)(a),
                function_name: (0, l.snakeCase)(O.name)
            }))
        }, [O, a]),
        K = U && Y === A.xc.FP_ONLY,
        z = !(0, l.isEmpty)(y),
        q = z && (0, c.q)(W),
        X = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        $ = K || !(0, l.isEmpty)(D);
    return (0, r.jsx)(o.NPJ, {
        theme: q ? x.NJ8.DARKER : void 0,
        children: e => (0, r.jsxs)(g.A, {
            id: t,
            tabIndex: G,
            onMouseEnter: H,
            cardType: u.sl2.PRIMARY,
            glowing: M,
            hueRotate: 25,
            glowAmount: (0, c.M)(W) ? 2 : 8,
            blurAmount: 10,
            className: s()(C.Ui, k, {
                [C.Tn]: z
            }),
            cardClassName: s()(C.Nr, e, B, {
                [C.j8]: w
            }),
            cardStyle: {
                backgroundImage: z ? `url(${y})` : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOrigin: "padding-box",
                backgroundClip: "padding-box"
            },
            children: [!(0, l.isEmpty)(N) && (0, r.jsx)(u.Text, {
                variant: "text-xs/bold",
                color: "badge-expressive-text-default",
                className: C.Io,
                children: N
            }), (0, r.jsxs)("div", {
                className: C.qh,
                children: [w && (0, r.jsx)("div", {
                    className: C.gW,
                    "aria-hidden": "true",
                    children: (0, r.jsx)(E, {
                        asset: I,
                        className: S
                    })
                }), (0, r.jsx)(E, {
                    asset: I,
                    className: S
                })]
            }), (0, r.jsxs)("div", {
                className: C.hQ,
                children: [(0, r.jsx)("div", {
                    className: C.u_,
                    style: {
                        "--custom-tint-color": V ?? X
                    },
                    "aria-hidden": !0
                }), (0, r.jsxs)("div", {
                    className: C.P_,
                    children: [K && (0, r.jsxs)("div", {
                        className: C.d_,
                        children: [(0, r.jsx)(u.tvc, {
                            size: "sm",
                            color: u.LU0.colors.ICON_MUTED
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.string(R.t.lHYDUu)
                        })]
                    }), !(0, l.isEmpty)(v) && (0, r.jsx)("div", {
                        className: C.OU,
                        children: "string" == typeof v ? (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: v
                        }) : v
                    }), (0, r.jsx)(u.Heading, {
                        variant: "heading-lg/semibold",
                        children: a
                    }), !(0, l.isEmpty)(i) && (0, r.jsxs)("div", {
                        className: C.Wi,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: C.h_,
                            children: i
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: C.XV,
                            inert: !0,
                            children: i
                        })]
                    }), null != T && (0, r.jsx)("div", {
                        className: C.oU,
                        children: (0, r.jsx)(b.Ay, {
                            variant: b.qP.BLUE,
                            progress: (0, l.clamp)(T, 0, 1),
                            maximum: 1,
                            glowing: L
                        })
                    }), $ && (0, r.jsx)("div", {
                        className: C.Cj
                    })]
                }), $ && (0, r.jsxs)("div", {
                    className: C.yk,
                    children: [K && (0, r.jsx)(h.A, {
                        fullWidth: !0,
                        defaultTextOverride: R.intl.string(R.t.sEAnVH)
                    }), !K && (0, r.jsx)(o.$nd, {
                        icon: P,
                        iconPosition: j,
                        text: D,
                        variant: !z && (0, c.q)(W) ? "primary" : "overlay-primary",
                        onClick: F
                    })]
                })]
            })]
        })
    })
};

function E(e) {
    let {
        asset: t,
        className: a
    } = e;
    return null == t || "" === t ? null : "string" == typeof t ? (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: s()(C.eq, a),
        draggable: "false"
    }) : t
}