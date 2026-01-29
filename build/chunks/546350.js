/** Chunk was on 87557 **/
/** chunk id: 546350, original params: e,t,n (module,exports,require) **/
n.d(t, {
    w: () => o
}), n(896048);
var a = n(64700),
    l = n(311907),
    r = n(397927),
    i = n(775602),
    s = n(654487);

function o(e) {
    let {
        isQuestAccepted: t,
        isQuestCompleted: n,
        isQuestBarVisible: o
    } = e, c = (0, l.bG)([i.A], () => i.A.useReducedMotion), [d, u] = a.useState(!1), [m, p] = a.useState(!0), [h, x] = a.useState(!0), g = a.useRef(o), f = a.useCallback(e => {
        n || (p(!1), u(e))
    }, [n]), b = a.useCallback(() => {
        f(!0)
    }, [f]), v = a.useCallback(() => {
        f(!1)
    }, [f]), j = t ? s.ZV : s.Ko, [{
        expansionSpring: _
    }, y] = (0, r.zhh)(() => ({
        from: {
            expansionSpring: 0
        },
        config: j,
        onRest: () => {
            p(!0)
        },
        onStart: () => {
            p(!1)
        }
    }));
    a.useEffect(() => {
        y({
            expansionSpring: +!!d,
            immediate: c
        })
    }, [d, y, c]);
    let {
        visibilitySpring: A
    } = (0, r.zhh)({
        from: {
            visibilitySpring: 0
        },
        to: {
            visibilitySpring: +!!o
        },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            x(!0)
        },
        onStart: () => {
            x(!1)
        }
    });
    return a.useLayoutEffect(() => {
        o !== g.current && x(!1), g.current = o
    }, [o]), {
        isExpanded: d,
        setIsExpanded: f,
        expandQuestBar: b,
        collapseQuestBar: v,
        isExpansionAnimationComplete: m,
        isVisibilityAnimationAtRest: h,
        expansionSpring: _,
        visibilitySpring: A,
        springConfig: j
    }
}