/** chunk id: 315059, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(627968);
r(64700);
var s = r(397927),
    l = r(713654),
    a = r(598104),
    i = r(287809),
    o = r(905174);
let c = function(e) {
    let {
        channel: t,
        avatarSize: r,
        iconSize: c,
        iconClassName: u
    } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            l = i.default.getUser(e);
        if (null == l) return null;
        let a = l.getAvatarURL(null, s.vCh[r].size);
        return (0, n.jsx)(s.euF, {
            "aria-hidden": !0,
            className: o.B7,
            size: r,
            src: a
        })
    }
    if (t.isGroupDM()) return (0, n.jsx)(a.A, {
        "aria-hidden": !0,
        className: o.w$,
        channel: t,
        size: r
    });
    let d = (0, l.gU)(t);
    return null == d ? null : (0, n.jsx)(d, {
        className: u,
        color: "currentColor",
        size: c
    })
}