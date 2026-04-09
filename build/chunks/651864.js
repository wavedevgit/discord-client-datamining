/** chunk id: 651864 params = (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(321073);
var a = n(627968),
    i = n(64700),
    l = n(540185),
    r = n(311907),
    s = n(397927),
    o = n(395332),
    c = n(672385),
    d = n(633075),
    u = n(289173),
    m = n(622543),
    x = n(958805),
    g = n(735321),
    h = n(961350),
    f = n(760751),
    _ = n(985018);
async function p(e) {
    let t = e((0, g.BF)());
    await x.A.savePendingWidgets(t.filter(e => !e.isDiscardable()))
}

function v(e) {
    let t = e?.id,
        n = e?.name ?? "",
        x = (0, r.bG)([h.default], () => h.default.getId()),
        v = (0, r.bG)([f.A], () => f.A.getDetectableGame(t)),
        A = i.useMemo(() => [{
            type: l.x.FAVORITE_GAMES,
            addLabel: _.intl.string(_.t.fgmitg),
            removeLabel: _.intl.string(_.t.TSGNQY),
            menuId: "game-profile-add-favorite-game",
            icon: s.C3E
        }, {
            type: l.x.PLAYED_GAMES,
            addLabel: _.intl.string(_.t["0xIVLR"]),
            removeLabel: _.intl.string(_.t.iN9ShA),
            menuId: "game-profile-add-games-i-like",
            icon: s.Gek
        }, {
            type: l.x.CURRENT_GAMES,
            addLabel: _.intl.string(_.t.G0c4En),
            removeLabel: _.intl.string(_.t.h00srf),
            menuId: "game-profile-add-games-in-rotation",
            icon: s.H_z
        }, {
            type: l.x.WANT_TO_PLAY_GAMES,
            addLabel: _.intl.string(_.t.UuBS4K),
            removeLabel: _.intl.string(_.t.MB8XLq),
            menuId: "game-profile-add-want-to-play",
            icon: s._b6
        }], []),
        j = (0, r.yK)([m.A], () => null == x ? [] : m.A.getUserProfile(x)?.widgets ?? [], [x]),
        E = (0, o.w$)({
            location: "game-profile-overflow-menu"
        }),
        I = i.useMemo(() => {
            if (null == E || 0 === E.length) return null;
            if (null != e) {
                if (E.some(t => t.applicationId === e.id)) return e.id;
                for (let t of e.linkedApplications ?? [])
                    if (E.some(e => e.applicationId === t.id)) return t.id
            }
            return null
        }, [E, e]),
        b = i.useCallback(async (e, n) => {
            let a = null;
            if (await p(i => {
                    let l = i.filter(u.fu).find(t => t.type === e) ?? null;
                    if (n) {
                        if (l?.games.some(e => e.applicationId === t) || null != l && (0, g.uA)(l)) return i;
                        let n = {
                                applicationId: t
                            },
                            r = null != l ? [n, ...l.games ?? []] : [n];
                        a = new u.Yy({
                            ...l ?? {
                                type: e
                            },
                            games: r
                        })
                    } else {
                        if (null == l) return i;
                        let e = l.games.filter(e => e.applicationId !== t);
                        a = new u.Yy({
                            ...l,
                            games: e
                        })
                    }
                    var r = a;
                    let s = i.findIndex(e => e.getUniqueKey() === r.getUniqueKey());
                    if (-1 === s) return [r, ...i];
                    let o = [...i];
                    return o[s] = r, o
                }), null == a) return;
            let i = a;
            (0, c.un)({
                action: n ? "GAME_ADDED" : "GAME_REMOVED",
                ...i.getProfileEditAnalyticsOptions()
            })
        }, [t]),
        C = i.useCallback(async e => {
            if (null == I) return;
            let t = null;
            if (await p(n => e ? n.some(e => e instanceof d.R && e.applicationId === I) ? n : [t = new d.R({
                    applicationId: I
                }), ...n] : (t = n.find(e => e instanceof d.R && e.applicationId === I) ?? null, n.filter(e => !(e instanceof d.R && e.applicationId === I)))), null == t) return;
            let n = t;
            (0, c.un)({
                action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED",
                ...n.getProfileEditAnalyticsOptions()
            })
        }, [I]);
    if (null == x) return null;
    let N = null != e && null != v && (0, g.XX)(v),
        S = [];
    if (null != I) {
        let e = j.some(e => e instanceof d.R && e.applicationId === I);
        S.push((0, a.jsx)(s.Drp, {
            id: "game-profile-app-widget",
            label: e ? _.intl.formatToPlainString(_.t.Ktb1n8, {
                name: n
            }) : _.intl.formatToPlainString(_.t.Xp6iZt, {
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
            let n = j.filter(u.fu).find(t => t.type === e.type) ?? null,
                i = null != n && n.games.some(e => e.applicationId === t),
                l = !i && null != n && (0, g.uA)(n);
            S.push((0, a.jsx)(s.Drp, {
                id: e.menuId,
                label: i ? e.removeLabel : e.addLabel,
                subtext: l ? _.intl.string(_.t["86OoiH"]) : void 0,
                subtextLineClamp: 1,
                action: () => b(e.type, !i),
                leadingAccessory: {
                    type: "icon",
                    icon: e.icon
                },
                disabled: l
            }, e.type))
        }
    return 0 === S.length ? null : S
}