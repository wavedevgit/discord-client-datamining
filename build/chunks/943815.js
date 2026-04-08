/** chunk id: 943815 params = (module,exports,require) **/
t.d(a, {
    A: () => o
});
var n = t(812782);
let r = {
        LATIN12: n.Xh,
        LATIN24: n.ID,
        ASIAN: n.KC
    },
    s = /(AM|PM)$/;

function o(e) {
    return null != e.match(s) ? r.LATIN24 : e.length <= 5 ? r.LATIN12 : r.ASIAN
}