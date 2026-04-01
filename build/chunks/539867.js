/** chunk id: 539867 params = (module,exports,require) **/
n.d(t, {
    Ay: () => a,
    KI: () => s,
    _4: () => i
});
var r = n(64700);
let s = 4e3,
    i = 2e3;

function a(e) {
    let {
        isPlaying: t,
        isMetadataLoaded: n,
        isInitialSeekComplete: s,
        getCurrentVideoTime: i,
        onAnalytics: a,
        emitIntervalMs: l,
        minSegmentDurationMs: o
    } = e, [u, c] = r.useState(null), d = (0, r.useRef)(null), m = (0, r.useRef)(Date.now()), E = (0, r.useRef)(!1), _ = (0, r.useCallback)(e => {
        e.segmentEndSec < e.segmentStartSec || a({
            start_time: e.startTimeMs,
            end_time: e.endTimeMs,
            duration: e.endTimeMs - e.startTimeMs,
            segment_start_sec: e.segmentStartSec,
            segment_end_sec: e.segmentEndSec,
            segment_duration_sec: e.segmentEndSec - e.segmentStartSec
        })
    }, [a]), f = (0, r.useCallback)(() => {
        let e = i();
        if (null != e && n && s) {
            let t = Date.now();
            c({
                startTimeMs: t,
                endTimeMs: t,
                segmentStartSec: e,
                segmentEndSec: e
            }), E.current = !0
        }
    }, [i, n, s]), p = (0, r.useCallback)(() => {
        let e = i();
        if (null == e || null == u) return;
        let t = Date.now();
        t - m.current < l || e - u.segmentStartSec < o / 1e3 || (_({
            ...u,
            endTimeMs: t,
            segmentEndSec: e
        }), c({
            startTimeMs: t,
            endTimeMs: t,
            segmentStartSec: e,
            segmentEndSec: e
        }), m.current = t)
    }, [u, _, l, o, i]);
    return (0, r.useEffect)(() => {
        n && s || (c(null), E.current = !1)
    }, [n, s]), (0, r.useEffect)(() => {
        if (t && n && s) E.current || f(), d.current = window.setInterval(() => {
            p()
        }, 200);
        else {
            let e = i();
            if (null != u && null != e) {
                let t = Date.now();
                e - u.segmentStartSec > .2 && _({
                    ...u,
                    endTimeMs: t,
                    segmentEndSec: e
                })
            }
            c(null), E.current = !1, null != d.current && (clearInterval(d.current), d.current = null)
        }
        return () => {
            null != d.current && (clearInterval(d.current), d.current = null)
        }
    }, [t, n, s, u, p, _, f, i]), {
        forceSendCurrentSegment: (0, r.useCallback)(() => {
            let e = i();
            if (null != u && null != e) {
                let t = Date.now();
                e - u.segmentStartSec > .2 && _({
                    ...u,
                    endTimeMs: t,
                    segmentEndSec: e
                }), c(null), E.current = !1
            }
        }, [u, _, i]),
        isInitialized: E.current
    }
}