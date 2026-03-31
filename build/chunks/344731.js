/** chunk id: 344731 params = (module,exports,require) **/
n.d(t, {
    T: () => l
});
var i = n(734057),
    r = n(309010),
    s = n(203982),
    a = n(652215);
let l = {
    binds: ["mod+shift+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = i.A.getChannel(r.A.getChannelId());
        return null == e || e.isManaged() || s._.dispatch(a.jej.UPLOAD_FILE, {
            channelId: e.id
        }), !1
    }
}