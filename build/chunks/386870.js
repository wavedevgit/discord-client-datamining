/** chunk id: 386870 params = (module,exports,require) **/
"use strict";
var s = t(436701);

function o() {}

function i() {}
i.resetWarningCache = o, e.exports = function() {
    function e(e, r, t, o, i, n) {
        if (n !== s) {
            var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw a.name = "Invariant Violation", a
        }
    }

    function r() {
        return e
    }
    e.isRequired = e;
    var t = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: r,
        element: e,
        elementType: e,
        instanceOf: r,
        node: e,
        objectOf: r,
        oneOf: r,
        oneOfType: r,
        shape: r,
        exact: r,
        checkPropTypes: i,
        resetWarningCache: o
    };
    return t.PropTypes = t, t
}