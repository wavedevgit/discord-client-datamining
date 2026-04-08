/** chunk id: 269802 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(827734),
    a = n(397927),
    r = n(763754),
    s = n(888675),
    o = n(985018),
    c = n(466206);

function d(e) {
    let {
        message: t,
        compact: n,
        usernameHook: d
    } = e, u = (0, r.Ay)(t), _ = d(u), A = o.intl.format(o.t["Rv+TSM"], {
        username: u.nick,
        usernameHook: _,
        topic: t.content
    });
    return (0, i.jsx)(s.A, {
        className: c.d,
        iconNode: (0, i.jsx)(a.qux, {
            size: "md",
            color: l.A.unsafe_rawColors.GREEN_360.css
        }),
        iconContainerClassName: c.z,
        timestamp: t.timestamp,
        compact: n,
        children: A
    })
}