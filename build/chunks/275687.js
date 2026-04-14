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
        maxWidth: A,
        maxHeight: x,
        channelId: y,
        showParticipants: w = !0,
        volume: C,
        autoMute: E,
        onVolumeChange: I,
        onMutedChange: v,
        onClick: j,
        onContextMenu: S
    } = e, M = t.width ?? 0, N = t.height ?? 0, O = (0, o.bG)([u.A], () => u.A.getBasicChannel(y)?.guild_id, [y]), P = M > 0 && N > 0 ? Math.min((A ?? 1 / 0) / M, (x ?? 1 / 0) / N, 1) : 1, _ = Math.round(M * P), T = Math.round(N * P), U = (0, s.AE)({
        src: n,
        width: _,
        height: T
    }), [V, D] = r.useState(!1), b = r.useCallback(e => {
        let {
            playerState: n,
            isControlBarExpanded: r
        } = e;
        return (0, i.jsx)(h.A, {
            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
            participantIds: w ? t.clip_participants?.map(e => {
                let {
                    id: t
                } = e;
                return t
            }) ?? [] : [],
            applicationId: t.application?.id,
            title: t.title,
            guildId: O,
            playerState: n,
            isControlBarExpanded: r,
            isFullScreen: V
        })
    }, [t, O, V, w]);
    return (0, i.jsx)("div", {
        className: l()(c.k, a),
        onClick: e => e.stopPropagation(),
        onKeyUp: f ? e => e.stopPropagation() : void 0,
        onKeyDown: f ? e => e.stopPropagation() : void 0,
        onContextMenu: S,
        style: {
            aspectRatio: `${M} / ${N}`,
            maxHeight: x,
            width: f ? void 0 : _,
            height: f ? void 0 : T
        },
        children: (0, i.jsx)(d.A, {
            crossOrigin: null,
            src: g,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: U,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: m,
            autoplay: p,
            initialVolume: C,
            initialMuted: E,
            onVolumeChange: I,
            onMutedChange: v,
            orientation: M >= N ? "landscape" : "portrait",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: b,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onFullscreenChange: D,
            onClick: j
        })
    })
}