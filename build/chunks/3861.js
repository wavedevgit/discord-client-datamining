/** chunk id: 3861, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(95701),
    i = n(734057),
    a = n(977997);

function o(e) {
    var t;
    let {
        channelId: n,
        userId: o,
        activity: s
    } = e, l = i.A.getChannel(n), c = (null == s ? void 0 : s.session_id) == null || null != l && (0, r.pQ)(l.type) ? n : null == (t = a.A.getVoiceStateForSession(o, null == s ? void 0 : s.session_id)) ? void 0 : t.channelId;
    return null != c ? c : void 0
}