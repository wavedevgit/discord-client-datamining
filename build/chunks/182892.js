/** Chunk was on web.js **/
/** chunk id: 182892, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => c,
    e: () => u
}), n(938796);
var r = n(665260),
    i = n(506774),
    a = n(253932),
    o = n(765379),
    s = n(652215);

function l(e) {
    let t = a.e.getSetting(),
        n = a.UM.getSetting();
    return t ? e |= s.jUm.PARTY_PRIVACY_FRIENDS : e &= ~s.jUm.PARTY_PRIVACY_FRIENDS, n ? e |= s.jUm.PARTY_PRIVACY_VOICE_CHANNEL : e &= ~s.jUm.PARTY_PRIVACY_VOICE_CHANNEL, e
}

function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.KIY.PRIVATE,
        {
            secrets: o
        } = e,
        c = 0;
    return (t && (c |= s.jUm.INSTANCE), (null == o ? void 0 : o.join) != null && (c |= s.jUm.JOIN), r && (c |= s.jUm.CONTEXTLESS), n) ? (c |= s.jUm.EMBEDDED, c |= l(c)) : ((a === s.KIY.PUBLIC || i.w.get("ACTIVITIES_FORCE_PUBLIC")) && (c |= l(c)), c)
}

function u(e) {
    var t;
    return (0, r.Lt)(null != (t = null == e ? void 0 : e.flags) ? t : 0, s.jUm.CONTEXTLESS) && (0, o.A)(e)
}