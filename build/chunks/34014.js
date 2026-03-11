/** chunk id: 34014 params = (module,exports,require) **/
n.d(t, {
    r: () => m
});
var i = n(311907),
    s = n(964486),
    l = n(839214),
    a = n(955572),
    r = n(775602),
    o = n(502229),
    d = n(419954),
    c = n(975571),
    u = n(780964),
    _ = n(652215),
    g = n(985018);
let A = (0, l.D)(() => ({
        syncEnabled: null,
        updateTimeout: null
    })),
    m = (0, d.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => g.intl.string(g.t.cguiec),
        useSubtitle: () => g.intl.format(g.t.GwEVE2, {
            learnMoreLink: c.A.getArticleURL(_.MVz.FORCED_COLORS)
        }),
        useValue: () => {
            let e = (0, i.bG)([r.A], () => r.A.syncForcedColors);
            return (0, s.Ay)(() => {
                A.setState({
                    syncEnabled: r.A.syncForcedColors
                })
            }), A.useState(e => e.syncEnabled) ?? e
        },
        setValue: e => {
            let {
                updateTimeout: t
            } = A.getState();
            if (null != t) {
                clearTimeout(t), A.setState({
                    syncEnabled: e,
                    updateTimeout: null
                });
                return
            }
            if (e === r.A.syncForcedColors) return void A.setState({
                syncEnabled: e
            });
            let n = setTimeout(() => {
                (0, a.D3)(e), A.setState({
                    updateTimeout: null
                })
            }, 150);
            A.setState({
                syncEnabled: e,
                updateTimeout: n
            })
        },
        usePredicate: () => (0, o.D)()
    })