/** Chunk was on 97492 **/
/** chunk id: 923432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(108531),
    o = n(311907),
    c = n(397927),
    u = n(250719),
    d = n(636585),
    p = n(531685),
    h = n(147036),
    f = n(288989),
    g = n(985018),
    m = n(317022);
let b = {
    friction: 30,
    tension: 300
};

function A(e) {
    var t;
    let {
        guildChannels: n,
        jumpToVoiceChannels: i
    } = e, a = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, u.A)(n.id), p = l.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), i()
    }, [i]), f = null != (t = null == a ? void 0 : a.getChannelRecords()) ? t : [], b = (0, h.fK)({
        channels: f,
        selectedChannelId: null,
        selectedVoiceChannelId: null,
        voiceStates: o
    });
    return (0, r.jsxs)(c.DUT, {
        className: s()(m.M0, m.OF),
        onClick: p,
        children: [(0, r.jsx)(c.HKD, {
            size: "custom",
            className: m.Gs,
            width: 14,
            height: 14,
            color: "currentColor"
        }), (0, r.jsx)(c.Text, {
            variant: "text-xs/semibold",
            className: m.pM,
            children: g.intl.format(g.t["fDlr+F"], {
                count: b.length
            })
        }), (0, r.jsx)(d.A, {
            guildId: n.id,
            className: m.J$,
            users: b.slice(0, 4),
            renderMoreUsers: () => null,
            max: 4,
            size: c._3J.SIZE_16
        })]
    })
}

function y(e) {
    let {
        position: t,
        guildChannels: n,
        guildChannelsVersion: i,
        jumpToVoiceChannels: u,
        jumpToChannel: d
    } = e, {
        bottomBar: h,
        topBar: y
    } = (0, o.cf)([f.A], () => f.A.getUnreadStateForGuildId(n.id)), _ = (0, o.bG)([p.A], () => p.A.isFocused()), {
        mode: O,
        mentionCount: j,
        targetChannelId: v
    } = "bottom" === t ? h : y, x = O === f.k.HIDDEN, E = (0, c.zhh)({
        to: {
            transform: x ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
        },
        config: b
    }, _ ? "respect-motion-settings" : "animate-never"), C = l.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), null != v && d(v)
    }, [d, v]);
    return (0, r.jsx)("div", {
        className: s()(m.kL, {
            [m.Mn]: "top" === t,
            [m.sQ]: "bottom" === t
        }),
        children: (0, r.jsx)(a.animated.div, {
            className: m.pK,
            style: E,
            "aria-hidden": x,
            children: O === f.k.HIDDEN ? (0, r.jsx)("div", {
                className: s()(m.M0, m.Te)
            }) : O === f.k.UNREAD ? (0, r.jsxs)(c.DUT, {
                className: m.M0,
                onClick: C,
                children: ["bottom" === t ? (0, r.jsx)(c.abt, {
                    size: "custom",
                    color: "currentColor",
                    className: m.z_,
                    height: 14,
                    width: 14
                }) : (0, r.jsx)(c.tN5, {
                    size: "custom",
                    color: "currentColor",
                    className: m.z_,
                    height: 14,
                    width: 14
                }), (0, r.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    color: "interactive-text-default",
                    className: m.pM,
                    children: g.intl.string(g.t.FCRiT3)
                })]
            }) : O === f.k.MENTIONS ? (0, r.jsx)(c.DUT, {
                className: s()(m.M0, m.vU),
                onClick: C,
                children: (0, r.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    color: "badge-text-brand",
                    className: m.pM,
                    children: g.intl.format(g.t.EQcLyp, {
                        count: j
                    })
                })
            }) : O === f.k.VOICE_CHANNELS ? (0, r.jsx)(A, {
                jumpToVoiceChannels: u,
                guildChannels: n,
                guildChannelsVersion: i
            }) : void 0
        })
    })
}