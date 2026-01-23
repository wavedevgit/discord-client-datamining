/** Chunk was on 31748 **/
/** chunk id: 141035, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(696451),
    l = n(562153),
    i = n(806931),
    a = n(985018);

function o(e, t, n) {
    var o, s;
    if (t.type === i.lp.ACTIVITY) return null != (s = null == n ? void 0 : n.name) ? s : null;
    let c = r.Ay.isGuestOrLurker(e.guild_id, null == (o = t.user) ? void 0 : o.id);
    return l.Ay.getName(e.getGuildId(), e.id, t.user) + (c ? " ".concat(a.intl.string(a.t["pFO/Ph"])) : "")
}