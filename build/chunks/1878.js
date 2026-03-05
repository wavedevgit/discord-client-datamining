/** chunk id: 1878, original params: e,t,i (module,exports,require) **/
i.d(t, {
    K: () => u
});
var r = i(627968),
    n = i(311907),
    a = i(397927),
    s = i(775602),
    l = i(937008),
    o = i(552736),
    c = i(810498),
    d = i(298305),
    m = i(689350);

function u() {
    let e = (0, n.bG)([s.A], () => s.A.useReducedMotion),
        {
            claimableRewards: t
        } = (0, l.Pv)(),
        i = (0, o.A)(),
        u = i?.planSelection;
    if (null == u || null == t || 0 === t.length) return null;
    let C = (0, c.gc)(u.getBannerImageUrl?.()),
        x = (0, c.K5)(u.gradientConfig, {
            defaultAngle: 180
        });
    return (0, r.jsxs)("div", {
        className: m.us,
        style: C ?? x,
        children: [(0, r.jsxs)("div", {
            className: m.ZR,
            children: [(0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: u.heading()
            }), null != u.subheading && (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                children: u.subheading(t.length)
            })]
        }), (0, r.jsx)("div", {
            className: m.my,
            children: (0, r.jsx)(d.A, {
                maxRewardImageSrc: u.getImageUrl(!0, e),
                claimableRewards: t,
                size: a._3J.SIZE_80
            })
        })]
    })
}