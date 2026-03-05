/** chunk id: 439147 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(562465),
    l = n(626584),
    r = n(152007),
    a = n(867455),
    s = n(734057),
    o = n(320501),
    c = n(222823),
    _ = n(287809),
    E = n(661191),
    d = n(652215);
let u = new l.A("markUnread");
async function A(e, t) {
    let n = _.default.getCurrentUser();
    if (null == n) return;
    let l = o.A.getMessages(e),
        A = l.toArray().filter(e => 0 > E.default.compare(e.id, t)).sort((e, t) => E.default.compare(e.id, t.id)).reverse()[0],
        T = null == A ? E.default.atPreviousMillisecond(t) : A.id,
        I = 0;
    l.forAll(e => {
        E.default.compare(e.id, T) > 0 && (0, c.Wm)(e, n) && I++
    });
    let N = s.A.getChannel(e);
    null != N && N.isThread() && (N.isArchivedThread() && await a.A.unarchiveThread(N, !1), r.A.hasJoined(e) || await a.A.joinThread(N, "Mark Unread")), u.log("Marking unread", {
        channelId: e,
        messageId: t
    }), i.Bo.post({
        url: d.Rsh.MESSAGE_ACK(e, T),
        body: {
            manual: !0,
            mention_count: I
        },
        oldFormErrors: !0,
        rejectWithError: !0
    })
}