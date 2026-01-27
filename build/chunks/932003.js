/** Chunk was on 2292 **/
/** chunk id: 932003, original params: e,t,r (module,exports,require) **/
r.d(t, {
    b: () => x
});
var n = r(627968);
r(64700);
var i = r(877624),
    l = r(311907),
    a = r(397927),
    s = r(775602),
    o = r(937008),
    c = r(807098),
    u = r(412260),
    d = r(810498),
    m = r(298305),
    p = r(985018),
    g = r(708611);

function x() {
    var e;
    let t = (0, l.bG)([s.A], () => s.A.useReducedMotion),
        {
            claimableRewards: r
        } = (0, o.Pv)(),
        x = (0, l.bG)([u.A], () => {
            let e = u.A.getMarketingComponentByType(i.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftPlanSelectionCardBanner
        }),
        C = (0, c.T)(null == x ? void 0 : x.bannerAsset),
        f = (0, c.T)(null == x ? void 0 : x.avatarAsset),
        T = null == x ? void 0 : x.gradient,
        h = null != T && null != T.colors && T.colors.length >= 2 ? (0, d.K5)({
            gradient: T.colors,
            angle: null != (e = T.angle) ? e : void 0
        }) : void 0;
    return null == x || null == r || 0 === r.length ? null : (0, n.jsxs)("div", {
        className: g.kL,
        style: h,
        children: [null != C && (0, n.jsx)("div", {
            className: g._e,
            style: {
                backgroundImage: "url(".concat(C, ")")
            }
        }), (0, n.jsxs)("div", {
            className: g.V_,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-md/bold",
                color: "always-white",
                children: p.intl.string(p.t.OEtqpm)
            }), (0, n.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "always-white",
                children: p.intl.formatToPlainString(p.t["2h5M+X"], {
                    availableCount: r.length
                })
            })]
        }), (0, n.jsx)("div", {
            className: g.my,
            children: null != f ? (0, n.jsx)(m.A, {
                maxRewardImageSrc: f,
                claimableRewards: r,
                size: a._3J.SIZE_48,
                imageScaling: t ? 1.9 : 2.4
            }) : null
        })]
    })
}