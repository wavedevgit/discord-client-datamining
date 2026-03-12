/** chunk id: 227273 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(417597),
    o = n(397927),
    d = n(775602),
    c = n(793574),
    u = n(688810),
    _ = n(800172),
    m = n(953143),
    g = n(954571),
    A = n(52167),
    h = n(652215),
    x = n(985018),
    p = n(399143);
let T = e => {
        let {
            isShowingAll: t,
            onClick: n
        } = e;
        return (0, i.jsxs)(o.DUT, {
            onClick: n,
            className: p.customButton,
            children: [t ? x.intl.string(x.t.maZaN3) : x.intl.string(x.t["37C26f"]), t ? (0, i.jsx)(o.tN5, {
                size: "md",
                color: "currentColor",
                className: p.arrow
            }) : (0, i.jsx)(o.abt, {
                size: "md",
                color: "currentColor",
                className: p.arrow
            })]
        })
    },
    E = e => {
        let {
            title: t,
            description: n,
            className: s,
            imageSource: l,
            imageClassName: a,
            titleBadge: d,
            isNew: g = !1,
            isEarlyAccess: A = !1
        } = e, {
            analyticsLocations: h
        } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.f5, {
            value: h,
            children: (0, i.jsxs)("div", {
                className: r()(p.perkCard, s),
                children: [g ? (0, i.jsx)(m.A, {
                    className: p.perkCardNewBadge,
                    shouldInheritBackgroundColor: !0,
                    shouldInheritTextColor: !0
                }) : null, A ? (0, i.jsx)(_.A, {
                    className: p.perkCardEarlyAccessBadge
                }) : null, (0, i.jsx)("img", {
                    src: l,
                    alt: "",
                    className: r()(a, p.perksCardArt)
                }), (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)(o.Heading, {
                        variant: "heading-lg/extrabold",
                        className: p.perkCardHeading,
                        children: [t, " ", d]
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: p.perkCardDescription,
                        children: "function" == typeof n ? n(h) : n
                    })]
                })]
            })
        })
    },
    C = e => {
        let {
            className: t,
            isSubscriberNitroHome: n = !1
        } = e, [l, c] = s.useState(!1), _ = (0, A.d)({
            styles: p
        }), m = (0, a.bG)([d.A], () => d.A.useReducedMotion), {
            analyticsLocations: C
        } = (0, u.Ay)(), S = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, _.videoBackground, _.superReactions, _.stickersPremiumPerk, _.badgeAlt];
        return (0, i.jsxs)("div", {
            className: r()(p.perksContainer, t, {
                [p.partiallyHidden]: n && !l,
                [p.subscriberNitroHome]: n,
                [p.reducedMotion]: m
            }),
            children: [(0, i.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                className: p.perksTitle,
                children: n ? x.intl.string(x.t.QX14gI) : x.intl.string(x.t.RGadQR)
            }), (0, i.jsx)("div", {
                className: r()(p.perkCardContainer, {
                    [p.perkCardContainerExpanded]: l
                }),
                children: S.map(e => null != e && (0, i.jsx)(E, {
                    ...e
                }, e.title))
            }), n && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: r()({
                        [p.sizeGizmo]: !l,
                        [p.sizeGizmoExpanded]: l
                    }),
                    children: (0, i.jsx)(T, {
                        onClick: () => {
                            g.default.track(h.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                location_stack: C,
                                was_expanded: l
                            }), c(!l)
                        },
                        isShowingAll: l
                    })
                }), (0, i.jsx)("div", {
                    className: r()(p.cover, {
                        [p.hidden]: l
                    })
                })]
            })]
        })
    }