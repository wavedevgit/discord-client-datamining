/** chunk id: 324093 params = (module,exports,require) **/
n.d(t, {
    K2: () => C,
    OL: () => S,
    Ub: () => f,
    k1: () => y
});
var i = n(64700),
    a = n(311907),
    r = n(391973),
    l = n(765671),
    s = n(964486),
    o = n(475743),
    d = n(531685),
    c = n(365971),
    u = n(129537),
    _ = n(916494),
    h = n(897720),
    m = n(545807);
let f = 256,
    p = (e, t) => 2 * e + 2 * t,
    g = e => {
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
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f,
        r = {
            width: a,
            height: (0, _.uc)(a)
        },
        l = Math.max(1, e),
        s = (0, _.kz)(e, t),
        o = p(n, t);
    return i ? {
        width: r.width + o,
        height: r.height * l + s + o
    } : {
        width: r.width * l + s + o,
        height: r.height + o
    }
}

function x(e, t, n, i) {
    let a = p(e, t);
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
        widgetMinMaxSizes: l
    } = e, s = t === h.IV.VERTICAL, o = x(i, a, r, s), d = A(n, a, i, s, o);
    return (0, _.UM)(d, {
        containerOffset: p(i, a),
        gapSize: a,
        tileCount: n,
        isVertical: s
    }, {
        maxWidth: l.maxSize.width,
        maxHeight: l.maxSize.height
    })
}

function v(e) {
    let {
        widgetId: t,
        size: n,
        borderWidth: i,
        padding: a,
        minSize: l,
        containerSpecs: s,
        defaultSize: o,
        ...d
    } = e, c = e => S({
        operation: u.P.RESIZE_NORTH,
        computedSize: e,
        originSize: e,
        borderWidth: i,
        padding: a,
        containerSpecs: s,
        ...d
    }), _ = {
        widgetId: t,
        size: {
            fixed: n.fixed,
            ...c(n)
        },
        minSize: {
            ...c(l)
        }
    };
    null != o && (_.defaultSize = {
        ...c(o)
    }), (0, r.Ju)({
        ..._
    })
}
let S = e => {
    let t, n, i, {
            operation: a,
            computedSize: r,
            originSize: l,
            borderWidth: s,
            padding: o,
            containerSpecs: d
        } = e,
        c = p(s, o),
        h = Math.max(1, l.width),
        m = Math.max(1, l.height),
        f = {
            width: h,
            height: m
        },
        g = I(f),
        A = (t = I(f), n = x(s, o, f, t), i = (0, _.uc)(n), t ? Math.floor(f.height / i) : Math.floor(f.width / n)),
        E = (0, _.eu)({
            width: h,
            height: m,
            containerOffset: c,
            gapSize: o,
            tileCount: A,
            isVertical: g
        }),
        b = (0, _.kz)(A, o),
        v = (() => {
            var e, t;
            switch (a) {
                case u.P.RESIZE_NORTH:
                case u.P.RESIZE_SOUTH:
                    let n, i;
                    return {
                        height: r.height, width: (e = r.height, n = g ? e - b : e, i = (0, _.Mw)(n - c, E.horizontalRatio), g || (i += b), i + c)
                    };
                default:
                    let l, s;
                    return {
                        width: r.width, height: (t = r.width, l = g ? t : t - b, s = (0, _.cP)(l - c, E.verticalRatio), g && (s += b), s + c)
                    }
            }
        })();
    return (0, _.UM)(v, {
        containerOffset: c,
        gapSize: o,
        tileCount: A,
        isVertical: g
    }, {
        maxWidth: .75 * d.maxX,
        maxHeight: .75 * d.maxY
    })
};

