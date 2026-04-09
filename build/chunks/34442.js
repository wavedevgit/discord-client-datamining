/** chunk id: 34442 params = (module,exports,require) **/
n.d(t, {
    IU: () => h,
    dE: () => x
});
var i = n(627968),
    a = n(64700),
    l = n(896170),
    s = n(397927),
    r = n(383329),
    o = n(183555),
    d = n(735321),
    c = n(958338),
    u = n(985018),
    g = n(230146);

function m(e) {
    let {
        widgetType: t,
        widget: n,
        onAddGame: m,
        children: h,
        ...x
    } = e, p = a.useMemo(() => new Set(n.games.map(e => e.applicationId)), [n.games]), {
        trackUserProfileEditAction: f
    } = (0, o.NJ)(), [A, _] = a.useState(""), I = a.useRef(""), {
        options: j,
        matchSorterOptions: v
    } = (0, r.R)(), {
        applicationIds: b,
        onAddGame: S
    } = (0, c.S)(t), y = a.useCallback(e => {
        (0, d.ew)({
            widgetType: t,
            game: {
                applicationId: e
            }
        }), s.ORC.announce(u.intl.string(u.t.q0U3DE)), f({
            action: "GAME_ADDED",
            gameId: e,
            widgetEdited: t
        }), b.includes(e) && S(e), m?.()
    }, [t, f, m, b, S]), E = a.useMemo(() => {
        let e = new Map(j.map(e => [String(e.value), {
                id: String(e.value),
                value: String(e.value),
                label: e.label,
                disabled: p.has(e.value)
            }])),
            t = b.map(t => e.get(t)).filter(e => null != e && !e.disabled),
            n = [...e.values()].filter(e => !t.includes(e));
        return [...t, ...n]
    }, [j, p, b]), C = a.useMemo(() => ({
        ...v,
        threshold: l.Ht.rankings.CONTAINS,
        keys: ["label"]
    }), [v]), T = a.useCallback(e => "" === e.trim() ? E.length : (0, l.Ht)(E, e, C).length, [E, C]), w = a.useCallback(e => {
        let n = e.target.value;
        "" === A.trim() && "" !== n.trim() && f({
            action: "GAME_SEARCH_SESSION_STARTED",
            widgetEdited: t,
            numCharacters: n.trim().length,
            numResults: T(n)
        }), _(n), I.current = n
    }, [A, f, t, T]);
    return (0, i.jsx)(s.YNO, {
        ...x,
        onRequestOpen: () => {
            f({
                action: "PRESS_ADD_GAME",
                widgetEdited: t
            }), _(""), I.current = ""
        },
        onRequestClose: () => {
            f({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: I.current.trim().length,
                numResults: T(I.current)
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
                        null != e && (y(e), t())
                    },
                    options: E,
                    matchSorterOptions: C,
                    children: [(0, i.jsx)(s.a32, {
                        label: u.intl.string(u.t["5h0QOP"]),
                        hideLabel: !0,
                        placeholder: u.intl.string(u.t["5h0QOP"]),
                        autoFocus: !0,
                        onQueryChange: w
                    }), (0, i.jsx)(s.X2W, {
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
        ...n
    } = e, l = a.useRef(null);
    return (0, i.jsx)(m, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...n,
        children: e => (0, i.jsx)(s.Button, {
            buttonRef: l,
            variant: "secondary",
            size: "sm",
            icon: s.j96,
            text: u.intl.string(u.t.SgTOtX),
            disabled: t,
            ...e
        })
    })
}

function x(e) {
    let t = a.useRef(null);
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