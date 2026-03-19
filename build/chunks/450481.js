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
    s = n(442759),
    _ = n(985018);
let p = e => {
    let {
        product: t,
        onSuccess: p,
        onError: E
    } = e, [c, S] = i.useState(!1), {
        firstAvatarDecoration: u,
        firstProfileEffect: I,
        firstNameplate: h
    } = (0, s.f5)(t), T = (0, d.aw)(t) ? _.intl.string(_.t.tf1ZZ4) : t.type === a.R.AVATAR_DECORATION ? _.intl.string(_.t.zOA4ax) : t.type === a.R.NAMEPLATE ? _.intl.string(_.t.gOzMvx) : _.intl.string(_.t.SWm2ai);
    return {
        handleUseNow: i.useCallback(async () => {
            S(!0);
            let e = {};
            try {
                if (null != u && (e.avatarDecoration = u), null != I) {
                    let e = (0, r.yX)({
                        pendingProfileEffect: I
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
                    a(), l(i(T, t.MESSAGE, {
                        duration: 6e3,
                        position: e.TOP
                    }))
                }
                p?.()
            } catch (e) {
                E?.(e)
            } finally {
                S(!1)
            }
        }, [u, I, h, p, T, E]),
        isApplying: c
    }
}