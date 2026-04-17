/** chunk id: 451395 params = (module,exports,require) **/
t.d(n, {
    gY: () => p,
    jV: () => g,
    mG: () => A
});
var i = t(627968),
    a = t(64700),
    l = t(503698),
    r = t.n(l),
    d = t(131346),
    s = t(522437),
    o = t(352944),
    c = t(435371),
    u = t(397927),
    _ = t(985018);

function p(e) {
    let {
        dragRef: n,
        dropRef: t,
        index: i,
        listType: l,
        itemId: r,
        itemType: c,
        itemPreviewProps: u,
        onReorder: _,
        onEnd: p,
        disableDefaultPreview: A = !0
    } = e, g = `${c}_${l}`, f = a.useCallback((e, n) => {
        _?.(e, n)
    }, [_]), [{
        isDragging: h
    }, m, x] = (0, d.i)({
        type: g,
        item: {
            id: r,
            index: i,
            itemType: c,
            itemPreviewProps: u
        },
        collect: e => ({
            isDragging: e.isDragging()
        }),
        end: p
    });
    a.useEffect(() => {
        A && x((0, o.n)(), {
            captureDraggingState: !0
        })
    }, [x, A]);
    let [{
        dragSourcePosition: I
    }, b] = (0, s.H)({
        accept: g,
        drop: e => {
            let n = e.index;
            n !== i && (f(n, i), e.index = i)
        },
        collect: e => {
            let n = e.getItem(),
                t = null;
            return null != n && e.isOver({
                shallow: !0
            }) && e.canDrop() && (t = n.index), {
                dragSourcePosition: t
            }
        }
    });
    return a.useLayoutEffect(() => (m(n), b(t), () => {
        b(null), m(null)
    }), [m, n, b, t]), {
        isDragging: h,
        dragSourcePosition: I
    }
}
let A = a.memo(function(e) {
    let {
        index: n,
        className: t,
        draggingClassName: l,
        dropBeforeClassName: d,
        dropAfterClassName: s,
        "aria-label": o,
        children: c,
        ...u
    } = e, _ = a.useRef(null), {
        isDragging: A,
        dragSourcePosition: g
    } = p({
        dragRef: _,
        dropRef: _,
        index: n,
        ...u
    }), f = null != g, h = f && n < g, m = f && n > g;
    return (0, i.jsx)("div", {
        ref: _,
        className: r()(t, A && l, h && d, m && s),
        "aria-label": o,
        children: c
    })
});

function g(e) {
    let {
        buttonRef: n,
        "aria-label": t,
        iconSize: a = "sm",
        ...l
    } = e;
    return (0, i.jsx)(c.un, {
        body: _.intl.format(_.t["zvln/l"], {
            emphasizeHook: e => (0, i.jsx)("strong", {
                children: e
            })
        }),
        ariaHidden: !0,
        children: (0, i.jsx)(u.DUT, {
            innerRef: n,
            "aria-label": t ?? _.intl.string(_.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...l,
            children: (0, i.jsx)(u.WP0, {
                size: a,
                color: "currentColor"
            })
        })
    })
}