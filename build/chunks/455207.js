/** chunk id: 455207 params = (module,exports,require) **/
n.d(t, {
    MZ: () => c,
    NB: () => d,
    sx: () => u
});
var a = n(58149),
    i = n(943667),
    l = n(954571),
    s = n(124759),
    r = n(652215),
    o = n(375577);

function c(e) {
    return (0, i.A)(e) && e.messageReference.guild_id === s.Vi || null != e.author && e.author.id === s.hs
}

function d() {
    return o
}
let u = e => {
    l.default.track(r.HAw.USER_FLOW_TRANSITION, {
        flow_type: s.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, a.H$)(e.guildId)
    })
}