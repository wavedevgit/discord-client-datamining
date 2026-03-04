/** chunk id: 34442, original params: e,t,n (module,exports,require) **/
n.d(t, {
    IU: () => x,
    dE: () => f
});
var i = n(627968),
    l = n(64700),
    a = n(896170),
    s = n(397927),
    r = n(383329),
    o = n(183555),
    c = n(735321),
    d = n(958338),
    u = n(985018),
    g = n(810824);

function m(e) {
    let {
        widgetType: t,
        widget: n,
        onAddGame: m,
        children: x,
        ...f
    } = e, p = l.useMemo(() => new Set(n.games.map(e => e.applicationId)), [n.games]), {
        trackUserProfileEditAction: h
    } = (0, o.NJ)(), [_, A] = l.useState(""), I = l.useRef(""), {
        options: j,
        matchSorterOptions: v
    } = (0, r.R)(), {
        applicationIds: E,
        onAddGame: T
    } = (0, d.S)(t), b = l.useCallback(e => {
        (0, c.ew)({
            widgetType: t,
            game: {
                applicationId: e
            }
        }), s.ORC.announce(u.intl.string(u.t.q0U3DE)), h({
            action: "GAME_ADDED",
            gameId: e,
            widgetEdited: t
        }), E.includes(e) && T(e), m?.()
    }, [t, h, m, E, T]), N = l.useMemo(() => {
        let e = new Map(j.map(e => [String(e.value), {
                id: String(e.value),
                value: String(e.value),
                label: e.label,
                disabled: p.has(e.value)
            }])),
            t = E.map(t => e.get(t)).filter(e => null != e && !e.disabled),
            n = [...e.values()].filter(e => !t.includes(e));
        return [...t, ...n]
    }, [j, p, E]), y = l.useMemo(() => ({
        ...v,
        threshold: a.Ht.rankings.CONTAINS,
        keys: ["label"]
    }), [v]), S = l.useCallback(e => "" === e.trim() ? N.length : (0, a.Ht)(N, e, y).length, [N, y]), C = l.useCallback(e => {
        let n = e.target.value;
        "" === _.trim() && "" !== n.trim() && h({
            action: "GAME_SEARCH_SESSION_STARTED",
            widgetEdited: t,
            numCharacters: n.trim().length,
            numResults: S(n)
        }), A(n), I.current = n
    }, [_, h, t, S]);
    return (0, i.jsx)(s.YNO, {
        ...f,
        onRequestOpen: () => {
            h({
                action: "PRESS_ADD_GAME",
                widgetEdited: t
            }), A(""), I.current = ""
        },
        onRequestClose: () => {
            h({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: I.current.trim().length,
                numResults: S(I.current)
            })
        },
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(s.lGe, {
                className: g.C,
                "aria-label": u.intl.string(u.t.uqw8wK),
                children: (0, i.jsxs)(s.iS7, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: e => {
                        null != e && (b(e), t())
                    },
                    options: N,
                    matchSorterOptions: y,
                    children: [(0, i.jsx)(s.a32, {
                        label: u.intl.string(u.t["5h0QOP"]),
                        hideLabel: !0,
                        placeholder: u.intl.string(u.t["5h0QOP"]),
                        autoFocus: !0,
                        onQueryChange: C
                    }), (0, i.jsx)(s.X2W, {
                        maxVisibleItems: 7
                    })]
                })
            })
        },
        children: e => x(e)
    })
}

function x(e) {
    let {
        disabled: t,
        ...n
    } = e, a = l.useRef(null);
    return (0, i.jsx)(m, {
        targetElementRef: a,
        position: "bottom",
        align: "center",
        ...n,
        children: e => (0, i.jsx)(s.Button, {
            buttonRef: a,
            variant: "secondary",
            size: "sm",
            icon: s.j96,
            text: u.intl.string(u.t.SgTOtX),
            disabled: t,
            ...e
        })
    })
}

function f(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(m, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: e => (0, i.jsx)(s.DUT, {
            innerRef: t,
            className: g.c,
            "aria-label": u.intl.string(u.t.SgTOtX),
            ...e,
            children: (0, i.jsx)(s.pa$, {
                color: "currentColor"
            })
        })
    })
}