/** Chunk was on 84018 **/
/** chunk id: 914549, original params: e,t,n (module,exports,require) **/
var i = n(360356),
    r = n(659671),
    s = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    l = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
e.exports = function(e) {
    return (e = r(e)) && e.replace(s, i).replace(l, "")
}