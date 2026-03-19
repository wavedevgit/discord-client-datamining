/** chunk id: 874026 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
});
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    r = n(311907),
    a = n(342952),
    o = n(397927),
    u = n(607407),
    c = n(652176),
    d = n(323443),
    m = n(575731),
    h = n(10862),
    g = n(616356),
    A = n(977997),
    f = n(570597),
    p = n(562153),
    x = n(47167),
    v = n(262763),
    C = n(402216),
    N = n(985018),
    b = n(332690);
let T = function(e) {
    let {
        channel: t
    } = e, n = (0, r.bG)([A.A], () => A.A.isInChannel(t.id)), s = (0, m.A)(t), T = (0, x.Ay)(t), E = s.map(e => p.Ay.getName(t.guild_id, t.id, e)), j = s.length <= 5, I = (0, r.bG)([g.A], () => g.A.getAllApplicationStreamsForChannel(t.id)[0]);
    return (0, l.jsxs)(c.Uq, {
        className: b.jC,
        children: [null != I && (0, l.jsxs)("div", {
            className: b.yt,
            children: [(0, l.jsx)(u.A, {
                stream: I,
                className: b.Rh,
                noText: !0
            }), (0, l.jsx)(C.Ay, {
                size: C.Ay.Sizes.SMALL,
                className: b.wI
            })]
        }), (0, l.jsxs)("div", {
            className: b.HA,
            children: [(0, l.jsx)(h.A, {
                size: "xs",
                color: "currentColor",
                channel: t,
                style: {
                    flexShrink: 0
                }
            }), (0, l.jsx)(o.Text, {
                variant: "text-sm/semibold",
                color: "text-status-online",
                lineClamp: 1,
                children: T
            })]
        }), (0, l.jsxs)("div", {
            className: i()(b.fM, {
                [b.Tj]: j
            }),
            children: [j ? (0, l.jsx)(o.Heading, {
                lineClamp: 1,
                variant: "heading-md/semibold",
                children: (0, f.X)(E)
            }) : null, (0, l.jsx)(a.A, {
                users: s,
                guildId: t.guild_id,
                channelId: t.id,
                size: o._3J.SIZE_24,
                maxUsers: 8,
                overflowCountColor: "text-subtle",
                onUserClick: e => e.stopPropagation(),
                "aria-label": N.intl.string(N.t["jNqDh/"])
            })]
        }), (0, l.jsx)("div", {
            className: b.UD,
            children: (0, l.jsx)(o.Button, {
                variant: n ? "secondary" : "active",
                size: "sm",
                text: n ? N.intl.string(N.t["3xjX0U"]) : N.intl.string(N.t.VJlc0S),
                fullWidth: !0,
                onClick: () => {
                    t.isGuildStageVoice() ? (0, d.av)(t) : v.A.handleVoiceConnect({
                        channel: t,
                        connected: n,
                        needSubscriptionToAccess: !1,
                        routeDirectlyToChannel: !0,
                        bypassChangeModal: !0
                    })
                }
            })
        })]
    })
}