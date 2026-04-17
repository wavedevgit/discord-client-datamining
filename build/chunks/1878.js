/** chunk id: 1878 params = (module,exports,require) **/
r.d(t, {
    K: () => m
});
var n = r(627968),
    i = r(311907),
    a = r(397927),
    s = r(775602),
    l = r(937008),
    o = r(552736),
    c = r(810498),
    d = r(298305),
    u = r(731113);

function m() {
    let e = (0, i.bG)([s.A], () => s.A.useReducedMotion),
        {
            claimableRewards: t
        } = (0, l.Pv)(),
        r = (0, o.A)(),
        m = r?.planSelection;
    if (null == m || null == t || 0 === t.length) return null;
    let x = (0, c.gc)(m.getBannerImageUrl?.()),
        g = (0, c.K5)(m.gradientConfig, {
            defaultAngle: 180
        });
    return (0, n.jsxs)("div", {
        className: u.us,
        style: x ?? g,
        children: [(0, n.jsxs)("div", {
            className: u.ZR,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: m.heading()
            }), null != m.subheading && (0, n.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                children: m.subheading(t.length)
            })]
        }), (0, n.jsx)("div", {
            className: u.my,
            children: (0, n.jsx)(d.A, {
                maxRewardImageSrc: m.getImageUrl(!0, e),
                claimableRewards: t,
                size: a._3J.SIZE_80
            })
        })]
    })
}