/** Chunk was on 2827 **/
/** chunk id: 773349, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    o = n(397927),
    c = n(287809),
    d = n(427262),
    u = n(283900),
    _ = n(975977);
let p = i.memo(e => {
    let {
        userId: t,
        subText: n,
        className: i
    } = e, l = (0, a.bG)([c.default], () => c.default.getUser(t));
    return void 0 === l ? null : (0, r.jsxs)("div", {
        className: s()(_.k, i),
        children: [(0, r.jsx)(u.H, {
            user: l,
            avatarSize: o._3J.SIZE_40
        }), (0, r.jsx)("div", {
            children: (0, r.jsxs)("div", {
                className: _.$,
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "interactive-text-active",
                    children: d.Ay.getName(l)
                }), null != n && (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: n
                })]
            })
        })]
    })
});
p.displayName = "FamilyCenterActivityUserRow";
let m = p