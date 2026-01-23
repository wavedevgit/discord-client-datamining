/** Chunk was on 4309 **/
/** chunk id: 219801, original params: e,a,t (module,exports,require) **/
t.d(a, {
    default: () => s
});
var n = t(627968);
t(64700);
var o = t(417597),
    r = t(994288),
    i = t(287809),
    u = t(954571),
    c = t(652215);

function s(e) {
    let {
        transitionState: a,
        onClose: t,
        userId: s,
        onCancel: d,
        confirmBlock: l
    } = e, _ = (0, o.bG)([i.default], () => i.default.getUser(s));
    if (null != _) return (0, n.jsx)(r.default, {
        transitionState: a,
        user: _,
        onBlock: () => {
            l(), u.default.track(c.HAw.BLOCK_USER_CONFIRMED)
        },
        onClose: t,
        onCancel: d
    })
}