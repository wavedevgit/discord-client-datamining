/** Chunk was on 64935 **/
/** chunk id: 250627, original params: e,t,n (module,exports,require) **/
n.d(t, {
    BB: () => _,
    Qi: () => m,
    az: () => g,
    bb: () => p,
    fZ: () => f
}), n(896048);
var r = n(64700),
    i = n(311907);
n(608461);
var l = n(142120),
    a = n(164956),
    s = n(576705),
    o = n(967198),
    c = n(912702),
    u = n(871109),
    d = n(652215);
let p = e => {
        let t = (0, i.bG)([u.A], () => null != e ? u.A.getGuildProductsForGuildFetchState(e) : u.e.FETCHED, [e]),
            n = (0, i.bG)([l.A], () => l.A.isConnected()),
            [a, s] = r.useState(!0);
        return r.useEffect(() => {
            a && (t === u.e.NOT_FETCHED || t === u.e.FETCHED && u.A.isGuildProductsCacheExpired(e)) && n && c.GI(e), s(!n)
        }, [e, n, t, a]), {
            listingsLoaded: t === u.e.FETCHED && !a
        }
    },
    m = function(e, t) {
        let {
            requireCurrentGuild: n
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            requireCurrentGuild: !0
        }, a = (0, i.bG)([l.A], () => l.A.isConnected()), s = (0, i.bG)([o.A], () => o.A.getGuildId());
        return r.useEffect(() => {
            let r = u.A.getGuildProductFetchState(t);
            if ((!n || s === e) && a && r === u.e.NOT_FETCHED) try {
                c.py(e, t)
            } catch (e) {}
        }, [e, t, a, s, n]), (0, i.bG)([u.A], () => u.A.getGuildProduct(t))
    },
    f = function(e) {
        let {
            publishedOnly: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.bG)([u.A, a.A], () => u.A.getGuildProductsForGuild(e, {
            publishedOnly: null != t ? t : !a.A.isViewingServerShop(e)
        }))
    },
    g = e => (0, i.bG)([u.A], () => null == e ? void 0 : u.A.getGuildProduct(e)),
    _ = e => (0, i.bG)([s.A], () => null != e && s.A.can(d.xBc.ADMINISTRATOR, e))