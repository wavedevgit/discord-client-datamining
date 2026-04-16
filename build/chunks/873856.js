/** chunk id: 873856 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(64700),
    s = n(412703),
    a = n(536968),
    l = n(697397),
    i = n(579473),
    u = n(795068),
    o = n(654487);

function c(e) {
    let {
        videoAssetUrl: t,
        videoRef: n,
        hlsRef: c,
        videoAssetType: d
    } = e, {
        questConfig: E
    } = r.useContext(u.l), m = (0, a._o)({
        location: o.rE.VIDEO_MODAL
    }).externalAnalyticsEnabled && null != t, f = d === i.fY.VIDEO_PLAYER_VIDEO_HLS, _ = r.useMemo(() => ({
        contentId: t ?? "",
        videoStreamType: f ? "hls" : "mp4",
        contentType: "quests",
        title: E.taskConfigV2.tasks[s.n.WATCH_VIDEO]?.messages.videoTitle,
        questId: E.id,
        gameName: E.messages.gameTitle
    }), [t, f, E]);
    (0, l.P8)({
        videoRef: n,
        hlsRef: c,
        enabled: m,
        contentMetadata: _,
        isHls: f
    })
}