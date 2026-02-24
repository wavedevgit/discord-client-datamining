/** chunk id: 994987, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(417597),
    a = n(435371),
    l = n(397927),
    r = n(287809),
    o = n(923531),
    c = n(283900),
    d = n(430693);
let u = e => {
    let {
        userId: t,
        dmsSent: n,
        callCount: u
    } = e, _ = (0, s.bG)([r.default], () => r.default.getUser(t));
    return void 0 === _ ? null : (0, i.jsx)(a.un, {
        title: _.username,
        body: (0, o.fq)(n, u),
        asContainer: !0,
        children: (0, i.jsx)("div", {
            className: d.k,
            children: (0, i.jsx)(c.H, {
                user: _,
                avatarSize: l._3J.SIZE_40
            })
        })
    })
}