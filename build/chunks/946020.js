/** Chunk was on web.js **/
/** chunk id: 946020, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Wc: () => f,
    gY: () => u
});
var r = n(805447),
    i = n(628024),
    a = n(754279),
    o = n(434067),
    s = n(533715),
    l = n(803082),
    c = n(64700);
let u = c.createContext(null);

function d(e) {
    let t = (0, c.useContext)(u) || {};
    (0, o.w)(t, e);
    let {
        ref: n,
        ...r
    } = t;
    return r
}

function f(e, t) {
    let {
        focusProps: n
    } = (0, i.i)(e), {
        keyboardProps: o
    } = (0, a.d)(e), s = (0, l.v)(n, o), u = d(t), f = e.isDisabled ? {} : u, p = (0, c.useRef)(e.autoFocus);
    (0, c.useEffect)(() => {
        p.current && t.current && (0, r.l)(t.current), p.current = !1
    }, [t]);
    let _ = e.excludeFromTabOrder ? -1 : 0;
    return e.isDisabled && (_ = void 0), {
        focusableProps: (0, l.v)({
            ...s,
            tabIndex: _
        }, f)
    }
}
c.forwardRef(function(e, t) {
    let {
        children: n,
        ...r
    } = e, i = (0, s.U)(t), a = {
        ...r,
        ref: i
    };
    return c.createElement(u.Provider, {
        value: a
    }, n)
})