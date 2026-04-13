/** chunk id: 721092 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    s = n(64700),
    i = n(158954),
    a = n(92246),
    l = n(856658),
    u = n(80026),
    o = n(654487);
let c = {
    tension: 500,
    friction: 30,
    clamp: !0
};

function d(e) {
    let {
        targetSec: t,
        quest: n,
        sourceQuestContent: d,
        questConfig: E,
        onIndicatorClick: m
    } = e, _ = s.useMemo(() => E?.features.includes(o.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [E?.features]), [f, p] = s.useState(null), S = s.useRef(null), [{
        expansion: v
    }, h] = (0, i.zhh)(() => ({
        expansion: 0,
        config: c,
        onRest: () => {
            null == S.current && p(null)
        }
    })), g = s.useCallback(e => {
        S.current = e, null != e ? (p(e), h({
            expansion: u.KY
        })) : h({
            expansion: 0
        })
    }, [h]), A = s.useMemo(() => [{
        index: 0,
        timeSec: t,
        widthPx: u.ws,
        gapPx: u.Ue
    }], [t]), C = s.useMemo(() => _ ? (0, a.mq)(E) : void 0, [E, _]), x = s.useCallback((e, s) => {
        let i = {
            leftPx: e.leftPx,
            rightPx: e.rightPx,
            targetSec: t,
            index: e.index,
            label: C
        };
        return (0, r.jsx)(l.A, {
            currentPx: s,
            indicator: i,
            isAnimated: f === e.index,
            expansionSpring: v,
            quest: n,
            sourceQuestContent: d,
            onMouseEnter: () => g(e.index),
            onMouseLeave: () => g(null),
            onClick: null != m ? () => m(i.targetSec) : void 0
        }, `indicator-${e.index}`)
    }, [t, C, f, v, n, d, g, m]);
    if (_) return {
        indicators: A,
        animatingIndex: f,
        expansionSpring: v,
        hoverExpansionPx: u.KY,
        renderIndicator: x
    }
}