/** chunk id: 289642 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(64700),
    i = n(512750),
    l = n(311907),
    s = n(71393),
    a = n(186111),
    o = n(645619),
    d = n(840120),
    u = n(363487),
    c = n(998418),
    m = n(162362),
    p = n(220628),
    _ = n(867060),
    x = n(568065),
    A = n(652215),
    f = n(136708),
    g = n(985018);

function v(e, t) {
    let n = (0, l.bG)([s.A], () => s.A.getGuild(e)),
        v = (0, l.bG)([a.A], () => a.A.hasLayers()),
        h = (0, u.A)(e) ?? !1,
        b = (0, d.j$)(e, t),
        j = (0, l.bG)([o.A], () => o.A.getStateForGuild(e)),
        E = j?.allPowerups?.[i.FB],
        I = (0, c.Ay)(e, E),
        C = E?.storeRemovalDate,
        S = j?.allPowerups?.[i.YG],
        w = (0, l.bG)([s.A], () => s.A.getGuild(e)?.features),
        N = w?.has(A.GuildFeatures.PARTNERED) ?? !1,
        {
            onActivate: y,
            error: L
        } = (0, p.A)(e, S);
    (0, _.A)(L);
    let T = !v && h && b && null != E && !N && I.type === x.b_.POWERUP_ACTIVATED && null != C && null != S && null != n,
        k = r.useCallback(e => {
            e.stopPropagation(), y()
        }, [y]),
        R = r.useMemo(() => {
            if (!T) return null;
            let e = (0, m.A)(C),
                t = n.premiumTier === A.TVA.TIER_2 ? g.intl.string(f.default["0uo/LD"]) : void 0;
            return {
                firstHeader: E.title,
                secondHeader: g.intl.formatToPlainString(f.default["8imxAq"], {
                    dateString: e
                }),
                firstBody: g.intl.formatToPlainString(f.default["/bW9tW"], {
                    serverName: n.name
                }),
                secondBody: g.intl.formatToPlainString(f.default.D09fdi, {
                    dateString: e,
                    boostCount: E.cost
                }),
                thirdBody: g.intl.string(f.default["+zvKPr"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? k : void 0
            }
        }, [T, E, C, n, k]);
    return {
        shouldShow: T,
        modalConfig: R
    }
}