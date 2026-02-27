/** chunk id: 344731, original params: e,t,n (module,exports,require) **/
n.d(t, {
    T: () => s
});
var i = n(734057),
    r = n(309010),
    a = n(203982),
    l = n(652215);
let s = {
    binds: ["mod+shift+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = i.A.getChannel(r.A.getChannelId());
        return null == e || e.isManaged() || a._.dispatch(l.jej.UPLOAD_FILE, {
            channelId: e.id
        }), !1
    }
}