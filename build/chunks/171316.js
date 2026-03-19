/** chunk id: 171316 params = (module,exports,require) **/
n.d(e, {
    KK: () => f,
    NZ: () => C,
    gr: () => E,
    lH: () => p,
    uM: () => G,
    xs: () => A
});
var i = n(64700),
    l = n(311907),
    r = n(873298),
    u = n(444802),
    d = n(662502),
    s = n(93857),
    a = n(115063),
    o = n(899847),
    c = n(842144),
    g = n(704724),
    S = n(500470),
    _ = n(834981),
    T = n(835002);
let A = () => {
        let t = (0, S.x)(),
            e = s.p7.useControlledSetting(t?.id);
        return null == t ? null : {
            explicitContentNonFriendDm: (0, g.J6)({
                teenId: t?.id,
                setting: e?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: (0, g.J6)({
                teenId: t?.id,
                setting: e?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: r.TO.BLUR
        }
    },
    E = () => {
        let t = (0, S.x)(),
            e = s.oQ.useControlledSetting(t?.id);
        if (null == t) return null;
        let {
            goreContentNonFriendDm: n,
            goreContentFriendDm: i
        } = e ?? {};
        return {
            goreContentNonFriendDm: (0, g.ky)(n) ? n : (0, u.jj)({
                isDm: !0
            }),
            goreContentFriendDm: (0, g.ky)(i) ? i : (0, u.jj)({
                isDm: !0,
                isFriend: !0
            }),
            goreContentGuilds: r.TO.BLUR
        }
    },
    f = () => {
        let t = (0, S.x)(),
            e = s.qz.useControlledSetting(t?.id),
            n = s.yr.useControlledSetting(t?.id);
        return null != n ? n : !!e || e
    };

function C() {
    let t = (0, S.x)(),
        e = s.up.useControlledSetting(t?.id),
        n = i.useMemo(() => (0, a.Lx)(e), [e]);
    return n.mutualGuilds && !n.all
}

function G() {
    return (0, _.Du)()
}

function p(t) {
    let e, n;
    return {
        hasConsented: (e = (0, S.k)(), (0, l.bG)([c.A], () => c.A.hasConsented(e, t))),
        updateConsent: (n = (0, S.k)(), i.useCallback(async e => {
            if (null != n) try {
                await o.Ay.updateTeenConsents(n, e ? [t] : [], e ? [] : [t])
            } catch (t) {
                d.A.showFailedToast(T.OB.GENERIC_ERROR)
            }
        }, [n, t]))
    }
}