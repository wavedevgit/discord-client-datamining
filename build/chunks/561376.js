/** Chunk was on 22841 **/
/** chunk id: 561376, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => C
});
var n = i(627968),
    a = i(503698),
    s = i.n(a),
    r = i(635358),
    c = i(397927),
    o = i(964486),
    l = i(793574),
    _ = i(688810),
    d = i(954921),
    p = i(920064),
    j = i(278539),
    y = i(315949),
    O = i(547065),
    T = i(954571),
    u = i(44120),
    g = i(532794),
    m = i(652215),
    b = i(838541),
    h = i(788868),
    x = i(985018),
    E = i(649178),
    f = i(793481),
    A = i(497451);

function C(e) {
    let {
        analyticsLocations: t,
        transitionState: i,
        onClose: a,
        giftRecipient: s,
        analyticsObject: r
    } = e;
    return (0, o.Ay)(() => {
        T.default.track(m.HAw.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
            location: r,
            location_stack: t
        })
    }), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(v, {}), (0, n.jsxs)(c.EOs, {
            "data-migration-pending": !0,
            size: c.rIJ.DYNAMIC,
            transitionState: i,
            className: E.CR,
            parentComponent: "GiftCategorySelectModal",
            children: [(0, n.jsxs)(c.rQ0, {
                "data-migration-pending": !0,
                className: E.wx,
                separator: !1,
                children: [(0, n.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: x.intl.string(x.t.YBGjso)
                }), (0, n.jsx)(c.s_y, {
                    "data-migration-pending": !0,
                    onClick: () => {
                        T.default.track(m.HAw.MODAL_DISMISSED, {
                            type: m.JJy.GIFT_CATEGORY_SELECT_MODAL,
                            location_object: m.ZSU.BUTTON_CTA
                        }), a()
                    },
                    className: E.or
                })]
            }), (0, n.jsx)(c.$mQ, {
                "data-migration-pending": !0,
                className: E.jE,
                children: (0, n.jsx)(I, {
                    analyticsLocations: t,
                    giftRecipient: s,
                    analyticsObject: r,
                    onClose: a
                })
            })]
        })]
    })
}
let v = () => ((0, y.A)(), null);

function I(e) {
    let {
        giftRecipient: t,
        analyticsObject: i,
        onClose: a
    } = e, {
        showBothNitroSkusInCategorySelect: o
    } = O.P.useExperiment({
        location: "gift-button"
    }, {
        autoTrackExposure: !1
    }), {
        analyticsLocations: d
    } = (0, _.Ay)(l.A.GIFT_CATEGORY_SELECT_MODAL), p = e => {
        e && a()
    }, j = e => {
        var n, a;
        let s = m.AnalyticsObjectTypes.NITRO_SKU_SELECTION;
        e === h.pe.TIER_2 ? s = m.AnalyticsObjectTypes.NITRO_STANDARD : e === h.pe.TIER_0 && (s = m.AnalyticsObjectTypes.NITRO_BASIC), (0, g.A)({
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: h.vQ.DM_CHANNEL,
            initialPlanId: null,
            analyticsLocations: d,
            subscriptionTier: e,
            analyticsObject: (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = i[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({}, i), a = a = {
                section: m.JJy.GIFT_CATEGORY_SELECT_MODAL,
                object: m.ZSU.GIFT_CATEGORY_OPTION,
                objectType: s
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    i.push.apply(i, n)
                }
                return i
            })(Object(a)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
            }), n),
            onClose: p
        })
    };
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.DUT, {
            onClick: () => j(o ? h.pe.TIER_2 : void 0),
            children: (0, n.jsxs)("div", {
                className: s()(E.Hv, E.pr),
                children: [(0, n.jsx)(c.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: E._d,
                    children: x.intl.string(x.t.lG6a5x)
                }), (0, n.jsx)(N, {
                    imageType: 0
                })]
            })
        }), o && (0, n.jsx)(c.DUT, {
            onClick: () => j(h.pe.TIER_0),
            children: (0, n.jsxs)("div", {
                className: s()(E.pn, E.Hv),
                children: [(0, n.jsx)(c.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: E._d,
                    children: x.intl.string(x.t["t9uG/o"])
                }), (0, n.jsx)(N, {
                    imageType: 1
                })]
            })
        }), (0, n.jsx)(c.DUT, {
            onClick: () => {
                (0, u.A)({
                    isGift: !0,
                    giftingOrigin: h.vQ.DM_CHANNEL,
                    analyticsLocations: d,
                    analyticsObject: i,
                    giftRecipient: t,
                    onClose: p,
                    variantsReturnStyle: r.g.VARIANTS_GROUP
                })
            },
            children: (0, n.jsxs)("div", {
                className: s()(E.xG, E.Hv),
                children: [(0, n.jsx)(c.Text, {
                    variant: "display-sm",
                    color: "always-white",
                    className: E._d,
                    children: x.intl.string(x.t.gFlB9b)
                }), (0, n.jsx)(N, {
                    imageType: 2
                })]
            })
        })]
    })
}

function N(e) {
    let {
        imageType: t
    } = e, {
        avatarPlaceholderSrc: i
    } = (0, j.A)({
        size: (0, d.Te)(c._3J.SIZE_80)
    }), a = (0, p.A)("a_c3cffc19e9784f7d0b005eecdf1b566e", c._3J.SIZE_80, !1);
    return 0 === t || 1 === t ? (0, n.jsx)("div", {
        className: E.wp,
        children: (0, n.jsx)(c._V3, {
            src: 1 === t ? f : A,
            mediaLayoutType: b.dG.RESPONSIVE,
            width: 122,
            height: 110,
            zoomable: !1
        })
    }) : 2 === t ? (0, n.jsx)("div", {
        className: E.zT,
        children: (0, n.jsx)(c.euF, {
            src: i,
            avatarDecoration: a,
            size: c._3J.SIZE_80,
            "aria-hidden": !0
        })
    }) : void 0
}