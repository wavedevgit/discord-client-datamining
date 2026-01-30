/** Chunk was on 64935 **/
/** chunk id: 477712, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(562465),
    i = n(449054),
    l = n(652215);
let a = e => r.Bo.get({
    url: l.Rsh.STICKER_GUILD_DATA(e),
    oldFormErrors: !0,
    rejectWithError: !0
}).then(e => (null == e ? void 0 : e.body) != null ? (0, i.jE)(e.body) : null).catch(() => null)