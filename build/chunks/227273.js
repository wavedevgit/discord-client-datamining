/** chunk id: 227273, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(417597),
    o = n(397927),
    c = n(775602),
    d = n(793574),
    u = n(688810),
    _ = n(800172),
    m = n(953143),
    A = n(954571),
    g = n(52167),
    h = n(652215),
    x = n(985018),
    p = n(399143);
let E = e => {
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
    C = e => {
        let {
            title: t,
            description: n,
            className: s,
            imageSource: a,
            imageClassName: r,
            titleBadge: c,
            isNew: A = !1,
            isEarlyAccess: g = !1
        } = e, {
            analyticsLocations: h
        } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.f5, {
            value: h,
            children: (0, i.jsxs)("div", {
                className: l()(p.perkCard, s),
                children: [A ? (0, i.jsx)(m.A, {
                    className: p.perkCardNewBadge,
                    shouldInheritBackgroundColor: !0,
                    shouldInheritTextColor: !0
                }) : null, g ? (0, i.jsx)(_.A, {
                    className: p.perkCardEarlyAccessBadge
                }) : null, (0, i.jsx)("img", {
                    src: a,
                    alt: "",
                    className: l()(r, p.perksCardArt)
                }), (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)(o.Heading, {
                        variant: "heading-lg/extrabold",
                        className: p.perkCardHeading,
                        children: [t, " ", c]
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: p.perkCardDescription,
                        children: "function" == typeof n ? n(h) : n
                    })]
                })]
            })
        })
    },
    T = e => {
        let {
            className: t,
            isSubscriberNitroHome: n = !1
        } = e, [a, d] = s.useState(!1), _ = (0, g.d)({
            styles: p
        }), m = (0, r.bG)([c.A], () => c.A.useReducedMotion), {
            analyticsLocations: T
        } = (0, u.Ay)(), S = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, _.videoBackground, _.superReactions, _.stickersPremiumPerk, _.badgeAlt];
        return (0, i.jsxs)("div", {
            className: l()(p.perksContainer, t, {
                [p.partiallyHidden]: n && !a,
                [p.subscriberNitroHome]: n,
                [p.reducedMotion]: m
            }),
            children: [(0, i.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                className: p.perksTitle,
                children: n ? x.intl.string(x.t.QX14gI) : x.intl.string(x.t.RGadQR)
            }), (0, i.jsx)("div", {
                className: l()(p.perkCardContainer, {
                    [p.perkCardContainerExpanded]: a
                }),
                children: S.map(e => null != e && (0, i.jsx)(C, {
                    ...e
                }, e.title))
            }), n && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: l()({
                        [p.sizeGizmo]: !a,
                        [p.sizeGizmoExpanded]: a
                    }),
                    children: (0, i.jsx)(E, {
                        onClick: () => {
                            A.default.track(h.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                location_stack: T,
                                was_expanded: a
                            }), d(!a)
                        },
                        isShowingAll: a
                    })
                }), (0, i.jsx)("div", {
                    className: l()(p.cover, {
                        [p.hidden]: a
                    })
                })]
            })]
        })
    }