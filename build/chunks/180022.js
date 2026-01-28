/** Chunk was on 5606 **/
/** chunk id: 180022, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n(110259),
    c = n(417597),
    d = n(397927),
    u = n(775602),
    p = n(139286),
    _ = n(160761),
    m = n(954571),
    g = n(543233),
    f = n(29570),
    b = n(975662),
    h = n(322631),
    A = n(784356),
    E = n(452910),
    x = n(652215),
    O = n(49999),
    C = n(985018),
    y = n(296388);

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function T(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let v = i.memo(e => {
    let {
        name: t,
        canReveal: n = !0,
        dismissibleContentType: l,
        forceShadow: g,
        cardType: A
    } = e, E = null == e ? void 0 : e.onCtaClick, I = (0, c.bG)([u.A], () => u.A.useReducedMotion), [N, P] = i.useState(!1), [R, D] = i.useState(!1), w = A === h.cJ.CARD_CAROUSEL_FIRST_ROW || A === h.cJ.CARD_CAROUSEL_SECOND_ROW || A === h.cJ.CARD_CAROUSEL_THIRD_ROW, L = (0, b.A)(), [M, G] = (0, _.DP)(null != l && n ? [l] : []), {
        easterEggLevel: U,
        isEasterEggTriggered: k,
        onHover: H,
        onUnhover: B
    } = (0, f.A)(5), V = i.useMemo(() => (0, a.debounce)(() => {
        m.default.track(x.HAw.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
            card_type: (0, a.snakeCase)(t)
        })
    }, 800), [t]), F = i.useMemo(() => (0, a.debounce)(() => {
        null != E && m.default.track(x.HAw.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
            card_type: (0, a.snakeCase)(t),
            function_name: (0, a.snakeCase)(E.name)
        })
    }, 800), [t, E]);
    e = T(j({
        onMouseEnter: V
    }, e), {
        onCtaClick: null != E ? () => {
            null == E || E(), F()
        } : void 0
    });
    let Y = M !== l || null == l || R;
    return (i.useEffect(() => {
        I && N && (D(!0), m.default.track(x.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
        }), null != l && G(O.i.TAKE_ACTION))
    }, [I, N, l, t, G]), (0, p.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: {
            name: t
        }
    }), n) ? t === b.U.UPCOMING_DROP_UNTIMED ? (0, r.jsx)("div", {
        className: y.iQ,
        onMouseEnter: H,
        onFocus: H,
        onMouseLeave: B,
        onBlur: B,
        children: (0, r.jsx)("div", {
            className: s()(y.Rz, {
                [y.sT]: g
            }),
            children: (0, r.jsxs)("div", {
                className: s()(y.Ci, {
                    [y.BX]: !k,
                    [y.yg]: k,
                    [y.Ud]: k && 3 === U,
                    [y.VN]: I
                }),
                children: [(0, r.jsx)("div", {
                    className: y.He,
                    children: (0, r.jsx)(S, T(j({}, e), {
                        className: y.Du
                    }))
                }), (0, r.jsx)("div", {
                    className: y.ll,
                    children: (0, r.jsx)(S, T(j({}, e), {
                        className: y.Du
                    }))
                })]
            })
        })
    }) : Y ? (0, r.jsx)("div", {
        className: y.iQ,
        children: (0, r.jsx)("div", {
            className: s()({
                [y.u9]: !w,
                [y.E$]: w,
                [y.sT]: g,
                [y.VN]: I
            }),
            children: (0, r.jsx)(S, j({}, e))
        })
    }) : (0, r.jsx)("div", {
        className: y.iQ,
        children: (0, r.jsx)("div", {
            className: s()(y.Rz, {
                [y.sT]: g
            }),
            children: (0, r.jsxs)(d.DUT, {
                onClick: () => P(!0),
                className: s()(y.Ci, y.vk, {
                    [y.zq]: N,
                    [y.BX]: !R && !N,
                    [y.VN]: I
                }),
                onTransitionEnd: e => {
                    N && "transform" === e.propertyName && e.target.classList.contains(y.Ci) && (D(!0), m.default.track(x.HAw.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
                        card_type: t
                    }), null != l && G(O.i.TAKE_ACTION))
                },
                children: [(0, r.jsx)("div", {
                    className: y.UF,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(S, j({}, e))
                }), (0, r.jsx)("div", {
                    className: y.He,
                    children: (0, r.jsx)(S, T(j({}, L.upcomingDropUntimed), {
                        pillText: ""
                    }))
                }), (0, r.jsx)("div", {
                    className: y.ll,
                    children: (0, r.jsx)(S, T(j({}, e), {
                        description: ""
                    }))
                }), (0, r.jsx)("div", {
                    className: y.Z7,
                    children: (0, r.jsx)(d.Button, {
                        variant: "primary",
                        text: C.intl.string(C.t.dcztdU),
                        onClick: () => P(!0)
                    })
                })]
            })
        })
    }) : (0, r.jsx)(v, T(j({}, L.upcomingDropUntimed), {
        forceShadow: g
    }))
});
v.displayName = "PremiumPerkCard";
let S = i.forwardRef((e, t) => {
    var n;
    let {
        title: i,
        titleClassName: l = "",
        subtitle: a = "",
        description: o = "",
        descriptionCta: c = "",
        customContent: u,
        isPremiumGetCta: p,
        onCtaClick: _,
        onMouseEnter: m,
        className: f,
        perkComponent: b,
        cardVariant: x,
        cardType: O,
        onClick: C,
        backgroundImage: j,
        pillText: T,
        perkImage: v,
        imageOverlayText: S,
        hasNitroGradientBackground: I
    } = e, N = O === h.cJ.CARD_CAROUSEL_FIRST_ROW || O === h.cJ.CARD_CAROUSEL_SECOND_ROW || O === h.cJ.CARD_CAROUSEL_THIRD_ROW, P = "" !== o || "" !== c || "" !== a && x === h.PJ.REWARD, R = (0, g.Q)(x);
    return (0, r.jsxs)(d.DUT, {
        className: s()(y.Nr, f, null == (n = R.cardContainer) ? void 0 : n.className, {
            [y.vk]: null != C,
            [y.JP]: N,
            [y.NT]: I
        }),
        onMouseEnter: m,
        style: {
            backgroundImage: null != j ? "url(".concat(j, ")") : void 0,
            backgroundPosition: null != j ? "bottom right" : void 0,
            backgroundRepeat: null != j ? "no-repeat" : void 0
        },
        onClick: C,
        children: [null != T && (0, r.jsx)(d.Text, {
            variant: "text-xs/semibold",
            className: y.Io,
            children: T
        }), (0, r.jsx)("div", {
            ref: t
        }), (0, r.jsx)(A.A, {
            title: i,
            titleClassName: l,
            subtitle: a,
            perkImage: v,
            isCarousel: N,
            descriptionCta: c,
            customContent: u,
            onCtaClick: _,
            perkComponent: b,
            subtitleClassName: y.Dc,
            cardVariant: x,
            imageOverlayText: S
        }), P && (0, r.jsx)(E.A, {
            title: i,
            titleClassName: l,
            subtitle: a,
            description: o,
            descriptionCta: c,
            isPremiumGetCta: p,
            onCtaClick: _,
            cardVariant: x,
            perkComponent: b
        }), (0, r.jsx)("div", {
            className: s()(y.Iv, y.G1),
            ref: t
        })]
    })
});
S.displayName = "PerkCardContent";
let I = v