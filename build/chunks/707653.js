/** chunk id: 707653 params = (module,exports,require) **/
i.d(n, {
    A: () => o
});
var e = i(627968);
i(64700);
var r = i(397927),
    l = i(867455),
    a = i(406704),
    s = i(652215),
    d = i(985018);

function o(t) {
    if (!(0, a.H_)(t) || t.type !== s.rbe.PRIVATE_THREAD) return null;
    let n = t.threadMetadata?.invitable ?? !0;
    return (0, e.jsx)(r.sLh, {
        id: "toggle-thread-invitable",
        label: d.intl.string(d.t.s2rpNf),
        checked: n,
        action: () => l.A.setInvitable(t, !n)
    })
}