/** chunk id: 834981 params = (module,exports,require) **/
n.d(t, {
    Du: () => _,
    GR: () => C,
    Li: () => p,
    VE: () => f,
    VT: () => x,
    W1: () => T,
    XC: () => A,
    v4: () => G,
    vx: () => m,
    xk: () => g,
    xr: () => v
});
var l = n(64700),
    r = n(417597),
    i = n(287809),
    u = n(695515),
    d = n(923531),
    s = n(438732),
    a = n(500470),
    o = n(191627);

function c(e) {
    let t = (0, r.bG)([u.A], () => u.A.getLinkedUsers());
    return l.useMemo(() => Object.values(t).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => e.user_id).filter(e => null != e), [t, e])
}
let g = e => {
    let t = c(e);
    return (0, r.yK)([i.default], () => t.map(e => i.default.getUser(e))).filter(e => null != e)
};

function m() {
    return c(o.Ef.ACTIVE)
}

function C() {
    return g(o.Ef.ACTIVE)
}
let p = () => m().length > 0;

function _() {
    let e = (0, r.bG)([u.A], () => u.A.getLinkedUsers());
    return l.useMemo(() => Object.values(e).some(e => null != e && e.link_status === o.Ef.ACTIVE && e.link_type === o.QM.PARENT), [e])
}

function f() {
    let e = (0, r.bG)([u.A], () => u.A.getLinkCode()),
        t = (0, r.bG)([i.default], () => i.default.getCurrentUser());
    return null == e || null == t ? null : (0, o.jZ)(t.id, e)
}

function v() {
    let e = (0, s.A)(),
        t = m(),
        n = e ? o.Y7 : o.kp;
    return t.length >= n
}

function x() {
    let e = (0, r.bG)([i.default], () => i.default.getCurrentUser()),
        t = (0, r.bG)([u.A], () => u.A.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === o.Ef.PENDING && e.id !== t.requestor_id).length
}

function T() {
    return m().length
}

function G(e) {
    let t = (0, a.k)(),
        n = (0, r.bG)([u.A], () => null == t ? null : u.A.getRangeStartTimestamp());
    return null == n ? null : (0, d.i6)(new Date(n).getTime(), () => e, 7)
}

function A(e, t) {
    let n = (0, r.bG)([u.A], () => u.A.getLinkTimestamp(e));
    return null != n ? (0, d.mV)(Date.parse(n), t === o.Ef.PENDING ? o.lu : o.dI) : null
}