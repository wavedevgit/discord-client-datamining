/** chunk id: 466853 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    d = n(915089),
    c = n(961350),
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
        additionalManageWidgetMenuItems: a,
        children: r,
        getWidth: o
    } = e, c = l.useRef(null), u = l.useRef(null), {
        registerManageWidgetButtonRef: m,
        manageFocusOnReorder: p
    } = (0, A.r)();
    l.useLayoutEffect(() => {
        let e = m(n.type);
        return e(c.current), () => e(null)
    }, [m, n.type]);
    let f = l.useMemo(() => n.id ?? (0, d.Ld)(), [n.id]),
        {
            isDragging: _,
            dragSourcePosition: E
        } = (0, x.gY)({
            dragRef: c,
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
            buttonRef: c,
            widget: n,
            className: j.vn,
            additionalMenuItems: a
        }), r]
    })
}

function v(e) {
    let {
        userId: t,
        widget: n,
        children: a,
        disableInteraction: g,
        className: x,
        index: h,
        trailingContent: A,
        headerTitle: I,
        headerSubtitle: v,
        headerActionButtons: T,
        headerClassName: b,
        additionalManageWidgetMenuItems: C
    } = e, S = (0, d.GV)(), N = l.useRef(null), y = (0, o.bG)([c.default], () => c.default.getId() === t), R = (0, f.g)(), {
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
                children: [a, A]
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