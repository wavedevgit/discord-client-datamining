/** chunk id: 943815 params = (module,exports,require) **/
t.d(a, {
    A: () => s
});
var n = t(679740);
let r = {
        LATIN12: n.Xh,
        LATIN24: n.ID,
        ASIAN: n.KC
    },
    o = /(AM|PM)$/;

function s(e) {
    return null != e.match(o) ? r.LATIN24 : e.length <= 5 ? r.LATIN12 : r.ASIAN
}