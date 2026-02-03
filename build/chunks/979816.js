/** chunk id: 979816, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    XO: () => p,
    hX: () => o,
    iI: () => u,
    i_: () => c
});
var s = n(311907),
    r = n(71393),
    a = n(576705),
    i = n(652215);
let l = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A,
        s = t.getGuild(e);
    return null != s && n.can(i.xBc.MANAGE_GUILD, s)
};

function c(e) {
    return null != e && l(e)
}

function o(e) {
    return l(e)
}

function u(e) {
    return (0, s.bG)([r.A, a.A], () => l(e, r.A, a.A), [e])
}

function p(e) {
    return (0, s.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return (null == t ? void 0 : t.features.has(i.GuildFeatures.COMMUNITY)) || !1
    }, [e])
}