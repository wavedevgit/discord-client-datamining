/** Chunk was on 2824 **/
/** chunk id: 877156, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(575593),
    s = n(311907),
    a = n(732955),
    o = n(397927),
    u = n(775602),
    c = n(688810),
    d = n(920064),
    p = n(674658),
    m = n(61750),
    g = n(235986),
    f = n(369496),
    y = n(550111),
    j = n(552736),
    b = n(287809),
    h = n(482132),
    v = n(758836),
    O = n(401506);

function P(e) {
    let {
        reward: t,
        purchase: n,
        onClose: P
    } = e, E = (0, s.bG)([b.default], () => b.default.getCurrentUser()), x = (0, s.bG)([u.A], () => u.A.useReducedMotion), {
        analyticsLocations: S
    } = (0, c.Ay)(), T = o._3J.SIZE_32, I = (0, d.A)(t.assetId, T, !x), A = (0, j.A)(), k = null == A ? void 0 : A.giftPurchaseConfirmation, {
        product: C,
        isFetching: w
    } = (0, p.q)(n.skuId), _ = t.type === i.R.NAMEPLATE, [M, N] = l.useState(!1), R = l.useMemo(() => {
        var e, n;
        return _ && null != t.assetId ? {
            src: t.assetId,
            palette: (0, f.H6)(null != (e = t.palette) ? e : "sky"),
            imgAlt: null == (n = t.a11yLabel) ? void 0 : n.call(t)
        } : null
    }, [_, t]);
    return null == k ? null : (0, r.jsx)(h.UX, {
        children: (0, r.jsx)(o.jlY, {
            align: g.A.Align.CENTER,
            "data-migration-pending": !0,
            children: (0, r.jsxs)("div", {
                className: O.W,
                children: [_ && null != R ? (0, r.jsx)("div", {
                    className: O.D,
                    onMouseEnter: () => N(!0),
                    onMouseLeave: () => N(!1),
                    children: (0, r.jsx)(y.a, {
                        user: E,
                        nameplate: null,
                        nameplateData: R,
                        showPlaceholderUser: !0,
                        nameplatePreviewSize: "xsmall",
                        isHighlighted: M
                    })
                }) : (0, r.jsx)(o.JsQ, {
                    "aria-label": null == E ? void 0 : E.username,
                    size: T,
                    src: null == E ? void 0 : E.getAvatarURL(void 0, (0, o.FT9)(T), !x),
                    avatarDecoration: I
                }), (0, r.jsx)(a.$nd, {
                    variant: "primary",
                    text: k.collectRewardButtonText(),
                    loading: w,
                    onClick: () => {
                        null != C && (P(), (0, m.A)({
                            product: C,
                            shouldShowPromotionalExperience: !0,
                            analyticsLocations: S,
                            purchaseType: v.gs.PROMOTIONAL
                        }))
                    }
                })]
            })
        })
    })
}