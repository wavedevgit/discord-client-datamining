/** chunk id: 45780, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G$: () => f,
    _$: () => b,
    hk: () => y,
    zs: () => p
});
var l = n(311907),
    r = n(554146),
    s = n(594061),
    i = n(617617),
    a = n(954571),
    o = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);

function p(e, t) {
    let n = i.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e)
}

function f(e, t) {
    return (0, l.bG)([i.A], () => p(e, t))
}

function m(e, t, n, l, i) {
    (0, s.TG)(n, l => {
        let r = p(t, n);
        if (e && r || !e && !r) return !1;
        l.dismissedGuildContent = (e ? o.Vf : o.We)(l.dismissedGuildContent, t)
    }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), l && a.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: r.V[t],
        guild_id: n,
        action: null != i ? i : c.i.UNKNOWN
    })
}

function b(e, t, n, l) {
    m(!0, e, t, n, l)
}

function y(e, t) {
    m(!1, e, t)
}