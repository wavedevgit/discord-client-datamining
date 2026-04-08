/** chunk id: 196295 params = (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(397927),
    s = n(412477),
    o = n(592598),
    d = n(243612),
    c = n(545807),
    u = n(672910),
    _ = n(57019),
    h = n(703552),
    m = n(672396),
    f = n(652215),
    p = n(985018),
    g = n(458904);
let A = [];

function x(e) {
    return e.notification.id
}

function I(e, t, n, a) {
    let {
        index: r,
        notification: l,
        locked: s,
        pinned: o
    } = t;
    return (0, i.jsx)(u.A, {
        index: r,
        notification: l,
        locked: s,
        pinned: o,
        transitionState: n,
        cleanUp: a
    }, e)
}

function E(e) {
    return (0, i.jsx)("div", {
        className: g.k,
        children: e
    })
}
let b = a.memo(function(e) {
    let {
        locked: t,
        pinned: n,
        showEmpty: u = !0
    } = e, g = (0, r.bG)([h.A, o.A], () => {
        if (o.A.isNotificationDisabled(m.KS.TextChat)) return A;
        let e = [],
            i = 0;
        for (let a of h.A.getNotifications()) {
            if (i > 4) break;
            (!t || a.status !== f.yFH.TIMED_OUT) && (e.push({
                index: i,
                locked: t,
                pinned: n,
                notification: a
            }), i++)
        }
        return e
    }, [t, n], d.oQ), b = a.useState(() => new _.Fn(t))[0];
    return (a.useLayoutEffect(() => b.updateState(g, t)), a.useLayoutEffect(() => (b.initialize((0, c.b)()), () => b.cleanUp()), [b]), 0 !== g.length || t) ? (0, i.jsx)(_.Gt.Provider, {
        value: b,
        children: (0, i.jsx)(l.Fai, {
            items: g,
            renderItem: I,
            getItemKey: x,
            wrapChildren: E
        })
    }) : u ? t ? null : (0, i.jsx)(s.g, {
        emptyText: p.intl.string(p.t.O1Nbjq),
        icon: l.XFE,
        absolute: !0
    }) : null
})