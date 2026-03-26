/** chunk id: 455207 params = (module,exports,require) **/
"use strict";
a.d(t, {
    MZ: () => l,
    NB: () => _,
    sx: () => u
});
var n = a(58149),
    i = a(943667),
    r = a(954571),
    s = a(124759),
    o = a(652215),
    c = a(375577);

function l(e) {
    return (0, i.A)(e) && e.messageReference.guild_id === s.Vi || null != e.author && e.author.id === s.hs
}

function _() {
    return c
}
let u = e => {
    r.default.track(o.HAw.USER_FLOW_TRANSITION, {
        flow_type: s.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, n.H$)(e.guildId)
    })
}