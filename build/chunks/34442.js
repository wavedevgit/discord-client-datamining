/** chunk id: 34442 params = (module,exports,require) **/
i.d(t, {
    IU: () => h,
    dE: () => x
});
var n = i(627968),
    l = i(64700),
    s = i(896170),
    a = i(397927),
    r = i(383329),
    d = i(183555),
    o = i(735321),
    c = i(958338),
    u = i(985018),
    g = i(201669);

function m(e) {
    let {
        widgetType: t,
        widget: i,
        onAddGame: m,
        children: h,
        ...x
    } = e, A = l.useMemo(() => new Set(i.games.map(e => e.applicationId)), [i.games]), {
        trackUserProfileEditAction: p
    } = (0, d.NJ)(), [f, I] = l.useState(""), j = l.useRef(""), {
        options: v,
        matchSorterOptions: S
    } = (0, r.R)(), {
        applicationIds: E,
        onAddGame: b
    } = (0, c.S)(t), T = l.useCallback(e => {
        (0, o.ew)({
            widgetType: t,
            game: {
                applicationId: e
            }
        }), a.ORC.announce(u.intl.string(u.t.q0U3DE)), p({
            action: "GAME_ADDED",
            gameId: e,
            widgetEdited: t
        }), E.includes(e) && b(e), m?.()
    }, [t, p, m, E, b]), y = l.useMemo(() => {
        let e = new Map(v.map(e => [String(e.value), {
                id: String(e.value),
                value: String(e.value),
                label: e.label,
                disabled: A.has(e.value)
            }])),
            t = E.map(t => e.get(t)).filter(e => null != e && !e.disabled),
            i = [...e.values()].filter(e => !t.includes(e));
        return [...t, ...i]
    }, [v, A, E]), C = l.useMemo(() => ({
        ...S,
        threshold: s.Ht.rankings.CONTAINS,
        keys: ["label"]
    }), [S]), N = l.useCallback(e => "" === e.trim() ? y.length : (0, s.Ht)(y, e, C).length, [y, C]), w = l.useCallback(e => {
        let i = e.target.value;
        "" === f.trim() && "" !== i.trim() && p({
            action: "GAME_SEARCH_SESSION_STARTED",
            widgetEdited: t,
            numCharacters: i.trim().length,
            numResults: N(i)
        }), I(i), j.current = i
    }, [f, p, t, N]);
    return (0, n.jsx)(a.YNO, {
        ...x,
        onRequestOpen: () => {
            p({
                action: "PRESS_ADD_GAME",
                widgetEdited: t
            }), I(""), j.current = ""
        },
        onRequestClose: () => {
            p({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: j.current.trim().length,
                numResults: N(j.current)
            })
        },
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, n.jsx)(a.lGe, {
                className: g.C,
                "aria-label": u.intl.string(u.t.uqw8wK),
                children: (0, n.jsxs)(a.iS7, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: e => {
                        null != e && (T(e), t())
                    },
                    options: y,
                    matchSorterOptions: C,
                    children: [(0, n.jsx)(a.a32, {
                        label: u.intl.string(u.t["5h0QOP"]),
                        hideLabel: !0,
                        placeholder: u.intl.string(u.t["5h0QOP"]),
                        autoFocus: !0,
                        onQueryChange: w
                    }), (0, n.jsx)(a.X2W, {
                        maxVisibleItems: 7
                    })]
                })
            })
        },
        children: e => h(e)
    })
}

function h(e) {
    let {
        disabled: t,
        ...i
    } = e, s = l.useRef(null);
    return (0, n.jsx)(m, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: e => (0, n.jsx)(a.Button, {
            buttonRef: s,
            variant: "secondary",
            size: "sm",
            icon: a.j96,
            text: u.intl.string(u.t.SgTOtX),
            disabled: t,
            ...e
        })
    })
}

function x(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(m, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: e => (0, n.jsx)(a.DUT, {
            innerRef: t,
            className: g.c,
            "aria-label": u.intl.string(u.t.SgTOtX),
            ...e,
            children: (0, n.jsx)(a.pa$, {
                color: "currentColor"
            })
        })
    })
}