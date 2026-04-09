/** chunk id: 943815 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(767283);
let i = {
        LATIN12: a.Xh,
        LATIN24: a.ID,
        ASIAN: a.KC
    },
    l = /(AM|PM)$/;

function s(e) {
    return null != e.match(l) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN
}