/** chunk id: 246465, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(64700),
    i = n(771253),
    s = n(412703),
    l = n(902173),
    a = n(579473),
    o = n(717415),
    u = n(652215);
let c = new Set([u.NKC.FIVE_G, u.NKC.FOUR_G, u.NKC.UNKNOWN]);

function d(e, t, n, u) {
    let {
        quest: d
    } = r.useContext(o.VideoQuestModalContext), {
        questConfig: m
    } = r.useContext(o.VideoQuestConfigContext), p = r.useRef(!1), E = r.useRef(null), f = m.taskConfigV2.tasks[s.n.WATCH_VIDEO]?.assets, v = r.useMemo(() => m.features.includes(l.L.FULL_EPISODE_VIDEO_QUEST), [m.features]), h = r.useMemo(() => null != f ? i.Ay.isSupported() && null != f.videoHls ? a.fY.VIDEO_PLAYER_VIDEO_HLS : v ? null : c.has(t) || null == f.videoLowRes ? a.fY.VIDEO_PLAYER_VIDEO : a.fY.VIDEO_PLAYER_VIDEO_LOW_RES : null, [f, t, v]), x = r.useMemo(() => null != u ? {
        url: u,
        mimetype: "video/mp4",
        isAnimated: !0
    } : null != h ? (0, a.tW)(d, h, void 0, !1) : null, [d, h, u]), g = () => {
        null != E.current && 8e5 !== E.current.config.minAutoBitrate && (E.current.config.minAutoBitrate = 8e5)
    }, S = r.useCallback(() => {
        null != E.current && (E.current.config.minAutoBitrate = 8e5)
    }, []);
    return r.useEffect(() => {
        if (h !== a.fY.VIDEO_PLAYER_VIDEO_HLS || null == x || null == e.current || p.current) return;
        E.current = new i.Ay({
            backBufferLength: 20,
            maxBufferLength: 30,
            startPosition: n,
            startFragPrefetch: !0,
            startLevel: -1
        }), E.current.on(i.Ay.Events.FRAG_LOADING, g), E.current.loadSource(x.url), E.current.attachMedia(e.current), p.current = !0;
        let t = E.current;
        return () => {
            null != t && t.off(i.Ay.Events.FRAG_LOADING, g)
        }
    }, [x, h, e, n]), {
        videoAssetType: h,
        videoAsset: x,
        hlsRef: E,
        onFirstChunkLoaded: S
    }
}