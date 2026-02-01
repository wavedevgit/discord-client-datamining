/** chunk id: 351488, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => a
});
var l = n(397927),
    r = n(734057),
    i = n(985018);

function a(e) {
    let t = r.A.getChannel(e),
        n = (null == t ? void 0 : t.name) == null ? i.intl.string(i.t.gi2swM) : i.intl.formatToPlainString(i.t.IFPJ6J, {
            channelName: t.name
        });
    (0, l.showToast)((0, l.createToast)(n, l.ToastType.SUCCESS))
}