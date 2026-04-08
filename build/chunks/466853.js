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
    d = n(915089),
    c = n(961350),
    u = n(183555),
    g = n(735321),
    m = n(94343),
    x = n(789290),
    f = n(451395),
    p = n(716804),
    h = n(19333),
    _ = n(557137),
    A = n(192),
    I = n(985018),
    j = n(781371);

function v(e) {
    let {
        index: t,
        widget: n,
        additionalManageWidgetMenuItems: l,
        children: r,
        getWidth: o
    } = e, c = a.useRef(null), u = a.useRef(null), {
        registerManageWidgetButtonRef: m,
        manageFocusOnReorder: x
    } = (0, A.r)();
    a.useLayoutEffect(() => {
        let e = m(n.type);
        return e(c.current), () => e(null)
    }, [m, n.type]);
    let p = a.useMemo(() => n.id ?? (0, d.Ld)(), [n.id]),
        {
            isDragging: _,
            dragSourcePosition: v
        } = (0, f.gY)({
            dragRef: c,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: p,
            itemPreviewProps: {
                widget: n,
                getWidth: o
            },
            onReorder: g.R_,
            onEnd: () => x(n.type)
        }),
        E = null != v,
        T = E && t < v,
        b = E && t > v;
    return (0, i.jsxs)("div", {
        ref: u,
        className: s()(j.wX, {
            [j.A]: T,
            [j.Ze]: b,
            [j.Id]: _
        }),
        "aria-label": I.intl.formatToPlainString(I.t.YLczh4, {
            positionNumber: t + 1
        }),
        children: [(0, i.jsx)(h.A, {
            buttonRef: c,
            widget: n,
            className: j.vn,
            additionalMenuItems: l
        }), r]
    })
}

function E(e) {
    let {
        userId: t,
        widget: n,
        children: l,
        disableInteraction: g,
        className: f,
        index: h,
        trailingContent: A,
        headerTitle: I,
        headerSubtitle: E,
        headerActionButtons: T,
        headerClassName: b,
        additionalManageWidgetMenuItems: C
    } = e, S = (0, d.GV)(), N = a.useRef(null), y = (0, o.bG)([c.default], () => c.default.getId() === t), R = (0, p.g)(), {
        trackUserProfileAction: k
    } = (0, u.NJ)(), O = (0, x.A)({
        widget: n,
        onAction: k
    }), w = R === n.type;
    (0, m.A)(O, w);
    let L = y && null != h && !g,
        P = () => (0, i.jsxs)("div", {
            ref: N,
            className: s()(j.kL, f),
            children: [(0, i.jsx)(_.A, {
                userId: t,
                headingId: S,
                title: I,
                subtitle: E,
                actionButtons: T,
                widget: n,
                disableInteraction: g,
                className: b
            }), (0, i.jsxs)(r.Fmo, {
                children: [l, A]
            })]
        });
    return (0, i.jsx)("section", {
        ref: O,
        "aria-labelledby": S,
        children: L ? (0, i.jsx)(v, {
            index: h ?? 0,
            widget: n,
            getWidth: () => N.current?.offsetWidth,
            additionalManageWidgetMenuItems: C,
            children: P()
        }) : P()
    })
}