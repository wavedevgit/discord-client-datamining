/** chunk id: 451395 params = (module,exports,require) **/
n.d(t, {
    gY: () => m,
    jV: () => g,
    mG: () => p
});
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(131346),
    d = n(522437),
    o = n(352944),
    c = n(435371),
    u = n(397927),
    _ = n(985018);

function m(e) {
    let {
        dragRef: t,
        dropRef: n,
        index: l,
        listType: r,
        itemId: i,
        itemType: c,
        itemPreviewProps: u,
        onReorder: _,
        onEnd: m,
        disableDefaultPreview: p = !0
    } = e, g = `${c}_${r}`, h = a.useCallback((e, t) => {
        _?.(e, t)
    }, [_]), [{
        isDragging: x
    }, A, v] = (0, s.i)({
        type: g,
        item: {
            id: i,
            index: l,
            itemType: c,
            itemPreviewProps: u
        },
        collect: e => ({
            isDragging: e.isDragging()
        }),
        end: m
    });
    a.useEffect(() => {
        p && v((0, o.n)(), {
            captureDraggingState: !0
        })
    }, [v, p]);
    let [{
        dragSourcePosition: f
    }, b] = (0, d.H)({
        accept: g,
        drop: e => {
            let t = e.index;
            t !== l && (h(t, l), e.index = l)
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
    return a.useLayoutEffect(() => (A(t), b(n), () => {
        b(null), A(null)
    }), [A, t, b, n]), {
        isDragging: x,
        dragSourcePosition: f
    }
}
let p = a.memo(function(e) {
    let {
        index: t,
        className: n,
        draggingClassName: r,
        dropBeforeClassName: s,
        dropAfterClassName: d,
        "aria-label": o,
        children: c,
        ...u
    } = e, _ = a.useRef(null), {
        isDragging: p,
        dragSourcePosition: g
    } = m({
        dragRef: _,
        dropRef: _,
        index: t,
        ...u
    }), h = null != g, x = h && t < g, A = h && t > g;
    return (0, l.jsx)("div", {
        ref: _,
        className: i()(n, p && r, x && s, A && d),
        "aria-label": o,
        children: c
    })
});

function g(e) {
    let {
        buttonRef: t,
        "aria-label": n,
        iconSize: a = "sm",
        ...r
    } = e;
    return (0, l.jsx)(c.un, {
        body: _.intl.format(_.t["zvln/l"], {
            emphasizeHook: e => (0, l.jsx)("strong", {
                children: e
            })
        }),
        ariaHidden: !0,
        children: (0, l.jsx)(u.DUT, {
            innerRef: t,
            "aria-label": n ?? _.intl.string(_.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...r,
            children: (0, l.jsx)(u.WP0, {
                size: a,
                color: "currentColor"
            })
        })
    })
}