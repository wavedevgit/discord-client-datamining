/** chunk id: 171316 params = (module,exports,require) **/
e.d(_, {
    KK: () => O,
    NZ: () => V,
    gr: () => s,
    lH: () => D,
    uM: () => a,
    xs: () => d
});
var E = e(64700),
    A = e(311907),
    I = e(873298),
    S = e(444802),
    T = e(662502),
    n = e(93857),
    C = e(115063),
    R = e(899847),
    i = e(842144),
    l = e(704724),
    r = e(500470),
    u = e(834981),
    N = e(835002);
let d = () => {
        let t = (0, r.x)(),
            _ = n.p7.useControlledSetting(t?.id);
        return null == t ? null : {
            explicitContentNonFriendDm: (0, l.J6)({
                teenId: t?.id,
                setting: _?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: (0, l.J6)({
                teenId: t?.id,
                setting: _?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: I.TO.BLUR
        }
    },
    s = () => {
        let t = (0, r.x)(),
            _ = n.oQ.useControlledSetting(t?.id);
        if (null == t) return null;
        let {
            goreContentNonFriendDm: e,
            goreContentFriendDm: E
        } = _ ?? {};
        return {
            goreContentNonFriendDm: (0, l.ky)(e) ? e : (0, S.jj)({
                isDm: !0
            }),
            goreContentFriendDm: (0, l.ky)(E) ? E : (0, S.jj)({
                isDm: !0,
                isFriend: !0
            }),
            goreContentGuilds: I.TO.BLUR
        }
    },
    O = () => {
        let t = (0, r.x)(),
            _ = n.qz.useControlledSetting(t?.id),
            e = n.yr.useControlledSetting(t?.id);
        return null != e ? e : !!_ || _
    };

function V() {
    let t = (0, r.x)(),
        _ = n.up.useControlledSetting(t?.id),
        e = E.useMemo(() => (0, C.Lx)(_), [_]);
    return e.mutualGuilds && !e.all
}

function a() {
    return (0, u.Du)()
}

function D(t) {
    let _, e;
    return {
        hasConsented: (_ = (0, r.k)(), (0, A.bG)([i.A], () => i.A.hasConsented(_, t))),
        updateConsent: (e = (0, r.k)(), E.useCallback(async _ => {
            if (null != e) try {
                await R.Ay.updateTeenConsents(e, _ ? [t] : [], _ ? [] : [t])
            } catch (t) {
                T.A.showFailedToast(N.OB.GENERIC_ERROR)
            }
        }, [e, t]))
    }
}