/** chunk id: 633098 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(687498),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(203982),
    g = n(183555),
    m = n(289173),
    x = n(958805),
    f = n(61881),
    p = n(606758),
    h = n(518477),
    _ = n(652215),
    A = n(985018),
    I = n(440693);
let j = "user-profile-save-reset-toolbar-label";

function v(e) {
    let {
        className: t
    } = e, {
        trackUserProfileEditSaved: n
    } = (0, g.NJ)(), [a, v] = l.useState(!1), E = (0, o.yK)([f.A], () => f.A.getSaveablePendingWidgets() ?? []), T = (0, o.yK)([f.A], () => f.A.getChangedWidgets()), b = (0, o.yK)([f.A], () => f.A.getRemovedWidgets()), C = (0, o.bG)([f.A], () => f.A.hasUnsavedChanges()), S = (0, o.bG)([f.A], () => f.A.canSaveChanges()), N = (0, o.bG)([f.A], () => f.A.isSubmitting), y = (0, o.bG)([d.A], () => d.A.useReducedMotion), R = (0, c.pnh)(C, {
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
            v(!0), e = setTimeout(() => v(!1), 500)
        }
        return u._.subscribe(_.jej.EMPHASIZE_NOTICE, t), () => {
            u._.unsubscribe(_.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
        }
    }, []), l.useEffect(() => {
        C && c.ORC.announce(A.intl.string(A.t["0Y/qkL"]))
    }, [C]);
    let k = l.useCallback(async () => {
            if (f.A.canSaveChanges()) {
                try {
                    await x.A.savePendingWidgets(E)
                } catch (e) {
                    (0, p.XA)(h.jM.WIDGET_SAVE_FAILURE);
                    return
                }
                for (let e of T) {
                    let t = {
                        widgetEdited: e.type,
                        isWidgetRemoved: !1
                    };
                    (0, m.fu)(e) && (t.gameIds = e.games.map(e => e.applicationId), t.tags = e.games.flatMap(e => e.tags ?? []).map(e => e.toString()), t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)), n(t)
                }
                for (let e of b) n({
                    widgetEdited: e.type,
                    isWidgetRemoved: !0
                })
            }
        }, [E, T, b, n]),
        w = l.useCallback(() => {
            x.A.clearPendingWidgets()
        }, []);
    return R((e, n) => n ? (0, i.jsx)(r.animated.div, {
        className: t,
        style: e,
        children: (0, i.jsxs)("footer", {
            className: s()(I.Qs, {
                [I.hO]: a
            }),
            "aria-labelledby": j,
            children: [(0, i.jsx)(c.Text, {
                id: j,
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
                    disabled: !C || N
                }), (0, i.jsx)(c.Button, {
                    size: "sm",
                    variant: "primary",
                    text: A.intl.string(A.t["R3BPH+"]),
                    onClick: k,
                    loading: N,
                    disabled: !S || !C || N
                })]
            })]
        })
    }) : null)
}