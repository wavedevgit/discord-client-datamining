/** chunk id: 466853 params = (module,exports,require) **/
n.d(t, {
    A: () => T
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
    g = n(735321),
    m = n(94343),
    x = n(789290),
    p = n(451395),
    f = n(716804),
    h = n(19333),
    _ = n(557137),
    A = n(192),
    I = n(985018),
    j = n(133178);

function v(e) {
    let {
        index: t,
        widget: n,
        additionalManageWidgetMenuItems: l,
        children: r,
        getWidth: o
    } = e, d = a.useRef(null), u = a.useRef(null), {
        registerManageWidgetButtonRef: m,
        manageFocusOnReorder: x
    } = (0, A.r)();
    a.useLayoutEffect(() => {
        let e = m(n.type);
        return e(d.current), () => e(null)
    }, [m, n.type]);
    let f = a.useMemo(() => n.id ?? (0, c.Ld)(), [n.id]),
        {
            isDragging: _,
            dragSourcePosition: v
        } = (0, p.gY)({
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
            onReorder: g.R_,
            onEnd: () => x(n.type)
        }),
        T = null != v,
        E = T && t < v,
        b = T && t > v;
    return (0, i.jsxs)("div", {
        ref: u,
        className: s()(j.wX, {
            [j.A]: E,
            [j.Ze]: b,
            [j.Id]: _
        }),
        "aria-label": I.intl.formatToPlainString(I.t.YLczh4, {
            positionNumber: t + 1
        }),
        children: [(0, i.jsx)(h.A, {
            buttonRef: d,
            widget: n,
            className: j.vn,
            additionalMenuItems: l
        }), r]
    })
}

function T(e) {
    let {
        userId: t,
        widget: n,
        children: l,
        disableInteraction: g,
        className: p,
        index: h,
        trailingContent: A,
        headerTitle: I,
        headerSubtitle: T,
        headerActionButtons: E,
        headerClassName: b,
        additionalManageWidgetMenuItems: C
    } = e, N = (0, c.GV)(), S = a.useRef(null), y = (0, o.bG)([d.default], () => d.default.getId() === t), R = (0, f.g)(), {
        trackUserProfileAction: k
    } = (0, u.NJ)(), w = (0, x.A)({
        widget: n,
        onAction: k
    }), O = R === n.type;
    (0, m.A)(w, O);
    let L = y && null != h && !g,
        P = () => (0, i.jsxs)("div", {
            ref: S,
            className: s()(j.kL, p),
            children: [(0, i.jsx)(_.A, {
                userId: t,
                headingId: N,
                title: I,
                subtitle: T,
                actionButtons: E,
                widget: n,
                disableInteraction: g,
                className: b
            }), (0, i.jsxs)(r.Fmo, {
                children: [l, A]
            })]
        });
    return (0, i.jsx)("section", {
        ref: w,
        "aria-labelledby": N,
        children: L ? (0, i.jsx)(v, {
            index: h ?? 0,
            widget: n,
            getWidth: () => S.current?.offsetWidth,
            additionalManageWidgetMenuItems: C,
            children: P()
        }) : P()
    })
}