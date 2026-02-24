/** chunk id: 856588, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(73153);
let a = !1,
    s = null,
    o = {
        init() {
            l.h.subscribe("CONNECTION_OPEN", e => {
                let {
                    pendingPayments: t
                } = e;
                if (null != t && t.length > 0) {
                    var l;
                    if (s === t[0] || null == (s = t[0])) return;
                    l = s, a || (a = !0, (0, r.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("56999").then(n.bind(n, 302810));
                        return t => {
                            let {
                                transitionState: n,
                                onClose: r
                            } = t;
                            return (0, i.jsx)(e, {
                                pendingPayment: l,
                                transitionState: n,
                                onClose: () => (a = !1, r())
                            })
                        }
                    }))
                }
            })
        }
    }