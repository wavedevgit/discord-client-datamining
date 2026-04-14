/** chunk id: 314519 params = (module,exports,require) **/
n.d(t, {
    s: () => s
});
var i = n(843472),
    r = n(222823),
    l = n(309010);
let s = {
    binds: ["shift+pageup"],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.A.getChannelId();
        if (null != e) {
            let t = r.Ay.ackMessageId(e);
            null != t && r.Ay.getOldestUnreadTimestamp(e) > 0 && i.A.jumpToMessage({
                channelId: e,
                messageId: t,
                offset: 1,
                context: "Keyboard Shortcut"
            })
        }
        return !1
    }
}