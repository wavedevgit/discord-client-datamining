/** chunk id: 968010 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(64700),
    i = n(311907),
    s = n(34457),
    a = n(317525),
    r = n(576705),
    o = n(287809),
    d = n(488926),
    u = n(652215);

function c(e) {
    let {
        sortedRoles: t,
        currentUser: n,
        canManageRoles: c
    } = (0, i.cf)([a.A, o.default, r.A], () => ({
        sortedRoles: null != e ? a.A.getSortedRoles(e.id) : [],
        currentUser: o.default.getCurrentUser(),
        canManageRoles: null != e && r.A.can(u.xBc.MANAGE_ROLES, e)
    }), [e]);
    return l.useMemo(() => {
        if (null == e || null == n || !c) return [];
        let l = d.HJ(e, n.id);
        return t.filter(t => !(0, s.Oy)(t) && !t.managed && t.tags?.guild_connections === void 0 && !!d.wO(e, n.id, l, t))
    }, [e, n, c, t])
}