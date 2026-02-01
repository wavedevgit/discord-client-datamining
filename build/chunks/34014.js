/** chunk id: 34014, original params: t,e,i (module,exports,require) **/
i.d(e, {
    r: () => E
});
var n = i(311907),
    l = i(964486),
    s = i(839214),
    r = i(955572),
    u = i(775602),
    a = i(502229),
    o = i(419954),
    d = i(975571),
    T = i(780964),
    A = i(652215),
    S = i(985018);
let c = (0, s.D)(() => ({
        syncEnabled: null,
        updateTimeout: null
    })),
    E = (0, o.zD)(T.X.SYNC_FORCED_COLORS, {
        useTitle: () => S.intl.string(S.t.cguiec),
        useSubtitle: () => S.intl.format(S.t.GwEVE2, {
            learnMoreLink: d.A.getArticleURL(A.MVz.FORCED_COLORS)
        }),
        useValue: () => {
            var t;
            let e = (0, n.bG)([u.A], () => u.A.syncForcedColors);
            return (0, l.Ay)(() => {
                c.setState({
                    syncEnabled: u.A.syncForcedColors
                })
            }), null != (t = c.useState(t => t.syncEnabled)) ? t : e
        },
        setValue: t => {
            let {
                updateTimeout: e
            } = c.getState();
            if (null != e) {
                clearTimeout(e), c.setState({
                    syncEnabled: t,
                    updateTimeout: null
                });
                return
            }
            if (t === u.A.syncForcedColors) return void c.setState({
                syncEnabled: t
            });
            let i = setTimeout(() => {
                (0, r.D3)(t), c.setState({
                    updateTimeout: null
                })
            }, 150);
            c.setState({
                syncEnabled: t,
                updateTimeout: i
            })
        },
        usePredicate: () => (0, a.D)()
    })