/** Chunk was on 16864 **/
/** chunk id: 102028, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    e: () => l
}), r(896048);
var n = r(64700),
    a = r(716965),
    s = r(533553),
    i = r(985018);

function l(e, t, r) {
    let [l, o] = n.useState(!1), [c, d] = n.useState(null), u = n.useCallback(async () => {
        try {
            o(!0);
            let r = await (0, a.cG)(e);
            o(!1), t({
                userCode: e,
                clientId: r.body.client_id,
                scopes: r.body.scopes,
                twoWayLinkCode: r.body.two_way_link_code
            })
        } catch (e) {
            var n;
            d(429 === (n = null == e ? void 0 : e.status) ? i.intl.string(i.t.BPmZvj) : 404 === n || 400 === n ? i.intl.string(i.t.aWa1Pw) : i.intl.string(i.t.JNQRU4)), o(!1), (null == e ? void 0 : e.status) === 401 && r()
        }
    }, [e, t, r]);
    return n.useEffect(() => {
        e.length === s.D.USER_CODE_LENGTH ? u() : d(null)
    }, [e, u]), {
        manualSubmit: u,
        error: c,
        submitting: l
    }
}