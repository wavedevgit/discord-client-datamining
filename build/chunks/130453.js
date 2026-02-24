/** chunk id: 130453, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => N
});
var s = r(627968),
    i = r(64700),
    n = r(311907),
    a = r(397927),
    l = r(793574),
    o = r(688810),
    c = r(979286),
    d = r(993408),
    u = r(821701),
    m = r(841702),
    x = r(727170),
    A = r(571827),
    h = r(465794),
    g = r(919395),
    p = r(352413),
    _ = r(696451),
    v = r(287809),
    j = r(954571),
    y = r(927578),
    I = r(942225),
    f = r(718100),
    C = r(652215),
    E = r(788868),
    S = r(985018),
    T = r(565339);

function k(e) {
    let {
        user: t,
        categories: r,
        purchases: o,
        analyticsLocations: m,
        onClose: v,
        initialSelectedDecoration: j,
        guild: C
    } = e, k = (0, n.bG)([_.Ay], () => null != C ? _.Ay.getMember(C.id, t.id) : null), N = null != k ? k.avatarDecoration : t.avatarDecoration, {
        pendingAvatarDecoration: P,
        setPendingAvatarDecoration: O
    } = (0, p.A)({
        analyticsLocations: m,
        guildId: C?.id
    }), [w, D] = i.useState(() => null != j ? j : void 0 !== P ? P : null == N ? null : (0, d.ps)(o, r).find(e => {
        let {
            skuId: t
        } = e;
        return t === N.skuId
    }) ?? null), b = (0, g.lw)({
        pendingValue: w,
        userValue: t?.avatarDecoration,
        guildValue: k?.avatarDecoration,
        guildId: C?.id
    }), {
        product: R,
        purchase: L
    } = (0, u.A)(w?.skuId), M = null != L ? (0, d.gA)(L) : (0, d.G0)(R), U = y.Ay.canUseCollectibles(t), G = i.useRef(null), z = (0, x.A)(m), H = void 0 === P ? w?.skuId === N?.skuId : w?.skuId === P?.skuId, B = i.useCallback(e => {
        v(), (0, c.Cz)({
            analyticsLocations: m,
            analyticsSource: l.A.EDIT_AVATAR_DECORATION_MODAL,
            initialProductSkuId: e
        })
    }, [m, v]);
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsxs)(a.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: T.Hc,
            children: [(0, s.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                children: S.intl.string(S.t.HykynS)
            }), (0, s.jsx)(a.s_y, {
                "data-migration-pending": !0,
                className: T.iT,
                onClick: v
            })]
        }), (0, s.jsxs)(a.$mQ, {
            "data-migration-pending": !0,
            className: T.jE,
            scrollbarType: "none",
            children: [(0, s.jsx)(f.A, {
                user: t,
                guild: C,
                pendingAvatarDecoration: w,
                selectedAvatarDecorationRef: G,
                onSelect: e => {
                    D(e), null != e && z(e)
                },
                onOpenShop: B
            }), (0, s.jsx)(I.A, {
                className: T.kk,
                user: t,
                guildId: C?.id,
                avatarDecoration: b
            })]
        }), (0, s.jsxs)(a.jlY, {
            "data-migration-pending": !0,
            className: T.Hx,
            children: [null != L && (U || !M) || null === w ? (0, s.jsx)(a.Button, {
                variant: "primary",
                text: S.intl.string(S.t.Jh8fJz),
                onClick: () => {
                    O(w), v()
                },
                disabled: H
            }) : null == L && (U || !M) ? (0, s.jsx)(a.Button, {
                variant: "primary",
                onClick: () => B(R?.skuId),
                text: S.intl.string(S.t.fYfGgK)
            }) : (0, s.jsx)(h.A, {
                subscriptionTier: E.pe.TIER_2,
                showGradient: !U,
                textOptions: {
                    textOverride: y.Ay.isPremium(t) ? S.intl.string(S.t.KXLX7l) : U ? S.intl.string(S.t.mr4K7D) : S.intl.string(S.t.pj0XBN)
                }
            }), !U && M ? (0, s.jsx)(A.A, {
                itemType: L?.type ?? R?.type,
                onClose: v
            }) : (0, s.jsx)(a.Button, {
                variant: "secondary",
                text: S.intl.string(S.t["ETE/oC"]),
                onClick: v
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
        guild: x
    } = e, A = (0, n.bG)([v.default], () => v.default.getCurrentUser()), {
        analyticsLocations: h
    } = (0, o.Ay)(r, l.A.EDIT_AVATAR_DECORATION_MODAL), {
        categories: g,
        purchases: p,
        isFetchingCategories: _,
        isFetchingPurchases: y
    } = (0, m.Ay)(), I = _ || y && 0 === p.size;
    return i.useEffect(() => {
        j.default.track(C.HAw.OPEN_MODAL, {
            type: C.JJy.AVATAR_DECORATION_CUSTOMIZATION,
            location_stack: h
        })
    }, [h]), null == A ? null : (0, s.jsx)(o.f5, {
        value: h,
        children: (0, s.jsx)(a.EOs, {
            transitionState: t,
            className: T.yl,
            size: I ? a.rIJ.DYNAMIC : a.rIJ.MEDIUM,
            parentComponent: "AvatarDecorationModal",
            "data-migration-pending": !0,
            children: I ? (0, s.jsx)(a.y$y, {
                className: T.u1,
                type: a.y$y.Type.SPINNING_CIRCLE
            }) : (0, s.jsx)(k, {
                user: A,
                guild: x,
                categories: g,
                purchases: p,
                analyticsLocations: h,
                initialSelectedDecoration: u,
                onClose: () => {
                    d(), c?.()
                }
            })
        })
    })
}