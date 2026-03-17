/** chunk id: 45780 params = (module,exports,require) **/
n.d(t, {
    G$: () => A,
    _$: () => f,
    hk: () => p,
    zs: () => m
});
var s = n(311907),
    l = n(554146),
    a = n(594061),
    i = n(617617),
    r = n(954571),
    o = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);

function m(e, t) {
    let n = i.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e)
}

function A(e, t) {
    return (0, s.bG)([i.A], () => m(e, t))
}

function E(e, t, n, s, i) {
    (0, a.TG)(n, s => {
        let l = m(t, n);
        if (e && l || !e && !l) return !1;
        s.dismissedGuildContent = (e ? o.Vf : o.We)(s.dismissedGuildContent, t)
    }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), s && r.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: l.V[t],
        guild_id: n,
        action: i ?? c.i.UNKNOWN
    })
}

function f(e, t, n, s) {
    E(!0, e, t, n, s)
}

function p(e, t) {
    E(!1, e, t)
}