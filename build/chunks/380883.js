/** chunk id: 380883 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => g
});
var a = r(1139),
    n = r(416886),
    o = r(106526),
    s = r(64700),
    i = r(223108),
    c = r.n(i),
    l = r(189776),
    u = r(531228),
    b = r(609822),
    f = r(790777),
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

function y(e) {
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
var v = function(e) {
    var t = e.getItemString,
        r = e.keyPath,
        n = e.labelRenderer,
        i = e.styling,
        c = e.value,
        p = e.valueRenderer,
        v = e.isCustomNode,
        g = (0, o.A)(e, h),
        m = v(c) ? "Custom" : (0, l.A)(c),
        A = {
            getItemString: t,
            key: r[0],
            keyPath: r,
            labelRenderer: n,
            nodeType: m,
            styling: i,
            value: c,
            valueRenderer: p
        },
        w = y(y(y({}, g), A), {}, {
            data: c,
            isCustomNode: v
        });
    switch (m) {
        case "Object":
        case "Error":
        case "WeakMap":
        case "WeakSet":
            return s.createElement(u.A, w);
        case "Array":
            return s.createElement(b.A, w);
        case "Iterable":
        case "Map":
        case "Set":
            return s.createElement(f.A, w);
        case "String":
            return s.createElement(d.A, (0, a.A)({}, A, {
                valueGetter: function(e) {
                    return '"'.concat(e, '"')
                }
            }));
        case "Number":
        case "Custom":
            return s.createElement(d.A, A);
        case "Boolean":
            return s.createElement(d.A, (0, a.A)({}, A, {
                valueGetter: function(e) {
                    return e ? "true" : "false"
                }
            }));
        case "Date":
            return s.createElement(d.A, (0, a.A)({}, A, {
                valueGetter: function(e) {
                    return e.toISOString()
                }
            }));
        case "Null":
            return s.createElement(d.A, (0, a.A)({}, A, {
                valueGetter: function() {
                    return "null"
                }
            }));
        case "Undefined":
            return s.createElement(d.A, (0, a.A)({}, A, {
                valueGetter: function() {
                    return "undefined"
                }
            }));
        case "Function":
        case "Symbol":
            return s.createElement(d.A, (0, a.A)({}, A, {
                valueGetter: function(e) {
                    return e.toString()
                }
            }));
        default:
            return s.createElement(d.A, (0, a.A)({}, A, {
                valueGetter: function() {
                    return "<".concat(m, ">")
                }
            }))
    }
};
v.propTypes = {
    getItemString: c().func.isRequired,
    keyPath: c().arrayOf(c().oneOfType([c().string, c().number]).isRequired).isRequired,
    labelRenderer: c().func.isRequired,
    styling: c().func.isRequired,
    value: c().any,
    valueRenderer: c().func.isRequired,
    isCustomNode: c().func.isRequired
};
let g = v