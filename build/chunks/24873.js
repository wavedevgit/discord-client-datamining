/** chunk id: 24873, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    N9: () => s,
    jL: () => c,
    jU: () => l
}), n(801541);
var r = n(889137),
    i = n(652215),
    a = n(790782),
    o = n(985018),
    s = function(e) {
        return e.ALL_MESSAGES = "all_messages", e.MENTIONS = "mentions", e.NOTHING = "nothing", e.CUSTOM = "custom", e
    }({});

function l(e, t) {
    return (0, r.YW)([t, e]).with([i.orn.ALL_MESSAGES, a.e.ALL_MESSAGES], () => "all_messages").with([i.orn.ONLY_MENTIONS, a.e.UNSET], () => "mentions").with([i.orn.ONLY_MENTIONS, a.e.ONLY_MENTIONS], () => "mentions").with([i.orn.NO_MESSAGES, a.e.UNSET], () => "nothing").with([i.orn.NO_MESSAGES, a.e.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
}

function c(e) {
    return (0, r.YW)(e).with("all_messages", () => o.intl.string(o.t.hZrr6k)).with("mentions", () => o.intl.string(o.t.y59NJm)).with("nothing", () => o.intl.string(o.t["pGn/bJ"])).with("custom", () => o.intl.string(o.t["32yow9"])).exhaustive()
}