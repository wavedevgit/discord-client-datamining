/** chunk id: 684339, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => g,
    u: () => f
}), n(896048);
var l, r = n(499979),
    i = n(626584),
    a = n(961350),
    s = n(734057),
    o = n(544180),
    c = n(383501),
    u = n(977997),
    d = n(954571),
    h = n(652215);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var f = ((l = {}).SELF_VIDEO = "self_video", l.SELF_STREAM = "self_stream", l.REMOTE_VIDEO = "remote_video", l.REMOTE_STREAM = "remote_stream", l.CHANGE_VIDEO_BACKGROUND = "change_video_background", l.REPLAY_VIDEO_STREAM = "replay_video_stream", l);
let m = new Map;
class g {
    onSpinnerStarted() {
        null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, r.tB)())
    }
    trackSpinnerDuration(e, t, n) {
        var l;
        let i;
        if (null == this.spinnerVisibleStart) return;
        let p = (i = (null != (l = m.get(n)) ? l : 0) + 1, m.set(n, i), i),
            f = (0, r.tB)() - this.spinnerVisibleStart;
        if (this.spinnerVisibleStart = null, f < 0) return void this.logger.warn("spinner duration is negative: ".concat(f, " ms\n        [").concat(e, ", count for stream: ").concat(p, "]"));
        this.logger.info("spinner visible for ".concat(f, " ms\n      [").concat(e, ", count for stream: ").concat(p, "]"));
        let g = c.A.getGuildId(),
            A = u.A.getUserVoiceChannelId(g, a.default.getId()),
            b = function(e) {
                if (null != e) {
                    if (e.isGuildVoice()) return "guild_voice";
                    if (e.isGuildStageVoice()) return "is_stage_channel";
                    if (e.isDM()) return "dm";
                    if (e.isGroupDM()) return "group_dm"
                }
                return null
            }(s.A.getChannel(A));
        d.default.track(h.HAw.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: f,
            rtc_connection_id: c.A.getRTCConnectionId(),
            media_session_id: c.A.getMediaSessionId(),
            event_count_for_stream: p,
            guild_id: g,
            channel_id: A,
            channel_type: b,
            spinning_user_id: t,
            connection_type: o.A.getType(),
            effective_connection_speed: o.A.getEffectiveConnectionSpeed(),
            service_provider: o.A.getServiceProvider()
        })
    }
    constructor(e) {
        p(this, "logger", void 0), p(this, "spinnerVisibleStart", null), this.logger = new i.A(e)
    }
}