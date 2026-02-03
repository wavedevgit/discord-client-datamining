/** chunk id: 703552, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => eS
}), n(321073), n(896048), n(638769), n(667532);
var i, r = n(284009),
    l = n.n(r),
    a = n(835245),
    s = n(311907),
    o = n(73153),
    u = n(684013),
    c = n(313961),
    d = n(274372),
    h = n(141468),
    p = n(742984),
    f = n(159426),
    g = n(253932),
    m = n(164891),
    y = n(616356),
    A = n(961350),
    v = n(734057),
    b = n(320501),
    E = n(803224),
    O = n(783592),
    x = n(290863),
    _ = n(383501),
    S = n(994500),
    I = n(309010),
    j = n(461213),
    T = n(351906),
    C = n(287809),
    N = n(977997),
    w = n(845618),
    P = n(927813),
    D = n(9302),
    R = n(589051),
    k = n(833551),
    M = n(592598),
    L = n(395011),
    U = n(897720),
    G = n(243612),
    V = n(240933),
    z = n(428731),
    F = n(714642),
    H = n(970495),
    Y = n(122749),
    W = n(925159),
    K = n(128307),
    B = n(533923),
    Z = n(965082),
    X = n(749471),
    J = n(672396),
    Q = n(652215),
    q = n(985018);

function $(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            $(e, t, n[t])
        })
    }
    return e
}

function et(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let en = 5 * P.A.Millis.SECOND,
    ei = 8 * P.A.Millis.SECOND,
    er = 30 * P.A.Millis.SECOND,
    el = 30 * P.A.Millis.SECOND,
    ea = Object.freeze({
        timestamp: 0,
        priority: U.In.NORMAL,
        duration: en,
        expirationExternallyManaged: !1,
        type: U.zb.GENERIC
    }),
    es = [],
    eo = !1,
    eu = [],
    ec = {};

function ed(e, t, n) {
    null == ec[e] && (ec[e] = {}), ec[e][t] = n
}
let eh = 30 * P.A.Millis.MINUTE,
    ep = 2 * P.A.Millis.MINUTE;

function ef() {
    if (eo && null == es.find(e => e.status === Q.yFH.FOCUSED))
        for (let e of (eo = !1, es = [...es, ...eu], eu = [], es.length > 40 && (es.length = 40), es)) e.timer.start()
}

function eg() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    es.filter(e => e.type === U.zb.TEXT && e.status === Q.yFH.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
        (n >= e || t.timestamp < Date.now() - er) && em(t.id, Q.yFH.DISMISSED)
    })
}

function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q.yFH.DISMISSED;
    if (null == e) return !1;
    let n = es.findIndex(t => t.id === e);
    if (-1 === n) return !1;
    let i = es[n];
    if (i.timer.stop(), es = [...es], t === Q.yFH.FOCUSED) {
        let [e] = es.splice(n, 1);
        e = et(ee({}, e), {
            status: t
        }), es.unshift(e), eo = !0;
        return
    }
    t === Q.yFH.DISMISSED ? es.splice(n, 1) : es[n] = et(ee({}, i), {
        status: t
    }), ef()
}

function ey(e) {
    let t = es.find(t => t.type === U.zb.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null
}

function eA(e, t) {
    let n = ee(et(ee({}, ea), {
            timestamp: Date.now()
        }), t),
        i = (0, a.A)(),
        r = !1,
        l = ee({
            id: i,
            status: Q.yFH.ACTIVE,
            timer: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            l = r ? Q.yFH.TIMED_OUT : Q.yFH.DISMISSED; - 1 === i && (i = setTimeout(() => u.A.updateNotificationStatus(e, l), null != n ? n : en))
                    },
                    stop() {
                        clearTimeout(i), i = -1
                    }
                }
            }(i, n.expirationExternallyManaged, n.duration),
            props: et(ee({}, e), {
                onNotificationShow: () => {
                    var t;
                    r || (r = !0, null == (t = e.onNotificationShow) || t.call(e, i))
                }
            })
        }, n),
        s = eo ? eu : [...es],
        o = s.findIndex(e => e.priority <= n.priority);
    if (-1 === o ? s.push(l) : s.splice(o, 0, l), s.length > 40) {
        let e = s.pop();
        eo || e.timer.stop()
    }
    return eo || (es = s, l.timer.start()), i
}

function ev(e) {
    var t;
    let n = O.A.getUserGame(e);
    if (null == n) return null;
    let i = null == (t = O.A.getNowPlaying(n.gameId)[e]) ? void 0 : t.activity;
    return null == i || i.type !== Q.$pd.PLAYING ? null : i
}

function eb() {
    if (M.A.isNotificationDisabled(J.KS.NowPlayingNotification)) return !1;
    let e = O.A.usersPlaying,
        t = new Set,
        n = function() {
            let e = [];
            for (let t in ec) e.push(...Object.keys(ec[t]).map(e => e));
            return e
        }(),
        i = !1;
    for (let [n, r] of Object.entries(e)) i = i || function(e, t) {
        var n, i, r, l;
        let a, s, o;
        if (!S.A.isFriend(e)) return !1;
        let u = t.gameId;
        if (null == u) return !1;
        let c = ev(e);
        if (null == c || !(null != (a = (null == (i = c.timestamps) ? void 0 : i.start) != null ? c.timestamps.start : c.created_at) && Date.now() - a < ep)) return !1;
        let d = I.A.getVoiceChannelId(),
            h = null == (n = N.A.getDiscoverableVoiceStateForUser(e)) ? void 0 : n.channelId;
        if (null != d && null != h && d === h) return !1;
        let p = (0, G.qv)();
        return null != p && p.id === u && (null == (s = null === (r = null == (l = ec[u]) ? void 0 : l[e]) || void 0 === r ? void 0 : r.lastSentTimestamp) || Date.now() - s > eh ? (null != (o = (0, W.A)(e, u, c)) && (ed(u, e, {
            userId: e,
            gameId: u,
            lastSentTimestamp: Date.now()
        }), eA(o, {
            type: U.zb.GENERIC,
            priority: U.In.NORMAL
        })), !0) : (ed(u, e, {
            userId: e,
            gameId: u,
            lastSentTimestamp: Date.now()
        }), !1))
    }(n, r), t.add(n);
    let r = new Set;
    for (let e of n) t.has(e) || r.add(e);
    let l = L.A.isOverlayV3EnabledForPID(L.A.getTargetPID()) || null != L.A.getFocusedPID();
    for (let e of r)
        if (! function(e) {
                let t = x.A.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, G.qv)();
                return null != n && null != t.find(e => e.application_id === n.id)
            }(e) && !l) {
            for (let t in ec) {
                let n = ec[t][e];
                null != n && (n.lastSentTimestamp = null)
            }
            i = !0
        } return i
}

function eE(e) {
    let {
        channelId: t,
        ringing: n
    } = e, i = ey(t);
    if (!n.includes(A.default.getId())) return em(i);
    if (null != i) return !1;
    let r = v.A.getChannel(t);
    if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !m.A.getCurrentConfig({
            guildId: e.guildId,
            location: "OverlayV3StartRinging"
        }).enabled || j.A.getStatus() === Q.clD.DND || g.NO.getSetting()) return !1;
    let l = es.find(e => e.type === U.zb.TEXT && e.channelId === t && e.messageType === Q.lAJ.CALL);
    null != l && em(l.id), eA((0, Y.A)(r), {
        priority: U.In.HIGH,
        expirationExternallyManaged: !0,
        type: U.zb.INCOMING_CALL,
        channelId: r.id
    })
}
let eO = {};

function ex(e, t) {
    return "".concat(e, "-").concat(t)
}
class e_ extends(i = s.Ay.Store) {
    initialize() {
        this.waitFor(y.A, A.default, c.A, v.A, d.A, b.A, E.A, O.A, k.default, M.A, L.A, x.A, _.A, S.A, I.A, j.A, T.A, C.default, N.A), this.syncWith([O.A], eb),
            function() {
                let e = I.A.getVoiceChannelId(),
                    t = A.default.getId(),
                    n = _.A.getMediaSessionId();
                if (null != e && null != n)
                    for (let i of c.A.getStreamParticipants(e)) i.user.id !== t && (eO[ex(i.user.id, n)] = Date.now())
            }()
    }
    getNotifications() {
        return es
    }
}
$(e_, "displayName", "OverlayNotificationsStore");
let eS = new e_(o.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
        let {
            notificationId: t,
            status: n
        } = e;
        em(t, n)
    },
    OVERLAY_MOUNTED: function(e) {
        var t;
        let {
            nudges: n
        } = e;
        eg(0);
        let i = null != (t = L.A.getFocusedPID()) ? t : D.UNSET_PID;
        if (k.default.hasChangedRenderMode(i)) return;
        let r = (0, X.A)((0, G.qv)(), n);
        null != r && eA(r, {
            priority: U.In.URGENT,
            type: U.zb.NUDGE,
            duration: ei
        })
    },
    OVERLAY_SET_INPUT_LOCKED: function(e) {
        let {
            locked: t
        } = e;
        if (t) {
            for (let e of es) e.status === Q.yFH.FOCUSED && em(e.id, Q.yFH.ACTIVE);
            return !0
        }
        for (let e of (eg(), es)) e.type === U.zb.NUDGE ? em(e.id, Q.yFH.DISMISSED) : e.status !== Q.yFH.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (es.length > 0) {
            var n;
            return em(null == (n = es.filter(e => e.type === U.zb.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) ? void 0 : n.id, Q.yFH.FOCUSED)
        }
    },
    MESSAGE_CREATE: function(e) {
        var t, n, i;
        let {
            channelId: r,
            message: a
        } = e, s = v.A.getChannel(r), o = C.default.getUser(null == (n = a.author) ? void 0 : n.id);
        if (null == s || null == o) return !1;
        if ([Q.xL.JOIN, Q.xL.JOIN_REQUEST, Q.xL.STREAM_REQUEST].includes(null == (i = a.activity) ? void 0 : i.type)) {
            if (!(0, p.lx)(a, r, !0, !0)) return !1;
            let e = function(e, t, n) {
                var i;
                let r, a, s;
                if (l()(null != t.activity, "received null message activity"), n.id === A.default.getId()) return !1;
                let o = (0, G.qv)(),
                    u = null != (i = null == o ? void 0 : o.altId) ? i : null == o ? void 0 : o.id;
                if (null == o || null == u) return !1;
                switch (t.activity.type) {
                    case Q.xL.JOIN:
                        if (null == (r = x.A.getApplicationActivity(n.id, u)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        a = (0, V.A)(e, t, n, o, r);
                        break;
                    case Q.xL.JOIN_REQUEST:
                        if (null == (r = j.A.getApplicationActivity(u)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        a = (0, K.A)(e, n, o, r);
                        break;
                    case Q.xL.STREAM_REQUEST:
                        let {
                            enableRequestToStreamOverlayNotification: c
                        } = f.m.getCurrentConfig({
                            guildId: e.guild_id,
                            location: "showActivityNotification"
                        }, {
                            autoTrackExposure: !1
                        });
                        if (!c || null == (r = j.A.getApplicationActivity(u)) || r.application_id !== u) return !1;
                        a = (0, B.A)(e, n, o, r)
                }
                return null != a && (eA(a, {
                    priority: U.In.URGENT,
                    expirationExternallyManaged: !0,
                    channelId: e.id,
                    duration: el,
                    uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(u)
                }), s = new Set, es.filter(e => null != e.uniqueKey).sort((e, t) => t.timestamp - e.timestamp).forEach(e => {
                    null != e.uniqueKey && (s.has(e.uniqueKey) ? em(e.id, Q.yFH.DISMISSED) : s.add(e.uniqueKey))
                }), !0)
            }(s, a, o);
            if (!1 !== e) return e
        }
        if (M.A.isNotificationDisabled(J.KS.TextChat) || T.A.disableNotifications || !(0, p.lx)(a, r)) return !1;
        let u = !E.A.isSoundDisabled(w.cH),
            c = null != (t = b.A.getMessage(r, a.id)) ? t : (0, h.rh)(a),
            d = (0, Z.A)(s, c, o, u);
        if (null == d) return !1;
        eA(d, {
            type: U.zb.TEXT,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: a.type
        }), eg()
    },
    CHANNEL_SELECT: function(e) {
        let t, n, {
            channelId: i
        } = e;
        return null != i && (t = es.length, (n = (es = es.filter(e => e.type !== U.zb.TEXT || e.channelId !== i)).length !== t) && ef(), n)
    },
    MESSAGE_ACK: function() {},
    CALL_CREATE: eE,
    CALL_UPDATE: eE,
    CALL_DELETE: function(e) {
        let {
            channelId: t
        } = e;
        em(ey(t))
    },
    GUILD_RING_START: eE,
    GUILD_RING_STOP: function(e) {
        let {
            channelId: t,
            guildId: n,
            ringing: i
        } = e;
        if (!m.A.getCurrentConfig({
                guildId: n,
                location: "OverlayV3StopRinging"
            }).enabled) return !1;
        i.includes(A.default.getId()) && em(ey(t))
    },
    ACTIVITY_USER_ACTION: function(e) {
        let t, {
                actionType: n,
                user: i,
                applicationId: r
            } = e,
            l = (0, G.qv)();
        return null != l && (null == l ? void 0 : l.id) != null && (l.id === r || l.altId === r) && (n === Q.xL.JOIN && (t = (0, z.A)(i, l)), null != t && void eA(t, {
            priority: U.In.URGENT,
            type: U.zb.GENERIC
        }))
    },
    CLIPS_SAVE_CLIP_START: function(e) {
        "manual" === e.clipMethod && eA((0, F.V)(q.intl.string(q.t.NBMK9m)))
    },
    CLIPS_SAVE_CLIP_ERROR: function() {
        eA((0, F.V)(q.intl.string(q.t["1ZbZuh"])))
    },
    STREAM_START: function(e) {
        let t = (0, F.t)();
        null != t && eA(t)
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e;
        if (M.A.isNotificationDisabled(J.KS.StreamWatchNudge)) return !1;
        let n = I.A.getVoiceChannelId(),
            i = A.default.getId(),
            r = _.A.getMediaSessionId();
        if (null != n && null != r)
            for (let e of t) {
                let {
                    userId: t,
                    channelId: a,
                    guildId: s,
                    selfStream: o
                } = e;
                if (t !== i && n === a && o && null != a && null != s) {
                    var l;
                    let {
                        enabled: e
                    } = (0, R.Fg)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = ex(t, r);
                    if (null != eO[n]) continue;
                    eO[n] = Date.now();
                    let i = (0, H.A)(t, a, null != (l = ev(t)) ? l : void 0);
                    if (null == i) continue;
                    eA(i, {
                        priority: U.In.NORMAL,
                        type: U.zb.NUDGE,
                        duration: ei
                    });
                    return
                }
            }
    }
})