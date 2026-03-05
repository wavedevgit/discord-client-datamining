/** chunk id: 364876, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => E
});
var l = n(627968);
n(64700);
var i = n(877624),
    s = n(311907),
    r = n(397927),
    a = n(937008),
    o = n(807098),
    u = n(412260),
    d = n(810498),
    c = n(298305),
    p = n(985018),
    m = n(673768);

function E() {
    let e = (0, s.bG)([u.A], () => {
            let e = u.A.getMarketingComponentByType(i.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftCustomizationBanner
        }),
        {
            claimableRewards: t
        } = (0, a.Pv)(),
        n = (0, o.T)(e?.asset),
        E = (0, o.T)(e?.backgroundAsset),
        _ = e?.gradient,
        h = null != _ && null != _.colors && _.colors.length >= 2 ? (0, d.K5)({
            gradient: _.colors,
            angle: _.angle ?? void 0
        }) : void 0,
        x = (0, d.gc)(E);
    null != x && (x.backgroundSize = "cover, auto", x.backgroundPosition = "right center, 0% 0%");
    let S = (0, d.x)(x, h);
    return null == e || null == t ? null : (0, l.jsxs)("div", {
        className: m.qD,
        style: S,
        children: [(0, l.jsx)("div", {
            className: m.my,
            children: (0, l.jsx)(c.A, {
                claimableRewards: t,
                maxRewardImageSrc: n ?? "",
                size: r._3J.SIZE_40,
                imageScaling: 1.25
            })
        }), (0, l.jsx)(r.Text, {
            variant: "text-md/medium",
            className: m._M,
            color: "always-white",
            children: p.intl.string(p.t.Abiuci)
        })]
    })
}