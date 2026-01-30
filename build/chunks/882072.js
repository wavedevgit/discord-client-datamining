/** chunk id: 882072, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(228524);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(529200),
    a = n(961350),
    s = n(4274),
    o = n(985018);

function c(e) {
    var t, n;
    let {
        author: c,
        inviteError: u
    } = e, d = (0, i.bG)([a.default], () => a.default.getId()) === c.id ? o.intl.string(o.t.C89OLE) : o.intl.string(o.t.YVub5y), p = (0, s.g)(null == u ? void 0 : u.code);
    return (0, r.jsxs)(l.A, {
        children: [(0, r.jsx)(l.A.Header, {
            text: d
        }), (0, r.jsxs)(l.A.Body, {
            children: [(0, r.jsx)(l.A.Icon, {
                expired: !0
            }), (0, r.jsx)(l.A.Info, {
                expired: !0,
                title: null != (t = null == p ? void 0 : p.title) ? t : o.intl.string(o.t["Jhx/ud"]),
                children: null != (n = null == p ? void 0 : p.description) ? n : null == u ? void 0 : u.message
            })]
        })]
    })
}