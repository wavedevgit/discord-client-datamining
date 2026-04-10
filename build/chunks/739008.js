/** chunk id: 739008 params = (module,exports,require) **/
n.d(t, {
    P: () => u
});
var i = n(843472),
    r = n(567035),
    l = n(458294),
    o = n(320501),
    s = n(309010),
    a = n(967198),
    d = n(203982),
    c = n(652215);
let u = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.A.getGuildId();
        if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, r.A)([e]);
        let t = s.A.getChannelId(e);
        null == t || (o.A.getMessages(t).hasMoreAfter ? i.A.jumpToPresent(t, c.EMb) : d._.dispatch(c.jej.SCROLLTO_PRESENT))
    }
}