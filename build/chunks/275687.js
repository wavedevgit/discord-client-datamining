/** chunk id: 275687 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(311907),
    o = n(776231),
    d = n(664111),
    u = n(734057),
    c = n(67281),
    h = n(256034);

function m(e) {
    let {
        attachment: t,
        posterUrl: n,
        className: r,
        active: m = !1,
        autoPlay: p,
        src: g,
        embed: x = !1,
        maxWidth: f,
        maxHeight: A,
        channelId: y,
        showParticipants: w = !0,
        volume: j,
        autoMute: v,
        onVolumeChange: C,
        onMutedChange: E,
        onClick: I,
        onContextMenu: N
    } = e, S = t.width ?? 0, M = t.height ?? 0, P = (0, s.bG)([u.A], () => u.A.getBasicChannel(y)?.guild_id, [y]), b = S > 0 && M > 0 ? Math.min((f ?? 1 / 0) / S, (A ?? 1 / 0) / M, 1) : 1, O = Math.round(S * b), U = Math.round(M * b), D = (0, o.AE)({
        src: n,
        width: O,
        height: U
    }), [T, _] = l.useState(!1), V = l.useCallback(e => {
        let {
            playerState: n,
            isControlBarExpanded: l
        } = e;
        return (0, i.jsx)(c.A, {
            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
            participantIds: w ? t.clip_participants?.map(e => {
                let {
                    id: t
                } = e;
                return t
            }) ?? [] : [],
            applicationId: t.application?.id,
            title: t.title,
            guildId: P,
            playerState: n,
            isControlBarExpanded: l,
            isFullScreen: T
        })
    }, [t, P, T, w]);
    return (0, i.jsx)("div", {
        className: a()(h.k, r),
        onClick: e => e.stopPropagation(),
        onKeyUp: x ? e => e.stopPropagation() : void 0,
        onKeyDown: x ? e => e.stopPropagation() : void 0,
        onContextMenu: N,
        style: {
            aspectRatio: `${S} / ${M}`,
            maxHeight: A,
            width: x ? void 0 : O,
            height: x ? void 0 : U
        },
        children: (0, i.jsx)(d.A, {
            crossOrigin: null,
            src: g,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: D,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: m,
            autoplay: p,
            initialVolume: j,
            initialMuted: v,
            onVolumeChange: C,
            onMutedChange: E,
            orientation: S >= M ? "landscape" : "portrait",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: V,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onFullscreenChange: _,
            onClick: I
        })
    })
}