/** chunk id: 171316 params = (module,exports,require) **/
E.d(t, {
    KK: () => s,
    NZ: () => V,
    gr: () => O,
    lH: () => a,
    uM: () => D,
    xs: () => d
});
var e = E(64700),
    A = E(311907),
    I = E(873298),
    S = E(444802),
    T = E(662502),
    n = E(93857),
    C = E(115063),
    R = E(899847),
    i = E(842144),
    l = E(704724),
    r = E(500470),
    N = E(834981),
    u = E(835002);
let d = () => {
        let _ = (0, r.x)(),
            t = n.p7.useControlledSetting(_?.id);
        return null == _ ? null : {
            explicitContentNonFriendDm: (0, l.J6)({
                teenId: _?.id,
                setting: t?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: (0, l.J6)({
                teenId: _?.id,
                setting: t?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: I.TO.BLUR
        }
    },
    O = () => {
        let _ = (0, r.x)(),
            t = n.oQ.useControlledSetting(_?.id);
        if (null == _) return null;
        let {
            goreContentNonFriendDm: E,
            goreContentFriendDm: e
        } = t ?? {};
        return {
            goreContentNonFriendDm: (0, l.ky)(E) ? E : (0, S.jj)({
                isDm: !0
            }),
            goreContentFriendDm: (0, l.ky)(e) ? e : (0, S.jj)({
                isDm: !0,
                isFriend: !0
            }),
            goreContentGuilds: I.TO.BLUR
        }
    },
    s = () => {
        let _ = (0, r.x)(),
            t = n.qz.useControlledSetting(_?.id),
            E = n.yr.useControlledSetting(_?.id);
        return null != E ? E : !!t || t
    };

function V() {
    let _ = (0, r.x)(),
        t = n.up.useControlledSetting(_?.id),
        E = e.useMemo(() => (0, C.Lx)(t), [t]);
    return E.mutualGuilds && !E.all
}

function D() {
    return (0, N.Du)()
}

function a(_) {
    let t, E;
    return {
        hasConsented: (t = (0, r.k)(), (0, A.bG)([i.A], () => i.A.hasConsented(t, _))),
        updateConsent: (E = (0, r.k)(), e.useCallback(async t => {
            if (null != E) try {
                await R.Ay.updateTeenConsents(E, t ? [_] : [], t ? [] : [_])
            } catch (_) {
                T.A.showFailedToast(u.OB.GENERIC_ERROR)
            }
        }, [E, _]))
    }
}