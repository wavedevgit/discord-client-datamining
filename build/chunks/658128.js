/** chunk id: 658128, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    W: () => u
});
var r = n(713125),
    i = n(473529),
    a = n(871123),
    o = n(734057),
    s = n(808728),
    l = n(309010),
    c = n(746080);

function u(e) {
    var t;
    let n = l.A.getChannelId(e),
        u = null == (t = s.Ay.getDefaultChannel(e)) ? void 0 : t.id;
    return (n !== c.VV.GUILD_ONBOARDING || r.Ay.shouldShowOnboarding(e)) && (n !== c.VV.GUILD_HOME || (0, i.K)(e)) ? n === c.VV.GAME_SHOP && (0, a.Ye)(e, "getChannelIdForGuildTransition") ? n : null == o.A.getChannel(n) ? u : n : u
}