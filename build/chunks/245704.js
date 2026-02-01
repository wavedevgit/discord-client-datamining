/** chunk id: 245704, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(64700),
    r = n(311907),
    i = n(652896),
    a = n(162605),
    s = n(954571),
    o = n(652215),
    c = n(788868);

function u(e, t) {
    let {
        handleMouseDown: n,
        handleMouseMove: u,
        handleMouseUp: d,
        handleMouseEnter: h
    } = e, p = l.useRef(null), f = (0, r.bG)([a.A], () => a.A.getRTCConnection((0, i._z)(t))), m = l.useCallback((e, t, l) => {
        p.current = Date.now(), n(e, t, l)
    }, [n]);
    return {
        handleMouseUp: l.useCallback((e, t, n) => {
            if (d(e, t, n), null != p.current) {
                var l;
                null != f && (l = Date.now() - p.current, s.default.track(o.HAw.PREMIUM_FEATURE_USAGE, {
                    feature_name: "".concat(c.Ae.SHARED_CANVAS, "_").concat(e.type),
                    feature_tier: c.tz.FREE,
                    media_session_id: f.getMediaSessionId(),
                    parent_media_session_id: f.parentMediaSessionId,
                    guild_id: f.guildId,
                    duration: l
                })), p.current = null
            }
        }, [d, f]),
        handleMouseDown: m,
        handleMouseMove: u,
        handleMouseEnter: h
    }
}