/** chunk id: 324093 params = (module,exports,require) **/
n.d(t, {
    K2: () => N,
    OL: () => C,
    Ub: () => f,
    k1: () => v
});
var i = n(64700),
    r = n(311907),
    l = n(391973),
    s = n(765671),
    a = n(964486),
    o = n(475743),
    u = n(531685),
    d = n(365971),
    c = n(129537),
    h = n(916494),
    g = n(897720),
    m = n(545807);
let f = 256,
    A = (e, t) => 2 * e + 2 * t,
    I = e => {
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

function E(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f,
        l = {
            width: r,
            height: (0, h.uc)(r)
        },
        s = Math.max(1, e),
        a = (0, h.kz)(e, t),
        o = A(n, t);
    return i ? {
        width: l.width + o,
        height: l.height * s + a + o
    } : {
        width: l.width * s + a + o,
        height: l.height + o
    }
}

function p(e, t, n, i) {
    let r = A(e, t);
    return i ? n.width - r : (0, h.Um)(n.height - r)
}

function _(e) {
    return e.height > e.width
}
let S = 180 / 1080;

function x(e) {
    let {
        layout: t,
        tileCount: n,
        borderWidth: i,
        padding: r,
        previousContainerSize: l,
        widgetMinMaxSizes: s
    } = e, a = t === g.IV.VERTICAL, o = p(i, r, l, a), u = E(n, r, i, a, o);
    return (0, h.UM)(u, {
        containerOffset: A(i, r),
        gapSize: r,
        tileCount: n,
        isVertical: a
    }, {
        maxWidth: s.maxSize.width,
        maxHeight: s.maxSize.height
    })
}

function T(e) {
    let {
        widgetId: t,
        size: n,
        borderWidth: i,
        padding: r,
        minSize: s,
        containerSpecs: a,
        defaultSize: o,
        ...u
    } = e, d = e => C({
        operation: c.P.RESIZE_NORTH,
        computedSize: e,
        originSize: e,
        borderWidth: i,
        padding: r,
        containerSpecs: a,
        ...u
    }), h = {
        widgetId: t,
        size: {
            fixed: n.fixed,
            ...d(n)
        },
        minSize: {
            ...d(s)
        }
    };
    null != o && (h.defaultSize = {
        ...d(o)
    }), (0, l.Ju)({
        ...h
    })
}
let C = e => {
    let t, n, i, {
            operation: r,
            computedSize: l,
            originSize: s,
            borderWidth: a,
            padding: o,
            containerSpecs: u
        } = e,
        d = A(a, o),
        g = Math.max(1, s.width),
        m = Math.max(1, s.height),
        f = {
            width: g,
            height: m
        },
        I = _(f),
        E = (t = _(f), n = p(a, o, f, t), i = (0, h.uc)(n), t ? Math.floor(f.height / i) : Math.floor(f.width / n)),
        S = (0, h.eu)({
            width: g,
            height: m,
            containerOffset: d,
            gapSize: o,
            tileCount: E,
            isVertical: I
        }),
        x = (0, h.kz)(E, o),
        T = (() => {
            var e, t;
            switch (r) {
                case c.P.RESIZE_NORTH:
                case c.P.RESIZE_SOUTH:
                    let n, i;
                    return {
                        height: l.height, width: (e = l.height, n = I ? e - x : e, i = (0, h.Mw)(n - d, S.horizontalRatio), I || (i += x), i + d)
                    };
                default:
                    let s, a;
                    return {
                        width: l.width, height: (t = l.width, s = I ? t : t - x, a = (0, h.cP)(s - d, S.verticalRatio), I && (a += x), a + d)
                    }
            }
        })();
    return (0, h.UM)(T, {
        containerOffset: d,
        gapSize: o,
        tileCount: E,
        isVertical: I
    }, {
        maxWidth: .75 * u.maxX,
        maxHeight: .75 * u.maxY
    })
};

function N(e) {
    let {
        tileCount: t,
        padding: n,
        borderWidth: i,
        isVertical: l,
        widgetSize: a
    } = e, {
        width: o,
        height: c
    } = {
        width: "number" == typeof a.width ? a.width : f,
        height: "number" == typeof a.height ? a.height : (0, h.uc)(f)
    }, {
        width: g = o,
        height: I = c,
        ref: _
    } = (0, s.Ay)(), x = (0, m.A)(), T = (0, d.Q2)(x), C = (0, r.bG)([u.A], () => u.A.windowSize(T), [T]), N = function(e) {
        let {
            tileCount: t,
            padding: n,
            borderWidth: i,
            windowWidth: r,
            windowHeight: l,
            isVertical: s
        } = e, a = E(t, n, i, s), o = {
            maxX: r ?? 2 * a.width / .75,
            maxY: l ?? 2 * a.height / .75,
            minX: 0,
            minY: 0
        }, u = {
            width: .75 * o.maxX,
            height: .75 * o.maxY
        }, d = (l ?? 0) * S;
        return d = Math.max(a.height, d), d = Math.min(u.height, d), {
            minSize: a,
            defaultSize: E(t, n, i, s, (0, h.Um)(d)),
            maxSize: u,
            containerSpecs: o
        }
    }({
        tileCount: t,
        padding: n,
        borderWidth: i,
        windowWidth: C.width,
        windowHeight: C.height,
        isVertical: l
    }), v = A(i, n), y = p(i, n, {
        width: g + v,
        height: I + v
    }, l), M = (0, h.uc)(y);
    return {
        tileWidth: y,
        tileHeight: M,
        widgetWidth: o,
        widgetHeight: c,
        containerRef: _,
        containerMinMaxSizes: N
    }
}

function v(e) {
    let {
        streamParticipants: t,
        layout: n,
        widgetLayoutSpecs: r
    } = e, l = i.useRef(r);
    l.current = r;
    let s = (0, o.A)(n),
        u = t.length,
        d = r.widgetMinMaxSizes.maxSize.width * r.widgetMinMaxSizes.maxSize.height;
    (0, a.u5)(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: n,
            layout: i,
            padding: r,
            widget: s,
            borderWidth: a,
            locked: o,
            ...d
        } = l.current;
        null == s || T({
            widgetId: e,
            size: I(x({
                layout: i,
                tileCount: Math.max(1, u),
                borderWidth: a,
                padding: r,
                previousContainerSize: t.defaultSize,
                widgetMinMaxSizes: t
            })),
            defaultSize: t.defaultSize,
            minSize: I(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: r,
            borderWidth: a,
            widget: s,
            ...d
        })
    }), i.useLayoutEffect(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: n,
            layout: i,
            padding: r,
            widget: s,
            borderWidth: a,
            locked: o,
            ...d
        } = l.current;
        if (null != s) {
            if (0 === u) {
                if (o) return;
                T({
                    widgetId: e,
                    size: I(t.defaultSize),
                    defaultSize: t.defaultSize,
                    minSize: I(t.minSize),
                    padding: r,
                    borderWidth: a,
                    widget: s,
                    containerSpecs: t.containerSpecs,
                    ...d
                });
                return
            }
            T({
                widgetId: e,
                size: I(x({
                    layout: i,
                    tileCount: u,
                    borderWidth: a,
                    padding: r,
                    previousContainerSize: n,
                    widgetMinMaxSizes: t
                })),
                minSize: I(t.minSize),
                containerSpecs: t.containerSpecs,
                padding: r,
                borderWidth: a,
                widget: s,
                ...d
            })
        }
    }, [u, d]), i.useLayoutEffect(() => {
        if (l.current.participants <= 1) return;
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: i,
            padding: r,
            borderWidth: a,
            participants: o,
            widget: u,
            ...d
        } = l.current;
        if (null == u || s === n) return;
        let c = function(e) {
            let {
                oldLayout: t,
                newLayout: n,
                tileCount: i,
                borderWidth: r,
                padding: l,
                previousContainerSize: s,
                widgetMinMaxSizes: a
            } = e, o = p(r, l, s, t === g.IV.VERTICAL), u = E(i, l, r, n === g.IV.VERTICAL, o);
            return (0, h.UM)(u, {
                containerOffset: A(r, l),
                gapSize: l,
                tileCount: i,
                isVertical: n === g.IV.VERTICAL
            }, {
                maxWidth: a.maxSize.width,
                maxHeight: a.maxSize.height
            })
        }({
            oldLayout: s ?? n,
            newLayout: n,
            tileCount: o,
            borderWidth: a,
            padding: r,
            previousContainerSize: i,
            widgetMinMaxSizes: t
        });
        T({
            widgetId: e,
            size: I(c),
            minSize: I(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: r,
            borderWidth: a,
            widget: u,
            ...d
        })
    }, [n, s]), (0, a.l0)(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            widget: n,
            padding: i,
            ...r
        } = l.current;
        null != n && T({
            widgetId: e,
            size: I(t.defaultSize),
            defaultSize: t.defaultSize,
            minSize: I(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: i,
            widget: n,
            ...r
        })
    })
}