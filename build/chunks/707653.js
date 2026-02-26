/** chunk id: 707653, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => o
});
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(867455),
    a = e(406704),
    d = e(652215),
    s = e(985018);

function o(t) {
    if (!(0, a.H_)(t) || t.type !== d.rbe.PRIVATE_THREAD) return null;
    let n = t.threadMetadata?.invitable ?? !0;
    return (0, i.jsx)(l.sLh, {
        id: "toggle-thread-invitable",
        label: s.intl.string(s.t.s2rpNf),
        checked: n,
        action: () => r.A.setInvitable(t, !n)
    })
}