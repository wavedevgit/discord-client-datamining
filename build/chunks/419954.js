/** chunk id: 419954 params = (module,exports,require) **/
n.d(t, {
    AK: () => b,
    D1: () => m,
    E2: () => I,
    FW: () => p,
    Hn: () => f,
    Hr: () => a,
    Qx: () => N,
    Tf: () => T,
    WI: () => r,
    bd: () => g,
    dT: () => c,
    eA: () => A,
    gN: () => h,
    hl: () => s,
    i4: () => o,
    sN: () => C,
    t_: () => d,
    v_: () => E,
    zC: () => u,
    zD: () => S,
    zZ: () => _
});
var i = n(963935);

function s(e) {
    return function e(t) {
        if ("buildLayout" in t && "function" == typeof t.buildLayout) {
            let n = t.buildLayout().map(e),
                {
                    buildLayout: i,
                    ...s
                } = t,
                l = {
                    ...s,
                    layout: n
                };
            return n.forEach(e => e.parent = l), l
        }
        return t
    }(e)
}

function l(e, t, n) {
    return {
        ...n,
        key: e,
        type: t
    }
}

function a(e) {
    return l("$Root", i.Z6.ROOT, e)
}

function r(e, t) {
    return l(e, i.Z6.SECTION, t)
}

function o(e, t) {
    return l(e, i.Z6.SIDEBAR_ITEM, t)
}

function d(e, t) {
    return l(e, i.Z6.PANEL, t)
}

function c(e, t) {
    return l(e, i.Z6.TAB_ITEM, t)
}

function u(e, t) {
    return l(e, i.Z6.SPLIT, t)
}

function _(e, t) {
    return l(e, i.Z6.CATEGORY, t)
}

function g(e, t) {
    return l(e, i.Z6.ACCORDION, t)
}

function m(e, t) {
    return l(e, i.Z6.LIST, t)
}

function A(e, t) {
    return l(e, i.Z6.NESTED_PANEL, t)
}

function h(e, t) {
    return l(e, i.Z6.RELATED, t)
}

function p(e, t) {
    return l(e, i.Z6.FIELD_SET, t)
}

function x(e, t, n) {
    return {
        ...n,
        key: e,
        type: t
    }
}

function E(e, t) {
    return x(e, i.Z6.STATIC, t)
}

function T(e, t) {
    return x(e, i.Z6.BUTTON, t)
}

function S(e, t) {
    return x(e, i.Z6.TOGGLE, t)
}

function C(e, t) {
    return x(e, i.Z6.SLIDER, t)
}

function f(e, t) {
    return x(e, i.Z6.SELECT, t)
}

function N(e, t) {
    return x(e, i.Z6.RADIO, t)
}

function b(e, t) {
    return x(e, i.Z6.NAVIGATOR, t)
}

function I(e, t) {
    return x(e, i.Z6.CUSTOM, t)
}