/** chunk id: 590838, original params: t (module,exports,require) **/
var e = Math.round;
t.exports = function(t) {
    var r = e(t);
    return r < 0 ? 0 : r > 255 ? 255 : 255 & r
}