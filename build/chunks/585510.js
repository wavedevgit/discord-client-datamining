/** chunk id: 585510 params = (module,exports,require) **/
"use strict";
n.d(e, {
    Li: () => I,
    _g: () => p,
    dj: () => N
});
var i = n(136722),
    r = n(417597),
    s = n(617617),
    l = n(71393),
    a = n(576705),
    o = n(967198),
    c = n(287809),
    u = n(488926),
    d = n(661191),
    E = n(974103),
    _ = n(903093),
    T = n(610136),
    A = n(218113);

function I(t) {
    let e = (0, r.bG)([l.A, a.A], () => {
            let e = l.A.getGuild(t);
            if (null == e) return !1;
            let n = a.A.getGuildPermissions(e);
            return null != n && i.X8(n, A.Sz)
        }),
        n = (0, r.bG)([T.A], () => null != t ? T.A.getGuildIncident(t) : null),
        s = null != n && (0, _._J)(n);
    return {
        shouldShowIncidentActions: e,
        incidentData: n,
        isUnderLockdown: s
    }
}

function N() {
    let t = function(t) {
            let e = c.default.getCurrentUser(),
                n = T.A.getIncidentsByGuild();
            for (let r of d.default.keys(n).map(t => l.A.getGuild(t))) {
                if (null == r) continue;
                let s = n[r.id];
                if (!(null == s || !(0, _.k$)(s) && !(0, _._J)(s) || (0, _._J)(s) && r.id !== t) && i.X8(u.cc({
                        user: e,
                        context: r,
                        checkElevated: !1
                    }), A.Sz)) return r.id
            }
            return null
        }(o.A.getGuildId()),
        e = s.A.getGuildsProto() ?? {},
        n = null != t ? e[t] : null,
        r = null != n && n.disableRaidAlertNag;
    return {
        show: null != t && !r,
        guildId: t
    }
}

function p(t) {
    return (0, r.bG)([a.A, l.A], () => {
        let e = l.A.getGuild(t);
        return (0, E.nc)(e, a.A)
    })
}
n(652215)