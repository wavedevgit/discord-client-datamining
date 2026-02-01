/** chunk id: 196295, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(321073), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(412477),
    o = n(592598),
    u = n(243612),
    c = n(545807),
    d = n(672910),
    h = n(57019),
    p = n(703552),
    f = n(672396),
    g = n(652215),
    m = n(985018),
    y = n(288507);
let A = [];

function v(e) {
    return e.notification.id
}

function b(e, t, n, r) {
    let {
        index: l,
        notification: a,
        locked: s,
        pinned: o
    } = t;
    return (0, i.jsx)(d.A, {
        index: l,
        notification: a,
        locked: s,
        pinned: o,
        transitionState: n,
        cleanUp: r
    }, e)
}

function E(e) {
    return (0, i.jsx)("div", {
        className: y.k,
        children: e
    })
}
let O = r.memo(function(e) {
    let {
        locked: t,
        pinned: n,
        showEmpty: d = !0
    } = e, y = (0, l.bG)([p.A, o.A], () => {
        if (o.A.isNotificationDisabled(f.KS.TextChat)) return A;
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
    }, [t, n], u.oQ), O = r.useState(() => new h.Fn(t))[0];
    return (r.useLayoutEffect(() => O.updateState(y, t)), r.useLayoutEffect(() => (O.initialize((0, c.b)()), () => O.cleanUp()), [O]), 0 !== y.length || t) ? (0, i.jsx)(h.Gt.Provider, {
        value: O,
        children: (0, i.jsx)(a.Fai, {
            items: y,
            renderItem: b,
            getItemKey: v,
            wrapChildren: E
        })
    }) : d ? t ? null : (0, i.jsx)(s.g, {
        emptyText: m.intl.string(m.t.O1Nbjq),
        icon: a.XFE,
        absolute: !0
    }) : null
})