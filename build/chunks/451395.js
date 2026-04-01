/** chunk id: 451395 params = (module,exports,require) **/
n.d(t, {
    gY: () => g,
    jV: () => x,
    mG: () => p
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(131346),
    o = n(522437),
    c = n(352944),
    d = n(435371),
    u = n(397927),
    m = n(985018);

function g(e) {
    let {
        dragRef: t,
        dropRef: n,
        index: i,
        listType: l,
        itemId: s,
        itemType: d,
        itemPreviewProps: u,
        onReorder: m,
        onEnd: g,
        disableDefaultPreview: p = !0
    } = e, x = `${d}_${l}`, f = a.useCallback((e, t) => {
        m?.(e, t)
    }, [m]), [{
        isDragging: _
    }, h, A] = (0, r.i)({
        type: x,
        item: {
            id: s,
            index: i,
            itemType: d,
            itemPreviewProps: u
        },
        collect: e => ({
            isDragging: e.isDragging()
        }),
        end: g
    });
    a.useEffect(() => {
        p && A((0, c.n)(), {
            captureDraggingState: !0
        })
    }, [A, p]);
    let [{
        dragSourcePosition: I
    }, v] = (0, o.H)({
        accept: x,
        drop: e => {
            let t = e.index;
            t !== i && (f(t, i), e.index = i)
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
    return a.useLayoutEffect(() => (h(t), v(n), () => {
        v(null), h(null)
    }), [h, t, v, n]), {
        isDragging: _,
        dragSourcePosition: I
    }
}
let p = a.memo(function(e) {
    let {
        index: t,
        className: n,
        draggingClassName: l,
        dropBeforeClassName: r,
        dropAfterClassName: o,
        "aria-label": c,
        children: d,
        ...u
    } = e, m = a.useRef(null), {
        isDragging: p,
        dragSourcePosition: x
    } = g({
        dragRef: m,
        dropRef: m,
        index: t,
        ...u
    }), f = null != x, _ = f && t < x, h = f && t > x;
    return (0, i.jsx)("div", {
        ref: m,
        className: s()(n, p && l, _ && r, h && o),
        "aria-label": c,
        children: d
    })
});

function x(e) {
    let {
        buttonRef: t,
        "aria-label": n,
        iconSize: a = "sm",
        ...l
    } = e;
    return (0, i.jsx)(d.un, {
        body: m.intl.format(m.t["zvln/l"], {
            emphasizeHook: e => (0, i.jsx)("strong", {
                children: e
            })
        }),
        ariaHidden: !0,
        children: (0, i.jsx)(u.DUT, {
            innerRef: t,
            "aria-label": n ?? m.intl.string(m.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...l,
            children: (0, i.jsx)(u.WP0, {
                size: a,
                color: "currentColor"
            })
        })
    })
}