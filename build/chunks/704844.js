/** chunk id: 704844 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(562465),
    l = n(652215);
let s = {
    updatePrivateChannelRecipientFlags: (e, t) => i.Bo.patch({
        url: l.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            flags: t
        },
        rejectWithError: !1
    })
}