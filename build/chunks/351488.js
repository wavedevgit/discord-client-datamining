/** chunk id: 351488 params = (module,exports,require) **/
n.d(t, {
    _: () => a
});
var i = n(397927),
    l = n(734057),
    s = n(985018);

function a(e) {
    let t = l.A.getChannel(e),
        n = t?.name == null ? s.intl.string(s.t.gi2swM) : s.intl.formatToPlainString(s.t.IFPJ6J, {
            channelName: t.name
        });
    (0, i.showToast)((0, i.createToast)(n, i.ToastType.SUCCESS))
}