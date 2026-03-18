/** chunk id: 633098 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(497766),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(203982),
    g = n(183555),
    m = n(289173),
    x = n(958805),
    p = n(61881),
    f = n(606758),
    h = n(518477),
    _ = n(652215),
    A = n(985018),
    I = n(892984);

function j(e) {
    let {
        className: t
    } = e, {
        trackUserProfileEditSaved: n
    } = (0, g.NJ)(), [a, j] = l.useState(!1), v = (0, o.yK)([p.A], () => p.A.getSaveablePendingWidgets() ?? []), E = (0, o.yK)([p.A], () => p.A.getChangedWidgets()), T = (0, o.yK)([p.A], () => p.A.getRemovedWidgets()), b = (0, o.bG)([p.A], () => p.A.hasUnsavedChanges()), N = (0, o.bG)([p.A], () => p.A.canSaveChanges()), S = (0, o.bG)([p.A], () => p.A.isSubmitting), y = (0, o.bG)([c.A], () => c.A.useReducedMotion), C = (0, d.pnh)(b, {
        from: {
            opacity: 0,
            y: 80 * !y
        },
        enter: {
            opacity: 1,
            y: 0
        },
        leave: {
            opacity: 0,
            y: 80 * !y
        }
    });
    l.useEffect(() => {
        let e = null;

        function t() {
            j(!0), e = setTimeout(() => j(!1), 500)
        }
        return u._.subscribe(_.jej.EMPHASIZE_NOTICE, t), () => {
            u._.unsubscribe(_.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
        }
    }, []), l.useEffect(() => {
        b && d.ORC.announce(A.intl.string(A.t["0Y/qkL"]))
    }, [b]);
    let R = l.useCallback(async () => {
            if (p.A.canSaveChanges()) {
                try {
                    await x.A.savePendingWidgets(v)
                } catch (e) {
                    (0, f.XA)(h.jM.WIDGET_SAVE_FAILURE);
                    return
                }
                for (let e of E) {
                    let t = {
                        widgetEdited: e.type,
                        isWidgetRemoved: !1
                    };
                    (0, m.fu)(e) && (t.gameIds = e.games.map(e => e.applicationId), t.tags = e.games.flatMap(e => e.tags ?? []).map(e => e.toString()), t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)), n(t)
                }
                for (let e of T) n({
                    widgetEdited: e.type,
                    isWidgetRemoved: !0
                })
            }
        }, [v, E, T, n]),
        k = l.useCallback(() => {
            x.A.clearPendingWidgets()
        }, []);
    return C((e, n) => n ? (0, i.jsx)(r.animated.div, {
        className: t,
        style: e,
        children: (0, i.jsxs)("section", {
            className: s()(I.Qs, {
                [I.hO]: a
            }),
            "aria-label": A.intl.string(A.t["odDw+z"]),
            children: [(0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: I.iU,
                children: A.intl.string(A.t["/lQiX/"])
            }), (0, i.jsxs)("div", {
                className: I.o1,
                children: [(0, i.jsx)(d.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: A.intl.string(A.t.yBZMsQ),
                    onClick: k,
                    disabled: !b || S
                }), (0, i.jsx)(d.Button, {
                    size: "sm",
                    variant: "primary",
                    text: A.intl.string(A.t["R3BPH+"]),
                    onClick: R,
                    loading: S,
                    disabled: !N || !b || S
                })]
            })]
        })
    }) : null)
}