/** chunk id: 446541 params = (module,exports,require) **/
I.d(_, {
    A: () => L
});
var A = I(627968),
    S = I(64700),
    T = I(503698),
    C = I.n(T),
    O = I(490249),
    t = I(615300),
    e = I(397927),
    R = I(311907),
    N = I(775602),
    n = I(628965),
    P = I(480357);

function D(E) {
    let {
        children: _,
        className: I,
        onFlashEnd: T,
        animationDelay: R = 500
    } = E, n = e.LU0.colors.TEXT_LINK, D = (0, e.rdh)(n).spring({
        opacity: 0
    }), L = (0, e.rdh)(n).spring({
        opacity: .1
    }), i = (0, e.rdh)(n).spring({
        opacity: 0
    }), l = (0, e.rdh)(n).spring({
        opacity: 1
    }), [r, V] = (0, e.zhh)(() => ({
        from: {
            backgroundColor: D,
            borderColor: D
        }
    }), "animate-never"), Y = {
        startColor: D,
        handleRest: E => {
            E.finished && T?.()
        },
        endColor: i,
        targetBorderColor: l,
        targetColor: L,
        animationDelay: R
    }, u = S.useRef(Y);
    return S.useEffect(() => {
        u.current = Y
    }), S.useEffect(() => {
        let {
            startColor: E,
            handleRest: _,
            endColor: I,
            targetBorderColor: A,
            targetColor: S,
            animationDelay: T
        } = u.current, {
            useReducedMotion: C
        } = N.A, O = 200 * !C;
        V({
            reset: !0,
            immediate: !1,
            to: {
                backgroundColor: E,
                borderColor: E
            },
            config: {
                duration: O,
                easing: t.A.Easing.ease
            }
        }), V({
            delay: T,
            immediate: C,
            to: [{
                backgroundColor: S,
                borderColor: A
            }],
            config: {
                duration: O,
                easing: t.A.Easing.ease
            }
        }), V({
            delay: T + 200 + 200,
            immediate: C,
            to: [{
                backgroundColor: I,
                borderColor: I
            }],
            config: {
                duration: O,
                easing: t.A.Easing.ease
            },
            onRest: _
        })
    }, [V]), (0, A.jsx)(O.animated.div, {
        style: r,
        className: C()(P.h, I),
        children: _
    })
}

function L(E) {
    let {
        children: _,
        scrollPosition: I,
        animationDelay: T
    } = E, C = (0, R.bG)([n.A], () => n.A.getScrollPosition() === I), [O, t] = S.useState(!1);
    return (S.useEffect(() => {
        C && t(!0)
    }, [C]), O) ? (0, A.jsx)(D, {
        animationDelay: T,
        onFlashEnd: () => t(!1),
        children: _
    }) : _
}