/** chunk id: 171316 params = (module,exports,require) **/
n.d(t, {
    KK: () => v,
    NZ: () => x,
    gr: () => f,
    lH: () => G,
    uM: () => T,
    xs: () => _
});
var l = n(64700),
    r = n(311907),
    i = n(873298),
    u = n(444802),
    d = n(662502),
    s = n(93857),
    a = n(115063),
    o = n(899847),
    c = n(842144),
    g = n(704724),
    m = n(500470),
    C = n(834981),
    p = n(835002);
let _ = () => {
        let e = (0, m.x)(),
            t = s.p7.useControlledSetting(e?.id);
        return null == e ? null : {
            explicitContentNonFriendDm: (0, g.J6)({
                teenId: e?.id,
                setting: t?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: (0, g.J6)({
                teenId: e?.id,
                setting: t?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: i.TO.BLUR
        }
    },
    f = () => {
        let e = (0, m.x)(),
            t = s.oQ.useControlledSetting(e?.id);
        if (null == e) return null;
        let {
            goreContentNonFriendDm: n,
            goreContentFriendDm: l
        } = t ?? {};
        return {
            goreContentNonFriendDm: (0, g.ky)(n) ? n : (0, u.jj)({
                isDm: !0
            }),
            goreContentFriendDm: (0, g.ky)(l) ? l : (0, u.jj)({
                isDm: !0,
                isFriend: !0
            }),
            goreContentGuilds: i.TO.BLUR
        }
    },
    v = () => {
        let e = (0, m.x)(),
            t = s.qz.useControlledSetting(e?.id),
            n = s.yr.useControlledSetting(e?.id);
        return null != n ? n : !!t || t
    };

function x() {
    let e = (0, m.x)(),
        t = s.up.useControlledSetting(e?.id),
        n = l.useMemo(() => (0, a.Lx)(t), [t]);
    return n.mutualGuilds && !n.all
}

function T() {
    return (0, C.Du)()
}

function G(e) {
    let t, n;
    return {
        hasConsented: (t = (0, m.k)(), (0, r.bG)([c.A], () => c.A.hasConsented(t, e))),
        updateConsent: (n = (0, m.k)(), l.useCallback(async t => {
            if (null != n) try {
                await o.Ay.updateTeenConsents(n, t ? [e] : [], t ? [] : [e])
            } catch (e) {
                d.A.showFailedToast(p.OB.GENERIC_ERROR)
            }
        }, [n, e]))
    }
}