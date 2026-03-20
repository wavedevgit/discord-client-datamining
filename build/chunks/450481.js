/** chunk id: 450481 params = (module,exports,require) **/
n.d(t, {
    p: () => p
});
var a = n(64700),
    i = n(575593),
    l = n(631670),
    r = n(587600),
    o = n(207803),
    s = n(993408),
    d = n(442759),
    u = n(985018);
let p = e => {
    let {
        product: t,
        onSuccess: p,
        onError: c
    } = e, [_, E] = a.useState(!1), {
        firstAvatarDecoration: S,
        firstProfileEffect: h,
        firstNameplate: v
    } = (0, d.f5)(t), g = (0, s.aw)(t) ? u.intl.string(u.t.tf1ZZ4) : t.type === i.R.AVATAR_DECORATION ? u.intl.string(u.t.zOA4ax) : t.type === i.R.NAMEPLATE ? u.intl.string(u.t.gOzMvx) : u.intl.string(u.t.SWm2ai);
    return {
        handleUseNow: a.useCallback(async () => {
            E(!0);
            let e = {};
            try {
                if (null != S && (e.avatarDecoration = S), null != h) {
                    let e = (0, r.yX)({
                        pendingProfileEffect: h
                    });
                    await (0, o.gi)(e)
                }
                null != v && (e.nameplate = v), Object.keys(e).length > 0 && await (0, l._L)(e);
                {
                    let {
                        ToastPosition: e,
                        ToastType: t,
                        createToast: a,
                        popToast: i,
                        showToast: l
                    } = await Promise.resolve().then(n.bind(n, 397927));
                    i(), l(a(g, t.MESSAGE, {
                        duration: 6e3,
                        position: e.TOP
                    }))
                }
                p?.()
            } catch (e) {
                c?.(e)
            } finally {
                E(!1)
            }
        }, [S, h, v, p, g, c]),
        isApplying: _
    }
}