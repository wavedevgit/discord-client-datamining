/** chunk id: 34014, original params: e,t,i (module,exports,require) **/
i.d(t, {
    r: () => _
});
var n = i(311907),
    l = i(964486),
    s = i(839214),
    r = i(955572),
    a = i(775602),
    u = i(502229),
    o = i(419954),
    d = i(975571),
    T = i(780964),
    c = i(652215),
    A = i(985018);
let S = (0, s.D)(() => ({
        syncEnabled: null,
        updateTimeout: null
    })),
    _ = (0, o.zD)(T.X.SYNC_FORCED_COLORS, {
        useTitle: () => A.intl.string(A.t.cguiec),
        useSubtitle: () => A.intl.format(A.t.GwEVE2, {
            learnMoreLink: d.A.getArticleURL(c.MVz.FORCED_COLORS)
        }),
        useValue: () => {
            var e;
            let t = (0, n.bG)([a.A], () => a.A.syncForcedColors);
            return (0, l.Ay)(() => {
                S.setState({
                    syncEnabled: a.A.syncForcedColors
                })
            }), null != (e = S.useState(e => e.syncEnabled)) ? e : t
        },
        setValue: e => {
            let {
                updateTimeout: t
            } = S.getState();
            if (null != t) {
                clearTimeout(t), S.setState({
                    syncEnabled: e,
                    updateTimeout: null
                });
                return
            }
            if (e === a.A.syncForcedColors) return void S.setState({
                syncEnabled: e
            });
            let i = setTimeout(() => {
                (0, r.D3)(e), S.setState({
                    updateTimeout: null
                })
            }, 150);
            S.setState({
                syncEnabled: e,
                updateTimeout: i
            })
        },
        usePredicate: () => (0, u.D)()
    })