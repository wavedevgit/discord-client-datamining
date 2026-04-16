/** chunk id: 455207 params = (module,exports,require) **/
a.d(t, {
    MZ: () => s,
    NB: () => _,
    sx: () => d
});
var n = a(58149),
    o = a(943667),
    i = a(954571),
    r = a(124759),
    c = a(652215),
    l = a(375577);

function s(e) {
    return (0, o.A)(e) && e.messageReference.guild_id === r.Vi || null != e.author && e.author.id === r.hs
}

function _() {
    return l
}
let d = e => {
    i.default.track(c.HAw.USER_FLOW_TRANSITION, {
        flow_type: r.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, n.H$)(e.guildId)
    })
}