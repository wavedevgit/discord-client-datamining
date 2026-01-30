/** Chunk was on 65614 **/
/** chunk id: 974103, original params: e,t,n (module,exports,require) **/
n.d(t, {
    ic: () => c,
    nc: () => s,
    w: () => d
});
var r = n(311907);
n(928108);
var i = n(576705),
    l = n(903093),
    a = n(610136),
    o = n(652215);

function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
    return t.can(o.xBc.BAN_MEMBERS, e) || t.can(o.xBc.KICK_MEMBERS, e) || t.can(o.xBc.MODERATE_MEMBERS, e) || t.can(o.xBc.MANAGE_GUILD, e)
}

function c(e) {
    let t = (0, r.bG)([i.A], () => s(e, i.A), [e]),
        n = (0, r.bG)([a.A], () => null != e ? a.A.getGuildIncident(e.id) : null, [e]);
    return !(null != n && (0, l.k$)(n)) && t
}

function d(e) {
    return (0, r.bG)([i.A], () => (function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
        return t.can(o.xBc.MANAGE_GUILD, e)
    })(e, i.A), [e])
}