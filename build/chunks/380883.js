/** chunk id: 380883 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => y
});
var a = r(1139),
    n = r(416886),
    o = r(106526),
    s = r(64700),
    i = r(223108),
    c = r.n(i),
    l = r(189776),
    u = r(531228),
    f = r(609822),
    b = r(790777),
    d = r(1514),
    h = ["getItemString", "keyPath", "labelRenderer", "styling", "value", "valueRenderer", "isCustomNode"];

function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), r.push.apply(r, a)
    }
    return r
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p(Object(r), !0).forEach(function(t) {
            (0, n.A)(e, t, r[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        })
    }
    return e
}
var g = function(e) {
    var t = e.getItemString,
        r = e.keyPath,
        n = e.labelRenderer,
        i = e.styling,
        c = e.value,
        p = e.valueRenderer,
        g = e.isCustomNode,
        y = (0, o.A)(e, h),
        v = g(c) ? "Custom" : (0, l.A)(c),
        w = {
            getItemString: t,
            key: r[0],
            keyPath: r,
            labelRenderer: n,
            nodeType: v,
            styling: i,
            value: c,
            valueRenderer: p
        },
        M = m(m(m({}, y), w), {}, {
            data: c,
            isCustomNode: g
        });
    switch (v) {
        case "Object":
        case "Error":
        case "WeakMap":
        case "WeakSet":
            return s.createElement(u.A, M);
        case "Array":
            return s.createElement(f.A, M);
        case "Iterable":
        case "Map":
        case "Set":
            return s.createElement(b.A, M);
        case "String":
            return s.createElement(d.A, (0, a.A)({}, w, {
                valueGetter: function(e) {
                    return '"'.concat(e, '"')
                }
            }));
        case "Number":
        case "Custom":
            return s.createElement(d.A, w);
        case "Boolean":
            return s.createElement(d.A, (0, a.A)({}, w, {
                valueGetter: function(e) {
                    return e ? "true" : "false"
                }
            }));
        case "Date":
            return s.createElement(d.A, (0, a.A)({}, w, {
                valueGetter: function(e) {
                    return e.toISOString()
                }
            }));
        case "Null":
            return s.createElement(d.A, (0, a.A)({}, w, {
                valueGetter: function() {
                    return "null"
                }
            }));
        case "Undefined":
            return s.createElement(d.A, (0, a.A)({}, w, {
                valueGetter: function() {
                    return "undefined"
                }
            }));
        case "Function":
        case "Symbol":
            return s.createElement(d.A, (0, a.A)({}, w, {
                valueGetter: function(e) {
                    return e.toString()
                }
            }));
        default:
            return s.createElement(d.A, (0, a.A)({}, w, {
                valueGetter: function() {
                    return "<".concat(v, ">")
                }
            }))
    }
};
g.propTypes = {
    getItemString: c().func.isRequired,
    keyPath: c().arrayOf(c().oneOfType([c().string, c().number]).isRequired).isRequired,
    labelRenderer: c().func.isRequired,
    styling: c().func.isRequired,
    value: c().any,
    valueRenderer: c().func.isRequired,
    isCustomNode: c().func.isRequired
};
let y = g