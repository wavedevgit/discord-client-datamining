/** chunk id: 920268, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(136722),
    i = n(317525),
    a = n(71393),
    o = n(652215);
let s = [o.rbe.GUILD_TEXT, o.rbe.GUILD_VOICE, o.rbe.GUILD_ANNOUNCEMENT, o.rbe.GUILD_FORUM, o.rbe.PUBLIC_THREAD, o.rbe.PRIVATE_THREAD],
    l = r.kg(o.xBc.VIEW_CHANNEL, o.xBc.SEND_MESSAGES);

function c(e) {
    if (null == e || !s.includes(e.type)) return [];
    let t = a.A.getGuild(e.guild_id);
    return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
        var n, a;
        return 0 === e.type && (null == (a = i.A.getRole(t.id, e.id)) || null == (n = a.tags) ? void 0 : n.guild_connections) === null && !r.X8(e.deny, l)
    }).map(e => i.A.getRole(t.id, e.id)).filter(e => null != e)
}