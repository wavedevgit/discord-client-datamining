/** Chunk was on web.js **/
/** chunk id: 480890, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Y: () => u,
    s: () => c
});
var r = n(961350),
    i = n(734057),
    a = n(383501),
    o = n(954571),
    s = n(806931),
    l = n(652215);

function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        {
            targetUserId: r,
            tileType: i,
            entrypoint: a
        } = n;
    return n => u({
        menuItemProps: n,
        menuName: e,
        location: t,
        entrypoint: null != a ? a : s.GK.CONTEXT_MENU,
        targetUserId: r,
        tileType: i
    })
}

function u(e) {
    var t;
    let {
        menuItemProps: {
            type: n
        },
        menuName: s,
        location: c,
        entrypoint: u,
        targetUserId: d,
        tileType: f
    } = e, p = a.A.getChannelId(), _ = a.A.getGuildId(), h = null == (t = i.A.getChannel(p)) ? void 0 : t.type, m = r.default.getId();
    o.default.track(l.HAw.CALL_MENU_ITEM_INTERACTED, {
        location: c,
        menu_name: s,
        menu_item_type: n,
        entrypoint: u,
        targets_self: null == d ? void 0 : d === m,
        guild_id: _,
        channel_id: p,
        channel_type: h,
        tile_type: f
    })
}