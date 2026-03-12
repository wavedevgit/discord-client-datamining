/** chunk id: 171316 params = (module,exports,require) **/
A.d(t, {
    KK: () => d,
    NZ: () => a,
    gr: () => s,
    lH: () => D,
    uM: () => o,
    xs: () => u
});
var E = A(64700),
    e = A(311907),
    C = A(873298),
    T = A(444802),
    I = A(662502),
    S = A(93857),
    n = A(115063),
    R = A(899847),
    i = A(842144),
    l = A(704724),
    r = A(500470),
    N = A(834981),
    O = A(835002);
let u = () => {
        let _ = (0, r.x)(),
            t = S.p7.useControlledSetting(_?.id);
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
            explicitContentGuilds: C.TO.BLUR
        }
    },
    s = () => {
        let _ = (0, r.x)(),
            t = S.oQ.useControlledSetting(_?.id);
        if (null == _) return null;
        let {
            goreContentNonFriendDm: A,
            goreContentFriendDm: E
        } = t ?? {};
        return {
            goreContentNonFriendDm: (0, l.ky)(A) ? A : (0, T.jj)({
                isDm: !0
            }),
            goreContentFriendDm: (0, l.ky)(E) ? E : (0, T.jj)({
                isDm: !0,
                isFriend: !0
            }),
            goreContentGuilds: C.TO.BLUR
        }
    },
    d = () => {
        let _ = (0, r.x)(),
            t = S.qz.useControlledSetting(_?.id),
            A = S.yr.useControlledSetting(_?.id);
        return null != A ? A : !!t || t
    };

function a() {
    let _ = (0, r.x)(),
        t = S.up.useControlledSetting(_?.id),
        A = E.useMemo(() => (0, n.Lx)(t), [t]);
    return A.mutualGuilds && !A.all
}

function o() {
    return (0, N.Du)()
}

function D(_) {
    let t, A;
    return {
        hasConsented: (t = (0, r.k)(), (0, e.bG)([i.A], () => i.A.hasConsented(t, _))),
        updateConsent: (A = (0, r.k)(), E.useCallback(async t => {
            if (null != A) try {
                await R.Ay.updateTeenConsents(A, t ? [_] : [], t ? [] : [_])
            } catch (_) {
                I.A.showFailedToast(O.OB.GENERIC_ERROR)
            }
        }, [A, _]))
    }
}