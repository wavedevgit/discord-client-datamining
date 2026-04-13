/** chunk id: 873856 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(64700),
    s = n(412703),
    i = n(536968),
    a = n(697397),
    l = n(579473),
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
    } = r.useContext(u.l), m = (0, i._o)({
        location: o.rE.VIDEO_MODAL
    }).externalAnalyticsEnabled && null != t, _ = d === l.fY.VIDEO_PLAYER_VIDEO_HLS, f = r.useMemo(() => ({
        contentId: t ?? "",
        videoStreamType: _ ? "hls" : "mp4",
        contentType: "quests",
        title: E.taskConfigV2.tasks[s.n.WATCH_VIDEO]?.messages.videoTitle,
        questId: E.id,
        gameName: E.messages.gameTitle
    }), [t, _, E]);
    (0, a.P8)({
        videoRef: n,
        hlsRef: c,
        enabled: m,
        contentMetadata: f,
        isHls: _
    })
}