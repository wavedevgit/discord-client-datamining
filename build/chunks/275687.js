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
    u = n(664111),
    d = n(734057),
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
        fillContainer: A = !1,
        minWidth: x = 500,
        maxWidth: y = 1 / 0,
        maxHeight: w = 1 / 0,
        channelId: C,
        showParticipants: E = !0,
        volume: I,
        autoMute: v,
        onVolumeChange: j,
        onMutedChange: M,
        onClick: S,
        onContextMenu: N
    } = e, O = t.width ?? 0, P = t.height ?? 0, _ = (0, o.bG)([d.A], () => d.A.getBasicChannel(C)?.guild_id, [C]), T = O > 0 && P > 0 ? O / P : 16 / 9, U = Math.min(O > 0 ? O : x, y), V = U / T;
    V > w && (U = (V = w) * T), U < x && (V = (U = x) / T);
    let D = Math.round(Math.min(U, y)),
        b = Math.round(Math.min(V, w)),
        L = O > 0 && P > 0 ? Math.min(D / O, b / P, 1) : 1,
        R = (0, s.AE)({
            src: n,
            width: Math.round(O * L),
            height: Math.round(P * L)
        }),
        [k, W] = r.useState(!1),
        F = r.useCallback(e => {
            let {
                playerState: n,
                isControlBarExpanded: r
            } = e;
            return (0, i.jsx)(h.A, {
                createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                participantIds: E ? t.clip_participants?.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }) ?? [] : [],
                applicationId: t.application?.id,
                title: t.title,
                guildId: _,
                playerState: n,
                isControlBarExpanded: r,
                isFullScreen: k
            })
        }, [t, _, k, E]);
    return (0, i.jsx)("div", {
        className: l()(c.k, {
            [c.H]: A
        }, a),
        onClick: e => e.stopPropagation(),
        onKeyUp: f ? e => e.stopPropagation() : void 0,
        onKeyDown: f ? e => e.stopPropagation() : void 0,
        onContextMenu: N,
        style: A ? void 0 : {
            width: D,
            height: b
        },
        children: (0, i.jsx)(u.A, {
            crossOrigin: null,
            src: g,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: R,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: m,
            autoplay: p,
            initialVolume: I,
            initialMuted: v,
            onVolumeChange: j,
            onMutedChange: M,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: F,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onFullscreenChange: W,
            onClick: S
        })
    })
}