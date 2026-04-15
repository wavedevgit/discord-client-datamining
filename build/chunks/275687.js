/** chunk id: 275687 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(311907),
    s = n(776231),
    d = n(664111),
    u = n(734057),
    h = n(67281),
    c = n(256034);

function m(e) {
    let {
        attachment: t,
        posterUrl: n,
        className: a,
        active: m = !1,
        autoPlay: p,
        src: g,
        embed: f = !1,
        fillContainer: x = !1,
        minWidth: A = 500,
        maxWidth: y = 1 / 0,
        maxHeight: w = 1 / 0,
        channelId: C,
        showTextContent: E = y >= 250,
        showParticipants: v = !0,
        volume: I,
        autoMute: j,
        onVolumeChange: M,
        onMutedChange: S,
        onClick: N,
        onContextMenu: O
    } = e, P = t.width ?? 0, _ = t.height ?? 0, T = (0, o.bG)([u.A], () => u.A.getBasicChannel(C)?.guild_id, [C]), U = P > 0 && _ > 0 ? P / _ : 16 / 9, V = Math.min(P > 0 ? P : A, y), b = V / U;
    b > w && (V = (b = w) * U), V < A && (b = (V = A) / U);
    let D = Math.round(Math.min(V, y)),
        L = Math.round(Math.min(b, w)),
        R = P > 0 && _ > 0 ? Math.min(D / P, L / _, 1) : 1,
        k = (0, s.AE)({
            src: n,
            width: Math.round(P * R),
            height: Math.round(_ * R)
        }),
        [F, W] = r.useState(!1),
        H = r.useCallback(e => {
            let {
                playerState: n,
                isControlBarExpanded: r
            } = e;
            return (0, i.jsx)(h.A, {
                createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                participantIds: v ? t.clip_participants?.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }) ?? [] : [],
                applicationId: t.application?.id,
                title: t.title,
                guildId: T,
                playerState: n,
                isControlBarExpanded: r,
                isFullScreen: F,
                showTextContent: E
            })
        }, [t, T, F, v, E]);
    return (0, i.jsx)("div", {
        className: l()(c.k, {
            [c.H]: x
        }, a),
        onClick: e => e.stopPropagation(),
        onKeyUp: f ? e => e.stopPropagation() : void 0,
        onKeyDown: f ? e => e.stopPropagation() : void 0,
        onContextMenu: O,
        style: x ? void 0 : {
            width: D,
            height: L
        },
        children: (0, i.jsx)(d.A, {
            crossOrigin: null,
            src: g,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: k,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: m,
            autoplay: p,
            initialVolume: I,
            initialMuted: j,
            onVolumeChange: M,
            onMutedChange: S,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: H,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onFullscreenChange: W,
            onClick: N,
            objectFit: x ? "cover" : void 0
        })
    })
}