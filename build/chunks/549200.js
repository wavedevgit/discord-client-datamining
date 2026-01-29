/** Chunk was on 2827 **/
/** chunk id: 549200, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(311907),
    l = n(936388),
    s = n(714763),
    a = n(814278),
    o = n(871930),
    c = n(578746),
    d = n(531525),
    u = n(985018);

function _() {
    let e = (0, i.bG)([s.A], () => s.A.getPersistentCodesEnabled());
    return (0, r.jsx)(o.h, {
        setting: d.H.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, r.jsx)(c.Ay, {
            value: e,
            onChange: l.A.updatePersistentCodesEnabled,
            title: u.intl.string(u.t["opi/XK"]),
            note: u.intl.format(u.t["/T+ZlP"], {
                helpArticle: (0, a.Lu)()
            })
        })
    })
}