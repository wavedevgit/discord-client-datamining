/** Chunk was on 68406 **/
/** chunk id: 130453, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => C
}), r(896048);
var n = r(627968),
    l = r(64700),
    i = r(311907),
    s = r(397927),
    a = r(793574),
    o = r(688810),
    c = r(979286),
    u = r(993408),
    d = r(821701),
    m = r(841702),
    p = r(727170),
    x = r(571827),
    g = r(465794),
    h = r(919395),
    A = r(352413),
    v = r(696451),
    y = r(287809),
    f = r(954571),
    _ = r(927578),
    j = r(942225),
    O = r(718100),
    b = r(652215),
    I = r(788868),
    P = r(985018),
    S = r(153193);

function E(e) {
    var t;
    let {
        user: r,
        categories: o,
        purchases: m,
        analyticsLocations: y,
        onClose: f,
        initialSelectedDecoration: b,
        guild: E
    } = e, C = (0, i.bG)([v.Ay], () => null != E ? v.Ay.getMember(E.id, r.id) : null), w = null != C ? C.avatarDecoration : r.avatarDecoration, {
        pendingAvatarDecoration: T,
        setPendingAvatarDecoration: k
    } = (0, A.A)({
        analyticsLocations: y,
        guildId: null == E ? void 0 : E.id
    }), [N, D] = l.useState(() => {
        var e;
        return null != b ? b : void 0 !== T ? T : null == w ? null : null != (e = (0, u.ps)(m, o).find(e => {
            let {
                skuId: t
            } = e;
            return t === w.skuId
        })) ? e : null
    }), R = (0, h.lw)({
        pendingValue: N,
        userValue: null == r ? void 0 : r.avatarDecoration,
        guildValue: null == C ? void 0 : C.avatarDecoration,
        guildId: null == E ? void 0 : E.id
    }), {
        product: L,
        purchase: M
    } = (0, d.A)(null == N ? void 0 : N.skuId), U = null != M ? (0, u.gA)(M) : (0, u.G0)(L), G = _.Ay.canUseCollectibles(r), z = l.useRef(null), H = (0, p.A)(y), K = void 0 === T ? (null == N ? void 0 : N.skuId) === (null == w ? void 0 : w.skuId) : (null == N ? void 0 : N.skuId) === (null == T ? void 0 : T.skuId), B = l.useCallback(e => {
        f(), (0, c.Cz)({
            analyticsLocations: y,
            analyticsSource: a.A.EDIT_AVATAR_DECORATION_MODAL,
            initialProductSkuId: e
        })
    }, [y, f]);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: S.Hc,
            children: [(0, n.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: P.intl.string(P.t.HykynS)
            }), (0, n.jsx)(s.s_y, {
                "data-migration-pending": !0,
                className: S.iT,
                onClick: f
            })]
        }), (0, n.jsxs)(s.$mQ, {
            "data-migration-pending": !0,
            className: S.jE,
            scrollbarType: "none",
            children: [(0, n.jsx)(O.A, {
                user: r,
                guild: E,
                pendingAvatarDecoration: N,
                selectedAvatarDecorationRef: z,
                onSelect: e => {
                    D(e), null != e && H(e)
                },
                onOpenShop: B
            }), (0, n.jsx)(j.A, {
                className: S.kk,
                user: r,
                guildId: null == E ? void 0 : E.id,
                avatarDecoration: R
            })]
        }), (0, n.jsxs)(s.jlY, {
            "data-migration-pending": !0,
            className: S.Hx,
            children: [null != M && (G || !U) || null === N ? (0, n.jsx)(s.Button, {
                variant: "primary",
                text: P.intl.string(P.t.Jh8fJz),
                onClick: () => {
                    k(N), f()
                },
                disabled: K
            }) : null == M && (G || !U) ? (0, n.jsx)(s.Button, {
                variant: "primary",
                onClick: () => B(null == L ? void 0 : L.skuId),
                text: P.intl.string(P.t.fYfGgK)
            }) : (0, n.jsx)(g.A, {
                subscriptionTier: I.pe.TIER_2,
                showGradient: !G,
                textOptions: {
                    textOverride: _.Ay.isPremium(r) ? P.intl.string(P.t.KXLX7l) : G ? P.intl.string(P.t.mr4K7D) : P.intl.string(P.t.pj0XBN)
                }
            }), !G && U ? (0, n.jsx)(x.A, {
                itemType: null != (t = null == M ? void 0 : M.type) ? t : null == L ? void 0 : L.type,
                onClose: f
            }) : (0, n.jsx)(s.Button, {
                variant: "secondary",
                text: P.intl.string(P.t["ETE/oC"]),
                onClick: f
            })]
        })]
    })
}

function C(e) {
    let {
        transitionState: t,
        analyticsLocations: r,
        onClose: c,
        onCloseModal: u,
        initialSelectedDecoration: d,
        guild: p
    } = e, x = (0, i.bG)([y.default], () => y.default.getCurrentUser()), {
        analyticsLocations: g
    } = (0, o.Ay)(r, a.A.EDIT_AVATAR_DECORATION_MODAL), {
        categories: h,
        purchases: A,
        isFetchingCategories: v,
        isFetchingPurchases: _
    } = (0, m.Ay)(), j = v || _ && 0 === A.size;
    return l.useEffect(() => {
        f.default.track(b.HAw.OPEN_MODAL, {
            type: b.JJy.AVATAR_DECORATION_CUSTOMIZATION,
            location_stack: g
        })
    }, [g]), null == x ? null : (0, n.jsx)(o.f5, {
        value: g,
        children: (0, n.jsx)(s.EOs, {
            transitionState: t,
            className: S.yl,
            size: j ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
            parentComponent: "AvatarDecorationModal",
            "data-migration-pending": !0,
            children: j ? (0, n.jsx)(s.y$y, {
                className: S.u1,
                type: s.y$y.Type.SPINNING_CIRCLE
            }) : (0, n.jsx)(E, {
                user: x,
                guild: p,
                categories: h,
                purchases: A,
                analyticsLocations: g,
                initialSelectedDecoration: d,
                onClose: () => {
                    u(), null == c || c()
                }
            })
        })
    })
}