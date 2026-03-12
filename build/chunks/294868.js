/** chunk id: 294868 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(961350),
    s = n(823016),
    r = n(750492),
    o = n(253798),
    c = n(622249),
    d = n(742710),
    u = n(192),
    m = n(742944);

function g(e) {
    let {
        games: t,
        user: n,
        widgetType: l,
        ...a
    } = e, {
        registerItemRef: r,
        manageFocusOnDelete: o
    } = (0, s.r)();
    return (0, i.jsx)("ul", {
        className: m.h,
        children: t.map((e, t) => (0, i.jsx)("li", {
            children: (0, i.jsx)(d.A, {
                index: t,
                user: n,
                game: e,
                widgetType: l,
                coverRef: r(e.applicationId),
                onRemoveGame: o,
                ...a
            })
        }, e.applicationId))
    })
}

function x(e) {
    let {
        user: t,
        widgetType: n,
        disableInteraction: d,
        games: m
    } = e, x = (0, l.bG)([a.default], () => a.default.getId() === t.id), {
        getManageButtonForWidget: f
    } = (0, u.r)(), p = f(n), {
        expanded: h,
        setExpanded: _
    } = (0, o.B)(), A = h ? m : m.slice(0, 2), I = m.length > 2, j = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g, {
            ...e,
            games: A
        }), I && (0, i.jsx)(c.A, {
            expanded: h,
            onClick: () => _(e => !e)
        })]
    });
    return x && !d ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.A, {
            widgetType: n,
            gameCount: m.length
        }), (0, i.jsx)(s.B, {
            emptyListFallbackRef: p,
            children: j
        })]
    }) : j
}