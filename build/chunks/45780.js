/** chunk id: 45780 params = (module,exports,require) **/
n.d(t, {
    G$: () => m,
    _$: () => f,
    hk: () => _,
    zs: () => A
});
var l = n(311907),
    s = n(554146),
    i = n(594061),
    r = n(617617),
    a = n(954571),
    o = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);

function A(e, t) {
    let n = r.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e)
}

function m(e, t) {
    return (0, l.bG)([r.A], () => A(e, t))
}

function E(e, t, n, l, r) {
    (0, i.TG)(n, l => {
        let s = A(t, n);
        if (e && s || !e && !s) return !1;
        l.dismissedGuildContent = (e ? o.Vf : o.We)(l.dismissedGuildContent, t)
    }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), l && a.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: s.V[t],
        guild_id: n,
        action: r ?? c.i.UNKNOWN
    })
}

function f(e, t, n, l) {
    E(!0, e, t, n, l)
}

function _(e, t) {
    E(!1, e, t)
}