/** chunk id: 935158, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var r = n(64983),
    l = n(997509),
    a = n(320426),
    s = n(652215),
    o = n(985018),
    d = n(693248);

function c(e) {
    let {
        guild: t
    } = e, n = () => a.A.dismissNotice(t.id);
    return (0, i.jsx)(r.A, {
        guild: t,
        onDismissed: n,
        cta: o.intl.string(o.t.RzWDqY),
        message: o.intl.format(o.t["kQ/MDl"], {}),
        type: s.n5X.COMMANDS_MIGRATION,
        image: d,
        onClick: () => {
            n(), l.A.open(t.id, s.BEX.INTEGRATIONS)
        },
        imageMarginTop: 15,
        imageMarginX: 22
    })
}