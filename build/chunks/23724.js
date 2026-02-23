/** chunk id: 23724, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => c
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(914430),
    s = t(924985),
    d = t(985018);

function c(n) {
    let e = (0, r.bG)([s.A], () => s.A.isCollapsed(n.id), [n.id]);
    return (0, i.jsx)(l.sLh, {
        id: "collapse-category",
        label: d.intl.string(d.t.SvVRsj),
        action: () => e ? (0, a.fh)(n.id) : (0, a.Gv)(n.id),
        checked: e
    })
}