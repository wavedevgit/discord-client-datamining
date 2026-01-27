/** Chunk was on web.js **/
/** chunk id: 167272, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(833349),
    o = n(765379),
    s = n(141639),
    l = n(61330),
    c = n(960076),
    u = n(359549),
    d = n(373966),
    f = n(793574),
    p = n(688810),
    _ = n(308335),
    h = n(82149),
    m = n(961350),
    g = n(790381),
    E = n(266080),
    y = n(939496),
    b = n(934173),
    O = n(502695),
    v = n(691041),
    A = n(793838),
    I = n(668880),
    S = n(72742),
    T = n(312784),
    C = n(985629),
    N = n(652215),
    w = n(996988);

function R(e) {
    var t;
    let {
        user: n,
        activity: R,
        onAction: P,
        onClose: D,
        application: L,
        containerClassName: x
    } = e, {
        themeType: M
    } = (0, y.E)(), j = (0, i.bG)([m.default], () => m.default.getId() === n.id), k = (0, u.J)(L), U = (0, _.o)(null != (t = null == R ? void 0 : R.application_id) ? t : null == L ? void 0 : L.id), {
        analyticsLocations: G
    } = (0, p.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS), F = M === w.d.MODAL || M === w.d.MODAL_V2, V = M === w.d.POPOUT, B = (() => j ? V && (null == R ? void 0 : R.type) === N.$pd.PLAYING && (null == L ? void 0 : L.id) != null ? (0, r.jsx)(d.A, {
        applicationId: L.id,
        onAction: P,
        onClose: D
    }) : null : U || !k || null == L || F ? (0, l.A)(R) ? (0, r.jsx)(I.A, {
        platformType: N.fg2.XBOX,
        icon: () => (0, r.jsx)(E.A, {}),
        onAction: P
    }) : (0, s.A)(R) ? (0, r.jsx)(I.A, {
        platformType: N.fg2.PLAYSTATION,
        icon: () => (0, r.jsx)(g.A, {}),
        onAction: P
    }) : (0, c.A)(R) ? (0, r.jsx)(T.A, {
        activity: R,
        onAction: P
    }) : (0, a.A)(R, N.jUm.JOIN) || (0, o.A)(R) ? (0, r.jsx)(v.A, {
        user: n,
        activity: R,
        onAction: P,
        onClose: D
    }) : (null == R ? void 0 : R.type) === N.$pd.HANG_STATUS ? (0, r.jsx)(O.A, {
        user: n,
        activity: R,
        onAction: P,
        onClose: D
    }) : (null == R ? void 0 : R.buttons) != null && (null == R ? void 0 : R.buttons.length) >= 1 ? (0, r.jsx)(b.A, {
        user: n,
        activity: R,
        onAction: P
    }) : (0, a.A)(R, N.jUm.INSTANCE) ? (0, r.jsx)(A.A, {
        user: n,
        activity: R,
        onAction: P
    }) : (0, h.Cy)(R) ? (0, r.jsx)(S.A, {
        activity: R,
        onAction: P,
        onClose: D
    }) : null : (0, r.jsx)(C.A, {
        application: L,
        onAction: P,
        onClose: D,
        analyticsLocations: G
    }))();
    return null == B ? null : (0, r.jsx)("div", {
        className: x,
        children: B
    })
}