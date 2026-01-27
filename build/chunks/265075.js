/** Chunk was on web.js **/
/** chunk id: 265075, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(65821), n(73153);
var r = n(439372);
n(354138);
var i = n(292572),
    a = n(122906);
n(970163);
var o = n(128391);
n(299091);
var s = n(167189),
    l = n(254160),
    c = n(833291);

function u(e) {
    let t = (0, c.Ay)(e.content);
    null != t && 0 !== t.length && t.forEach(e => {
        let {
            type: t,
            code: n
        } = e;
        if (t === s.I.INVITE);
        else if (t === s.I.TEMPLATE)(0, l.f)(async () => {
            null == a.A.getGuildTemplate(n) && await i.A.resolveGuildTemplate(n)
        });
        else if (t === s.I.BUILD_OVERRIDE || t === s.I.MANUAL_BUILD_OVERRIDE);
        else if (t === s.I.EVENT);
        else if (t === s.I.CHANNEL_LINK);
        else if (t === s.I.APP_DIRECTORY_PROFILE);
        else if (t === s.I.ACTIVITY_BOOKMARK);
        else if (t === s.I.EMBEDDED_ACTIVITY_INVITE);
        else if (t === s.I.GUILD_PRODUCT);
        else if (t === s.I.SERVER_SHOP);
        else if (t === s.I.SOCIAL_LAYER_STOREFRONT);
        else if (t === s.I.QUESTS_EMBED);
        else if (t === s.I.APP_DIRECTORY_STOREFRONT);
        else if (t === s.I.APP_DIRECTORY_STOREFRONT_SKU);
        else if (t === s.I.APP_OAUTH2_LINK);
        else if (t === s.I.COLLECTIBLES_SHOP);
        else if (t === s.I.EXPERIMENT);
        else throw Error("Unknown coded link type: ".concat(t))
    })
}
class d extends r.A {
    constructor() {
        super(), (0, o.A)(this, u)
    }
}
let f = new d