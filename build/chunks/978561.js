/** chunk id: 978561, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => l
}), n(896048), n(733351);
var r = n(258363),
    i = n(392054),
    a = n(609136),
    o = n(73510),
    s = n(985018);

function l(e) {
    let {
        option: t,
        content: n,
        guildId: l,
        channelId: c,
        allowEmptyValues: u,
        commandOrigin: d = i.iw.CHAT
    } = e, f = null != n ? (0, r.AA)({
        content: n
    }, "content").trim() : "", p = t.required, _ = "" === f;
    if (null == n) return p ? {
        success: !1,
        error: s.intl.string(s.t.JZJQL2)
    } : {
        success: !0
    };
    if (_) return u ? {
        success: !0
    } : p ? {
        success: !1,
        error: s.intl.string(s.t.JZJQL2)
    } : {
        success: !1,
        error: (0, o.tE)(t)
    };
    let h = n.length > 1 ? {
            type: "text",
            text: f
        } : n[0],
        m = a.A[t.type](h, t, c, l, d);
    return m.success || null != m.error || (m.error = (0, o.tE)(t)), m
}