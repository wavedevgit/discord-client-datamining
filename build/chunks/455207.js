/** chunk id: 455207 params = (module,exports,require) **/
n.d(t, {
    MZ: () => c,
    NB: () => d,
    sx: () => u
});
var i = n(58149),
    l = n(943667),
    r = n(954571),
    s = n(124759),
    a = n(652215),
    o = n(375577);

function c(e) {
    return (0, l.A)(e) && e.messageReference.guild_id === s.Vi || null != e.author && e.author.id === s.hs
}

function d() {
    return o
}
let u = e => {
    r.default.track(a.HAw.USER_FLOW_TRANSITION, {
        flow_type: s.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, i.H$)(e.guildId)
    })
}