/** chunk id: 953963 params = (module,exports,require) **/
i.d(t, {
    A: () => w
});
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(825638),
    d = i(311907),
    o = i(397927),
    c = i(631670),
    u = i(775602),
    g = i(159001),
    m = i(933725),
    h = i(203982),
    x = i(587600),
    A = i(207803),
    p = i(183555),
    f = i(289173),
    I = i(836602),
    j = i(958805),
    v = i(61881),
    S = i(624826),
    E = i(606758),
    b = i(518477),
    T = i(652215),
    y = i(985018),
    C = i(381280);
let N = "user-profile-save-reset-toolbar-label";

function w(e) {
    let {
        className: t,
        guildId: i
    } = e, {
        trackUserProfileEditSaved: s
    } = (0, p.NJ)(), w = (0, d.bG)([u.A], () => u.A.useReducedMotion), [R, k] = l.useState(!1), [O, L] = l.useState(!1), {
        widgetsToSave: M,
        changedWidgets: _,
        removedWidgets: P,
        hasUnsavedWidgets: U,
        canSaveWidgets: G
    } = function() {
        let e = (0, d.yK)([v.A], () => v.A.getSaveablePendingWidgets() ?? []),
            t = (0, d.yK)([v.A], () => v.A.getChangedWidgets()),
            i = (0, d.yK)([v.A], () => v.A.getRemovedWidgets()),
            {
                hasUnsavedWidgets: n,
                canSaveWidgets: l
            } = (0, d.cf)([v.A], () => ({
                hasUnsavedWidgets: v.A.hasUnsavedChanges(),
                canSaveWidgets: v.A.canSaveChanges()
            }));
        return {
            widgetsToSave: e,
            changedWidgets: t,
            removedWidgets: i,
            hasUnsavedWidgets: n,
            canSaveWidgets: l
        }
    }(), F = (0, d.bG)([I.A], () => I.A.hasUnsavedChanges()), D = U || F, W = !(U && !G), H = (0, o.pnh)(D, {
        from: {
            opacity: 0,
            y: 80 * !w
        },
        enter: {
            opacity: 1,
            y: 0
        },
        leave: {
            opacity: 0,
            y: 80 * !w
        }
    }), B = l.useCallback(() => {
        j.A.clearPendingWidgets(), (0, A.XQ)()
    }, []), V = l.useCallback(async () => {
        L(!0);
        let e = !0;
        if (F) try {
            if (null == i) {
                let t = I.A.getPendingChanges(),
                    i = (0, x.Sk)(t),
                    n = (0, x.yX)(t),
                    l = (0, x.yg)(t);
                if (Object.keys(i).length > 0) {
                    let n = await (0, c._L)(i);
                    e = n?.ok ?? !1, n?.ok && (void 0 !== t.pendingAvatar && (0, S.t)({
                        avatarHash: n.body.avatar,
                        avatarId: i.avatarId,
                        avatarAssetOrigin: t.pendingAvatar?.assetOrigin
                    }), (0, c.pZ)())
                }
                if (Object.keys(n).length > 0) {
                    let t = await (0, A.gi)(n);
                    e = e && (t?.ok ?? !1), t?.ok && (0, A.RE)()
                }
                if (Object.keys(l).length > 0) {
                    let {
                        primaryGuildId: t
                    } = l;
                    if (void 0 !== t) {
                        let i = await (0, m.m)(t, null !== t);
                        e = e && (i?.ok ?? !1), i?.ok && (0, c.fw)()
                    }
                }
            } else {
                let t = I.A.getPendingChanges(i),
                    n = (0, x.C5)(t),
                    l = (0, x.yX)(t, i);
                if (Object.keys(n).length > 0) {
                    let l = await (0, g.GL)(i, n);
                    e = l?.ok ?? !1, l?.ok && (void 0 !== t.pendingAvatar && (0, S.t)({
                        isGuildProfile: !0,
                        avatarHash: l.body.avatar,
                        avatarId: n.avatarId,
                        avatarAssetOrigin: t.pendingAvatar?.assetOrigin
                    }), (0, c.pZ)())
                }
                if (Object.keys(l).length > 0) {
                    let t = await (0, A.gi)(l, i);
                    e = e && (t?.ok ?? !1), t?.ok && (0, A.RE)()
                }
            }
        } catch {
            e = !1
        }
        if (U) try {
            for (let e of (await j.A.savePendingWidgets(M), _)) {
                let t = {
                    widgetEdited: e.type,
                    isWidgetRemoved: !1
                };
                (0, f.fu)(e) && (t.gameIds = e.games.map(e => e.applicationId), t.tags = e.games.flatMap(e => e.tags ?? []).map(e => e.toString()), t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)), s(t)
            }
            for (let e of P) s({
                widgetEdited: e.type,
                isWidgetRemoved: !0
            })
        } catch {
            e = !1
        }
        e ? (0, c.x8)() : (0, E.XA)(b.jM.PROFILE_SAVE_GENERIC_FAILURE), L(!1)
    }, [F, U, M, _, P, s, i]);
    return l.useEffect(() => {
        let e = null;

        function t() {
            k(!0), e = setTimeout(() => k(!1), 500)
        }
        return h._.subscribe(T.jej.EMPHASIZE_NOTICE, t), () => {
            h._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
        }
    }, []), l.useEffect(() => {
        D && o.ORC.announce(y.intl.string(y.t["0Y/qkL"]))
    }, [D]), H((e, i) => i ? (0, n.jsx)(r.animated.div, {
        className: t,
        style: e,
        children: (0, n.jsxs)("footer", {
            className: a()(C.Qs, {
                [C.hO]: R
            }),
            "aria-labelledby": N,
            children: [(0, n.jsx)(o.Text, {
                id: N,
                variant: "text-md/medium",
                color: "text-strong",
                className: C.iU,
                children: y.intl.string(y.t["/lQiX/"])
            }), (0, n.jsxs)("div", {
                className: C.o1,
                children: [(0, n.jsx)(o.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: y.intl.string(y.t.yBZMsQ),
                    onClick: B,
                    disabled: !D || O
                }), (0, n.jsx)(o.Button, {
                    size: "sm",
                    variant: "primary",
                    text: y.intl.string(y.t["R3BPH+"]),
                    onClick: V,
                    loading: O,
                    disabled: !W || !D
                })]
            })]
        })
    }) : null)
}