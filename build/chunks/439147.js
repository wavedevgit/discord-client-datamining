/** chunk id: 439147, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(638769), n(264879);
var r = n(562465),
    i = n(626584),
    l = n(152007),
    a = n(867455),
    o = n(734057),
    s = n(320501),
    c = n(222823),
    u = n(287809),
    E = n(661191),
    d = n(652215);
let _ = new i.A("markUnread");
async function A(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = s.A.getMessages(e),
        A = i.toArray().filter(e => 0 > E.default.compare(e.id, t)).sort((e, t) => E.default.compare(e.id, t.id)).reverse()[0],
        T = null == A ? E.default.atPreviousMillisecond(t) : A.id,
        I = 0;
    i.forAll(e => {
        E.default.compare(e.id, T) > 0 && (0, c.Wm)(e, n) && I++
    });
    let O = o.A.getChannel(e);
    null != O && O.isThread() && (O.isArchivedThread() && await a.A.unarchiveThread(O, !1), l.A.hasJoined(e) || await a.A.joinThread(O, "Mark Unread")), _.log("Marking unread", {
        channelId: e,
        messageId: t
    }), r.Bo.post({
        url: d.Rsh.MESSAGE_ACK(e, T),
        body: {
            manual: !0,
            mention_count: I
        },
        oldFormErrors: !0,
        rejectWithError: !0
    })
}