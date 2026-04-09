/** chunk id: 466853 params = (module,exports,require) **/
n.d(t, {
    A: () => b
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
    h = n(789290),
    x = n(451395),
    p = n(716804),
    f = n(19333),
    A = n(557137),
    _ = n(192),
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
        manageFocusOnReorder: h
    } = (0, _.r)();
    a.useLayoutEffect(() => {
        let e = m(n.type);
        return e(c.current), () => e(null)
    }, [m, n.type]);
    let p = a.useMemo(() => n.id ?? (0, d.Ld)(), [n.id]),
        {
            isDragging: A,
            dragSourcePosition: v
        } = (0, x.gY)({
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
            onEnd: () => h(n.type)
        }),
        b = null != v,
        S = b && t < v,
        y = b && t > v;
    return (0, i.jsxs)("div", {
        ref: u,
        className: s()(j.wX, {
            [j.A]: S,
            [j.Ze]: y,
            [j.Id]: A
        }),
        "aria-label": I.intl.formatToPlainString(I.t.YLczh4, {
            positionNumber: t + 1
        }),
        children: [(0, i.jsx)(f.A, {
            buttonRef: c,
            widget: n,
            className: j.vn,
            additionalMenuItems: l
        }), r]
    })
}

function b(e) {
    let {
        userId: t,
        widget: n,
        children: l,
        disableInteraction: g,
        className: x,
        index: f,
        trailingContent: _,
        headerTitle: I,
        headerSubtitle: b,
        headerActionButtons: S,
        headerClassName: y,
        additionalManageWidgetMenuItems: E
    } = e, C = (0, d.GV)(), T = a.useRef(null), w = (0, o.bG)([c.default], () => c.default.getId() === t), N = (0, p.g)(), {
        trackUserProfileAction: k
    } = (0, u.NJ)(), R = (0, h.A)({
        widget: n,
        onAction: k
    }), L = N === n.type;
    (0, m.A)(R, L);
    let O = w && null != f && !g,
        M = () => (0, i.jsxs)("div", {
            ref: T,
            className: s()(j.kL, x),
            children: [(0, i.jsx)(A.A, {
                userId: t,
                headingId: C,
                title: I,
                subtitle: b,
                actionButtons: S,
                widget: n,
                disableInteraction: g,
                className: y
            }), (0, i.jsxs)(r.Fmo, {
                children: [l, _]
            })]
        });
    return (0, i.jsx)("section", {
        ref: R,
        "aria-labelledby": C,
        children: O ? (0, i.jsx)(v, {
            index: f ?? 0,
            widget: n,
            getWidth: () => T.current?.offsetWidth,
            additionalManageWidgetMenuItems: E,
            children: M()
        }) : M()
    })
}