/** chunk id: 184659 params = (module,exports,require) **/
n.d(t, {
    z: () => u
});
var r = n(627968),
    a = n(311907),
    i = n(287070),
    l = n(101058),
    s = n(836602),
    o = n(927578),
    c = n(132198),
    d = n(266371);
let u = e => {
    let {
        user: t
    } = e, n = o.Ay.canUsePremiumProfileCustomization(t), {
        pendingAvatar: u,
        ...m
    } = (0, a.cf)([s.A], () => s.A.getPendingChanges()), h = (0, l.V7)({
        userId: t.id,
        image: u
    });
    return (0, r.jsx)("div", {
        className: d.k,
        children: (0, r.jsx)(i.A, {
            ...m,
            pendingAvatar: h,
            user: t,
            pendingBadges: [(0, c._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0
        })
    })
}