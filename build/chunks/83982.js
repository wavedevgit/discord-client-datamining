/** chunk id: 83982, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => M,
    s: () => L
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(990078),
    c = n(397927),
    u = n(367513),
    d = n(684339),
    f = n(313961),
    p = n(520698),
    g = n(164617),
    m = n(958713),
    _ = n(525505),
    h = n(991701),
    y = n(401901),
    A = n(869146),
    b = n(854627),
    E = n(530804),
    v = n(961350),
    O = n(696451),
    x = n(430452),
    S = n(531685),
    C = n(562153),
    N = n(51082),
    I = (n(729365), n(566566)),
    j = n(289552),
    T = n(652215),
    w = n(731854),
    P = n(985018),
    R = n(707511);
let D = c._3J.SIZE_80,
    k = c._3J.SIZE_40;

function L(e) {
    let {
        channelId: t,
        participant: n
    } = e;
    return (0, E.uy)(t, n.id) ? (0, r.jsx)(s.m, {
        text: P.intl.string(P.t.HFwRpk),
        position: "bottom",
        children: (0, r.jsx)("div", {
            className: R.bG,
            children: (0, r.jsx)(c.EpV, {
                color: c.LU0.colors.STATUS_WARNING_BACKGROUND
            })
        })
    }) : (0, r.jsx)(j.A, {
        userId: n.user.id
    })
}

function M(e) {
    let {
        participant: t,
        channel: n,
        inCall: i,
        width: s,
        selected: c,
        popoutType: E,
        fit: j,
        onVideoResize: L,
        blocked: M,
        ignored: U,
        noVideoRender: V = !1,
        pulseSpeakingIndicator: F = !1,
        paused: G = !1
    } = e, B = x.A.getVideoComponent(), H = (0, o.bG)([v.default], () => v.default.getId()), {
        user: W,
        streamId: z,
        speaking: Y
    } = t, K = W.id === H, Z = (0, N.Ay)(t), q = (0, o.bG)([S.A], () => S.A.isFocused()), X = (0, o.bG)([A.A], () => A.A.getWindowFocused(T.MLl.CHANNEL_CALL_POPOUT)), J = (0, o.bG)([x.A], () => null != W.id && x.A.isLocalVideoDisabled(W.id, (0, p.A)(t.type)), [W.id, t.type]), Q = (0, o.bG)([O.Ay], () => O.Ay.isGuestOrLurker(n.guild_id, W.id)), $ = C.Ay.getName(n.getGuildId(), n.id, W) + (Q ? " ".concat(P.intl.string(P.t["pFO/Ph"])) : ""), ee = Y && (X || q), et = s < 124 ? k : D, {
        avatarSrc: en,
        avatarDecorationSrc: er
    } = (0, b.A)({
        userId: W.id,
        guildId: n.guild_id,
        size: et,
        animateOnHover: !ee
    }), el = (0, o.bG)([f.A], () => f.A.getSelectedParticipant(n.id)), ei = (0, _.A)(w.x.DEFAULT, t.user.id), ea = (0, m.A)(t.user.id), eo = {
        channel: n,
        selectedParticipant: el,
        user: W
    }, es = l.useRef(eo);
    return (l.useEffect(() => {
        es.current = eo
    }), l.useEffect(() => {
        let {
            channel: e,
            selectedParticipant: t,
            user: n
        } = es.current;
        e.isGuildStageVoice() && !Z && (null == t ? void 0 : t.id) === n.id && u.A.selectParticipant(e.id, null)
    }, [Z]), i && !J && !V && Z && !c && null != B && x.A.supports(w.O5.VIDEO)) ? null != ei && null == ea ? (0, r.jsx)(I.A, {
        avError: ei,
        userId: t.id,
        width: s,
        selected: c
    }) : (0, r.jsx)(y.A, {
        onResize: L,
        wrapperClassName: E !== g.N.CALL_TILE ? R.tN : void 0,
        className: R.Qs,
        mirror: K,
        streamId: z,
        videoComponent: B,
        fit: j,
        videoSpinnerContext: W.id === H ? d.u.SELF_VIDEO : d.u.REMOTE_VIDEO,
        paused: G,
        userId: W.id
    }, z) : (0, r.jsx)("div", {
        className: a()(R.Qs, {
            [R.Kx]: M || U
        }),
        children: (0, r.jsx)(h.A, {
            "aria-label": $,
            avatarDecoration: er,
            backgroundSrc: W.getAvatarURL(n.guild_id, 80),
            guildId: n.guild_id,
            pulseSpeakingIndicator: F,
            size: et,
            speaking: Y,
            src: en,
            userId: W.id
        })
    })
}