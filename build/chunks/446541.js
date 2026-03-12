/** chunk id: 446541 params = (module,exports,require) **/
A.d(_, {
    A: () => l
});
var I = A(627968),
    T = A(64700),
    S = A(503698),
    t = A.n(S),
    e = A(490249),
    C = A(615300),
    O = A(397927),
    R = A(311907),
    n = A(775602),
    N = A(628965),
    P = A(792691);

function i(E) {
    let {
        children: _,
        className: A,
        onFlashEnd: S,
        animationDelay: R = 500
    } = E, N = O.LU0.colors.TEXT_LINK, i = (0, O.rdh)(N).spring({
        opacity: 0
    }), l = (0, O.rdh)(N).spring({
        opacity: .1
    }), r = (0, O.rdh)(N).spring({
        opacity: 0
    }), D = (0, O.rdh)(N).spring({
        opacity: 1
    }), [V, L] = (0, O.zhh)(() => ({
        from: {
            backgroundColor: i,
            borderColor: i
        }
    }), "animate-never"), u = {
        startColor: i,
        handleRest: E => {
            E.finished && S?.()
        },
        endColor: r,
        targetBorderColor: D,
        targetColor: l,
        animationDelay: R
    }, s = T.useRef(u);
    return T.useEffect(() => {
        s.current = u
    }), T.useEffect(() => {
        let {
            startColor: E,
            handleRest: _,
            endColor: A,
            targetBorderColor: I,
            targetColor: T,
            animationDelay: S
        } = s.current, {
            useReducedMotion: t
        } = n.A, e = 200 * !t;
        L({
            reset: !0,
            immediate: !1,
            to: {
                backgroundColor: E,
                borderColor: E
            },
            config: {
                duration: e,
                easing: C.A.Easing.ease
            }
        }), L({
            delay: S,
            immediate: t,
            to: [{
                backgroundColor: T,
                borderColor: I
            }],
            config: {
                duration: e,
                easing: C.A.Easing.ease
            }
        }), L({
            delay: S + 200 + 200,
            immediate: t,
            to: [{
                backgroundColor: A,
                borderColor: A
            }],
            config: {
                duration: e,
                easing: C.A.Easing.ease
            },
            onRest: _
        })
    }, [L]), (0, I.jsx)(e.animated.div, {
        style: V,
        className: t()(P.h, A),
        children: _
    })
}

function l(E) {
    let {
        children: _,
        scrollPosition: A,
        animationDelay: S
    } = E, t = (0, R.bG)([N.A], () => N.A.getScrollPosition() === A), [e, C] = T.useState(!1);
    return (T.useEffect(() => {
        t && C(!0)
    }, [t]), e) ? (0, I.jsx)(i, {
        animationDelay: S,
        onFlashEnd: () => C(!1),
        children: _
    }) : _
}