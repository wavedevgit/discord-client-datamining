/** chunk id: 704844 params = (module,exports,require) **/
n.d(t, {
    A: () => i
});
var a = n(562465),
    r = n(652215);
let i = {
    updatePrivateChannelRecipientFlags: (e, t) => a.Bo.patch({
        url: r.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            flags: t
        },
        rejectWithError: !1
    })
}