/** chunk id: 455207 params = (module,exports,require) **/
n.d(t, {
    MZ: () => c,
    NB: () => d,
    sx: () => u
});
var i = n(58149),
    l = n(943667),
    s = n(954571),
    a = n(124759),
    r = n(652215),
    o = n(375577);

function c(e) {
    return (0, l.A)(e) && e.messageReference.guild_id === a.Vi || null != e.author && e.author.id === a.hs
}

function d() {
    return o
}
let u = e => {
    s.default.track(r.HAw.USER_FLOW_TRANSITION, {
        flow_type: a.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, i.H$)(e.guildId)
    })
}