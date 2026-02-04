/** chunk id: 878765, original params: t,e,r (module,exports,require) **/
var n = r(4940).f;
t.exports = function(t, e, r) {
    r in t || n(t, r, {
        configurable: !0,
        get: function() {
            return e[r]
        },
        set: function(t) {
            e[r] = t
        }
    })
}