/** chunk id: 834981 params = (module,exports,require) **/
n.d(t, {
    Du: () => x,
    GR: () => p,
    Li: () => h,
    VE: () => g,
    VT: () => v,
    W1: () => b,
    XC: () => T,
    v4: () => f,
    vx: () => m,
    xk: () => _,
    xr: () => A
});
var a = n(64700),
    l = n(417597),
    i = n(287809),
    r = n(695515),
    s = n(923531),
    d = n(438732),
    o = n(500470),
    c = n(191627);

function u(e) {
    let t = (0, l.bG)([r.A], () => r.A.getLinkedUsers());
    return a.useMemo(() => Object.values(t).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => e.user_id).filter(e => null != e), [t, e])
}
let _ = e => {
    let t = u(e);
    return (0, l.yK)([i.default], () => t.map(e => i.default.getUser(e))).filter(e => null != e)
};

function m() {
    return u(c.Ef.ACTIVE)
}

function p() {
    return _(c.Ef.ACTIVE)
}
let h = () => m().length > 0;

function x() {
    let e = (0, l.bG)([r.A], () => r.A.getLinkedUsers());
    return a.useMemo(() => Object.values(e).some(e => null != e && e.link_status === c.Ef.ACTIVE && e.link_type === c.QM.PARENT), [e])
}

function g() {
    let e = (0, l.bG)([r.A], () => r.A.getLinkCode()),
        t = (0, l.bG)([i.default], () => i.default.getCurrentUser());
    return null == e || null == t ? null : (0, c.jZ)(t.id, e)
}

function A() {
    let e = (0, d.A)(),
        t = m(),
        n = e ? c.Y7 : c.kp;
    return t.length >= n
}

function v() {
    let e = (0, l.bG)([i.default], () => i.default.getCurrentUser()),
        t = (0, l.bG)([r.A], () => r.A.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === c.Ef.PENDING && e.id !== t.requestor_id).length
}

function b() {
    return m().length
}

function f(e) {
    let t = (0, o.k)(),
        n = (0, l.bG)([r.A], () => null == t ? null : r.A.getRangeStartTimestamp());
    return null == n ? null : (0, s.i6)(new Date(n).getTime(), () => e, 7)
}

function T(e, t) {
    let n = (0, l.bG)([r.A], () => r.A.getLinkTimestamp(e));
    return null != n ? (0, s.mV)(Date.parse(n), t === c.Ef.PENDING ? c.lu : c.dI) : null
}