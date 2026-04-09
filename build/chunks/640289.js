/** chunk id: 640289 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(763754),
    r = n(888675),
    s = n(985018),
    o = n(466206);

function c(e) {
    let {
        message: t,
        compact: n,
        usernameHook: c
    } = e, u = (0, a.Ay)(t), d = c(u), _ = s.intl.format(s.t.tv2DNy, {
        username: u.nick,
        usernameHook: d
    });
    return (0, i.jsx)(r.A, {
        className: o.d,
        iconNode: (0, i.jsx)(l.E7M, {
            size: "md",
            color: "currentColor"
        }),
        iconContainerClassName: o.z,
        timestamp: t.timestamp,
        compact: n,
        children: _
    })
}