/** chunk id: 707653, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => d
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(867455),
    a = n(406704),
    o = n(652215),
    s = n(985018);

function d(t) {
    var e, n;
    if (!(0, a.H_)(t) || t.type !== o.rbe.PRIVATE_THREAD) return null;
    let d = null == (e = null == (n = t.threadMetadata) ? void 0 : n.invitable) || e;
    return (0, i.jsx)(r.sLh, {
        id: "toggle-thread-invitable",
        label: s.intl.string(s.t.s2rpNf),
        checked: d,
        action: () => l.A.setInvitable(t, !d)
    })
}