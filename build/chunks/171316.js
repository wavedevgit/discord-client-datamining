/** chunk id: 171316 params = (module,exports,require) **/
_.d(e, {
    KK: () => a,
    NZ: () => o,
    gr: () => N,
    lH: () => D,
    uM: () => O,
    xs: () => d
});
var E = _(64700),
    A = _(311907),
    I = _(873298),
    n = _(444802),
    S = _(662502),
    T = _(93857),
    C = _(115063),
    i = _(899847),
    l = _(842144),
    R = _(704724),
    r = _(500470),
    u = _(834981),
    s = _(835002);
let d = () => {
        let t = (0, r.x)(),
            e = T.p7.useControlledSetting(t?.id);
        return null == t ? null : {
            explicitContentNonFriendDm: (0, R.J6)({
                teenId: t?.id,
                setting: e?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: (0, R.J6)({
                teenId: t?.id,
                setting: e?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: I.TO.BLUR
        }
    },
    N = () => {
        let t = (0, r.x)(),
            e = T.oQ.useControlledSetting(t?.id);
        if (null == t) return null;
        let {
            goreContentNonFriendDm: _,
            goreContentFriendDm: E
        } = e ?? {};
        return {
            goreContentNonFriendDm: (0, R.ky)(_) ? _ : (0, n.jj)({
                isDm: !0
            }),
            goreContentFriendDm: (0, R.ky)(E) ? E : (0, n.jj)({
                isDm: !0,
                isFriend: !0
            }),
            goreContentGuilds: I.TO.BLUR
        }
    },
    a = () => {
        let t = (0, r.x)(),
            e = T.qz.useControlledSetting(t?.id),
            _ = T.yr.useControlledSetting(t?.id);
        return null != _ ? _ : !!e || e
    };

function o() {
    let t = (0, r.x)(),
        e = T.up.useControlledSetting(t?.id),
        _ = E.useMemo(() => (0, C.Lx)(e), [e]);
    return _.mutualGuilds && !_.all
}

function O() {
    return (0, u.Du)()
}

function D(t) {
    let e, _;
    return {
        hasConsented: (e = (0, r.k)(), (0, A.bG)([l.A], () => l.A.hasConsented(e, t))),
        updateConsent: (_ = (0, r.k)(), E.useCallback(async e => {
            if (null != _) try {
                await i.Ay.updateTeenConsents(_, e ? [t] : [], e ? [] : [t])
            } catch (t) {
                S.A.showFailedToast(s.OB.GENERIC_ERROR)
            }
        }, [_, t]))
    }
}