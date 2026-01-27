/** Chunk was on 2824 **/
/** chunk id: 364876, original params: e,n,t (module,exports,require) **/
t.d(n, {
    _: () => f
});
var l = t(627968),
    r = t(64700),
    i = t(877624),
    s = t(311907),
    a = t(397927),
    o = t(937008),
    u = t(807098),
    c = t(412260),
    d = t(810498),
    p = t(298305),
    m = t(985018),
    g = t(686046);

function f() {
    var e;
    let n = (0, s.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(i.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftCustomizationBanner
        }),
        {
            claimableRewards: t
        } = (0, o.Pv)(),
        f = (0, u.T)(null == n ? void 0 : n.asset),
        j = (0, u.T)(null == n ? void 0 : n.backgroundAsset),
        E = null == n ? void 0 : n.gradient,
        x = null != E && null != E.colors && E.colors.length >= 2 ? (0, d.K5)({
            gradient: E.colors,
            angle: null != (e = E.angle) ? e : void 0
        }, {
            colorStops: [0, 12, 100]
        }) : void 0,
        h = r.useMemo(() => (0, d.gc)(null != j ? j : void 0), [j]),
        T = r.useMemo(() => (0, d.x)(h, x, {
            backgroundSize: "cover, auto",
            backgroundPosition: "right center, 0% 0%"
        }), [h, x]);
    return null == n || null == t ? null : (0, l.jsxs)("div", {
        className: g.qD,
        style: T,
        children: [(0, l.jsx)("div", {
            className: g.my,
            children: (0, l.jsx)(p.A, {
                claimableRewards: t,
                maxRewardImageSrc: null != f ? f : "",
                size: a._3J.SIZE_40,
                imageScaling: 1.25
            })
        }), (0, l.jsx)(a.Text, {
            variant: "text-md/medium",
            className: g._M,
            color: "always-white",
            children: m.intl.string(m.t.Abiuci)
        })]
    })
}