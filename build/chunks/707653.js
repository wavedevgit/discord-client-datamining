/** Chunk was on 88974 **/
/** chunk id: 707653, original params: t,n,i (module,exports,require) **/
i.d(n, {
    A: () => s
});
var e = i(627968);
i(64700);
var r = i(397927),
    l = i(867455),
    a = i(406704),
    d = i(652215),
    o = i(985018);

function s(t) {
    var n, i;
    if (!(0, a.H_)(t) || t.type !== d.rbe.PRIVATE_THREAD) return null;
    let s = null == (n = null == (i = t.threadMetadata) ? void 0 : i.invitable) || n;
    return (0, e.jsx)(r.sLh, {
        id: "toggle-thread-invitable",
        label: o.intl.string(o.t.s2rpNf),
        checked: s,
        action: () => l.A.setInvitable(t, !s)
    })
}