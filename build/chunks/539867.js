/** chunk id: 539867 params = (module,exports,require) **/
n.d(t, {
    Ay: () => a,
    KI: () => i,
    _4: () => s
});
var r = n(64700);
let i = 4e3,
    s = 2e3;

function a(e) {
    let {
        isPlaying: t,
        isMetadataLoaded: n,
        isInitialSeekComplete: i,
        getCurrentVideoTime: s,
        onAnalytics: a,
        emitIntervalMs: l,
        minSegmentDurationMs: o
    } = e, [u, c] = r.useState(null), d = (0, r.useRef)(null), m = (0, r.useRef)(Date.now()), E = (0, r.useRef)(!1), p = (0, r.useCallback)(e => {
        e.segmentEndSec < e.segmentStartSec || a({
            start_time: e.startTimeMs,
            end_time: e.endTimeMs,
            duration: e.endTimeMs - e.startTimeMs,
            segment_start_sec: e.segmentStartSec,
            segment_end_sec: e.segmentEndSec,
            segment_duration_sec: e.segmentEndSec - e.segmentStartSec
        })
    }, [a]), _ = (0, r.useCallback)(() => {
        let e = s();
        if (null != e && n && i) {
            let t = Date.now();
            c({
                startTimeMs: t,
                endTimeMs: t,
                segmentStartSec: e,
                segmentEndSec: e
            }), E.current = !0
        }
    }, [s, n, i]), f = (0, r.useCallback)(() => {
        let e = s();
        if (null == e || null == u) return;
        let t = Date.now();
        t - m.current < l || e - u.segmentStartSec < o / 1e3 || (p({
            ...u,
            endTimeMs: t,
            segmentEndSec: e
        }), c({
            startTimeMs: t,
            endTimeMs: t,
            segmentStartSec: e,
            segmentEndSec: e
        }), m.current = t)
    }, [u, p, l, o, s]);
    return (0, r.useEffect)(() => {
        n && i || (c(null), E.current = !1)
    }, [n, i]), (0, r.useEffect)(() => {
        if (t && n && i) E.current || _(), d.current = window.setInterval(() => {
            f()
        }, 200);
        else {
            let e = s();
            if (null != u && null != e) {
                let t = Date.now();
                e - u.segmentStartSec > .2 && p({
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
    }, [t, n, i, u, f, p, _, s]), {
        forceSendCurrentSegment: (0, r.useCallback)(() => {
            let e = s();
            if (null != u && null != e) {
                let t = Date.now();
                e - u.segmentStartSec > .2 && p({
                    ...u,
                    endTimeMs: t,
                    segmentEndSec: e
                }), c(null), E.current = !1
            }
        }, [u, p, s]),
        isInitialized: E.current
    }
}