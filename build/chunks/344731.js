/** chunk id: 344731, original params: e,t,n (module,exports,require) **/
n.d(t, {
    T: () => a
});
var r = n(734057),
    i = n(309010),
    l = n(203982),
    s = n(652215);
let a = {
    binds: ["mod+shift+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.A.getChannel(i.A.getChannelId());
        return null == e || e.isManaged() || l._.dispatch(s.jej.UPLOAD_FILE, {
            channelId: e.id
        }), !1
    }
}