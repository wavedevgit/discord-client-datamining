/** Chunk was on 5606 **/
/** chunk id: 508971, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(989349),
    a = n.n(s),
    o = n(397927),
    c = n(405269),
    d = n(927018),
    u = n(906688),
    p = n(869295);

function _(e) {
    let {
        achievementId: t,
        dateUnlocked: n
    } = e, i = (0, d.vM)(t);
    if (null == i) return null;
    let s = null != n,
        {
            name: _,
            description: m,
            hideDescriptionUntilUnlock: g,
            onAction: f
        } = i,
        b = g && !s,
        h = s ? "text-strong" : "text-muted",
        A = s ? "text-default" : "text-muted",
        E = a()(n),
        x = null != f && s,
        O = x ? o.DUT : "div";
    return (0, r.jsxs)(O, {
        className: l()(p.kL, x && p.b),
        onClick: () => {
            x && f()
        },
        children: [(0, r.jsx)("div", {
            className: p.zc,
            children: (0, r.jsx)(u.A, {
                achievementId: t,
                size: u.A.Sizes.SIZE_40,
                unlocked: s
            })
        }), (0, r.jsxs)("div", {
            className: p.VW,
            children: [null != n && (0, r.jsx)(o.Text, {
                variant: "text-xxs/semibold",
                color: "text-muted",
                className: p.YR,
                children: (0, c.mk)(E)
            }), (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: h,
                children: _()
            }), (0, r.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: A,
                children: b ? "?????" : m()
            })]
        })]
    })
}