/** chunk id: 546350 params = (module,exports,require) **/
n.d(t, {
    w: () => o
});
var a = n(64700),
    i = n(311907),
    s = n(397927),
    l = n(775602),
    r = n(654487);

function o(e) {
    let {
        isQuestAccepted: t,
        isQuestCompleted: n,
        isQuestBarVisible: o
    } = e, d = (0, i.bG)([l.A], () => l.A.useReducedMotion), [c, u] = a.useState(!1), [m, h] = a.useState(!0), [x, p] = a.useState(!0), g = a.useRef(o), f = a.useCallback(e => {
        n || (h(!1), u(e))
    }, [n]), v = a.useCallback(() => {
        f(!0)
    }, [f]), _ = a.useCallback(() => {
        f(!1)
    }, [f]), b = t ? r.ZV : r.Ko, [{
        expansionSpring: j
    }, A] = (0, s.zhh)(() => ({
        from: {
            expansionSpring: 0
        },
        config: b,
        onRest: () => {
            h(!0)
        },
        onStart: () => {
            h(!1)
        }
    }));
    a.useEffect(() => {
        A({
            expansionSpring: +!!c,
            immediate: d
        })
    }, [c, A, d]);
    let {
        visibilitySpring: C
    } = (0, s.zhh)({
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
            p(!0)
        },
        onStart: () => {
            p(!1)
        }
    });
    return a.useLayoutEffect(() => {
        o !== g.current && p(!1), g.current = o
    }, [o]), {
        isExpanded: c,
        setIsExpanded: f,
        expandQuestBar: v,
        collapseQuestBar: _,
        isExpansionAnimationComplete: m,
        isVisibilityAnimationAtRest: x,
        expansionSpring: j,
        visibilitySpring: C,
        springConfig: b
    }
}
n(272111)