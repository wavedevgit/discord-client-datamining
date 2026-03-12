/** chunk id: 455207 params = (module,exports,require) **/
a.d(t, {
    MZ: () => o,
    NB: () => u,
    sx: () => _
});
var n = a(58149),
    r = a(943667),
    l = a(954571),
    i = a(124759),
    s = a(652215),
    c = a(375577);

function o(e) {
    return (0, r.A)(e) && e.messageReference.guild_id === i.Vi || null != e.author && e.author.id === i.hs
}

function u() {
    return c
}
let _ = e => {
    l.default.track(s.HAw.USER_FLOW_TRANSITION, {
        flow_type: i.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, n.H$)(e.guildId)
    })
}