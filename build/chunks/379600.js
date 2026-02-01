/** chunk id: 379600, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(110259),
    s = n(311907),
    o = n(732955),
    c = n(397927),
    u = n(387755),
    d = n(139286),
    h = n(313961),
    p = n(325909),
    f = n(573435),
    m = n(378570),
    g = n(260509),
    A = n(71393),
    b = n(47167),
    _ = n(806931),
    y = n(985018),
    v = n(287278);

function E(e) {
    let {
        recipientUser: t,
        voiceChannel: n
    } = e, r = (0, b.Ay)(n), o = (0, p.o)(t, "RingToVoiceBanner", n.id), {
        userIsInCall: u,
        isUserRinging: m
    } = (0, s.cf)([h.A], () => {
        let e = null;
        return o && null != n.id && (e = h.A.getParticipant(n.id, t.id)), {
            userIsInCall: null != e,
            isUserRinging: null != e && e.type === _.lp.USER && e.ringing
        }
    }), E = (0, s.bG)([A.A], () => A.A.getGuild(n.guild_id)), C = null != E ? (0, g.Iv)(E, 32, !0) : null, x = !o || u && !m;
    return ((0, d.A)({
        type: a.ImpressionTypes.PAGE,
        name: a.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
        properties: {
            voice_channel_id: null == n ? void 0 : n.id,
            voice_guild_id: null == n ? void 0 : n.guild_id
        }
    }, {
        disableTrack: x
    }, [t.id]), x) ? null : (0, l.jsxs)("div", {
        className: i()(v.Sp, v.JD),
        children: [(0, l.jsxs)("div", {
            className: v.hP,
            children: [(0, l.jsx)(f.Ay, {
                className: v.dK,
                mask: f.hW.SQUIRCLE,
                width: 24,
                height: 24,
                children: null == C ? (0, l.jsx)("div", {
                    className: i()(v.$f, v.Gc),
                    children: (0, l.jsx)("div", {
                        className: v.Hj,
                        children: null != E ? (0, g.Rb)(E) : null
                    })
                }) : (0, l.jsx)("img", {
                    alt: null == E ? void 0 : E.name,
                    src: C,
                    className: v.$f
                })
            }), (0, l.jsx)(c.Text, {
                className: v.E5,
                variant: "text-md/medium",
                color: "text-default",
                children: y.intl.format(y.t.f2tNxH, {
                    username: null == t ? void 0 : t.globalName,
                    channelName: (0, l.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: r
                    }, n.id)
                })
            })]
        }), (0, l.jsx)(O, {
            channelId: n.id,
            recipientUserId: t.id,
            isUserRinging: m
        })]
    })
}

function O(e) {
    let {
        channelId: t,
        recipientUserId: n,
        isUserRinging: r
    } = e, i = r ? y.intl.string(y.t.ygslb0) : y.intl.string(y.t["3Hv9qQ"]), a = r ? () => u.A.stopRinging(t, [n]) : () => {
        u.A.ring(t, [n], "dm_banner"), (0, m.iN)(t)
    };
    return (0, l.jsx)(o.$nd, {
        variant: r ? "critical-secondary" : "secondary",
        size: "sm",
        text: i,
        iconPosition: "start",
        icon: c.HKD,
        onClick: a
    })
}