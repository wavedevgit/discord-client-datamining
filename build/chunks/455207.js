/** chunk id: 455207 params = (module,exports,require) **/
n.d(t, {
    MZ: () => c,
    NB: () => d,
    sx: () => u
});
var a = n(58149),
    i = n(943667),
    r = n(954571),
    s = n(124759),
    o = n(652215),
    l = n(375577);

function c(e) {
    return (0, i.A)(e) && e.messageReference.guild_id === s.Vi || null != e.author && e.author.id === s.hs
}

function d() {
    return l
}
let u = e => {
    r.default.track(o.HAw.USER_FLOW_TRANSITION, {
        flow_type: s.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, a.H$)(e.guildId)
    })
}