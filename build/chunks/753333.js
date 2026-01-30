/** chunk id: 753333, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    o = n(71393),
    u = n(957565),
    a = n(652215),
    c = n(985018);

function s(e, t, n) {
    let s = null != n;
    if (null == (0, r.bG)([o.A], () => o.A.getGuild(t), [t])) return null;

    function d() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            r = "".concat(location.protocol, "//").concat(location.host).concat(a.BVt.GUILD_EVENT_DETAILS(t, e, l ? null : n));
        (0, u.C)(r, () => (0, i.showToast)((0, i.createToast)(c.intl.string(c.t["L/PwZf"]), i.ToastType.SUCCESS)))
    }
    return (0, l.jsx)(i.Drp, {
        id: c.intl.string(c.t["9o+VKx"]),
        label: c.intl.string(c.t["9o+VKx"]),
        action: s ? void 0 : () => d(!0),
        children: s && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(i.Drp, {
                id: c.intl.string(c.t.QLtDqP),
                label: c.intl.string(c.t.QLtDqP),
                action: () => d(!1)
            }), (0, l.jsx)(i.Drp, {
                id: c.intl.string(c.t.AYnhB7),
                label: c.intl.string(c.t.AYnhB7),
                action: () => d(!0)
            })]
        })
    })
}