/** chunk id: 289642, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(64700),
    l = n(512750),
    i = n(311907),
    s = n(71393),
    o = n(186111),
    a = n(645619),
    u = n(840120),
    d = n(363487),
    c = n(998418),
    p = n(162362),
    m = n(220628),
    A = n(867060),
    _ = n(568065),
    f = n(652215),
    g = n(333354),
    x = n(985018);

function v(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getGuild(e)),
        v = (0, i.bG)([o.A], () => o.A.hasLayers()),
        h = (0, d.A)(e) ?? !1,
        b = (0, u.j$)(e, t),
        j = (0, i.bG)([a.A], () => a.A.getStateForGuild(e)),
        E = j?.allPowerups?.[l.FB],
        I = (0, c.Ay)(e, E),
        w = E?.storeRemovalDate,
        S = j?.allPowerups?.[l.YG],
        C = (0, i.bG)([s.A], () => s.A.getGuild(e)?.features),
        N = C?.has(f.GuildFeatures.PARTNERED) ?? !1,
        {
            onActivate: L,
            error: y
        } = (0, m.A)(e, S);
    (0, A.A)(y);
    let k = !v && h && b && null != E && !N && I.type === _.b_.POWERUP_ACTIVATED && null != w && null != S && null != n,
        T = r.useCallback(e => {
            e.stopPropagation(), L()
        }, [L]),
        P = r.useMemo(() => {
            if (!k) return null;
            let e = (0, p.A)(w),
                t = n.premiumTier === f.TVA.TIER_2 ? x.intl.string(g.default["0uo/LD"]) : void 0;
            return {
                firstHeader: E.title,
                secondHeader: x.intl.formatToPlainString(g.default["8imxAq"], {
                    dateString: e
                }),
                firstBody: x.intl.formatToPlainString(g.default["/bW9tW"], {
                    serverName: n.name
                }),
                secondBody: x.intl.formatToPlainString(g.default.D09fdi, {
                    dateString: e,
                    boostCount: E.cost
                }),
                thirdBody: x.intl.string(g.default["+zvKPr"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? T : void 0
            }
        }, [k, E, w, n, T]);
    return {
        shouldShow: k,
        modalConfig: P
    }
}