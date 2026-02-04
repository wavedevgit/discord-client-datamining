/** chunk id: 703552, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => eI
}), n(321073), n(896048), n(638769), n(667532);
var i, r = n(284009),
    l = n.n(r),
    a = n(835245),
    o = n(311907),
    s = n(73153),
    u = n(684013),
    c = n(587895),
    d = n(313961),
    h = n(274372),
    p = n(141468),
    f = n(742984),
    g = n(159426),
    m = n(253932),
    A = n(164891),
    y = n(616356),
    O = n(961350),
    v = n(734057),
    b = n(320501),
    E = n(803224),
    _ = n(783592),
    S = n(290863),
    x = n(383501),
    I = n(994500),
    j = n(309010),
    C = n(461213),
    T = n(351906),
    w = n(287809),
    N = n(977997),
    P = n(845618),
    D = n(927813),
    R = n(9302),
    L = n(589051),
    k = n(833551),
    M = n(592598),
    z = n(395011),
    V = n(897720),
    U = n(243612),
    G = n(240933),
    H = n(428731),
    Y = n(714642),
    F = n(970495),
    W = n(122749),
    K = n(925159),
    Z = n(128307),
    B = n(533923),
    X = n(965082),
    J = n(749471),
    Q = n(672396),
    q = n(652215),
    $ = n(985018);

function ee(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function et(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            ee(e, t, n[t])
        })
    }
    return e
}

function en(e, t) {
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
let ei = 5 * D.A.Millis.SECOND,
    er = 8 * D.A.Millis.SECOND,
    el = 30 * D.A.Millis.SECOND,
    ea = 30 * D.A.Millis.SECOND,
    eo = Object.freeze({
        timestamp: 0,
        priority: V.In.NORMAL,
        duration: ei,
        expirationExternallyManaged: !1,
        type: V.zb.GENERIC
    }),
    es = [],
    eu = !1,
    ec = [],
    ed = {};

function eh(e, t, n) {
    null == ed[e] && (ed[e] = {}), ed[e][t] = n
}
let ep = 30 * D.A.Millis.MINUTE,
    ef = 2 * D.A.Millis.MINUTE;

function eg() {
    if (eu && null == es.find(e => e.status === q.yFH.FOCUSED))
        for (let e of (eu = !1, es = [...es, ...ec], ec = [], es.length > 40 && (es.length = 40), es)) e.timer.start()
}

function em() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    es.filter(e => e.type === V.zb.TEXT && e.status === q.yFH.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
        (n >= e || t.timestamp < Date.now() - el) && eA(t.id, q.yFH.DISMISSED)
    })
}

function eA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q.yFH.DISMISSED;
    if (null == e) return !1;
    let n = es.findIndex(t => t.id === e);
    if (-1 === n) return !1;
    let i = es[n];
    if (i.timer.stop(), es = [...es], t === q.yFH.FOCUSED) {
        let [e] = es.splice(n, 1);
        e = en(et({}, e), {
            status: t
        }), es.unshift(e), eu = !0;
        return
    }
    t === q.yFH.DISMISSED ? es.splice(n, 1) : es[n] = en(et({}, i), {
        status: t
    }), eg()
}

function ey(e) {
    let t = es.find(t => t.type === V.zb.INCOMING_CALL && t.channelId === e);
    return null != t ? t.id : null
}

function eO(e, t) {
    let n = et(en(et({}, eo), {
            timestamp: Date.now()
        }), t),
        i = (0, a.A)(),
        r = !1,
        l = et({
            id: i,
            status: q.yFH.ACTIVE,
            timer: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            l = r ? q.yFH.TIMED_OUT : q.yFH.DISMISSED; - 1 === i && (i = setTimeout(() => u.A.updateNotificationStatus(e, l), null != n ? n : ei))
                    },
                    stop() {
                        clearTimeout(i), i = -1
                    }
                }
            }(i, n.expirationExternallyManaged, n.duration),
            props: en(et({}, e), {
                onNotificationShow: () => {
                    var t;
                    r || (r = !0, null == (t = e.onNotificationShow) || t.call(e, i))
                }
            })
        }, n),
        o = eu ? ec : [...es],
        s = o.findIndex(e => e.priority <= n.priority);
    if (-1 === s ? o.push(l) : o.splice(s, 0, l), o.length > 40) {
        let e = o.pop();
        eu || e.timer.stop()
    }
    return eu || (es = o, l.timer.start()), i
}

function ev(e) {
    var t;
    let n = _.A.getUserGame(e);
    if (null == n) return null;
    let i = null == (t = _.A.getNowPlaying(n.gameId)[e]) ? void 0 : t.activity;
    return null == i || i.type !== q.$pd.PLAYING ? null : i
}

function eb() {
    if (M.A.isNotificationDisabled(Q.KS.NowPlayingNotification)) return !1;
    let e = _.A.usersPlaying,
        t = new Set,
        n = function() {
            let e = [];
            for (let t in ed) e.push(...Object.keys(ed[t]).map(e => e));
            return e
        }(),
        i = !1;
    for (let [n, r] of Object.entries(e)) i = i || function(e, t) {
        var n, i, r, l;
        let a, o, s;
        if (!I.A.isFriend(e)) return !1;
        let u = t.gameId;
        if (null == u) return !1;
        let c = ev(e);
        if (null == c || !(null != (a = (null == (i = c.timestamps) ? void 0 : i.start) != null ? c.timestamps.start : c.created_at) && Date.now() - a < ef)) return !1;
        let d = j.A.getVoiceChannelId(),
            h = null == (n = N.A.getDiscoverableVoiceStateForUser(e)) ? void 0 : n.channelId;
        if (null != d && null != h && d === h) return !1;
        let p = (0, U.qv)();
        return null != p && p.id === u && (null == (o = null === (r = null == (l = ed[u]) ? void 0 : l[e]) || void 0 === r ? void 0 : r.lastSentTimestamp) || Date.now() - o > ep ? (null != (s = (0, K.A)(e, u, c)) && (eh(u, e, {
            userId: e,
            gameId: u,
            lastSentTimestamp: Date.now()
        }), eO(s, {
            type: V.zb.GENERIC,
            priority: V.In.NORMAL
        })), !0) : (eh(u, e, {
            userId: e,
            gameId: u,
            lastSentTimestamp: Date.now()
        }), !1))
    }(n, r), t.add(n);
    let r = new Set;
    for (let e of n) t.has(e) || r.add(e);
    let l = z.A.isOverlayV3EnabledForPID(z.A.getTargetPID()) || null != z.A.getFocusedPID();
    for (let e of r)
        if (! function(e) {
                let t = S.A.getActivities(e);
                if (0 === t.length) return !1;
                let n = (0, U.qv)();
                return null != n && null != t.find(e => e.application_id === n.id)
            }(e) && !l) {
            for (let t in ed) {
                let n = ed[t][e];
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
    if (!n.includes(O.default.getId())) return eA(i);
    if (null != i) return !1;
    let r = v.A.getChannel(t);
    if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !A.A.getCurrentConfig({
            guildId: e.guildId,
            location: "OverlayV3StartRinging"
        }).enabled || C.A.getStatus() === q.clD.DND || m.NO.getSetting()) return !1;
    let l = es.find(e => e.type === V.zb.TEXT && e.channelId === t && e.messageType === q.lAJ.CALL);
    null != l && eA(l.id), eO((0, W.A)(r), {
        priority: V.In.HIGH,
        expirationExternallyManaged: !0,
        type: V.zb.INCOMING_CALL,
        channelId: r.id
    })
}
let e_ = {};

function eS(e, t) {
    return "".concat(e, "-").concat(t)
}
class ex extends(i = o.Ay.Store) {
    initialize() {
        this.waitFor(c.A, y.A, O.default, d.A, v.A, h.A, b.A, E.A, _.A, k.default, M.A, z.A, S.A, x.A, I.A, j.A, C.A, T.A, w.default, N.A), this.syncWith([_.A], eb),
            function() {
                let e = j.A.getVoiceChannelId(),
                    t = O.default.getId(),
                    n = x.A.getMediaSessionId();
                if (null != e && null != n)
                    for (let i of d.A.getStreamParticipants(e)) i.user.id !== t && (e_[eS(i.user.id, n)] = Date.now())
            }()
    }
    getNotifications() {
        return es
    }
}
ee(ex, "displayName", "OverlayNotificationsStore");
let eI = new ex(s.h, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
        let {
            notificationId: t,
            status: n
        } = e;
        eA(t, n)
    },
    OVERLAY_MOUNTED: function(e) {
        var t;
        let {
            nudges: n
        } = e;
        em(0);
        let i = null != (t = z.A.getFocusedPID()) ? t : R.UNSET_PID;
        if (k.default.hasChangedRenderMode(i)) return;
        let r = (0, J.A)((0, U.qv)(), n);
        null != r && eO(r, {
            priority: V.In.URGENT,
            type: V.zb.NUDGE,
            duration: er
        })
    },
    OVERLAY_SET_INPUT_LOCKED: function(e) {
        let {
            locked: t
        } = e;
        if (t) {
            for (let e of es) e.status === q.yFH.FOCUSED && eA(e.id, q.yFH.ACTIVE);
            return !0
        }
        for (let e of (em(), es)) e.type === V.zb.NUDGE ? eA(e.id, q.yFH.DISMISSED) : e.status !== q.yFH.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (es.length > 0) {
            var n;
            return eA(null == (n = es.filter(e => e.type === V.zb.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) ? void 0 : n.id, q.yFH.FOCUSED)
        }
    },
    MESSAGE_CREATE: function(e) {
        var t, n, i;
        let {
            channelId: r,
            message: a
        } = e, o = v.A.getChannel(r), s = w.default.getUser(null == (n = a.author) ? void 0 : n.id);
        if (null == o || null == s) return !1;
        if ([q.xL.JOIN, q.xL.JOIN_REQUEST, q.xL.STREAM_REQUEST].includes(null == (i = a.activity) ? void 0 : i.type)) {
            if (!(0, f.lx)(a, r, !0, !0)) return !1;
            let e = function(e, t, n) {
                let i, r, a, o, s, u;
                if (l()(null != t.activity, "received null message activity"), n.id === O.default.getId()) return !1;
                let d = (0, U.qv)();
                if (null == d || null == d.id) return !1;
                let h = c.A.getApplication(d.id),
                    p = [d.id];
                null != d.altId && p.push(d.altId), (null == h ? void 0 : h.linkedGames) != null && p.push(...h.linkedGames.map(e => e.id));
                let f = t.activity.party_id;
                switch (t.activity.type) {
                    case q.xL.JOIN:
                        i = e => S.A.getApplicationActivity(n.id, e), r = e => null != e.party && e.party.id === f;
                        break;
                    case q.xL.JOIN_REQUEST:
                        i = e => C.A.getApplicationActivity(e), r = e => null != e.party && e.party.id === f;
                        break;
                    case q.xL.STREAM_REQUEST:
                        let {
                            enableRequestToStreamOverlayNotification: m
                        } = g.m.getCurrentConfig({
                            guildId: e.guild_id,
                            location: "showActivityNotification"
                        }, {
                            autoTrackExposure: !1
                        });
                        if (!m) return !1;
                        i = e => C.A.getApplicationActivity(e), r = (e, t) => e.application_id === t;
                        break;
                    default:
                        return !1
                }
                for (let e of p) {
                    if (null != (a = i(e)) && r(a, e)) {
                        o = e;
                        break
                    }
                    a = void 0
                }
                if (null == a || null == o) return !1;
                switch (t.activity.type) {
                    case q.xL.JOIN:
                        s = (0, G.A)(e, t, n, a, o);
                        break;
                    case q.xL.JOIN_REQUEST:
                        s = (0, Z.A)(e, n, d, a);
                        break;
                    case q.xL.STREAM_REQUEST:
                        s = (0, B.A)(e, n, d, a)
                }
                return null != s && (eO(s, {
                    priority: V.In.URGENT,
                    expirationExternallyManaged: !0,
                    channelId: e.id,
                    duration: ea,
                    uniqueKey: "activity-".concat(t.activity.type, "-").concat(n.id, "-").concat(e.id, "-").concat(o)
                }), u = new Set, es.filter(e => null != e.uniqueKey).sort((e, t) => t.timestamp - e.timestamp).forEach(e => {
                    null != e.uniqueKey && (u.has(e.uniqueKey) ? eA(e.id, q.yFH.DISMISSED) : u.add(e.uniqueKey))
                }), !0)
            }(o, a, s);
            if (!1 !== e) return e
        }
        if (M.A.isNotificationDisabled(Q.KS.TextChat) || T.A.disableNotifications || !(0, f.lx)(a, r)) return !1;
        let u = !E.A.isSoundDisabled(P.cH),
            d = null != (t = b.A.getMessage(r, a.id)) ? t : (0, p.rh)(a),
            h = (0, X.A)(o, d, s, u);
        if (null == h) return !1;
        eO(h, {
            type: V.zb.TEXT,
            channelId: o.id,
            expirationExternallyManaged: !0,
            messageType: a.type
        }), em()
    },
    CHANNEL_SELECT: function(e) {
        let t, n, {
            channelId: i
        } = e;
        return null != i && (t = es.length, (n = (es = es.filter(e => e.type !== V.zb.TEXT || e.channelId !== i)).length !== t) && eg(), n)
    },
    MESSAGE_ACK: function() {},
    CALL_CREATE: eE,
    CALL_UPDATE: eE,
    CALL_DELETE: function(e) {
        let {
            channelId: t
        } = e;
        eA(ey(t))
    },
    GUILD_RING_START: eE,
    GUILD_RING_STOP: function(e) {
        let {
            channelId: t,
            guildId: n,
            ringing: i
        } = e;
        if (!A.A.getCurrentConfig({
                guildId: n,
                location: "OverlayV3StopRinging"
            }).enabled) return !1;
        i.includes(O.default.getId()) && eA(ey(t))
    },
    ACTIVITY_USER_ACTION: function(e) {
        let t, {
                actionType: n,
                user: i,
                applicationId: r
            } = e,
            l = (0, U.qv)();
        return null != l && (null == l ? void 0 : l.id) != null && (l.id === r || l.altId === r) && (n === q.xL.JOIN && (t = (0, H.A)(i, l)), null != t && void eO(t, {
            priority: V.In.URGENT,
            type: V.zb.GENERIC
        }))
    },
    CLIPS_SAVE_CLIP_START: function(e) {
        "manual" === e.clipMethod && eO((0, Y.V)($.intl.string($.t.NBMK9m)))
    },
    CLIPS_SAVE_CLIP_ERROR: function() {
        eO((0, Y.V)($.intl.string($.t["1ZbZuh"])))
    },
    STREAM_START: function(e) {
        let t = (0, Y.t)();
        null != t && eO(t)
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e;
        if (M.A.isNotificationDisabled(Q.KS.StreamWatchNudge)) return !1;
        let n = j.A.getVoiceChannelId(),
            i = O.default.getId(),
            r = x.A.getMediaSessionId();
        if (null != n && null != r)
            for (let e of t) {
                let {
                    userId: t,
                    channelId: a,
                    guildId: o,
                    selfStream: s
                } = e;
                if (t !== i && n === a && s && null != a && null != o) {
                    var l;
                    let {
                        enabled: e
                    } = (0, L.Fg)("OverlayV3StreamWatchNudge");
                    if (!e) return;
                    let n = eS(t, r);
                    if (null != e_[n]) continue;
                    e_[n] = Date.now();
                    let i = (0, F.A)(t, a, null != (l = ev(t)) ? l : void 0);
                    if (null == i) continue;
                    eO(i, {
                        priority: V.In.NORMAL,
                        type: V.zb.NUDGE,
                        duration: er
                    });
                    return
                }
            }
    }
})