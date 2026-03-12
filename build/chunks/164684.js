/** chunk id: 164684 params = (module,exports,require) **/
n.d(t, {
    Y: () => m,
    x: () => x
});
var l = n(627968),
    s = n(397927),
    a = n(157559),
    r = n(793574),
    i = n(203982),
    o = n(216623),
    c = n(85109),
    d = n(226017),
    u = n(652215);
n(811233);
var h = n(985018);
async function m(e) {
    let {
        displayToast: t = !1,
        ...m
    } = e;
    if (null == c.A.getSavedMessage(m.channelId, m.messageId) && !(0, d.A)()) return void(0, s.mMO)(async () => {
        let {
            default: e
        } = await n.e("159").then(n.bind(n, 530951));
        return t => (0, l.jsx)(e, {
            source: r.A.FOR_LATER_HELPERS,
            ...t
        })
    });
    if (null != await (0, o.oN)(m).catch(e => (e?.body?.code === u.t02.TOO_MANY_SAVED_MESSAGES ? a.A.show({
            title: h.intl.string(h.t.mlbiZW),
            body: h.intl.formatToPlainString(h.t["1zVbEG"], {
                max: 200
            }),
            cancelText: h.intl.string(h.t.BddRzS),
            confirmText: h.intl.string(h.t.ZGbTcy),
            onConfirm: () => i._.dispatch(u.jej.TOGGLE_FOR_LATER)
        }) : (0, s.showToast)((0, s.createToast)(e?.body?.message ?? h.intl.string(h.t.R0RpRX), s.ToastType.FAILURE)), null)) && t) {
        let e = null != m.dueAt ? h.intl.string(h.t.i1IsOy) : h.intl.string(h.t["WQdL/6"]),
            t = null != m.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
        (0, s.showToast)((0, s.createToast)(e, t))
    }
}
async function x(e) {
    let {
        displayToast: t = !1,
        ...n
    } = e;
    if (null != await (0, o.cf)(n).catch(e => ((0, s.showToast)((0, s.createToast)(e?.body?.message ?? h.intl.string(h.t.R0RpRX), s.ToastType.FAILURE)), null)) && t) {
        let e = null != n.dueAt ? h.intl.string(h.t.D0tS02) : h.intl.string(h.t["5KOMiV"]),
            t = null != n.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
        (0, s.showToast)((0, s.createToast)(e, t))
    }
}