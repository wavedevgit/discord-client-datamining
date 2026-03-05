/** chunk id: 882991, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(73153),
    a = n(272355),
    s = n(961350),
    o = n(734057),
    d = n(528767),
    c = n(105530),
    u = n(652215);
let A = "STAGE_INVITED_TO_SPEAK_MODAL";
class h extends a.A {
    _initialize() {
        l.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
    }
    _terminate() {
        l.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
    }
    handleVoiceStateUpdates = e => {
        let {
            voiceStates: t
        } = e, l = s.default.getId(), a = d.A.getSession()?.sessionId, h = t.find(e => e.userId === l && e.sessionId === a);
        if (null == h) return;
        let _ = h.channelId;
        if (null == _) {
            (0, r.kBI)(A) && (0, r.OoC)(A);
            return
        }
        let m = o.A.getChannel(_);
        if (!m?.isGuildStageVoice()) return;
        let g = (0, c.eY)(h) === c.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        if (null != m && g) {
            if ((0, r.kBI)(A)) return;
            (0, r.mMO)(async () => {
                let {
                    default: e
                } = await n.e("90037").then(n.bind(n, 427412));
                return t => (0, i.jsx)(e, {
                    ...t,
                    channel: m
                })
            }, {
                modalKey: A,
                onCloseRequest: u.FXj
            })
        }
    }
}
let _ = new h