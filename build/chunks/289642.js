/** chunk id: 289642, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var r = n(64700),
    l = n(512750),
    i = n(311907),
    o = n(71393),
    s = n(186111),
    a = n(645619),
    u = n(840120),
    d = n(363487),
    c = n(998418),
    p = n(162362),
    m = n(220628),
    f = n(867060),
    v = n(568065),
    g = n(652215),
    A = n(333354),
    _ = n(985018);

function x(e, t) {
    var n, x, h, b;
    let j = (0, i.bG)([o.A], () => o.A.getGuild(e)),
        E = (0, i.bG)([s.A], () => s.A.hasLayers()),
        w = null != (n = (0, d.A)(e)) && n,
        y = (0, u.j$)(e, t),
        I = (0, i.bG)([a.A], () => a.A.getStateForGuild(e)),
        S = null == I || null == (h = I.allPowerups) ? void 0 : h[l.FB],
        C = (0, c.Ay)(e, S),
        N = null == S ? void 0 : S.storeRemovalDate,
        O = null == I || null == (b = I.allPowerups) ? void 0 : b[l.YG],
        L = (0, i.bG)([o.A], () => {
            var t;
            return null == (t = o.A.getGuild(e)) ? void 0 : t.features
        }),
        P = null != (x = null == L ? void 0 : L.has(g.GuildFeatures.PARTNERED)) && x,
        {
            onActivate: k,
            error: T
        } = (0, m.A)(e, O);
    (0, f.A)(T);
    let G = !E && w && y && null != S && !P && C.type === v.b_.POWERUP_ACTIVATED && null != N && null != O && null != j,
        R = r.useCallback(e => {
            e.stopPropagation(), k()
        }, [k]),
        D = r.useMemo(() => {
            if (!G) return null;
            let e = (0, p.A)(N),
                t = j.premiumTier === g.TVA.TIER_2 ? _.intl.string(A.default["0uo/LD"]) : void 0;
            return {
                firstHeader: S.title,
                secondHeader: _.intl.formatToPlainString(A.default["8imxAq"], {
                    dateString: e
                }),
                firstBody: _.intl.formatToPlainString(A.default["/bW9tW"], {
                    serverName: j.name
                }),
                secondBody: _.intl.formatToPlainString(A.default.D09fdi, {
                    dateString: e,
                    boostCount: S.cost
                }),
                thirdBody: _.intl.string(A.default["+zvKPr"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? R : void 0
            }
        }, [G, S, N, j, R]);
    return {
        shouldShow: G,
        modalConfig: D
    }
}