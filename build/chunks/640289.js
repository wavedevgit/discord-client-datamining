/** chunk id: 640289 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(763754),
    a = n(888675),
    l = n(985018),
    o = n(554655);

function c(e) {
    let {
        message: t,
        compact: n,
        usernameHook: c
    } = e, u = (0, s.Ay)(t), d = c(u), _ = l.intl.format(l.t.tv2DNy, {
        username: u.nick,
        usernameHook: d
    });
    return (0, i.jsx)(a.A, {
        className: o.d,
        iconNode: (0, i.jsx)(r.E7M, {
            size: "md",
            color: "currentColor"
        }),
        iconContainerClassName: o.z,
        timestamp: t.timestamp,
        compact: n,
        children: _
    })
}