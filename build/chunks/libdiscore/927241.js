/** chunk id: 927241, original params: t,e,r (module,exports,require) **/
var n = r(380744)("iterator"),
    o = !1;
try {
    var i = 0,
        a = {
            next: function() {
                return {
                    done: !!i++
                }
            },
            return: function() {
                o = !0
            }
        };
    a[n] = function() {
        return this
    }, Array.from(a, function() {
        throw 2
    })
} catch (t) {}
t.exports = function(t, e) {
    try {
        if (!e && !o) return !1
    } catch (t) {
        return !1
    }
    var r = !1;
    try {
        var i = {};
        i[n] = function() {
            return {
                next: function() {
                    return {
                        done: r = !0
                    }
                }
            }
        }, t(i)
    } catch (t) {}
    return r
}