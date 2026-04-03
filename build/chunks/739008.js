/** chunk id: 739008 params = (module,exports,require) **/
n.d(t, {
    P: () => _
});
var i = n(843472),
    r = n(567035),
    a = n(458294),
    l = n(320501),
    s = n(309010),
    o = n(967198),
    d = n(203982),
    c = n(652215);
let _ = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.A.getGuildId();
        if (null == e || !a.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, r.A)([e]);
        let t = s.A.getChannelId(e);
        null == t || (l.A.getMessages(t).hasMoreAfter ? i.A.jumpToPresent(t, c.EMb) : d._.dispatch(c.jej.SCROLLTO_PRESENT))
    }
}