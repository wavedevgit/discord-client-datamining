/** chunk id: 196295 params = (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(412477),
    o = n(592598),
    d = n(243612),
    u = n(545807),
    c = n(672910),
    h = n(57019),
    g = n(703552),
    m = n(672396),
    p = n(652215),
    A = n(985018),
    x = n(458904);
let f = [];

function E(e) {
    return e.notification.id
}

function S(e, t, n, s) {
    let {
        index: l,
        notification: r,
        locked: a,
        pinned: o
    } = t;
    return (0, i.jsx)(c.A, {
        index: l,
        notification: r,
        locked: a,
        pinned: o,
        transitionState: n,
        cleanUp: s
    }, e)
}

function I(e) {
    return (0, i.jsx)("div", {
        className: x.k,
        children: e
    })
}
let T = s.memo(function(e) {
    let {
        locked: t,
        pinned: n,
        showEmpty: c = !0
    } = e, x = (0, l.bG)([g.A, o.A], () => {
        if (o.A.isNotificationDisabled(m.KS.TextChat)) return f;
        let e = [],
            i = 0;
        for (let s of g.A.getNotifications()) {
            if (i > 4) break;
            (!t || s.status !== p.yFH.TIMED_OUT) && (e.push({
                index: i,
                locked: t,
                pinned: n,
                notification: s
            }), i++)
        }
        return e
    }, [t, n], d.oQ), T = s.useState(() => new h.Fn(t))[0];
    return (s.useLayoutEffect(() => T.updateState(x, t)), s.useLayoutEffect(() => (T.initialize((0, u.b)()), () => T.cleanUp()), [T]), 0 !== x.length || t) ? (0, i.jsx)(h.Gt.Provider, {
        value: T,
        children: (0, i.jsx)(r.Fai, {
            items: x,
            renderItem: S,
            getItemKey: E,
            wrapChildren: I
        })
    }) : c ? t ? null : (0, i.jsx)(a.g, {
        emptyText: A.intl.string(A.t.O1Nbjq),
        icon: r.XFE,
        absolute: !0
    }) : null
})