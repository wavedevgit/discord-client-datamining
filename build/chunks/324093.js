/** chunk id: 324093 params = (module,exports,require) **/
n.d(t, {
    K2: () => C,
    OL: () => N,
    Ub: () => f,
    k1: () => v
});
var i = n(64700),
    l = n(311907),
    r = n(391973),
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
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f,
        r = {
            width: l,
            height: (0, h.uc)(l)
        },
        s = Math.max(1, e),
        a = (0, h.kz)(e, t),
        o = A(n, t);
    return i ? {
        width: r.width + o,
        height: r.height * s + a + o
    } : {
        width: r.width * s + a + o,
        height: r.height + o
    }
}

function p(e, t, n, i) {
    let l = A(e, t);
    return i ? n.width - l : (0, h.Um)(n.height - l)
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
        padding: l,
        previousContainerSize: r,
        widgetMinMaxSizes: s
    } = e, a = t === g.IV.VERTICAL, o = p(i, l, r, a), u = E(n, l, i, a, o);
    return (0, h.UM)(u, {
        containerOffset: A(i, l),
        gapSize: l,
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
        padding: l,
        minSize: s,
        containerSpecs: a,
        defaultSize: o,
        ...u
    } = e, d = e => N({
        operation: c.P.RESIZE_NORTH,
        computedSize: e,
        originSize: e,
        borderWidth: i,
        padding: l,
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
    }), (0, r.Ju)({
        ...h
    })
}
let N = e => {
    let t, n, i, {
            operation: l,
            computedSize: r,
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
            switch (l) {
                case c.P.RESIZE_NORTH:
                case c.P.RESIZE_SOUTH:
                    let n, i;
                    return {
                        height: r.height, width: (e = r.height, n = I ? e - x : e, i = (0, h.Mw)(n - d, S.horizontalRatio), I || (i += x), i + d)
                    };
                default:
                    let s, a;
                    return {
                        width: r.width, height: (t = r.width, s = I ? t : t - x, a = (0, h.cP)(s - d, S.verticalRatio), I && (a += x), a + d)
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

function C(e) {
    let {
        tileCount: t,
        padding: n,
        borderWidth: i,
        isVertical: r,
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
    } = (0, s.Ay)(), x = (0, m.A)(), T = (0, d.Q2)(x), N = (0, l.bG)([u.A], () => u.A.windowSize(T), [T]), C = function(e) {
        let {
            tileCount: t,
            padding: n,
            borderWidth: i,
            windowWidth: l,
            windowHeight: r,
            isVertical: s
        } = e, a = E(t, n, i, s), o = {
            maxX: l ?? 2 * a.width / .75,
            maxY: r ?? 2 * a.height / .75,
            minX: 0,
            minY: 0
        }, u = {
            width: .75 * o.maxX,
            height: .75 * o.maxY
        }, d = (r ?? 0) * S;
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
        windowWidth: N.width,
        windowHeight: N.height,
        isVertical: r
    }), v = A(i, n), y = p(i, n, {
        width: g + v,
        height: I + v
    }, r), M = (0, h.uc)(y);
    return {
        tileWidth: y,
        tileHeight: M,
        widgetWidth: o,
        widgetHeight: c,
        containerRef: _,
        containerMinMaxSizes: C
    }
}

function v(e) {
    let {
        streamParticipants: t,
        layout: n,
        widgetLayoutSpecs: l
    } = e, r = i.useRef(l);
    r.current = l;
    let s = (0, o.A)(n),
        u = t.length,
        d = l.widgetMinMaxSizes.maxSize.width * l.widgetMinMaxSizes.maxSize.height;
    (0, a.u5)(() => {
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: n,
            layout: i,
            padding: l,
            widget: s,
            borderWidth: a,
            locked: o,
            ...d
        } = r.current;
        null == s || T({
            widgetId: e,
            size: I(x({
                layout: i,
                tileCount: Math.max(1, u),
                borderWidth: a,
                padding: l,
                previousContainerSize: t.defaultSize,
                widgetMinMaxSizes: t
            })),
            defaultSize: t.defaultSize,
            minSize: I(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: l,
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
            padding: l,
            widget: s,
            borderWidth: a,
            locked: o,
            ...d
        } = r.current;
        if (null != s) {
            if (0 === u) {
                if (o) return;
                T({
                    widgetId: e,
                    size: I(t.defaultSize),
                    defaultSize: t.defaultSize,
                    minSize: I(t.minSize),
                    padding: l,
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
                    padding: l,
                    previousContainerSize: n,
                    widgetMinMaxSizes: t
                })),
                minSize: I(t.minSize),
                containerSpecs: t.containerSpecs,
                padding: l,
                borderWidth: a,
                widget: s,
                ...d
            })
        }
    }, [u, d]), i.useLayoutEffect(() => {
        if (r.current.participants <= 1) return;
        let {
            id: e,
            widgetMinMaxSizes: t,
            containerSize: i,
            padding: l,
            borderWidth: a,
            participants: o,
            widget: u,
            ...d
        } = r.current;
        if (null == u || s === n) return;
        let c = function(e) {
            let {
                oldLayout: t,
                newLayout: n,
                tileCount: i,
                borderWidth: l,
                padding: r,
                previousContainerSize: s,
                widgetMinMaxSizes: a
            } = e, o = p(l, r, s, t === g.IV.VERTICAL), u = E(i, r, l, n === g.IV.VERTICAL, o);
            return (0, h.UM)(u, {
                containerOffset: A(l, r),
                gapSize: r,
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
            padding: l,
            previousContainerSize: i,
            widgetMinMaxSizes: t
        });
        T({
            widgetId: e,
            size: I(c),
            minSize: I(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: l,
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
            ...l
        } = r.current;
        null != n && T({
            widgetId: e,
            size: I(t.defaultSize),
            defaultSize: t.defaultSize,
            minSize: I(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: i,
            widget: n,
            ...l
        })
    })
}