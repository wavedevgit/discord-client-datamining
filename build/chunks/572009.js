/** chunk id: 572009, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    I9: () => u,
    _$: () => c,
    _D: () => d,
    gX: () => l,
    nq: () => f
}), n(938796);
var r = n(284009),
    i = n.n(r),
    a = n(665260),
    o = n(115093),
    s = n(652215);

function l(e, t, n) {
    e || void 0 === t || i()(n === t, "Premium type should not change for non-staff users")
}

function c(e) {
    return "production" === o.B.TEST && null != e ? e : "production"
}

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return c(t) === o.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === o.B.STAGING || null != e && (e.isStaff() || e.isStaffPersonal())
}

function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return c(t) === o.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === o.B.STAGING || null != e && (!!(null != e.flags && (0, a.Lt)(e.flags, s.nhx.STAFF)) || null != e.personal_connection_id)
}

function f(e) {
    return void 0 !== e && e === s.oA2 ? null : e
}