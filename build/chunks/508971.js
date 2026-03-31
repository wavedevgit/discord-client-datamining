/** chunk id: 508971 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(989349),
    r = n.n(a),
    o = n(397927),
    d = n(405269),
    c = n(927018),
    u = n(906688),
    m = n(641288);

function g(e) {
    let {
        achievementId: t,
        dateUnlocked: n
    } = e, s = (0, c.vM)(t);
    if (null == s) return null;
    let a = null != n,
        {
            name: g,
            description: _,
            hideDescriptionUntilUnlock: A,
            onAction: x
        } = s,
        h = A && !a,
        p = a ? "text-strong" : "text-muted",
        T = a ? "text-default" : "text-muted",
        f = r()(n),
        E = null != x && a,
        S = E ? o.DUT : "div";
    return (0, i.jsxs)(S, {
        className: l()(m.kL, E && m.b),
        onClick: () => {
            E && x()
        },
        children: [(0, i.jsx)("div", {
            className: m.zc,
            children: (0, i.jsx)(u.A, {
                achievementId: t,
                size: u.A.Sizes.SIZE_40,
                unlocked: a
            })
        }), (0, i.jsxs)("div", {
            className: m.VW,
            children: [null != n && (0, i.jsx)(o.Text, {
                variant: "text-xxs/semibold",
                color: "text-muted",
                className: m.YR,
                children: (0, d.mk)(f)
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: p,
                children: g()
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: T,
                children: h ? "?????" : _()
            })]
        })]
    })
}