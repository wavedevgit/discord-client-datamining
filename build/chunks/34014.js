/** Chunk was on 28979 **/
/** chunk id: 34014, original params: t,e,i (module,exports,require) **/
i.d(e, {
    r: () => _
});
var n = i(311907),
    l = i(964486),
    s = i(839214),
    r = i(955572),
    u = i(775602),
    a = i(502229),
    o = i(419954),
    T = i(975571),
    A = i(780964),
    d = i(652215),
    S = i(985018);
let E = (0, s.D)(() => ({
        syncEnabled: null,
        updateTimeout: null
    })),
    _ = (0, o.zD)(A.X.SYNC_FORCED_COLORS, {
        useTitle: () => S.intl.string(S.t.cguiec),
        useSubtitle: () => S.intl.format(S.t.GwEVE2, {
            learnMoreLink: T.A.getArticleURL(d.MVz.FORCED_COLORS)
        }),
        useValue: () => {
            var t;
            let e = (0, n.bG)([u.A], () => u.A.syncForcedColors);
            return (0, l.Ay)(() => {
                E.setState({
                    syncEnabled: u.A.syncForcedColors
                })
            }), null != (t = E.useState(t => t.syncEnabled)) ? t : e
        },
        setValue: t => {
            let {
                updateTimeout: e
            } = E.getState();
            if (null != e) {
                clearTimeout(e), E.setState({
                    syncEnabled: t,
                    updateTimeout: null
                });
                return
            }
            if (t === u.A.syncForcedColors) return void E.setState({
                syncEnabled: t
            });
            let i = setTimeout(() => {
                (0, r.D3)(t), E.setState({
                    updateTimeout: null
                })
            }, 150);
            E.setState({
                syncEnabled: t,
                updateTimeout: i
            })
        },
        usePredicate: () => (0, a.D)()
    })