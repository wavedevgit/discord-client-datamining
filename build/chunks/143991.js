/** chunk id: 143991 params = (module,exports,require) **/
n.d(t, {
    A: () => H
});
var i = n(627968),
    l = n(64700),
    r = n(735438),
    a = n(311907),
    s = n(933958),
    o = n(969151),
    d = n(91242),
    c = n(643501),
    u = n(652896),
    A = n(242919),
    h = n(400492),
    _ = n(723991),
    m = n(105530),
    g = n(95701),
    p = n(616356),
    E = n(961350),
    I = n(734057),
    f = n(71393),
    C = n(430452),
    T = n(803224),
    S = n(383501),
    N = n(309010),
    x = n(485296),
    v = n(977997),
    b = n(607567),
    y = n(403362),
    O = n(652215);

function L(e, t, n, i) {
    l.useEffect(() => {
        let l = t(),
            r = new a.ru(e, () => {
                let e = t(),
                    r = n(l, e);
                null == r || T.A.isSoundDisabled(r) || (0, h.Ak)(r, i ?? .4), l = e
            });
        return r.attach("useSound"), () => r.detach()
    })
}

function R() {
    return L([C.Ay, N.A], () => ({
        inVoiceChannel: null != N.A.getVoiceChannelId(),
        selfMute: C.Ay.isSelfMute(),
        selfDeaf: C.Ay.isSelfDeaf(),
        audioPermissionReady: C.Ay.isNativeAudioPermissionReady(),
        shouldSkipMuteUnmuteSound: C.Ay.shouldSkipMuteUnmuteSound()
    }), (e, t) => {
        let {
            inVoiceChannel: n,
            selfMute: i,
            selfDeaf: l,
            audioPermissionReady: r,
            shouldSkipMuteUnmuteSound: a
        } = t;
        if (e.selfDeaf !== l) return l ? "deafen" : "undeafen";
        if (r && (n || e.audioPermissionReady) && e.selfMute !== i) return a ? void C.Ay.notifyMuteUnmuteSoundWasSkipped() : i ? "mute" : "unmute"
    }), null
}

function P() {
    return L([C.Ay, N.A], () => ({
        videoEnabled: C.Ay.isVideoEnabled(),
        inVoiceChannel: null != N.A.getVoiceChannelId()
    }), (e, t) => {
        let {
            videoEnabled: n,
            inVoiceChannel: i
        } = t;
        if (!(0, _.q)()) return;
        let {
            videoEnabled: l,
            inVoiceChannel: r
        } = e;
        if (l !== n && r && i) return n ? "camera_on" : "camera_off"
    }), null
}

function D() {
    return L([I.A, S.A, N.A, c.default], () => {
        let e = I.A.getChannel(N.A.getVoiceChannelId()),
            t = e?.type,
            n = e?.getGuildId(),
            i = S.A.getWasEverRtcConnected(),
            l = S.A.getState();
        return {
            channelType: t,
            guildId: n,
            connected: l === O.S7L.RTC_CONNECTED,
            connectHasStarted: !i && l !== O.S7L.DISCONNECTED || l === O.S7L.RTC_CONNECTED,
            awaitingRemote: null != c.default.getAwaitingRemoteSessionInfo(),
            connectedRemote: null != c.default.getRemoteSessionId()
        }
    }, (e, t) => {
        let {
            channelType: n,
            connected: i,
            connectHasStarted: l,
            awaitingRemote: r,
            connectedRemote: a
        } = t, s = e.channelType, o = e.connectedRemote, d = e.connected;
        if (!e.connectHasStarted && l || a && !o) {
            if (null != n && g.Do.has(n)) return;
            return "user_join"
        }
        if (d && !i) {
            if (r || a || null != s && g.Do.has(s)) return;
            return "disconnect"
        }
    }), null
}

