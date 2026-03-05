/** chunk id: 184659, original params: e,t,a (module,exports,require) **/
a.d(t, {
    z: () => u
});
var n = a(627968),
    r = a(311907),
    i = a(287070),
    s = a(101058),
    l = a(836602),
    c = a(927578),
    o = a(132198),
    d = a(618733);
let u = e => {
    let {
        user: t
    } = e, a = c.Ay.canUsePremiumProfileCustomization(t), {
        pendingAvatar: u,
        ...m
    } = (0, r.cf)([l.A], () => l.A.getPendingChanges()), p = (0, s.V7)({
        userId: t.id,
        image: u
    });
    return (0, n.jsx)("div", {
        className: d.k,
        children: (0, n.jsx)(i.A, {
            ...m,
            pendingAvatar: p,
            user: t,
            pendingBadges: [(0, o._)()],
            canUsePremiumCustomization: a,
            disabledInputs: !0,
            hideExampleButton: !0
        })
    })
}