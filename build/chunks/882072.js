/** chunk id: 882072 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(311907),
    r = n(529200),
    l = n(961350),
    s = n(4274),
    o = n(985018);

function d(e) {
    let {
        author: t,
        inviteError: n
    } = e, d = (0, a.bG)([l.default], () => l.default.getId()) === t.id ? o.intl.string(o.t.C89OLE) : o.intl.string(o.t.YVub5y), c = (0, s.g)(n?.code);
    return (0, i.jsxs)(r.A, {
        children: [(0, i.jsx)(r.A.Header, {
            text: d
        }), (0, i.jsxs)(r.A.Body, {
            children: [(0, i.jsx)(r.A.Icon, {
                expired: !0
            }), (0, i.jsx)(r.A.Info, {
                expired: !0,
                title: c?.title ?? o.intl.string(o.t["Jhx/ud"]),
                children: c?.description ?? n?.message
            })]
        })]
    })
}