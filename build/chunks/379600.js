/** Chunk was on 1113 **/
/** chunk id: 379600, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(110259),
    a = n(311907),
    o = n(732955),
    c = n(397927),
    u = n(387755),
    d = n(139286),
    h = n(313961),
    p = n(325909),
    g = n(573435),
    f = n(378570),
    m = n(260509),
    b = n(71393),
    A = n(47167),
    y = n(806931),
    O = n(985018),
    _ = n(287278);

function j(e) {
    let {
        recipientUser: t,
        voiceChannel: n
    } = e, l = (0, A.Ay)(n), o = (0, p.o)(t, "RingToVoiceBanner", n.id), {
        userIsInCall: u,
        isUserRinging: f
    } = (0, a.cf)([h.A], () => {
        let e = null;
        return o && null != n.id && (e = h.A.getParticipant(n.id, t.id)), {
            userIsInCall: null != e,
            isUserRinging: null != e && e.type === y.lp.USER && e.ringing
        }
    }), j = (0, a.bG)([b.A], () => b.A.getGuild(n.guild_id)), v = null != j ? (0, m.Iv)(j, 32, !0) : null, E = !o || u && !f;
    return ((0, d.A)({
        type: s.ImpressionTypes.PAGE,
        name: s.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
        properties: {
            voice_channel_id: null == n ? void 0 : n.id,
            voice_guild_id: null == n ? void 0 : n.guild_id
        }
    }, {
        disableTrack: E
    }, [t.id]), E) ? null : (0, r.jsxs)("div", {
        className: i()(_.Sp, _.JD),
        children: [(0, r.jsxs)("div", {
            className: _.hP,
            children: [(0, r.jsx)(g.Ay, {
                className: _.dK,
                mask: g.hW.SQUIRCLE,
                width: 24,
                height: 24,
                children: null == v ? (0, r.jsx)("div", {
                    className: i()(_.$f, _.Gc),
                    children: (0, r.jsx)("div", {
                        className: _.Hj,
                        children: null != j ? (0, m.Rb)(j) : null
                    })
                }) : (0, r.jsx)("img", {
                    alt: null == j ? void 0 : j.name,
                    src: v,
                    className: _.$f
                })
            }), (0, r.jsx)(c.Text, {
                className: _.E5,
                variant: "text-md/medium",
                color: "text-default",
                children: O.intl.format(O.t.f2tNxH, {
                    username: null == t ? void 0 : t.globalName,
                    channelName: (0, r.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: l
                    }, n.id)
                })
            })]
        }), (0, r.jsx)(x, {
            channelId: n.id,
            recipientUserId: t.id,
            isUserRinging: f
        })]
    })
}

function x(e) {
    let {
        channelId: t,
        recipientUserId: n,
        isUserRinging: l
    } = e, i = l ? O.intl.string(O.t.ygslb0) : O.intl.string(O.t["3Hv9qQ"]), s = l ? () => u.A.stopRinging(t, [n]) : () => {
        u.A.ring(t, [n], "dm_banner"), (0, f.iN)(t)
    };
    return (0, r.jsx)(o.$nd, {
        variant: l ? "critical-secondary" : "secondary",
        size: "sm",
        text: i,
        iconPosition: "start",
        icon: c.HKD,
        onClick: s
    })
}