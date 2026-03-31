/** chunk id: 264349 params = (module,exports,require) **/
n.d(t, {
    Zy: () => s,
    cT: () => o,
    ih: () => r
});
var i = n(627968);
n(64700);
var l = n(397927);

function a(e) {
    return new Promise(t => {
        (0, l.mMO)(() => e(() => {
            t(!0)
        }, e => (t(!1), e())))
    })
}
let r = e => a(async (t, l) => {
        let {
            default: a
        } = await n.e("6322").then(n.bind(n, 49065));
        return n => (0, i.jsx)(a, {
            ...n,
            ruleName: e,
            onConfirm: t,
            onClose: () => l(n.onClose),
            onCancel: () => l(n.onClose)
        })
    }),
    s = (e, t) => a(async (l, a) => {
        let {
            default: r
        } = await n.e("78785").then(n.bind(n, 92696));
        return n => (0, i.jsx)(r, {
            ...n,
            ruleName: e,
            keyword: t,
            onConfirm: l,
            onClose: () => a(n.onClose),
            onCancel: () => a(n.onClose)
        })
    }),
    o = e => t => a(async (l, a) => {
        let {
            default: r
        } = await n.e("99979").then(n.bind(n, 146502)), s = () => {
            t(), l()
        };
        return t => (0, i.jsx)(r, {
            ruleName: e,
            ...t,
            onConfirm: s,
            onClose: () => a(t.onClose),
            onCancel: () => a(t.onClose)
        })
    })