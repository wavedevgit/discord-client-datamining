/** chunk id: 455207 params = (module,exports,require) **/
n.d(t, {
    MZ: () => o,
    NB: () => c,
    sx: () => u
});
var l = n(58149),
    a = n(943667),
    i = n(954571),
    r = n(124759),
    s = n(652215),
    d = n(375577);

function o(e) {
    return (0, a.A)(e) && e.messageReference.guild_id === r.Vi || null != e.author && e.author.id === r.hs
}

function c() {
    return d
}
let u = e => {
    i.default.track(s.HAw.USER_FLOW_TRANSITION, {
        flow_type: r.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, l.H$)(e.guildId)
    })
}