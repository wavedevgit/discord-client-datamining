/** chunk id: 34442 params = (module,exports,require) **/
i.d(t, {
    IU: () => h,
    dE: () => x
});
var n = i(627968),
    s = i(64700),
    l = i(896170),
    a = i(397927),
    r = i(383329),
    o = i(183555),
    d = i(735321),
    c = i(958338),
    u = i(985018),
    g = i(230146);

function m(e) {
    let {
        widgetType: t,
        widget: i,
        onAddGame: m,
        children: h,
        ...x
    } = e, p = s.useMemo(() => new Set(i.games.map(e => e.applicationId)), [i.games]), {
        trackUserProfileEditAction: A
    } = (0, o.NJ)(), [f, I] = s.useState(""), j = s.useRef(""), {
        options: v,
        matchSorterOptions: S
    } = (0, r.R)(), {
        applicationIds: b,
        onAddGame: y
    } = (0, c.S)(t), E = s.useCallback(e => {
        (0, d.ew)({
            widgetType: t,
            game: {
                applicationId: e
            }
        }), a.ORC.announce(u.intl.string(u.t.q0U3DE)), A({
            action: "GAME_ADDED",
            gameId: e,
            widgetEdited: t
        }), b.includes(e) && y(e), m?.()
    }, [t, A, m, b, y]), T = s.useMemo(() => {
        let e = new Map(v.map(e => [String(e.value), {
                id: String(e.value),
                value: String(e.value),
                label: e.label,
                disabled: p.has(e.value)
            }])),
            t = b.map(t => e.get(t)).filter(e => null != e && !e.disabled),
            i = [...e.values()].filter(e => !t.includes(e));
        return [...t, ...i]
    }, [v, p, b]), C = s.useMemo(() => ({
        ...S,
        threshold: l.Ht.rankings.CONTAINS,
        keys: ["label"]
    }), [S]), w = s.useCallback(e => "" === e.trim() ? T.length : (0, l.Ht)(T, e, C).length, [T, C]), N = s.useCallback(e => {
        let i = e.target.value;
        "" === f.trim() && "" !== i.trim() && A({
            action: "GAME_SEARCH_SESSION_STARTED",
            widgetEdited: t,
            numCharacters: i.trim().length,
            numResults: w(i)
        }), I(i), j.current = i
    }, [f, A, t, w]);
    return (0, n.jsx)(a.YNO, {
        ...x,
        onRequestOpen: () => {
            A({
                action: "PRESS_ADD_GAME",
                widgetEdited: t
            }), I(""), j.current = ""
        },
        onRequestClose: () => {
            A({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: j.current.trim().length,
                numResults: w(j.current)
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
                        null != e && (E(e), t())
                    },
                    options: T,
                    matchSorterOptions: C,
                    children: [(0, n.jsx)(a.a32, {
                        label: u.intl.string(u.t["5h0QOP"]),
                        hideLabel: !0,
                        placeholder: u.intl.string(u.t["5h0QOP"]),
                        autoFocus: !0,
                        onQueryChange: N
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
    } = e, l = s.useRef(null);
    return (0, n.jsx)(m, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...i,
        children: e => (0, n.jsx)(a.Button, {
            buttonRef: l,
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
    let t = s.useRef(null);
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