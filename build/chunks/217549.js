/** chunk id: 217549 params = (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(308368),
    o = n(956793),
    d = n(573648),
    c = n(833349),
    u = n(765379),
    A = n(61330),
    h = n(15285),
    _ = n(651743),
    m = n(780964),
    p = n(840065),
    g = n(962173),
    E = n(134861),
    I = n(189081),
    f = n(194871),
    C = n(954571),
    T = n(144914),
    N = n(715671),
    S = n(652215),
    x = n(985018);
let v = d.A.get(S.fg2.XBOX).name;

function y(e) {
    let {
        currentActivities: t
    } = e, n = t.length > 1, y = function(e) {
        let {
            currentActivities: t
        } = e, n = (0, a.bG)([g.A], () => g.A.getAccounts().some(e => e.type === d.A.get(S.fg2.XBOX).type)), l = t.some(e => {
            let {
                activity: t
            } = e;
            return (0, A.A)(t)
        });
        return n || !l ? null : (0, i.jsx)(r.Drp, {
            id: "xbox-connect",
            action: () => (0, p.openUserSettings)(m.X.CONNECTIONS_PANEL),
            label: x.intl.formatToPlainString(x.t.XWSHTb, {
                platform: v
            })
        })
    }(e), b = function(e) {
        let {
            currentActivities: t
        } = e, n = l.useContext(C.AnalyticsContext);
        return (0, a.yK)([h.Ay, I.A, _.A, f.A, E.A], () => t.filter(e => !(0, u.A)(e.activity)).map(e => {
            let {
                activity: t,
                game: i
            } = e, l = I.A.getActiveLibraryApplication(i.id);
            return {
                ...e,
                libraryApplication: l,
                canJoin: null != t && (0, c.A)(t, S.jUm.JOIN) && t.type === S.$pd.PLAYING,
                canPlay: (0, T.A)({
                    LibraryApplicationStore: I.A,
                    LaunchableGameStore: _.A,
                    DispatchApplicationStore: f.A,
                    ConnectedAppsStore: E.A,
                    applicationId: i.id,
                    branchId: null != l ? l.branchId : null
                }),
                isLaunching: _.A.launchingGames.has(i.id),
                isRunning: h.Ay.getRunningVerifiedApplicationIds().includes(i.id),
                location: n.location
            }
        }), [n.location, t])
    }(e), O = [];
    for (let e of b) {
        let {
            activity: t
        } = e;
        null != t && null != t.type && O.push(function(e, t) {
            let {
                canJoin: n,
                activity: l,
                activityUser: a
            } = e;
            if (!n || null == l) return null;
            async function d() {
                if (null == l) return;
                let e = await s.A.sendActivityInviteUser({
                    type: S.xL.JOIN_REQUEST,
                    userId: a.id,
                    activity: l,
                    location: S.ThZ.USER_ACTIVITY_ACTIONS
                });
                null != e && o.default.selectPrivateChannel(e.id)
            }
            return (0, i.jsx)(r.Drp, {
                id: `join-${l.session_id}`,
                label: t ? x.intl.formatToPlainString(x.t.wFAvxM, {
                    name: a.toString()
                }) : x.intl.string(x.t.OKsSCR),
                action: d
            })
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
            let u = d ? x.intl.formatToPlainString(x.t["gBme/4"], {
                name: l.name
            }) : c ? x.intl.formatToPlainString(x.t.WtSQwG, {
                name: l.name
            }) : void 0;
            return (0, i.jsx)(r.Drp, {
                id: `play-${n.session_id}`,
                action: function() {
                    (0, N.playApplication)(l.id, a, {
                        analyticsParams: {
                            location: {
                                ...s,
                                object: S.ZSU.LIST_ITEM
                            }
                        }
                    })
                },
                label: t ? x.intl.formatToPlainString(x.t.ZDZEJN, {
                    name: l.name
                }) : x.intl.string(x.t.XKUw8m),
                subtext: u
            })
        }(e, n))
    }
    return [y, ...O]
}