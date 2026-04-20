/** chunk id: 83982 params = (module,exports,require) **/
n.d(t, {
    A: () => w,
    s: () => k
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(367513),
    u = n(684339),
    h = n(313961),
    m = n(520698),
    A = n(164617),
    g = n(958713),
    _ = n(525505),
    p = n(550946),
    f = n(991701),
    E = n(401901),
    C = n(869146),
    x = n(854627),
    S = n(530804),
    I = n(961350),
    T = n(430452),
    v = n(531685),
    N = n(562153),
    y = n(51082),
    b = n(566566),
    j = n(289552),
    R = n(652215),
    M = n(731854),
    L = n(985018),
    D = n(391308);
let O = c._3J.SIZE_80,
    P = c._3J.SIZE_40;

function k(e) {
    let {
        channelId: t,
        participant: n
    } = e;
    return (0, S.uy)(t, n.id) ? (0, i.jsx)(o.m, {
        text: L.intl.string(L.t.HFwRpk),
        position: "bottom",
        children: (0, i.jsx)("div", {
            className: D.bG,
            children: (0, i.jsx)(c.EpV, {
                color: c.LU0.colors.STATUS_WARNING_BACKGROUND
            })
        })
    }) : (0, i.jsx)(j.A, {
        userId: n.user.id
    })
}

function w(e) {
    let {
        participant: t,
        channel: n,
        inCall: a,
        width: o,
        selected: c,
        popoutType: S,
        fit: j,
        onVideoResize: k,
        blocked: w,
        ignored: U,
        noVideoRender: G = !1,
        pulseSpeakingIndicator: F = !1,
        paused: B = !1
    } = e, H = T.Ay.getVideoComponent(), V = (0, r.bG)([I.default], () => I.default.getId()), {
        user: W,
        streamId: K,
        speaking: z
    } = t, Y = W.id === V, J = (0, y.Ay)(t), q = (0, r.bG)([v.A], () => v.A.isFocused()), $ = (0, r.bG)([C.A], () => C.A.getWindowFocused(R.MLl.CHANNEL_CALL_POPOUT)), Z = (0, r.bG)([T.Ay], () => null != W.id && T.Ay.isLocalVideoDisabled(W.id, (0, m.A)(t.type)), [W.id, t.type]), X = (0, p.A)(n.guild_id, W.id), Q = N.Ay.getName(n.getGuildId(), n.id, W) + (X ? ` ${L.intl.string(L.t["pFO/Ph"])}` : ""), ee = z && ($ || q), et = o < 124 ? P : O, {
        avatarSrc: en,
        avatarDecorationSrc: ei
    } = (0, x.A)({
        userId: W.id,
        guildId: n.guild_id,
        size: et,
        animateOnHover: !ee
    }), el = (0, r.bG)([h.A], () => h.A.getSelectedParticipant(n.id)), ea = (0, _.A)(M.x.DEFAULT, t.user.id), es = (0, g.A)(t.user.id), er = {
        channel: n,
        selectedParticipant: el,
        user: W
    }, eo = l.useRef(er);
    return (l.useEffect(() => {
        eo.current = er
    }), l.useEffect(() => {
        let {
            channel: e,
            selectedParticipant: t,
            user: n
        } = eo.current;
        e.isGuildStageVoice() && !J && t?.id === n.id && d.A.selectParticipant(e.id, null)
    }, [J]), a && !Z && !G && J && !c && null != H && T.Ay.supports(M.O5.VIDEO)) ? null != ea && null == es ? (0, i.jsx)(b.A, {
        avError: ea,
        userId: t.id,
        width: o,
        selected: c
    }) : (0, i.jsx)(E.A, {
        onResize: k,
        wrapperClassName: S !== A.N.CALL_TILE ? D.tN : void 0,
        className: D.Qs,
        mirror: Y,
        streamId: K,
        videoComponent: H,
        fit: j,
        videoSpinnerContext: W.id === V ? u.u.SELF_VIDEO : u.u.REMOTE_VIDEO,
        paused: B,
        userId: W.id
    }, K) : (0, i.jsx)("div", {
        className: s()(D.Qs, {
            [D.Kx]: w || U
        }),
        children: (0, i.jsx)(f.A, {
            "aria-label": Q,
            avatarDecoration: ei,
            backgroundSrc: W.getAvatarURL(n.guild_id, 80),
            guildId: n.guild_id,
            pulseSpeakingIndicator: F,
            size: et,
            speaking: z,
            src: en,
            userId: W.id
        })
    })
}