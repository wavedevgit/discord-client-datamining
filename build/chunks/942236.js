/** chunk id: 942236 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => A
});
var n = i(627968);
i(64700);
var s = i(684013),
    a = i(742984),
    l = i(833551),
    r = i(976860),
    o = i(400492),
    d = i(845618),
    c = i(256415),
    u = i(723702),
    h = i(837921),
    _ = i(9302),
    p = i(684748),
    f = i(652215),
    m = i(672396),
    g = i(985018);

function A(e, t, i, A) {
    let {
        icon: x,
        title: v,
        body: y
    } = (0, a.TB)(e, t, i), {
        trackView: E,
        trackClick: I
    } = (0, p.Y)(m.KS.TextChat, {
        notif_type: m.KS.TextChat,
        notif_user_id: t.author?.id,
        message_id: t.id,
        message_type: t.type,
        guild_id: e.guild_id,
        channel_id: e.id,
        channel_type: e.type
    });
    return {
        icon: x,
        title: v,
        body: y,
        renderFooter: e => e ? (0, n.jsx)("div", {
            style: {
                textAlign: "center"
            },
            children: g.intl.string(g.t["+MJm3w"])
        }) : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            A && (0, o.Ak)(d.cH, d.pD), E()
        },
        onNotificationClick: () => {
            if (l.default.isOverlayOOPEnabledForPid((0, _.getPID)())) {
                let i = (0, _.getPID)();
                c.default.isInstanceLocked() ? (I("unlock"), s.A.setInputLocked(!1, i)) : (I("jump"), (0, r.pX)(f.BVt.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && h.Ay.focus())
            } else(0, r.pX)(f.BVt.CHANNEL(e.guild_id, e.id)), I("jump"), c.default.isInstanceLocked() && s.A.setInstanceLocked(!1)
        },
        onDismissClick: () => {
            I("dismiss")
        }
    }
}