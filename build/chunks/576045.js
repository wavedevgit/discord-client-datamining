/** chunk id: 576045, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => c
}), n(228524);
var l = n(627968),
    r = n(64700),
    i = n(731738),
    a = n(831062),
    s = n(476592),
    o = n(665909);

function c(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: c,
        warningType: u,
        header: d,
        description: h,
        onDismiss: p,
        buttons: f
    } = e;
    r.useEffect(() => {
        a.A.increment({
            name: i.K.SAFETY_WARNING_VIEW
        })
    }, []);
    let m = r.useCallback(() => {
        null == p || p(), (0, o._$)({
            channelId: t,
            warningId: n,
            senderId: c,
            warningType: u,
            cta: o.Wm.USER_BANNER_DISMISS
        })
    }, [p, t, n, c, u]);
    return (0, l.jsx)(s.Z, {
        buttons: f,
        description: h,
        header: d,
        onDismiss: m
    })
}