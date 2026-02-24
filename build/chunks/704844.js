/** chunk id: 704844, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(562465),
    a = n(652215);
let i = {
    updatePrivateChannelRecipientFlags: (e, t) => r.Bo.patch({
        url: a.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            flags: t
        },
        rejectWithError: !1
    })
}