/** chunk id: 651864 params = (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(540185),
    r = n(311907),
    s = n(397927),
    o = n(395332),
    c = n(672385),
    d = n(633075),
    u = n(289173),
    m = n(622543),
    f = n(958805),
    h = n(735321),
    x = n(961350),
    g = n(760751),
    p = n(985018);
async function _(e) {
    let t = e((0, h.BF)());
    await f.A.savePendingWidgets(t.filter(e => !e.isDiscardable()))
}

function v(e) {
    let t = e?.id,
        n = e?.name ?? "",
        f = (0, r.bG)([x.default], () => x.default.getId()),
        v = (0, r.bG)([g.A], () => g.A.getDetectableGame(t)),
        A = a.useMemo(() => [{
            type: i.x.FAVORITE_GAMES,
            addLabel: p.intl.string(p.t.fgmitg),
            removeLabel: p.intl.string(p.t.TSGNQY),
            menuId: "game-profile-add-favorite-game",
            icon: s.C3E
        }, {
            type: i.x.PLAYED_GAMES,
            addLabel: p.intl.string(p.t["0xIVLR"]),
            removeLabel: p.intl.string(p.t.iN9ShA),
            menuId: "game-profile-add-games-i-like",
            icon: s.Gek
        }, {
            type: i.x.CURRENT_GAMES,
            addLabel: p.intl.string(p.t.G0c4En),
            removeLabel: p.intl.string(p.t.h00srf),
            menuId: "game-profile-add-games-in-rotation",
            icon: s.H_z
        }, {
            type: i.x.WANT_TO_PLAY_GAMES,
            addLabel: p.intl.string(p.t.UuBS4K),
            removeLabel: p.intl.string(p.t.MB8XLq),
            menuId: "game-profile-add-want-to-play",
            icon: s._b6
        }], []),
        b = (0, r.yK)([m.A], () => null == f ? [] : m.A.getUserProfile(f)?.widgets ?? [], [f]),
        E = (0, o.w$)({
            location: "game-profile-overflow-menu"
        }),
        j = a.useMemo(() => {
            if (null == E || 0 === E.length) return null;
            if (null != e) {
                if (E.some(t => t.applicationId === e.id)) return e.id;
                for (let t of e.linkedApplications ?? [])
                    if (E.some(e => e.applicationId === t.id)) return t.id
            }
            return null
        }, [E, e]),
        I = a.useCallback(async (e, n) => {
            let l = null;
            if (await _(a => {
                    let i = a.filter(u.fu).find(t => t.type === e) ?? null;
                    if (n) {
                        if (i?.games.some(e => e.applicationId === t) || null != i && (0, h.uA)(i)) return a;
                        let n = {
                                applicationId: t
                            },
                            r = null != i ? [n, ...i.games ?? []] : [n];
                        l = new u.Yy({
                            ...i ?? {
                                type: e
                            },
                            games: r
                        })
                    } else {
                        if (null == i) return a;
                        let e = i.games.filter(e => e.applicationId !== t);
                        l = new u.Yy({
                            ...i,
                            games: e
                        })
                    }
                    var r = l;
                    let s = a.findIndex(e => e.getUniqueKey() === r.getUniqueKey());
                    if (-1 === s) return [r, ...a];
                    let o = [...a];
                    return o[s] = r, o
                }), null == l) return;
            let a = l;
            (0, c.un)({
                action: n ? "GAME_ADDED" : "GAME_REMOVED",
                ...a.getProfileEditAnalyticsOptions()
            })
        }, [t]),
        C = a.useCallback(async e => {
            if (null == j) return;
            let t = null;
            if (await _(n => e ? n.some(e => e instanceof d.R && e.applicationId === j) ? n : [t = new d.R({
                    applicationId: j
                }), ...n] : (t = n.find(e => e instanceof d.R && e.applicationId === j) ?? null, n.filter(e => !(e instanceof d.R && e.applicationId === j)))), null == t) return;
            let n = t;
            (0, c.un)({
                action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                ...n.getProfileEditAnalyticsOptions()
            })
        }, [j]);
    if (null == f) return null;
    let N = null != e && null != v && (0, h.XX)(v),
        S = [];
    if (null != j) {
        let e = b.some(e => e instanceof d.R && e.applicationId === j);
        S.push((0, l.jsx)(s.Drp, {
            id: "game-profile-app-widget",
            label: e ? p.intl.formatToPlainString(p.t.Ktb1n8, {
                name: n
            }) : p.intl.formatToPlainString(p.t.Xp6iZt, {
                name: n
            }),
            action: () => C(!e),
            leadingAccessory: {
                type: "icon",
                icon: s.Uy2
            }
        }, e ? "remove-app-widget" : "add-app-widget"))
    }
    if (N)
        for (let e of A) {
            let n = b.filter(u.fu).find(t => t.type === e.type) ?? null,
                a = null != n && n.games.some(e => e.applicationId === t),
                i = !a && null != n && (0, h.uA)(n);
            S.push((0, l.jsx)(s.Drp, {
                id: e.menuId,
                label: a ? e.removeLabel : e.addLabel,
                subtext: i ? p.intl.string(p.t["86OoiH"]) : void 0,
                subtextLineClamp: 1,
                action: () => I(e.type, !a),
                leadingAccessory: {
                    type: "icon",
                    icon: e.icon
                },
                disabled: i
            }, e.type))
        }
    return 0 === S.length ? null : S
}