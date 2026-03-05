/** chunk id: 549200, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(311907),
    l = n(936388),
    a = n(714763),
    r = n(814278),
    o = n(871930),
    d = n(578746),
    c = n(531525),
    u = n(985018);

function _() {
    let e = (0, s.bG)([a.A], () => a.A.getPersistentCodesEnabled());
    return (0, i.jsx)(o.h, {
        setting: c.H.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, i.jsx)(d.Ay, {
            value: e,
            onChange: l.A.updatePersistentCodesEnabled,
            title: u.intl.string(u.t["opi/XK"]),
            note: u.intl.format(u.t["/T+ZlP"], {
                helpArticle: (0, r.Lu)()
            })
        })
    })
}