/** chunk id: 196295, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(412477),
    o = n(592598),
    u = n(243612),
    d = n(545807),
    c = n(672910),
    h = n(57019),
    m = n(703552),
    g = n(672396),
    p = n(652215),
    A = n(985018),
    f = n(288507);
let x = [];

function E(e) {
    return e.notification.id
}

function S(e, t, n, l) {
    let {
        index: r,
        notification: s,
        locked: a,
        pinned: o
    } = t;
    return (0, i.jsx)(c.A, {
        index: r,
        notification: s,
        locked: a,
        pinned: o,
        transitionState: n,
        cleanUp: l
    }, e)
}

function v(e) {
    return (0, i.jsx)("div", {
        className: f.k,
        children: e
    })
}
let C = l.memo(function(e) {
    let {
        locked: t,
        pinned: n,
        showEmpty: c = !0
    } = e, f = (0, r.bG)([m.A, o.A], () => {
        if (o.A.isNotificationDisabled(g.KS.TextChat)) return x;
        let e = [],
            i = 0;
        for (let l of m.A.getNotifications()) {
            if (i > 4) break;
            (!t || l.status !== p.yFH.TIMED_OUT) && (e.push({
                index: i,
                locked: t,
                pinned: n,
                notification: l
            }), i++)
        }
        return e
    }, [t, n], u.oQ), C = l.useState(() => new h.Fn(t))[0];
    return (l.useLayoutEffect(() => C.updateState(f, t)), l.useLayoutEffect(() => (C.initialize((0, d.b)()), () => C.cleanUp()), [C]), 0 !== f.length || t) ? (0, i.jsx)(h.Gt.Provider, {
        value: C,
        children: (0, i.jsx)(s.Fai, {
            items: f,
            renderItem: S,
            getItemKey: E,
            wrapChildren: v
        })
    }) : c ? t ? null : (0, i.jsx)(a.g, {
        emptyText: A.intl.string(A.t.O1Nbjq),
        icon: s.XFE,
        absolute: !0
    }) : null
})