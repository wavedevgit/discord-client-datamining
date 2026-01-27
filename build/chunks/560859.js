/** Chunk was on web.js **/
/** chunk id: 560859, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(397927),
    c = n(688810),
    u = n(532622),
    d = n(271683),
    f = n(309698),
    p = n(46054),
    _ = n(345640),
    h = n(954571),
    m = n(939496),
    g = n(531648),
    E = n(652215),
    y = n(996988),
    b = n(985018),
    O = n(413535);

function v(e) {
    let {
        voiceChannel: t,
        onAction: n,
        onClose: a
    } = e, {
        themeType: v
    } = (0, m.E)(), {
        analyticsLocations: A
    } = (0, c.Ay)(), I = (0, _.b)(t), S = (0, u.Ay)(t, !0), T = (0, s.bG)([f.A], () => f.A.getChannelStatus(t)), C = i.useMemo(() => null == T || "" === T ? null : p.A.parseVoiceChannelStatus(T, !0, {
        channelId: t.id
    }), [T, t.id]);
    i.useEffect(() => {
        null != C && h.default.track(E.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
            channel_id: t.id,
            guild_id: t.guild_id,
            location_stack: A
        })
    }, [C, t.id, t.guild_id, A]);
    let N = e => {
        e.stopPropagation(), n({
            action: "PRESS_VOICE_CHANNEL_STATUS"
        }), v === y.d.POPOUT && (null == a || a()), (0, d.A)({
            channel: t,
            sourceAnalyticsLocations: A
        })
    };
    return S && I ? (0, r.jsxs)(l.DUT, {
        className: O.vk,
        onClick: N,
        children: [(0, r.jsx)(g.A, {
            text: null != C ? C : b.intl.string(b.t.Mgpxiw),
            variant: "text-xs/normal",
            color: "text-subtle",
            className: O.Qq
        }), (0, r.jsx)(l.R2l, {
            color: "currentColor",
            size: "xxs",
            className: o()(O.rD, null != C ? O.R : void 0),
            "aria-label": b.intl.string(b.t.bt75uw)
        })]
    }) : null != C ? (0, r.jsx)(g.A, {
        text: C,
        variant: "text-xs/normal",
        color: "text-subtle",
        className: O.Qq
    }) : null
}