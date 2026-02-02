/** chunk id: 246465, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var r = n(64700),
    l = n(771253),
    o = n(412703),
    i = n(902173),
    s = n(579473),
    a = n(717415),
    c = n(652215);
let u = new Set([c.NKC.FIVE_G, c.NKC.FOUR_G, c.NKC.UNKNOWN]);

function d(e, t, n) {
    var c;
    let {
        quest: d
    } = r.useContext(a.VideoQuestModalContext), {
        questConfig: p
    } = r.useContext(a.VideoQuestConfigContext), f = r.useRef(!1), m = r.useRef(null), v = null == (c = p.taskConfigV2.tasks[o.n.WATCH_VIDEO]) ? void 0 : c.assets, b = r.useMemo(() => p.features.includes(i.L.FULL_EPISODE_VIDEO_QUEST), [p.features]), E = r.useMemo(() => null != v ? l.Ay.isSupported() && null != v.videoHls ? s.fY.VIDEO_PLAYER_VIDEO_HLS : b ? null : u.has(t) || null == v.videoLowRes ? s.fY.VIDEO_PLAYER_VIDEO : s.fY.VIDEO_PLAYER_VIDEO_LOW_RES : null, [v, t, b]), g = r.useMemo(() => null != E ? (0, s.tW)(d, E, void 0, !1) : null, [d, E]), h = () => {
        null != m.current && 8e5 !== m.current.config.minAutoBitrate && (m.current.config.minAutoBitrate = 8e5)
    }, y = r.useCallback(() => {
        null != m.current && (m.current.config.minAutoBitrate = 8e5)
    }, []);
    return r.useEffect(() => {
        if (E !== s.fY.VIDEO_PLAYER_VIDEO_HLS || null == g || null == e.current || f.current) return;
        m.current = new l.Ay({
            backBufferLength: 20,
            maxBufferLength: 30,
            startPosition: n,
            startFragPrefetch: !0,
            startLevel: -1
        }), m.current.on(l.Ay.Events.FRAG_LOADING, h), m.current.loadSource(g.url), m.current.attachMedia(e.current), f.current = !0;
        let t = m.current;
        return () => {
            null != t && t.off(l.Ay.Events.FRAG_LOADING, h)
        }
    }, [g, E, e, n]), {
        videoAssetType: E,
        videoAsset: g,
        hlsRef: m,
        onFirstChunkLoaded: y
    }
}