/** chunk id: 439147 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(562465),
    l = n(626584),
    r = n(152007),
    s = n(867455),
    a = n(734057),
    o = n(320501),
    c = n(222823),
    u = n(287809),
    d = n(661191),
    _ = n(652215);
let E = new l.A("markUnread");
async function A(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let l = o.A.getMessages(e),
        A = l.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
        T = null == A ? d.default.atPreviousMillisecond(t) : A.id,
        I = 0;
    l.forAll(e => {
        d.default.compare(e.id, T) > 0 && (0, c.Wm)(e, n) && I++
    });
    let N = a.A.getChannel(e);
    null != N && N.isThread() && (N.isArchivedThread() && await s.A.unarchiveThread(N, !1), r.A.hasJoined(e) || await s.A.joinThread(N, "Mark Unread")), E.log("Marking unread", {
        channelId: e,
        messageId: t
    }), i.Bo.post({
        url: _.Rsh.MESSAGE_ACK(e, T),
        body: {
            manual: !0,
            mention_count: I
        },
        oldFormErrors: !0,
        rejectWithError: !0
    })
}