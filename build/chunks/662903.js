/** chunk id: 662903 params = (module,exports,require) **/
n.d(t, {
    Ay: () => u,
    Bu: () => o,
    OJ: () => s,
    XY: () => i
});
var r = n(64700),
    l = n(771253),
    a = n(876230);
let i = 8e5,
    s = 20,
    o = 30;

function u(e, t) {
    let {
        src: n,
        initialTimeSec: u = 0,
        onError: d,
        onHlsInstance: c
    } = t, m = r.useRef(null), h = r.useRef(u);
    h.current = u;
    let p = r.useRef(d),
        f = r.useRef(c);
    r.useEffect(() => {
        p.current = d
    }, [d]), r.useEffect(() => {
        f.current = c
    }, [c]);
    let x = null != n && n.split("?")[0].endsWith(".m3u8") && l.Ay.isSupported();
    return r.useEffect(() => {
        if (!x || null == n || null == e.current) return;
        let t = e.current,
            r = new l.Ay({
                backBufferLength: s,
                maxBufferLength: o,
                startPosition: h.current,
                startFragPrefetch: !0,
                startLevel: -1
            });
        m.current = r, f.current?.(r);
        let u = 0,
            d = () => {
                r.mainForwardBufferInfo?.len === 0 && r.trigger(l.Ay.Events.BUFFER_FLUSHING, {
                    startOffset: t.currentTime,
                    endOffset: 1 / 0,
                    type: "video"
                })
            };
        return r.on(l.Ay.Events.FRAG_LOADING, () => {
            r.config.minAutoBitrate !== i && (r.config.minAutoBitrate = i)
        }), r.on(l.Ay.Events.ERROR, (e, t) => {
            if (p.current?.(function(e) {
                    switch (e) {
                        case l.Ay.ErrorTypes.NETWORK_ERROR:
                            return a.SB.HLS_NETWORK_ERROR;
                        case l.Ay.ErrorTypes.MEDIA_ERROR:
                            return a.SB.HLS_MEDIA_ERROR;
                        case l.Ay.ErrorTypes.MUX_ERROR:
                            return a.SB.HLS_MUX_ERROR;
                        case l.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
                            return a.SB.HLS_KEY_SYSTEM_ERROR;
                        default:
                            return a.SB.HLS_OTHER_ERROR
                    }
                }(t.type), {
                    errorDetails: t.details,
                    fatal: t.fatal
                }), t.fatal) {
                if (u >= 3) {
                    r.destroy(), m.current = null, f.current?.(null);
                    return
                }
                switch (u++, t.type) {
                    case l.Ay.ErrorTypes.NETWORK_ERROR:
                        r.startLoad();
                        break;
                    case l.Ay.ErrorTypes.MEDIA_ERROR:
                        r.recoverMediaError();
                        break;
                    default:
                        r.destroy(), m.current = null, f.current?.(null)
                }
            }
        }), t.addEventListener("seeking", d), r.loadSource(n), r.attachMedia(t), () => {
            t.removeEventListener("seeking", d), m.current === r && (r.destroy(), m.current = null, f.current?.(null)), t.removeAttribute("src"), t.load()
        }
    }, [x, n, e]), {
        isHlsActive: x,
        hlsRef: m
    }
}