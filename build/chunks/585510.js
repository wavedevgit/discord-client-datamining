/** chunk id: 585510 params = (module,exports,require) **/
n.d(t, {
    Li: () => g,
    _g: () => f,
    dj: () => p
});
var i = n(136722),
    l = n(417597),
    s = n(617617),
    a = n(71393),
    r = n(576705),
    o = n(967198),
    d = n(287809),
    c = n(488926),
    u = n(661191),
    h = n(974103),
    A = n(903093),
    _ = n(610136),
    m = n(218113);

function g(e) {
    let t = (0, l.bG)([a.A, r.A], () => {
            let t = a.A.getGuild(e);
            if (null == t) return !1;
            let n = r.A.getGuildPermissions(t);
            return null != n && i.X8(n, m.Sz)
        }),
        n = (0, l.bG)([_.A], () => null != e ? _.A.getGuildIncident(e) : null),
        s = null != n && (0, A._J)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: s
    }
}

function p() {
    let e = function(e) {
            let t = d.default.getCurrentUser(),
                n = _.A.getIncidentsByGuild();
            for (let l of u.default.keys(n).map(e => a.A.getGuild(e))) {
                if (null == l) continue;
                let s = n[l.id];
                if (!(null == s || !(0, A.k$)(s) && !(0, A._J)(s) || (0, A._J)(s) && l.id !== e) && i.X8(c.cc({
                        user: t,
                        context: l,
                        checkElevated: !1
                    }), m.Sz)) return l.id
            }
            return null
        }(o.A.getGuildId()),
        t = s.A.getGuildsProto() ?? {},
        n = null != e ? t[e] : null,
        l = null != n && n.disableRaidAlertNag;
    return {
        show: null != e && !l,
        guildId: e
    }
}

function f(e) {
    return (0, l.bG)([r.A, a.A], () => {
        let t = a.A.getGuild(e);
        return (0, h.nc)(t, r.A)
    })
}
n(652215)