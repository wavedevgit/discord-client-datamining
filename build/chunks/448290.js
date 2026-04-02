/** chunk id: 448290 params = (module,exports,require) **/
n.d(t, {
    A: () => f,
    C: () => g
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(414798),
    o = n(734057),
    s = n(576705),
    d = n(309010),
    u = n(203982),
    c = n(427262),
    A = n(652215),
    h = n(985018);

function g(e, t) {
    let {
        id: n
    } = e, l = `@${c.Ay.getUserTag(e,{decoration:"never"})}`, i = `<@${n}>`;
    u._.dispatchToLastSubscribed(A.jej.INSERT_TEXT, {
        plainText: l,
        rawText: i
    }), null != t && a.A.startTyping(t)
}

function f(e, t, n) {
    let [a, u] = (0, i.yK)([d.A, o.A, s.A], () => {
        let e = d.A.getChannelId(t),
            n = o.A.getChannel(e);
        return [e, null != n && (n.isMultiUserDM() || s.A.can(A.xBc.SEND_MESSAGES, n))]
    }, [t]), c = n === A.BRT.POPOUT;
    return !u || c ? null : (0, l.jsx)(r.Drp, {
        id: "mention",
        label: h.intl.string(h.t.P8tvKG),
        action: function() {
            g(e, a)
        }
    })
}