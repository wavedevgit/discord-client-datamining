/** Chunk was on 77870 **/
/** chunk id: 576045, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => c
}), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(731738),
    s = n(831062),
    a = n(476592),
    o = n(665909);

function c(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: c,
        warningType: u,
        header: d,
        description: p,
        onDismiss: h,
        buttons: f
    } = e;
    l.useEffect(() => {
        s.A.increment({
            name: i.K.SAFETY_WARNING_VIEW
        })
    }, []);
    let g = l.useCallback(() => {
        null == h || h(), (0, o._$)({
            channelId: t,
            warningId: n,
            senderId: c,
            warningType: u,
            cta: o.Wm.USER_BANNER_DISMISS
        })
    }, [h, t, n, c, u]);
    return (0, r.jsx)(a.Z, {
        buttons: f,
        description: p,
        header: d,
        onDismiss: g
    })
}