/** chunk id: 466853 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(158954),
    o = n(311907),
    c = n(915089),
    d = n(961350),
    u = n(183555),
    m = n(735321),
    g = n(94343),
    p = n(789290),
    x = n(451395),
    f = n(716804),
    _ = n(19333),
    h = n(557137),
    A = n(192),
    I = n(985018),
    v = n(781371);

function j(e) {
    let {
        index: t,
        widget: n,
        additionalManageWidgetMenuItems: l,
        children: r,
        getWidth: o
    } = e, d = a.useRef(null), u = a.useRef(null), {
        registerManageWidgetButtonRef: g,
        manageFocusOnReorder: p
    } = (0, A.r)();
    a.useLayoutEffect(() => {
        let e = g(n.type);
        return e(d.current), () => e(null)
    }, [g, n.type]);
    let f = a.useMemo(() => n.id ?? (0, c.Ld)(), [n.id]),
        {
            isDragging: h,
            dragSourcePosition: j
        } = (0, x.gY)({
            dragRef: d,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: f,
            itemPreviewProps: {
                widget: n,
                getWidth: o
            },
            onReorder: m.R_,
            onEnd: () => p(n.type)
        }),
        E = null != j,
        T = E && t < j,
        N = E && t > j;
    return (0, i.jsxs)("div", {
        ref: u,
        className: s()(v.wX, {
            [v.A]: T,
            [v.Ze]: N,
            [v.Id]: h
        }),
        "aria-label": I.intl.formatToPlainString(I.t.YLczh4, {
            positionNumber: t + 1
        }),
        children: [(0, i.jsx)(_.A, {
            buttonRef: d,
            widget: n,
            className: v.vn,
            additionalMenuItems: l
        }), r]
    })
}

function E(e) {
    let {
        userId: t,
        widget: n,
        children: l,
        disableInteraction: m,
        className: x,
        index: _,
        trailingContent: A,
        headerTitle: I,
        headerSubtitle: E,
        headerActionButtons: T,
        headerClassName: N,
        additionalManageWidgetMenuItems: C
    } = e, b = (0, c.GV)(), S = a.useRef(null), y = (0, o.bG)([d.default], () => d.default.getId() === t), R = (0, f.g)(), {
        trackUserProfileAction: O
    } = (0, u.NJ)(), w = (0, p.A)({
        widget: n,
        onAction: O
    }), k = R === n.type;
    (0, g.A)(w, k);
    let L = y && null != _ && !m,
        D = () => (0, i.jsxs)("div", {
            ref: S,
            className: s()(v.kL, x),
            children: [(0, i.jsx)(h.A, {
                userId: t,
                headingId: b,
                title: I,
                subtitle: E,
                actionButtons: T,
                widget: n,
                disableInteraction: m,
                className: N
            }), (0, i.jsxs)(r.Fmo, {
                children: [l, A]
            })]
        });
    return (0, i.jsx)("section", {
        ref: w,
        "aria-labelledby": b,
        children: L ? (0, i.jsx)(j, {
            index: _ ?? 0,
            widget: n,
            getWidth: () => S.current?.offsetWidth,
            additionalManageWidgetMenuItems: C,
            children: D()
        }) : D()
    })
}