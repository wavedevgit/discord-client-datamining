/** chunk id: 45780, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G$: () => p,
    _$: () => m,
    hk: () => f,
    zs: () => _
});
var l = n(311907),
    r = n(554146),
    o = n(594061),
    i = n(617617),
    a = n(954571),
    s = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);

function _(e, t) {
    let n = i.A.getDismissedGuildContent(t);
    return null != n && (0, s.c0)(n, e)
}

function p(e, t) {
    return (0, l.bG)([i.A], () => _(e, t))
}

function b(e, t, n, l, i) {
    (0, o.TG)(n, l => {
        let r = _(t, n);
        if (e && r || !e && !r) return !1;
        l.dismissedGuildContent = (e ? s.Vf : s.We)(l.dismissedGuildContent, t)
    }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), l && a.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: r.V[t],
        guild_id: n,
        action: null != i ? i : c.i.UNKNOWN
    })
}

function m(e, t, n, l) {
    b(!0, e, t, n, l)
}

function f(e, t) {
    b(!1, e, t)
}