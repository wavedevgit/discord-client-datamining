/** chunk id: 171316 params = (module,exports,require) **/
I.d(_, {
    KK: () => r,
    NZ: () => V,
    gr: () => l,
    lH: () => G,
    uM: () => Y,
    xs: () => i
});
var S = I(64700),
    A = I(311907),
    T = I(873298),
    C = I(444802),
    O = I(662502),
    t = I(93857),
    e = I(115063),
    R = I(899847),
    N = I(842144),
    n = I(704724),
    P = I(500470),
    D = I(834981),
    L = I(835002);
let i = () => {
        let E = (0, P.x)(),
            _ = t.p7.useControlledSetting(E?.id);
        return null == E ? null : {
            explicitContentNonFriendDm: (0, n.J6)({
                teenId: E?.id,
                setting: _?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: (0, n.J6)({
                teenId: E?.id,
                setting: _?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: T.TO.BLUR
        }
    },
    l = () => {
        let E = (0, P.x)(),
            _ = t.oQ.useControlledSetting(E?.id);
        if (null == E) return null;
        let {
            goreContentNonFriendDm: I,
            goreContentFriendDm: S
        } = _ ?? {};
        return {
            goreContentNonFriendDm: (0, n.ky)(I) ? I : (0, C.jj)({
                isDm: !0
            }),
            goreContentFriendDm: (0, n.ky)(S) ? S : (0, C.jj)({
                isDm: !0,
                isFriend: !0
            }),
            goreContentGuilds: T.TO.BLUR
        }
    },
    r = () => {
        let E = (0, P.x)(),
            _ = t.qz.useControlledSetting(E?.id),
            I = t.yr.useControlledSetting(E?.id);
        return null != I ? I : !!_ || _
    };

function V() {
    let E = (0, P.x)(),
        _ = t.up.useControlledSetting(E?.id),
        I = S.useMemo(() => (0, e.Lx)(_), [_]);
    return I.mutualGuilds && !I.all
}

function Y() {
    return (0, D.Du)()
}

function G(E) {
    let _, I;
    return {
        hasConsented: (_ = (0, P.k)(), (0, A.bG)([N.A], () => N.A.hasConsented(_, E))),
        updateConsent: (I = (0, P.k)(), S.useCallback(async _ => {
            if (null != I) try {
                await R.Ay.updateTeenConsents(I, _ ? [E] : [], _ ? [] : [E])
            } catch (E) {
                O.A.showFailedToast(L.OB.GENERIC_ERROR)
            }
        }, [I, E]))
    }
}