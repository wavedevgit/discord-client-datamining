/** Chunk was on 83759 **/
/** chunk id: 45780, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G$: () => m,
    _$: () => _,
    hk: () => b,
    zs: () => p
});
var r = n(311907),
    l = n(554146),
    i = n(594061),
    a = n(617617),
    o = n(954571),
    s = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);

function p(e, t) {
    let n = a.A.getDismissedGuildContent(t);
    return null != n && (0, s.c0)(n, e)
}

function m(e, t) {
    return (0, r.bG)([a.A], () => p(e, t))
}

function f(e, t, n, r, a) {
    (0, i.TG)(n, r => {
        let l = p(t, n);
        if (e && l || !e && !l) return !1;
        r.dismissedGuildContent = (e ? s.Vf : s.We)(r.dismissedGuildContent, t)
    }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), r && o.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: l.V[t],
        guild_id: n,
        action: null != a ? a : c.i.UNKNOWN
    })
}

function _(e, t, n, r) {
    f(!0, e, t, n, r)
}

function b(e, t) {
    f(!1, e, t)
}