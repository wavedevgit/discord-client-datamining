/** chunk id: 34442 params = (module,exports,require) **/
n.d(t, {
    IU: () => x,
    dE: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(896170),
    s = n(397927),
    r = n(383329),
    o = n(183555),
    d = n(735321),
    c = n(958338),
    u = n(985018),
    g = n(201669);

function m(e) {
    let {
        widgetType: t,
        widget: n,
        onAddGame: m,
        children: x,
        ...p
    } = e, f = l.useMemo(() => new Set(n.games.map(e => e.applicationId)), [n.games]), {
        trackUserProfileEditAction: h
    } = (0, o.NJ)(), [_, A] = l.useState(""), I = l.useRef(""), {
        options: j,
        matchSorterOptions: v
    } = (0, r.R)(), {
        applicationIds: T,
        onAddGame: E
    } = (0, c.S)(t), b = l.useCallback(e => {
        (0, d.ew)({
            widgetType: t,
            game: {
                applicationId: e
            }
        }), s.ORC.announce(u.intl.string(u.t.q0U3DE)), h({
            action: "GAME_ADDED",
            gameId: e,
            widgetEdited: t
        }), T.includes(e) && E(e), m?.()
    }, [t, h, m, T, E]), C = l.useMemo(() => {
        let e = new Map(j.map(e => [String(e.value), {
                id: String(e.value),
                value: String(e.value),
                label: e.label,
                disabled: f.has(e.value)
            }])),
            t = T.map(t => e.get(t)).filter(e => null != e && !e.disabled),
            n = [...e.values()].filter(e => !t.includes(e));
        return [...t, ...n]
    }, [j, f, T]), S = l.useMemo(() => ({
        ...v,
        threshold: a.Ht.rankings.CONTAINS,
        keys: ["label"]
    }), [v]), N = l.useCallback(e => "" === e.trim() ? C.length : (0, a.Ht)(C, e, S).length, [C, S]), y = l.useCallback(e => {
        let n = e.target.value;
        "" === _.trim() && "" !== n.trim() && h({
            action: "GAME_SEARCH_SESSION_STARTED",
            widgetEdited: t,
            numCharacters: n.trim().length,
            numResults: N(n)
        }), A(n), I.current = n
    }, [_, h, t, N]);
    return (0, i.jsx)(s.YNO, {
        ...p,
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
                numResults: N(I.current)
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
                    options: C,
                    matchSorterOptions: S,
                    children: [(0, i.jsx)(s.a32, {
                        label: u.intl.string(u.t["5h0QOP"]),
                        hideLabel: !0,
                        placeholder: u.intl.string(u.t["5h0QOP"]),
                        autoFocus: !0,
                        onQueryChange: y
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

function p(e) {
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