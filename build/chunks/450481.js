/** chunk id: 450481 params = (module,exports,require) **/
n.d(t, {
    p: () => p
});
var i = n(64700),
    a = n(575593),
    l = n(631670),
    r = n(587600),
    o = n(207803),
    d = n(993408),
    _ = n(442759),
    s = n(985018);
let p = e => {
    let {
        product: t,
        onSuccess: p,
        onError: E
    } = e, [u, c] = i.useState(!1), {
        firstAvatarDecoration: S,
        firstProfileEffect: T,
        firstNameplate: h
    } = (0, _.f5)(t), A = (0, d.aw)(t) ? s.intl.string(s.t.tf1ZZ4) : t.type === a.R.AVATAR_DECORATION ? s.intl.string(s.t.zOA4ax) : t.type === a.R.NAMEPLATE ? s.intl.string(s.t.gOzMvx) : s.intl.string(s.t.SWm2ai);
    return {
        handleUseNow: i.useCallback(async () => {
            c(!0);
            let e = {};
            try {
                if (null != S && (e.avatarDecoration = S), null != T) {
                    let e = (0, r.yX)({
                        pendingProfileEffect: T
                    });
                    await (0, o.gi)(e)
                }
                null != h && (e.nameplate = h), Object.keys(e).length > 0 && await (0, l._L)(e);
                {
                    let {
                        ToastPosition: e,
                        ToastType: t,
                        createToast: i,
                        popToast: a,
                        showToast: l
                    } = await Promise.resolve().then(n.bind(n, 397927));
                    a(), l(i(A, t.MESSAGE, {
                        duration: 6e3,
                        position: e.TOP
                    }))
                }
                p?.()
            } catch (e) {
                E?.(e)
            } finally {
                c(!1)
            }
        }, [S, T, h, p, A, E]),
        isApplying: u
    }
}