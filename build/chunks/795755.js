/** chunk id: 795755 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var a = n(540185),
    l = n(311907),
    s = n(961350),
    r = n(735321),
    o = n(483558),
    c = n(34442),
    d = n(253798),
    u = n(25530),
    m = n(155400),
    g = n(844206),
    p = n(557964),
    x = n(987140),
    f = n(286981);

function _(e) {
    let {
        widget: t,
        ...n
    } = e;
    switch (t.type) {
        case a.x.FAVORITE_GAMES:
            return (0, i.jsx)(m.A, {
                widget: t,
                ...n
            });
        case a.x.CURRENT_GAMES:
            return (0, i.jsx)(u.A, {
                widget: t,
                ...n
            });
        case a.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(p.A, {
                widget: t,
                ...n
            });
        case a.x.PLAYED_GAMES:
            return (0, i.jsx)(g.A, {
                widget: t,
                ...n
            });
        default:
            return null
    }
}

function h(e) {
    let {
        widget: t,
        user: n,
        disableInteraction: a,
        ...u
    } = e, {
        setExpanded: m
    } = (0, d.B)(), {
        shouldShowSuggestions: g,
        handleDismissSuggestions: p
    } = (0, o.q)(t), h = (0, l.bG)([s.default], () => s.default.getId() === n.id), A = h && !a && g, I = (0, r.L)(t), v = (0, r.FM)(t, {
        isCurrentUser: h
    }), j = (0, r.uA)(t), E = 1 === (0, r.cv)(t.type);
    return (0, i.jsx)(_, {
        widget: t,
        user: n,
        disableInteraction: a,
        headerTitle: I,
        headerSubtitle: v,
        headerActionButtons: h && !E ? [(0, i.jsx)(c.IU, {
            disabled: j,
            widgetType: t.type,
            widget: t,
            onAddGame: () => m(!0)
        }, `${t.type}-browse-games-popout`)] : void 0,
        trailingContent: A && (0, i.jsx)(x.A, {
            userId: n.id,
            widgetType: t.type,
            onDismiss: p,
            className: f.r
        }),
        ...u
    })
}

function A(e) {
    let {
        widget: t,
        ...n
    } = e;
    return (0, i.jsx)(d.M, {
        widgetType: t.type,
        children: (0, i.jsx)(h, {
            widget: t,
            ...n
        })
    })
}