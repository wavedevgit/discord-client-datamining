/** chunk id: 102815, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => R
});
var r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    i = n(735438),
    d = n(732955),
    u = n(462887),
    o = n(397927),
    c = n(736653),
    m = n(531260),
    h = n(613566),
    x = n(954571),
    p = n(872725),
    _ = n(857586),
    f = n(788868),
    g = n(652215),
    N = n(985018),
    b = n(355313);
let R = e => {
    let {
        title: t,
        description: n,
        caption: l,
        pillText: R,
        primaryAsset: v,
        primaryAssetClassName: A,
        backgroundAssetUrl: C,
        progress: T,
        ctaText: j,
        onCtaClick: y,
        subscriptionRequired: P,
        glowing: I,
        progressGlowing: S = !1,
        featured: O,
        className: w,
        blurTint: D
    } = e, L = (0, c.DP)(), {
        fractionalState: U
    } = (0, m.A)(), M = a.useMemo(() => (0, i.debounce)(() => {
        x.default.track(g.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
            card_type: (0, i.snakeCase)(t)
        })
    }, 800), [t]), B = a.useCallback(() => {
        null != y && (y(), x.default.track(g.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
            card_type: (0, i.snakeCase)(t),
            function_name: (0, i.snakeCase)(y.name)
        }))
    }, [y, t]), k = P && U === f.xc.FP_ONLY, G = !(0, i.isEmpty)(C), W = G && (0, u.q)(L), H = (0, o.rdh)(o.LU0.colors.BACKGROUND_BASE_LOW).hex(), V = k || !(0, i.isEmpty)(j);
    return (0, r.jsx)(d.NPJ, {
        theme: W ? g.NJ8.DARKER : void 0,
        children: e => (0, r.jsxs)(p.A, {
            onMouseEnter: M,
            cardType: o.sl2.PRIMARY,
            hueRotate: 25,
            glowAmount: 5 * !!I,
            blurAmount: 6 * !!I,
            className: b.Ui,
            cardClassName: s()(b.Nr, e, w, {
                [b.j8]: O,
                [b.Tn]: G
            }),
            cardStyle: {
                backgroundImage: G ? `url(${C})` : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundOrigin: "padding-box",
                backgroundClip: "padding-box"
            },
            children: [!(0, i.isEmpty)(R) && (0, r.jsx)(o.Text, {
                variant: "text-xs/bold",
                color: "badge-expressive-text-default",
                className: b.Io,
                children: R
            }), (0, r.jsxs)("div", {
                className: b.qh,
                children: [O && (0, r.jsx)("div", {
                    className: b.gW,
                    "aria-hidden": "true",
                    children: (0, r.jsx)(E, {
                        asset: v,
                        className: A
                    })
                }), (0, r.jsx)(E, {
                    asset: v,
                    className: A
                })]
            }), (0, r.jsxs)("div", {
                className: b.hQ,
                children: [(0, r.jsx)("div", {
                    className: b.u_,
                    style: {
                        "--custom-tint-color": D ?? H
                    },
                    "aria-hidden": !0
                }), (0, r.jsxs)("div", {
                    className: b.P_,
                    tabIndex: 0,
                    children: [k && (0, r.jsxs)("div", {
                        className: b.d_,
                        children: [(0, r.jsx)(o.tvc, {
                            size: "sm",
                            color: o.LU0.colors.ICON_MUTED
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: N.intl.string(N.t.lHYDUu)
                        })]
                    }), !(0, i.isEmpty)(l) && (0, r.jsx)("div", {
                        className: b.OU,
                        children: "string" == typeof l ? (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: l
                        }) : l
                    }), (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        children: t
                    }), !(0, i.isEmpty)(n) && (0, r.jsxs)("div", {
                        className: b.Wi,
                        children: [(0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: b.h_,
                            children: n
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: b.XV,
                            "aria-hidden": "true",
                            children: n
                        })]
                    }), null != T && (0, r.jsx)("div", {
                        className: b.oU,
                        children: (0, r.jsx)(h.Ay, {
                            variant: h.qP.BLUE,
                            progress: (0, i.clamp)(T, 0, 1),
                            maximum: 1,
                            glowing: S
                        })
                    }), V && (0, r.jsx)("div", {
                        className: b.Cj
                    })]
                }), V && (0, r.jsxs)("div", {
                    className: b.yk,
                    children: [k && (0, r.jsx)(_.A, {
                        fullWidth: !0,
                        defaultTextOverride: N.intl.string(N.t.sEAnVH)
                    }), !k && (0, r.jsx)(d.$nd, {
                        text: j,
                        variant: !G && (0, u.q)(L) ? "primary" : "overlay-primary",
                        onClick: B
                    })]
                })]
            })]
        })
    })
};

function E(e) {
    let {
        asset: t,
        className: n
    } = e;
    return null == t || "" === t ? null : "string" == typeof t ? (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: s()(b.eq, n),
        draggable: "false"
    }) : t
}