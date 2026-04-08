/** chunk id: 324093 params = (module,exports,require) **/
n.d(t, {
    K2: () => S,
    OL: () => C,
    Ub: () => p,
    k1: () => y
});
var i = n(64700),
    a = n(311907),
    r = n(391973),
    s = n(765671),
    l = n(964486),
    o = n(475743),
    d = n(531685),
    c = n(365971),
    u = n(129537),
    _ = n(916494),
    h = n(897720),
    m = n(545807);
let p = 256,
    g = (e, t) => 2 * e + 2 * t,
    f = e => {
        let {
            width: t,
            height: n
        } = e;
        return {
            fixed: !0,
            width: t,
            height: n
        }
    };

function A(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : p,
        r = {
            width: a,
            height: (0, _.uc)(a)
        },
        s = Math.max(1, e),
        l = (0, _.kz)(e, t),
        o = g(n, t);
    return i ? {
        width: r.width + o,
        height: r.height * s + l + o
    } : {
        width: r.width * s + l + o,
        height: r.height + o
    }
}

function x(e, t, n, i) {
    let a = g(e, t);
    return i ? n.width - a : (0, _.Um)(n.height - a)
}

function I(e) {
    return e.height > e.width
}
let E = 180 / 1080;

function b(e) {
    let {
        layout: t,
        tileCount: n,
        borderWidth: i,
        padding: a,
        previousContainerSize: r,
        widgetMinMaxSizes: s
    } = e, l = t === h.IV.VERTICAL, o = x(i, a, r, l), d = A(n, a, i, l, o);
    return (0, _.UM)(d, {
        containerOffset: g(i, a),
        gapSize: a,
        tileCount: n,
        isVertical: l
    }, {
        maxWidth: s.maxSize.width,
        maxHeight: s.maxSize.height
    })
}

function v(e) {
    let {
        widgetId: t,
        size: n,
        borderWidth: i,
        padding: a,
        minSize: s,
        containerSpecs: l,
        defaultSize: o,
        ...d
    } = e, c = e => C({
        operation: u.P.RESIZE_NORTH,
        computedSize: e,
        originSize: e,
        borderWidth: i,
        padding: a,
        containerSpecs: l,
        ...d
    }), _ = {
        widgetId: t,
        size: {
            fixed: n.fixed,
            ...c(n)
        },
        minSize: {
            ...c(s)
        }
    };
    null != o && (_.defaultSize = {
        ...c(o)
    }), (0, r.Ju)({
        ..._
    })
}
let C = e => {
    let t, n, i, {
            operation: a,
            computedSize: r,
            originSize: s,
            borderWidth: l,
            padding: o,
            containerSpecs: d
        } = e,
        c = g(l, o),
        h = Math.max(1, s.width),
        m = Math.max(1, s.height),
        p = {
            width: h,
            height: m
        },
        f = I(p),
        A = (t = I(p), n = x(l, o, p, t), i = (0, _.uc)(n), t ? Math.floor(p.height / i) : Math.floor(p.width / n)),
        E = (0, _.eu)({
            width: h,
            height: m,
            containerOffset: c,
            gapSize: o,
            tileCount: A,
            isVertical: f
        }),
        b = (0, _.kz)(A, o),
        v = (() => {
            var e, t;
            switch (a) {
                case u.P.RESIZE_NORTH:
                case u.P.RESIZE_SOUTH:
                    let n, i;
                    return {
                        height: r.height, width: (e = r.height, n = f ? e - b : e, i = (0, _.Mw)(n - c, E.horizontalRatio), f || (i += b), i + c)
                    };
                default:
                    let s, l;
                    return {
                        width: r.width, height: (t = r.width, s = f ? t : t - b, l = (0, _.cP)(s - c, E.verticalRatio), f && (l += b), l + c)
                    }
            }
        })();
    return (0, _.UM)(v, {
        containerOffset: c,
        gapSize: o,
        tileCount: A,
        isVertical: f
    }, {
        maxWidth: .75 * d.maxX,
        maxHeight: .75 * d.maxY
    })
};

