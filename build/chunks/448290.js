/** chunk id: 448290 params = (module,exports,require) **/
n.d(e, {
    A: () => E,
    C: () => h
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(414798),
    o = n(734057),
    u = n(576705),
    d = n(309010),
    s = n(203982),
    c = n(427262),
    A = n(652215),
    g = n(985018);

function h(t, e) {
    let {
        id: n
    } = t, i = `@${c.Ay.getUserTag(t,{decoration:"never"})}`, l = `<@${n}>`;
    s._.dispatchToLastSubscribed(A.jej.INSERT_TEXT, {
        plainText: i,
        rawText: l
    }), null != e && a.A.startTyping(e)
}

function E(t, e, n) {
    let [a, s] = (0, l.yK)([d.A, o.A, u.A], () => {
        let t = d.A.getChannelId(e),
            n = o.A.getChannel(t);
        return [t, null != n && (n.isMultiUserDM() || u.A.can(A.xBc.SEND_MESSAGES, n))]
    }, [e]), c = n === A.BRT.POPOUT;
    return !s || c ? null : (0, i.jsx)(r.Drp, {
        id: "mention",
        label: g.intl.string(g.t.P8tvKG),
        action: function() {
            h(t, a)
        }
    })
}