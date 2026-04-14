/** chunk id: 302691 params = (module,exports,require) **/
r.d(t, {
    default: () => N
});
var s = r(627968),
    n = r(64700),
    i = r(311907),
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
    _ = r(979286),
    p = r(993408),
    v = r(821701),
    j = r(841702),
    I = r(727170),
    y = r(911647),
    C = r(557182),
    E = r(652215),
    T = r(788868),
    S = r(985018),
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
    } = e, k = (0, i.bG)([x.Ay], () => null != E ? x.Ay.getMember(E.id, t.id) : null), N = null != k ? k.avatarDecoration : t.avatarDecoration, {
        pendingAvatarDecoration: O,
        setPendingAvatarDecoration: P
    } = (0, m.A)({
        analyticsLocations: A,
        guildId: E?.id
    }), [b, D] = n.useState(() => null != j ? j : void 0 !== O ? O : null == N ? null : (0, p.ps)(o, r).find(e => {
        let {
            skuId: t
        } = e;
        return t === N.skuId
    }) ?? null), w = (0, u.lw)({
        pendingValue: b,
        userValue: t?.avatarDecoration,
        guildValue: k?.avatarDecoration,
        guildId: E?.id
    }), {
        product: R,
        purchase: L
    } = (0, v.A)(b?.skuId), M = null != L ? (0, p.gA)(L) : (0, p.G0)(R), U = g.Ay.canUseCollectibles(t), G = n.useRef(null), z = (0, I.A)(A), H = void 0 === O ? b?.skuId === N?.skuId : b?.skuId === O?.skuId, F = n.useCallback(e => {
        h(), (0, _.Cz)({
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
                children: S.intl.string(S.t.HykynS)
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
                    D(e), null != e && z(e)
                },
                onOpenShop: F
            }), (0, s.jsx)(y.A, {
                className: f.kk,
                user: t,
                guildId: E?.id,
                avatarDecoration: w
            })]
        }), (0, s.jsxs)(a.jlY, {
            "data-migration-pending": !0,
            className: f.Hx,
            children: [null != L && (U || !M) || null === b ? (0, s.jsx)(a.Button, {
                variant: "primary",
                text: S.intl.string(S.t.Jh8fJz),
                onClick: () => {
                    P(b), h()
                },
                disabled: H
            }) : null == L && (U || !M) ? (0, s.jsx)(a.Button, {
                variant: "primary",
                onClick: () => F(R?.skuId),
                text: S.intl.string(S.t.fYfGgK)
            }) : (0, s.jsx)(d.A, {
                subscriptionTier: T.pe.TIER_2,
                showGradient: !U,
                textOptions: {
                    textOverride: g.Ay.isPremium(t) ? S.intl.string(S.t.KXLX7l) : U ? S.intl.string(S.t.mr4K7D) : S.intl.string(S.t.pj0XBN)
                }
            }), !U && M ? (0, s.jsx)(c.A, {
                itemType: L?.type ?? R?.type,
                onClose: h
            }) : (0, s.jsx)(a.Button, {
                variant: "secondary",
                text: S.intl.string(S.t["ETE/oC"]),
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
    } = e, x = (0, i.bG)([A.default], () => A.default.getCurrentUser()), {
        analyticsLocations: g
    } = (0, o.Ay)(r, l.A.EDIT_AVATAR_DECORATION_MODAL), {
        categories: _,
        purchases: p,
        isFetchingCategories: v,
        isFetchingPurchases: I
    } = (0, j.Ay)(), y = v || I && 0 === p.size;
    return n.useEffect(() => {
        h.default.track(E.HAw.OPEN_MODAL, {
            type: E.JJy.AVATAR_DECORATION_CUSTOMIZATION,
            location_stack: g
        })
    }, [g]), null == x ? null : (0, s.jsx)(o.f5, {
        value: g,
        children: (0, s.jsx)(a.EOs, {
            transitionState: t,
            className: f.yl,
            size: y ? a.rIJ.DYNAMIC : a.rIJ.MEDIUM,
            parentComponent: "AvatarDecorationModal",
            "data-migration-pending": !0,
            children: y ? (0, s.jsx)(a.y$y, {
                className: f.u1,
                type: a.y$y.Type.SPINNING_CIRCLE
            }) : (0, s.jsx)(k, {
                user: x,
                guild: m,
                categories: _,
                purchases: p,
                analyticsLocations: g,
                initialSelectedDecoration: u,
                onClose: () => {
                    d(), c?.()
                }
            })
        })
    })
}