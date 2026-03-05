/** chunk id: 246465 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(64700),
    l = n(771253),
    i = n(412703),
    a = n(902173),
    s = n(579473),
    o = n(717415),
    u = n(652215);
let c = new Set([u.NKC.FIVE_G, u.NKC.FOUR_G, u.NKC.UNKNOWN]);

function d(e, t, n, u) {
    let {
        quest: d
    } = r.useContext(o.VideoQuestModalContext), {
        questConfig: m
    } = r.useContext(o.VideoQuestConfigContext), p = r.useRef(!1), f = r.useRef(null), E = m.taskConfigV2.tasks[i.n.WATCH_VIDEO]?.assets, h = r.useMemo(() => m.features.includes(a.L.FULL_EPISODE_VIDEO_QUEST), [m.features]), v = r.useMemo(() => null != E ? l.Ay.isSupported() && null != E.videoHls ? s.fY.VIDEO_PLAYER_VIDEO_HLS : h ? null : c.has(t) || null == E.videoLowRes ? s.fY.VIDEO_PLAYER_VIDEO : s.fY.VIDEO_PLAYER_VIDEO_LOW_RES : null, [E, t, h]), x = r.useMemo(() => null != u ? {
        url: u,
        mimetype: "video/mp4",
        isAnimated: !0
    } : null != v ? (0, s.tW)(d, v, void 0, !1) : null, [d, v, u]), g = () => {
        null != f.current && 8e5 !== f.current.config.minAutoBitrate && (f.current.config.minAutoBitrate = 8e5)
    }, S = r.useCallback(() => {
        null != f.current && (f.current.config.minAutoBitrate = 8e5)
    }, []);
    return r.useEffect(() => {
        if (v !== s.fY.VIDEO_PLAYER_VIDEO_HLS || null == x || null == e.current || p.current) return;
        f.current = new l.Ay({
            backBufferLength: 20,
            maxBufferLength: 30,
            startPosition: n,
            startFragPrefetch: !0,
            startLevel: -1
        }), f.current.on(l.Ay.Events.FRAG_LOADING, g), f.current.loadSource(x.url), f.current.attachMedia(e.current), p.current = !0;
        let t = f.current;
        return () => {
            null != t && t.off(l.Ay.Events.FRAG_LOADING, g)
        }
    }, [x, v, e, n]), {
        videoAssetType: v,
        videoAsset: x,
        hlsRef: f,
        onFirstChunkLoaded: S
    }
}