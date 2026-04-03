/** chunk id: 744064 params = (module,exports,require) **/
r.d(t, {
    S: () => v
});
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(735438),
    d = r(110259),
    o = r(732955),
    c = r(462887),
    u = r(397927),
    m = r(736653),
    _ = r(139286),
    p = r(531260),
    f = r(914410),
    h = r(954571),
    b = r(872725),
    g = r(465794),
    x = r(788868),
    C = r(652215),
    A = r(985018),
    R = r(547807);
let v = e => {
    let {
        id: t,
        title: r,
        description: i,
        caption: v,
        pillText: j,
        primaryAsset: N,
        primaryAssetClassName: y,
        backgroundAssetUrl: I,
        progress: P,
        ctaIcon: S,
        ctaIconPosition: T,
        ctaText: w,
        onCtaClick: O,
        subscriptionRequired: D,
        glowing: M = !1,
        progressGlowing: U = !1,
        featured: L,
        className: B,
        containerClassName: k,
        tabIndex: G = 0,
        blurTint: V
    } = e, F = (0, m.DP)(), {
        fractionalState: H
    } = (0, p.A)();
    (0, _.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    });
    let Y = a.useMemo(() => (0, l.debounce)(() => {
            h.default.track(C.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                card_type: (0, l.snakeCase)(r)
            })
        }, 800), [r]),
        W = a.useCallback(() => {
            null != O && (O(), h.default.track(C.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                card_type: (0, l.snakeCase)(r),
                function_name: (0, l.snakeCase)(O.name)
            }))
        }, [O, r]),
        K = D && H === x.xc.FP_ONLY,
        z = !(0, l.isEmpty)(I),
        Z = z && (0, c.q)(F),
        X = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        $ = K || !(0, l.isEmpty)(w);
    return (0, n.jsx)(o.NPJ, {
        theme: Z ? C.NJ8.DARKER : void 0,
        children: e => (0, n.jsxs)(b.A, {
            id: t,
            tabIndex: G,
            onMouseEnter: Y,
            cardType: u.sl2.PRIMARY,
            glowing: M,
            hueRotate: 25,
            glowAmount: (0, c.M)(F) ? 2 : 8,
            blurAmount: 10,
            className: s()(R.Ui, k, {
                [R.Tn]: z
            }),
            cardClassName: s()(R.Nr, e, B, {
                [R.j8]: L
            }),
            cardStyle: {
                backgroundImage: z ? `url(${I})` : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOrigin: "padding-box",
                backgroundClip: "padding-box"
            },
            children: [!(0, l.isEmpty)(j) && (0, n.jsx)(u.Text, {
                variant: "text-xs/bold",
                color: "badge-expressive-text-default",
                className: R.Io,
                children: j
            }), (0, n.jsxs)("div", {
                className: R.qh,
                children: [L && (0, n.jsx)("div", {
                    className: R.gW,
                    "aria-hidden": "true",
                    children: (0, n.jsx)(E, {
                        asset: N,
                        className: y
                    })
                }), (0, n.jsx)(E, {
                    asset: N,
                    className: y
                })]
            }), (0, n.jsxs)("div", {
                className: R.hQ,
                children: [(0, n.jsx)("div", {
                    className: R.u_,
                    style: {
                        "--custom-tint-color": V ?? X
                    },
                    "aria-hidden": !0
                }), (0, n.jsxs)("div", {
                    className: R.P_,
                    children: [K && (0, n.jsxs)("div", {
                        className: R.d_,
                        children: [(0, n.jsx)(u.tvc, {
                            size: "sm",
                            color: u.LU0.colors.ICON_MUTED
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(A.t.lHYDUu)
                        })]
                    }), !(0, l.isEmpty)(v) && (0, n.jsx)("div", {
                        className: R.OU,
                        children: "string" == typeof v ? (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: v
                        }) : v
                    }), (0, n.jsx)(u.Heading, {
                        variant: "heading-lg/semibold",
                        children: r
                    }), !(0, l.isEmpty)(i) && (0, n.jsxs)("div", {
                        className: R.Wi,
                        children: [(0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: R.h_,
                            children: i
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: R.XV,
                            inert: !0,
                            children: i
                        })]
                    }), null != P && (0, n.jsx)("div", {
                        className: R.oU,
                        children: (0, n.jsx)(f.Ay, {
                            variant: f.qP.BLUE,
                            progress: (0, l.clamp)(P, 0, 1),
                            maximum: 1,
                            glowing: U
                        })
                    }), $ && (0, n.jsx)("div", {
                        className: R.Cj
                    })]
                }), $ && (0, n.jsxs)("div", {
                    className: R.yk,
                    children: [K && (0, n.jsx)(g.A, {
                        fullWidth: !0,
                        defaultTextOverride: A.intl.string(A.t.sEAnVH)
                    }), !K && (0, n.jsx)(o.$nd, {
                        icon: S,
                        iconPosition: T,
                        text: w,
                        variant: !z && (0, c.q)(F) ? "primary" : "overlay-primary",
                        onClick: W
                    })]
                })]
            })]
        })
    })
};

function E(e) {
    let {
        asset: t,
        className: r
    } = e;
    return null == t || "" === t ? null : "string" == typeof t ? (0, n.jsx)("img", {
        src: t,
        alt: "",
        className: s()(R.eq, r),
        draggable: "false"
    }) : t
}