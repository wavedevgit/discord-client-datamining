/** chunk id: 446541 params = (module,exports,require) **/
A.d(t, {
    A: () => O
});
var E = A(627968),
    e = A(64700),
    C = A(503698),
    T = A.n(C),
    I = A(490249),
    S = A(615300),
    n = A(397927),
    R = A(311907),
    i = A(775602),
    l = A(628965),
    r = A(792691);

function N(_) {
    let {
        children: t,
        className: A,
        onFlashEnd: C,
        animationDelay: R = 500
    } = _, l = n.LU0.colors.TEXT_LINK, N = (0, n.rdh)(l).spring({
        opacity: 0
    }), O = (0, n.rdh)(l).spring({
        opacity: .1
    }), u = (0, n.rdh)(l).spring({
        opacity: 0
    }), s = (0, n.rdh)(l).spring({
        opacity: 1
    }), [d, a] = (0, n.zhh)(() => ({
        from: {
            backgroundColor: N,
            borderColor: N
        }
    }), "animate-never"), o = {
        startColor: N,
        handleRest: _ => {
            _.finished && C?.()
        },
        endColor: u,
        targetBorderColor: s,
        targetColor: O,
        animationDelay: R
    }, D = e.useRef(o);
    return e.useEffect(() => {
        D.current = o
    }), e.useEffect(() => {
        let {
            startColor: _,
            handleRest: t,
            endColor: A,
            targetBorderColor: E,
            targetColor: e,
            animationDelay: C
        } = D.current, {
            useReducedMotion: T
        } = i.A, I = 200 * !T;
        a({
            reset: !0,
            immediate: !1,
            to: {
                backgroundColor: _,
                borderColor: _
            },
            config: {
                duration: I,
                easing: S.A.Easing.ease
            }
        }), a({
            delay: C,
            immediate: T,
            to: [{
                backgroundColor: e,
                borderColor: E
            }],
            config: {
                duration: I,
                easing: S.A.Easing.ease
            }
        }), a({
            delay: C + 200 + 200,
            immediate: T,
            to: [{
                backgroundColor: A,
                borderColor: A
            }],
            config: {
                duration: I,
                easing: S.A.Easing.ease
            },
            onRest: t
        })
    }, [a]), (0, E.jsx)(I.animated.div, {
        style: d,
        className: T()(r.h, A),
        children: t
    })
}

function O(_) {
    let {
        children: t,
        scrollPosition: A,
        animationDelay: C
    } = _, T = (0, R.bG)([l.A], () => l.A.getScrollPosition() === A), [I, S] = e.useState(!1);
    return (e.useEffect(() => {
        T && S(!0)
    }, [T]), I) ? (0, E.jsx)(N, {
        animationDelay: C,
        onFlashEnd: () => S(!1),
        children: t
    }) : t
}