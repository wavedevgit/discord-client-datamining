/** chunk id: 410323, original params: t,e,r (module,exports,require) **/
var n = r(630017),
    o = Function.prototype,
    i = o.call,
    a = n && o.bind.bind(i, i);
t.exports = n ? a : function(t) {
    return function() {
        return i.apply(t, arguments)
    }
}