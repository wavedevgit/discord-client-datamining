/** chunk id: 451395 params = (module,exports,require) **/
n.d(t, {
    gY: () => m,
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
    g = n(985018);

function m(e) {
    let {
        dragRef: t,
        dropRef: n,
        index: i,
        listType: l,
        itemId: s,
        itemType: d,
        itemPreviewProps: u,
        onReorder: g,
        onEnd: m,
        disableDefaultPreview: p = !0
    } = e, x = `${d}_${l}`, f = a.useCallback((e, t) => {
        g?.(e, t)
    }, [g]), [{
        isDragging: h
    }, _, A] = (0, r.i)({
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
        end: m
    });
    a.useEffect(() => {
        p && A((0, c.n)(), {
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
    return a.useLayoutEffect(() => (_(t), j(n), () => {
        j(null), _(null)
    }), [_, t, j, n]), {
        isDragging: h,
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
    } = e, g = a.useRef(null), {
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
        className: s()(n, p && l, h && r, _ && o),
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
            ...l,
            children: (0, i.jsx)(u.WP0, {
                size: a,
                color: "currentColor"
            })
        })
    })
}