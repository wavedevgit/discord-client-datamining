/** Chunk was on web.js **/
/** chunk id: 344731, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    T: () => s
});
var r = n(734057),
    i = n(309010),
    a = n(203982),
    o = n(652215);
let s = {
    binds: ["mod+shift+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.A.getChannel(i.A.getChannelId());
        return null == e || e.isManaged() || a._.dispatch(o.jej.UPLOAD_FILE, {
            channelId: e.id
        }), !1
    }
}