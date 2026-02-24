/** chunk id: 195435, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => T
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(609425),
    u = n(922301),
    o = n(750112),
    d = n(534400),
    c = n(342296),
    h = n(481947),
    g = n(616356),
    I = n(287809),
    A = n(977997),
    f = n(403362),
    E = n(562153),
    m = n(996439),
    S = n(67103),
    p = n(652215),
    N = n(905777);
let T = i.memo(function(e) {
    let {
        channelId: t,
        guildId: n,
        userId: T,
        onDoubleClick: _,
        onContextMenu: C
    } = e, y = i.useRef(null), [x, M] = i.useState(!1), v = (0, r.bG)([I.default], () => I.default.getUser(T), [T]), D = function(e, t) {
        let [n] = (0, r.bG)([A.A], () => [A.A.getVoiceStateForChannel(e, t) ?? null, A.A.getVoiceStateVersion()], [e, t], m.D);
        return n
    }(t, T), R = (0, a.A)({
        userId: T,
        guildId: n
    }), O = (0, r.bG)([g.A], () => null != n && null != g.A.getStreamForUser(T, n), [n, T]), U = (0, E.tx)(n ?? void 0, t, v), G = i.useCallback(e => {
        (0, f.Vq)(v) && null != D && C?.({
            type: S.K.VOICE_USER,
            event: e,
            user: v,
            channelId: t
        })
    }, [t, C, v, D]);
    return (0, f.Vq)(v) && null != D ? (0, l.jsx)(c.A, {
        targetElementRef: y,
        user: v,
        guildId: n ?? void 0,
        channelId: t,
        appContext: p.BRT.OVERLAY,
        shouldShow: x,
        onRequestClose: () => M(!1),
        spacing: 24,
        children: e => (0, l.jsx)(s.DUT, {
            ...e,
            innerRef: y,
            className: N.gD,
            onDoubleClick: _,
            onContextMenu: G,
            onClick: e => {
                e.preventDefault(), e.stopPropagation(), M(!0)
            },
            children: (0, l.jsxs)("div", {
                className: N.h6,
                children: [(0, l.jsx)(s.euF, {
                    src: v.getAvatarURL(n ?? void 0, 24),
                    size: s._3J.SIZE_24,
                    "aria-label": U
                }), (0, l.jsxs)(s.Text, {
                    className: N.rg,
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: [(0, l.jsx)(o.A, {
                        userName: U,
                        displayNameStyles: R,
                        effectDisplayType: u.G.STATIC,
                        textClassName: N.m2
                    }), (0, l.jsx)(d.Ay, {
                        userId: T,
                        disableGuildProfile: !0
                    })]
                }), (0, l.jsx)("div", {
                    className: N.ZA,
                    onDoubleClick: _,
                    children: (0, l.jsx)(h.Kc, {
                        guildId: n ?? void 0,
                        user: v,
                        video: D.selfVideo,
                        isStreaming: O,
                        className: N.ZA,
                        iconClassName: N.Ow,
                        isWatching: !1,
                        localMute: !1,
                        localVideoDisabled: !1,
                        mute: D.isVoiceMuted(),
                        deaf: D.isVoiceDeafened(),
                        serverMute: D.mute || D.suppress,
                        serverDeaf: D.deaf,
                        disabled: !1
                    })
                })]
            })
        })
    }) : null
})