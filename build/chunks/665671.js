/** chunk id: 665671 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => l
});
var r = n(627968),
    i = n(397927),
    o = n(464477),
    a = n(917136),
    s = n(985018);
async function l() {
    try {
        let {
            ticket: t,
            challenge: e
        } = await a.startRegisterWebAuthnCredential();
        (0, i.mMO)(async () => {
            let {
                RegisterWebAuthnCredentialModal: i
            } = await Promise.all([n.e("44667"), n.e("35510")]).then(n.bind(n, 359990));
            return n => (0, r.jsx)(i, {
                ...n,
                ticket: t,
                challenge: e
            })
        })
    } catch (t) {
        t.message !== s.intl.string(s.t.N2yb9a) && ((0, o.Os)(t), (0, i.showToast)((0, i.createToast)(s.intl.string(s.t.xSCvBf), i.ToastType.FAILURE)))
    }
}