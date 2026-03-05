/** chunk id: 164684, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Y: () => u,
    x: () => h
});
var i = n(627968),
    a = n(397927),
    r = n(157559),
    s = n(793574),
    l = n(203982),
    o = n(216623),
    c = n(85109),
    d = n(226017),
    _ = n(652215);
n(811233);
var g = n(985018);
async function u(t) {
    let {
        displayToast: e = !1,
        ...u
    } = t;
    if (null == c.A.getSavedMessage(u.channelId, u.messageId) && !(0, d.A)()) return void(0, a.mMO)(async () => {
        let {
            default: t
        } = await n.e("159").then(n.bind(n, 530951));
        return e => (0, i.jsx)(t, {
            source: s.A.FOR_LATER_HELPERS,
            ...e
        })
    });
    if (null != await (0, o.oN)(u).catch(t => (t?.body?.code === _.t02.TOO_MANY_SAVED_MESSAGES ? r.A.show({
            title: g.intl.string(g.t.mlbiZW),
            body: g.intl.formatToPlainString(g.t["1zVbEG"], {
                max: 200
            }),
            cancelText: g.intl.string(g.t.BddRzS),
            confirmText: g.intl.string(g.t.ZGbTcy),
            onConfirm: () => l._.dispatch(_.jej.TOGGLE_FOR_LATER)
        }) : (0, a.showToast)((0, a.createToast)(t?.body?.message ?? g.intl.string(g.t.R0RpRX), a.ToastType.FAILURE)), null)) && e) {
        let t = null != u.dueAt ? g.intl.string(g.t.i1IsOy) : g.intl.string(g.t["WQdL/6"]),
            e = null != u.dueAt ? a.ToastType.CLOCK : a.ToastType.BOOKMARK;
        (0, a.showToast)((0, a.createToast)(t, e))
    }
}
async function h(t) {
    let {
        displayToast: e = !1,
        ...n
    } = t;
    if (null != await (0, o.cf)(n).catch(t => ((0, a.showToast)((0, a.createToast)(t?.body?.message ?? g.intl.string(g.t.R0RpRX), a.ToastType.FAILURE)), null)) && e) {
        let t = null != n.dueAt ? g.intl.string(g.t.D0tS02) : g.intl.string(g.t["5KOMiV"]),
            e = null != n.dueAt ? a.ToastType.CLOCK : a.ToastType.BOOKMARK;
        (0, a.showToast)((0, a.createToast)(t, e))
    }
}