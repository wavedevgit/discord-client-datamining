/** Chunk was on 97262 **/
/** chunk id: 847767, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => a
});
var n = i(627968);
i(64700);
var l = i(820284);

function a(t, e) {
    return function(i) {
        return (0, n.jsx)(l.A, {
            page: e.page,
            section: e.section,
            object: e.object,
            objectType: e.objectType,
            children: (0, n.jsx)(t, function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable
                    }))), n.forEach(function(e) {
                        var n;
                        n = i[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    })
                }
                return t
            }({}, i))
        })
    }
}