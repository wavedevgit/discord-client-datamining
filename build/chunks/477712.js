/** chunk id: 477712 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(562465),
    r = n(449054),
    l = n(652215);
let a = e => i.Bo.get({
    url: l.Rsh.STICKER_GUILD_DATA(e),
    oldFormErrors: !0,
    rejectWithError: !0
}).then(e => e?.body != null ? (0, r.jE)(e.body) : null).catch(() => null)