/** chunk id: 451395 params = (module,exports,require) **/
n.d(t, {
    gY: () => m,
    jV: () => p,
    mG: () => x
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
        disableDefaultPreview: x = !0
    } = e, p = `${d}_${l}`, f = a.useCallback((e, t) => {
        g?.(e, t)
    }, [g]), [{
        isDragging: h
    }, _, A] = (0, r.i)({
        type: p,
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
        x && A((0, c.n)(), {
            captureDraggingState: !0
        })
    }, [A, x]);
    let [{
        dragSourcePosition: I
    }, j] = (0, o.H)({
        accept: p,
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
let x = a.memo(function(e) {
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
        isDragging: x,
        dragSourcePosition: p
    } = m({
        dragRef: g,
        dropRef: g,
        index: t,
        ...u
    }), f = null != p, h = f && t < p, _ = f && t > p;
    return (0, i.jsx)("div", {
        ref: g,
        className: s()(n, x && l, h && r, _ && o),
        "aria-label": c,
        children: d
    })
});

function p(e) {
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