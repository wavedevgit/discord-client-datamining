/** Chunk was on 68406 **/
/** chunk id: 130453, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => w
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
    v = r(352413),
    A = r(696451),
    f = r(287809),
    y = r(954571),
    _ = r(927578),
    j = r(942225),
    O = r(718100),
    b = r(652215),
    I = r(788868),
    S = r(985018),
    E = r(153193);

function P(e) {
    var t;
    let {
        user: r,
        categories: o,
        purchases: m,
        analyticsLocations: f,
        onClose: y,
        initialSelectedDecoration: b,
        guild: P
    } = e, w = (0, i.bG)([A.Ay], () => null != P ? A.Ay.getMember(P.id, r.id) : null), C = null != w ? w.avatarDecoration : r.avatarDecoration, {
        pendingAvatarDecoration: T,
        setPendingAvatarDecoration: k
    } = (0, v.A)({
        analyticsLocations: f,
        guildId: null == P ? void 0 : P.id
    }), [N, D] = l.useState(() => {
        var e;
        return null != b ? b : void 0 !== T ? T : null == C ? null : null != (e = (0, u.ps)(m, o).find(e => {
            let {
                skuId: t
            } = e;
            return t === C.skuId
        })) ? e : null
    }), R = (0, h.lw)({
        pendingValue: N,
        userValue: null == r ? void 0 : r.avatarDecoration,
        guildValue: null == w ? void 0 : w.avatarDecoration,
        guildId: null == P ? void 0 : P.id
    }), {
        product: L,
        purchase: M
    } = (0, d.A)(null == N ? void 0 : N.skuId), U = null != M ? (0, u.gA)(M) : (0, u.G0)(L), G = _.Ay.canUseCollectibles(r), z = l.useRef(null), H = (0, p.A)(f), B = void 0 === T ? (null == N ? void 0 : N.skuId) === (null == C ? void 0 : C.skuId) : (null == N ? void 0 : N.skuId) === (null == T ? void 0 : T.skuId), K = l.useCallback(e => {
        y(), (0, c.Cz)({
            analyticsLocations: f,
            analyticsSource: a.A.EDIT_AVATAR_DECORATION_MODAL,
            initialProductSkuId: e
        })
    }, [f, y]);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: E.Hc,
            children: [(0, n.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: S.intl.string(S.t.HykynS)
            }), (0, n.jsx)(s.s_y, {
                "data-migration-pending": !0,
                className: E.iT,
                onClick: y
            })]
        }), (0, n.jsxs)(s.$mQ, {
            "data-migration-pending": !0,
            className: E.jE,
            scrollbarType: "none",
            children: [(0, n.jsx)(O.A, {
                user: r,
                guild: P,
                pendingAvatarDecoration: N,
                selectedAvatarDecorationRef: z,
                onSelect: e => {
                    D(e), null != e && H(e)
                },
                onOpenShop: K
            }), (0, n.jsx)(j.A, {
                className: E.kk,
                user: r,
                guildId: null == P ? void 0 : P.id,
                avatarDecoration: R
            })]
        }), (0, n.jsxs)(s.jlY, {
            "data-migration-pending": !0,
            className: E.Hx,
            children: [null != M && (G || !U) || null === N ? (0, n.jsx)(s.Button, {
                variant: "primary",
                text: S.intl.string(S.t.Jh8fJz),
                onClick: () => {
                    k(N), y()
                },
                disabled: B
            }) : null == M && (G || !U) ? (0, n.jsx)(s.Button, {
                variant: "primary",
                onClick: () => K(null == L ? void 0 : L.skuId),
                text: S.intl.string(S.t.fYfGgK)
            }) : (0, n.jsx)(g.A, {
                subscriptionTier: I.pe.TIER_2,
                showGradient: !G,
                textOptions: {
                    textOverride: _.Ay.isPremium(r) ? S.intl.string(S.t.KXLX7l) : G ? S.intl.string(S.t.mr4K7D) : S.intl.string(S.t.pj0XBN)
                }
            }), !G && U ? (0, n.jsx)(x.A, {
                itemType: null != (t = null == M ? void 0 : M.type) ? t : null == L ? void 0 : L.type,
                onClose: y
            }) : (0, n.jsx)(s.Button, {
                variant: "secondary",
                text: S.intl.string(S.t["ETE/oC"]),
                onClick: y
            })]
        })]
    })
}

function w(e) {
    let {
        transitionState: t,
        analyticsLocations: r,
        onClose: c,
        onCloseModal: u,
        initialSelectedDecoration: d,
        guild: p
    } = e, x = (0, i.bG)([f.default], () => f.default.getCurrentUser()), {
        analyticsLocations: g
    } = (0, o.Ay)(r, a.A.EDIT_AVATAR_DECORATION_MODAL), {
        categories: h,
        purchases: v,
        isFetchingCategories: A,
        isFetchingPurchases: _
    } = (0, m.Ay)(), j = A || _ && 0 === v.size;
    return l.useEffect(() => {
        y.default.track(b.HAw.OPEN_MODAL, {
            type: b.JJy.AVATAR_DECORATION_CUSTOMIZATION,
            location_stack: g
        })
    }, [g]), null == x ? null : (0, n.jsx)(o.f5, {
        value: g,
        children: (0, n.jsx)(s.EOs, {
            transitionState: t,
            className: E.yl,
            size: j ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
            parentComponent: "AvatarDecorationModal",
            "data-migration-pending": !0,
            children: j ? (0, n.jsx)(s.y$y, {
                className: E.u1,
                type: s.y$y.Type.SPINNING_CIRCLE
            }) : (0, n.jsx)(P, {
                user: x,
                guild: p,
                categories: h,
                purchases: v,
                analyticsLocations: g,
                initialSelectedDecoration: d,
                onClose: () => {
                    u(), null == c || c()
                }
            })
        })
    })
}