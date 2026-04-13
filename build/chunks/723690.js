/** chunk id: 723690 params = (module,exports,require) **/
s.d(t, {
    A: () => h
});
var i = s(627968);
s(64700);
var n = s(503698),
    a = s.n(n),
    r = s(311907),
    l = s(297413),
    u = s(966327),
    o = s(994500);
s(427262);
var c = s(904625);
let h = function(e) {
    let {
        user: t,
        hovered: s,
        subText: n,
        showAccountIdentifier: h,
        status: d,
        isMobile: A,
        isVR: I,
        className: N
    } = e, m = (0, r.bG)([o.A], () => o.A.getNickname(t.id));
    return (0, i.jsxs)("div", {
        className: a()(c.eF, N, {
            [c.yo]: s
        }),
        children: [(0, i.jsx)(u.A, {
            user: t,
            className: c.my,
            animate: s,
            status: d,
            isMobile: A,
            isVR: I
        }), (0, i.jsxs)("div", {
            className: c.Qq,
            children: [(0, i.jsx)(l.A, {
                user: t,
                nick: m,
                botClass: c.AO,
                className: a()(c.xK, {
                    [c.Nu]: t.hasUniqueUsername()
                }),
                usernameClass: c.Xh,
                discriminatorClass: c.D2,
                showAccountIdentifier: h
            }), (0, i.jsx)("div", {
                className: c.W$,
                children: n
            })]
        })]
    })
}