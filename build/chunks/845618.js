/** chunk id: 845618, original params: e,t,n (module,exports,require) **/
n.d(t, {
    cH: () => ee,
    pD: () => et
}), n(896048), n(321073);
var l, r = n(136722),
    i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(308528),
    c = n(367513),
    u = n(686956),
    d = n(264686),
    h = n(956793),
    p = n(77729),
    f = n(883600),
    m = n(47167),
    g = n(435470),
    A = n(707592),
    b = n(22007),
    _ = n(380335),
    y = n(141468),
    v = n(535586),
    E = n(742984),
    O = n(277628),
    C = n(976860),
    x = n(378570),
    S = n(323443),
    j = n(446600),
    I = n(747926),
    T = n(253932),
    N = n(260509),
    P = n(734057),
    w = n(71393),
    R = n(320501),
    D = n(803224),
    M = n(576705),
    L = n(222823),
    k = n(994500),
    U = n(309010),
    G = n(461213),
    F = n(351906),
    H = n(287809),
    B = n(977997),
    V = n(954571),
    K = n(562153),
    W = n(723702),
    z = n(427262),
    q = n(970061),
    Y = n(652215),
    J = n(988794),
    Z = n(672396),
    X = n(985018);

function Q(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            Q(e, t, n[t])
        })
    }
    return e
}
let ee = "message1",
    et = .4,
    en = (null === p.A || void 0 === p.A ? void 0 : p.A.features.supports("notifications")) ? 20 : 1,
    el = "discord_dismissed_notification_shown",
    er = document.hasFocus(),
    ei = null,
    ea = new Set,
    es = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    eo = new class {
        track(e, t, n) {
            let l = this._channels[e];
            for (null == l && (l = [], this._channels[e] = l), l.push({
                    notification: t,
                    trackingProps: n
                }); l.length > en;) {
                var r;
                let e = l.shift();
                (null == e || null == (r = e.notification) ? void 0 : r.close) != null && (e.notification.close(), V.default.track(Y.HAw.NOTIFICATION_ACTION, $({
                    action: "REMOVE"
                }, e.trackingProps)))
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t && (delete this._channels[e], t.forEach(e => {
                let {
                    notification: t,
                    trackingProps: n
                } = e;
                t.close(), V.default.track(Y.HAw.NOTIFICATION_ACTION, $({
                    action: "ACK"
                }, n))
            }))
        }
        constructor() {
            Q(this, "_channels", {})
        }
    };

function ec() {
    return !!(D.A.getDesktopType() === Y.nRU.NEVER || G.A.getStatus() === Y.clD.DND || T.NO.getSetting())
}

function eu(e) {
    return null != B.A.getVoiceStateForChannel(e)
}
class ed extends(l = i.Ay.Store) {
    initialize() {
        this.waitFor(f.A, P.A, w.A, _.A, R.A, D.A, M.A, k.A, U.A, G.A, j.A, F.A, H.default, B.A)
    }
}
Q(ed, "displayName", "NotificationStore"), new ed(s.h, __OVERLAY__ ? {} : {
    NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
        let {
            enabled: t
        } = e;
        t !== Y.kCE.ENABLED || W.isPlatformEmbedded || q.A.showNotification(n(705194), X.intl.string(X.t.VSgOVg), X.intl.string(X.t["1UJvqc"]), {
            notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
        }, {
            sound: ee,
            volume: et,
            tag: "hello",
            onClick: () => {
                window.focus()
            },
            isUserAvatar: !1
        })
    },
    NOTIFICATION_CREATE: function(e) {
        let {
            icon: t,
            title: n,
            body: l,
            trackingProps: r,
            options: i
        } = e;
        return !ec() && (q.A.showNotification(t, n, l, r, i), !1)
    },
    WINDOW_FOCUS: function(e) {
        if (er = e.focused) {
            let e = U.A.getChannelId();
            null != e && eo.clearChannel(e)
        }
    },
    MESSAGE_CREATE: function(e) {
        var t, l, r;
        let {
            channelId: i,
            message: a,
            optimistic: o
        } = e;
        if (o) return !1;
        let u = P.A.getChannel(i),
            h = H.default.getUser(null == (l = a.author) ? void 0 : l.id),
            p = H.default.getCurrentUser();
        if (null == u || null == h || null == p) return !1;
        let m = (0, E.lx)(a, i, !er),
            g = D.A.getNotifyMessagesInSelectedChannel() && (0, E.kY)(a, i);
        if (!m && !g || a.type === Y.lAJ.CHANGELOG && (null == a.changelog_id || f.A.latestChangelogId() !== a.changelog_id)) return !1;
        let A = !D.A.isSoundDisabled(ee);
        if (g && (A && q.A.playNotificationSound("message3", .4), !er) || !m) return !1;
        let b = n(242286).default,
            _ = n(592598).A;
        if (null != b.getFocusedPID() && !_.isNotificationDisabled(Z.KS.TextChat) && !F.A.disableNotifications) return !1;
        let {
            icon: C,
            title: S,
            body: j,
            emoji: I
        } = (0, E.TB)(u, a, h), T = !(0, O.Z)("NotificationStore.handleMessage", null == p ? void 0 : p.id);
        if (s.h.dispatch({
                type: "RPC_NOTIFICATION_CREATE",
                channelId: u.id,
                message: a,
                icon: C,
                title: S,
                body: j
            }), (0, v.n)(a, u.guild_id), D.A.getDesktopType() === Y.nRU.NEVER) return A && q.A.playNotificationSound(ee, et), !1;
        let N = null != (t = R.A.getMessage(i, a.id)) ? t : (0, y.rh)(a);
        q.A.showNotification(C, S, j, {
            notif_type: "MESSAGE_CREATE",
            notif_user_id: null == (r = a.author) ? void 0 : r.id,
            message_id: a.id,
            message_type: a.type,
            channel_id: u.id,
            channel_type: u.type,
            guild_id: u.guild_id,
            badge: (0, L.Wm)(N, p)
        }, {
            omitViewTracking: T,
            tag: a.id,
            sound: A ? ee : void 0,
            volume: et,
            onClick() {
                (0, x.iN)(u.id), (u.type === Y.rbe.GUILD_VOICE || u.type === Y.rbe.GUILD_STAGE_VOICE) && c.A.updateChatOpen(u.id, !0), d.default.clickedNotification()
            },
            isUserAvatar: !0,
            messageRecord: N,
            fallbackDeepLink: (0, q.I)(Y.BVt.CHANNEL(u.guild_id, u.id, a.id)),
            emoji: I
        }).then(e => {
            null != e && eo.track(u.id, e.notification, e.trackingProps)
        })
    },
    CHANNEL_SELECT: function(e) {
        let {
            channelId: t
        } = e;
        return null != t && eo.clearChannel(t), !1
    },
    MESSAGE_ACK: function(e) {
        let {
            channelId: t
        } = e;
        return eo.clearChannel(t), !1
    },
    ACTIVITY_START: function(e) {
        let {
            userId: t,
            activity: n
        } = e;
        if (ec() || n.type !== Y.$pd.PLAYING) return !1;
        {
            let e = H.default.getUser(t);
            if (null == e) return !1;
            let l = z.Ay.getName(e),
                r = n.name,
                i = e.getAvatarURL(void 0, 128),
                a = X.intl.string(X.t.XoTWsI),
                s = X.intl.formatToPlainString(X.t.o4Aipn, {
                    username: l,
                    gameName: r
                });
            return q.A.showNotification(i, a, s, {
                notif_type: "ACTIVITY_START",
                activity_type: Y.$pd.PLAYING,
                notif_user_id: t,
                activity_name: r
            }, {
                sound: "message2",
                playSoundIfDisabled: !1,
                volume: .4,
                onClick() {
                    o.A.openPrivateChannel({
                        recipientIds: t
                    })
                },
                isUserAvatar: !0
            }), !1
        }
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e;
        if (ec()) return;
        let n = H.default.getCurrentUser();
        if (null == n) return;
        let l = t.find(e => e.userId === n.id);
        if (null == l) return;
        let {
            channelId: r,
            guildId: i,
            suppress: a,
            requestToSpeakTimestamp: s
        } = l;
        if (null == r || null == i || !(!a && null != s)) return;
        let o = w.A.getGuild(i),
            c = P.A.getChannel(r),
            u = j.A.getStageInstanceByChannel(r);
        null != o && null != c && null != u && q.A.showNotification((0, N.Iv)(o, 128), c.name, X.intl.formatToPlainString(X.t.sqnsSP, {
            channelName: (0, m.m1)(c, H.default, k.A),
            channelTopic: null == u ? void 0 : u.topic
        }), {
            notif_type: "Stage Speak Invite"
        }, {
            isUserAvatar: !1
        })
    },
    STAGE_INSTANCE_UPDATE: function(e) {
        let {
            instance: t
        } = e;
        if (ec() || !t.send_start_notification || eu(t.channel_id)) return !1;
        let n = H.default.getCurrentUser(),
            l = w.A.getGuild(t.guild_id),
            i = P.A.getChannel(t.channel_id),
            a = H.default.getUser(t.host_id);
        if (null == n || null == i || null == l || null == a || !(0, E.Wv)(n, a, i) || !M.A.can(r.kg(Y.xBc.CONNECT, Y.xBc.VIEW_CHANNEL), i) || ea.has(t.id)) return !1;
        ea.add(t.id), q.A.showNotification((0, N.Iv)(l, 128), X.intl.formatToPlainString(X.t.bZ4Okd, {
            guildName: l.name
        }), X.intl.formatToPlainString(X.t.qTelnO, {
            username: K.Ay.getName(l.id, i.id, a),
            topic: t.topic
        }), {
            notif_type: "STAGE_INSTANCE_CREATE",
            guild_id: l.id,
            channel_id: i.id
        }, {
            onClick() {
                (0, S.av)(i)
            },
            isUserAvatar: !1
        })
    },
    STAGE_INSTANCE_DELETE: function(e) {
        let {
            instance: t
        } = e;
        ea.delete(t.id)
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
        let {
            guildScheduledEvent: t
        } = e;
        if (ec() || null == t.notification_type) return !1;
        t.notification_type === J.b8.EVENT_START && (t.entity_type === J.Ps.STAGE_INSTANCE || t.entity_type === J.Ps.VOICE ? function(e) {
            if (ec()) return;
            let t = e.channel_id;
            if (null == t || eu(t)) return;
            let n = H.default.getCurrentUser(),
                l = w.A.getGuild(e.guild_id),
                i = P.A.getChannel(e.channel_id),
                a = H.default.getUser(e.host_id);
            null != n && null != i && null != l && null != a && M.A.can(r.kg(Y.xBc.CONNECT, Y.xBc.VIEW_CHANNEL), i) && q.A.showNotification((0, N.Iv)(l, 128), X.intl.formatToPlainString(X.t.bOu6Wn, {
                guildName: l.name
            }), X.intl.formatToPlainString(X.t.GV9L8u, {
                topic: e.name,
                username: K.Ay.getName(l.id, i.id, a)
            }), {
                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                guild_id: l.id,
                channel_id: i.id
            }, {
                onClick() {
                    e.entity_type === J.Ps.STAGE_INSTANCE && (0, S.av)(i), e.entity_type === J.Ps.VOICE && h.default.selectVoiceChannel(i.id)
                },
                isUserAvatar: !1
            })
        }(t) : t.entity_type === J.Ps.EXTERNAL && function(e) {
            if (ec()) return;
            let t = H.default.getCurrentUser(),
                n = w.A.getGuild(e.guild_id);
            null == t || null == n || q.A.showNotification((0, N.Iv)(n, 128), X.intl.formatToPlainString(X.t.bOu6Wn, {
                guildName: n.name
            }), X.intl.formatToPlainString(X.t.mYyaRB, {
                topic: e.name
            }), {
                notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                guild_id: n.id
            }, {
                onClick() {
                    u.A.transitionToGuildSync(e.guild_id), (0, A.uR)({
                        eventId: e.id
                    })
                },
                isUserAvatar: !1
            })
        }(t))
    },
    THREAD_CREATE: function(e) {
        var t;
        let {
            channel: n,
            isNewlyCreated: l
        } = e;
        if (ec()) return !1;
        let r = P.A.getChannel(n.parent_id);
        if (null == r || !Y.kvI.GUILD_THREADS_ONLY.has(r.type) || !l || !(0, E.q1)(n, r, !er)) return !1;
        let {
            author: i,
            user: a
        } = (0, g.tY)(n);
        if (null == a) return !1;
        let s = w.A.getGuild(r.guild_id);
        if (null == s) return !1;
        let o = X.intl.formatToPlainString(X.t["2IGVl5"], {
                channelName: r.name,
                guildName: s.name
            }),
            c = X.intl.formatToPlainString(X.t.jPhTvT, {
                channelName: n.name,
                userUsername: null != (t = null == i ? void 0 : i.nick) ? t : null == a ? void 0 : a.username
            }),
            u = a.getAvatarURL(void 0, 128);
        q.A.showNotification(u, o, c, {
            notif_type: "THREAD_CREATE",
            notif_user_id: a.id
        }, {
            onClick() {
                (0, I.JA)(n)
            },
            isUserAvatar: !0
        })
    },
    GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
        let t, {
            icon: n,
            title: l,
            body: r,
            route: i,
            trackingType: a,
            tag: s
        } = e;
        if (ec() || null == l || null == r || null == a || "reactions_push_notification" === a.toLowerCase()) return !1;
        q.A.showNotification(n, l, r, {
            notif_type: a
        }, {
            onClick() {
                null != i && ((0, b.A)(i), d.default.clickedNotification())
            },
            tag: s,
            isUserAvatar: !1
        }).then(e => {
            null != e && null != t && eo.track(t, e.notification, e.trackingProps)
        })
    },
    REACTION_NOTIFICATION_SENT: function(e) {
        let {
            icon: t,
            title: n,
            body: l,
            route: r,
            trackingType: i,
            message: a
        } = e;
        if (ec() || null == n || null == l || null == i) return !1;
        let s = a.channel_id;
        if (null == s || U.A.getCurrentlySelectedChannelId() === s && er) return !1;
        q.A.showNotification(t, n, l, {
            notif_type: i
        }, {
            onClick() {
                null != r && ((0, b.A)(r), d.default.clickedNotification())
            },
            isUserAvatar: !0
        }).then(e => {
            null != e && null != s && eo.track(s, e.notification, e.trackingProps)
        })
    },
    WINDOW_HIDDEN: function() {
        let e = (0, W.isWindows)(),
            t = (0, W.isLinux)();
        if (!(!a.w.get(el, !1) && W.isPlatformEmbedded && (e || t))) return !1;
        let l = !1;
        return null != ei && (l = es.includes(ei)), !!l && (q.A.showNotification(n(608598), X.intl.string(X.t.VSgOVg), X.intl.string(X.t["+J/F66"]), {
            notif_type: "WINDOW_HIDDEN"
        }, {
            overrideStreamerMode: !0,
            onClick: () => {
                (0, C.pX)(Y.BVt.SETTINGS(e ? "windows" : "linux"))
            },
            onShown: () => {
                a.w.set(el, !0)
            },
            isUserAvatar: !1
        }), !1)
    },
    LOGOUT: function() {
        return a.w.remove(el), !1
    },
    CONNECTION_OPEN: function(e) {
        let {
            countryCode: t,
            guilds: n
        } = e;
        ei = t, ea.clear(), n.forEach(e => e.stage_instances.forEach(e => ea.add(e.id)))
    },
    MESSAGE_REMINDER_DUE: function(e) {
        let {
            savedMessage: t
        } = e;
        if (ec()) return !1;
        let n = t.message;
        if (null == n || null == n.author) return !1;
        let l = P.A.getChannel(t.saveData.channelId);
        if (null == l) return !1;
        let {
            icon: r,
            body: i
        } = (0, E.TB)(l, n, n.author);
        q.A.showNotification(r, X.intl.string(X.t.IjZJB5), i, {
            notif_type: "MESSAGE_REMINDER_DUE"
        }, {
            onClick() {
                (0, b.A)(Y.BVt.CHANNEL(null == l ? void 0 : l.getGuildId(), l.id, n.id))
            },
            isUserAvatar: !0
        })
    }
})