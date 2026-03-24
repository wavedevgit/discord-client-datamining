/** chunk id: 739008 params = (module,exports,require) **/
n.d(t, {
    P: () => u
});
var i = n(843472),
    l = n(567035),
    r = n(458294),
    s = n(320501),
    o = n(309010),
    a = n(967198),
    d = n(203982),
    c = n(652215);
let u = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.A.getGuildId();
        if (null == e || !r.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, l.A)([e]);
        let t = o.A.getChannelId(e);
        null == t || (s.A.getMessages(t).hasMoreAfter ? i.A.jumpToPresent(t, c.EMb) : d._.dispatch(c.jej.SCROLLTO_PRESENT))
    }
}