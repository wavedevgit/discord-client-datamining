/** chunk id: 302691 params = (module,exports,require) **/
r.d(t, {
    default: () => N
});
var s = r(627968),
    i = r(64700),
    n = r(311907),
    a = r(397927),
    l = r(793574),
    o = r(688810),
    c = r(571827),
    d = r(725807),
    u = r(919395),
    m = r(352413),
    x = r(696451),
    A = r(287809),
    h = r(954571),
    g = r(927578),
    p = r(979286),
    _ = r(993408),
    v = r(821701),
    j = r(841702),
    y = r(727170),
    I = r(911647),
    C = r(557182),
    E = r(652215),
    S = r(788868),
    T = r(985018),
    f = r(852266);

function k(e) {
    let {
        user: t,
        categories: r,
        purchases: o,
        analyticsLocations: A,
        onClose: h,
        initialSelectedDecoration: j,
        guild: E
    } = e, k = (0, n.bG)([x.Ay], () => null != E ? x.Ay.getMember(E.id, t.id) : null), N = null != k ? k.avatarDecoration : t.avatarDecoration, {
        pendingAvatarDecoration: P,
        setPendingAvatarDecoration: O
    } = (0, m.A)({
        analyticsLocations: A,
        guildId: E?.id
    }), [b, w] = i.useState(() => null != j ? j : void 0 !== P ? P : null == N ? null : (0, _.ps)(o, r).find(e => {
        let {
            skuId: t
        } = e;
        return t === N.skuId
    }) ?? null), D = (0, u.lw)({
        pendingValue: b,
        userValue: t?.avatarDecoration,
        guildValue: k?.avatarDecoration,
        guildId: E?.id
    }), {
        product: R,
        purchase: L
    } = (0, v.A)(b?.skuId), M = null != L ? (0, _.gA)(L) : (0, _.G0)(R), U = g.Ay.canUseCollectibles(t), G = i.useRef(null), z = (0, y.A)(A), H = void 0 === P ? b?.skuId === N?.skuId : b?.skuId === P?.skuId, B = i.useCallback(e => {
        h(), (0, p.Cz)({
            analyticsLocations: A,
            analyticsSource: l.A.EDIT_AVATAR_DECORATION_MODAL,
            initialProductSkuId: e
        })
    }, [A, h]);
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsxs)(a.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: f.Hc,
            children: [(0, s.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                children: T.intl.string(T.t.HykynS)
            }), (0, s.jsx)(a.s_y, {
                "data-migration-pending": !0,
                className: f.iT,
                onClick: h
            })]
        }), (0, s.jsxs)(a.$mQ, {
            "data-migration-pending": !0,
            className: f.jE,
            scrollbarType: "none",
            children: [(0, s.jsx)(C.A, {
                user: t,
                guild: E,
                pendingAvatarDecoration: b,
                selectedAvatarDecorationRef: G,
                onSelect: e => {
                    w(e), null != e && z(e)
                },
                onOpenShop: B
            }), (0, s.jsx)(I.A, {
                className: f.kk,
                user: t,
                guildId: E?.id,
                avatarDecoration: D
            })]
        }), (0, s.jsxs)(a.jlY, {
            "data-migration-pending": !0,
            className: f.Hx,
            children: [null != L && (U || !M) || null === b ? (0, s.jsx)(a.Button, {
                variant: "primary",
                text: T.intl.string(T.t.Jh8fJz),
                onClick: () => {
                    O(b), h()
                },
                disabled: H
            }) : null == L && (U || !M) ? (0, s.jsx)(a.Button, {
                variant: "primary",
                onClick: () => B(R?.skuId),
                text: T.intl.string(T.t.fYfGgK)
            }) : (0, s.jsx)(d.A, {
                subscriptionTier: S.pe.TIER_2,
                showGradient: !U,
                textOptions: {
                    textOverride: g.Ay.isPremium(t) ? T.intl.string(T.t.KXLX7l) : U ? T.intl.string(T.t.mr4K7D) : T.intl.string(T.t.pj0XBN)
                }
            }), !U && M ? (0, s.jsx)(c.A, {
                itemType: L?.type ?? R?.type,
                onClose: h
            }) : (0, s.jsx)(a.Button, {
                variant: "secondary",
                text: T.intl.string(T.t["ETE/oC"]),
                onClick: h
            })]
        })]
    })
}

function N(e) {
    let {
        transitionState: t,
        analyticsLocations: r,
        onClose: c,
        onCloseModal: d,
        initialSelectedDecoration: u,
        guild: m
    } = e, x = (0, n.bG)([A.default], () => A.default.getCurrentUser()), {
        analyticsLocations: g
    } = (0, o.Ay)(r, l.A.EDIT_AVATAR_DECORATION_MODAL), {
        categories: p,
        purchases: _,
        isFetchingCategories: v,
        isFetchingPurchases: y
    } = (0, j.Ay)(), I = v || y && 0 === _.size;
    return i.useEffect(() => {
        h.default.track(E.HAw.OPEN_MODAL, {
            type: E.JJy.AVATAR_DECORATION_CUSTOMIZATION,
            location_stack: g
        })
    }, [g]), null == x ? null : (0, s.jsx)(o.f5, {
        value: g,
        children: (0, s.jsx)(a.EOs, {
            transitionState: t,
            className: f.yl,
            size: I ? a.rIJ.DYNAMIC : a.rIJ.MEDIUM,
            parentComponent: "AvatarDecorationModal",
            "data-migration-pending": !0,
            children: I ? (0, s.jsx)(a.y$y, {
                className: f.u1,
                type: a.y$y.Type.SPINNING_CIRCLE
            }) : (0, s.jsx)(k, {
                user: x,
                guild: m,
                categories: p,
                purchases: _,
                analyticsLocations: g,
                initialSelectedDecoration: u,
                onClose: () => {
                    d(), c?.()
                }
            })
        })
    })
}