/** chunk id: 633098 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(382222),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(203982),
    m = n(183555),
    g = n(289173),
    p = n(958805),
    x = n(61881),
    f = n(606758),
    _ = n(518477),
    h = n(652215),
    A = n(985018),
    I = n(471138);
let v = "user-profile-save-reset-toolbar-label";

function j(e) {
    let {
        className: t
    } = e, {
        trackUserProfileEditSaved: n
    } = (0, m.NJ)(), [l, j] = a.useState(!1), E = (0, o.yK)([x.A], () => x.A.getSaveablePendingWidgets() ?? []), T = (0, o.yK)([x.A], () => x.A.getChangedWidgets()), N = (0, o.yK)([x.A], () => x.A.getRemovedWidgets()), C = (0, o.bG)([x.A], () => x.A.hasUnsavedChanges()), b = (0, o.bG)([x.A], () => x.A.canSaveChanges()), S = (0, o.bG)([x.A], () => x.A.isSubmitting), y = (0, o.bG)([d.A], () => d.A.useReducedMotion), R = (0, c.pnh)(C, {
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
    a.useEffect(() => {
        let e = null;

        function t() {
            j(!0), e = setTimeout(() => j(!1), 500)
        }
        return u._.subscribe(h.jej.EMPHASIZE_NOTICE, t), () => {
            u._.unsubscribe(h.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
        }
    }, []), a.useEffect(() => {
        C && c.ORC.announce(A.intl.string(A.t["0Y/qkL"]))
    }, [C]);
    let O = a.useCallback(async () => {
            if (x.A.canSaveChanges()) {
                try {
                    await p.A.savePendingWidgets(E)
                } catch (e) {
                    (0, f.XA)(_.jM.WIDGET_SAVE_FAILURE);
                    return
                }
                for (let e of T) {
                    let t = {
                        widgetEdited: e.type,
                        isWidgetRemoved: !1
                    };
                    (0, g.fu)(e) && (t.gameIds = e.games.map(e => e.applicationId), t.tags = e.games.flatMap(e => e.tags ?? []).map(e => e.toString()), t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)), n(t)
                }
                for (let e of N) n({
                    widgetEdited: e.type,
                    isWidgetRemoved: !0
                })
            }
        }, [E, T, N, n]),
        w = a.useCallback(() => {
            p.A.clearPendingWidgets()
        }, []);
    return R((e, n) => n ? (0, i.jsx)(r.animated.div, {
        className: t,
        style: e,
        children: (0, i.jsxs)("footer", {
            className: s()(I.Qs, {
                [I.hO]: l
            }),
            "aria-labelledby": v,
            children: [(0, i.jsx)(c.Text, {
                id: v,
                variant: "text-md/medium",
                color: "text-strong",
                className: I.iU,
                children: A.intl.string(A.t["/lQiX/"])
            }), (0, i.jsxs)("div", {
                className: I.o1,
                children: [(0, i.jsx)(c.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: A.intl.string(A.t.yBZMsQ),
                    onClick: w,
                    disabled: !C || S
                }), (0, i.jsx)(c.Button, {
                    size: "sm",
                    variant: "primary",
                    text: A.intl.string(A.t["R3BPH+"]),
                    onClick: O,
                    loading: S,
                    disabled: !b || !C || S
                })]
            })]
        })
    }) : null)
}