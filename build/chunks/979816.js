/** chunk id: 979816 params = (module,exports,require) **/
n.d(e, {
    XO: () => _,
    hX: () => c,
    iI: () => d,
    i_: () => o
});
var i = n(311907),
    a = n(71393),
    s = n(576705),
    r = n(652215);
let l = function(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
        i = e.getGuild(t);
    return null != i && n.can(r.xBc.MANAGE_GUILD, i)
};

function o(t) {
    return null != t && l(t)
}

function c(t) {
    return l(t)
}

function d(t) {
    return (0, i.bG)([a.A, s.A], () => l(t, a.A, s.A), [t])
}

function _(t) {
    return (0, i.bG)([a.A], () => {
        let e = a.A.getGuild(t);
        return e?.features.has(r.GuildFeatures.COMMUNITY) || !1
    }, [t])
}