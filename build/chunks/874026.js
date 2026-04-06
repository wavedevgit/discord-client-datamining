/** chunk id: 874026 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
});
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(342952),
    a = n(397927),
    r = n(693879),
    o = n(607407),
    u = n(652176),
    c = n(323443),
    d = n(575731),
    m = n(10862),
    g = n(616356),
    h = n(977997),
    A = n(47167),
    f = n(475889),
    p = n(262763),
    x = n(402216),
    v = n(985018),
    C = n(316049);
let N = function(e) {
    let {
        channel: t
    } = e, n = (0, i.bG)([h.A], () => h.A.isInChannel(t.id)), N = (0, d.A)(t), E = (0, A.Ay)(t), _ = (0, f.H)(t), I = (0, i.bG)([g.A], () => g.A.getAllApplicationStreamsForChannel(t.id)[0]);
    return (0, l.jsxs)(u.Uq, {
        className: C.jC,
        children: [(0, l.jsxs)("div", {
            className: C.hY,
            children: [(0, l.jsxs)("div", {
                className: C.HA,
                children: [(0, l.jsx)(m.A, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    color: "currentColor",
                    channel: t,
                    style: {
                        flexShrink: 0
                    }
                }), (0, l.jsx)("div", {
                    className: C.Mw,
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: C.Kw,
                        children: E
                    })
                })]
            }), null != _ && (0, l.jsx)("span", {
                className: C.j2,
                children: (0, l.jsx)(r.z, {
                    entry: {
                        start: _
                    },
                    textColor: "text-feedback-positive"
                })
            })]
        }), (0, l.jsxs)("div", {
            className: C.Bm,
            children: [null != I && (0, l.jsxs)("div", {
                className: C.yt,
                children: [(0, l.jsx)(o.A, {
                    stream: I,
                    className: C.Rh,
                    noText: !0
                }), (0, l.jsx)(x.Ay, {
                    size: x.Ay.Sizes.SMALL,
                    className: C.wI
                })]
            }), (0, l.jsx)(s.A, {
                users: N,
                guildId: t.guild_id,
                channelId: t.id,
                size: a._3J.SIZE_24,
                maxUsers: 8,
                "aria-label": v.intl.string(v.t["jNqDh/"])
            }), (0, l.jsx)(a.Button, {
                variant: n ? "secondary" : "active",
                size: "sm",
                text: n ? v.intl.string(v.t["3xjX0U"]) : v.intl.string(v.t.VJlc0S),
                fullWidth: !0,
                onClick: () => {
                    t.isGuildStageVoice() ? (0, c.av)(t) : p.A.handleVoiceConnect({
                        channel: t,
                        connected: n,
                        needSubscriptionToAccess: !1,
                        routeDirectlyToChannel: !0,
                        bypassChangeModal: !0
                    })
                }
            })]
        })]
    })
}