/** chunk id: 873856 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(64700),
    i = n(412703),
    s = n(536968),
    a = n(892358),
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
    } = r.useContext(o.l), E = (0, s._o)({
        location: u.rE.VIDEO_MODAL
    }).externalAnalyticsEnabled && null != t, p = d === l.fY.VIDEO_PLAYER_VIDEO_HLS, _ = r.useMemo(() => ({
        contentId: t ?? "",
        videoStreamType: p ? "hls" : "mp4",
        contentType: "quests",
        title: m.taskConfigV2.tasks[i.n.WATCH_VIDEO]?.messages.videoTitle,
        questId: m.id,
        gameName: m.messages.gameTitle
    }), [t, p, m]);
    (0, a.P8)({
        videoRef: n,
        hlsRef: c,
        enabled: E,
        contentMetadata: _,
        isHls: p
    })
}