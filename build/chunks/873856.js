/** chunk id: 873856 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(64700),
    s = n(412703),
    i = n(536968),
    a = n(697397),
    l = n(579473),
    o = n(795068),
    u = n(654487);

function c(e) {
    let {
        videoAssetUrl: t,
        videoRef: n,
        hlsRef: c,
        videoAssetType: d
    } = e, {
        questConfig: m
    } = r.useContext(o.l), E = (0, i._o)({
        location: u.rE.VIDEO_MODAL
    }).externalAnalyticsEnabled && null != t, _ = d === l.fY.VIDEO_PLAYER_VIDEO_HLS, f = r.useMemo(() => ({
        contentId: t ?? "",
        videoStreamType: _ ? "hls" : "mp4",
        contentType: "quests",
        title: m.taskConfigV2.tasks[s.n.WATCH_VIDEO]?.messages.videoTitle,
        questId: m.id,
        gameName: m.messages.gameTitle
    }), [t, _, m]);
    (0, a.P8)({
        videoRef: n,
        hlsRef: c,
        enabled: E,
        contentMetadata: f,
        isHls: _
    })
}