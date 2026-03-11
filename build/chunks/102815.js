/** chunk id: 102815 params = (module,exports,require) **/
a.d(t, {
    S: () => C
});
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(735438),
    d = a(110259),
    o = a(732955),
    c = a(462887),
    u = a(397927),
    m = a(736653),
    p = a(139286),
    f = a(531260),
    b = a(914410),
    A = a(954571),
    h = a(872725),
    _ = a(857586),
    R = a(788868),
    g = a(652215),
    x = a(985018),
    E = a(340091);
let C = e => {
    let {
        id: t,
        title: a,
        description: s,
        caption: C,
        pillText: v,
        primaryAsset: I,
        primaryAssetClassName: S,
        backgroundAssetUrl: T,
        progress: P,
        ctaText: y,
        onCtaClick: D,
        subscriptionRequired: O,
        glowing: j,
        progressGlowing: U = !1,
        featured: L,
        className: M,
        containerClassName: w,
        tabIndex: B = 0,
        blurTint: k
    } = e, G = (0, m.DP)(), {
        fractionalState: V
    } = (0, f.A)();
    (0, p.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    });
    let Y = r.useMemo(() => (0, i.debounce)(() => {
            A.default.track(g.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                card_type: (0, i.snakeCase)(a)
            })
        }, 800), [a]),
        W = r.useCallback(() => {
            null != D && (D(), A.default.track(g.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                card_type: (0, i.snakeCase)(a),
                function_name: (0, i.snakeCase)(D.name)
            }))
        }, [D, a]),
        H = O && V === R.xc.FP_ONLY,
        F = !(0, i.isEmpty)(T),
        K = F && (0, c.q)(G),
        X = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        $ = H || !(0, i.isEmpty)(y);
    return (0, n.jsx)(o.NPJ, {
        theme: K ? g.NJ8.DARKER : void 0,
        children: e => (0, n.jsxs)(h.A, {
            id: t,
            tabIndex: B,
            onMouseEnter: Y,
            cardType: u.sl2.PRIMARY,
            hueRotate: 25,
            glowAmount: j ? (0, c.M)(G) ? 2 : 8 : 0,
            blurAmount: 10 * !!j,
            className: l()(E.Ui, w, {
                [E.Tn]: F
            }),
            cardClassName: l()(E.Nr, e, M, {
                [E.j8]: L
            }),
            cardStyle: {
                backgroundImage: F ? `url(${T})` : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOrigin: "padding-box",
                backgroundClip: "padding-box"
            },
            children: [!(0, i.isEmpty)(v) && (0, n.jsx)(u.Text, {
                variant: "text-xs/bold",
                color: "badge-expressive-text-default",
                className: E.Io,
                children: v
            }), (0, n.jsxs)("div", {
                className: E.qh,
                children: [L && (0, n.jsx)("div", {
                    className: E.gW,
                    "aria-hidden": "true",
                    children: (0, n.jsx)(N, {
                        asset: I,
                        className: S
                    })
                }), (0, n.jsx)(N, {
                    asset: I,
                    className: S
                })]
            }), (0, n.jsxs)("div", {
                className: E.hQ,
                children: [(0, n.jsx)("div", {
                    className: E.u_,
                    style: {
                        "--custom-tint-color": k ?? X
                    },
                    "aria-hidden": !0
                }), (0, n.jsxs)("div", {
                    className: E.P_,
                    children: [H && (0, n.jsxs)("div", {
                        className: E.d_,
                        children: [(0, n.jsx)(u.tvc, {
                            size: "sm",
                            color: u.LU0.colors.ICON_MUTED
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: x.intl.string(x.t.lHYDUu)
                        })]
                    }), !(0, i.isEmpty)(C) && (0, n.jsx)("div", {
                        className: E.OU,
                        children: "string" == typeof C ? (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: C
                        }) : C
                    }), (0, n.jsx)(u.Heading, {
                        variant: "heading-lg/semibold",
                        children: a
                    }), !(0, i.isEmpty)(s) && (0, n.jsxs)("div", {
                        className: E.Wi,
                        children: [(0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: E.h_,
                            children: s
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: E.XV,
                            inert: !0,
                            children: s
                        })]
                    }), null != P && (0, n.jsx)("div", {
                        className: E.oU,
                        children: (0, n.jsx)(b.Ay, {
                            variant: b.qP.BLUE,
                            progress: (0, i.clamp)(P, 0, 1),
                            maximum: 1,
                            glowing: U
                        })
                    }), $ && (0, n.jsx)("div", {
                        className: E.Cj
                    })]
                }), $ && (0, n.jsxs)("div", {
                    className: E.yk,
                    children: [H && (0, n.jsx)(_.A, {
                        fullWidth: !0,
                        defaultTextOverride: x.intl.string(x.t.sEAnVH)
                    }), !H && (0, n.jsx)(o.$nd, {
                        text: y,
                        variant: !F && (0, c.q)(G) ? "primary" : "overlay-primary",
                        onClick: W
                    })]
                })]
            })]
        })
    })
};

function N(e) {
    let {
        asset: t,
        className: a
    } = e;
    return null == t || "" === t ? null : "string" == typeof t ? (0, n.jsx)("img", {
        src: t,
        alt: "",
        className: l()(E.eq, a),
        draggable: "false"
    }) : t
}