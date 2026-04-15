/** chunk id: 953963 params = (module,exports,require) **/
i.d(t, {
    A: () => N
});
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(407045),
    o = i(311907),
    d = i(397927),
    c = i(631670),
    u = i(775602),
    g = i(159001),
    m = i(933725),
    h = i(203982),
    x = i(587600),
    p = i(207803),
    A = i(183555),
    f = i(289173),
    I = i(836602),
    j = i(958805),
    v = i(61881),
    S = i(624826),
    b = i(606758),
    y = i(518477),
    E = i(652215),
    T = i(985018),
    C = i(983152);
let w = "user-profile-save-reset-toolbar-label";

function N(e) {
    let {
        className: t,
        guildId: i
    } = e, {
        trackUserProfileEditSaved: l
    } = (0, A.NJ)(), N = (0, o.bG)([u.A], () => u.A.useReducedMotion), [R, k] = s.useState(!1), [L, O] = s.useState(!1), {
        widgetsToSave: _,
        changedWidgets: M,
        removedWidgets: P,
        hasUnsavedWidgets: G,
        canSaveWidgets: U
    } = function() {
        let e = (0, o.yK)([v.A], () => v.A.getSaveablePendingWidgets() ?? []),
            t = (0, o.yK)([v.A], () => v.A.getChangedWidgets()),
            i = (0, o.yK)([v.A], () => v.A.getRemovedWidgets()),
            {
                hasUnsavedWidgets: n,
                canSaveWidgets: s
            } = (0, o.cf)([v.A], () => ({
                hasUnsavedWidgets: v.A.hasUnsavedChanges(),
                canSaveWidgets: v.A.canSaveChanges()
            }));
        return {
            widgetsToSave: e,
            changedWidgets: t,
            removedWidgets: i,
            hasUnsavedWidgets: n,
            canSaveWidgets: s
        }
    }(), F = (0, o.bG)([I.A], () => I.A.hasUnsavedChanges()), D = G || F, W = !(G && !U), H = (0, d.pnh)(D, {
        from: {
            opacity: 0,
            y: 80 * !N
        },
        enter: {
            opacity: 1,
            y: 0
        },
        leave: {
            opacity: 0,
            y: 80 * !N
        }
    }), B = s.useCallback(() => {
        j.A.clearPendingWidgets(), (0, p.XQ)()
    }, []), V = s.useCallback(async () => {
        O(!0);
        let e = !0;
        if (F) try {
            if (null == i) {
                let t = I.A.getPendingChanges(),
                    i = (0, x.Sk)(t),
                    n = (0, x.yX)(t),
                    s = (0, x.yg)(t);
                if (Object.keys(i).length > 0) {
                    let n = await (0, c._L)(i);
                    e = n?.ok ?? !1, n?.ok && (void 0 !== t.pendingAvatar && (0, S.t)({
                        avatarHash: n.body.avatar,
                        avatarId: i.avatarId,
                        avatarAssetOrigin: t.pendingAvatar?.assetOrigin
                    }), (0, c.pZ)())
                }
                if (Object.keys(n).length > 0) {
                    let t = await (0, p.gi)(n);
                    e = e && (t?.ok ?? !1), t?.ok && (0, p.RE)()
                }
                if (Object.keys(s).length > 0) {
                    let {
                        primaryGuildId: t
                    } = s;
                    if (void 0 !== t) {
                        let i = await (0, m.m)(t, null !== t);
                        e = e && (i?.ok ?? !1), i?.ok && (0, c.fw)()
                    }
                }
            } else {
                let t = I.A.getPendingChanges(i),
                    n = (0, x.C5)(t),
                    s = (0, x.yX)(t, i);
                if (Object.keys(n).length > 0) {
                    let s = await (0, g.GL)(i, n);
                    e = s?.ok ?? !1, s?.ok && (void 0 !== t.pendingAvatar && (0, S.t)({
                        isGuildProfile: !0,
                        avatarHash: s.body.avatar,
                        avatarId: n.avatarId,
                        avatarAssetOrigin: t.pendingAvatar?.assetOrigin
                    }), (0, c.pZ)())
                }
                if (Object.keys(s).length > 0) {
                    let t = await (0, p.gi)(s, i);
                    e = e && (t?.ok ?? !1), t?.ok && (0, p.RE)()
                }
            }
        } catch {
            e = !1
        }
        if (G) try {
            for (let e of (await j.A.savePendingWidgets(_), M)) {
                let t = {
                    widgetEdited: e.type,
                    isWidgetRemoved: !1
                };
                (0, f.fu)(e) && (t.gameIds = e.games.map(e => e.applicationId), t.tags = e.games.flatMap(e => e.tags ?? []).map(e => e.toString()), t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)), l(t)
            }
            for (let e of P) l({
                widgetEdited: e.type,
                isWidgetRemoved: !0
            })
        } catch {
            e = !1
        }
        e ? (0, c.x8)() : (0, b.XA)(y.jM.PROFILE_SAVE_GENERIC_FAILURE), O(!1)
    }, [F, G, _, M, P, l, i]);
    return s.useEffect(() => {
        let e = null;

        function t() {
            k(!0), e = setTimeout(() => k(!1), 500)
        }
        return h._.subscribe(E.jej.EMPHASIZE_NOTICE, t), () => {
            h._.unsubscribe(E.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
        }
    }, []), s.useEffect(() => {
        D && d.ORC.announce(T.intl.string(T.t["0Y/qkL"]))
    }, [D]), H((e, i) => i ? (0, n.jsx)(r.animated.div, {
        className: t,
        style: e,
        children: (0, n.jsxs)("footer", {
            className: a()(C.Qs, {
                [C.hO]: R
            }),
            "aria-labelledby": w,
            children: [(0, n.jsx)(d.Text, {
                id: w,
                variant: "text-md/medium",
                color: "text-strong",
                className: C.iU,
                children: T.intl.string(T.t["/lQiX/"])
            }), (0, n.jsxs)("div", {
                className: C.o1,
                children: [(0, n.jsx)(d.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: T.intl.string(T.t.yBZMsQ),
                    onClick: B,
                    disabled: !D || L
                }), (0, n.jsx)(d.Button, {
                    size: "sm",
                    variant: "primary",
                    text: T.intl.string(T.t["R3BPH+"]),
                    onClick: V,
                    loading: L,
                    disabled: !W || !D
                })]
            })]
        })
    }) : null)
}