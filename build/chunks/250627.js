/** chunk id: 250627 params = (module,exports,require) **/
n.d(t, {
    BB: () => g,
    Qi: () => m,
    az: () => p,
    bb: () => _,
    fZ: () => h
});
var i = n(64700),
    a = n(311907);
n(608461);
var r = n(142120),
    l = n(164956),
    s = n(576705),
    o = n(967198),
    d = n(912702),
    c = n(871109),
    u = n(652215);
let _ = e => {
        let t = (0, a.bG)([c.A], () => null != e ? c.A.getGuildProductsForGuildFetchState(e) : c.e.FETCHED, [e]),
            n = (0, a.bG)([r.A], () => r.A.isConnected()),
            [l, s] = i.useState(!0);
        return i.useEffect(() => {
            l && (t === c.e.NOT_FETCHED || t === c.e.FETCHED && c.A.isGuildProductsCacheExpired(e)) && n && d.GI(e), s(!n)
        }, [e, n, t, l]), {
            listingsLoaded: t === c.e.FETCHED && !l
        }
    },
    m = function(e, t) {
        let {
            requireCurrentGuild: n
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            requireCurrentGuild: !0
        }, l = (0, a.bG)([r.A], () => r.A.isConnected()), s = (0, a.bG)([o.A], () => o.A.getGuildId());
        return i.useEffect(() => {
            let i = c.A.getGuildProductFetchState(t);
            if ((!n || s === e) && l && i === c.e.NOT_FETCHED) try {
                d.py(e, t)
            } catch (e) {}
        }, [e, t, l, s, n]), (0, a.bG)([c.A], () => c.A.getGuildProduct(t))
    },
    h = function(e) {
        let {
            publishedOnly: t
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, a.bG)([c.A, l.A], () => c.A.getGuildProductsForGuild(e, {
            publishedOnly: t ?? !l.A.isViewingServerShop(e)
        }))
    },
    p = e => (0, a.bG)([c.A], () => null == e ? void 0 : c.A.getGuildProduct(e)),
    g = e => (0, a.bG)([s.A], () => null != e && s.A.can(u.xBc.ADMINISTRATOR, e))