/** chunk id: 264349 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Zy: () => l,
    cT: () => o,
    ih: () => a
});
var i = n(627968);
n(64700);
var r = n(397927);

function s(e) {
    return new Promise(t => {
        (0, r.mMO)(() => e(() => {
            t(!0)
        }, e => (t(!1), e())))
    })
}
let a = e => s(async (t, r) => {
        let {
            default: s
        } = await n.e("6322").then(n.bind(n, 49065));
        return n => (0, i.jsx)(s, {
            ...n,
            ruleName: e,
            onConfirm: t,
            onClose: () => r(n.onClose),
            onCancel: () => r(n.onClose)
        })
    }),
    l = (e, t) => s(async (r, s) => {
        let {
            default: a
        } = await n.e("78785").then(n.bind(n, 92696));
        return n => (0, i.jsx)(a, {
            ...n,
            ruleName: e,
            keyword: t,
            onConfirm: r,
            onClose: () => s(n.onClose),
            onCancel: () => s(n.onClose)
        })
    }),
    o = e => t => s(async (r, s) => {
        let {
            default: a
        } = await n.e("99979").then(n.bind(n, 146502)), l = () => {
            t(), r()
        };
        return t => (0, i.jsx)(a, {
            ruleName: e,
            ...t,
            onConfirm: l,
            onClose: () => s(t.onClose),
            onCancel: () => s(t.onClose)
        })
    })