/** chunk id: 813248, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => w
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(793574),
    o = n(688810),
    c = n(979286),
    u = n(993408),
    d = n(821701),
    p = n(841702),
    m = n(571827),
    x = n(465794),
    g = n(919395),
    A = n(696451),
    h = n(287809),
    _ = n(954571),
    y = n(927578),
    j = n(35950),
    v = n(272104),
    b = n(652215),
    f = n(788868),
    O = n(985018),
    C = n(106866);

function E(e) {
    var t, n, o, p, h;
    let {
        currentUser: _,
        categories: b,
        purchases: E,
        analyticsLocations: w,
        onClose: P,
        guildId: T,
        initialSelectedNameplate: I
    } = e, N = (0, i.bG)([A.Ay], () => null != T && null != _ ? A.Ay.getMember(T, _.id) : null), k = null != N ? null == (n = N.collectibles) ? void 0 : n.nameplate : null == (o = _.collectibles) ? void 0 : o.nameplate, {
        pendingNameplate: S
    } = (0, g.rv)(_, T), [U, L] = (0, r.useState)(() => {
        var e;
        return null != I ? I : void 0 !== S ? S : null == k ? null : null != (e = (0, u.zd)(E, b).find(e => {
            let {
                skuId: t
            } = e;
            return t === k.skuId
        })) ? e : null
    }), M = (0, g.lw)({
        pendingValue: U,
        userValue: null == _ || null == (p = _.collectibles) ? void 0 : p.nameplate,
        guildValue: null == N || null == (h = N.collectibles) ? void 0 : h.nameplate,
        guildId: T
    }), {
        product: D,
        purchase: R
    } = (0, d.A)(null == U ? void 0 : U.skuId), H = null != R ? (0, u.gA)(R) : (0, u.G0)(D), G = y.Ay.canUseCollectibles(_), F = void 0 === S ? (null == U ? void 0 : U.skuId) === (null == k ? void 0 : k.skuId) : (null == U ? void 0 : U.skuId) === (null == S ? void 0 : S.skuId), z = (0, r.useCallback)(e => {
        P(), (0, c.Cz)({
            analyticsLocations: w,
            analyticsSource: a.A.EDIT_NAMEPLATE_MODAL,
            initialProductSkuId: e
        })
    }, [w, P]);
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: C.wx,
            children: [(0, l.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: O.intl.string(O.t.BwdeM1)
            }), (0, l.jsx)(s.s_y, {
                "data-migration-pending": !0,
                className: C.b,
                onClick: P
            })]
        }), (0, l.jsxs)(s.$mQ, {
            "data-migration-pending": !0,
            className: C.Qs,
            scrollbarType: "none",
            children: [(0, l.jsx)(v.A, {
                currentUser: _,
                selectedNameplate: U,
                guildId: T,
                onSelect: L,
                onOpenShop: z
            }), (0, l.jsx)(j.A, {
                user: _,
                guildId: T,
                nameplate: M
            })]
        }), (0, l.jsxs)(s.jlY, {
            "data-migration-pending": !0,
            className: C.Hx,
            children: [null != R && (!H || G) || null === U ? (0, l.jsx)(s.Button, {
                variant: "primary",
                text: O.intl.string(O.t.Jh8fJz),
                onClick: () => {
                    (0, g.pX)(U, T), P()
                },
                disabled: F
            }) : null == R && (G || !H) ? (0, l.jsx)(s.Button, {
                variant: "primary",
                onClick: () => z(null == D ? void 0 : D.skuId),
                text: O.intl.string(O.t.fYfGgK)
            }) : (0, l.jsx)(x.A, {
                subscriptionTier: f.pe.TIER_2,
                showGradient: !G,
                textOptions: {
                    textOverride: y.Ay.isPremium(_) ? O.intl.string(O.t.KXLX7l) : G ? O.intl.string(O.t.mr4K7D) : O.intl.string(O.t.pj0XBN)
                }
            }), !G && H ? (0, l.jsx)(m.A, {
                itemType: null != (t = null == R ? void 0 : R.type) ? t : null == D ? void 0 : D.type,
                onClose: P
            }) : (0, l.jsx)(s.Button, {
                variant: "secondary",
                text: O.intl.string(O.t["ETE/oC"]),
                onClick: P
            })]
        })]
    })
}

function w(e) {
    let {
        transitionState: t,
        analyticsLocations: n,
        onClose: c,
        guildId: u,
        initialSelectedNameplate: d
    } = e, m = (0, i.bG)([h.default], () => h.default.getCurrentUser()), {
        analyticsLocations: x
    } = (0, o.Ay)(n, a.A.EDIT_NAMEPLATE_MODAL), {
        categories: g,
        purchases: A,
        isFetchingCategories: y,
        isFetchingPurchases: j
    } = (0, p.Ay)(), v = y || j && 0 === A.size;
    return ((0, r.useEffect)(() => {
        _.default.track(b.HAw.OPEN_MODAL, {
            type: b.JJy.NAMEPLATE_CUSTOMIZATION,
            location_stack: x
        })
    }, [x]), null == m) ? null : (0, l.jsx)(o.f5, {
        value: x,
        children: (0, l.jsx)(s.EOs, {
            transitionState: t,
            size: v ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
            parentComponent: "NameplateModal",
            "data-migration-pending": !0,
            children: v ? (0, l.jsx)(s.y$y, {
                className: C.u1,
                type: s.y$y.Type.SPINNING_CIRCLE
            }) : (0, l.jsx)(E, {
                currentUser: m,
                categories: g,
                purchases: A,
                analyticsLocations: x,
                guildId: u,
                initialSelectedNameplate: d,
                onClose: c
            })
        })
    })
}