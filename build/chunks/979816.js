/** chunk id: 979816 params = (module,exports,require) **/
"use strict";
n.d(t, {
    XO: () => d,
    hX: () => c,
    iI: () => u,
    i_: () => o
});
var i = n(311907),
    r = n(71393),
    s = n(576705),
    a = n(652215);
let l = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
        i = t.getGuild(e);
    return null != i && n.can(a.xBc.MANAGE_GUILD, i)
};

function o(e) {
    return null != e && l(e)
}

function c(e) {
    return l(e)
}

function u(e) {
    return (0, i.bG)([r.A, s.A], () => l(e, r.A, s.A), [e])
}

function d(e) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return t?.features.has(a.GuildFeatures.COMMUNITY) || !1
    }, [e])
}