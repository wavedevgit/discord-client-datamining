/** chunk id: 45780 params = (module,exports,require) **/
n.d(t, {
    G$: () => A,
    _$: () => f,
    hk: () => E,
    zs: () => m
});
var l = n(311907),
    s = n(554146),
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
    return (0, l.bG)([i.A], () => m(e, t))
}

function p(e, t, n, l, i) {
    (0, a.TG)(n, l => {
        let s = m(t, n);
        if (e && s || !e && !s) return !1;
        l.dismissedGuildContent = (e ? o.Vf : o.We)(l.dismissedGuildContent, t)
    }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), l && r.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: s.V[t],
        guild_id: n,
        action: i ?? c.i.UNKNOWN
    })
}

function f(e, t, n, l) {
    p(!0, e, t, n, l)
}

function E(e, t) {
    p(!1, e, t)
}