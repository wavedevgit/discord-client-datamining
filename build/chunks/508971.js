/** chunk id: 508971 params = (module,exports,require) **/
n.d(t, {
    A: () => _
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
    m = n(869295);

function _(e) {
    let {
        achievementId: t,
        dateUnlocked: n
    } = e, s = (0, c.vM)(t);
    if (null == s) return null;
    let a = null != n,
        {
            name: _,
            description: g,
            hideDescriptionUntilUnlock: A,
            onAction: x
        } = s,
        p = A && !a,
        h = a ? "text-strong" : "text-muted",
        f = a ? "text-default" : "text-muted",
        T = r()(n),
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
                children: (0, d.mk)(T)
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: h,
                children: _()
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: f,
                children: p ? "?????" : g()
            })]
        })]
    })
}