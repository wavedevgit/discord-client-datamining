/** chunk id: 1878 params = (module,exports,require) **/
r.d(t, {
    K: () => u
});
var n = r(627968),
    i = r(311907),
    a = r(397927),
    s = r(775602),
    l = r(937008),
    o = r(552736),
    c = r(810498),
    d = r(298305),
    m = r(431705);

function u() {
    let e = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        {
            claimableRewards: t
        } = (0, l.Pv)(),
        r = (0, o.A)(),
        u = r?.planSelection;
    if (null == u || null == t || 0 === t.length) return null;
    let T = (0, c.gc)(u.getBannerImageUrl?.()),
        g = (0, c.K5)(u.gradientConfig, {
            defaultAngle: 180
        });
    return (0, n.jsxs)("div", {
        className: m.us,
        style: T ?? g,
        children: [(0, n.jsxs)("div", {
            className: m.ZR,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: u.heading()
            }), null != u.subheading && (0, n.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                children: u.subheading(t.length)
            })]
        }), (0, n.jsx)("div", {
            className: m.my,
            children: (0, n.jsx)(d.A, {
                maxRewardImageSrc: u.getImageUrl(!0, e),
                claimableRewards: t,
                size: a._3J.SIZE_80
            })
        })]
    })
}