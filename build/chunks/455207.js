/** chunk id: 455207 params = (module,exports,require) **/
n.d(t, {
    MZ: () => c,
    NB: () => d,
    sx: () => u
});
var a = n(58149),
    i = n(943667),
    r = n(954571),
    l = n(124759),
    s = n(652215),
    o = n(375577);

function c(e) {
    return (0, i.A)(e) && e.messageReference.guild_id === l.Vi || null != e.author && e.author.id === l.hs
}

function d() {
    return o
}
let u = e => {
    r.default.track(s.HAw.USER_FLOW_TRANSITION, {
        flow_type: l.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, a.H$)(e.guildId)
    })
}