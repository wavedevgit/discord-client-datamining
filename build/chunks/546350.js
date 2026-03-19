/** chunk id: 546350 params = (module,exports,require) **/
n.d(t, {
    w: () => o
});
var a = n(64700),
    i = n(311907),
    l = n(397927),
    s = n(775602),
    r = n(654487);

function o(e) {
    let {
        isQuestAccepted: t,
        isQuestCompleted: n,
        isQuestBarVisible: o,
        unfurlEnabled: d,
        hasSeenUnfurl: c,
        onUnfurlDismissed: u
    } = e, m = d && !t && !c, [h, x] = a.useState(m ? "unfurledWithTimeout" : "none"), p = (0, i.bG)([s.A], () => s.A.useReducedMotion), [g, _] = a.useState(m), [f, v] = a.useState(!g), [b, j] = a.useState(!0), A = a.useRef(o), C = a.useCallback(e => {
        n || (v(!1), _(e))
    }, [n]), y = a.useCallback(() => {
        C(!0)
    }, [C]), T = a.useCallback(() => {
        C(!1)
    }, [C]), S = t ? r.ZV : r.Ko, [{
        expansionSpring: E
    }, N] = (0, l.zhh)(() => ({
        from: {
            expansionSpring: 0
        },
        config: S,
        onRest: e => {
            v(!0), 0 === e.value && x("none")
        },
        onStart: () => {
            v(!1)
        }
    }));
    a.useEffect(() => {
        N({
            expansionSpring: +!!g,
            immediate: p
        })
    }, [g, N, p]);
    let {
        visibilitySpring: I
    } = (0, l.zhh)({
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
            j(!0)
        },
        onStart: () => {
            j(!1)
        }
    });
    a.useLayoutEffect(() => {
        o !== A.current && j(!1), A.current = o
    }, [o]);
    let k = a.useCallback(() => {
            "unfurledWithTimeout" === h && (x("unfurledWithTimeoutCanceled"), u())
        }, [u, h]),
        R = a.useCallback(() => {
            C(!1), u()
        }, [C, u]);
    return {
        isExpanded: g,
        setIsExpanded: C,
        expandQuestBar: y,
        collapseQuestBar: T,
        isExpansionAnimationComplete: f,
        isVisibilityAnimationAtRest: b,
        expansionSpring: E,
        visibilitySpring: I,
        springConfig: S,
        onQuestBarFocus: k,
        onUnfurlTimeoutComplete: R,
        isUnfurl: "none" !== h,
        isUnfurlTimeoutActive: "unfurledWithTimeout" === h
    }
}
n(272111)