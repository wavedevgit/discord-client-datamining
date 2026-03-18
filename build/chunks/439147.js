/** chunk id: 439147 params = (module,exports,require) **/
a.d(t, {
    A: () => p
});
var n = a(562465),
    l = a(626584),
    r = a(152007),
    i = a(867455),
    s = a(734057),
    c = a(320501),
    o = a(222823),
    u = a(287809),
    _ = a(661191),
    d = a(652215);
let S = new l.A("markUnread");
async function p(e, t) {
    let a = u.default.getCurrentUser();
    if (null == a) return;
    let l = c.A.getMessages(e),
        p = l.toArray().filter(e => 0 > _.default.compare(e.id, t)).sort((e, t) => _.default.compare(e.id, t.id)).reverse()[0],
        A = null == p ? _.default.atPreviousMillisecond(t) : p.id,
        m = 0;
    l.forAll(e => {
        _.default.compare(e.id, A) > 0 && (0, o.Wm)(e, a) && m++
    });
    let h = s.A.getChannel(e);
    null != h && h.isThread() && (h.isArchivedThread() && await i.A.unarchiveThread(h, !1), r.A.hasJoined(e) || await i.A.joinThread(h, "Mark Unread")), S.log("Marking unread", {
        channelId: e,
        messageId: t
    }), n.Bo.post({
        url: d.Rsh.MESSAGE_ACK(e, A),
        body: {
            manual: !0,
            mention_count: m
        },
        oldFormErrors: !0,
        rejectWithError: !0
    })
}