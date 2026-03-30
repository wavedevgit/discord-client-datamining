/** chunk id: 888288 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => ee
}), i(321073);
var n = i(284009),
    s = i.n(n),
    a = i(835245),
    l = i(311907),
    r = i(118356),
    o = i(73153),
    d = i(684013),
    c = i(504139),
    u = i(175333),
    h = i(242363),
    _ = i(729843),
    p = i(996797),
    f = i(942236),
    m = i(102037),
    g = i(274372),
    A = i(747189),
    x = i(742984),
    v = i(833551),
    y = i(592598),
    E = i(253932),
    I = i(164891),
    S = i(961350),
    C = i(734057),
    b = i(803224),
    N = i(290863),
    T = i(309010),
    O = i(461213),
    L = i(351906),
    j = i(287809),
    w = i(845618),
    D = i(242286),
    R = i(256415),
    k = i(927813),
    M = i(9302),
    P = i(157257),
    G = i(652215),
    V = i(672396),
    U = i(985018);
let z = new r.Vy("LegacyOverlayNotificationsStore"),
    H = 5 * k.A.Millis.SECOND,
    W = 8 * k.A.Millis.SECOND,
    B = 30 * k.A.Millis.SECOND,
    F = Object.freeze({
        priority: 0,
        duration: H,
        expirationExternallyManaged: !1,
        type: 0
    }),
    K = [],
    Y = (e, t, i) => {
        let n = t ? G.yFH.TIMED_OUT : G.yFH.DISMISSED;
        return setTimeout(() => d.A.updateNotificationStatus(e, n), null != i ? i : H)
    };

function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.yFH.DISMISSED;
    if (null == e) return !1;
    let i = K.findIndex(t => t.id === e);
    if (-1 === i) return !1;
    let n = K[i];
    clearTimeout(n.timerId), K = [...K], t === G.yFH.DISMISSED ? K.splice(i, 1) : K[i] = {
        ...n,
        status: t
    }
}

function X(e) {
    let t = K.length;
    return (K = K.filter(t => 1 !== t.type || t.channelId !== e)).length !== t
}

function J(e) {
    let t = K.find(t => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null
}

function Q(e, t) {
    let i = {
        ...F,
        ...t
    };
    if (2 !== i.priority && !R.default.isInstanceFocused()) return null;
    let n = (0, a.A)(),
        s = {
            id: n,
            status: G.yFH.ACTIVE,
            timerId: Y(n, i.expirationExternallyManaged, i.duration),
            props: e,
            ...i
        },
        l = (K = [...K]).findIndex(e => e.priority <= i.priority);
    return -1 === l ? K.push(s) : K.splice(l, 0, s), K.length > 10 && clearTimeout(K.pop().timerId), n
}

function q(e) {
    let {
        channelId: t,
        ongoingRings: i
    } = e, n = J(t);
    if (!Object.keys(i).includes(S.default.getId())) return Z(n);
    if (null != n) return !1;
    let s = C.A.getChannel(t);
    if (null == s || !s.isRingable() || "GUILD_RING_START" === e.type && !I.A.getCurrentConfig({
            guildId: e.guildId,
            location: "OverlayStartRinging"
        }).enabled || O.A.getStatus() === G.clD.DND || E.NO.getSetting()) return !1;
    let a = K.find(e => 1 === e.type && e.channelId === t && e.messageType === G.lAJ.CALL);
    null != a && Z(a.id), Q((0, _.A)(s), {
        priority: 1,
        expirationExternallyManaged: !0,
        type: 2,
        channelId: s.id
    })
}
class $ extends l.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(S.default, C.A, g.A, b.A, D.default, v.default, P.A, y.A, R.default, N.A, T.A, O.A, L.A, j.default)
    }
    getNotifications() {
        return K
    }
}
let ee = new $(o.h, !__OVERLAY__ ? {} : {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
        let {
            notificationId: t,
            status: i
        } = e;
        Z(t, i)
    },
    OVERLAY_MOUNTED: function(e) {
        let {
            nudges: t
        } = e;
        if (v.default.hasChangedRenderMode(D.default.getFocusedPID() ?? (0, M.getPID)())) return void z.info("Overlay mounted, but render modes have changed", {
            nudges: t
        });
        let i = t[0];
        if (z.info("Overlay mounted", {
                nudges: t,
                selectedNudge: i
            }), null == i) return;
        let n = function(e) {
            switch (e.type) {
                case V.Jr.GO_LIVE_VOICE:
                case V.Jr.GO_LIVE_NON_VOICE:
                    return (0, h.A)(e);
                case V.Jr.NEWS:
                default:
                    return (0, m.A)(e)
            }
        }(i);
        null != n && Q(n, {
            priority: 2,
            duration: W
        })
    },
    OVERLAY_SET_INPUT_LOCKED: function(e) {
        let {
            locked: t
        } = e;
        if (t) return !1;
        K = K.map(e => e.status === G.yFH.ACTIVE ? (clearTimeout(e.timerId), {
            ...e,
            timerId: Y(e.id, e.expirationExternallyManaged)
        }) : e)
    },
    MESSAGE_CREATE: function(e) {
        let {
            channelId: t,
            message: i
        } = e, n = C.A.getChannel(t), a = j.default.getUser(i.author?.id);
        if (null == n || null == a) return !1;
        if (i.activity?.type === G.xL.JOIN || i.activity?.type === G.xL.JOIN_REQUEST) {
            if (!(0, x.lx)(i, t, !0, !0)) return !1;
            let e = function(e, t, i) {
                let n, a;
                if (s()(null != t.activity, "received null message activity"), i.id === S.default.getId()) return !1;
                let l = P.A.getGame();
                if (null == l) return !1;
                switch (t.activity.type) {
                    case G.xL.JOIN:
                        if (null == (n = N.A.getApplicationActivity(i.id, l.id)) || null == n.party || n.party.id !== t.activity.party_id) return !1;
                        a = (0, c.A)(e, t, i, l, n);
                        break;
                    case G.xL.JOIN_REQUEST:
                        if (null == (n = O.A.getApplicationActivity(l.id)) || null == n.party || n.party.id !== t.activity.party_id) return !1;
                        a = (0, p.A)(e, i, l, n)
                }
                if (null == a) return !1;
                let r = Q(a, {
                    priority: 2,
                    expirationExternallyManaged: !0,
                    channelId: e.id
                });
                return null != r && Y(r, !1, B), !0
            }(n, i, a);
            if (!1 !== e) return e
        }
        if ((!R.default.isInstanceLocked() || R.default.isPinned(G.uss.TEXT)) && t === T.A.getChannelId() || y.A.isNotificationDisabled(V.KS.TextChat) || L.A.disableNotifications || !(0, x.lx)(i, t)) return !1;
        let l = !b.A.isSoundDisabled(w.cH);
        Q((0, f.A)(n, i, a, l), {
            type: 1,
            channelId: n.id,
            messageType: i.type
        })
    },
    CHANNEL_SELECT: function(e) {
        let {
            channelId: t
        } = e;
        return null != t && X(t)
    },
    MESSAGE_ACK: function(e) {
        let {
            channelId: t
        } = e;
        return X(t)
    },
    CALL_CREATE: q,
    CALL_UPDATE: q,
    CALL_DELETE: function(e) {
        let {
            channelId: t
        } = e;
        Z(J(t))
    },
    GUILD_RING_START: q,
    GUILD_RING_STOP: function(e) {
        let {
            channelId: t,
            guildId: i,
            ringing: n
        } = e;
        if (!I.A.getCurrentConfig({
                guildId: i,
                location: "OverlayStopRinging"
            }).enabled) return !1;
        n.includes(S.default.getId()) && Z(J(t))
    },
    ACTIVITY_USER_ACTION: function(e) {
        let t, {
                actionType: i,
                user: n,
                applicationId: s
            } = e,
            a = P.A.getGame();
        return null != a && a.id === s && (i === G.xL.JOIN && (t = (0, u.A)(n, a)), null != t && void Q(t, {
            priority: 2,
            type: 0
        }))
    },
    CLIPS_SAVE_CLIP_START: function(e) {
        "manual" === e.clipMethod && Q((0, A.V)(U.intl.string(U.t.NBMK9m)))
    },
    CLIPS_SAVE_CLIP_ERROR: function() {
        Q((0, A.V)(U.intl.string(U.t["1ZbZuh"])))
    },
    STREAM_START: function(e) {
        let t = (0, A.t)();
        null != t && Q(t)
    }
})