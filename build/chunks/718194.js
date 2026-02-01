/** chunk id: 718194, original params: t,i,n (module,exports,require) **/
n.d(i, {
    YK: () => a
});
var e = n(600975),
    r = n(652215);
let l = (0, e.C)({
        kind: "user",
        id: "2023-11_voice_activity_notification_user",
        label: "Voice Activity Notifications for User",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Voice Activity Notifications are enabled for user",
            config: {
                enabled: !0
            }
        }, {
            id: 2,
            label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
            config: {
                enabled: !1
            }
        }]
    }),
    s = (0, e.C)({
        kind: "guild",
        id: "2023-11_voice_activity_notification_guild",
        label: "General Voice Channel Notifications for Guild",
        defaultConfig: {
            voiceChannelActivityNotifsEnabled: !1
        },
        treatments: [{
            id: 2,
            label: "Deadchat notifs disabled, voice channel activity notifs enabled",
            config: {
                voiceChannelActivityNotifsEnabled: !0
            }
        }]
    });

function a(t) {
    var i;
    let {
        voiceChannelActivityNotifsEnabled: n
    } = s.useExperiment({
        location: "useVoiceActivityNotificationSettingsExperiment",
        guildId: null != (i = null == t ? void 0 : t.getGuildId()) ? i : r.dJq
    }, {
        disable: (null == t ? void 0 : t.type) !== r.rbe.GUILD_VOICE,
        autoTrackExposure: !1
    }), {
        enabled: e
    } = l.useExperiment({
        location: "useVoiceActivityNotificationSettingsExperiment"
    }, {
        disable: (null == t ? void 0 : t.type) !== r.rbe.GUILD_VOICE || !n,
        autoTrackExposure: !0
    });
    return (null == t ? void 0 : t.type) === r.rbe.GUILD_VOICE && n && e
}