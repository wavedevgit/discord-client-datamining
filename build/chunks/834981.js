/** chunk id: 834981, original params: E,_,I (module,exports,require) **/
I.d(_, {
    Du: () => i,
    GR: () => D,
    Li: () => L,
    VE: () => l,
    VT: () => V,
    W1: () => Y,
    XC: () => u,
    v4: () => G,
    vx: () => P,
    xk: () => n,
    xr: () => r
});
var S = I(64700),
    A = I(417597),
    T = I(287809),
    C = I(695515),
    O = I(923531),
    t = I(438732),
    e = I(500470),
    R = I(191627);

function N(E) {
    let _ = (0, A.bG)([C.A], () => C.A.getLinkedUsers());
    return S.useMemo(() => Object.values(_).filter(_ => null != _ && _.link_status === E).sort((E, _) => new Date(E.updated_at).getTime() - new Date(_.updated_at).getTime()).map(E => E.user_id).filter(E => null != E), [_, E])
}
let n = E => {
    let _ = N(E);
    return (0, A.yK)([T.default], () => _.map(E => T.default.getUser(E))).filter(E => null != E)
};

function P() {
    return N(R.Ef.ACTIVE)
}

function D() {
    return n(R.Ef.ACTIVE)
}
let L = () => P().length > 0;

function i() {
    let E = (0, A.bG)([C.A], () => C.A.getLinkedUsers());
    return S.useMemo(() => Object.values(E).some(E => null != E && E.link_status === R.Ef.ACTIVE && E.link_type === R.QM.PARENT), [E])
}

function l() {
    let E = (0, A.bG)([C.A], () => C.A.getLinkCode()),
        _ = (0, A.bG)([T.default], () => T.default.getCurrentUser());
    return null == E || null == _ ? null : (0, R.jZ)(_.id, E)
}

function r() {
    let E = (0, t.A)(),
        _ = P(),
        I = E ? R.Y7 : R.kp;
    return _.length >= I
}

function V() {
    let E = (0, A.bG)([T.default], () => T.default.getCurrentUser()),
        _ = (0, A.bG)([C.A], () => C.A.getLinkedUsers());
    return null == E ? 0 : Object.values(_).filter(_ => null != _ && _.link_status === R.Ef.PENDING && E.id !== _.requestor_id).length
}

function Y() {
    return P().length
}

function G(E) {
    let _ = (0, e.k)(),
        I = (0, A.bG)([C.A], () => null == _ ? null : C.A.getRangeStartTimestamp());
    return null == I ? null : (0, O.i6)(new Date(I).getTime(), () => E, 7)
}

function u(E, _) {
    let I = (0, A.bG)([C.A], () => C.A.getLinkTimestamp(E));
    return null != I ? (0, O.mV)(Date.parse(I), _ === R.Ef.PENDING ? R.lu : R.dI) : null
}