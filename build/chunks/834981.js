/** Chunk was on 60667 **/
/** chunk id: 834981, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Du: () => A,
    GR: () => m,
    Li: () => g,
    VE: () => f,
    VT: () => b,
    W1: () => E,
    XC: () => O,
    v4: () => x,
    vx: () => p,
    xk: () => _,
    xr: () => h
}), n(638769);
var r = n(64700),
    i = n(417597),
    l = n(287809),
    s = n(695515),
    a = n(923531),
    o = n(438732),
    c = n(500470),
    d = n(191627);

function u(e) {
    let t = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
    return r.useMemo(() => Object.values(t).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => e.user_id).filter(e => null != e), [t, e])
}
let _ = e => {
    let t = u(e);
    return (0, i.yK)([l.default], () => t.map(e => l.default.getUser(e))).filter(e => null != e)
};

function p() {
    return u(d.Ef.ACTIVE)
}

function m() {
    return _(d.Ef.ACTIVE)
}
let g = () => p().length > 0;

function A() {
    let e = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
    return r.useMemo(() => Object.values(e).some(e => null != e && e.link_status === d.Ef.ACTIVE && e.link_type === d.QM.PARENT), [e])
}

function f() {
    let e = (0, i.bG)([s.A], () => s.A.getLinkCode()),
        t = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    return null == e || null == t ? null : (0, d.jZ)(t.id, e)
}

function h() {
    let e = (0, o.A)(),
        t = p(),
        n = e ? d.Y7 : d.kp;
    return t.length >= n
}

function b() {
    let e = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        t = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === d.Ef.PENDING && e.id !== t.requestor_id).length
}

function E() {
    return p().length
}

function x(e) {
    let t = (0, c.k)(),
        n = (0, i.bG)([s.A], () => null == t ? null : s.A.getRangeStartTimestamp());
    return null == n ? null : (0, a.i6)(new Date(n).getTime(), () => e, 7)
}

function O(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getLinkTimestamp(e));
    return null != n ? (0, a.mV)(Date.parse(n), t === d.Ef.PENDING ? d.lu : d.dI) : null
}