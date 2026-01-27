/** Chunk was on 52199 **/
/** chunk id: 315059, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(627968);
r(64700);
var l = r(397927),
    s = r(713654),
    a = r(598104),
    i = r(287809),
    o = r(996316);
let c = function(e) {
    let {
        channel: t,
        avatarSize: r,
        iconSize: c,
        iconClassName: u
    } = e;
    if (t.isDM()) {
        let e = t.getRecipientId(),
            s = i.default.getUser(e);
        if (null == s) return null;
        let a = s.getAvatarURL(null, l.vCh[r].size);
        return (0, n.jsx)(l.euF, {
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
    let d = (0, s.gU)(t);
    return null == d ? null : (0, n.jsx)(d, {
        className: u,
        color: "currentColor",
        size: c
    })
}