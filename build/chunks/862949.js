/** Chunk was on web.js **/
/** chunk id: 862949, original params: e,t,n (module,exports,require) **/
var r = n(578795),
    i = n(624443),
    a = n(994665),
    o = 200;
e.exports = function(e, t) {
    var n = this.__data__;
    if (n instanceof r) {
        var s = n.__data__;
        if (!i || s.length < o - 1) return s.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new a(s)
    }
    return n.set(e, t), this.size = n.size, this
}