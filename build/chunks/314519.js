/** chunk id: 314519, original params: e,t,n (module,exports,require) **/
n.d(t, {
    s: () => l
});
var i = n(843472),
    r = n(222823),
    a = n(309010);
let l = {
    binds: ["shift+pageup"],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.A.getChannelId();
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