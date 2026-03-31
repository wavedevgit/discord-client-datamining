/** chunk id: 451395 params = (module,exports,require) **/
n.d(t, {
    gY: () => m,
    jV: () => x,
    mG: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(131346),
    o = n(522437),
    d = n(352944),
    c = n(435371),
    u = n(397927),
    g = n(985018);

function m(e) {
    let {
        dragRef: t,
        dropRef: n,
        index: i,
        listType: a,
        itemId: s,
        itemType: c,
        itemPreviewProps: u,
        onReorder: g,
        onEnd: m,
        disableDefaultPreview: p = !0
    } = e, x = `${c}_${a}`, f = l.useCallback((e, t) => {
        g?.(e, t)
    }, [g]), [{
        isDragging: h
    }, _, A] = (0, r.i)({
        type: x,
        item: {
            id: s,
            index: i,
            itemType: c,
            itemPreviewProps: u
        },
        collect: e => ({
            isDragging: e.isDragging()
        }),
        end: m
    });
    l.useEffect(() => {
        p && A((0, d.n)(), {
            captureDraggingState: !0
        })
    }, [A, p]);
    let [{
        dragSourcePosition: I
    }, j] = (0, o.H)({
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
    return l.useLayoutEffect(() => (_(t), j(n), () => {
        j(null), _(null)
    }), [_, t, j, n]), {
        isDragging: h,
        dragSourcePosition: I
    }
}
let p = l.memo(function(e) {
    let {
        index: t,
        className: n,
        draggingClassName: a,
        dropBeforeClassName: r,
        dropAfterClassName: o,
        "aria-label": d,
        children: c,
        ...u
    } = e, g = l.useRef(null), {
        isDragging: p,
        dragSourcePosition: x
    } = m({
        dragRef: g,
        dropRef: g,
        index: t,
        ...u
    }), f = null != x, h = f && t < x, _ = f && t > x;
    return (0, i.jsx)("div", {
        ref: g,
        className: s()(n, p && a, h && r, _ && o),
        "aria-label": d,
        children: c
    })
});

function x(e) {
    let {
        buttonRef: t,
        "aria-label": n,
        iconSize: l = "sm",
        ...a
    } = e;
    return (0, i.jsx)(c.un, {
        body: g.intl.format(g.t["zvln/l"], {
            emphasizeHook: e => (0, i.jsx)("strong", {
                children: e
            })
        }),
        ariaHidden: !0,
        children: (0, i.jsx)(u.DUT, {
            innerRef: t,
            "aria-label": n ?? g.intl.string(g.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...a,
            children: (0, i.jsx)(u.WP0, {
                size: l,
                color: "currentColor"
            })
        })
    })
}