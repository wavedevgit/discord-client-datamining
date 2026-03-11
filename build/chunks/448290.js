/** chunk id: 448290 params = (module,exports,require) **/
n.d(t, {
    A: () => g,
    C: () => _
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(414798),
    s = n(734057),
    o = n(576705),
    d = n(309010),
    c = n(203982),
    u = n(427262),
    h = n(652215),
    A = n(985018);

function _(e, t) {
    let {
        id: n
    } = e, i = `@${u.Ay.getUserTag(e,{decoration:"never"})}`, l = `<@${n}>`;
    c._.dispatchToLastSubscribed(h.jej.INSERT_TEXT, {
        plainText: i,
        rawText: l
    }), null != t && a.A.startTyping(t)
}

function g(e, t, n) {
    let [a, c] = (0, l.yK)([d.A, s.A, o.A], () => {
        let e = d.A.getChannelId(t),
            n = s.A.getChannel(e);
        return [e, null != n && (n.isMultiUserDM() || o.A.can(h.xBc.SEND_MESSAGES, n))]
    }, [t]), u = n === h.BRT.POPOUT;
    return !c || u ? null : (0, i.jsx)(r.Drp, {
        id: "mention",
        label: A.intl.string(A.t.P8tvKG),
        action: function() {
            _(e, a)
        }
    })
}