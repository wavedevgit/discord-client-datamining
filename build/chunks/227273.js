/** chunk id: 227273, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(417597),
    o = n(397927),
    d = n(775602),
    c = n(793574),
    u = n(688810),
    _ = n(800172),
    g = n(953143),
    m = n(954571),
    A = n(52167),
    h = n(652215),
    p = n(985018),
    x = n(399143);
let E = e => {
        let {
            isShowingAll: t,
            onClick: n
        } = e;
        return (0, i.jsxs)(o.DUT, {
            onClick: n,
            className: x.customButton,
            children: [t ? p.intl.string(p.t.maZaN3) : p.intl.string(p.t["37C26f"]), t ? (0, i.jsx)(o.tN5, {
                size: "md",
                color: "currentColor",
                className: x.arrow
            }) : (0, i.jsx)(o.abt, {
                size: "md",
                color: "currentColor",
                className: x.arrow
            })]
        })
    },
    T = e => {
        let {
            title: t,
            description: n,
            className: s,
            imageSource: l,
            imageClassName: r,
            titleBadge: d,
            isNew: m = !1,
            isEarlyAccess: A = !1
        } = e, {
            analyticsLocations: h
        } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, i.jsx)(u.f5, {
            value: h,
            children: (0, i.jsxs)("div", {
                className: a()(x.perkCard, s),
                children: [m ? (0, i.jsx)(g.A, {
                    className: x.perkCardNewBadge,
                    shouldInheritBackgroundColor: !0,
                    shouldInheritTextColor: !0
                }) : null, A ? (0, i.jsx)(_.A, {
                    className: x.perkCardEarlyAccessBadge
                }) : null, (0, i.jsx)("img", {
                    src: l,
                    alt: "",
                    className: a()(r, x.perksCardArt)
                }), (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)(o.Heading, {
                        variant: "heading-lg/extrabold",
                        className: x.perkCardHeading,
                        children: [t, " ", d]
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: x.perkCardDescription,
                        children: "function" == typeof n ? n(h) : n
                    })]
                })]
            })
        })
    },
    S = e => {
        let {
            className: t,
            isSubscriberNitroHome: n = !1
        } = e, [l, c] = s.useState(!1), _ = (0, A.d)({
            styles: x
        }), g = (0, r.bG)([d.A], () => d.A.useReducedMotion), {
            analyticsLocations: S
        } = (0, u.Ay)(), C = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, _.videoBackground, _.superReactions, _.stickersPremiumPerk, _.badgeAlt];
        return (0, i.jsxs)("div", {
            className: a()(x.perksContainer, t, {
                [x.partiallyHidden]: n && !l,
                [x.subscriberNitroHome]: n,
                [x.reducedMotion]: g
            }),
            children: [(0, i.jsx)(o.Heading, {
                variant: "heading-xxl/extrabold",
                className: x.perksTitle,
                children: n ? p.intl.string(p.t.QX14gI) : p.intl.string(p.t.RGadQR)
            }), (0, i.jsx)("div", {
                className: a()(x.perkCardContainer, {
                    [x.perkCardContainerExpanded]: l
                }),
                children: C.map(e => null != e && (0, i.jsx)(T, {
                    ...e
                }, e.title))
            }), n && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: a()({
                        [x.sizeGizmo]: !l,
                        [x.sizeGizmoExpanded]: l
                    }),
                    children: (0, i.jsx)(E, {
                        onClick: () => {
                            m.default.track(h.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                location_stack: S,
                                was_expanded: l
                            }), c(!l)
                        },
                        isShowingAll: l
                    })
                }), (0, i.jsx)("div", {
                    className: a()(x.cover, {
                        [x.hidden]: l
                    })
                })]
            })]
        })
    }