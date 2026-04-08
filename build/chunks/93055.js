/** chunk id: 93055 params = (module,exports,require) **/
t.d(n, {
    Af: () => h,
    CJ: () => b,
    DZ: () => E,
    Rm: () => v,
    TW: () => A,
    e4: () => p,
    m_: () => _
}), t(321073);
var i = t(311907),
    r = t(873298);
t(734057);
var l = t(967198),
    a = t(287809),
    d = t(474090);
t(661191);
var o = t(181079),
    u = t(379587),
    s = t(11531),
    c = t(5180),
    f = t(788868);

function A(e) {
    let {
        enabled: n,
        hasHigherPrivileges: t
    } = (0, u.m)({
        location: e
    }), r = (0, i.bG)([a.default], () => a.default.getCurrentUser()), l = d.Ay.isPremiumExactly(r, f.PremiumTypes.TIER_2);
    return {
        hasAccess: n && l,
        isExperimentEnabled: n,
        hasHigherPrivileges: t
    }
}

function h(e) {
    return (0, i.bG)([o.A], () => o.A.getFavorite(e))
}

function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.getFavoriteChannels(),
        n = [{
            id: null,
            name: ""
        }];
    for (let t in e) {
        let i = e[t];
        i.type === r.Ip.CATEGORY && n.push({
            id: i.id,
            name: i.nickname ?? ""
        })
    }
    return n.sort((n, t) => (e[n.id]?.order ?? 0) - (e[t.id]?.order ?? 0)), n
}

function v() {
    return (0, i.bG)([o.A], () => _(o.A.getFavoriteChannels()))
}

function E() {
    let e = (0, i.bG)([l.A], () => l.A.getGuildId());
    return (0, c.ai)(e)
}

function p(e, n) {
    let t = E(),
        {
            hasAccess: r
        } = A(n),
        l = (0, i.bG)([o.A], () => null != e && (o.A.isFavorite(e.id) || e.isThread() && o.A.isFavorite(e.parent_id)), [e]);
    return t && (!r || !l || e?.isCategory()) ? null : e ?? null
}

function b() {
    let e = (0, s.J)(e => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, s.J)(e => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, s.J)(e => e.clearFavoriteAdded)
    }
}