/** Chunk was on 92917 **/
/** chunk id: 753073, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(763754),
    a = n(888675),
    s = n(985018),
    o = n(355200);

function c(e) {
    let {
        message: t,
        compact: n,
        usernameHook: c
    } = e, u = (0, l.Ay)(t), d = c(u), p = s.intl.format(s.t["zla/ux"], {
        username: u.nick,
        usernameHook: d,
        topic: t.content
    });
    return (0, r.jsx)(a.A, {
        className: o.d,
        iconNode: (0, r.jsx)(i.qux, {
            size: "md",
            color: "currentColor"
        }),
        iconContainerClassName: o.z,
        timestamp: t.timestamp,
        compact: n,
        children: p
    })
}