/** chunk id: 834981, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Du: () => h,
    GR: () => A,
    Li: () => g,
    VE: () => x,
    VT: () => E,
    W1: () => C,
    XC: () => S,
    v4: () => T,
    vx: () => m,
    xk: () => _,
    xr: () => p
});
var i = n(64700),
    s = n(417597),
    a = n(287809),
    l = n(695515),
    r = n(923531),
    o = n(438732),
    c = n(500470),
    d = n(191627);

function u(e) {
    let t = (0, s.bG)([l.A], () => l.A.getLinkedUsers());
    return i.useMemo(() => Object.values(t).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => e.user_id).filter(e => null != e), [t, e])
}
let _ = e => {
    let t = u(e);
    return (0, s.yK)([a.default], () => t.map(e => a.default.getUser(e))).filter(e => null != e)
};

function m() {
    return u(d.Ef.ACTIVE)
}

function A() {
    return _(d.Ef.ACTIVE)
}
let g = () => m().length > 0;

function h() {
    let e = (0, s.bG)([l.A], () => l.A.getLinkedUsers());
    return i.useMemo(() => Object.values(e).some(e => null != e && e.link_status === d.Ef.ACTIVE && e.link_type === d.QM.PARENT), [e])
}

function x() {
    let e = (0, s.bG)([l.A], () => l.A.getLinkCode()),
        t = (0, s.bG)([a.default], () => a.default.getCurrentUser());
    return null == e || null == t ? null : (0, d.jZ)(t.id, e)
}

function p() {
    let e = (0, o.A)(),
        t = m(),
        n = e ? d.Y7 : d.kp;
    return t.length >= n
}

function E() {
    let e = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        t = (0, s.bG)([l.A], () => l.A.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === d.Ef.PENDING && e.id !== t.requestor_id).length
}

function C() {
    return m().length
}

function T(e) {
    let t = (0, c.k)(),
        n = (0, s.bG)([l.A], () => null == t ? null : l.A.getRangeStartTimestamp());
    return null == n ? null : (0, r.i6)(new Date(n).getTime(), () => e, 7)
}

function S(e, t) {
    let n = (0, s.bG)([l.A], () => l.A.getLinkTimestamp(e));
    return null != n ? (0, r.mV)(Date.parse(n), t === d.Ef.PENDING ? d.lu : d.dI) : null
}