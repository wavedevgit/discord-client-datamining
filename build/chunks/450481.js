/** chunk id: 450481 params = (module,exports,require) **/
n.d(t, {
    p: () => u
});
var a = n(64700),
    i = n(575593),
    l = n(631670),
    r = n(587600),
    o = n(207803),
    s = n(993408),
    d = n(442759),
    p = n(985018);
let u = e => {
    let {
        product: t,
        onSuccess: u,
        onError: c
    } = e, [_, E] = a.useState(!1), {
        firstAvatarDecoration: S,
        firstProfileEffect: h,
        firstNameplate: v
    } = (0, d.f5)(t), A = (0, s.aw)(t) ? p.intl.string(p.t.tf1ZZ4) : t.type === i.R.AVATAR_DECORATION ? p.intl.string(p.t.zOA4ax) : t.type === i.R.NAMEPLATE ? p.intl.string(p.t.gOzMvx) : p.intl.string(p.t.SWm2ai);
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
                    i(), l(a(A, t.MESSAGE, {
                        duration: 6e3,
                        position: e.TOP
                    }))
                }
                u?.()
            } catch (e) {
                c?.(e)
            } finally {
                E(!1)
            }
        }, [S, h, v, u, A, c]),
        isApplying: _
    }
}