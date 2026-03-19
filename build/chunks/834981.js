/** chunk id: 834981 params = (module,exports,require) **/
n.d(e, {
    Du: () => A,
    GR: () => _,
    Li: () => T,
    VE: () => E,
    VT: () => C,
    W1: () => G,
    XC: () => I,
    v4: () => p,
    vx: () => S,
    xk: () => g,
    xr: () => f
});
var i = n(64700),
    l = n(417597),
    r = n(287809),
    u = n(695515),
    d = n(923531),
    s = n(438732),
    a = n(500470),
    o = n(191627);

function c(t) {
    let e = (0, l.bG)([u.A], () => u.A.getLinkedUsers());
    return i.useMemo(() => Object.values(e).filter(e => null != e && e.link_status === t).sort((t, e) => new Date(t.updated_at).getTime() - new Date(e.updated_at).getTime()).map(t => t.user_id).filter(t => null != t), [e, t])
}
let g = t => {
    let e = c(t);
    return (0, l.yK)([r.default], () => e.map(t => r.default.getUser(t))).filter(t => null != t)
};

function S() {
    return c(o.Ef.ACTIVE)
}

function _() {
    return g(o.Ef.ACTIVE)
}
let T = () => S().length > 0;

function A() {
    let t = (0, l.bG)([u.A], () => u.A.getLinkedUsers());
    return i.useMemo(() => Object.values(t).some(t => null != t && t.link_status === o.Ef.ACTIVE && t.link_type === o.QM.PARENT), [t])
}

function E() {
    let t = (0, l.bG)([u.A], () => u.A.getLinkCode()),
        e = (0, l.bG)([r.default], () => r.default.getCurrentUser());
    return null == t || null == e ? null : (0, o.jZ)(e.id, t)
}

function f() {
    let t = (0, s.A)(),
        e = S(),
        n = t ? o.Y7 : o.kp;
    return e.length >= n
}

function C() {
    let t = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        e = (0, l.bG)([u.A], () => u.A.getLinkedUsers());
    return null == t ? 0 : Object.values(e).filter(e => null != e && e.link_status === o.Ef.PENDING && t.id !== e.requestor_id).length
}

function G() {
    return S().length
}

function p(t) {
    let e = (0, a.k)(),
        n = (0, l.bG)([u.A], () => null == e ? null : u.A.getRangeStartTimestamp());
    return null == n ? null : (0, d.i6)(new Date(n).getTime(), () => t, 7)
}

function I(t, e) {
    let n = (0, l.bG)([u.A], () => u.A.getLinkTimestamp(t));
    return null != n ? (0, d.mV)(Date.parse(n), e === o.Ef.PENDING ? o.lu : o.dI) : null
}