/** Chunk was on 73734 **/
/** chunk id: 585510, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Li: () => I,
    _g: () => N,
    dj: () => O
}), n(896048);
var r = n(136722),
    i = n(417597),
    l = n(617617),
    a = n(71393),
    o = n(576705),
    s = n(967198),
    c = n(287809),
    u = n(488926),
    E = n(661191),
    d = n(974103),
    _ = n(903093),
    A = n(610136),
    T = n(218113);

function I(e) {
    let t = (0, i.bG)([a.A, o.A], () => {
            let t = a.A.getGuild(e);
            if (null == t) return !1;
            let n = o.A.getGuildPermissions(t);
            return null != n && r.X8(n, T.Sz)
        }),
        n = (0, i.bG)([A.A], () => null != e ? A.A.getGuildIncident(e) : null),
        l = null != n && (0, _._J)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: l
    }
}

function O() {
    var e;
    let t = function(e) {
            let t = c.default.getCurrentUser(),
                n = A.A.getIncidentsByGuild();
            for (let i of E.default.keys(n).map(e => a.A.getGuild(e))) {
                if (null == i) continue;
                let l = n[i.id];
                if (!(null == l || !(0, _.k$)(l) && !(0, _._J)(l) || (0, _._J)(l) && i.id !== e) && r.X8(u.cc({
                        user: t,
                        context: i,
                        checkElevated: !1
                    }), T.Sz)) return i.id
            }
            return null
        }(s.A.getGuildId()),
        n = null != (e = l.A.getGuildsProto()) ? e : {},
        i = null != t ? n[t] : null,
        o = null != i && i.disableRaidAlertNag;
    return {
        show: null != t && !o,
        guildId: t
    }
}

function N(e) {
    return (0, i.bG)([o.A, a.A], () => {
        let t = a.A.getGuild(e);
        return (0, d.nc)(t, o.A)
    })
}
n(652215)