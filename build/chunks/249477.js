/** chunk id: 249477 params = (module,exports,require) **/
n.d(t, {
    A: () => ec
}), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(735438),
    r = n.n(a),
    s = n(665260),
    o = n(311907),
    d = n(544420),
    c = n(56562),
    u = n(77729),
    A = n(855511),
    h = n(58149),
    _ = n(237774),
    m = n(885437),
    p = n(973854),
    g = n(504982),
    E = n(815706),
    I = n(134047),
    f = n(313961),
    C = n(626584),
    T = n(181079),
    N = n(668267),
    S = n(379587),
    x = n(5180),
    v = n(953384),
    b = n(973522),
    y = n(15285),
    O = n(142120),
    L = n(442187),
    R = n(698441),
    P = n(960755),
    D = n(380335),
    M = n(211753),
    j = n(41984),
    w = n(833551),
    U = n(515183),
    G = n(847521),
    k = n(446600),
    V = n(253932),
    B = n(734057),
    H = n(760751),
    F = n(696451),
    Y = n(71393),
    W = n(430452),
    K = n(320501),
    q = n(383501),
    z = n(309010),
    $ = n(967198),
    Q = n(461213),
    X = n(543465),
    Z = n(287809),
    J = n(619921),
    ee = n(595623),
    et = n(256415),
    en = n(954571),
    ei = n(403362),
    el = n(474090),
    ea = n(652215),
    er = n(705751),
    es = n(788868);
