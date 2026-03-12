/** chunk id: 34014 params = (module,exports,require) **/
n.d(t, {
    r: () => A
});
var i = n(311907),
    s = n(964486),
    l = n(839214),
    r = n(955572),
    a = n(775602),
    o = n(502229),
    d = n(419954),
    c = n(975571),
    u = n(780964),
    _ = n(652215),
    m = n(985018);
let g = (0, l.D)(() => ({
        syncEnabled: null,
        updateTimeout: null
    })),
    A = (0, d.zD)(u.X.SYNC_FORCED_COLORS, {
        useTitle: () => m.intl.string(m.t.cguiec),
        useSubtitle: () => m.intl.format(m.t.GwEVE2, {
            learnMoreLink: c.A.getArticleURL(_.MVz.FORCED_COLORS)
        }),
        useValue: () => {
            let e = (0, i.bG)([a.A], () => a.A.syncForcedColors);
            return (0, s.Ay)(() => {
                g.setState({
                    syncEnabled: a.A.syncForcedColors
                })
            }), g.useState(e => e.syncEnabled) ?? e
        },
        setValue: e => {
            let {
                updateTimeout: t
            } = g.getState();
            if (null != t) {
                clearTimeout(t), g.setState({
                    syncEnabled: e,
                    updateTimeout: null
                });
                return
            }
            if (e === a.A.syncForcedColors) return void g.setState({
                syncEnabled: e
            });
            let n = setTimeout(() => {
                (0, r.D3)(e), g.setState({
                    updateTimeout: null
                })
            }, 150);
            g.setState({
                syncEnabled: e,
                updateTimeout: n
            })
        },
        usePredicate: () => (0, o.D)()
    })