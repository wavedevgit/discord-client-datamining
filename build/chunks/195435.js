/** chunk id: 195435 params = (module,exports,require) **/
n.d(t, {
    a: () => x
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(429913),
    u = n(609425),
    o = n(922301),
    d = n(750112),
    c = n(769015),
    h = n(534400),
    g = n(342296),
    I = n(481947),
    A = n(616356),
    f = n(290863),
    E = n(287809),
    m = n(977997),
    S = n(403362),
    _ = n(562153),
    p = n(996439),
    N = n(67103),
    T = n(70191),
    y = n(652215),
    C = n(796487);
let x = i.memo(function(e) {
    let {
        channelId: t,
        guildId: n,
        userId: x,
        onDoubleClick: v,
        onContextMenu: M
    } = e, D = i.useRef(null), [R, O] = i.useState(!1), U = (0, r.bG)([E.default], () => E.default.getUser(x), [x]), G = function(e, t) {
        let [n] = (0, r.bG)([m.A], () => [m.A.getVoiceStateForChannel(e, t) ?? null, m.A.getVoiceStateVersion()], [e, t], p.D);
        return n
    }(t, x), w = (0, u.A)({
        userId: x,
        guildId: n
    }), L = (0, r.bG)([A.A], () => null != n && null != A.A.getStreamForUser(x, n), [n, x]), F = (0, r.bG)([f.A], () => f.A.findActivity(x, T.A), [x]), b = (0, a.h)(F?.application_id), k = (0, _.tx)(n ?? void 0, t, U), P = i.useCallback(e => {
        (0, S.Vq)(U) && null != G && M?.({
            type: N.K.VOICE_USER,
            event: e,
            user: U,
            channelId: t
        })
    }, [t, M, U, G]);
    return (0, S.Vq)(U) && null != G ? (0, l.jsx)(g.A, {
        targetElementRef: D,
        user: U,
        guildId: n ?? void 0,
        channelId: t,
        appContext: y.BRT.OVERLAY,
        shouldShow: R,
        onRequestClose: () => O(!1),
        spacing: 24,
        children: e => (0, l.jsx)(s.DUT, {
            ...e,
            innerRef: D,
            className: C.gD,
            onDoubleClick: v,
            onContextMenu: P,
            onClick: e => {
                e.preventDefault(), e.stopPropagation(), O(!0)
            },
            children: (0, l.jsxs)("div", {
                className: C.h6,
                children: [(0, l.jsx)(s.euF, {
                    src: U.getAvatarURL(n ?? void 0, 24),
                    size: s._3J.SIZE_24,
                    "aria-label": k
                }), (0, l.jsxs)(s.Text, {
                    className: C.rg,
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: [(0, l.jsx)(d.A, {
                        userName: k,
                        displayNameStyles: w,
                        effectDisplayType: o.G.STATIC,
                        textClassName: C.m2
                    }), (0, l.jsx)(h.Ay, {
                        userId: x,
                        disableGuildProfile: !0
                    })]
                }), (0, l.jsx)("div", {
                    className: C.ZA,
                    onDoubleClick: v,
                    children: (0, l.jsx)(I.Kc, {
                        guildId: n ?? void 0,
                        user: U,
                        video: G.selfVideo,
                        isStreaming: L,
                        className: C.ZA,
                        iconClassName: C.Ow,
                        isWatching: !1,
                        localMute: !1,
                        localVideoDisabled: !1,
                        mute: G.isVoiceMuted(),
                        deaf: G.isVoiceDeafened(),
                        serverMute: G.mute || G.suppress,
                        serverDeaf: G.deaf,
                        disabled: !1
                    })
                }), null != b ? (0, l.jsx)(c.A, {
                    game: b,
                    size: c.M.XSMALL,
                    className: C.IV
                }) : null]
            })
        })
    }) : null
})