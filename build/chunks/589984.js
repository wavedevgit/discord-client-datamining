/** chunk id: 589984 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(290595),
    r = n(171316),
    o = n(153488),
    d = n(975571),
    c = n(871930),
    u = n(578746),
    _ = n(997913),
    g = n(531525),
    m = n(652215),
    A = n(985018),
    h = n(842130);

function p() {
    let e = (0, r.uM)(),
        t = (0, l.bG)([o.A], () => o.A.hasConsented(m.YAq.USAGE_STATISTICS)),
        n = s.useCallback(e => {
            e ? (0, a.U)([m.YAq.USAGE_STATISTICS], []).catch(_.i) : (0, _.O)({
                header: A.intl.string(A.t.OdPCbN),
                body: A.intl.string(A.t.MGWabA),
                confirmText: A.intl.string(A.t["D3+rU4"]),
                cancelText: A.intl.string(A.t.kYpG0u),
                onConfirm: () => (0, a.U)([], [m.YAq.USAGE_STATISTICS]).catch(_.i)
            })
        }, []);
    return (0, i.jsx)(c.h, {
        setting: g.H.PRIVACY_DATA_IMPROVE_DISCORD_V2,
        children: (0, i.jsx)(u.Ay, {
            title: A.intl.string(A.t.XuADY2),
            note: A.intl.format(A.t["igTSG/"], {
                helpdeskArticle: d.A.getArticleURL(m.MVz.DATA_PRIVACY_CONTROLS)
            }),
            value: t,
            onChange: n,
            disabled: e,
            tooltipText: e ? A.intl.string(h.default["6Af/cw"]) : void 0
        })
    })
}