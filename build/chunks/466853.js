/** Chunk was on 38663 **/
/** chunk id: 466853, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(158954),
    s = n(311907),
    c = n(915089),
    u = n(961350),
    d = n(183555),
    f = n(735321),
    p = n(94343),
    g = n(789290),
    m = n(451395),
    b = n(716804),
    y = n(19333),
    O = n(557137),
    j = n(192),
    x = n(985018),
    h = n(856969);

function v(e) {
    let {
        index: t,
        widget: n,
        additionalManageWidgetMenuItems: i,
        children: o
    } = e, s = l.useRef(null), u = l.useRef(null), {
        registerManageWidgetButtonRef: d,
        manageFocusOnReorder: p
    } = (0, j.r)();
    l.useLayoutEffect(() => {
        let e = d(n.type);
        return e(s.current), () => e(null)
    }, [d, n.type]);
    let g = l.useMemo(() => {
            var e;
            return null != (e = n.id) ? e : (0, c.Ld)()
        }, [n.id]),
        {
            isDragging: b,
            dragSourcePosition: O
        } = (0, m.gY)({
            dragRef: s,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: g,
            itemPreviewProps: {
                widget: n
            },
            onReorder: f.R_,
            onEnd: () => p(n.type)
        }),
        v = null != O,
        _ = v && t < O,
        A = v && t > O;
    return (0, r.jsxs)("div", {
        ref: u,
        className: a()(h.wX, {
            [h.A]: _,
            [h.Ze]: A,
            [h.Id]: b
        }),
        "aria-label": x.intl.formatToPlainString(x.t.YLczh4, {
            positionNumber: t + 1
        }),
        children: [(0, r.jsx)(y.A, {
            buttonRef: s,
            widget: n,
            className: h.vn,
            additionalMenuItems: i
        }), o]
    })
}

function _(e) {
    let {
        userId: t,
        widget: n,
        children: l,
        disableInteraction: i,
        className: f,
        index: m,
        trailingContent: y,
        headerTitle: j,
        headerSubtitle: x,
        headerActionButtons: _,
        headerClassName: A,
        additionalManageWidgetMenuItems: I
    } = e, w = (0, c.GV)(), P = (0, s.bG)([u.default], () => u.default.getId() === t), E = (0, b.g)(), {
        trackUserProfileAction: S
    } = (0, d.NJ)(), T = (0, g.A)({
        widget: n,
        onAction: S
    }), N = E === n.type;
    (0, p.A)(T, N);
    let C = P && null != m && !i,
        D = () => (0, r.jsxs)("div", {
            className: a()(h.kL, f),
            children: [(0, r.jsx)(O.A, {
                userId: t,
                headingId: w,
                title: j,
                subtitle: x,
                actionButtons: _,
                widget: n,
                disableInteraction: i,
                className: A
            }), (0, r.jsxs)(o.Fmo, {
                children: [l, y]
            })]
        });
    return (0, r.jsx)("section", {
        ref: T,
        "aria-labelledby": w,
        children: C ? (0, r.jsx)(v, {
            index: null != m ? m : 0,
            widget: n,
            additionalManageWidgetMenuItems: I,
            children: D()
        }) : D()
    })
}