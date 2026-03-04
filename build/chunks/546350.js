/** chunk id: 546350, original params: e,t,n (module,exports,require) **/
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
        isQuestBarVisible: o,
        unfurlEnabled: d,
        hasSeenUnfurl: c,
        onUnfurlDismissed: u
    } = e, m = d && !t && !c, [h, p] = a.useState(m ? "unfurledWithTimeout" : "none"), x = (0, i.bG)([l.A], () => l.A.useReducedMotion), [g, _] = a.useState(m), [f, b] = a.useState(!g), [v, j] = a.useState(!0), A = a.useRef(o), C = a.useCallback(e => {
        n || (b(!1), _(e))
    }, [n]), T = a.useCallback(() => {
        C(!0)
    }, [C]), y = a.useCallback(() => {
        C(!1)
    }, [C]), S = t ? r.ZV : r.Ko, [{
        expansionSpring: E
    }, N] = (0, s.zhh)(() => ({
        from: {
            expansionSpring: 0
        },
        config: S,
        onRest: e => {
            b(!0), 0 === e.value && p("none")
        },
        onStart: () => {
            b(!1)
        }
    }));
    a.useEffect(() => {
        N({
            expansionSpring: +!!g,
            immediate: x
        })
    }, [g, N, x]);
    let {
        visibilitySpring: I
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
            "unfurledWithTimeout" === h && (p("unfurledWithTimeoutCanceled"), u())
        }, [u, h]),
        R = a.useCallback(() => {
            C(!1), u()
        }, [C, u]);
    return {
        isExpanded: g,
        setIsExpanded: C,
        expandQuestBar: T,
        collapseQuestBar: y,
        isExpansionAnimationComplete: f,
        isVisibilityAnimationAtRest: v,
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