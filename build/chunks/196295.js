/** chunk id: 196295, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(321073), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(412477),
    s = n(592598),
    u = n(243612),
    c = n(545807),
    d = n(672910),
    h = n(57019),
    p = n(703552),
    f = n(672396),
    g = n(652215),
    m = n(985018),
    A = n(288507);
let y = [];

function O(e) {
    return e.notification.id
}

function v(e, t, n, r) {
    let {
        index: l,
        notification: a,
        locked: o,
        pinned: s
    } = t;
    return (0, i.jsx)(d.A, {
        index: l,
        notification: a,
        locked: o,
        pinned: s,
        transitionState: n,
        cleanUp: r
    }, e)
}

function b(e) {
    return (0, i.jsx)("div", {
        className: A.k,
        children: e
    })
}
let E = r.memo(function(e) {
    let {
        locked: t,
        pinned: n,
        showEmpty: d = !0
    } = e, A = (0, l.bG)([p.A, s.A], () => {
        if (s.A.isNotificationDisabled(f.KS.TextChat)) return y;
        let e = [],
            i = 0;
        for (let r of p.A.getNotifications()) {
            if (i > 4) break;
            (!t || r.status !== g.yFH.TIMED_OUT) && (e.push({
                index: i,
                locked: t,
                pinned: n,
                notification: r
            }), i++)
        }
        return e
    }, [t, n], u.oQ), E = r.useState(() => new h.Fn(t))[0];
    return (r.useLayoutEffect(() => E.updateState(A, t)), r.useLayoutEffect(() => (E.initialize((0, c.b)()), () => E.cleanUp()), [E]), 0 !== A.length || t) ? (0, i.jsx)(h.Gt.Provider, {
        value: E,
        children: (0, i.jsx)(a.Fai, {
            items: A,
            renderItem: v,
            getItemKey: O,
            wrapChildren: b
        })
    }) : d ? t ? null : (0, i.jsx)(o.g, {
        emptyText: m.intl.string(m.t.O1Nbjq),
        icon: a.XFE,
        absolute: !0
    }) : null
})