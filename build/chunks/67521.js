/** chunk id: 67521 params = (module,exports,require) **/
e.d(i, {
    A: () => _
});
var n = e(627968);
e(64700);
var s = e(397927),
    l = e(73153),
    c = e(847599),
    r = e(308645),
    a = e(239093);

function A() {
    o.success(), o.start_verification_check()
}
let o = {
        open(t, i) {
            (0, s.mMO)(async () => {
                l.h.dispatch({
                    type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN"
                });
                let {
                    default: i
                } = await e.e("9018").then(e.bind(e, 244321));
                return e => (0, n.jsx)(i, {
                    classificationId: t,
                    ...e
                })
            }, {
                onCloseCallback: i
            })
        },
        openV2(t, i) {
            (0, s.mMO)(async () => {
                l.h.dispatch({
                    type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN"
                });
                let {
                    default: i
                } = await e.e("18128").then(e.bind(e, 767379));
                return e => (0, n.jsx)(i, {
                    classificationId: t,
                    entryPoint: c.q1.AUTOMATED_UNDERAGE_APPEALS,
                    onComplete: A,
                    ...e
                })
            }, {
                onCloseCallback: i
            })
        },
        close() {
            l.h.dispatch({
                type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE"
            })
        },
        success() {
            l.h.dispatch({
                type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS"
            })
        },
        start_verification_check() {
            l.h.dispatch({
                type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL"
            }), setTimeout(() => (0, r.d)(), a.wQ)
        }
    },
    _ = o