/** chunk id: 451395 params = (module,exports,require) **/
n.d(t, {
    gY: () => p,
    jV: () => h,
    mG: () => g
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(131346),
    c = n(522437),
    o = n(352944),
    u = n(435371),
    d = n(397927),
    m = n(985018);

function p(e) {
    let {
        dragRef: t,
        dropRef: n,
        index: l,
        listType: i,
        itemId: r,
        itemType: u,
        itemPreviewProps: d,
        onReorder: m,
        onEnd: p,
        disableDefaultPreview: g = !0
    } = e, h = `${u}_${i}`, T = a.useCallback((e, t) => {
        m?.(e, t)
    }, [m]), [{
        isDragging: y
    }, x, E] = (0, s.i)({
        type: h,
        item: {
            id: r,
            index: l,
            itemType: u,
            itemPreviewProps: d
        },
        collect: e => ({
            isDragging: e.isDragging()
        }),
        end: p
    });
    a.useEffect(() => {
        g && E((0, o.n)(), {
            captureDraggingState: !0
        })
    }, [E, g]);
    let [{
        dragSourcePosition: f
    }, v] = (0, c.H)({
        accept: h,
        drop: e => {
            let t = e.index;
            t !== l && (T(t, l), e.index = l)
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
    return a.useLayoutEffect(() => (x(t), v(n), () => {
        v(null), x(null)
    }), [x, t, v, n]), {
        isDragging: y,
        dragSourcePosition: f
    }
}
let g = a.memo(function(e) {
    let {
        index: t,
        className: n,
        draggingClassName: i,
        dropBeforeClassName: s,
        dropAfterClassName: c,
        "aria-label": o,
        children: u,
        ...d
    } = e, m = a.useRef(null), {
        isDragging: g,
        dragSourcePosition: h
    } = p({
        dragRef: m,
        dropRef: m,
        index: t,
        ...d
    }), T = null != h, y = T && t < h, x = T && t > h;
    return (0, l.jsx)("div", {
        ref: m,
        className: r()(n, g && i, y && s, x && c),
        "aria-label": o,
        children: u
    })
});

function h(e) {
    let {
        buttonRef: t,
        "aria-label": n,
        iconSize: a = "sm",
        ...i
    } = e;
    return (0, l.jsx)(u.un, {
        body: m.intl.format(m.t["zvln/l"], {
            emphasizeHook: e => (0, l.jsx)("strong", {
                children: e
            })
        }),
        ariaHidden: !0,
        children: (0, l.jsx)(d.DUT, {
            innerRef: t,
            "aria-label": n ?? m.intl.string(m.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...i,
            children: (0, l.jsx)(d.WP0, {
                size: a,
                color: "currentColor"
            })
        })
    })
}