/** chunk id: 102815 params = (module,exports,require) **/
a.d(t, {
    S: () => E
});
var n = a(627968),
    r = a(64700),
    s = a(503698),
    i = a.n(s),
    d = a(735438),
    l = a(110259),
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
let E = e => {
    let {
        id: t,
        title: a,
        description: s,
        caption: E,
        pillText: N,
        primaryAsset: I,
        primaryAssetClassName: T,
        backgroundAssetUrl: S,
        progress: y,
        ctaIcon: P,
        ctaIconPosition: j,
        ctaText: D,
        onCtaClick: U,
        subscriptionRequired: O,
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
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    });
    let H = r.useMemo(() => (0, d.debounce)(() => {
            f.default.track(x.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                card_type: (0, d.snakeCase)(a)
            })
        }, 800), [a]),
        F = r.useCallback(() => {
            null != U && (U(), f.default.track(x.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                card_type: (0, d.snakeCase)(a),
                function_name: (0, d.snakeCase)(U.name)
            }))
        }, [U, a]),
        K = O && Y === A.xc.FP_ONLY,
        X = !(0, d.isEmpty)(S),
        q = X && (0, c.q)(W),
        z = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        $ = K || !(0, d.isEmpty)(D);
    return (0, n.jsx)(o.NPJ, {
        theme: q ? x.NJ8.DARKER : void 0,
        children: e => (0, n.jsxs)(g.A, {
            id: t,
            tabIndex: G,
            onMouseEnter: H,
            cardType: u.sl2.PRIMARY,
            glowing: M,
            hueRotate: 25,
            glowAmount: (0, c.M)(W) ? 2 : 8,
            blurAmount: 10,
            className: i()(C.Ui, k, {
                [C.Tn]: X
            }),
            cardClassName: i()(C.Nr, e, B, {
                [C.j8]: w
            }),
            cardStyle: {
                backgroundImage: X ? `url(${S})` : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOrigin: "padding-box",
                backgroundClip: "padding-box"
            },
            children: [!(0, d.isEmpty)(N) && (0, n.jsx)(u.Text, {
                variant: "text-xs/bold",
                color: "badge-expressive-text-default",
                className: C.Io,
                children: N
            }), (0, n.jsxs)("div", {
                className: C.qh,
                children: [w && (0, n.jsx)("div", {
                    className: C.gW,
                    "aria-hidden": "true",
                    children: (0, n.jsx)(v, {
                        asset: I,
                        className: T
                    })
                }), (0, n.jsx)(v, {
                    asset: I,
                    className: T
                })]
            }), (0, n.jsxs)("div", {
                className: C.hQ,
                children: [(0, n.jsx)("div", {
                    className: C.u_,
                    style: {
                        "--custom-tint-color": V ?? z
                    },
                    "aria-hidden": !0
                }), (0, n.jsxs)("div", {
                    className: C.P_,
                    children: [K && (0, n.jsxs)("div", {
                        className: C.d_,
                        children: [(0, n.jsx)(u.tvc, {
                            size: "sm",
                            color: u.LU0.colors.ICON_MUTED
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.string(R.t.lHYDUu)
                        })]
                    }), !(0, d.isEmpty)(E) && (0, n.jsx)("div", {
                        className: C.OU,
                        children: "string" == typeof E ? (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: E
                        }) : E
                    }), (0, n.jsx)(u.Heading, {
                        variant: "heading-lg/semibold",
                        children: a
                    }), !(0, d.isEmpty)(s) && (0, n.jsxs)("div", {
                        className: C.Wi,
                        children: [(0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: C.h_,
                            children: s
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: C.XV,
                            inert: !0,
                            children: s
                        })]
                    }), null != y && (0, n.jsx)("div", {
                        className: C.oU,
                        children: (0, n.jsx)(b.Ay, {
                            variant: b.qP.BLUE,
                            progress: (0, d.clamp)(y, 0, 1),
                            maximum: 1,
                            glowing: L
                        })
                    }), $ && (0, n.jsx)("div", {
                        className: C.Cj
                    })]
                }), $ && (0, n.jsxs)("div", {
                    className: C.yk,
                    children: [K && (0, n.jsx)(h.A, {
                        fullWidth: !0,
                        defaultTextOverride: R.intl.string(R.t.sEAnVH)
                    }), !K && (0, n.jsx)(o.$nd, {
                        icon: P,
                        iconPosition: j,
                        text: D,
                        variant: !X && (0, c.q)(W) ? "primary" : "overlay-primary",
                        onClick: F
                    })]
                })]
            })]
        })
    })
};

function v(e) {
    let {
        asset: t,
        className: a
    } = e;
    return null == t || "" === t ? null : "string" == typeof t ? (0, n.jsx)("img", {
        src: t,
        alt: "",
        className: i()(C.eq, a),
        draggable: "false"
    }) : t
}