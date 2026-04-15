/** chunk id: 439147 params = (module,exports,require) **/
l.d(t, {
    A: () => A
});
var n = l(562465),
    i = l(626584),
    r = l(152007),
    s = l(867455),
    u = l(734057),
    a = l(320501),
    o = l(222823),
    d = l(287809),
    c = l(661191),
    S = l(652215);
let _ = new i.A("markUnread");
async function A(e, t) {
    let l = d.default.getCurrentUser();
    if (null == l) return;
    let i = a.A.getMessages(e),
        A = i.toArray().filter(e => 0 > c.default.compare(e.id, t)).sort((e, t) => c.default.compare(e.id, t.id)).reverse()[0],
        I = null == A ? c.default.atPreviousMillisecond(t) : A.id,
        p = 0;
    i.forAll(e => {
        c.default.compare(e.id, I) > 0 && (0, o.Wm)(e, l) && p++
    });
    let h = u.A.getChannel(e);
    null != h && h.isThread() && (h.isArchivedThread() && await s.A.unarchiveThread(h, !1), r.A.hasJoined(e) || await s.A.joinThread(h, "Mark Unread")), _.log("Marking unread", {
        channelId: e,
        messageId: t
    }), n.Bo.post({
        url: S.Rsh.MESSAGE_ACK(e, I),
        body: {
            manual: !0,
            mention_count: p
        },
        oldFormErrors: !0,
        rejectWithError: !0
    })
}