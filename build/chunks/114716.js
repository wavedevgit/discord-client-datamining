/** chunk id: 114716 params = (module,exports,require) **/
r.d(t, {
    C: () => l
});
var a = r(627968);
r(64700);
var n = r(961350),
    s = r(612181),
    i = r(642277),
    o = r(652215);

function l(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        passProps: !0
    };

    function l(l) {
        return !(0, s.wR)() && n.default.getLoginStatus() !== o.aUe.LOGGING_IN && n.default.allowLogoutRedirect() ? null != t ? (0, a.jsx)(t, {
            renderRedirect: (0, a.jsx)(i.A, {})
        }) : (0, a.jsx)(i.A, {}) : (0, a.jsx)(e, {
            ...r.passProps ? l : null
        })
    }
    return l.displayName = `Authenticated(${e.displayName??e.name??"<Unknown>"})`, l
}