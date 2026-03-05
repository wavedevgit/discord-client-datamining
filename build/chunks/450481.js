/** chunk id: 450481, original params: e,n,a (module,exports,require) **/
a.d(n, {
    p: () => c
});
var t = a(64700),
    i = a(575593),
    l = a(631670),
    r = a(587600),
    s = a(207803),
    o = a(993408),
    d = a(442759),
    u = a(985018);
let c = e => {
    let {
        product: n,
        onSuccess: c,
        onError: p
    } = e, [g, v] = t.useState(!1), {
        firstAvatarDecoration: h,
        firstProfileEffect: m,
        firstNameplate: A
    } = (0, d.f5)(n), y = (0, o.aw)(n) ? u.intl.string(u.t.tf1ZZ4) : n.type === i.R.AVATAR_DECORATION ? u.intl.string(u.t.zOA4ax) : n.type === i.R.NAMEPLATE ? u.intl.string(u.t.gOzMvx) : u.intl.string(u.t.SWm2ai);
    return {
        handleUseNow: t.useCallback(async () => {
            v(!0);
            let e = {};
            try {
                if (null != h && (e.avatarDecoration = h), null != m) {
                    let e = (0, r.yX)({
                        pendingProfileEffect: m
                    });
                    await (0, s.gi)(e)
                }
                null != A && (e.nameplate = A), Object.keys(e).length > 0 && await (0, l._L)(e);
                {
                    let {
                        ToastPosition: e,
                        ToastType: n,
                        createToast: t,
                        popToast: i,
                        showToast: l
                    } = await Promise.resolve().then(a.bind(a, 397927));
                    i(), l(t(y, n.MESSAGE, {
                        duration: 6e3,
                        position: e.TOP
                    }))
                }
                c?.()
            } catch (e) {
                p?.(e)
            } finally {
                v(!1)
            }
        }, [h, m, A, c, y, p]),
        isApplying: g
    }
}