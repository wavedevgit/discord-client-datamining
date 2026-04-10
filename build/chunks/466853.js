/** chunk id: 466853 params = (module,exports,require) **/
n.d(t, {
    A: () => w
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(311907),
    d = n(915089),
    c = n(961350),
    u = n(183555),
    m = n(735321),
    h = n(94343),
    x = n(789290),
    g = n(451395),
    f = n(716804),
    v = n(19333),
    j = n(557137),
    p = n(192),
    A = n(985018),
    y = n(133178);

function N(e) {
    let {
        index: t,
        widget: n,
        additionalManageWidgetMenuItems: i,
        children: s,
        getWidth: o
    } = e, c = l.useRef(null), u = l.useRef(null), {
        registerManageWidgetButtonRef: h,
        manageFocusOnReorder: x
    } = (0, p.r)();
    l.useLayoutEffect(() => {
        let e = h(n.type);
        return e(c.current), () => e(null)
    }, [h, n.type]);
    let f = l.useMemo(() => n.id ?? (0, d.Ld)(), [n.id]),
        {
            isDragging: j,
            dragSourcePosition: N
        } = (0, g.gY)({
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
            onReorder: m.R_,
            onEnd: () => x(n.type)
        }),
        w = null != N,
        b = w && t < N,
        I = w && t > N;
    return (0, r.jsxs)("div", {
        ref: u,
        className: a()(y.wX, {
            [y.A]: b,
            [y.Ze]: I,
            [y.Id]: j
        }),
        "aria-label": A.intl.formatToPlainString(A.t.YLczh4, {
            positionNumber: t + 1
        }),
        children: [(0, r.jsx)(v.A, {
            buttonRef: c,
            widget: n,
            className: y.vn,
            additionalMenuItems: i
        }), s]
    })
}

function w(e) {
    let {
        userId: t,
        widget: n,
        children: i,
        disableInteraction: m,
        className: g,
        index: v,
        trailingContent: p,
        headerTitle: A,
        headerSubtitle: w,
        headerActionButtons: b,
        headerClassName: I,
        additionalManageWidgetMenuItems: C
    } = e, E = (0, d.GV)(), R = l.useRef(null), k = (0, o.bG)([c.default], () => c.default.getId() === t), W = (0, f.g)(), {
        trackUserProfileAction: P
    } = (0, u.NJ)(), T = (0, x.A)({
        widget: n,
        onAction: P
    }), L = W === n.type;
    (0, h.A)(T, L);
    let M = k && null != v && !m,
        G = () => (0, r.jsxs)("div", {
            ref: R,
            className: a()(y.kL, g),
            children: [(0, r.jsx)(j.A, {
                userId: t,
                headingId: E,
                title: A,
                subtitle: w,
                actionButtons: b,
                widget: n,
                disableInteraction: m,
                className: I
            }), (0, r.jsxs)(s.Fmo, {
                children: [i, p]
            })]
        });
    return (0, r.jsx)("section", {
        ref: T,
        "aria-labelledby": E,
        children: M ? (0, r.jsx)(N, {
            index: v ?? 0,
            widget: n,
            getWidth: () => R.current?.offsetWidth,
            additionalManageWidgetMenuItems: C,
            children: G()
        }) : G()
    })
}