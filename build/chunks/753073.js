/** chunk id: 753073, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(763754),
    r = n(888675),
    s = n(985018),
    o = n(358670);

function c(e) {
    let {
        message: t,
        compact: n,
        usernameHook: c
    } = e, d = (0, a.Ay)(t), u = c(d), m = s.intl.format(s.t["zla/ux"], {
        username: d.nick,
        usernameHook: u,
        topic: t.content
    });
    return (0, i.jsx)(r.A, {
        className: o.d,
        iconNode: (0, i.jsx)(l.qux, {
            size: "md",
            color: "currentColor"
        }),
        iconContainerClassName: o.z,
        timestamp: t.timestamp,
        compact: n,
        children: m
    })
}