/** Chunk was on 34078 **/
/** chunk id: 933924, original params: e,t,r (module,exports,require) **/
r.d(t, {
    a: () => h
}), r(801460), r(508300), r(650828), r(457529);
var n = r(430370),
    s = r(73153),
    i = r(830215),
    l = r(77729),
    a = r(954571),
    o = r(464477),
    c = r(917136),
    u = r(652215);
async function h(e) {
    let {
        abortController: t,
        loginSource: r,
        giftCodeSKUId: h
    } = e;
    try {
        if (null == l.A && null != window.PublicKeyCredential && null != PublicKeyCredential.isConditionalMediationAvailable) {
            let e;
            if (!await PublicKeyCredential.isConditionalMediationAvailable()) return;
            let {
                challenge: l,
                ticket: d
            } = await (0, c.Ud)();
            try {
                let r = (0, n.d5)(JSON.parse(l));
                r.signal = t.signal, e = await (0, n.Jt)(r)
            } catch (e) {
                if (!(e instanceof DOMException)) throw e;
                switch (e.name) {
                    case "AbortError":
                    case "NotAllowedError":
                        break;
                    default:
                        (0, o.Os)(e)
                }
                return
            }
            s.h.dispatch({
                type: "PASSWORDLESS_START"
            }), a.default.track(u.HAw.LOGIN_ATTEMPTED, {
                source: u.mdB.PASSWORDLESS_CONDITIONAL_UI,
                login_method: "passwordless",
                login_source: r,
                gift_code_sku_id: h
            }), await i.A.loginWebAuthn({
                ticket: d,
                credential: JSON.stringify(e),
                source: r,
                giftCodeSKUId: h
            })
        }
    } catch (e) {}
}