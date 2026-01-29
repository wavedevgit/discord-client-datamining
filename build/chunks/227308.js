/** Chunk was on 84018 **/
/** chunk id: 227308, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(735438),
    a = n(311907),
    c = n(888288),
    d = n(256415),
    u = n(941023),
    p = n(714983),
    h = n(592598),
    f = n(672396),
    g = n(652215),
    y = n(283446);

function m(e) {
    let {
        locked: t,
        keybind: n
    } = e, s = r.useRef(null), p = (0, a.yK)([c.A], () => c.A.getNotifications()), m = (0, a.bG)([d.default], () => d.default.getNotificationPositionMode());
    if ((0, a.bG)([h.A], () => h.A.isNotificationDisabled(f.KS.TextChat)) || m === g.G6Q.DISABLED) return null;
    let b = p.filter(e => !t || e.status !== g.yFH.TIMED_OUT),
        A = (0, o.groupBy)(b, e => e.type);
    return (0, i.jsx)(u.A, {
        contentDomRef: s,
        observeInterval: 200,
        children: (0, i.jsx)("div", {
            ref: s,
            className: l()(y.container, y[m]),
            children: Object.entries(A).map(e => {
                let [r, s] = e;
                return 0 === s.length ? null : (0, i.jsx)(_, {
                    locked: t,
                    keybind: n,
                    position: m,
                    notification: s[0]
                }, r)
            })
        })
    })
}

function _(e) {
    let {
        notification: t,
        position: n,
        keybind: r,
        locked: s
    } = e;
    return (0, i.jsx)("div", {
        className: y.notificationGroup,
        children: (0, i.jsx)(p.A, {
            zIndex: 100,
            position: n,
            notification: t,
            keybind: r,
            locked: s
        }, t.id)
    })
}