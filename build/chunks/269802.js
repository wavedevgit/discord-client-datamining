/** chunk id: 269802, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(827734),
    l = n(397927),
    a = n(763754),
    s = n(888675),
    o = n(985018),
    c = n(355200);

function u(e) {
    let {
        message: t,
        compact: n,
        usernameHook: u
    } = e, d = (0, a.Ay)(t), p = u(d), m = o.intl.format(o.t["Rv+TSM"], {
        username: d.nick,
        usernameHook: p,
        topic: t.content
    });
    return (0, r.jsx)(s.A, {
        className: c.d,
        iconNode: (0, r.jsx)(l.qux, {
            size: "md",
            color: i.A.unsafe_rawColors.GREEN_360.css
        }),
        iconContainerClassName: c.z,
        timestamp: t.timestamp,
        compact: n,
        children: m
    })
}