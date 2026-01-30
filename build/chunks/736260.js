/** chunk id: 736260, original params: e,t,n (module,exports,require) **/
"use strict";
var r, i, a, o, s, l = n(860511),
    c = n(745730),
    u = n(221015),
    d = n(314144).set,
    f = n(246202),
    p = n(705333),
    _ = n(633006),
    h = n(78235),
    m = n(13570),
    g = l.MutationObserver || l.WebKitMutationObserver,
    E = l.document,
    y = l.process,
    b = l.Promise,
    O = c("queueMicrotask");
if (!O) {
    var v = new f,
        A = function() {
            var e, t;
            for (m && (e = y.domain) && e.exit(); t = v.get();) try {
                t()
            } catch (e) {
                throw v.head && r(), e
            }
            e && e.enter()
        };
    p || m || h || !g || !E ? !_ && b && b.resolve ? ((o = b.resolve(void 0)).constructor = b, s = u(o.then, o), r = function() {
        s(A)
    }) : m ? r = function() {
        y.nextTick(A)
    } : (d = u(d, l), r = function() {
        d(A)
    }) : (i = !0, a = E.createTextNode(""), new g(A).observe(a, {
        characterData: !0
    }), r = function() {
        a.data = i = !i
    }), O = function(e) {
        v.head || r(), v.add(e)
    }
}
e.exports = O