function C(e) {
    let {
        tileCount: t,
        padding: n,
        borderWidth: i,
        isVertical: r,
        widgetSize: s
    } = e, {
        width: o,
        height: u
    } = {
        width: "number" == typeof s.width ? s.width : f,
        height: "number" == typeof s.height ? s.height : (0, _.uc)(f)
    }, {
        width: h = o,
        height: g = u,
        ref: I
    } = (0, l.Ay)(), b = (0, m.A)(), v = (0, c.Q2)(b), S = (0, a.bG)([d.A], () => d.A.windowSize(v), [v]), C = function(e) {
        let {
            tileCount: t,
            padding: n,
            borderWidth: i,
            windowWidth: a,
            windowHeight: r,
            isVertical: l
        } = e, s = A(t, n, i, l), o = {
            maxX: a ?? 2 * s.width / .75,
            maxY: r ?? 2 * s.height / .75,
            minX: 0,
            minY: 0
        }, d = {
            width: .75 * o.maxX,
            height: .75 * o.maxY
        }, c = (r ?? 0) * E;
        return c = Math.max(s.height, c), c = Math.min(d.height, c), {
            minSize: s,
            defaultSize: A(t, n, i, l, (0, _.Um)(c)),
            maxSize: d,
            containerSpecs: o
        }
    }({
        tileCount: t,
        padding: n,
        borderWidth: i,
        windowWidth: S.width,
        windowHeight: S.height,
        isVertical: r
    }), y = p(i, n), T = x(i, n, {
        width: h + y,
        height: g + y
    }, r), N = (0, _.uc)(T);
    return {
        tileWidth: T,
        tileHeight: N,
        widgetWidth: o,
        widgetHeight: u,
        containerRef: I,
        containerMinMaxSizes: C
    }
}

function y(e) {
    let {
        streamParticipants: t,
        layout: n,
        widgetLayoutSpecs: a
    } = e, r = i.useRef(a);
    r.current = a;
    let l = (0, o.A)(n),
        d = t.length,
        c = a.widgetMinMaxSizes.maxSize.width * a.widgetMinMaxSizes.maxSize.height;
    (0, s.u5)(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: n,
            layout: i,
            padding: a,
            widget: l,
            borderWidth: s,
            locked: o,
            ...c
        } = r.current;
        null == l || v({
            widgetId: e,
            size: g(b({
                layout: i,
                tileCount: Math.max(1, d),
                borderWidth: s,
                padding: a,
                previousContainerSize: t.defaultSize,
                widgetMinMaxSizes: t
            })),
            defaultSize: t.defaultSize,
            minSize: g(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: a,
            borderWidth: s,
            widget: l,
            ...c
        })
    }), i.useLayoutEffect(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: n,
            layout: i,
            padding: a,
            widget: l,
            borderWidth: s,
            locked: o,
            ...c
        } = r.current;
        if (null != l) {
            if (0 === d) {
                if (o) return;
                v({
                    widgetId: e,
                    size: g(t.defaultSize),
                    defaultSize: t.defaultSize,
                    minSize: g(t.minSize),
                    padding: a,
                    borderWidth: s,
                    widget: l,
                    containerSpecs: t.containerSpecs,
                    ...c
                });
                return
            }
            v({
                widgetId: e,
                size: g(b({
                    layout: i,
                    tileCount: d,
                    borderWidth: s,
                    padding: a,
                    previousContainerSize: n,
                    widgetMinMaxSizes: t
                })),
                minSize: g(t.minSize),
                containerSpecs: t.containerSpecs,
                padding: a,
                borderWidth: s,
                widget: l,
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
            borderWidth: s,
            participants: o,
            widget: d,
            ...c
        } = r.current;
        if (null == d || l === n) return;
        let u = function(e) {
            let {
                oldLayout: t,
                newLayout: n,
                tileCount: i,
                borderWidth: a,
                padding: r,
                previousContainerSize: l,
                widgetMinMaxSizes: s
            } = e, o = x(a, r, l, t === h.IV.VERTICAL), d = A(i, r, a, n === h.IV.VERTICAL, o);
            return (0, _.UM)(d, {
                containerOffset: p(a, r),
                gapSize: r,
                tileCount: i,
                isVertical: n === h.IV.VERTICAL
            }, {
                maxWidth: s.maxSize.width,
                maxHeight: s.maxSize.height
            })
        }({
            oldLayout: l ?? n,
            newLayout: n,
            tileCount: o,
            borderWidth: s,
            padding: a,
            previousContainerSize: i,
            widgetMinMaxSizes: t
        });
        v({
            widgetId: e,
            size: g(u),
            minSize: g(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: a,
            borderWidth: s,
            widget: d,
            ...c
        })
    }, [n, l]), (0, s.l0)(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            widget: n,
            padding: i,
            ...a
        } = r.current;
        null != n && v({
            widgetId: e,
            size: g(t.defaultSize),
            defaultSize: t.defaultSize,
            minSize: g(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: i,
            widget: n,
            ...a
        })
    })
}