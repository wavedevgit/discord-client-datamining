/** chunk id: 744064 params = (module,exports,require) **/
n.d(t, {
    S: () => v
});
var s = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    i = n(735438),
    d = n(110259),
    o = n(732955),
    c = n(462887),
    u = n(397927),
    h = n(736653),
    m = n(139286),
    x = n(531260),
    C = n(914410),
    _ = n(954571),
    p = n(872725),
    g = n(465794),
    f = n(788868),
    R = n(652215),
    j = n(985018),
    b = n(555599);
let v = e => {
    let {
        id: t,
        title: n,
        description: l,
        caption: v,
        pillText: E,
        primaryAsset: A,
        primaryAssetClassName: D,
        backgroundAssetUrl: I,
        progress: P,
        ctaIcon: y,
        ctaIconPosition: w,
        ctaText: T,
        onCtaClick: S,
        subscriptionRequired: O,
        glowing: M = !1,
        progressGlowing: L = !1,
        featured: U,
        className: k,
        containerClassName: B,
        tabIndex: F = 0,
        blurTint: G,
        footerContent: W,
        backgroundElement: H
    } = e, V = (0, h.DP)(), {
        fractionalState: Y
    } = (0, x.A)();
    (0, m.A)({
        type: d.ImpressionTypes.VIEW,
        name: d.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    });
    let Z = a.useMemo(() => (0, i.debounce)(() => {
            _.default.track(R.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                card_type: (0, i.snakeCase)(n)
            })
        }, 800), [n]),
        K = a.useCallback(() => {
            null != S && (S(), _.default.track(R.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                card_type: (0, i.snakeCase)(n),
                function_name: (0, i.snakeCase)(S.name)
            }))
        }, [S, n]),
        z = O && Y === f.xc.FP_ONLY,
        $ = !(0, i.isEmpty)(I) || null != H,
        X = $ && (0, c.q)(V),
        q = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        J = z || !(0, i.isEmpty)(T);
    return (0, s.jsx)(o.NPJ, {
        theme: X ? R.NJ8.DARKER : void 0,
        children: e => (0, s.jsxs)(p.A, {
            id: t,
            tabIndex: F,
            onMouseEnter: Z,
            cardType: u.sl2.PRIMARY,
            glowing: M,
            hueRotate: 25,
            glowAmount: (0, c.M)(V) ? 2 : 8,
            blurAmount: 10,
            className: r()(b.Ui, B, {
                [b.Tn]: $
            }),
            cardClassName: r()(b.Nr, e, k, {
                [b.j8]: U
            }),
            cardStyle: {
                backgroundImage: null != I ? `url(${I})` : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOrigin: "padding-box",
                backgroundClip: "padding-box"
            },
            children: [null != H && (0, s.jsx)("div", {
                className: b.d$,
                "aria-hidden": "true",
                children: H
            }), !(0, i.isEmpty)(E) && (0, s.jsx)(u.Text, {
                variant: "text-xs/bold",
                color: "badge-expressive-text-default",
                className: b.Io,
                children: E
            }), (0, s.jsxs)("div", {
                className: b.qh,
                children: [U && (0, s.jsx)("div", {
                    className: b.gW,
                    "aria-hidden": "true",
                    children: (0, s.jsx)(N, {
                        asset: A,
                        className: D
                    })
                }), (0, s.jsx)(N, {
                    asset: A,
                    className: D
                })]
            }), (0, s.jsxs)("div", {
                className: b.hQ,
                children: [(0, s.jsx)("div", {
                    className: b.u_,
                    style: {
                        "--custom-tint-color": G ?? q
                    },
                    "aria-hidden": !0
                }), (0, s.jsxs)("div", {
                    className: b.P_,
                    children: [z && (0, s.jsxs)("div", {
                        className: b.d_,
                        children: [(0, s.jsx)(u.tvc, {
                            size: "sm",
                            color: u.LU0.colors.ICON_MUTED
                        }), (0, s.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.string(j.t.lHYDUu)
                        })]
                    }), !(0, i.isEmpty)(v) && (0, s.jsx)("div", {
                        className: b.OU,
                        children: "string" == typeof v ? (0, s.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: v
                        }) : v
                    }), (0, s.jsx)(u.Heading, {
                        variant: "heading-lg/semibold",
                        children: n
                    }), !(0, i.isEmpty)(l) && (0, s.jsxs)("div", {
                        className: b.Wi,
                        children: [(0, s.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: b.h_,
                            children: l
                        }), (0, s.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: b.XV,
                            inert: !0,
                            children: l
                        })]
                    }), null != P && (0, s.jsx)("div", {
                        className: b.oU,
                        children: (0, s.jsx)(C.Ay, {
                            variant: C.qP.BLUE,
                            progress: (0, i.clamp)(P, 0, 1),
                            maximum: 1,
                            glowing: L
                        })
                    }), null != W && (0, s.jsx)("div", {
                        className: b.Gv,
                        children: W
                    }), J && (0, s.jsx)("div", {
                        className: b.Cj
                    })]
                }), J && (0, s.jsxs)("div", {
                    className: b.yk,
                    children: [z && (0, s.jsx)(g.A, {
                        fullWidth: !0,
                        defaultTextOverride: j.intl.string(j.t.sEAnVH)
                    }), !z && (0, s.jsx)(o.$nd, {
                        icon: y,
                        iconPosition: w,
                        text: T,
                        variant: !$ && (0, c.q)(V) ? "primary" : "overlay-primary",
                        onClick: K
                    })]
                })]
            })]
        })
    })
};

function N(e) {
    let {
        asset: t,
        className: n
    } = e;
    return null == t || "" === t ? null : "string" == typeof t ? (0, s.jsx)("img", {
        src: t,
        alt: "",
        className: r()(b.eq, n),
        draggable: "false"
    }) : t
}