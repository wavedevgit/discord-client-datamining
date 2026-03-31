/** chunk id: 439147 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(562465),
    l = n(626584),
    s = n(152007),
    a = n(867455),
    r = n(734057),
    o = n(320501),
    c = n(222823),
    d = n(287809),
    u = n(661191),
    h = n(652215);
let A = new l.A("markUnread");
async function _(e, t) {
    let n = d.default.getCurrentUser();
    if (null == n) return;
    let l = o.A.getMessages(e),
        _ = l.toArray().filter(e => 0 > u.default.compare(e.id, t)).sort((e, t) => u.default.compare(e.id, t.id)).reverse()[0],
        m = null == _ ? u.default.atPreviousMillisecond(t) : _.id,
        g = 0;
    l.forAll(e => {
        u.default.compare(e.id, m) > 0 && (0, c.Wm)(e, n) && g++
    });
    let p = r.A.getChannel(e);
    null != p && p.isThread() && (p.isArchivedThread() && await a.A.unarchiveThread(p, !1), s.A.hasJoined(e) || await a.A.joinThread(p, "Mark Unread")), A.log("Marking unread", {
        channelId: e,
        messageId: t
    }), i.Bo.post({
        url: h.Rsh.MESSAGE_ACK(e, m),
        body: {
            manual: !0,
            mention_count: g
        },
        oldFormErrors: !0,
        rejectWithError: !0
    })
}