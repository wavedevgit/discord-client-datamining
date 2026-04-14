/** chunk id: 455207 params = (module,exports,require) **/
t.d(a, {
    MZ: () => s,
    NB: () => _,
    sx: () => d
});
var n = t(58149),
    i = t(943667),
    o = t(954571),
    r = t(124759),
    c = t(652215),
    l = t(375577);

function s(e) {
    return (0, i.A)(e) && e.messageReference.guild_id === r.Vi || null != e.author && e.author.id === r.hs
}

function _() {
    return l
}
let d = e => {
    o.default.track(c.HAw.USER_FLOW_TRANSITION, {
        flow_type: r.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, n.H$)(e.guildId)
    })
}