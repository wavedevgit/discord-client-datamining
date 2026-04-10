/** chunk id: 344731 params = (module,exports,require) **/
n.d(t, {
    T: () => s
});
var i = n(734057),
    r = n(309010),
    l = n(203982),
    o = n(652215);
let s = {
    binds: ["mod+shift+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = i.A.getChannel(r.A.getChannelId());
        return null == e || e.isManaged() || l._.dispatch(o.jej.UPLOAD_FILE, {
            channelId: e.id
        }), !1
    }
}