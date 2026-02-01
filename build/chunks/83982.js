/** chunk id: 83982, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => k,
    s: () => L
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(367513),
    d = n(684339),
    h = n(313961),
    p = n(520698),
    f = n(164617),
    m = n(958713),
    g = n(525505),
    A = n(991701),
    b = n(401901),
    _ = n(869146),
    y = n(854627),
    v = n(530804),
    E = n(961350),
    O = n(696451),
    C = n(430452),
    x = n(531685),
    S = n(562153),
    j = n(51082),
    I = (n(729365), n(566566)),
    T = n(289552),
    N = n(652215),
    P = n(731854),
    w = n(985018),
    R = n(707511);
let D = c._3J.SIZE_80,
    M = c._3J.SIZE_40;

function L(e) {
    let {
        channelId: t,
        participant: n
    } = e;
    return (0, v.uy)(t, n.id) ? (0, l.jsx)(o.m, {
        text: w.intl.string(w.t.HFwRpk),
        position: "bottom",
        children: (0, l.jsx)("div", {
            className: R.bG,
            children: (0, l.jsx)(c.EpV, {
                color: c.LU0.colors.STATUS_WARNING_BACKGROUND
            })
        })
    }) : (0, l.jsx)(T.A, {
        userId: n.user.id
    })
}

function k(e) {
    let {
        participant: t,
        channel: n,
        inCall: i,
        width: o,
        selected: c,
        popoutType: v,
        fit: T,
        onVideoResize: L,
        blocked: k,
        ignored: U,
        noVideoRender: G = !1,
        pulseSpeakingIndicator: F = !1,
        paused: H = !1
    } = e, B = C.A.getVideoComponent(), V = (0, s.bG)([E.default], () => E.default.getId()), {
        user: K,
        streamId: W,
        speaking: z
    } = t, q = K.id === V, Y = (0, j.Ay)(t), J = (0, s.bG)([x.A], () => x.A.isFocused()), Z = (0, s.bG)([_.A], () => _.A.getWindowFocused(N.MLl.CHANNEL_CALL_POPOUT)), X = (0, s.bG)([C.A], () => null != K.id && C.A.isLocalVideoDisabled(K.id, (0, p.A)(t.type)), [K.id, t.type]), Q = (0, s.bG)([O.Ay], () => O.Ay.isGuestOrLurker(n.guild_id, K.id)), $ = S.Ay.getName(n.getGuildId(), n.id, K) + (Q ? " ".concat(w.intl.string(w.t["pFO/Ph"])) : ""), ee = z && (Z || J), et = o < 124 ? M : D, {
        avatarSrc: en,
        avatarDecorationSrc: el
    } = (0, y.A)({
        userId: K.id,
        guildId: n.guild_id,
        size: et,
        animateOnHover: !ee
    }), er = (0, s.bG)([h.A], () => h.A.getSelectedParticipant(n.id)), ei = (0, g.A)(P.x.DEFAULT, t.user.id), ea = (0, m.A)(t.user.id), es = {
        channel: n,
        selectedParticipant: er,
        user: K
    }, eo = r.useRef(es);
    return (r.useEffect(() => {
        eo.current = es
    }), r.useEffect(() => {
        let {
            channel: e,
            selectedParticipant: t,
            user: n
        } = eo.current;
        e.isGuildStageVoice() && !Y && (null == t ? void 0 : t.id) === n.id && u.A.selectParticipant(e.id, null)
    }, [Y]), i && !X && !G && Y && !c && null != B && C.A.supports(P.O5.VIDEO)) ? null != ei && null == ea ? (0, l.jsx)(I.A, {
        avError: ei,
        userId: t.id,
        width: o,
        selected: c
    }) : (0, l.jsx)(b.A, {
        onResize: L,
        wrapperClassName: v !== f.N.CALL_TILE ? R.tN : void 0,
        className: R.Qs,
        mirror: q,
        streamId: W,
        videoComponent: B,
        fit: T,
        videoSpinnerContext: K.id === V ? d.u.SELF_VIDEO : d.u.REMOTE_VIDEO,
        paused: H,
        userId: K.id
    }, W) : (0, l.jsx)("div", {
        className: a()(R.Qs, {
            [R.Kx]: k || U
        }),
        children: (0, l.jsx)(A.A, {
            "aria-label": $,
            avatarDecoration: el,
            backgroundSrc: K.getAvatarURL(n.guild_id, 80),
            guildId: n.guild_id,
            pulseSpeakingIndicator: F,
            size: et,
            speaking: z,
            src: en,
            userId: K.id
        })
    })
}