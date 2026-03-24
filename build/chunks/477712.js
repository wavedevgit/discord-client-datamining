/** chunk id: 477712 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(562465),
    a = n(449054),
    r = n(652215);
let l = e => i.Bo.get({
    url: r.Rsh.STICKER_GUILD_DATA(e),
    oldFormErrors: !0,
    rejectWithError: !0
}).then(e => e?.body != null ? (0, a.jE)(e.body) : null).catch(() => null)