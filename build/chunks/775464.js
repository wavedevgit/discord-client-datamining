/** chunk id: 775464, original params: t,e,r (module,exports,require) **/
"use strict";
r.d(e, {
    z: () => l
});
var s = r(887525),
    i = r(128377),
    n = r(875565),
    o = r(75109);
class a {
    constructor(t, e) {
        let r, s;
        r = t || new i.H, s = e || new i.H, this._stack = [{
            scope: r
        }], this._isolationScope = s
    }
    withScope(t) {
        let e, r = this._pushScope();
        try {
            e = t(r)
        } catch (t) {
            throw this._popScope(), t
        }
        return (0, n.Qg)(e) ? e.then(t => (this._popScope(), t), t => {
            throw this._popScope(), t
        }) : (this._popScope(), e)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    _pushScope() {
        let t = this.getScope().clone();
        return this._stack.push({
            client: this.getClient(),
            scope: t
        }), t
    }
    _popScope() {
        return !(this._stack.length <= 1) && !!this._stack.pop()
    }
}

function c() {
    let t = (0, o.E)(),
        e = (0, o.S)(t);
    return e.stack = e.stack || new a((0, s.r)(), (0, s.q)())
}

function u(t) {
    return c().withScope(t)
}

function h(t, e) {
    let r = c();
    return r.withScope(() => (r.getStackTop().scope = t, e(t)))
}

function d(t) {
    return c().withScope(() => t(c().getIsolationScope()))
}

function l() {
    return {
        withIsolationScope: d,
        withScope: u,
        withSetScope: h,
        withSetIsolationScope: (t, e) => d(e),
        getCurrentScope: () => c().getScope(),
        getIsolationScope: () => c().getIsolationScope()
    }
}