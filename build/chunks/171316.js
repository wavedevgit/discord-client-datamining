/** chunk id: 171316 params = (module,exports,require) **/
A.d(_, {
    KK: () => V,
    NZ: () => L,
    gr: () => D,
    lH: () => s,
    uM: () => u,
    xs: () => r
});
var I = A(64700),
    T = A(311907),
    S = A(873298),
    t = A(444802),
    e = A(662502),
    C = A(93857),
    O = A(115063),
    R = A(899847),
    n = A(842144),
    N = A(704724),
    P = A(500470),
    i = A(834981),
    l = A(835002);
let r = () => {
        let E = (0, P.x)(),
            _ = C.p7.useControlledSetting(E?.id);
        return null == E ? null : {
            explicitContentNonFriendDm: (0, N.J6)({
                teenId: E?.id,
                setting: _?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: (0, N.J6)({
                teenId: E?.id,
                setting: _?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: S.TO.BLUR
        }
    },
    D = () => {
        let E = (0, P.x)(),
            _ = C.oQ.useControlledSetting(E?.id);
        if (null == E) return null;
        let {
            goreContentNonFriendDm: A,
            goreContentFriendDm: I
        } = _ ?? {};
        return {
            goreContentNonFriendDm: (0, N.ky)(A) ? A : (0, t.jj)({
                isDm: !0
            }),
            goreContentFriendDm: (0, N.ky)(I) ? I : (0, t.jj)({
                isDm: !0,
                isFriend: !0
            }),
            goreContentGuilds: S.TO.BLUR
        }
    },
    V = () => {
        let E = (0, P.x)(),
            _ = C.qz.useControlledSetting(E?.id),
            A = C.yr.useControlledSetting(E?.id);
        return null != A ? A : !!_ || _
    };

function L() {
    let E = (0, P.x)(),
        _ = C.up.useControlledSetting(E?.id),
        A = I.useMemo(() => (0, O.Lx)(_), [_]);
    return A.mutualGuilds && !A.all
}

function u() {
    return (0, i.Du)()
}

function s(E) {
    let _, A;
    return {
        hasConsented: (_ = (0, P.k)(), (0, T.bG)([n.A], () => n.A.hasConsented(_, E))),
        updateConsent: (A = (0, P.k)(), I.useCallback(async _ => {
            if (null != A) try {
                await R.Ay.updateTeenConsents(A, _ ? [E] : [], _ ? [] : [E])
            } catch (E) {
                e.A.showFailedToast(l.OB.GENERIC_ERROR)
            }
        }, [A, E]))
    }
}