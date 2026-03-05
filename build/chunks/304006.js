/** chunk id: 304006 params = (module,exports,require) **/
t.d(n, {
    h: () => h
});
var l = t(627968),
    i = t(64700),
    a = t(311907),
    r = t(397927),
    s = t(652896),
    d = t(144485),
    o = t(83942),
    c = t(259374),
    u = t(616356),
    A = t(985018);

function h(e) {
    let {
        stream: n,
        channelId: t
    } = e, h = (0, c.k)({
        channelId: t
    }), g = (0, a.bG)([u.A], () => null != u.A.getActiveStreamForApplicationStream(n)), p = (0, s._z)(n), f = (0, o.w)(p), I = i.useCallback(() => {
        d.A.openSecureFramesStreamVerification(p, t)
    }, [t, p]);
    return h && g && !f ? (0, l.jsx)(r.Drp, {
        id: "secure-frames-stream-verification",
        label: A.intl.string(A.t.tjbJbf),
        action: I
    }) : null
}