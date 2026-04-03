/** chunk id: 979816 params = (module,exports,require) **/
e.d(i, {
    XO: () => a,
    hX: () => o,
    iI: () => A,
    i_: () => S
});
var n = e(311907),
    r = e(71393),
    E = e(576705),
    s = e(652215);
let l = function(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.A,
        n = i.getGuild(t);
    return null != n && e.can(s.xBc.MANAGE_GUILD, n)
};

function S(t) {
    return null != t && l(t)
}

function o(t) {
    return l(t)
}

function A(t) {
    return (0, n.bG)([r.A, E.A], () => l(t, r.A, E.A), [t])
}

function a(t) {
    return (0, n.bG)([r.A], () => {
        let i = r.A.getGuild(t);
        return i?.features.has(s.GuildFeatures.COMMUNITY) || !1
    }, [t])
}