/** chunk id: 380744, original params: t,e,r (module,exports,require) **/
var n = r(860511),
    o = r(635896),
    i = r(210140),
    a = r(753891),
    u = r(812294),
    c = r(633895),
    s = n.Symbol,
    f = o("wks"),
    _ = c ? s.for || s : s && s.withoutSetter || a;
t.exports = function(t) {
    return i(f, t) || (f[t] = u && i(s, t) ? s[t] : _("Symbol." + t)), f[t]
}