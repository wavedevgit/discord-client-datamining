/** chunk id: 217549 params = (module,exports,require) **/
n.d(t, {
    A: () => H
}), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(308368),
    o = n(544420),
    d = n(956793),
    c = n(573648),
    u = n(933958),
    A = n(776677),
    h = n(682261),
    _ = n(874546),
    m = n(765379),
    g = n(61330),
    p = n(15285),
    E = n(651743),
    I = n(780964),
    f = n(858897),
    C = n(734057),
    T = n(962173),
    N = n(134861),
    S = n(498642),
    x = n(71393),
    b = n(189081),
    v = n(375492),
    y = n(576705),
    O = n(994500),
    L = n(309010),
    R = n(461213),
    P = n(287809),
    D = n(977997),
    j = n(689168),
    M = n(194871),
    w = n(954571),
    U = n(144914),
    G = n(715671),
    k = n(652215),
    V = n(985018);
let B = c.A.get(k.fg2.XBOX).name;

function H(e) {
    let {
        currentActivities: t
    } = e, n = t.length > 1, H = function(e) {
        let {
            currentActivities: t
        } = e, n = t.some(e => {
            let {
                activity: t
            } = e;
            return (0, h.A)(t)
        }), l = (0, a.bG)([T.A], () => T.A.getAccounts().some(e => e.type === c.A.get(k.fg2.XBOX).type)), s = t.filter(e => {
            let {
                activity: t
            } = e;
            return (0, g.A)(t)
        }), o = s.length > 0, d = s.some(e => {
            let {
                activity: t
            } = e;
            return (0, _.Ay)(t)
        });
        return n || l || !o || d ? null : (0, i.jsx)(r.Drp, {
            id: "xbox-connect",
            action: () => (0, f.openUserSettings)(I.X.CONNECTIONS_PANEL),
            label: V.intl.formatToPlainString(V.t.XWSHTb, {
                platform: B
            })
        })
    }(e), F = function(e) {
        let {
            currentActivities: t
        } = e, n = l.useContext(w.AnalyticsContext);
        return (0, a.yK)([P.default, b.A, C.A, x.A, S.A, O.A, L.A, D.A, y.A, v.A, R.A, u.Ay, E.A, M.A, N.A, p.Ay, j.A], () => {
            let e = P.default.getCurrentUser();
            return t.filter(e => !(0, m.A)(e.activity)).map(t => {
                let {
                    activity: i,
                    game: l,
                    activityUser: a
                } = t, r = b.A.getActiveLibraryApplication(l.id);
                return {
                    ...t,
                    libraryApplication: r,
                    activityJoinability: (0, A.A)({
                        user: a,
                        activity: i,
                        application: l,
                        channelId: null,
                        currentUser: e,
                        isEmbedded: !1,
                        ChannelStore: C.A,
                        GuildStore: x.A,
                        GuildMemberCountStore: S.A,
                        RelationshipStore: O.A,
                        SelectedChannelStore: L.A,
                        VoiceStateStore: D.A,
                        PermissionStore: y.A,
                        LocalActivityStore: v.A,
                        SelfPresenceStore: R.A,
                        EmbeddedActivitiesStore: u.Ay
                    }),
                    canPlay: (0, U.A)({
                        LibraryApplicationStore: b.A,
                        LaunchableGameStore: E.A,
                        DispatchApplicationStore: M.A,
                        ConnectedAppsStore: N.A,
                        applicationId: l.id,
                        branchId: null != r ? r.branchId : null
                    }),
                    isJoining: j.A.getState(l.id, k.xL.JOIN) === k.eAD.LOADING,
                    isLaunching: E.A.launchingGames.has(l.id),
                    isRunning: p.Ay.getRunningVerifiedApplicationIds().includes(l.id),
                    location: n.location
                }
            })
        }, [n.location, t])
    }(e), Y = [];
    for (let e of F) {
        let {
            activity: t
        } = e;
        null != t && null != t.type && Y.push(function(e, t) {
            let {
                activity: n,
                activityUser: l,
                game: a,
                activityJoinability: c,
                isJoining: u
            } = e;
            if (null == n) return null;
            if (c === A.o.JOINED) return (0, i.jsx)(r.Drp, {
                id: `joined-game-${n.session_id}`,
                label: V.intl.string(V.t.KC26NR),
                subtext: n.name,
                disabled: !0
            });
            if (c === A.o.CAN_JOIN) return (0, i.jsx)(r.Drp, {
                id: `join-game-${n.session_id}`,
                label: u ? V.intl.string(V.t.bf6Ci7) : V.intl.string(V.t.VJlc0S),
                subtext: n.name,
                disabled: u,
                action: () => {
                    o.Ay.join({
                        userId: l.id,
                        sessionId: n.session_id,
                        applicationId: a.id,
                        channelId: null,
                        messageId: null,
                        source: k.ThZ.USER_ACTIVITY_ACTIONS
                    })
                }
            });
            if ((0, _._C)(n)) {
                async function h() {
                    if (null == n) return;
                    let e = await s.A.sendActivityInviteUser({
                        type: k.xL.JOIN_REQUEST,
                        userId: l.id,
                        activity: n,
                        location: k.ThZ.USER_ACTIVITY_ACTIONS
                    });
                    null != e && d.default.selectPrivateChannel(e.id)
                }
                return (0, i.jsx)(r.Drp, {
                    id: `join-${n.session_id}`,
                    label: t ? V.intl.formatToPlainString(V.t.wFAvxM, {
                        name: l.toString()
                    }) : V.intl.string(V.t.OKsSCR),
                    subtext: n.name,
                    action: h
                })
            }
            return null
        }(e, n), function(e, t) {
            let {
                activity: n,
                game: l,
                libraryApplication: a,
                location: s,
                canPlay: o,
                isRunning: d,
                isLaunching: c
            } = e;
            if (!o || null == n) return null;
            let u = d ? V.intl.formatToPlainString(V.t["gBme/4"], {
                name: l.name
            }) : c ? V.intl.formatToPlainString(V.t.WtSQwG, {
                name: l.name
            }) : void 0;
            return (0, i.jsx)(r.Drp, {
                id: `play-${n.session_id}`,
                action: function() {
                    (0, G.playApplication)(l.id, a, {
                        analyticsParams: {
                            location: {
                                ...s,
                                object: k.ZSU.LIST_ITEM
                            }
                        }
                    })
                },
                label: t ? V.intl.formatToPlainString(V.t.ZDZEJN, {
                    name: l.name
                }) : V.intl.string(V.t.XKUw8m),
                disabled: d || c,
                subtext: u
            })
        }(e, n))
    }
    return [...Y, H]
}