/** chunk id: 829689 params = (module,exports,require) **/
var t = "\\ud800-\\udfff",
    n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    i = "\\ud83c[\\udffb-\\udfff]",
    s = "[^" + t + "]",
    l = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    r = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    a = "(?:" + n + "|" + i + ")?",
    o = "[\\ufe0e\\ufe0f]?",
    d = "(?:\\u200d(?:" + [s, l, r].join("|") + ")" + o + a + ")*",
    c = RegExp(i + "(?=" + i + ")|" + ("(?:" + [s + n + "?", n, l, r, "[" + t + "]"].join("|")) + ")" + (o + a + d), "g");
e.exports = function(e) {
    return e.match(c) || []
}