async function eo(e) {
    let {
        runningGame: t,
        game: n,
        detectionMethod: i,
        overlayStatus: l,
        overlayMethod: a,
        sharedGuildIds: r,
        voiceChannelId: s,
        voiceChannelType: o,
        voiceChannelBitrate: d,
        voiceChannelGuildId: A
    } = e, h = await (0, U.E1)(t.pid), {
        gameName: _,
        gameId: m,
        exe: p,
        distributor: g,
        rawExePath: E
    } = (0, b.wH)(t), I = l.enabledLegacy || l.enabledOOP, f = M.x.legacyEnabled || M.x.oopEnabled, C = l.source;
    en.default.track(ea.HAw.LAUNCH_GAME, {
        game: _,
        game_id: m,
        verified: null != n && (0, b.PQ)(E, n?.executables),
        elevated: t.elevated,
        is_launcher: t?.isLauncher ?? !1,
        game_platform: ea.yTV.DESKTOP,
        detection_method: i,
        distributor: g,
        is_overlay_enabled: f,
        is_overlay_game_enabled: I,
        is_overlay_game_source: C,
        fullscreen_type: null != h ? c.aI[h] : c.aI.UNKNOWN.toString(),
        hardware_display_count: await u.A?.hardware?.getDisplayCount?.() ?? null,
        overlay_method: j.Ue[a] ?? (__OVERLAY__ ? j.Ue[j.Ue.Hook] : null),
        activity_status_enabled: V.tz.getSetting(),
        activity_status_shared_guilds: r,
        current_user_status: Q.A.getStatus(),
        game_detection_enabled: (0, y.Xr)(t),
        executable_path: p,
        voice_channel_id: s,
        voice_channel_type: o,
        voice_channel_bitrate: d,
        voice_channel_guild_id: A,
        distributor_game_id: t.sku,
        hidden_by_distributor: t.hidden,
        game_metadata: (0, G.MT)(t),
        executable_fingerprint: t.executableFingerprint
    }), null != p && y.Ay.addExecutableTrackedByAnalytics(p)
}
class ed extends l.PureComponent {
    isMessageRequestsInitialized = !1;
    debouncedRobloxAnalytics = r().debounce(eo, 5e3);
    componentDidUpdate(e) {
        let {
            voiceChannelId: t,
            voiceChannelGuildId: n,
            voiceChannelType: i,
            voiceChannelBitrate: l,
            videoEnabled: a,
            isScreenSharing: r,
            runningGame: o,
            runningGamePid: c,
            runningNonGame: u,
            selectedChannelId: A,
            selectedGuildId: _,
            connected: m
        } = this.props;
        if (e.voiceChannelId !== t && null != e.voiceChannelId) {
            let t = y.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                i = k.A.getStageInstanceByChannel(e.voiceChannelId),
                l = R.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = q.A.getLastRTCConnectionState();
            a?.channelId !== e.voiceChannelId && (a = null), en.default.track(ea.HAw.LEAVE_VOICE_CHANNEL, {
                channel_id: e.voiceChannelId,
                channel_type: e.voiceChannelType,
                channel_bitrate: e.voiceChannelBitrate,
                guild_id: e.voiceChannelGuildId,
                rtc_connection_id: a?.rtcConnectionId,
                game_name: n,
                duration: a?.duration,
                game_platform: this.props.gamePlatform,
                game_id: this.props.gameId,
                media_session_id: a?.mediaSessionId,
                stage_instance_id: i?.id,
                guild_scheduled_event_id: l?.id,
                ...(0, h.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                ...a?.voiceStateAnalytics?.getStats(),
                ...f.A.getSelectedParticipantStats(e.voiceChannelId)
            })
        }
        if (e.voiceChannelId !== t && null != t) {
            let e = y.Ay.getCurrentGameForAnalytics(),
                r = null != e ? e.name : "",
                s = k.A.getStageInstanceByChannel(t),
                o = R.Ay.getActiveEventByChannel(t);
            (0, h.zV)(ea.HAw.CHANNEL_OPENED, {
                ...(0, h.qL)(t)
            }), (0, p.A)({
                channelId: t
            });
            let d = null,
                c = et.default.getFocusedPID();
            null != c && w.default.getOverlayMethod(c) !== j.Ue.Disabled && (et.default.isInstanceLocked() ? d = ea.Xmn.OVERLAY_LOCKED_ACTIVATED : et.default.isInstanceLocked() || (d = et.default.isPinned(ea.uss.TEXT) ? ea.Xmn.OVERLAY_UNLOCKED_PINNED : ea.Xmn.OVERLAY_UNLOCKED)), en.default.track(ea.HAw.JOIN_VOICE_CHANNEL, {
                location: d,
                channel_id: t,
                channel_type: i,
                channel_bitrate: l,
                guild_id: n,
                game_name: r,
                game_platform: this.props.gamePlatform,
                game_id: this.props.gameId,
                stage_instance_id: s?.id,
                guild_scheduled_event_id: o?.id,
                was_moved: q.A.getWasMoved(),
                join_voice_id: q.A.getJoinVoiceId(),
                ...(0, h.dL)(n, t),
                ...(0, h.JK)(n, t, a)
            })
        }
        let g = o?.distributor === e.runningGame?.distributor && o?.sku === e.runningGame?.sku && o?.name === e.runningGame?.name,
            T = null != e.runningGame && null != o && e.runningGame.isLauncher !== o.isLauncher;
        if (e.runningGame !== o && null != o && !o.isLauncher && (!g || T)) {
            let {
                gameId: e
            } = (0, b.wH)(o), a = void 0 !== e ? H.A.getDetectableGame(e) : null, r = y.Ay.getOverrideForGame(o), s = Y.A.getGuildIds(), u = V.JG.getSetting(), A = s.filter(e => !u.includes(e)).slice(0, 200), h = null;
            h = null != r ? "custom_override" : null != a ? "verified_game" : "launcher";
            let _ = w.default.getTrackedGameByPid(o.pid),
                m = (0, y.hw)(o),
                p = {
                    enabledOOP: _?.oopEnabled ?? m.enabledOOP,
                    enabledLegacy: _?.legacyEnabled ?? m.enabledLegacy,
                    overlayMethod: _?.overlayMethod ?? m.overlayMethod,
                    source: _?.source ?? m.source,
                    reason: "ChatAutoAnalytics"
                },
                g = w.default.getOverlayMethod(o.pid) ?? p.overlayMethod;
            if (setTimeout(() => {
                    (o.distributor === ea.d3x.ROBLOX ? this.debouncedRobloxAnalytics : eo)({
                        runningGame: o,
                        game: a,
                        detectionMethod: h,
                        overlayStatus: p,
                        overlayMethod: g,
                        sharedGuildIds: A,
                        voiceChannelId: t,
                        voiceChannelType: i,
                        voiceChannelBitrate: l,
                        voiceChannelGuildId: n
                    })
                }, 1e4), null != o.name && null != c && H.A.shouldReport(o)) {
                let e = o.name;
                d.A.identifyGame(c, e).then(e => d.A.reportUnverifiedGame(e)).catch(e => new C.A("AutoAnalytics").error("Cannot identify game", e))
            }
        }
        if (e.runningNonGame !== u && u?.id != null && e.runningNonGame?.id !== u.id) {
            let e = v.A.getById(u.id);
            null != e && en.default.track(ea.HAw.LAUNCH_NON_GAME_APPLICATION, {
                name: e.name,
                application_id: e.id,
                application_type: er.S7.NON_GAME_DETECTABLE,
                elevated: u.elevated,
                game_platform: ea.yTV.DESKTOP,
                distributor: u.distributor,
                detection_method: "verified_non_game_application",
                current_user_status: Q.A.getStatus(),
                executable_path: (0, b.Ic)(u.exePath),
                voice_channel_id: t,
                voice_channel_type: i,
                voice_channel_bitrate: l,
                voice_channel_guild_id: n,
                executable_fingerprint: u.executableFingerprint
            })
        }
        if ((e.videoEnabled !== a || e.isScreenSharing !== r) && null != t) {
            let e = "none",
                n = [r ? "screen" : null, a ? "camera" : null].filter(ei.Vq),
                i = null;
            r ? (e = "screen", i = (0, E.p)()) : a && (e = "camera"), en.default.track(ea.HAw.VIDEO_INPUT_TOGGLED, {
                video_input_type: e,
                video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                enabled_inputs: n,
                preview_enabled: V.bm.getSetting(),
                ...i,
                ...this.getGameMetadata(),
                ...(0, h.QS)(t)
            })
        }
        if (m && null != A && (!e.connected || A !== e.selectedChannelId || _ !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = B.A.getChannel(t),
                i = Y.A.getGuild(n?.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = K.A.getMessages(t),
                    l = e.toArray().reverse().find(e => (0, s.Lt)(e.flags, ea.pr7.IS_CROSSPOST) && e.messageReference?.guild_id === "667560445975986187");
                en.default.track(ea.HAw.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: l?.id,
                    last_message_reference_message_id: l?.messageReference?.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, h.dI)(n),
                    ...(0, h.H$)(i.id)
                })
            }
            e.isTextInVoice && !this.props.isTextInVoice && I.M.getConfig({
                location: "ChatAutoAnalytics"
            }).collectAnalytics && en.default.track(ea.HAw.TEXT_IN_VOICE_CLOSED, {
                reason: "switched away",
                channel_id: t,
                guild_id: n?.getGuildId()
            })
        }
    }
    getGameMetadata() {
        return {
            game_platform: this.props.gamePlatform,
            game_name: this.props.gameName,
            game_exe_name: this.props.gameExeName,
            game_id: this.props.gameId
        }
    }
    render() {
        return null
    }
}

