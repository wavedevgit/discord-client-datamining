/** chunk id: 758468 params = (module,exports,require) **/
n.d(t, {
    Ay: () => E,
    Ue: () => d,
    lS: () => c
});
var r = n(64700),
    i = n(158954),
    s = n(892358),
    a = n(92246),
    l = n(795068),
    o = n(654487);
let u = {
        tension: 500,
        friction: 30,
        clamp: !0
    },
    c = 26,
    d = 4,
    m = 32;

function E(e) {
    let {
        timelineRect: t,
        videoDuration: n,
        targetSec: c
    } = e, {
        questConfig: E
    } = r.useContext(l.l), p = r.useMemo(() => E.features.includes(o.Li.FULL_EPISODE_VIDEO_QUEST), [E.features]), [_, f] = r.useState(null), [v, S] = r.useState(null), h = r.useRef(null), [{
        expansion: g
    }, A] = (0, i.zhh)(() => ({
        expansion: 0,
        config: u,
        onRest: () => {
            null == h.current && S(null)
        }
    })), x = r.useCallback(e => {
        h.current = e, null != e ? (S(e), A({
            expansion: 4
        })) : A({
            expansion: 0
        }), f(e)
    }, [A]), C = r.useMemo(() => !p || null == n || null == t || isNaN(n) ? [] : [(e => {
        let {
            index: t,
            targetSec: n,
            videoDuration: r,
            questConfig: i,
            timelineRect: l
        } = e, o = Math.max(0, (0, s.DX)(n, r, l) - m);
        return {
            leftPx: o,
            rightPx: o + m,
            targetSec: n,
            label: (0, a.mq)(i),
            index: t
        }
    })({
        index: 0,
        targetSec: c,
        videoDuration: n,
        questConfig: E,
        timelineRect: t
    })], [c, n, E, t, p]), T = r.useCallback(e => null != n && null != t && null != e && C.some(t => e >= t.leftPx - d - 4 * (_ === t.index) && e <= t.rightPx + d + 4 * (_ === t.index)), [C, n, t, _]);
    return {
        indicators: C,
        isInExclusionZone: T,
        setHoveredIndicatorIndex: x,
        expansionSpring: g,
        animatingIndicatorIndex: v
    }
}