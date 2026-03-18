/** chunk id: 45780 params = (module,exports,require) **/
n.d(t, {
    G$: () => A,
    _$: () => p,
    hk: () => f,
    zs: () => m
});
var l = n(311907),
    s = n(554146),
    i = n(594061),
    a = n(617617),
    r = n(954571),
    u = n(460288),
    o = n(652215),
    c = n(49999),
    d = n(355097);

function m(e, t) {
    let n = a.A.getDismissedGuildContent(t);
    return null != n && (0, u.c0)(n, e)
}

function A(e, t) {
    return (0, l.bG)([a.A], () => m(e, t))
}

function E(e, t, n, l, a) {
    (0, i.TG)(n, l => {
        let s = m(t, n);
        if (e && s || !e && !s) return !1;
        l.dismissedGuildContent = (e ? u.Vf : u.We)(l.dismissedGuildContent, t)
    }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), l && r.default.track(o.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: s.V[t],
        guild_id: n,
        action: a ?? c.i.UNKNOWN
    })
}

function p(e, t, n, l) {
    E(!0, e, t, n, l)
}

function f(e, t) {
    E(!1, e, t)
}