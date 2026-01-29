/** Chunk was on 2827 **/
/** chunk id: 227273, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    o = n(397927),
    c = n(775602),
    d = n(793574),
    u = n(688810),
    _ = n(800172),
    p = n(953143),
    m = n(954571),
    g = n(52167),
    A = n(652215),
    f = n(985018),
    b = n(657989);
let h = e => {
        let {
            isShowingAll: t,
            onClick: n
        } = e;
        return (0, r.jsxs)(o.DUT, {
            onClick: n,
            className: b.customButton,
            children: [t ? f.intl.string(f.t.maZaN3) : f.intl.string(f.t["37C26f"]), t ? (0, r.jsx)(o.tN5, {
                size: "md",
                color: "currentColor",
                className: b.arrow
            }) : (0, r.jsx)(o.abt, {
                size: "md",
                color: "currentColor",
                className: b.arrow
            })]
        })
    },
    E = e => {
        let {
            title: t,
            description: n,
            className: i,
            imageSource: l,
            imageClassName: a,
            titleBadge: c,
            isNew: m = !1,
            isEarlyAccess: g = !1
        } = e, {
            analyticsLocations: A
        } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, r.jsx)(u.f5, {
            value: A,
            children: (0, r.jsxs)("div", {
                className: s()(b.perkCard, i),
                children: [m ? (0, r.jsx)(p.A, {
                    className: b.perkCardNewBadge,
                    shouldInheritBackgroundColor: !0,
                    shouldInheritTextColor: !0
                }) : null, g ? (0, r.jsx)(_.A, {
                    className: b.perkCardEarlyAccessBadge
                }) : null, (0, r.jsx)("img", {
                    src: l,
                    alt: "",
                    className: s()(a, b.perksCardArt)
                }), (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)(o.Heading, {
                        variant: "heading-lg/extrabold",
                        className: b.perkCardHeading,
                        children: [t, " ", c]
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: b.perkCardDescription,
                        children: "function" == typeof n ? n(A) : n
                    })]
                })]
            })
        })
    },
    O = e => {
        let {
            className: t,
            isSubscriberNitroHome: n = !1
        } = e, [l, d] = i.useState(!1), _ = (0, g.d)({
            styles: b
        }), p = (0, a.bG)([c.A], () => c.A.useReducedMotion), {
            analyticsLocations: O
        } = (0, u.Ay)(), C = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, _.videoBackground, _.superReactions, _.stickersPremiumPerk, _.badgeAlt];
        return (0, r.jsxs)("div", {
            className: s()(b.perksContainer, t, {
                [b.partiallyHidden]: n && !l,
                [b.subscriberNitroHome]: n,
                [b.reducedMotion]: p
            }),
            children: [(0, r.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                className: b.perksTitle,
                children: n ? f.intl.string(f.t.QX14gI) : f.intl.string(f.t.RGadQR)
            }), (0, r.jsx)("div", {
                className: s()(b.perkCardContainer, {
                    [b.perkCardContainerExpanded]: l
                }),
                children: C.map(e => null != e && (0, r.jsx)(E, function(e) {
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
                }({}, e), e.title))
            }), n && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: s()({
                        [b.sizeGizmo]: !l,
                        [b.sizeGizmoExpanded]: l
                    }),
                    children: (0, r.jsx)(h, {
                        onClick: () => {
                            m.default.track(A.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                location_stack: O,
                                was_expanded: l
                            }), d(!l)
                        },
                        isShowingAll: l
                    })
                }), (0, r.jsx)("div", {
                    className: s()(b.cover, {
                        [b.hidden]: l
                    })
                })]
            })]
        })
    }