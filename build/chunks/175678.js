/** chunk id: 175678 params = (module,exports,require) **/
r.d(t, {
    A: () => s
});
var n = r(944181),
    a = r(597807),
    l = r(763424),
    i = r(292177);
let s = {
    id: "aria-attribute-valid-value",
    selector: i.vN,
    tags: [],
    metadata: {
        description: "ARIA attributes must use valid values",
        help: ""
    },
    check: function(e) {
        let t = function(e) {
            for (let y of i.ye)
                if (e.hasAttribute(y)) {
                    let i = e.getAttribute(y),
                        $ = n.aria.get(y);
                    switch ($.type) {
                        case "string":
                            return l.o;
                        case "id":
                            return t = y, r = i, null == document.getElementById(r) ? `${t} references #${r} which does not exist` : l.o;
                        case "idlist":
                            var t, r, a, s, o, u, c, d, f, h = y,
                                b = i,
                                m = e;
                            if ("aria-controls" === h && ("false" === m.getAttribute("aria-expanded") || "false" === m.getAttribute("aria-selected")) || "aria-owns" === h && "false" === m.getAttribute("aria-expanded")) return l.o;
                            for (let e of b.split(" "))
                                if (null == document.getElementById(e)) return `${h} references #${b} which does not exist`;
                            return l.o;
                        case "integer":
                            return a = y, String(parseInt(s = i, 10)) !== s ? `${a} requires an integer but got ${s}` : l.o;
                        case "number":
                            return o = y, isFinite(u = i) ? l.o : `${o} requires a numeric value but got ${u}`;
                        case "boolean":
                            return c = y, d = i, f = $, "true" === d || "false" === d || "" === d && !0 === f.allowundefined ? l.o : `${c} must be either "true" or "false"`;
                        case "token":
                            return function(e, t, r) {
                                let n = function(e) {
                                    switch (e) {
                                        case "true":
                                            return !0;
                                        case "false":
                                            return !1;
                                        default:
                                            return e
                                    }
                                }(t);
                                return r.values?.includes(n) ? l.o : `${e} was ${t} but must be: ${r.values?.join(", ")}`
                            }(y, i, $);
                        case "tokenlist":
                            var p = y,
                                g = i,
                                v = $;
                            for (let e of g.split(" "))
                                if (!v.values?.includes(e)) return `${p} included ${g} but is restricted to: ${v.values?.join(", ")}`;
                            return l.o;
                        case "tristate":
                            var A = y,
                                w = i;
                            switch (w) {
                                case "true":
                                case "false":
                                case "mixed":
                                    return l.o;
                                default:
                                    return `${A} must be "true", "false", or "mixed" not ${w}`
                            }
                    }
                } return l.o
        }(e);
        return t !== l.o && ((0, i.i6)(e) || !(0, a.z)(e)) ? l.o : t
    }
}