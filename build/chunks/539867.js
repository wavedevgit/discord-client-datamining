/** chunk id: 539867 params = (module,exports,require) **/
n.d(t, {
    Ay: () => i,
    KI: () => l,
    _4: () => s
});
var r = n(64700);
let l = 4e3,
    s = 2e3;

function i(e) {
    let {
        isPlaying: t,
        isMetadataLoaded: n,
        isInitialSeekComplete: l,
        getCurrentVideoTime: s,
        onAnalytics: i,
        emitIntervalMs: a,
        minSegmentDurationMs: o
    } = e, [u, c] = r.useState(null), d = (0, r.useRef)(null), m = (0, r.useRef)(Date.now()), p = (0, r.useRef)(!1), f = (0, r.useCallback)(e => {
        e.segmentEndSec < e.segmentStartSec || i({
            start_time: e.startTimeMs,
            end_time: e.endTimeMs,
            duration: e.endTimeMs - e.startTimeMs,
            segment_start_sec: e.segmentStartSec,
            segment_end_sec: e.segmentEndSec,
            segment_duration_sec: e.segmentEndSec - e.segmentStartSec
        })
    }, [i]), E = (0, r.useCallback)(() => {
        let e = s();
        if (null != e && n && l) {
            let t = Date.now();
            c({
                startTimeMs: t,
                endTimeMs: t,
                segmentStartSec: e,
                segmentEndSec: e
            }), p.current = !0
        }
    }, [s, n, l]), h = (0, r.useCallback)(() => {
        let e = s();
        if (null == e || null == u) return;
        let t = Date.now();
        t - m.current < a || e - u.segmentStartSec < o / 1e3 || (f({
            ...u,
            endTimeMs: t,
            segmentEndSec: e
        }), c({
            startTimeMs: t,
            endTimeMs: t,
            segmentStartSec: e,
            segmentEndSec: e
        }), m.current = t)
    }, [u, f, a, o, s]);
    return (0, r.useEffect)(() => {
        n && l || (c(null), p.current = !1)
    }, [n, l]), (0, r.useEffect)(() => {
        if (t && n && l) p.current || E(), d.current = window.setInterval(() => {
            h()
        }, 200);
        else {
            let e = s();
            if (null != u && null != e) {
                let t = Date.now();
                e - u.segmentStartSec > .2 && f({
                    ...u,
                    endTimeMs: t,
                    segmentEndSec: e
                })
            }
            c(null), p.current = !1, null != d.current && (clearInterval(d.current), d.current = null)
        }
        return () => {
            null != d.current && (clearInterval(d.current), d.current = null)
        }
    }, [t, n, l, u, h, f, E, s]), {
        forceSendCurrentSegment: (0, r.useCallback)(() => {
            let e = s();
            if (null != u && null != e) {
                let t = Date.now();
                e - u.segmentStartSec > .2 && f({
                    ...u,
                    endTimeMs: t,
                    segmentEndSec: e
                }), c(null), p.current = !1
            }
        }, [u, f, s]),
        isInitialized: p.current
    }
}