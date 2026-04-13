/** chunk id: 407186 params = (module,exports,require) **/
l.d(i, {
    Ay: () => c,
    sy: () => s
});
var t = l(627968);
l(64700);
var n = l(397927),
    a = l(652215);

function s() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise(i => {
        (0, n.mMO)(async () => {
            let {
                default: i
            } = await l.e("28429").then(l.bind(l, 549404));
            return l => (0, t.jsx)(i, {
                ...l,
                isTotp: e
            })
        }, {
            onCloseCallback: i,
            onCloseRequest: a.FXj
        })
    })
}
let c = {
    enableMFA: async function() {
        await new Promise(e => {
            (0, n.mMO)(async () => {
                let {
                    default: i
                } = await Promise.all([l.e("12424"), l.e("78811")]).then(l.bind(l, 333737));
                return l => (0, t.jsx)(i, {
                    ...l,
                    handleEnableMFASuccess: e
                })
            })
        }), await s()
    }
}