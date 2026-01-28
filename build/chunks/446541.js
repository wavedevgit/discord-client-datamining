/** Chunk was on 5606 **/
/** chunk id: 446541, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(353709),
    o = n(615300),
    c = n(397927),
    d = n(311907),
    u = n(775602),
    p = n(628965),
    _ = n(480357);

function m(e) {
    let {
        children: t,
        className: n,
        onFlashEnd: l,
        animationDelay: d = 500
    } = e, p = c.LU0.colors.TEXT_LINK, m = (0, c.rdh)(p).spring({
        opacity: 0
    }), g = (0, c.rdh)(p).spring({
        opacity: .1
    }), f = (0, c.rdh)(p).spring({
        opacity: 0
    }), b = (0, c.rdh)(p).spring({
        opacity: 1
    }), [h, A] = (0, c.zhh)(() => ({
        from: {
            backgroundColor: m,
            borderColor: m
        }
    }), "animate-never"), E = {
        startColor: m,
        handleRest: e => {
            e.finished && (null == l || l())
        },
        endColor: f,
        targetBorderColor: b,
        targetColor: g,
        animationDelay: d
    }, x = i.useRef(E);
    return i.useEffect(() => {
        x.current = E
    }), i.useEffect(() => {
        let {
            startColor: e,
            handleRest: t,
            endColor: n,
            targetBorderColor: r,
            targetColor: i,
            animationDelay: l
        } = x.current, {
            useReducedMotion: s
        } = u.A, a = 200 * !s;
        A({
            reset: !0,
            immediate: !1,
            to: {
                backgroundColor: e,
                borderColor: e
            },
            config: {
                duration: a,
                easing: o.A.Easing.ease
            }
        }), A({
            delay: l,
            immediate: s,
            to: [{
                backgroundColor: i,
                borderColor: r
            }],
            config: {
                duration: a,
                easing: o.A.Easing.ease
            }
        }), A({
            delay: l + 200 + 200,
            immediate: s,
            to: [{
                backgroundColor: n,
                borderColor: n
            }],
            config: {
                duration: a,
                easing: o.A.Easing.ease
            },
            onRest: t
        })
    }, [A]), (0, r.jsx)(a.animated.div, {
        style: h,
        className: s()(_.h, n),
        children: t
    })
}

function g(e) {
    let {
        children: t,
        scrollPosition: n,
        animationDelay: l
    } = e, s = (0, d.bG)([p.A], () => p.A.getScrollPosition() === n), [a, o] = i.useState(!1);
    return (i.useEffect(() => {
        s && o(!0)
    }, [s]), a) ? (0, r.jsx)(m, {
        animationDelay: l,
        onFlashEnd: () => o(!1),
        children: t
    }) : t
}