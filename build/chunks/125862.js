/** Chunk was on 28636 **/
/** chunk id: 125862, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    l = n(64700),
    i = n(136722),
    a = n(397927),
    s = n(595738),
    o = n(376092),
    c = n(985018),
    d = n(437504);
let u = function(e) {
    var t;
    let {
        application: n
    } = e, u = l.useMemo(() => {
        var e;
        let t = null == n || null == (e = n.install_params) ? void 0 : e.permissions;
        if (null != t) return o.Q.filter(e => i.zy(i.iu(t), e))
    }, [null == n || null == (t = n.install_params) ? void 0 : t.permissions]);
    return null != u && u.length > 0 ? (0, r.jsxs)("div", {
        className: d.A,
        children: [(0, r.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: c.intl.string(c.t.runNF8)
        }), (0, r.jsx)(s.A, {
            className: d.h,
            grantedPermissions: u,
            grantedPermissionsHeader: c.intl.string(c.t.SLgiNH)
        })]
    }) : null
}