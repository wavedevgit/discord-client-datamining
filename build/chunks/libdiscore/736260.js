/** chunk id: 736260, original params: t,e,r (module,exports,require) **/
var n, o, i, a, u, c = r(860511),
    s = r(745730),
    f = r(221015),
    _ = r(314144).set,
    l = r(246202),
    p = r(705333),
    d = r(633006),
    g = r(78235),
    b = r(13570),
    y = c.MutationObserver || c.WebKitMutationObserver,
    h = c.document,
    w = c.process,
    v = c.Promise,
    m = s("queueMicrotask");
if (!m) {
    var x = new l,
        A = function() {
            var t, e;
            for (b && (t = w.domain) && t.exit(); e = x.get();) try {
                e()
            } catch (t) {
                throw x.head && n(), t
            }
            t && t.enter()
        };
    p || b || g || !y || !h ? !d && v && v.resolve ? ((a = v.resolve(void 0)).constructor = v, u = f(a.then, a), n = function() {
        u(A)
    }) : b ? n = function() {
        w.nextTick(A)
    } : (_ = f(_, c), n = function() {
        _(A)
    }) : (o = !0, i = h.createTextNode(""), new y(A).observe(i, {
        characterData: !0
    }), n = function() {
        i.data = o = !o
    }), m = function(t) {
        x.head || n(), x.add(t)
    }
}
t.exports = m