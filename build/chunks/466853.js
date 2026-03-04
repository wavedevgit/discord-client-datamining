/** chunk id: 466853, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(915089),
    d = n(961350),
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
    j = n(856969);

function v(e) {
    let {
        index: t,
        widget: n,
        additionalManageWidgetMenuItems: a,
        children: r
    } = e, o = l.useRef(null), d = l.useRef(null), {
        registerManageWidgetButtonRef: u,
        manageFocusOnReorder: m
    } = (0, A.r)();
    l.useLayoutEffect(() => {
        let e = u(n.type);
        return e(o.current), () => e(null)
    }, [u, n.type]);
    let x = l.useMemo(() => n.id ?? (0, c.Ld)(), [n.id]),
        {
            isDragging: p,
            dragSourcePosition: _
        } = (0, f.gY)({
            dragRef: o,
            dropRef: d,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: x,
            itemPreviewProps: {
                widget: n
            },
            onReorder: g.R_,
            onEnd: () => m(n.type)
        }),
        v = null != _,
        E = v && t < _,
        T = v && t > _;
    return (0, i.jsxs)("div", {
        ref: d,
        className: s()(j.wX, {
            [j.A]: E,
            [j.Ze]: T,
            [j.Id]: p
        }),
        "aria-label": I.intl.formatToPlainString(I.t.YLczh4, {
            positionNumber: t + 1
        }),
        children: [(0, i.jsx)(h.A, {
            buttonRef: o,
            widget: n,
            className: j.vn,
            additionalMenuItems: a
        }), r]
    })
}

function E(e) {
    let {
        userId: t,
        widget: n,
        children: l,
        disableInteraction: a,
        className: g,
        index: f,
        trailingContent: h,
        headerTitle: A,
        headerSubtitle: I,
        headerActionButtons: E,
        headerClassName: T,
        additionalManageWidgetMenuItems: b
    } = e, N = (0, c.GV)(), S = (0, o.bG)([d.default], () => d.default.getId() === t), y = (0, p.g)(), {
        trackUserProfileAction: C
    } = (0, u.NJ)(), R = (0, x.A)({
        widget: n,
        onAction: C
    }), k = y === n.type;
    (0, m.A)(R, k);
    let w = S && null != f && !a,
        L = () => (0, i.jsxs)("div", {
            className: s()(j.kL, g),
            children: [(0, i.jsx)(_.A, {
                userId: t,
                headingId: N,
                title: A,
                subtitle: I,
                actionButtons: E,
                widget: n,
                disableInteraction: a,
                className: T
            }), (0, i.jsxs)(r.Fmo, {
                children: [l, h]
            })]
        });
    return (0, i.jsx)("section", {
        ref: R,
        "aria-labelledby": N,
        children: w ? (0, i.jsx)(v, {
            index: f ?? 0,
            widget: n,
            additionalManageWidgetMenuItems: b,
            children: L()
        }) : L()
    })
}