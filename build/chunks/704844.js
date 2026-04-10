/** chunk id: 704844 params = (module,exports,require) **/
a.d(t, {
    A: () => i
});
var n = a(562465),
    r = a(652215);
let i = {
    updatePrivateChannelRecipientFlags: (e, t) => n.Bo.patch({
        url: r.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            flags: t
        },
        rejectWithError: !1
    })
}