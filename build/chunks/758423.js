/** chunk id: 758423 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(64700),
    s = n(771253),
    i = n(412703),
    a = n(902173),
    l = n(662903),
    o = n(579473),
    u = n(795068),
    c = n(652215);
let d = () => {},
    m = new Set([c.NKC.FIVE_G, c.NKC.FOUR_G, c.NKC.UNKNOWN]);

function E(e, t, n, c) {
    let E = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        {
            quest: _
        } = r.useContext(u.a),
        {
            questConfig: f
        } = r.useContext(u.l),
        p = r.useRef(!1),
        S = r.useRef(null),
        v = f.taskConfigV2.tasks[i.n.WATCH_VIDEO]?.assets,
        h = r.useMemo(() => f.features.includes(a.L.FULL_EPISODE_VIDEO_QUEST), [f.features]),
        g = r.useMemo(() => null != v ? s.Ay.isSupported() && null != v.videoHls ? o.fY.VIDEO_PLAYER_VIDEO_HLS : h ? null : m.has(t) || null == v.videoLowRes ? o.fY.VIDEO_PLAYER_VIDEO : o.fY.VIDEO_PLAYER_VIDEO_LOW_RES : null, [v, t, h]),
        A = r.useMemo(() => null != c ? {
            url: c,
            mimetype: "video/mp4",
            isAnimated: !0
        } : null != g ? (0, o.tW)(_, g, void 0, !1) : null, [_, g, c]),
        C = () => {
            null != S.current && S.current.config.minAutoBitrate !== l.XY && (S.current.config.minAutoBitrate = l.XY)
        },
        x = r.useCallback(() => {
            null != S.current && (S.current.config.minAutoBitrate = l.XY)
        }, []);
    return r.useEffect(() => {
        if (!E || g !== o.fY.VIDEO_PLAYER_VIDEO_HLS || null == A || null == e.current || p.current) return;
        S.current = new s.Ay({
            backBufferLength: l.OJ,
            maxBufferLength: l.Bu,
            startPosition: n,
            startFragPrefetch: !0,
            startLevel: -1
        }), S.current.on(s.Ay.Events.FRAG_LOADING, C), S.current.loadSource(A.url), S.current.attachMedia(e.current), p.current = !0;
        let t = S.current;
        return () => {
            null != t && t.off(s.Ay.Events.FRAG_LOADING, C)
        }
    }, [E, A, g, e, n]), {
        videoAssetType: g,
        videoAsset: A,
        hlsRef: S,
        onFirstChunkLoaded: E ? x : d
    }
}