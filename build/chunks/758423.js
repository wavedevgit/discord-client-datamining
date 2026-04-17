/** chunk id: 758423 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(64700),
    s = n(771253),
    a = n(412703),
    l = n(902173),
    i = n(662903),
    u = n(579473),
    o = n(795068),
    c = n(652215);
let d = () => {},
    E = new Set([c.NKC.FIVE_G, c.NKC.FOUR_G, c.NKC.UNKNOWN]);

function m(e, t, n, c) {
    let m = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        {
            quest: f
        } = r.useContext(o.a),
        {
            questConfig: _
        } = r.useContext(o.l),
        S = r.useRef(!1),
        p = r.useRef(null),
        v = _.taskConfigV2.tasks[a.n.WATCH_VIDEO]?.assets,
        h = r.useMemo(() => _.features.includes(l.L.FULL_EPISODE_VIDEO_QUEST), [_.features]),
        g = r.useMemo(() => null != v ? s.Ay.isSupported() && null != v.videoHls ? u.fY.VIDEO_PLAYER_VIDEO_HLS : h ? null : E.has(t) || null == v.videoLowRes ? u.fY.VIDEO_PLAYER_VIDEO : u.fY.VIDEO_PLAYER_VIDEO_LOW_RES : null, [v, t, h]),
        A = r.useMemo(() => null != c ? {
            url: c,
            mimetype: "video/mp4",
            isAnimated: !0
        } : null != g ? (0, u.tW)(f, g, void 0, !1) : null, [f, g, c]),
        C = () => {
            null != p.current && p.current.config.minAutoBitrate !== i.XY && (p.current.config.minAutoBitrate = i.XY)
        },
        x = r.useCallback(() => {
            null != p.current && (p.current.config.minAutoBitrate = i.XY)
        }, []);
    return r.useEffect(() => {
        if (!m || g !== u.fY.VIDEO_PLAYER_VIDEO_HLS || null == A || null == e.current || S.current) return;
        p.current = new s.Ay({
            backBufferLength: i.OJ,
            maxBufferLength: i.Bu,
            startPosition: n,
            startFragPrefetch: !0,
            startLevel: -1
        }), p.current.on(s.Ay.Events.FRAG_LOADING, C), p.current.loadSource(A.url), p.current.attachMedia(e.current), S.current = !0;
        let t = p.current;
        return () => {
            null != t && t.off(s.Ay.Events.FRAG_LOADING, C)
        }
    }, [m, A, g, e, n]), {
        videoAssetType: g,
        videoAsset: A,
        hlsRef: p,
        onFirstChunkLoaded: m ? x : d
    }
}