function S(e) {
    let {
        tileCount: t,
        padding: n,
        borderWidth: i,
        isVertical: r,
        widgetSize: l
    } = e, {
        width: o,
        height: u
    } = {
        width: "number" == typeof l.width ? l.width : p,
        height: "number" == typeof l.height ? l.height : (0, _.uc)(p)
    }, {
        width: h = o,
        height: f = u,
        ref: I
    } = (0, s.Ay)(), b = (0, m.A)(), v = (0, c.Q2)(b), C = (0, a.bG)([d.A], () => d.A.windowSize(v), [v]), S = function(e) {
        let {
            tileCount: t,
            padding: n,
            borderWidth: i,
            windowWidth: a,
            windowHeight: r,
            isVertical: s
        } = e, l = A(t, n, i, s), o = {
            maxX: a ?? 2 * l.width / .75,
            maxY: r ?? 2 * l.height / .75,
            minX: 0,
            minY: 0
        }, d = {
            width: .75 * o.maxX,
            height: .75 * o.maxY
        }, c = (r ?? 0) * E;
        return c = Math.max(l.height, c), c = Math.min(d.height, c), {
            minSize: l,
            defaultSize: A(t, n, i, s, (0, _.Um)(c)),
            maxSize: d,
            containerSpecs: o
        }
    }({
        tileCount: t,
        padding: n,
        borderWidth: i,
        windowWidth: C.width,
        windowHeight: C.height,
        isVertical: r
    }), y = g(i, n), T = x(i, n, {
        width: h + y,
        height: f + y
    }, r), N = (0, _.uc)(T);
    return {
        tileWidth: T,
        tileHeight: N,
        widgetWidth: o,
        widgetHeight: u,
        containerRef: I,
        containerMinMaxSizes: S
    }
}

function y(e) {
    let {
        streamParticipants: t,
        layout: n,
        widgetLayoutSpecs: a
    } = e, r = i.useRef(a);
    r.current = a;
    let s = (0, o.A)(n),
        d = t.length,
        c = a.widgetMinMaxSizes.maxSize.width * a.widgetMinMaxSizes.maxSize.height;
    (0, l.u5)(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: n,
            layout: i,
            padding: a,
            widget: s,
            borderWidth: l,
            locked: o,
            ...c
        } = r.current;
        null == s || v({
            widgetId: e,
            size: f(b({
                layout: i,
                tileCount: Math.max(1, d),
                borderWidth: l,
                padding: a,
                previousContainerSize: t.defaultSize,
                widgetMinMaxSizes: t
            })),
            defaultSize: t.defaultSize,
            minSize: f(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: a,
            borderWidth: l,
            widget: s,
            ...c
        })
    }), i.useLayoutEffect(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: n,
            layout: i,
            padding: a,
            widget: s,
            borderWidth: l,
            locked: o,
            ...c
        } = r.current;
        if (null != s) {
            if (0 === d) {
                if (o) return;
                v({
                    widgetId: e,
                    size: f(t.defaultSize),
                    defaultSize: t.defaultSize,
                    minSize: f(t.minSize),
                    padding: a,
                    borderWidth: l,
                    widget: s,
                    containerSpecs: t.containerSpecs,
                    ...c
                });
                return
            }
            v({
                widgetId: e,
                size: f(b({
                    layout: i,
                    tileCount: d,
                    borderWidth: l,
                    padding: a,
                    previousContainerSize: n,
                    widgetMinMaxSizes: t
                })),
                minSize: f(t.minSize),
                containerSpecs: t.containerSpecs,
                padding: a,
                borderWidth: l,
                widget: s,
                ...c
            })
        }
    }, [d, c]), i.useLayoutEffect(() => {
        if (r.current.participants <= 1) return;
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: i,
            padding: a,
            borderWidth: l,
            participants: o,
            widget: d,
            ...c
        } = r.current;
        if (null == d || s === n) return;
        let u = function(e) {
            let {
                oldLayout: t,
                newLayout: n,
                tileCount: i,
                borderWidth: a,
                padding: r,
                previousContainerSize: s,
                widgetMinMaxSizes: l
            } = e, o = x(a, r, s, t === h.IV.VERTICAL), d = A(i, r, a, n === h.IV.VERTICAL, o);
            return (0, _.UM)(d, {
                containerOffset: g(a, r),
                gapSize: r,
                tileCount: i,
                isVertical: n === h.IV.VERTICAL
            }, {
                maxWidth: l.maxSize.width,
                maxHeight: l.maxSize.height
            })
        }({
            oldLayout: s ?? n,
            newLayout: n,
            tileCount: o,
            borderWidth: l,
            padding: a,
            previousContainerSize: i,
            widgetMinMaxSizes: t
        });
        v({
            widgetId: e,
            size: f(u),
            minSize: f(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: a,
            borderWidth: l,
            widget: d,
            ...c
        })
    }, [n, s]), (0, l.l0)(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            widget: n,
            padding: i,
            ...a
        } = r.current;
        null != n && v({
            widgetId: e,
            size: f(t.defaultSize),
            defaultSize: t.defaultSize,
            minSize: f(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: i,
            widget: n,
            ...a
        })
    })
}