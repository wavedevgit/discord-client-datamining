/** chunk id: 269802 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(827734),
    s = n(397927),
    a = n(763754),
    l = n(888675),
    o = n(985018),
    c = n(554655);

function u(e) {
    let {
        message: t,
        compact: n,
        usernameHook: u
    } = e, d = (0, a.Ay)(t), _ = u(d), E = o.intl.format(o.t["Rv+TSM"], {
        username: d.nick,
        usernameHook: _,
        topic: t.content
    });
    return (0, i.jsx)(l.A, {
        className: c.d,
        iconNode: (0, i.jsx)(s.qux, {
            size: "md",
            color: r.A.unsafe_rawColors.GREEN_360.css
        }),
        iconContainerClassName: c.z,
        timestamp: t.timestamp,
        compact: n,
        children: E
    })
}