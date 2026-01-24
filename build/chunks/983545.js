/** Chunk was on 59275 **/
/** chunk id: 983545, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    o: () => g
}), n(896048), n(321073);
var r = n(64700),
    l = n(960488),
    s = n(641150),
    a = n(151252),
    i = n(365491),
    o = n(856686),
    c = n(758836),
    u = n(652215);
let d = {
        [c.G2.AVATAR_DECORATIONS]: s.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: s.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: s.q.NAMEPLATE,
        [c.G2.BUNDLES]: s.q.BUNDLE
    },
    g = e => {
        let {
            enabled: t
        } = (0, a.Z)({
            location: "useShopViewTransition"
        }), {
            setItemTypeFilter: n,
            reset: s,
            setCurrentTab: g
        } = (0, i.v)(), f = r.useMemo(() => e !== c.G2.ORBS || t ? (0, c.dF)(e) ? c.G2.CATALOG : e : c.G2.HOME, [e, t]), [m, p] = r.useState(f), [_, b] = r.useState(c.Pf.VISIBLE);
        r.useEffect(() => {
            g(m)
        }, [m, g]), r.useEffect(() => {
            if (p(f), e === c.G2.CATALOG) s();
            else if ((0, c.dF)(e)) {
                let t = d[e];
                null != t ? n(t) : s()
            }
        }, [f, e, n, s]);
        let {
            clearError: h
        } = (0, o.S)(), E = (0, l.W6)(), v = r.useCallback(async (e, t) => {
            if (h(), e === c.G2.CATALOG) s();
            else if ((0, c.dF)(e) && e !== m) {
                let t = d[e];
                null != t ? n(t) : s()
            }
            if (m !== e) {
                if (t) {
                    let e;
                    b(c.Pf.OUT), await (e = 1.1 * c.H1, new Promise(t => setTimeout(t, e)))
                }
                p([c.G2.HOME, c.G2.ORBS].includes(e) ? e : c.G2.CATALOG), t && b(c.Pf.IN), E.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), {
                    shallow: !0
                }), b(c.Pf.VISIBLE)
            }
        }, [E, n, s, m, h]);
        return {
            selectedTab: m,
            transitionState: _,
            transitionToTab: v
        }
    }