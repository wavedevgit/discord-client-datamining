/** Chunk was on 5606 **/
/** chunk id: 171316, original params: e,t,n (module,exports,require) **/
n.d(t, {
    KK: () => h,
    NZ: () => A,
    gr: () => b,
    lH: () => x,
    uM: () => E,
    xs: () => f
});
var r = n(64700),
    i = n(311907),
    l = n(873298),
    s = n(444802),
    a = n(662502),
    o = n(93857),
    c = n(115063),
    d = n(899847),
    u = n(842144),
    p = n(704724),
    _ = n(500470),
    m = n(834981),
    g = n(835002);
let f = () => {
        let e = (0, _.x)(),
            t = o.p7.useControlledSetting(null == e ? void 0 : e.id);
        return null == e ? null : {
            explicitContentNonFriendDm: (0, p.J6)({
                teenId: null == e ? void 0 : e.id,
                setting: null == t ? void 0 : t.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: (0, p.J6)({
                teenId: null == e ? void 0 : e.id,
                setting: null == t ? void 0 : t.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: l.TO.BLUR
        }
    },
    b = () => {
        let e = (0, _.x)(),
            t = o.oQ.useControlledSetting(null == e ? void 0 : e.id);
        if (null == e) return null;
        let {
            goreContentNonFriendDm: n,
            goreContentFriendDm: r
        } = null != t ? t : {};
        return {
            goreContentNonFriendDm: (0, p.ky)(n) ? n : (0, s.jj)({
                isDm: !0
            }),
            goreContentFriendDm: (0, p.ky)(r) ? r : (0, s.jj)({
                isDm: !0,
                isFriend: !0
            }),
            goreContentGuilds: l.TO.BLUR
        }
    },
    h = () => {
        let e = (0, _.x)(),
            t = o.qz.useControlledSetting(null == e ? void 0 : e.id),
            n = o.yr.useControlledSetting(null == e ? void 0 : e.id);
        return null != n ? n : !!t || t
    };

function A() {
    let e = (0, _.x)(),
        t = o.up.useControlledSetting(null == e ? void 0 : e.id),
        n = r.useMemo(() => (0, c.Lx)(t), [t]);
    return n.mutualGuilds && !n.all
}

function E() {
    return (0, m.Du)()
}

function x(e) {
    let t, n;
    return {
        hasConsented: (t = (0, _.k)(), (0, i.bG)([u.A], () => u.A.hasConsented(t, e))),
        updateConsent: (n = (0, _.k)(), r.useCallback(async t => {
            if (null != n) try {
                await d.Ay.updateTeenConsents(n, t ? [e] : [], t ? [] : [e])
            } catch (e) {
                a.A.showFailedToast(g.OB.GENERIC_ERROR)
            }
        }, [n, e]))
    }
}