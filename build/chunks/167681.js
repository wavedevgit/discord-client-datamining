/** chunk id: 167681 params = (module,exports,require) **/
n.d(t, {
    S9: () => d,
    dv: () => c
});
var i = n(843472),
    a = n(287809),
    l = n(954571),
    r = n(661191),
    s = n(21181),
    o = n(652215);
let c = e => {
        let t = a.default.getCurrentUser()?.id,
            n = ((null != t ? r.default.extractTimestamp(t) : 0) + r.default.extractTimestamp(e)) % s.I.length;
        return s.I[n]
    },
    d = (e, t, n) => {
        i.A.sendGreetMessage(e.id, n, i.A.getSendMessageOptionsForReply({
            channel: e,
            message: t,
            shouldMention: !0,
            showMentionToggle: !0
        })), l.default.track(o.HAw.WELCOME_CTA_CLICKED, {
            is_reply: !0,
            sticker_id: n,
            target_user: t.author.id,
            sender: a.default.getCurrentUser()?.id
        })
    }