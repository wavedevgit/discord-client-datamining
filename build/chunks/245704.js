/** Chunk was on 31748 **/
/** chunk id: 245704, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(64700),
    l = n(311907),
    i = n(652896),
    a = n(162605),
    o = n(954571),
    s = n(652215),
    c = n(788868);

function u(e, t) {
    let {
        handleMouseDown: n,
        handleMouseMove: u,
        handleMouseUp: d,
        handleMouseEnter: f
    } = e, p = r.useRef(null), g = (0, l.bG)([a.A], () => a.A.getRTCConnection((0, i._z)(t))), m = r.useCallback((e, t, r) => {
        p.current = Date.now(), n(e, t, r)
    }, [n]);
    return {
        handleMouseUp: r.useCallback((e, t, n) => {
            if (d(e, t, n), null != p.current) {
                var r;
                null != g && (r = Date.now() - p.current, o.default.track(s.HAw.PREMIUM_FEATURE_USAGE, {
                    feature_name: "".concat(c.Ae.SHARED_CANVAS, "_").concat(e.type),
                    feature_tier: c.tz.FREE,
                    media_session_id: g.getMediaSessionId(),
                    parent_media_session_id: g.parentMediaSessionId,
                    guild_id: g.guildId,
                    duration: r
                })), p.current = null
            }
        }, [d, g]),
        handleMouseDown: m,
        handleMouseMove: u,
        handleMouseEnter: f
    }
}