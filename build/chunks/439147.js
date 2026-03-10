/** chunk id: 439147 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(562465),
    l = n(626584),
    r = n(152007),
    s = n(867455),
    a = n(734057),
    o = n(320501),
    c = n(222823),
    d = n(287809),
    u = n(661191),
    _ = n(652215);
let E = new l.A("markUnread");
async function T(e, t) {
    let n = d.default.getCurrentUser();
    if (null == n) return;
    let l = o.A.getMessages(e),
        T = l.toArray().filter(e => 0 > u.default.compare(e.id, t)).sort((e, t) => u.default.compare(e.id, t.id)).reverse()[0],
        A = null == T ? u.default.atPreviousMillisecond(t) : T.id,
        I = 0;
    l.forAll(e => {
        u.default.compare(e.id, A) > 0 && (0, c.Wm)(e, n) && I++
    });
    let N = a.A.getChannel(e);
    null != N && N.isThread() && (N.isArchivedThread() && await s.A.unarchiveThread(N, !1), r.A.hasJoined(e) || await s.A.joinThread(N, "Mark Unread")), E.log("Marking unread", {
        channelId: e,
        messageId: t
    }), i.Bo.post({
        url: _.Rsh.MESSAGE_ACK(e, A),
        body: {
            manual: !0,
            mention_count: I
        },
        oldFormErrors: !0,
        rejectWithError: !0
    })
}