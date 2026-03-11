/** chunk id: 446541 params = (module,exports,require) **/
I.d(_, {
    A: () => D
});
var A = I(627968),
    S = I(64700),
    T = I(503698),
    C = I.n(T),
    t = I(490249),
    O = I(615300),
    e = I(397927),
    R = I(311907),
    N = I(775602),
    n = I(628965),
    P = I(480357);

function L(E) {
    let {
        children: _,
        className: I,
        onFlashEnd: T,
        animationDelay: R = 500
    } = E, n = e.LU0.colors.TEXT_LINK, L = (0, e.rdh)(n).spring({
        opacity: 0
    }), D = (0, e.rdh)(n).spring({
        opacity: .1
    }), i = (0, e.rdh)(n).spring({
        opacity: 0
    }), l = (0, e.rdh)(n).spring({
        opacity: 1
    }), [r, V] = (0, e.zhh)(() => ({
        from: {
            backgroundColor: L,
            borderColor: L
        }
    }), "animate-never"), Y = {
        startColor: L,
        handleRest: E => {
            E.finished && T?.()
        },
        endColor: i,
        targetBorderColor: l,
        targetColor: D,
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
        } = N.A, t = 200 * !C;
        V({
            reset: !0,
            immediate: !1,
            to: {
                backgroundColor: E,
                borderColor: E
            },
            config: {
                duration: t,
                easing: O.A.Easing.ease
            }
        }), V({
            delay: T,
            immediate: C,
            to: [{
                backgroundColor: S,
                borderColor: A
            }],
            config: {
                duration: t,
                easing: O.A.Easing.ease
            }
        }), V({
            delay: T + 200 + 200,
            immediate: C,
            to: [{
                backgroundColor: I,
                borderColor: I
            }],
            config: {
                duration: t,
                easing: O.A.Easing.ease
            },
            onRest: _
        })
    }, [V]), (0, A.jsx)(t.animated.div, {
        style: r,
        className: C()(P.h, I),
        children: _
    })
}

function D(E) {
    let {
        children: _,
        scrollPosition: I,
        animationDelay: T
    } = E, C = (0, R.bG)([n.A], () => n.A.getScrollPosition() === I), [t, O] = S.useState(!1);
    return (S.useEffect(() => {
        C && O(!0)
    }, [C]), t) ? (0, A.jsx)(L, {
        animationDelay: T,
        onFlashEnd: () => O(!1),
        children: _
    }) : _
}