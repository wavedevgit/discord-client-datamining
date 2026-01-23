/** Chunk was on 97492 **/
/** chunk id: 241756, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(834757),
    l = n(562153),
    i = n(985018);

function s(e, t, n) {
    let s = (0, r.AO)(n),
        a = l.Ay.getName(e.getGuildId(), e.id, t);
    return null == n ? a : (null == s ? void 0 : s.name) != null ? i.intl.formatToPlainString(i.t["9jpVOZ"], {
        applicationName: null == s ? void 0 : s.name,
        username: a
    }) : i.intl.formatToPlainString(i.t["+h0Z59"], {
        username: a
    })
}