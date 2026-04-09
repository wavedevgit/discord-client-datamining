/** chunk id: 466853 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(158954),
    o = n(311907),
    c = n(915089),
    d = n(961350),
    u = n(183555),
    m = n(735321),
    h = n(94343),
    p = n(789290),
    g = n(451395),
    x = n(716804),
    f = n(19333),
    y = n(557137),
    v = n(192),
    j = n(985018),
    T = n(781371);

function E(e) {
    let {
        index: t,
        widget: n,
        additionalManageWidgetMenuItems: a,
        children: s,
        getWidth: o
    } = e, d = i.useRef(null), u = i.useRef(null), {
        registerManageWidgetButtonRef: h,
        manageFocusOnReorder: p
    } = (0, v.r)();
    i.useLayoutEffect(() => {
        let e = h(n.type);
        return e(d.current), () => e(null)
    }, [h, n.type]);
    let x = i.useMemo(() => n.id ?? (0, c.Ld)(), [n.id]),
        {
            isDragging: y,
            dragSourcePosition: E
        } = (0, g.gY)({
            dragRef: d,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: x,
            itemPreviewProps: {
                widget: n,
                getWidth: o
            },
            onReorder: m.R_,
            onEnd: () => p(n.type)
        }),
        A = null != E,
        I = A && t < E,
        N = A && t > E;
    return (0, l.jsxs)("div", {
        ref: u,
        className: r()(T.wX, {
            [T.A]: I,
            [T.Ze]: N,
            [T.Id]: y
        }),
        "aria-label": j.intl.formatToPlainString(j.t.YLczh4, {
            positionNumber: t + 1
        }),
        children: [(0, l.jsx)(f.A, {
            buttonRef: d,
            widget: n,
            className: T.vn,
            additionalMenuItems: a
        }), s]
    })
}

function A(e) {
    let {
        userId: t,
        widget: n,
        children: a,
        disableInteraction: m,
        className: g,
        index: f,
        trailingContent: v,
        headerTitle: j,
        headerSubtitle: A,
        headerActionButtons: I,
        headerClassName: N,
        additionalManageWidgetMenuItems: R
    } = e, _ = (0, c.GV)(), C = i.useRef(null), b = (0, o.bG)([d.default], () => d.default.getId() === t), w = (0, x.g)(), {
        trackUserProfileAction: P
    } = (0, u.NJ)(), D = (0, p.A)({
        widget: n,
        onAction: P
    }), L = w === n.type;
    (0, h.A)(D, L);
    let O = b && null != f && !m,
        G = () => (0, l.jsxs)("div", {
            ref: C,
            className: r()(T.kL, g),
            children: [(0, l.jsx)(y.A, {
                userId: t,
                headingId: _,
                title: j,
                subtitle: A,
                actionButtons: I,
                widget: n,
                disableInteraction: m,
                className: N
            }), (0, l.jsxs)(s.Fmo, {
                children: [a, v]
            })]
        });
    return (0, l.jsx)("section", {
        ref: D,
        "aria-labelledby": _,
        children: O ? (0, l.jsx)(E, {
            index: f ?? 0,
            widget: n,
            getWidth: () => C.current?.offsetWidth,
            additionalManageWidgetMenuItems: R,
            children: G()
        }) : G()
    })
}