/** chunk id: 991484, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(64700);

function i(e) {
    let {
        getCurrentVideoTime: t,
        isPlaying: n,
        isMetadataLoaded: i,
        isInitialSeekComplete: s,
        onAnalytics: l,
        emitIntervalMs: a,
        minSegmentDurationMs: o
    } = e, [u, c] = r.useState(null), d = (0, r.useRef)(null), m = (0, r.useRef)(Date.now()), p = (0, r.useRef)(!1), E = (0, r.useCallback)(e => {
        e.segmentEndSec < e.segmentStartSec || l({
            start_time: e.startTime,
            end_time: e.endTime,
            duration: e.endTime - e.startTime,
            segment_start_sec: e.segmentStartSec,
            segment_end_sec: e.segmentEndSec,
            segment_duration_sec: e.segmentEndSec - e.segmentStartSec
        })
    }, [l]), f = (0, r.useCallback)(() => {
        let e = t();
        if (null != e && i && s) {
            let t = Date.now();
            c({
                startTime: t,
                endTime: t,
                segmentStartSec: e,
                segmentEndSec: e
            }), p.current = !0
        }
    }, [t, i, s]), v = (0, r.useCallback)(() => {
        let e = t();
        if (null == e || null == u) return;
        let n = Date.now();
        n - m.current < a || e - u.segmentStartSec < o / 1e3 || (E({
            ...u,
            endTime: n,
            segmentEndSec: e
        }), c({
            startTime: n,
            endTime: n,
            segmentStartSec: e,
            segmentEndSec: e
        }), m.current = n)
    }, [u, E, a, o, t]);
    return (0, r.useEffect)(() => {
        i && s || (c(null), p.current = !1)
    }, [i, s]), (0, r.useEffect)(() => {
        if (n && i && s) p.current || f(), d.current = window.setInterval(() => {
            v()
        }, 200);
        else {
            let e = t();
            if (null != u && null != e) {
                let t = Date.now();
                e - u.segmentStartSec > .2 && E({
                    ...u,
                    endTime: t,
                    segmentEndSec: e
                })
            }
            c(null), p.current = !1, null != d.current && (clearInterval(d.current), d.current = null)
        }
        return () => {
            null != d.current && (clearInterval(d.current), d.current = null)
        }
    }, [n, i, s, u, v, E, f, t]), {
        forceSendCurrentSegment: (0, r.useCallback)(() => {
            let e = t();
            if (null != u && null != e) {
                let t = Date.now();
                e - u.segmentStartSec > .2 && E({
                    ...u,
                    endTime: t,
                    segmentEndSec: e
                }), c(null), p.current = !1
            }
        }, [u, E, t]),
        isInitialized: p.current
    }
}