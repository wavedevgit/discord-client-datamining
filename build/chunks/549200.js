/** chunk id: 549200, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(311907),
    a = n(936388),
    l = n(714763),
    r = n(814278),
    o = n(871930),
    c = n(578746),
    d = n(531525),
    u = n(985018);

function _() {
    let e = (0, s.bG)([l.A], () => l.A.getPersistentCodesEnabled());
    return (0, i.jsx)(o.h, {
        setting: d.H.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, i.jsx)(c.Ay, {
            value: e,
            onChange: a.A.updatePersistentCodesEnabled,
            title: u.intl.string(u.t["opi/XK"]),
            note: u.intl.format(u.t["/T+ZlP"], {
                helpArticle: (0, r.Lu)()
            })
        })
    })
}