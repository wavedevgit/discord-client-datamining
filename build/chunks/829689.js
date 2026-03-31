/** chunk id: 829689 params = (module,exports,require) **/
var t = "\\ud800-\\udfff",
    n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    i = "\\ud83c[\\udffb-\\udfff]",
    s = "[^" + t + "]",
    a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    r = "(?:" + n + "|" + i + ")?",
    o = "[\\ufe0e\\ufe0f]?",
    d = "(?:\\u200d(?:" + [s, a, l].join("|") + ")" + o + r + ")*",
    c = RegExp(i + "(?=" + i + ")|" + ("(?:" + [s + n + "?", n, a, l, "[" + t + "]"].join("|")) + ")" + (o + r + d), "g");
e.exports = function(e) {
    return e.match(c) || []
}