function j() {
    return L([x.A], () => x.A.isCurrentUserPTTActive(), (e, t) => {
        if (e !== t) {
            let e = C.Ay.isSelfMute();
            if (C.Ay.getMode() === O.TBI.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop"
        }
    }), null
}

function M() {
    return L([C.Ay], () => C.Ay.isSelfMutedTemporarily(), (e, t) => {
        if (e !== t) {
            let e = C.Ay.isSelfMute();
            if (C.Ay.getMode() === O.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start"
        }
    }), null
}

function w() {
    return L([x.A], () => x.A.isCurrentUserPrioritySpeaker(), (e, t) => {
        if (e !== t) {
            let e = C.Ay.isSelfMute();
            if (C.Ay.getMode() === O.TBI.VOICE_ACTIVITY && !e) return t ? "ptt_start" : "ptt_stop"
        }
    }), null
}

function U() {
    return L([v.A], () => v.A.userHasBeenMovedVersion, (e, t) => {
        if (e !== t) return "user_moved"
    }), null
}

function G() {
    return L([N.A, v.A], () => {
        let e = N.A.getVoiceChannelId();
        if (null == e) return m.zF.NONE;
        let t = v.A.getVoiceStateForChannel(e);
        return (0, m.eY)(t)
    }, (e, t) => {
        if (e !== t && t === m.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect"
    }), null
}

function k() {
    return L([N.A, p.A, E.default, v.A, I.A], () => {
        let e, t, n = N.A.getVoiceChannelId(),
            i = E.default.getId(),
            l = [],
            r = null,
            a = 0,
            s = p.A.getAllActiveStreams();
        if (null != n) {
            let i = I.A.getChannel(n);
            null != i && (e = i.type, t = b.Ay.countVoiceStatesForChannel(i.id) - !!v.A.isInChannel(i.id), l = p.A.getAllApplicationStreamsForChannel(i.id).map(e => e.ownerId))
        }
        let o = null;
        return o = 1 === s.length ? s[0] : p.A.getCurrentUserActiveStream(), o?.state === O.XYD.CONNECTING && (o = null), null != o && (r = (0, u._z)(o), a = p.A.getViewerIds(r).filter(e => e !== i).length), {
            channelType: e,
            voiceChannelId: n,
            voiceChannelUserCount: t,
            streamingUserIds: l,
            singleActiveStreamKey: r,
            singleActiveStreamViewerCount: a,
            currentUserId: i,
            allActiveStreams: s
        }
    }, (e, t) => {
        let {
            channelType: n,
            voiceChannelId: i,
            voiceChannelUserCount: l,
            streamingUserIds: r,
            singleActiveStreamKey: a,
            singleActiveStreamViewerCount: s,
            currentUserId: o
        } = t;
        if (e.voiceChannelId !== i || null == i || function(e) {
                let t = I.A.getChannel(e);
                if (null == t) return !1;
                let n = t.getGuildId();
                if (null == n) return !1;
                let i = f.A.getGuild(n);
                return null != i && i.afkChannelId === t.id
            }(i) || null != n && g.Do.has(n)) return;
        let d = null != a && e.singleActiveStreamKey === a,
            c = r.some(t => !e.streamingUserIds.includes(t)),
            u = e.allActiveStreams.map(e => e.ownerId),
            A = e.streamingUserIds.some(e => !r.includes(e) && (e === o || u.includes(e)));
        if (c) return "stream_started";
        if (A) return "stream_ended";
        if (e.singleActiveStreamViewerCount <= 25 && d && s > e.singleActiveStreamViewerCount) return "stream_user_joined";
        if (null != e.voiceChannelUserCount && null != l && e.voiceChannelUserCount <= 25 && l > e.voiceChannelUserCount) return "user_join";
        if (null != e.voiceChannelUserCount && null != l && e.voiceChannelUserCount <= 25 && l < e.voiceChannelUserCount) return "user_leave";
        else if (e.singleActiveStreamViewerCount <= 25 && d && s < e.singleActiveStreamViewerCount) return "stream_user_left"
    }), null
}

function V() {
    return L([N.A, s.Ay, d.A, E.default], () => {
        let e = N.A.getVoiceChannelId(),
            t = N.A.getChannelId(),
            n = s.Ay.getConnectedActivityLocation(),
            i = (0, o.H)(n),
            l = E.default.getId(),
            r = (0, y.Vq)(t) ? s.Ay.getEmbeddedActivitiesForChannel(t) : s.Am,
            a = (0, y.Vq)(e) ? s.Ay.getEmbeddedActivitiesForChannel(e) : s.Am,
            c = (0, y.Vq)(i) ? s.Ay.getEmbeddedActivitiesForChannel(i) : s.Am,
            u = (0, y.Vq)(n) ? s.Ay.getSelfEmbeddedActivityForLocation(n) : null;
        return {
            connectedActivityLocation: n,
            voiceChannelId: e,
            currentUserId: l,
            channelActivities: r,
            connectedChannelActivities: c,
            userConnectedActivity: u,
            voiceChannelActivities: a,
            connectedFrame: d.A.getConnectedFrame()
        }
    }, (e, t) => {
        let n, {
                connectedActivityLocation: i,
                voiceChannelId: l,
                currentUserId: r,
                channelActivities: a,
                connectedChannelActivities: s,
                userConnectedActivity: o,
                voiceChannelActivities: d,
                connectedFrame: c
            } = t,
            u = d.some(e => e.applicationId === o?.applicationId && e.launchId === o.launchId);
        if ((0, y.Vq)(l)) {
            let t = e.voiceChannelActivities.find(e => e.userIds.has(r)),
                i = d.find(e => e.userIds.has(r));
            e.voiceChannelActivities.length < d.length && (0, y.Vq)(e.voiceChannelId) && (n = "activity_launch"), void 0 === i && (0, y.Vq)(t) && (n = "activity_end"), void 0 === t && (0, y.Vq)(i) && i.userIds.size > 1 && (n = "activity_user_join"), (0, y.Vq)(i) && (0, y.Vq)(t) && (i.userIds.size > t.userIds.size && (n = "activity_user_join"), i.userIds.size < t.userIds.size && (n = "activity_user_left"))
        }
        if (!u) {
            e.connectedChannelActivities.length < s.length && e.channelActivities.length < a.length && (n = "activity_launch");
            let t = e.userConnectedActivity;
            null == o && (0, y.Vq)(t) && (n = "activity_end"), (0, y.Vq)(o) && (0, y.Vq)(t) && (o.userIds.size > t.userIds.size && (n = "activity_user_join"), o.userIds.size < t.userIds.size && (n = "activity_user_left"))
        }
        return null == n && (null != e.connectedActivityLocation || null != i) && (null == e.connectedActivityLocation && null != i ? n = "activity_launch" : null != e.connectedActivityLocation && null == i ? n = "activity_end" : null != o && null != e.userConnectedActivity && (e.userConnectedActivity.userIds.size < o.userIds.size ? n = "activity_user_join" : e.userConnectedActivity.userIds.size > o.userIds.size && (n = "activity_user_leave"))), null == n && (null != e.connectedFrame || null != c) && (null == e.connectedFrame && null != c ? n = "activity_launch" : null != e.connectedFrame && null == c && (n = "activity_end")), n
    }), null
}

function B() {
    return L([A.A, N.A], () => ({
        hangStatus: A.A.getCurrentHangStatus(),
        customHangStatus: A.A.getCustomHangStatus(),
        gameActivityHangStatus: A.A.getGameActivityHangStatus(),
        inVoice: null != N.A.getVoiceChannelId()
    }), (e, t) => {
        let {
            hangStatus: n,
            customHangStatus: i,
            gameActivityHangStatus: l
        } = t;
        if (e.inVoice && (null != n && n !== e.hangStatus || null != i && (i.status !== e.customHangStatus?.status || !(0, r.isEqual)(i.emoji, e.customHangStatus?.emoji)) || null != l && e.gameActivityHangStatus !== l)) return "hang_status_select"
    }, .15), null
}

function H() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(R, {}), (0, i.jsx)(P, {}), (0, i.jsx)(D, {}), (0, i.jsx)(j, {}), (0, i.jsx)(M, {}), (0, i.jsx)(U, {}), (0, i.jsx)(k, {}), (0, i.jsx)(G, {}), (0, i.jsx)(V, {}), (0, i.jsx)(w, {}), (0, i.jsx)(B, {})]
    })
}