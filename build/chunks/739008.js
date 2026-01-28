/** Chunk was on 5606 **/
/** chunk id: 739008, original params: e,t,n (module,exports,require) **/
n.d(t, {
    P: () => u
});
var r = n(843472),
    i = n(567035),
    l = n(458294),
    s = n(320501),
    a = n(309010),
    o = n(967198),
    c = n(203982),
    d = n(652215);
let u = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.A.getGuildId();
        if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, i.A)([e]);
        let t = a.A.getChannelId(e);
        null == t || (s.A.getMessages(t).hasMoreAfter ? r.A.jumpToPresent(t, d.EMb) : c._.dispatch(d.jej.SCROLLTO_PRESENT))
    }
}