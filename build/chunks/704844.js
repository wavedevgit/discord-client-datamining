/** chunk id: 704844, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => i
});
var n = r(562465),
    o = r(652215);
let i = {
    updatePrivateChannelRecipientFlags: (e, t) => n.Bo.patch({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            flags: t
        },
        rejectWithError: !1
    })
}