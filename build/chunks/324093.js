/** chunk id: 324093, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K2: () => _,
    OL: () => T,
    Ub: () => p,
    k1: () => y
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
    m = n(897720),
    g = n(545807);
let p = 256,
    A = (e, t) => 2 * e + 2 * t,
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

function x(e, t, n, i) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : p,
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

function E(e, t, n, i) {
    let l = A(e, t);
    return i ? n.width - l : (0, h.Um)(n.height - l)
}

function S(e) {
    return e.height > e.width
}
let v = 180 / 1080;

function C(e) {
    let {
        layout: t,
        tileCount: n,
        borderWidth: i,
        padding: l,
        previousContainerSize: r,
        widgetMinMaxSizes: s
    } = e, a = t === m.IV.VERTICAL, o = E(i, l, r, a), u = x(n, l, i, a, o);
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

function I(e) {
    let {
        widgetId: t,
        size: n,
        borderWidth: i,
        padding: l,
        minSize: s,
        containerSpecs: a,
        defaultSize: o,
        ...u
    } = e, d = e => T({
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
let T = e => {
    let t, n, i, {
            operation: l,
            computedSize: r,
            originSize: s,
            borderWidth: a,
            padding: o,
            containerSpecs: u
        } = e,
        d = A(a, o),
        m = Math.max(1, s.width),
        g = Math.max(1, s.height),
        p = {
            width: m,
            height: g
        },
        f = S(p),
        x = (t = S(p), n = E(a, o, p, t), i = (0, h.uc)(n), t ? Math.floor(p.height / i) : Math.floor(p.width / n)),
        v = (0, h.eu)({
            width: m,
            height: g,
            containerOffset: d,
            gapSize: o,
            tileCount: x,
            isVertical: f
        }),
        C = (0, h.kz)(x, o),
        I = (() => {
            var e, t;
            switch (l) {
                case c.P.RESIZE_NORTH:
                case c.P.RESIZE_SOUTH:
                    let n, i;
                    return {
                        height: r.height, width: (e = r.height, n = f ? e - C : e, i = (0, h.Mw)(n - d, v.horizontalRatio), f || (i += C), i + d)
                    };
                default:
                    let s, a;
                    return {
                        width: r.width, height: (t = r.width, s = f ? t : t - C, a = (0, h.cP)(s - d, v.verticalRatio), f && (a += C), a + d)
                    }
            }
        })();
    return (0, h.UM)(I, {
        containerOffset: d,
        gapSize: o,
        tileCount: x,
        isVertical: f
    }, {
        maxWidth: .75 * u.maxX,
        maxHeight: .75 * u.maxY
    })
};

function _(e) {
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
        width: "number" == typeof a.width ? a.width : p,
        height: "number" == typeof a.height ? a.height : (0, h.uc)(p)
    }, {
        width: m = o,
        height: f = c,
        ref: S
    } = (0, s.Ay)(), C = (0, g.A)(), I = (0, d.Q2)(C), T = (0, l.bG)([u.A], () => u.A.windowSize(I), [I]), _ = function(e) {
        let {
            tileCount: t,
            padding: n,
            borderWidth: i,
            windowWidth: l,
            windowHeight: r,
            isVertical: s
        } = e, a = x(t, n, i, s), o = {
            maxX: l ?? 2 * a.width / .75,
            maxY: r ?? 2 * a.height / .75,
            minX: 0,
            minY: 0
        }, u = {
            width: .75 * o.maxX,
            height: .75 * o.maxY
        }, d = (r ?? 0) * v;
        return d = Math.max(a.height, d), d = Math.min(u.height, d), {
            minSize: a,
            defaultSize: x(t, n, i, s, (0, h.Um)(d)),
            maxSize: u,
            containerSpecs: o
        }
    }({
        tileCount: t,
        padding: n,
        borderWidth: i,
        windowWidth: T.width,
        windowHeight: T.height,
        isVertical: r
    }), y = A(i, n), j = E(i, n, {
        width: m + y,
        height: f + y
    }, r), b = (0, h.uc)(j);
    return {
        tileWidth: j,
        tileHeight: b,
        widgetWidth: o,
        widgetHeight: c,
        containerRef: S,
        containerMinMaxSizes: _
    }
}

function y(e) {
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
        null == s || I({
            widgetId: e,
            size: f(C({
                layout: i,
                tileCount: Math.max(1, u),
                borderWidth: a,
                padding: l,
                previousContainerSize: t.defaultSize,
                widgetMinMaxSizes: t
            })),
            defaultSize: t.defaultSize,
            minSize: f(t.minSize),
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
                I({
                    widgetId: e,
                    size: f(t.defaultSize),
                    defaultSize: t.defaultSize,
                    minSize: f(t.minSize),
                    padding: l,
                    borderWidth: a,
                    widget: s,
                    containerSpecs: t.containerSpecs,
                    ...d
                });
                return
            }
            I({
                widgetId: e,
                size: f(C({
                    layout: i,
                    tileCount: u,
                    borderWidth: a,
                    padding: l,
                    previousContainerSize: n,
                    widgetMinMaxSizes: t
                })),
                minSize: f(t.minSize),
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
            } = e, o = E(l, r, s, t === m.IV.VERTICAL), u = x(i, r, l, n === m.IV.VERTICAL, o);
            return (0, h.UM)(u, {
                containerOffset: A(l, r),
                gapSize: r,
                tileCount: i,
                isVertical: n === m.IV.VERTICAL
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
        I({
            widgetId: e,
            size: f(c),
            minSize: f(t.minSize),
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
        null != n && I({
            widgetId: e,
            size: f(t.defaultSize),
            defaultSize: t.defaultSize,
            minSize: f(t.minSize),
            containerSpecs: t.containerSpecs,
            padding: i,
            widget: n,
            ...l
        })
    })
}