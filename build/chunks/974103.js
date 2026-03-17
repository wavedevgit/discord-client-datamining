/** chunk id: 974103 params = (module,exports,require) **/
n.d(e, {
    ic: () => u,
    nc: () => s,
    w: () => o
});
var l = n(311907);
n(928108);
var i = n(576705),
    a = n(903093),
    r = n(610136),
    d = n(652215);

function s(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
    return e.can(d.xBc.BAN_MEMBERS, t) || e.can(d.xBc.KICK_MEMBERS, t) || e.can(d.xBc.MODERATE_MEMBERS, t) || e.can(d.xBc.MANAGE_GUILD, t)
}

function u(t) {
    let e = (0, l.bG)([i.A], () => s(t, i.A), [t]),
        n = (0, l.bG)([r.A], () => null != t ? r.A.getGuildIncident(t.id) : null, [t]);
    return !(null != n && (0, a.k$)(n)) && e
}

function o(t) {
    return (0, l.bG)([i.A], () => (function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
        return e.can(d.xBc.MANAGE_GUILD, t)
    })(t, i.A), [t])
}