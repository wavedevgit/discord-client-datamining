/** chunk id: 994987, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(417597),
    l = n(435371),
    s = n(397927),
    a = n(287809),
    o = n(923531),
    c = n(283900),
    d = n(478311);
let u = e => {
    let {
        userId: t,
        dmsSent: n,
        callCount: u
    } = e, _ = (0, i.bG)([a.default], () => a.default.getUser(t));
    return void 0 === _ ? null : (0, r.jsx)(l.un, {
        title: _.username,
        body: (0, o.fq)(n, u),
        asContainer: !0,
        children: (0, r.jsx)("div", {
            className: d.k,
            children: (0, r.jsx)(c.H, {
                user: _,
                avatarSize: s._3J.SIZE_40
            })
        })
    })
}