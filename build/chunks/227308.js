/** Chunk was on 84018 **/
/** chunk id: 227308, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
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
    h = n(714983),
    p = n(592598),
    f = n(672396),
    g = n(652215),
    y = n(283446);

function A(e) {
    let {
        locked: t,
        keybind: n
    } = e, s = r.useRef(null), h = (0, a.yK)([c.A], () => c.A.getNotifications()), A = (0, a.bG)([d.default], () => d.default.getNotificationPositionMode());
    if ((0, a.bG)([p.A], () => p.A.isNotificationDisabled(f.KS.TextChat)) || A === g.G6Q.DISABLED) return null;
    let b = h.filter(e => !t || e.status !== g.yFH.TIMED_OUT),
        O = (0, o.groupBy)(b, e => e.type);
    return (0, i.jsx)(u.A, {
        contentDomRef: s,
        observeInterval: 200,
        children: (0, i.jsx)("div", {
            ref: s,
            className: l()(y.container, y[A]),
            children: Object.entries(O).map(e => {
                let [r, s] = e;
                return 0 === s.length ? null : (0, i.jsx)(m, {
                    locked: t,
                    keybind: n,
                    position: A,
                    notification: s[0]
                }, r)
            })
        })
    })
}

function m(e) {
    let {
        notification: t,
        position: n,
        keybind: r,
        locked: s
    } = e;
    return (0, i.jsx)("div", {
        className: y.notificationGroup,
        children: (0, i.jsx)(h.A, {
            zIndex: 100,
            position: n,
            notification: t,
            keybind: r,
            locked: s
        }, t.id)
    })
}