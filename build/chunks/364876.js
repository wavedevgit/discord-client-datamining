/** chunk id: 364876, original params: e,n,t (module,exports,require) **/
t.d(n, {
    _: () => E
});
var r = t(627968);
t(64700);
var l = t(877624),
    i = t(311907),
    s = t(397927),
    a = t(937008),
    o = t(807098),
    u = t(412260),
    c = t(810498),
    d = t(298305),
    p = t(985018),
    m = t(686046);

function E() {
    var e;
    let n = (0, i.bG)([u.A], () => {
            let e = u.A.getMarketingComponentByType(l.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftCustomizationBanner
        }),
        {
            claimableRewards: t
        } = (0, a.Pv)(),
        E = (0, o.T)(null == n ? void 0 : n.asset),
        g = (0, o.T)(null == n ? void 0 : n.backgroundAsset),
        f = null == n ? void 0 : n.gradient,
        P = null != f && null != f.colors && f.colors.length >= 2 ? (0, c.K5)({
            gradient: f.colors,
            angle: null != (e = f.angle) ? e : void 0
        }, {
            colorStops: [0, 12, 100]
        }) : void 0,
        j = (0, c.gc)(null != g ? g : void 0);
    null != j && (j.backgroundSize = "cover, auto", j.backgroundPosition = "right center, 0% 0%");
    let h = (0, c.x)(j, P);
    return null == n || null == t ? null : (0, r.jsxs)("div", {
        className: m.qD,
        style: h,
        children: [(0, r.jsx)("div", {
            className: m.my,
            children: (0, r.jsx)(d.A, {
                claimableRewards: t,
                maxRewardImageSrc: null != E ? E : "",
                size: s._3J.SIZE_40,
                imageScaling: 1.25
            })
        }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            className: m._M,
            color: "always-white",
            children: p.intl.string(p.t.Abiuci)
        })]
    })
}