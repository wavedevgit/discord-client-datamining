/** chunk id: 758423 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(64700),
    i = n(771253),
    s = n(412703),
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
            quest: p
        } = r.useContext(u.a),
        {
            questConfig: _
        } = r.useContext(u.l),
        f = r.useRef(!1),
        v = r.useRef(null),
        S = _.taskConfigV2.tasks[s.n.WATCH_VIDEO]?.assets,
        h = r.useMemo(() => _.features.includes(a.L.FULL_EPISODE_VIDEO_QUEST), [_.features]),
        g = r.useMemo(() => null != S ? i.Ay.isSupported() && null != S.videoHls ? o.fY.VIDEO_PLAYER_VIDEO_HLS : h ? null : m.has(t) || null == S.videoLowRes ? o.fY.VIDEO_PLAYER_VIDEO : o.fY.VIDEO_PLAYER_VIDEO_LOW_RES : null, [S, t, h]),
        A = r.useMemo(() => null != c ? {
            url: c,
            mimetype: "video/mp4",
            isAnimated: !0
        } : null != g ? (0, o.tW)(p, g, void 0, !1) : null, [p, g, c]),
        x = () => {
            null != v.current && v.current.config.minAutoBitrate !== l.XY && (v.current.config.minAutoBitrate = l.XY)
        },
        C = r.useCallback(() => {
            null != v.current && (v.current.config.minAutoBitrate = l.XY)
        }, []);
    return r.useEffect(() => {
        if (!E || g !== o.fY.VIDEO_PLAYER_VIDEO_HLS || null == A || null == e.current || f.current) return;
        v.current = new i.Ay({
            backBufferLength: l.OJ,
            maxBufferLength: l.Bu,
            startPosition: n,
            startFragPrefetch: !0,
            startLevel: -1
        }), v.current.on(i.Ay.Events.FRAG_LOADING, x), v.current.loadSource(A.url), v.current.attachMedia(e.current), f.current = !0;
        let t = v.current;
        return () => {
            null != t && t.off(i.Ay.Events.FRAG_LOADING, x)
        }
    }, [E, A, g, e, n]), {
        videoAssetType: g,
        videoAsset: A,
        hlsRef: v,
        onFirstChunkLoaded: E ? C : d
    }
}