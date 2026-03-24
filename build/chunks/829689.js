/** chunk id: 829689 params = (module,exports,require) **/
var t = "\\ud800-\\udfff",
    i = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    n = "\\ud83c[\\udffb-\\udfff]",
    s = "[^" + t + "]",
    a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    r = "(?:" + i + "|" + n + ")?",
    o = "[\\ufe0e\\ufe0f]?",
    d = "(?:\\u200d(?:" + [s, a, l].join("|") + ")" + o + r + ")*",
    c = RegExp(n + "(?=" + n + ")|" + ("(?:" + [s + i + "?", i, a, l, "[" + t + "]"].join("|")) + ")" + (o + r + d), "g");
e.exports = function(e) {
    return e.match(c) || []
}