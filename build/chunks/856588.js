/** chunk id: 856588 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(73153);
let l = !1,
    s = null,
    o = {
        init() {
            r.h.subscribe("CONNECTION_OPEN", e => {
                let {
                    pendingPayments: t
                } = e;
                if (null != t && t.length > 0) {
                    var r;
                    if (s === t[0] || null == (s = t[0])) return;
                    r = s, l || (l = !0, (0, a.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("56999").then(n.bind(n, 302810));
                        return t => {
                            let {
                                transitionState: n,
                                onClose: a
                            } = t;
                            return (0, i.jsx)(e, {
                                pendingPayment: r,
                                transitionState: n,
                                onClose: () => (l = !1, a())
                            })
                        }
                    }))
                }
            })
        }
    }