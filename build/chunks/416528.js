/** chunk id: 416528, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(793574),
    u = n(688810),
    h = n(402216),
    A = n(689874),
    p = n(872363),
    m = n(966597),
    g = n(922281),
    _ = n(51082),
    f = n(275731),
    x = n(289552),
    C = n(246356),
    E = n(977851),
    I = n(772475),
    N = n(481947),
    b = n(485296),
    S = n(313961),
    T = n(195007),
    y = n(806931),
    v = n(985018),
    j = n(433122);

function R(e) {
    let {
        channelId: t,
        guildId: n
    } = e, s = (0, r.yK)([b.A, S.A], () => {
        let e = Date.now();
        return a()(b.A.getSpeakers()).map(e => S.A.getParticipant(t, e)).filter(e => null != e && e.type === y.lp.USER && e.speaking && !(0, _.Ay)(e)).sortBy(t => -b.A.getSpeakingDuration(t.user.id, e)).slice(0, 3).value()
    });
    return 0 === s.length ? null : (0, i.jsx)("div", {
        className: j.$U,
        children: s.map(e => (0, i.jsx)(o.m, {
            position: "bottom",
            text: v.intl.formatToPlainString(v.t.JjdizN, {
                username: e.user.username
            }),
            children: (0, i.jsx)(N.Ay, {
                user: e.user,
                speaking: !0,
                collapsed: !0,
                guildId: n
            })
        }, e.id))
    })
}

function O(e) {
    let {
        channel: t,
        isChatOpen: n
    } = e, l = s.useRef(null), {
        analyticsLocations: a
    } = (0, u.Ay)(d.A.VOICE_CHANNEL_HEADER), o = t.id, {
        voiceParticipantsHidden: _,
        selectedParticipant: N,
        userParticipantCount: b
    } = (0, r.cf)([S.A], () => ({
        selectedParticipant: S.A.getSelectedParticipant(o),
        voiceParticipantsHidden: S.A.getVoiceParticipantsHidden(o),
        userParticipantCount: S.A.getUserParticipantCount(o)
    }), [o]), v = t.isGuildVoiceOrThread() && !n, {
        enabled: O,
        inInbox: L
    } = m.A.useExperiment({
        location: "ChannelCallHeaderToolbar"
    }), M = [];
    return _ && M.push((0, i.jsx)(R, {
        channelId: o,
        guildId: t.guild_id
    }, "current-speaker")), M.push((0, i.jsx)(A.A, {
        className: j.x6,
        channelId: o
    }, "clips-enabled-indicator")), N?.type === y.lp.STREAM && (M.push((0, i.jsx)(f.A, {
        className: j.x6,
        participant: N
    }, "warning")), M.push((0, i.jsx)(p.A, {
        size: h.Ay.Sizes.LARGE,
        className: j.x6,
        participant: N,
        showQuality: !0,
        premiumIndicator: !1
    }, "live-indicator"))), N?.type === y.lp.USER && M.push((0, i.jsx)(x.A, {
        className: j.x6,
        userId: N.id
    }, "video-warning")), _ && M.push((0, i.jsx)(c.YNO, {
        targetElementRef: l,
        position: "bottom",
        renderPopout: () => (0, i.jsx)(C.A, {
            children: (0, i.jsx)(T.A, {
                channel: t
            })
        }),
        children: (e, t) => {
            let {
                isShown: n
            } = t;
            return (0, s.createElement)(I.A, {
                ...e,
                buttonRef: l,
                isActive: n,
                count: b,
                key: "call-members",
                className: j.x6
            })
        }
    }, "call-members-popout")), O && !L && M.push((0, i.jsx)(g.A, {
        className: j.x6
    }, "for-later")), v && M.push((0, i.jsx)(E.V, {
        channelId: t.id,
        className: j.x6,
        disabled: n
    }, "chat-spacer")), (0, i.jsx)(u.f5, {
        value: a,
        children: M
    })
}