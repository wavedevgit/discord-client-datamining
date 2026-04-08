/** chunk id: 455207 params = (module,exports,require) **/
t.d(a, {
    MZ: () => o,
    NB: () => u,
    sx: () => d
});
var n = t(58149),
    c = t(943667),
    l = t(954571),
    r = t(124759),
    i = t(652215),
    s = t(375577);

function o(e) {
    return (0, c.A)(e) && e.messageReference.guild_id === r.Vi || null != e.author && e.author.id === r.hs
}

function u() {
    return s
}
let d = e => {
    l.default.track(i.HAw.USER_FLOW_TRANSITION, {
        flow_type: r.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, n.H$)(e.guildId)
    })
}