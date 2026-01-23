/** Chunk was on 51997 **/
/** chunk id: 455071, original params: e,t,o (module,exports,require) **/
o.d(t, {
    VoiceFilterFeedbackModal: () => p
});
var i = o(627968);
o(64700);
var n = o(110259),
    a = o(930932),
    l = o(612479),
    _ = o(131935),
    c = o(652215),
    r = o(670455),
    s = o(985018);
let d = [r.P0.BAD, r.P0.GOOD],
    u = {
        [r.P0.BAD]: s.intl.string(s.t.zGnUBV),
        [r.P0.GOOD]: s.intl.string(s.t.SqprKf)
    },
    b = ["other"],
    m = [{
        label: s.intl.string(s.t.DVEGuL),
        code: 1001,
        value: "nobody_could_hear_me"
    }, {
        label: s.intl.string(s.t.Q3e5wF),
        code: 1002,
        value: "audio_not_understood"
    }, {
        label: s.intl.string(s.t["D98z+y"]),
        code: 1003,
        value: "audio_cut"
    }, {
        label: s.intl.string(s.t.lWtGvX),
        code: 1004,
        value: "audio_robotic"
    }, {
        label: s.intl.string(s.t.FARCFA),
        code: 1005,
        value: "audio_delay"
    }, {
        label: s.intl.string(s.t["4nEvAa"]),
        code: 1006,
        value: "bad_volume"
    }, {
        label: s.intl.string(s.t.xVRTjP),
        code: 1007,
        value: "audio_echo"
    }, {
        label: s.intl.string(s.t.qvP5vz),
        code: 1008,
        value: "audio_unchanged"
    }, {
        label: s.intl.string(s.t.fpevoR),
        code: 1099,
        value: "other"
    }];

function p(e) {
    let {
        onClose: t,
        transitionState: o,
        analyticsData: p
    } = e;
    return (0, i.jsx)(l.A, {
        modalType: "voice_filter",
        header: s.intl.string(s.t.zZAORN),
        impression: {
            impressionName: n.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: p.rtc_connection_id,
                media_session_id: p.media_session_id
            }
        },
        ratingOptions: d,
        ratingTextLabels: u,
        problemTitle: s.intl.string(s.t.FJmoxF),
        problems: m,
        freeformNeededProblems: b,
        onSubmit: function(e) {
            var t, o;
            let {
                rating: i,
                problem: n,
                dontShowAgain: l,
                feedback: s
            } = e;
            l && (0, a.n3)({
                feedbackType: r.MW.VOICE_FILTER,
                location: "VoiceFilterFeedbackModal"
            }), null != i && (0, _.A)(c.HAw.VOICE_FILTER_FEEDBACK, {
                rating: i,
                reasonCode: null != (t = null == n ? void 0 : n.code) ? t : null,
                reasonDescription: null != (o = null == n ? void 0 : n.value) ? o : null,
                feedback: s,
                analyticsData: p
            })
        },
        onClose: t,
        transitionState: o,
        otherKey: "other"
    })
}