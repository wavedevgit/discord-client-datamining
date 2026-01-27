/** Chunk was on web.js **/
/** chunk id: 869573, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q: () => o
});
var r = n(64700),
    i = n(166532),
    a = n(293700);

function o(e, t, n) {
    r.useEffect(() => {
        null != e && e !== i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === a.C.PENDING ? n(i.pn.AWAITING_PURCHASE_TOKEN_AUTH) : e === i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === a.C.SUCCESS && n(i.pn.REVIEW)
    }, [e, t, n])
}