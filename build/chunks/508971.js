/** chunk id: 508971, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(989349),
    r = n.n(l),
    o = n(397927),
    c = n(405269),
    d = n(927018),
    u = n(906688),
    _ = n(416005);

function m(e) {
    let {
        achievementId: t,
        dateUnlocked: n
    } = e, s = (0, d.vM)(t);
    if (null == s) return null;
    let l = null != n,
        {
            name: m,
            description: A,
            hideDescriptionUntilUnlock: g,
            onAction: h
        } = s,
        x = g && !l,
        p = l ? "text-strong" : "text-muted",
        E = l ? "text-default" : "text-muted",
        C = r()(n),
        T = null != h && l,
        S = T ? o.DUT : "div";
    return (0, i.jsxs)(S, {
        className: a()(_.kL, T && _.b),
        onClick: () => {
            T && h()
        },
        children: [(0, i.jsx)("div", {
            className: _.zc,
            children: (0, i.jsx)(u.A, {
                achievementId: t,
                size: u.A.Sizes.SIZE_40,
                unlocked: l
            })
        }), (0, i.jsxs)("div", {
            className: _.VW,
            children: [null != n && (0, i.jsx)(o.Text, {
                variant: "text-xxs/semibold",
                color: "text-muted",
                className: _.YR,
                children: (0, c.mk)(C)
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: p,
                children: m()
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: E,
                children: x ? "?????" : A()
            })]
        })]
    })
}