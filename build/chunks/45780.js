/** chunk id: 45780 params = (module,exports,require) **/
s.d(t, {
    G$: () => A,
    _$: () => x,
    hk: () => h,
    zs: () => m
});
var l = s(311907),
    n = s(554146),
    a = s(594061),
    i = s(617617),
    r = s(954571),
    o = s(460288),
    u = s(652215),
    c = s(49999),
    d = s(355097);

function m(e, t) {
    let s = i.A.getDismissedGuildContent(t);
    return null != s && (0, o.c0)(s, e)
}

function A(e, t) {
    return (0, l.bG)([i.A], () => m(e, t))
}

function p(e, t, s, l, i) {
    (0, a.TG)(s, l => {
        let n = m(t, s);
        if (e && n || !e && !n) return !1;
        l.dismissedGuildContent = (e ? o.Vf : o.We)(l.dismissedGuildContent, t)
    }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), l && r.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
        type: n.V[t],
        guild_id: s,
        action: i ?? c.i.UNKNOWN
    })
}

function x(e, t, s, l) {
    p(!0, e, t, s, l)
}

function h(e, t) {
    p(!1, e, t)
}