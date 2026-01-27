/** Chunk was on 39048 **/
/** chunk id: 668133, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => o
});
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(863598),
    s = n(308889),
    a = n(985018);

function o(e) {
    let {
        canManageGuild: t,
        guild: n
    } = e;
    return (0, r.jsxs)(i.nVY, {
        label: a.intl.string(a.t["Cv6AN/"]),
        description: a.intl.string(a.t.qxIcrT),
        children: [(0, r.jsx)(s.l, {
            canManageGuild: t,
            guild: n
        }), (0, r.jsx)(l.h, {
            layout: "horizontal",
            label: a.intl.string(a.t.NASFnq),
            description: a.intl.string(a.t.ZhOdpR),
            canManageGuild: t,
            guildId: n.id,
            systemChannelId: n.systemChannelId
        })]
    })
}