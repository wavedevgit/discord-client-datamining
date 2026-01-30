/** chunk id: 942236, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var r = n(684013),
    s = n(742984),
    l = n(833551),
    o = n(976860),
    a = n(400492),
    c = n(845618),
    d = n(256415),
    u = n(723702),
    p = n(837921),
    h = n(9302),
    f = n(684748),
    g = n(652215),
    y = n(672396),
    m = n(985018);

function _(e, t, n, _) {
    var b;
    let {
        icon: A,
        title: O,
        body: v
    } = (0, s.TB)(e, t, n), {
        trackView: E,
        trackClick: x
    } = (0, f.Y)(y.KS.TextChat, {
        notif_type: y.KS.TextChat,
        notif_user_id: null == (b = t.author) ? void 0 : b.id,
        message_id: t.id,
        message_type: t.type,
        guild_id: e.guild_id,
        channel_id: e.id,
        channel_type: e.type
    });
    return {
        icon: A,
        title: O,
        body: v,
        renderFooter: e => e ? (0, i.jsx)("div", {
            style: {
                textAlign: "center"
            },
            children: m.intl.string(m.t["+MJm3w"])
        }) : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            _ && (0, a.Ak)(c.cH, c.pD), E()
        },
        onNotificationClick: () => {
            if (l.default.isOverlayOOPEnabledForPid((0, h.getPID)())) {
                let n = (0, h.getPID)();
                d.default.isInstanceLocked() ? (x("unlock"), r.A.setInputLocked(!1, n)) : (x("jump"), (0, o.pX)(g.BVt.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && p.Ay.focus())
            } else(0, o.pX)(g.BVt.CHANNEL(e.guild_id, e.id)), x("jump"), d.default.isInstanceLocked() && r.A.setInstanceLocked(!1)
        },
        onDismissClick: () => {
            x("dismiss")
        }
    }
}