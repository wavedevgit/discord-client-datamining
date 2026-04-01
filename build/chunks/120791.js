/** chunk id: 120791 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(961350),
    s = n(823016),
    r = n(507247),
    o = n(750492),
    c = n(253798),
    d = n(622249),
    u = n(676526),
    m = n(192);

function g(e) {
    let {
        games: t,
        ...n
    } = e, {
        registerItemRef: a,
        manageFocusOnDelete: l
    } = (0, s.r)();
    return (0, i.jsx)(r.A, {
        games: t,
        renderGame: (e, t) => (0, i.jsx)(u.h, {
            index: t,
            game: e,
            coverRef: a(e.applicationId),
            onRemoveGame: l,
            ...n
        })
    })
}

function p(e) {
    let {
        userId: t,
        widgetType: n,
        disableInteraction: r,
        games: u
    } = e, p = (0, a.bG)([l.default], () => l.default.getId() === t), {
        getManageButtonForWidget: x
    } = (0, m.r)(), f = x(n), {
        expanded: _,
        setExpanded: h
    } = (0, c.B)(), A = _ ? u : u.slice(0, 8), I = u.length > 8, v = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g, {
            ...e,
            games: A
        }), I && (0, i.jsx)(d.A, {
            expanded: _,
            onClick: () => h(e => !e)
        })]
    });
    return p && !r ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.A, {
            widgetType: n,
            gameCount: u.length
        }), (0, i.jsx)(s.B, {
            emptyListFallbackRef: f,
            children: v
        })]
    }) : v
}