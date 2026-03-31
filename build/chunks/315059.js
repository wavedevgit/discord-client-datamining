/** chunk id: 315059 params = (module,exports,require) **/
r.d(t, {
    A: () => o
});
var n = r(627968);
r(64700);
var s = r(397927),
    l = r(713654),
    a = r(598104),
    i = r(287809),
    u = r(817207);
let o = function(e) {
    let {
        channel: t,
        avatarSize: r,
        iconSize: o,
        iconClassName: c
    } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            l = i.default.getUser(e);
        if (null == l) return null;
        let a = l.getAvatarURL(null, s.vCh[r].size);
        return (0, n.jsx)(s.euF, {
            "aria-hidden": !0,
            className: u.B7,
            size: r,
            src: a
        })
    }
    if (t.isGroupDM()) return (0, n.jsx)(a.A, {
        "aria-hidden": !0,
        className: u.w$,
        channel: t,
        size: r
    });
    let h = (0, l.gU)(t);
    return null == h ? null : (0, n.jsx)(h, {
        className: c,
        color: "currentColor",
        size: o
    })
}