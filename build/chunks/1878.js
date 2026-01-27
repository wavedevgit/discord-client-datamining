/** Chunk was on 2292 **/
/** chunk id: 1878, original params: e,t,r (module,exports,require) **/
r.d(t, {
    K: () => m
});
var n = r(627968),
    i = r(311907),
    l = r(397927),
    a = r(775602),
    s = r(937008),
    o = r(552736),
    c = r(810498),
    u = r(298305),
    d = r(733724);

function m() {
    var e;
    let t = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        {
            claimableRewards: r
        } = (0, s.Pv)(),
        m = (0, o.A)(),
        p = null == m ? void 0 : m.planSelection;
    if (null == p || null == r || 0 === r.length) return null;
    let g = (0, c.gc)(null == (e = p.getBannerImageUrl) ? void 0 : e.call(p)),
        x = (0, c.K5)(p.gradientConfig, {
            defaultAngle: 180
        });
    return (0, n.jsxs)("div", {
        className: d.us,
        style: null != g ? g : x,
        children: [(0, n.jsxs)("div", {
            className: d.ZR,
            children: [(0, n.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: p.heading()
            }), null != p.subheading && (0, n.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                children: p.subheading(r.length)
            })]
        }), (0, n.jsx)("div", {
            className: d.my,
            children: (0, n.jsx)(u.A, {
                maxRewardImageSrc: p.getImageUrl(!0, t),
                claimableRewards: r,
                size: l._3J.SIZE_80
            })
        })]
    })
}