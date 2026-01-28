/** Chunk was on 5606 **/
/** chunk id: 589984, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(290595),
    a = n(171316),
    o = n(153488),
    c = n(975571),
    d = n(871930),
    u = n(578746),
    p = n(997913),
    _ = n(531525),
    m = n(652215),
    g = n(985018),
    f = n(842130);

function b() {
    let e = (0, a.uM)(),
        t = (0, l.bG)([o.A], () => o.A.hasConsented(m.YAq.USAGE_STATISTICS)),
        n = i.useCallback(e => {
            e ? (0, s.U)([m.YAq.USAGE_STATISTICS], []).catch(p.i) : (0, p.O)({
                header: g.intl.string(g.t.OdPCbN),
                body: g.intl.string(g.t.MGWabA),
                confirmText: g.intl.string(g.t["D3+rU4"]),
                cancelText: g.intl.string(g.t.kYpG0u),
                onConfirm: () => (0, s.U)([], [m.YAq.USAGE_STATISTICS]).catch(p.i)
            })
        }, []);
    return (0, r.jsx)(d.h, {
        setting: _.H.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, r.jsx)(u.Ay, {
            title: g.intl.string(g.t.XuADY2),
            note: g.intl.format(g.t["igTSG/"], {
                helpdeskArticle: c.A.getArticleURL(m.MVz.DATA_PRIVACY_CONTROLS)
            }),
            value: t,
            onChange: n,
            disabled: e,
            tooltipText: e ? g.intl.string(f.default["6Af/cw"]) : void 0
        })
    })
}