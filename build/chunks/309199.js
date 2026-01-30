/** chunk id: 309199, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    SM: () => d,
    eh: () => c,
    k_: () => u,
    uX: () => o
}), n(896048);
var r = n(661191),
    i = n(380335),
    a = n(157550);

function o(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, a.A];
    return l(s(e).filter(e => {
        let [, r] = e;
        return !t.isMessageRequest(r.id) && !n.isSpam(r.id)
    }))
}

function s(e) {
    return r.default.keys(e).map(t => [t, e[t]])
}

function l(e) {
    return Array.from(e).reduce((e, t) => {
        let [n, r] = t;
        return Object.assign(e, {
            [n]: r
        })
    }, {})
}

function c(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, a.A];
    return e.filter(e => !t.isMessageRequest(e) && !n.isSpam(e))
}

function u(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, a.A];
    return t.isMessageRequest(e) || n.isSpam(e)
}

function d() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.A, a.A], n = t.getSpamChannelsCount();
    return e.getMessageRequestsCount() > 0 || n > 0
}