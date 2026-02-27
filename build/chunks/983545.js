/** chunk id: 983545, original params: e,t,s (module,exports,require) **/
s.d(t, {
    o: () => b
}), s(321073);
var r = s(64700),
    l = s(873263),
    n = s(641150),
    a = s(151252),
    o = s(365491),
    i = s(856686),
    c = s(758836),
    u = s(652215);
let d = {
        [c.G2.AVATAR_DECORATIONS]: n.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: n.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: n.q.NAMEPLATE,
        [c.G2.BUNDLES]: n.q.BUNDLE
    },
    b = e => {
        let {
            enabled: t
        } = (0, a.Z)({
            location: "useShopViewTransition"
        }), {
            setItemTypeFilter: s,
            reset: n,
            setCurrentTab: b
        } = (0, o.v)(), p = r.useMemo(() => e !== c.G2.ORBS || t ? (0, c.dF)(e) ? c.G2.CATALOG : e : c.G2.HOME, [e, t]), [E, S] = r.useState(p), [A, m] = r.useState(c.Pf.VISIBLE);
        r.useEffect(() => {
            b(E)
        }, [E, b]), r.useEffect(() => {
            if (S(p), e === c.G2.CATALOG) n();
            else if ((0, c.dF)(e)) {
                let t = d[e];
                null != t ? s(t) : n()
            }
        }, [p, e, s, n]);
        let {
            clearError: h
        } = (0, i.S)(), f = (0, l.W6)(), C = r.useCallback(async (e, t) => {
            if (h(), e === c.G2.CATALOG) n();
            else if ((0, c.dF)(e) && e !== E) {
                let t = d[e];
                null != t ? s(t) : n()
            }
            if (E !== e) {
                if (t) {
                    let e;
                    m(c.Pf.OUT), await (e = 1.1 * c.H1, new Promise(t => setTimeout(t, e)))
                }
                S([c.G2.HOME, c.G2.ORBS].includes(e) ? e : c.G2.CATALOG), t && m(c.Pf.IN), f.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), {
                    shallow: !0
                }), m(c.Pf.VISIBLE)
            }
        }, [f, s, n, E, h]);
        return {
            selectedTab: E,
            transitionState: A,
            transitionToTab: C
        }
    }