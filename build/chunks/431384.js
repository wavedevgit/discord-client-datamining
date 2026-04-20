/** chunk id: 431384 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => A
});
var a = r(26412),
    n = r(658),
    o = r(527758),
    s = r(552932),
    i = r(865977),
    c = r(761847),
    l = r(416886),
    u = r(25701),
    f = r(1139),
    b = r(64700),
    d = r(223108),
    h = r.n(d),
    p = r(708906),
    m = r(770237),
    g = r(380883),
    y = r(257341);

function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), r.push.apply(r, a)
    }
    return r
}

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? v(Object(r), !0).forEach(function(t) {
            (0, l.A)(e, t, r[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        })
    }
    return e
}

function M(e) {
    return {
        expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level)
    }
}
var A = function(e) {
    (0, s.A)(d, e);
    var t, r = (t = function() {
        if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch (e) {
            return !1
        }
    }(), function() {
        var e, r = (0, c.A)(d);
        return e = t ? Reflect.construct(r, arguments, (0, c.A)(this).constructor) : r.apply(this, arguments), (0, i.A)(this, e)
    });

    function d(e) {
        var t;
        return (0, a.A)(this, d), t = r.call(this, e), (0, l.A)((0, o.A)(t), "handleClick", function() {
            t.props.expandable && t.setState({
                expanded: !t.state.expanded
            })
        }), t.state = M(e), t
    }
    return (0, n.A)(d, [{
        key: "UNSAFE_componentWillReceiveProps",
        value: function(e) {
            var t = M(e);
            M(this.props).expanded !== t.expanded && this.setState(t)
        }
    }, {
        key: "shouldComponentUpdate",
        value: function(e, t) {
            var r = this;
            return !!Object.keys(e).find(function(t) {
                return "circularCache" !== t && ("keyPath" === t ? e[t].join("/") !== r.props[t].join("/") : e[t] !== r.props[t])
            }) || t.expanded !== this.state.expanded
        }
    }, {
        key: "render",
        value: function() {
            var e = this.props,
                t = e.getItemString,
                r = e.nodeTypeIndicator,
                a = e.nodeType,
                n = e.data,
                o = e.hideRoot,
                s = e.createItemString,
                i = e.styling,
                c = e.collectionLimit,
                l = e.keyPath,
                d = e.labelRenderer,
                h = e.expandable,
                v = this.state.expanded,
                M = v || o && 0 === this.props.level ? function e(t, r, a) {
                    var n = t.nodeType,
                        o = t.data,
                        s = t.collectionLimit,
                        i = t.circularCache,
                        c = t.keyPath,
                        l = t.postprocessValue,
                        d = t.sortObjectKeys,
                        h = [];
                    return (0, m.A)(n, o, d, s, r, a).forEach(function(r) {
                        if (void 0 !== r.to) h.push(b.createElement(y.A, (0, f.A)({}, t, {
                            key: "ItemRange--".concat(r.from, "-").concat(r.to),
                            from: r.from,
                            to: r.to,
                            renderChildNodes: e
                        })));
                        else {
                            var a = r.key,
                                n = r.value,
                                o = -1 !== i.indexOf(n);
                            h.push(b.createElement(g.A, (0, f.A)({}, t, {
                                postprocessValue: l,
                                collectionLimit: s,
                                key: "Node--".concat(a),
                                keyPath: [a].concat((0, u.A)(c)),
                                value: l(n),
                                circularCache: [].concat((0, u.A)(i), [n]),
                                isCircular: o,
                                hideRoot: !1
                            })))
                        }
                    }), h
                }(w(w({}, this.props), {}, {
                    level: this.props.level + 1
                })) : null,
                A = t(a, n, b.createElement("span", i("nestedNodeItemType", v), r), s(n, c), l),
                O = [l, a, v, h];
            return o ? b.createElement("li", i.apply(void 0, ["rootNode"].concat(O)), b.createElement("ul", i.apply(void 0, ["rootNodeChildren"].concat(O)), M)) : b.createElement("li", i.apply(void 0, ["nestedNode"].concat(O)), h && b.createElement(p.A, {
                styling: i,
                nodeType: a,
                expanded: v,
                onClick: this.handleClick
            }), b.createElement("label", (0, f.A)({}, i.apply(void 0, [
                ["label", "nestedNodeLabel"]
            ].concat(O)), {
                onClick: this.handleClick
            }), d.apply(void 0, O)), b.createElement("span", (0, f.A)({}, i.apply(void 0, ["nestedNodeItemString"].concat(O)), {
                onClick: this.handleClick
            }), A), b.createElement("ul", i.apply(void 0, ["nestedNodeChildren"].concat(O)), M))
        }
    }]), d
}(b.Component);
(0, l.A)(A, "propTypes", {
    getItemString: h().func.isRequired,
    nodeTypeIndicator: h().any,
    nodeType: h().string.isRequired,
    data: h().any,
    hideRoot: h().bool.isRequired,
    createItemString: h().func.isRequired,
    styling: h().func.isRequired,
    collectionLimit: h().number,
    keyPath: h().arrayOf(h().oneOfType([h().string, h().number])).isRequired,
    labelRenderer: h().func.isRequired,
    shouldExpandNode: h().func,
    level: h().number.isRequired,
    sortObjectKeys: h().oneOfType([h().func, h().bool]),
    isCircular: h().bool,
    expandable: h().bool
}), (0, l.A)(A, "defaultProps", {
    data: [],
    circularCache: [],
    level: 0,
    expandable: !0
})