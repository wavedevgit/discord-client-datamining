/** chunk id: 196295 params = (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(412477),
    o = n(592598),
    u = n(243612),
    d = n(545807),
    c = n(672910),
    h = n(57019),
    g = n(703552),
    m = n(672396),
    f = n(652215),
    A = n(985018),
    I = n(669192);
let E = [];

function p(e) {
    return e.notification.id
}

function _(e, t, n, r) {
    let {
        index: l,
        notification: s,
        locked: a,
        pinned: o
    } = t;
    return (0, i.jsx)(c.A, {
        index: l,
        notification: s,
        locked: a,
        pinned: o,
        transitionState: n,
        cleanUp: r
    }, e)
}

function S(e) {
    return (0, i.jsx)("div", {
        className: I.k,
        children: e
    })
}
let x = r.memo(function(e) {
    let {
        locked: t,
        pinned: n,
        showEmpty: c = !0
    } = e, I = (0, l.bG)([g.A, o.A], () => {
        if (o.A.isNotificationDisabled(m.KS.TextChat)) return E;
        let e = [],
            i = 0;
        for (let r of g.A.getNotifications()) {
            if (i > 4) break;
            (!t || r.status !== f.yFH.TIMED_OUT) && (e.push({
                index: i,
                locked: t,
                pinned: n,
                notification: r
            }), i++)
        }
        return e
    }, [t, n], u.oQ), x = r.useState(() => new h.Fn(t))[0];
    return (r.useLayoutEffect(() => x.updateState(I, t)), r.useLayoutEffect(() => (x.initialize((0, d.b)()), () => x.cleanUp()), [x]), 0 !== I.length || t) ? (0, i.jsx)(h.Gt.Provider, {
        value: x,
        children: (0, i.jsx)(s.Fai, {
            items: I,
            renderItem: _,
            getItemKey: p,
            wrapChildren: S
        })
    }) : c ? t ? null : (0, i.jsx)(a.g, {
        emptyText: A.intl.string(A.t.O1Nbjq),
        icon: s.XFE,
        absolute: !0
    }) : null
})