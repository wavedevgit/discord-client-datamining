/** chunk id: 451395 params = (module,exports,require) **/
n.d(t, {
    gY: () => g,
    jV: () => x,
    mG: () => f
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
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
        listType: a,
        itemId: s,
        itemType: d,
        itemPreviewProps: u,
        onReorder: m,
        onEnd: g,
        disableDefaultPreview: f = !0
    } = e, x = `${d}_${a}`, p = l.useCallback((e, t) => {
        m?.(e, t)
    }, [m]), [{
        isDragging: _
    }, I, h] = (0, r.i)({
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
    l.useEffect(() => {
        f && h((0, c.n)(), {
            captureDraggingState: !0
        })
    }, [h, f]);
    let [{
        dragSourcePosition: A
    }, E] = (0, o.H)({
        accept: x,
        drop: e => {
            let t = e.index;
            t !== i && (p(t, i), e.index = i)
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
    return l.useLayoutEffect(() => (I(t), E(n), () => {
        E(null), I(null)
    }), [I, t, E, n]), {
        isDragging: _,
        dragSourcePosition: A
    }
}
let f = l.memo(function(e) {
    let {
        index: t,
        className: n,
        draggingClassName: a,
        dropBeforeClassName: r,
        dropAfterClassName: o,
        "aria-label": c,
        children: d,
        ...u
    } = e, m = l.useRef(null), {
        isDragging: f,
        dragSourcePosition: x
    } = g({
        dragRef: m,
        dropRef: m,
        index: t,
        ...u
    }), p = null != x, _ = p && t < x, I = p && t > x;
    return (0, i.jsx)("div", {
        ref: m,
        className: s()(n, f && a, _ && r, I && o),
        "aria-label": c,
        children: d
    })
});

function x(e) {
    let {
        buttonRef: t,
        "aria-label": n,
        iconSize: l = "sm",
        ...a
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
            ...a,
            children: (0, i.jsx)(u.WP0, {
                size: l,
                color: "currentColor"
            })
        })
    })
}