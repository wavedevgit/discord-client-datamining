/** chunk id: 798493, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(473560),
    i = n(969001),
    a = r.hasArrayLengthDefineBug(),
    o = a && n(677480),
    s = n(906046)("Object.prototype.propertyIsEnumerable");
e.exports = function(e, t, n, r, l, c) {
    if (!i) {
        if (!e(c) || !c["[[Configurable]]"] || !c["[[Writable]]"] || l in r && s(r, l) !== !!c["[[Enumerable]]"]) return !1;
        var u = c["[[Value]]"];
        return r[l] = u, t(r[l], u)
    }
    return a && "length" === l && "[[Value]]" in c && o(r) && r.length !== c["[[Value]]"] ? (r.length = c["[[Value]]"], r.length === c["[[Value]]"]) : (i(r, l, n(c)), !0)
}