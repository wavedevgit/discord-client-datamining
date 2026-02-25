/** chunk id: 45780, original params: e,t,l (module,exports,require) **/
l.d(t, {
    G$: () => A,
    _$: () => x,
    hk: () => E,
    zs: () => m
});
var s = l(311907),
    n = l(554146),
    a = l(594061),
    i = l(617617),
    r = l(954571),
    u = l(460288),
    o = l(652215),
    c = l(49999),
    d = l(355097);

function m(e, t) {
    let l = i.A.getDismissedGuildContent(t);
    return null != l && (0, u.c0)(l, e)
}

function A(e, t) {
    return (0, s.bG)([i.A], () => m(e, t))
}

function p(e, t, l, s, i) {
    (0, a.TG)(l, s => {
        let n = m(t, l);
        if (e && n || !e && !n) return !1;
        s.dismissedGuildContent = (e ? u.Vf : u.We)(s.dismissedGuildContent, t)
    }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), s && r.default.track(o.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: n.V[t],
        guild_id: l,
        action: i ?? c.i.UNKNOWN
    })
}

function x(e, t, l, s) {
    p(!0, e, t, l, s)
}

function E(e, t) {
    p(!1, e, t)
}