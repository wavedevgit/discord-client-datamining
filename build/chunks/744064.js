/** chunk id: 744064 params = (module,exports,require) **/
n.d(t, {
    S: () => v
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(735438),
    d = n(110259),
    o = n(732955),
    c = n(462887),
    u = n(397927),
    m = n(736653),
    h = n(139286),
    x = n(531260),
    C = n(914410),
    p = n(954571),
    _ = n(872725),
    g = n(465794),
    f = n(788868),
    b = n(652215),
    R = n(985018),
    j = n(555599);
let v = e => {
    let {
        id: t,
        title: n,
        description: s,
        caption: v,
        pillText: E,
        primaryAsset: N,
        primaryAssetClassName: P,
        backgroundAssetUrl: D,
        progress: y,
        ctaIcon: I,
        ctaIconPosition: T,
        ctaText: S,
        onCtaClick: w,
        subscriptionRequired: O,
        glowing: M = !1,
        progressGlowing: L = !1,
        featured: U,
        className: k,
        containerClassName: B,
        tabIndex: G = 0,
        blurTint: F
    } = e, W = (0, m.DP)(), {
        fractionalState: H
    } = (0, x.A)();
    (0, h.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    });
    let V = l.useMemo(() => (0, i.debounce)(() => {
            p.default.track(b.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                card_type: (0, i.snakeCase)(n)
            })
        }, 800), [n]),
        Y = l.useCallback(() => {
            null != w && (w(), p.default.track(b.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                card_type: (0, i.snakeCase)(n),
                function_name: (0, i.snakeCase)(w.name)
            }))
        }, [w, n]),
        Z = O && H === f.xc.FP_ONLY,
        K = !(0, i.isEmpty)(D),
        z = K && (0, c.q)(W),
        $ = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        X = Z || !(0, i.isEmpty)(S);
    return (0, r.jsx)(o.NPJ, {
        theme: z ? b.NJ8.DARKER : void 0,
        children: e => (0, r.jsxs)(_.A, {
            id: t,
            tabIndex: G,
            onMouseEnter: V,
            cardType: u.sl2.PRIMARY,
            glowing: M,
            hueRotate: 25,
            glowAmount: (0, c.M)(W) ? 2 : 8,
            blurAmount: 10,
            className: a()(j.Ui, B, {
                [j.Tn]: K
            }),
            cardClassName: a()(j.Nr, e, k, {
                [j.j8]: U
            }),
            cardStyle: {
                backgroundImage: K ? `url(${D})` : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOrigin: "padding-box",
                backgroundClip: "padding-box"
            },
            children: [!(0, i.isEmpty)(E) && (0, r.jsx)(u.Text, {
                variant: "text-xs/bold",
                color: "badge-expressive-text-default",
                className: j.Io,
                children: E
            }), (0, r.jsxs)("div", {
                className: j.qh,
                children: [U && (0, r.jsx)("div", {
                    className: j.gW,
                    "aria-hidden": "true",
                    children: (0, r.jsx)(A, {
                        asset: N,
                        className: P
                    })
                }), (0, r.jsx)(A, {
                    asset: N,
                    className: P
                })]
            }), (0, r.jsxs)("div", {
                className: j.hQ,
                children: [(0, r.jsx)("div", {
                    className: j.u_,
                    style: {
                        "--custom-tint-color": F ?? $
                    },
                    "aria-hidden": !0
                }), (0, r.jsxs)("div", {
                    className: j.P_,
                    children: [Z && (0, r.jsxs)("div", {
                        className: j.d_,
                        children: [(0, r.jsx)(u.tvc, {
                            size: "sm",
                            color: u.LU0.colors.ICON_MUTED
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: R.intl.string(R.t.lHYDUu)
                        })]
                    }), !(0, i.isEmpty)(v) && (0, r.jsx)("div", {
                        className: j.OU,
                        children: "string" == typeof v ? (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: v
                        }) : v
                    }), (0, r.jsx)(u.Heading, {
                        variant: "heading-lg/semibold",
                        children: n
                    }), !(0, i.isEmpty)(s) && (0, r.jsxs)("div", {
                        className: j.Wi,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: j.h_,
                            children: s
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: j.XV,
                            inert: !0,
                            children: s
                        })]
                    }), null != y && (0, r.jsx)("div", {
                        className: j.oU,
                        children: (0, r.jsx)(C.Ay, {
                            variant: C.qP.BLUE,
                            progress: (0, i.clamp)(y, 0, 1),
                            maximum: 1,
                            glowing: L
                        })
                    }), X && (0, r.jsx)("div", {
                        className: j.Cj
                    })]
                }), X && (0, r.jsxs)("div", {
                    className: j.yk,
                    children: [Z && (0, r.jsx)(g.A, {
                        fullWidth: !0,
                        defaultTextOverride: R.intl.string(R.t.sEAnVH)
                    }), !Z && (0, r.jsx)(o.$nd, {
                        icon: I,
                        iconPosition: T,
                        text: S,
                        variant: !K && (0, c.q)(W) ? "primary" : "overlay-primary",
                        onClick: Y
                    })]
                })]
            })]
        })
    })
};

function A(e) {
    let {
        asset: t,
        className: n
    } = e;
    return null == t || "" === t ? null : "string" == typeof t ? (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: a()(j.eq, n),
        draggable: "false"
    }) : t
}