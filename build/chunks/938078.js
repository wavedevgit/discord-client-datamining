/** Chunk was on 47841 **/
/** chunk id: 938078, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(627968);
n(64700);
var i = n(64749),
    l = n(508595),
    s = n(57222);

function a(e) {
    let {
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: a,
        onChange: o,
        placeholder: c,
        disableEveryoneRole: d,
        includeRoleRestrictedPrivateChannels: u = !1,
        includeStageVoiceChannels: g = !1,
        helperText: m,
        className: p
    } = e, f = (0, l.q)(t, n, u, g), b = (0, s.H)(t, a, d);
    return (0, r.jsx)(i.Ay, {
        channelRows: f,
        roleRows: b,
        guildId: t,
        selectedChannelIds: n,
        selectedRoleIds: a,
        onChange: o,
        placeholder: c,
        helperText: m,
        className: p
    })
}