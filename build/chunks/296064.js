/** chunk id: 296064 params = (module,exports,require) **/
n.d(t, {
    r: () => j
});
var i = n(627968),
    r = n(64700),
    l = n(6161),
    s = n(681154),
    a = n(974690),
    o = n(311907),
    u = n(435371),
    d = n(397927),
    c = n(933958),
    h = n(776677),
    g = n(206589),
    m = n(833349),
    f = n(672979),
    A = n(734057),
    I = n(498642),
    E = n(71393),
    p = n(375492),
    _ = n(576705),
    S = n(994500),
    x = n(309010),
    T = n(461213),
    C = n(287809),
    N = n(977997),
    v = n(689168),
    y = n(661191),
    M = n(243612),
    b = n(67103),
    R = n(652215),
    D = n(985018);

function O(e) {
    return e.find(e => (0, m.A)(e, R.jUm.JOIN))
}

function w(e, t) {
    return null == t ? O(e) : e.find(e => (0, m.A)(e, R.jUm.JOIN) && e.application_id === t) ?? O(e)
}

function j(e) {
    let {
        user: t,
        friendActivities: n,
        currentUserPlayingActivities: m,
        gameProfileEntry: O,
        onPrimaryAction: j
    } = e, [k, U] = r.useState(!1), L = r.useRef(null);
    r.useEffect(() => () => {
        null != L.current && clearTimeout(L.current)
    }, []);
    let G = (0, o.bG)([C.default, A.A, E.A, I.A, S.A, x.A, N.A, _.A, p.A, T.A, c.Ay, v.A], () => {
            let e = C.default.getCurrentUser(),
                i = (0, M.qv)(),
                r = i?.altId ?? i?.id,
                o = w(n, r),
                u = w(m, r);
            if (null != o && null != o.application_id) {
                if (v.A.getState(o.application_id, R.xL.JOIN) === R.eAD.LOADING) return {
                    kind: "joining",
                    activity: o
                };
                let n = (0, h.A)({
                    user: t,
                    activity: o,
                    application: null,
                    channelId: null,
                    currentUser: e,
                    isEmbedded: !1,
                    ChannelStore: A.A,
                    GuildStore: E.A,
                    GuildMemberCountStore: I.A,
                    RelationshipStore: S.A,
                    SelectedChannelStore: x.A,
                    VoiceStateStore: N.A,
                    PermissionStore: _.A,
                    LocalActivityStore: p.A,
                    SelfPresenceStore: T.A,
                    EmbeddedActivitiesStore: c.Ay
                });
                if (n === h.o.JOINED) return {
                    kind: "joined",
                    activity: o
                };
                if (n === h.o.CAN_JOIN) return {
                    kind: "join",
                    activity: o
                };
                if (null == u) return {
                    kind: "ask_to_join",
                    activity: o
                }
            }
            if (null != u) return {
                kind: n.some(e => e.application_id === u.application_id && (0, g.w)(e, u)) ? "joined" : "invite_to_activity",
                activity: u
            };
            if (null != O) return {
                kind: "send_game_invite_message",
                gameEntry: O
            };
            let d = m.find(f.A);
            if (null != d) {
                var b;
                let e;
                return {
                    kind: "send_game_invite_message",
                    gameEntry: (b = t.id, e = d.timestamps?.start ?? Date.now(), {
                        id: y.default.fromTimestamp(e),
                        author_id: b,
                        extra: {
                            type: "played_game_extra",
                            game_name: d.name,
                            application_id: d.application_id ?? "",
                            fake_inventory_item: !0
                        },
                        content_type: s.ContentInventoryEntryType.PLAYED_GAME,
                        author_type: l.ContentInventoryAuthorType.USER,
                        participants: [],
                        traits: [{
                            type: a.K.IS_LIVE,
                            is_live: !0
                        }]
                    })
                }
            }
            return null
        }, [n, m, O, t]),
        P = r.useCallback(e => {
            e.preventDefault(), e.stopPropagation(), k || null == G || "joined" === G.kind || "joining" === G.kind || (U(!0), null != L.current && clearTimeout(L.current), L.current = setTimeout(() => {
                U(!1), L.current = null
            }, 2e3), j?.({
                type: function(e) {
                    switch (e) {
                        case "ask_to_join":
                            return b.c.ASK_TO_JOIN;
                        case "invite_to_activity":
                            return b.c.SEND_ACTIVITY_INVITE;
                        case "send_game_invite_message":
                            return b.c.SEND_GAME_INVITE_MESSAGE;
                        case "join":
                        case "joining":
                        case "joined":
                            return b.c.JOIN
                    }
                }(G.kind),
                userId: t.id,
                activity: G.activity,
                gameEntry: G.gameEntry
            }))
        }, [k, G, t.id, j]);
    if (null == G || "joined" === G.kind) return null;
    let F = function(e, t) {
            if (t) return d.BNr;
            switch (e) {
                case "ask_to_join":
                    return d.E7M;
                case "invite_to_activity":
                    return d.DpX;
                case "send_game_invite_message":
                    return d.lX7;
                case "join":
                case "joining":
                case "joined":
                    return d.MRp
            }
        }(G.kind, k),
        V = function(e) {
            switch (e) {
                case "ask_to_join":
                    return D.intl.string(D.t.OKsSCR);
                case "invite_to_activity":
                    return D.intl.string(D.t["3fRySx"]);
                case "send_game_invite_message":
                    return D.intl.string(D.t.XHxDIV);
                case "join":
                    return D.intl.string(D.t.VJlc0S);
                case "joining":
                    return D.intl.string(D.t.bf6Ci7);
                case "joined":
                    return D.intl.string(D.t.KC26NR)
            }
        }(G.kind);
    return (0, i.jsx)(u.m_, {
        text: V,
        "aria-label": V,
        children: (0, i.jsx)(d.K0, {
            icon: F,
            "aria-label": V,
            size: "sm",
            variant: "icon-only",
            onClick: P,
            disabled: k || "joining" === G.kind
        })
    })
}