/** chunk id: 477712 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(562465),
    l = n(449054),
    r = n(652215);
let a = e => i.Bo.get({
    url: r.Rsh.STICKER_GUILD_DATA(e),
    oldFormErrors: !0,
    rejectWithError: !0
}).then(e => e?.body != null ? (0, l.jE)(e.body) : null).catch(() => null)