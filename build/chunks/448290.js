/** chunk id: 448290 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A,
    C: () => h
});
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(414798),
    r = n(734057),
    o = n(576705),
    u = n(309010),
    c = n(203982),
    d = n(427262),
    m = n(652215),
    g = n(985018);

function h(e, t) {
    let {
        id: n
    } = e, l = `@${d.Ay.getUserTag(e,{decoration:"never"})}`, i = `<@${n}>`;
    c._.dispatchToLastSubscribed(m.jej.INSERT_TEXT, {
        plainText: l,
        rawText: i
    }), null != t && a.A.startTyping(t)
}

function A(e, t, n) {
    let [a, c] = (0, i.yK)([u.A, r.A, o.A], () => {
        let e = u.A.getChannelId(t),
            n = r.A.getChannel(e);
        return [e, null != n && (n.isMultiUserDM() || o.A.can(m.xBc.SEND_MESSAGES, n))]
    }, [t]), d = n === m.BRT.POPOUT;
    return !c || d ? null : (0, l.jsx)(s.Drp, {
        id: "mention",
        label: g.intl.string(g.t.P8tvKG),
        action: function() {
            h(e, a)
        }
    })
}