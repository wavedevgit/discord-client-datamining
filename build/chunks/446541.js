/** chunk id: 446541 params = (module,exports,require) **/
_.d(e, {
    A: () => s
});
var E = _(627968),
    A = _(64700),
    I = _(503698),
    n = _.n(I),
    S = _(497766),
    T = _(615300),
    C = _(397927),
    i = _(311907),
    l = _(775602),
    R = _(628965),
    r = _(480357);

function u(t) {
    let {
        children: e,
        className: _,
        onFlashEnd: I,
        animationDelay: i = 500
    } = t, R = C.LU0.colors.TEXT_LINK, u = (0, C.rdh)(R).spring({
        opacity: 0
    }), s = (0, C.rdh)(R).spring({
        opacity: .1
    }), d = (0, C.rdh)(R).spring({
        opacity: 0
    }), N = (0, C.rdh)(R).spring({
        opacity: 1
    }), [a, o] = (0, C.zhh)(() => ({
        from: {
            backgroundColor: u,
            borderColor: u
        }
    }), "animate-never"), O = {
        startColor: u,
        handleRest: t => {
            t.finished && I?.()
        },
        endColor: d,
        targetBorderColor: N,
        targetColor: s,
        animationDelay: i
    }, D = A.useRef(O);
    return A.useEffect(() => {
        D.current = O
    }), A.useEffect(() => {
        let {
            startColor: t,
            handleRest: e,
            endColor: _,
            targetBorderColor: E,
            targetColor: A,
            animationDelay: I
        } = D.current, {
            useReducedMotion: n
        } = l.A, S = 200 * !n;
        o({
            reset: !0,
            immediate: !1,
            to: {
                backgroundColor: t,
                borderColor: t
            },
            config: {
                duration: S,
                easing: T.A.Easing.ease
            }
        }), o({
            delay: I,
            immediate: n,
            to: [{
                backgroundColor: A,
                borderColor: E
            }],
            config: {
                duration: S,
                easing: T.A.Easing.ease
            }
        }), o({
            delay: I + 200 + 200,
            immediate: n,
            to: [{
                backgroundColor: _,
                borderColor: _
            }],
            config: {
                duration: S,
                easing: T.A.Easing.ease
            },
            onRest: e
        })
    }, [o]), (0, E.jsx)(S.animated.div, {
        style: a,
        className: n()(r.h, _),
        children: e
    })
}

function s(t) {
    let {
        children: e,
        scrollPosition: _,
        animationDelay: I
    } = t, n = (0, i.bG)([R.A], () => R.A.getScrollPosition() === _), [S, T] = A.useState(!1);
    return (A.useEffect(() => {
        n && T(!0)
    }, [n]), S) ? (0, E.jsx)(u, {
        animationDelay: I,
        onFlashEnd: () => T(!1),
        children: e
    }) : e
}