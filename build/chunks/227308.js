/** chunk id: 227308 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n(311907),
    d = n(888288),
    c = n(256415),
    u = n(941023),
    h = n(714983),
    p = n(592598),
    A = n(672396),
    f = n(652215),
    g = n(975455);

function m(e) {
    let {
        locked: t,
        keybind: n
    } = e, l = s.useRef(null), h = (0, o.yK)([d.A], () => d.A.getNotifications()), m = (0, o.bG)([c.default], () => c.default.getNotificationPositionMode());
    if ((0, o.bG)([p.A], () => p.A.isNotificationDisabled(A.KS.TextChat)) || m === f.G6Q.DISABLED) return null;
    let x = h.filter(e => !t || e.status !== f.yFH.TIMED_OUT),
        E = (0, r.groupBy)(x, e => e.type);
    return (0, i.jsx)(u.A, {
        contentDomRef: l,
        observeInterval: 200,
        children: (0, i.jsx)("div", {
            ref: l,
            className: a()(g.container, g[m]),
            children: Object.entries(E).map(e => {
                let [s, l] = e;
                return 0 === l.length ? null : (0, i.jsx)(_, {
                    locked: t,
                    keybind: n,
                    position: m,
                    notification: l[0]
                }, s)
            })
        })
    })
}

function _(e) {
    let {
        notification: t,
        position: n,
        keybind: s,
        locked: l
    } = e;
    return (0, i.jsx)("div", {
        className: g.notificationGroup,
        children: (0, i.jsx)(h.A, {
            zIndex: 100,
            position: n,
            notification: t,
            keybind: s,
            locked: l
        }, t.id)
    })
}