/** chunk id: 953963 params = (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(687498),
    o = n(311907),
    d = n(397927),
    c = n(631670),
    u = n(775602),
    g = n(159001),
    m = n(933725),
    h = n(203982),
    x = n(587600),
    p = n(207803),
    f = n(183555),
    A = n(289173),
    _ = n(836602),
    I = n(958805),
    j = n(61881),
    v = n(624826),
    b = n(606758),
    S = n(518477),
    y = n(652215),
    E = n(985018),
    C = n(186261);
let T = "user-profile-save-reset-toolbar-label";

function w(e) {
    let {
        className: t,
        guildId: n
    } = e, {
        trackUserProfileEditSaved: l
    } = (0, f.NJ)(), w = (0, o.bG)([u.A], () => u.A.useReducedMotion), [N, k] = a.useState(!1), [R, L] = a.useState(!1), {
        widgetsToSave: O,
        changedWidgets: M,
        removedWidgets: P,
        hasUnsavedWidgets: G,
        canSaveWidgets: U
    } = function() {
        let e = (0, o.yK)([j.A], () => j.A.getSaveablePendingWidgets() ?? []),
            t = (0, o.yK)([j.A], () => j.A.getChangedWidgets()),
            n = (0, o.yK)([j.A], () => j.A.getRemovedWidgets()),
            {
                hasUnsavedWidgets: i,
                canSaveWidgets: a
            } = (0, o.cf)([j.A], () => ({
                hasUnsavedWidgets: j.A.hasUnsavedChanges(),
                canSaveWidgets: j.A.canSaveChanges()
            }));
        return {
            widgetsToSave: e,
            changedWidgets: t,
            removedWidgets: n,
            hasUnsavedWidgets: i,
            canSaveWidgets: a
        }
    }(), F = (0, o.bG)([_.A], () => _.A.hasUnsavedChanges()), D = G || F, W = !(G && !U), H = (0, d.pnh)(D, {
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
    }), B = a.useCallback(() => {
        I.A.clearPendingWidgets(), (0, p.XQ)()
    }, []), V = a.useCallback(async () => {
        L(!0);
        let e = !0;
        if (F) try {
            if (null == n) {
                let t = _.A.getPendingChanges(),
                    n = (0, x.Sk)(t),
                    i = (0, x.yX)(t),
                    a = (0, x.yg)(t);
                if (Object.keys(n).length > 0) {
                    let i = await (0, c._L)(n);
                    e = i?.ok ?? !1, i?.ok && (void 0 !== t.pendingAvatar && (0, v.t)({
                        avatarHash: i.body.avatar,
                        avatarId: n.avatarId,
                        avatarAssetOrigin: t.pendingAvatar?.assetOrigin
                    }), (0, c.pZ)())
                }
                if (Object.keys(i).length > 0) {
                    let t = await (0, p.gi)(i);
                    e = e && (t?.ok ?? !1), t?.ok && (0, p.RE)()
                }
                if (Object.keys(a).length > 0) {
                    let {
                        primaryGuildId: t
                    } = a;
                    if (void 0 !== t) {
                        let n = await (0, m.m)(t, null !== t);
                        e = e && (n?.ok ?? !1), n?.ok && (0, c.fw)()
                    }
                }
            } else {
                let t = _.A.getPendingChanges(n),
                    i = (0, x.C5)(t),
                    a = (0, x.yX)(t, n);
                if (Object.keys(i).length > 0) {
                    let a = await (0, g.GL)(n, i);
                    e = a?.ok ?? !1, a?.ok && (void 0 !== t.pendingAvatar && (0, v.t)({
                        isGuildProfile: !0,
                        avatarHash: a.body.avatar,
                        avatarId: i.avatarId,
                        avatarAssetOrigin: t.pendingAvatar?.assetOrigin
                    }), (0, c.pZ)())
                }
                if (Object.keys(a).length > 0) {
                    let t = await (0, p.gi)(a, n);
                    e = e && (t?.ok ?? !1), t?.ok && (0, p.RE)()
                }
            }
        } catch {
            e = !1
        }
        if (G) try {
            for (let e of (await I.A.savePendingWidgets(O), M)) {
                let t = {
                    widgetEdited: e.type,
                    isWidgetRemoved: !1
                };
                (0, A.fu)(e) && (t.gameIds = e.games.map(e => e.applicationId), t.tags = e.games.flatMap(e => e.tags ?? []).map(e => e.toString()), t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)), l(t)
            }
            for (let e of P) l({
                widgetEdited: e.type,
                isWidgetRemoved: !0
            })
        } catch {
            e = !1
        }
        e ? (0, c.x8)() : (0, b.XA)(S.jM.PROFILE_SAVE_GENERIC_FAILURE), L(!1)
    }, [F, G, O, M, P, l, n]);
    return a.useEffect(() => {
        let e = null;

        function t() {
            k(!0), e = setTimeout(() => k(!1), 500)
        }
        return h._.subscribe(y.jej.EMPHASIZE_NOTICE, t), () => {
            h._.unsubscribe(y.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
        }
    }, []), a.useEffect(() => {
        D && d.ORC.announce(E.intl.string(E.t["0Y/qkL"]))
    }, [D]), H((e, n) => n ? (0, i.jsx)(r.animated.div, {
        className: t,
        style: e,
        children: (0, i.jsxs)("footer", {
            className: s()(C.Qs, {
                [C.hO]: N
            }),
            "aria-labelledby": T,
            children: [(0, i.jsx)(d.Text, {
                id: T,
                variant: "text-md/medium",
                color: "text-strong",
                className: C.iU,
                children: E.intl.string(E.t["/lQiX/"])
            }), (0, i.jsxs)("div", {
                className: C.o1,
                children: [(0, i.jsx)(d.Button, {
                    size: "sm",
                    variant: "secondary",
                    text: E.intl.string(E.t.yBZMsQ),
                    onClick: B,
                    disabled: !D || R
                }), (0, i.jsx)(d.Button, {
                    size: "sm",
                    variant: "primary",
                    text: E.intl.string(E.t["R3BPH+"]),
                    onClick: V,
                    loading: R,
                    disabled: !W || !D
                })]
            })]
        })
    }) : null)
}