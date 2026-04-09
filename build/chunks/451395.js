/** chunk id: 451395 params = (module,exports,require) **/
t.d(n, {
    gY: () => p,
    jV: () => g,
    mG: () => A
});
var i = t(627968),
    a = t(64700),
    r = t(503698),
    l = t.n(r),
    o = t(131346),
    s = t(522437),
    d = t(352944),
    c = t(435371),
    _ = t(397927),
    u = t(985018);

function p(e) {
    let {
        dragRef: n,
        dropRef: t,
        index: i,
        listType: r,
        itemId: l,
        itemType: c,
        itemPreviewProps: _,
        onReorder: u,
        onEnd: p,
        disableDefaultPreview: A = !0
    } = e, g = `${c}_${r}`, m = a.useCallback((e, n) => {
        u?.(e, n)
    }, [u]), [{
        isDragging: f
    }, h, x] = (0, o.i)({
        type: g,
        item: {
            id: l,
            index: i,
            itemType: c,
            itemPreviewProps: _
        },
        collect: e => ({
            isDragging: e.isDragging()
        }),
        end: p
    });
    a.useEffect(() => {
        A && x((0, d.n)(), {
            captureDraggingState: !0
        })
    }, [x, A]);
    let [{
        dragSourcePosition: I
    }, b] = (0, s.H)({
        accept: g,
        drop: e => {
            let n = e.index;
            n !== i && (m(n, i), e.index = i)
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
    return a.useLayoutEffect(() => (h(n), b(t), () => {
        b(null), h(null)
    }), [h, n, b, t]), {
        isDragging: f,
        dragSourcePosition: I
    }
}
let A = a.memo(function(e) {
    let {
        index: n,
        className: t,
        draggingClassName: r,
        dropBeforeClassName: o,
        dropAfterClassName: s,
        "aria-label": d,
        children: c,
        ..._
    } = e, u = a.useRef(null), {
        isDragging: A,
        dragSourcePosition: g
    } = p({
        dragRef: u,
        dropRef: u,
        index: n,
        ..._
    }), m = null != g, f = m && n < g, h = m && n > g;
    return (0, i.jsx)("div", {
        ref: u,
        className: l()(t, A && r, f && o, h && s),
        "aria-label": d,
        children: c
    })
});

function g(e) {
    let {
        buttonRef: n,
        "aria-label": t,
        iconSize: a = "sm",
        ...r
    } = e;
    return (0, i.jsx)(c.un, {
        body: u.intl.format(u.t["zvln/l"], {
            emphasizeHook: e => (0, i.jsx)("strong", {
                children: e
            })
        }),
        ariaHidden: !0,
        children: (0, i.jsx)(_.DUT, {
            innerRef: n,
            "aria-label": t ?? u.intl.string(u.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...r,
            children: (0, i.jsx)(_.WP0, {
                size: a,
                color: "currentColor"
            })
        })
    })
}