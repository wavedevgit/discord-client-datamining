/** chunk id: 508971 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(989349),
    a = n.n(r),
    o = n(397927),
    d = n(405269),
    c = n(927018),
    u = n(906688),
    _ = n(416005);

function m(e) {
    let {
        achievementId: t,
        dateUnlocked: n
    } = e, s = (0, c.vM)(t);
    if (null == s) return null;
    let r = null != n,
        {
            name: m,
            description: g,
            hideDescriptionUntilUnlock: A,
            onAction: h
        } = s,
        x = A && !r,
        p = r ? "text-strong" : "text-muted",
        T = r ? "text-default" : "text-muted",
        E = a()(n),
        C = null != h && r,
        S = C ? o.DUT : "div";
    return (0, i.jsxs)(S, {
        className: l()(_.kL, C && _.b),
        onClick: () => {
            C && h()
        },
        children: [(0, i.jsx)("div", {
            className: _.zc,
            children: (0, i.jsx)(u.A, {
                achievementId: t,
                size: u.A.Sizes.SIZE_40,
                unlocked: r
            })
        }), (0, i.jsxs)("div", {
            className: _.VW,
            children: [null != n && (0, i.jsx)(o.Text, {
                variant: "text-xxs/semibold",
                color: "text-muted",
                className: _.YR,
                children: (0, d.mk)(E)
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: p,
                children: m()
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: T,
                children: x ? "?????" : g()
            })]
        })]
    })
}