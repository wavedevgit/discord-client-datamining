/** chunk id: 120791 params = (module,exports,require) **/
i.d(t, {
    A: () => h
});
var n = i(627968);
i(64700);
var s = i(311907),
    l = i(961350),
    a = i(823016),
    r = i(507247),
    o = i(750492),
    d = i(253798),
    c = i(622249),
    u = i(676526),
    g = i(192);

function m(e) {
    let {
        games: t,
        ...i
    } = e, {
        registerItemRef: s,
        manageFocusOnDelete: l
    } = (0, a.r)();
    return (0, n.jsx)(r.A, {
        games: t,
        renderGame: (e, t) => (0, n.jsx)(u.h, {
            index: t,
            game: e,
            coverRef: s(e.applicationId),
            onRemoveGame: l,
            ...i
        })
    })
}

function h(e) {
    let {
        userId: t,
        widgetType: i,
        disableInteraction: r,
        games: u
    } = e, h = (0, s.bG)([l.default], () => l.default.getId() === t), {
        getManageButtonForWidget: x
    } = (0, g.r)(), p = x(i), {
        expanded: A,
        setExpanded: f
    } = (0, d.B)(), I = A ? u : u.slice(0, 8), j = u.length > 8, v = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(m, {
            ...e,
            games: I
        }), j && (0, n.jsx)(c.A, {
            expanded: A,
            onClick: () => f(e => !e)
        })]
    });
    return h && !r ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.A, {
            widgetType: i,
            gameCount: u.length
        }), (0, n.jsx)(a.B, {
            emptyListFallbackRef: p,
            children: v
        })]
    }) : v
}