/** chunk id: 944024, original params: t (module,exports,require) **/
var e = Math.ceil,
    r = Math.floor;
t.exports = Math.trunc || function(t) {
    var n = +t;
    return (n > 0 ? r : e)(n)
}