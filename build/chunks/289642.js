/** chunk id: 289642 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(64700),
    i = n(512750),
    l = n(311907),
    s = n(71393),
    o = n(186111),
    a = n(645619),
    u = n(840120),
    d = n(363487),
    c = n(998418),
    p = n(162362),
    m = n(220628),
    _ = n(867060),
    A = n(568065),
    f = n(652215),
    g = n(136708),
    x = n(985018);

function v(e, t) {
    let n = (0, l.bG)([s.A], () => s.A.getGuild(e)),
        v = (0, l.bG)([o.A], () => o.A.hasLayers()),
        h = (0, d.A)(e) ?? !1,
        E = (0, u.j$)(e, t),
        b = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
        I = b?.allPowerups?.[i.FB],
        j = (0, c.Ay)(e, I),
        S = I?.storeRemovalDate,
        C = b?.allPowerups?.[i.YG],
        w = (0, l.bG)([s.A], () => s.A.getGuild(e)?.features),
        N = w?.has(f.GuildFeatures.PARTNERED) ?? !1,
        {
            onActivate: L,
            error: y
        } = (0, m.A)(e, C);
    (0, _.A)(y);
    let R = !v && h && E && null != I && !N && j.type === A.b_.POWERUP_ACTIVATED && null != S && null != C && null != n,
        k = r.useCallback(e => {
            e.stopPropagation(), L()
        }, [L]),
        T = r.useMemo(() => {
            if (!R) return null;
            let e = (0, p.A)(S),
                t = n.premiumTier === f.TVA.TIER_2 ? x.intl.string(g.default["0uo/LD"]) : void 0;
            return {
                firstHeader: I.title,
                secondHeader: x.intl.formatToPlainString(g.default["8imxAq"], {
                    dateString: e
                }),
                firstBody: x.intl.formatToPlainString(g.default["/bW9tW"], {
                    serverName: n.name
                }),
                secondBody: x.intl.formatToPlainString(g.default.D09fdi, {
                    dateString: e,
                    boostCount: I.cost
                }),
                thirdBody: x.intl.string(g.default["+zvKPr"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? k : void 0
            }
        }, [R, I, S, n, k]);
    return {
        shouldShow: R,
        modalConfig: T
    }
}