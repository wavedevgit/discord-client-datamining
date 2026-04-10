/** chunk id: 585510 params = (module,exports,require) **/
n.d(e, {
    Li: () => I,
    _g: () => R,
    dj: () => N
});
var i = n(136722),
    l = n(417597),
    r = n(617617),
    s = n(71393),
    a = n(576705),
    o = n(967198),
    c = n(287809),
    d = n(488926),
    u = n(661191),
    E = n(974103),
    _ = n(903093),
    T = n(610136),
    A = n(218113);

function I(t) {
    let e = (0, l.bG)([s.A, a.A], () => {
            let e = s.A.getGuild(t);
            if (null == e) return !1;
            let n = a.A.getGuildPermissions(e);
            return null != n && i.X8(n, A.Sz)
        }),
        n = (0, l.bG)([T.A], () => null != t ? T.A.getGuildIncident(t) : null),
        r = null != n && (0, _._J)(n);
    return {
        shouldShowIncidentActions: e,
        incidentData: n,
        isUnderLockdown: r
    }
}

function N() {
    let t = function(t) {
            let e = c.default.getCurrentUser(),
                n = T.A.getIncidentsByGuild();
            for (let l of u.default.keys(n).map(t => s.A.getGuild(t))) {
                if (null == l) continue;
                let r = n[l.id];
                if (!(null == r || !(0, _.k$)(r) && !(0, _._J)(r) || (0, _._J)(r) && l.id !== t) && i.X8(d.cc({
                        user: e,
                        context: l,
                        checkElevated: !1
                    }), A.Sz)) return l.id
            }
            return null
        }(o.A.getGuildId()),
        e = r.A.getGuildsProto() ?? {},
        n = null != t ? e[t] : null,
        l = null != n && n.disableRaidAlertNag;
    return {
        show: null != t && !l,
        guildId: t
    }
}

function R(t) {
    return (0, l.bG)([a.A, s.A], () => {
        let e = s.A.getGuild(t);
        return (0, E.nc)(e, a.A)
    })
}
n(652215)