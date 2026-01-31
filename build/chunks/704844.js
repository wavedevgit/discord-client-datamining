/** chunk id: 704844, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(562465),
    r = n(652215);
let s = {
    updatePrivateChannelRecipientFlags: (e, t) => l.Bo.patch({
        url: r.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            flags: t
        },
        rejectWithError: !1
    })
}