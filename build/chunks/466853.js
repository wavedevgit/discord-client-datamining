/** chunk id: 466853 params = (module,exports,require) **/
n.d(t, {
    A: () => v
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
    p = n(789290),
    x = n(451395),
    f = n(716804),
    h = n(19333),
    _ = n(557137),
    A = n(192),
    I = n(985018),
    j = n(781371);

function E(e) {
    let {
        index: t,
        widget: n,
        additionalManageWidgetMenuItems: l,
        children: r,
        getWidth: o
    } = e, d = a.useRef(null), u = a.useRef(null), {
        registerManageWidgetButtonRef: m,
        manageFocusOnReorder: p
    } = (0, A.r)();
    a.useLayoutEffect(() => {
        let e = m(n.type);
        return e(d.current), () => e(null)
    }, [m, n.type]);
    let f = a.useMemo(() => n.id ?? (0, c.Ld)(), [n.id]),
        {
            isDragging: _,
            dragSourcePosition: E
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
            onReorder: g.R_,
            onEnd: () => p(n.type)
        }),
        v = null != E,
        T = v && t < E,
        b = v && t > E;
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
            buttonRef: d,
            widget: n,
            className: j.vn,
            additionalMenuItems: l
        }), r]
    })
}

function v(e) {
    let {
        userId: t,
        widget: n,
        children: l,
        disableInteraction: g,
        className: x,
        index: h,
        trailingContent: A,
        headerTitle: I,
        headerSubtitle: v,
        headerActionButtons: T,
        headerClassName: b,
        additionalManageWidgetMenuItems: C
    } = e, S = (0, c.GV)(), N = a.useRef(null), y = (0, o.bG)([d.default], () => d.default.getId() === t), R = (0, f.g)(), {
        trackUserProfileAction: O
    } = (0, u.NJ)(), k = (0, p.A)({
        widget: n,
        onAction: O
    }), L = R === n.type;
    (0, m.A)(k, L);
    let w = y && null != h && !g,
        P = () => (0, i.jsxs)("div", {
            ref: N,
            className: s()(j.kL, x),
            children: [(0, i.jsx)(_.A, {
                userId: t,
                headingId: S,
                title: I,
                subtitle: v,
                actionButtons: T,
                widget: n,
                disableInteraction: g,
                className: b
            }), (0, i.jsxs)(r.Fmo, {
                children: [l, A]
            })]
        });
    return (0, i.jsx)("section", {
        ref: k,
        "aria-labelledby": S,
        children: w ? (0, i.jsx)(E, {
            index: h ?? 0,
            widget: n,
            getWidth: () => N.current?.offsetWidth,
            additionalManageWidgetMenuItems: C,
            children: P()
        }) : P()
    })
}