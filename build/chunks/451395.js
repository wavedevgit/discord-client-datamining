/** chunk id: 451395 params = (module,exports,require) **/
n.d(t, {
    gY: () => m,
    jV: () => g,
    mG: () => h
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(131346),
    c = n(522437),
    o = n(352944),
    d = n(435371),
    u = n(397927),
    p = n(985018);

function m(e) {
    let {
        dragRef: t,
        dropRef: n,
        index: a,
        listType: l,
        itemId: s,
        itemType: d,
        itemPreviewProps: u,
        onReorder: p,
        onEnd: m,
        disableDefaultPreview: h = !0
    } = e, g = `${d}_${l}`, _ = i.useCallback((e, t) => {
        p?.(e, t)
    }, [p]), [{
        isDragging: A
    }, f, x] = (0, r.i)({
        type: g,
        item: {
            id: s,
            index: a,
            itemType: d,
            itemPreviewProps: u
        },
        collect: e => ({
            isDragging: e.isDragging()
        }),
        end: m
    });
    i.useEffect(() => {
        h && x((0, o.n)(), {
            captureDraggingState: !0
        })
    }, [x, h]);
    let [{
        dragSourcePosition: b
    }, I] = (0, c.H)({
        accept: g,
        drop: e => {
            let t = e.index;
            t !== a && (_(t, a), e.index = a)
        },
        collect: e => {
            let t = e.getItem(),
                n = null;
            return null != t && e.isOver({
                shallow: !0
            }) && e.canDrop() && (n = t.index), {
                dragSourcePosition: n
            }
        }
    });
    return i.useLayoutEffect(() => (f(t), I(n), () => {
        I(null), f(null)
    }), [f, t, I, n]), {
        isDragging: A,
        dragSourcePosition: b
    }
}
let h = i.memo(function(e) {
    let {
        index: t,
        className: n,
        draggingClassName: l,
        dropBeforeClassName: r,
        dropAfterClassName: c,
        "aria-label": o,
        children: d,
        ...u
    } = e, p = i.useRef(null), {
        isDragging: h,
        dragSourcePosition: g
    } = m({
        dragRef: p,
        dropRef: p,
        index: t,
        ...u
    }), _ = null != g, A = _ && t < g, f = _ && t > g;
    return (0, a.jsx)("div", {
        ref: p,
        className: s()(n, h && l, A && r, f && c),
        "aria-label": o,
        children: d
    })
});

function g(e) {
    let {
        buttonRef: t,
        "aria-label": n,
        iconSize: i = "sm",
        ...l
    } = e;
    return (0, a.jsx)(d.un, {
        body: p.intl.format(p.t["zvln/l"], {
            emphasizeHook: e => (0, a.jsx)("strong", {
                children: e
            })
        }),
        ariaHidden: !0,
        children: (0, a.jsx)(u.DUT, {
            innerRef: t,
            "aria-label": n ?? p.intl.string(p.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...l,
            children: (0, a.jsx)(u.WP0, {
                size: i,
                color: "currentColor"
            })
        })
    })
}