/** chunk id: 994987 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(417597),
    l = n(435371),
    a = n(397927),
    r = n(287809),
    o = n(923531),
    d = n(283900),
    c = n(873268);
let u = e => {
    let {
        userId: t,
        dmsSent: n,
        callCount: u
    } = e, m = (0, s.bG)([r.default], () => r.default.getUser(t));
    return void 0 === m ? null : (0, i.jsx)(l.un, {
        title: m.username,
        body: (0, o.fq)(n, u),
        asContainer: !0,
        children: (0, i.jsx)("div", {
            className: c.k,
            children: (0, i.jsx)(d.H, {
                user: m,
                avatarSize: a._3J.SIZE_40
            })
        })
    })
}