function ec() {
    let [e, t] = (0, o.yK)([z.A], () => [z.A.getVoiceChannelId(), z.A.getChannelId()], []), n = (0, o.bG)([B.A], () => B.A.getChannel(t), [t]), a = (0, o.bG)([f.A], () => n?.id != null && f.A.getChatOpen(n.id), [n]), r = n?.nsfw, s = (0, o.bG)([B.A], () => B.A.getChannel(e), [e]), d = (0, o.bG)([$.A], () => $.A.getGuildId(), []), c = (0, o.bG)([Y.A], () => Y.A.getGuild(d), [d]), u = (0, o.bG)([Z.default], () => Z.default.getCurrentUser(), []), E = (0, o.bG)([F.Ay], () => null != u && null != d && (F.Ay.getMember(d, u.id)?.isPending ?? !1), [u, d]), I = (0, o.bG)([ee.Ay], () => ee.Ay.getState().section, []), C = (0, o.bG)([J.A], () => J.A.getHomeLink(), []), v = (0, o.bG)([O.A], () => O.A.isConnected(), []), [b, R] = (0, o.yK)([W.Ay], () => [W.Ay.isVideoEnabled(), W.Ay.isScreenSharing()], []), M = (0, o.bG)([Q.A], () => Q.A.getPrimaryActivity(), []), {
        currentGame: j,
        currentNonGame: w
    } = (0, o.cf)([y.Ay], () => ({
        currentGame: y.Ay.getCurrentGameForAnalytics(),
        currentNonGame: y.Ay.getCurrentNonGameForAnalytics()
    }), []), U = (0, L.A)(d), G = (0, o.bG)([D.A], () => D.A.getMessageRequestsCount(), []), k = {
        selectedChannelId: t,
        isNSFWChannel: r,
        selectedGuildId: d,
        friendsTabSection: I,
        homeLink: C,
        connected: v,
        videoEnabled: b,
        isScreenSharing: R,
        voiceChannelId: s?.id,
        voiceChannelGuildId: s?.getGuildId(),
        voiceChannelType: s?.type,
        voiceChannelBitrate: s?.bitrate,
        runningGame: j,
        runningGamePid: null != j ? j.pid : null,
        runningNonGame: w,
        gamePlatform: (0, A.A)(M),
        gameName: null != M ? M.name : null,
        gameId: null != M ? M.application_id : null,
        gameExeName: null != j ? j.exeName : null,
        hasPreviewEnabled: c?.features.has(ea.GuildFeatures.PREVIEW_ENABLED),
        isMemberPending: E,
        postableChannelCount: U,
        isTextInVoice: a,
        numMessageRequests: G
    };
    return ! function(e) {
        let t = l.useRef(e);
        l.useEffect(() => {
            t.current = e
        }, [e]);
        let {
            connected: n,
            friendsTabSection: i,
            homeLink: a,
            isMemberPending: r,
            selectedChannelId: s,
            selectedGuildId: o
        } = e;
        l.useEffect(() => {
            n && null != s && ((0, h.zV)(ea.HAw.CHANNEL_OPENED, {
                ...(0, m.p)(s),
                ...(0, h.qL)(s),
                selected_guild_id: o
            }), (0, p.A)({
                channelId: s
            }), t.current.isTextInVoice && (0, h.zV)(ea.HAw.TEXT_IN_VOICE_OPENED, {
                channel_is_nsfw: t.current.isNSFWChannel
            }))
        }, [n, s, o]), l.useEffect(() => {
            n && null == o && a === ea.BVt.FRIENDS && (0, g.A)({
                tab_opened: i
            })
        }, [n, i, a, o]), l.useEffect(() => {
            if (n && null != o) {
                let e = r ? {
                        is_pending: r,
                        preview_enabled: t.current.hasPreviewEnabled
                    } : {},
                    n = Y.A.getGuild($.A.getGuildId()),
                    i = {
                        ...e,
                        postable_channels: t.current.postableChannelCount,
                        premium_progress_bar_enabled: n?.premiumProgressBarEnabled ?? !1,
                        viewing_all_channels: !X.Ay.isOptInEnabled(o),
                        num_recent_channels: P.A.recentsChannelCount(o)
                    };
                if ((0, h.zV)(ea.HAw.GUILD_VIEWED, i), (0, _.k)(ea.HAw.GUILD_VIEWED_CLICKSTREAM, {
                        guild_id: o
                    }), (0, x.ai)(o)) {
                    let e = S.o.getConfig({
                            location: "ChatAutoAnalytics"
                        }).enabled,
                        t = el.Ay.isPremiumExactly(Z.default.getCurrentUser(), es.PremiumTypes.TIER_2),
                        n = (0, N.Kg)();
                    (0, N.U5)(n, T.A.getFavoritesCount(), e, t)
                }
            }
        }, [n, o, r]);
        let d = l.useRef(!1);
        l.useEffect(() => {
            n && null == o && a === ea.BVt.MESSAGE_REQUESTS && !d.current && (d.current = !0, en.default.track(ea.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                num_message_requests: t.current.numMessageRequests
            }))
        }, [n, o, a])
    }(k), (0, i.jsx)(ed, {
        ...k
    })
}